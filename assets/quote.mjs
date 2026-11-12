export const requiredFields = ['name','company','email','phone','province','city','inquiry_type','equipment_type','material','timeline','delivery_location','description','consent'];
export const provinces = ['AB','BC','MB','NB','NL','NS','NT','NU','ON','PE','QC','SK','YT'];
export const inquiryTypes = ['buy','rent','parts','service','on-site'];
export const equipmentTypes = ['mobile-screeners','trommel-screeners','vibrating-screeners','scalping-screeners','compact-screeners','stationary-screening-plants','screening-conveyors','unsure'];
export function normalizeQuote(raw) {
  return Object.fromEntries([...requiredFields,'throughput','website','lang'].map(key=>[key,typeof raw[key]==='string'?raw[key].trim():'']));
}
export function validateQuote(raw) {
  const data=normalizeQuote(raw), errors={};
  for(const key of requiredFields) if(!data[key]) errors[key]='required';
  for(const [key,value] of Object.entries(data)) if(value.length>(key==='description'?5000:300)) errors[key]='too_long';
  for(const [key,value] of Object.entries(data)) if(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) errors[key]='invalid_text';
  if(data.email&&!/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(data.email)) errors.email='email';
  if(data.phone&&(data.phone.replace(/\D/g,'').length<7||data.phone.replace(/\D/g,'').length>20)) errors.phone='phone';
  if(data.province&&!provinces.includes(data.province)) errors.province='option';
  if(data.inquiry_type&&!inquiryTypes.includes(data.inquiry_type)) errors.inquiry_type='option';
  if(data.equipment_type&&!equipmentTypes.includes(data.equipment_type)) errors.equipment_type='option';
  if(data.consent!=='yes') errors.consent='consent';
  if(!['en','fr'].includes(data.lang)) errors.lang='option';
  if(data.website) errors.website='spam';
  return {data,errors,valid:Object.keys(errors).length===0};
}
export function formatQuote(data, labels={}) {
 const heading=data.lang==='fr'?'Demande SCREENERS.CA':'SCREENERS.CA enquiry';
 return `${heading}\n\n${requiredFields.filter(k=>k!=='consent').concat('throughput').map(key=>`${labels[key]??key}: ${data[key]||'—'}`).join('\n\n')}\n\n${data.lang==='fr'?'Consentement : analyse de la demande et réponse autorisées.':'Consent: use of these details to assess and respond to this enquiry is authorized.'}`;
}
