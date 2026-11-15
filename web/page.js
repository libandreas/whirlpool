const whirlpoolGreekUrl=new URL('page-el.html',document.currentScript.src);
(async function(){
const greek=new URLSearchParams(location.search).get('lang')==='el';
if(greek){const response=await fetch(whirlpoolGreekUrl);if(!response.ok)throw new Error('Greek page unavailable');document.body.innerHTML=await response.text();document.documentElement.lang='el';document.title="Ανακαλύψτε τι περιέχουν τα αρχεία σας / Εργαστείτε εξυπνότερα στον περιηγητή σας";document.querySelector('meta[name="description"]').content="Βρείτε παρόμοιες λέξεις, σχετικούς όρους, ονόματα και αριθμούς στα έγγραφά σας. Αναζητήστε σε σαρωμένες εικόνες με OCR, τοπικά στον υπολογιστή σας.";}
const ua=navigator.userAgent;
const platform=/Macintosh/.test(ua)?['https://cdn.simpleicons.org/apple/000000','Apple']:/Linux|X11/.test(ua)&&!/Android/.test(ua)?['https://img.icons8.com/color/48/linux--v1.png','Linux']:null;
if(platform)document.querySelectorAll('img[alt="Windows"]').forEach(img=>{if(img.closest('.pricing-cta,.whirlpool-computer-icons')){img.src=platform[0];img.alt=platform[1];}});
window.initializeWhirlpoolHeader();
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const trigger=document.querySelector('.dropdown-trigger');trigger.classList.remove('active');trigger.setAttribute('aria-expanded','false');}});
document.querySelector('.footer-bottom p').innerHTML=document.querySelector('.footer-bottom p').innerHTML.replace(/2026/,new Date().getFullYear());
const vortex=document.createElement('script');vortex.src=new URL('vortex.js',whirlpoolGreekUrl);document.body.append(vortex);
})().catch(console.error);
