import { mkdir, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const run=(command,args,options={})=>{
  const result=spawnSync(command,args,{cwd:root,encoding:'utf8',...options});
  if(result.status!==0)throw Error(`${command} failed: ${result.stderr||result.stdout}`);
  return result.stdout.trim();
};
if(run('git',['status','--porcelain']))throw Error('Commit the release source before packaging.');
const commit=run('git',['rev-parse','HEAD']);
run(process.execPath,['scripts/build.mjs']);
run(process.execPath,['scripts/check.mjs']);
const build=JSON.parse(await readFile(path.join(root,'dist/build-info.json'),'utf8'));
async function files(directory){return(await Promise.all((await readdir(directory,{withFileTypes:true})).map(e=>e.isDirectory()?files(path.join(directory,e.name)):[path.join(directory,e.name)]))).flat();}
const hashes={};
for(const file of (await files(path.join(root,'dist'))).sort()){
  const relative=path.relative(path.join(root,'dist'),file).replaceAll(path.sep,'/');
  if(relative==='release.json')continue;
  hashes[relative]=createHash('sha256').update(await readFile(file)).digest('hex');
}
const manifest={site:'SCREENERS.CA',sourceCommit:commit,quoteTransport:build.quoteTransport,localizedPages:build.localizedPages,sha256:hashes};
await writeFile(path.join(root,'dist/release.json'),JSON.stringify(manifest,null,2),{mode:0o644});
const releaseDir=path.join(root,'work/releases');
await mkdir(releaseDir,{recursive:true});
const archive=path.join(releaseDir,`screeners-ca-${commit.slice(0,8)}.zip`);
run('zip',['-qr',archive,'.'],{cwd:path.join(root,'dist')});
const digest=createHash('sha256').update(await readFile(archive)).digest('hex');
await writeFile(`${archive}.sha256`,`${digest}  ${path.basename(archive)}\n`);
console.log(JSON.stringify({archive,sha256:digest,sourceCommit:commit,bytes:(await stat(archive)).size,quoteTransport:build.quoteTransport},null,2));
