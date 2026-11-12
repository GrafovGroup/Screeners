import { validateQuote, formatQuote } from './quote.mjs';
document.documentElement.classList.add('js');
const menuButton=document.querySelector('.menu-toggle'), nav=document.querySelector('#primary-nav');
if(menuButton&&nav){
 const close=()=>{menuButton.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
 menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){close();menuButton.focus();}});
 nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
}
const form=document.querySelector('.quote-form');
if(form){
 const french=form.dataset.lang==='fr', t=(en,fr)=>french?fr:en;
 const status=document.querySelector('#form-status'), summary=document.querySelector('#form-errors'), result=document.querySelector('#email-result');
 form.noValidate=true;
 const labelFor=name=>form.querySelector(`label[for="${name}"]`)?.textContent.replace('*','').trim()||name;
 const showErrors=errors=>{
  summary.replaceChildren();
  const heading=document.createElement('p');heading.textContent=t('Please review these fields:','Veuillez vérifier les champs suivants :');summary.append(heading);
  const list=document.createElement('ul');
  for(const [name,code]of Object.entries(errors)){
   if(name==='website'||name==='lang')continue;
   const field=form.elements.namedItem(name);field?.setAttribute('aria-invalid','true');
   const li=document.createElement('li'), a=document.createElement('a');a.href=`#${name}`;
   const message=code==='required'?t('This field is required.','Ce champ est obligatoire.'):code==='email'?t('Enter a valid email address.','Entrez une adresse courriel valide.'):code==='phone'?t('Enter a phone number with 7–20 digits.','Entrez un numéro de 7 à 20 chiffres.'):code==='consent'?t('Your consent is required.','Votre consentement est requis.'):code==='too_long'?t('This entry is too long.','Ce texte est trop long.'):code==='invalid_text'?t('Remove unsupported control characters.','Retirez les caractères de contrôle non pris en charge.'):t('Choose a valid option.','Choisissez une option valide.');
   a.textContent=`${labelFor(name)}: ${message}`;a.addEventListener('click',()=>field?.focus());li.append(a);list.append(li);
  }
  summary.append(list);summary.hidden=false;summary.focus();
 };
 form.addEventListener('input',event=>{event.target.removeAttribute('aria-invalid');result.hidden=true;status.textContent='';});
 form.addEventListener('submit',async event=>{
  event.preventDefault();summary.hidden=true;status.textContent='';status.className='';result.hidden=true;
  form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  const raw=Object.fromEntries(new FormData(form)), checked=validateQuote(raw);
  if(!checked.valid){showErrors(checked.errors);return;}
  if(form.dataset.transport==='email'){
   const labels={};const display={...checked.data};
   for(const [name]of Object.entries(checked.data)){labels[name]=labelFor(name);const el=form.elements.namedItem(name);if(el?.tagName==='SELECT')display[name]=el.selectedOptions[0].textContent;}
   const body=formatQuote(display,labels), subject=t('Screening project enquiry','Demande de projet de criblage');
   document.querySelector('#email-link').href=`mailto:info@screeners.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
   document.querySelector('#email-body').value=body;result.hidden=false;status.textContent=t('Email draft prepared. Your enquiry has not been sent.','Brouillon préparé. Votre demande n’a pas été envoyée.');result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
   return;
  }
  const button=form.querySelector('[type="submit"]');button.disabled=true;const original=button.textContent;button.textContent=t('Sending…','Envoi…');
  try{
   const response=await fetch(form.action,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},credentials:'same-origin',body:JSON.stringify(checked.data),signal:AbortSignal.timeout(20000)});
   const payload=await response.json();
   if(!response.ok||payload.ok!==true)throw Error('not-accepted');
   status.className='form-status-success';status.textContent=t('Your enquiry was accepted by our mail system for forwarding. Inbox delivery is not guaranteed. You can contact info@screeners.ca if you need to confirm receipt.','Votre demande a été acceptée par notre système de messagerie pour transmission. La livraison dans la boîte de réception n’est pas garantie. Écrivez à info@screeners.ca pour confirmer la réception.');
   form.reset();
  }catch{
   status.className='form-status-error';status.replaceChildren();const message=document.createElement('p');message.textContent=t('We could not confirm submission. Your details remain in the form. Email info@screeners.ca or call (833) 696-9996.','Nous n’avons pas pu confirmer l’envoi. Vos renseignements restent dans le formulaire. Écrivez à info@screeners.ca ou composez le (833) 696-9996.');status.append(message);const a=document.createElement('a');a.href='mailto:info@screeners.ca';a.textContent='info@screeners.ca';status.append(a);
  }finally{button.disabled=false;button.textContent=original;}
 });
 document.querySelector('#copy-enquiry')?.addEventListener('click',async()=>{
  const box=document.querySelector('#email-body');
  try{await navigator.clipboard.writeText(box.value);status.textContent=t('Enquiry text copied. Paste it into an email to info@screeners.ca.','Demande copiée. Collez-la dans un courriel à info@screeners.ca.');}
  catch{box.focus();box.select();status.textContent=t('Select and copy the enquiry text, then paste it into your email.','Sélectionnez et copiez le texte, puis collez-le dans votre courriel.');}
 });
}
