const whirlpoolScriptUrl = document.currentScript.src;
(async function(){
const ua=navigator.userAgent;
const platform=/Macintosh/.test(ua)?['https://cdn.simpleicons.org/apple/000000','Apple']:/Linux|X11/.test(ua)&&!/Android/.test(ua)?['https://img.icons8.com/color/48/linux--v1.png','Linux']:null;
if(platform)document.querySelectorAll('img[alt="Windows"]').forEach(img=>{if(img.closest('.pricing-cta,.whirlpool-computer-icons')){img.src=platform[0];img.alt=platform[1];}});
window.initializeWhirlpoolHeader();
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const trigger=document.querySelector('.dropdown-trigger');trigger.classList.remove('active');trigger.setAttribute('aria-expanded','false');}});
document.querySelector('.footer-bottom p').innerHTML=document.querySelector('.footer-bottom p').innerHTML.replace(/2026/,new Date().getFullYear());
const vortex=document.createElement('script');vortex.src=new URL('vortex.js',whirlpoolScriptUrl);document.body.append(vortex);
})().catch(console.error);

document.querySelector('.language-pause')?.addEventListener('click',event=>{const button=event.currentTarget;const paused=button.closest('.leafpad-languages').classList.toggle('is-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?button.dataset.resume:button.dataset.pause;});
