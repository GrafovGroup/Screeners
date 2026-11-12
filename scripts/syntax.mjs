import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
async function walk(dir){return(await Promise.all((await readdir(dir,{withFileTypes:true})).filter(e=>!['node_modules','dist','.git'].includes(e.name)).map(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat();}
const files=(await walk(root)).filter(f=>/\.(?:js|mjs)$/.test(f));
for(const file of files){const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(result.status!==0){process.stderr.write(result.stderr);process.exit(result.status??1);}}
console.log(`JavaScript syntax valid in ${files.length} files. This is not a TypeScript typecheck.`);
