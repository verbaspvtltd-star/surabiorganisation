document.addEventListener('DOMContentLoaded',function(){
var hv=document.querySelector('.hv');if(hv&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){hv.removeAttribute('autoplay');hv.pause()}else if(hv){hv.muted=true;hv.defaultMuted=true;hv.setAttribute('playsinline','');var pr=hv.play();if(pr&&pr.catch){pr.catch(function(){['touchstart','click','scroll'].forEach(function(t){document.addEventListener(t,function(){hv.play()},{once:true,passive:true})})})}}
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
document.querySelectorAll('form[data-form]').forEach(function(f){
var cold=['Pharmaceuticals','Agricultural produce','Fruits and vegetables','Frozen foods'];
var s=f.querySelector('[name=service]'),c=f.querySelector('[name=cargo]'),box=f.querySelector('.cond');
function tog(){if(!box)return;var on=(s&&s.value==='Cold Chain Logistics')||(c&&cold.indexOf(c.value)>-1);box.classList.toggle('show',on)}
if(s)s.addEventListener('change',tog);if(c)c.addEventListener('change',tog);
function err(el,m){var e=el.parentNode.querySelector('.err');if(e)e.textContent=m||'';el.classList.toggle('bad',!!m);if(el.setAttribute)el.setAttribute('aria-invalid',!!m)}
f.addEventListener('submit',function(ev){ev.preventDefault();var ok=true,first=null;
f.querySelectorAll('[required]').forEach(function(el){var v=el.value.trim(),m='';
if(!v)m='This field is required.';
else if(el.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))m='Enter a valid email address.';
else if(el.type==='tel'&&!/^[+()\d\s-]{7,16}$/.test(v))m='Enter a valid phone number (digits, +, spaces, dashes).';
err(el,m);if(m){ok=false;first=first||el}});
if(ok){f.style.display='none';var o=document.getElementById('ok');o.classList.add('show');o.focus()}else first.focus()})})});