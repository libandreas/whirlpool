window.initializeWhirlpoolHeader();
document.addEventListener('keydown', event => {
 if (event.key !== 'Escape') return;
 const trigger = document.querySelector('.dropdown-trigger');
 trigger.classList.remove('active');
 trigger.setAttribute('aria-expanded', 'false');
});
const copyright = document.querySelector('.footer-bottom p');
copyright.innerHTML = copyright.innerHTML.replace(/2026/, new Date().getFullYear());
