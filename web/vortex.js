const whirlpoolSection = document.querySelector('.whirlpool-search-sections');
const whirlpoolReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let whirlpoolScrollFrame = 0;
let whirlpoolCurrentAngle = 0;
let whirlpoolTargetAngle = 0;
let whirlpoolLastFrameTime = 0;

function updateWhirlpoolVortex() {
	const bounds = whirlpoolSection.getBoundingClientRect();
	whirlpoolTargetAngle = whirlpoolReducedMotion.matches ? 0 : (window.innerHeight - bounds.top) * 0.22;
	if (whirlpoolReducedMotion.matches) {
		cancelAnimationFrame(whirlpoolScrollFrame);
		whirlpoolScrollFrame = 0;
		whirlpoolCurrentAngle = 0;
		whirlpoolSection.style.setProperty('--vortex-angle', '0deg');
		return;
	}
	if (!whirlpoolScrollFrame) {
		whirlpoolLastFrameTime = performance.now();
		whirlpoolScrollFrame = requestAnimationFrame(animateWhirlpoolVortex);
	}
}

function animateWhirlpoolVortex(time) {
	const elapsed = Math.min(time - whirlpoolLastFrameTime, 64);
	whirlpoolLastFrameTime = time;
	whirlpoolCurrentAngle += (whirlpoolTargetAngle - whirlpoolCurrentAngle) * (1 - Math.exp(-elapsed / 450));
	const settled = Math.abs(whirlpoolTargetAngle - whirlpoolCurrentAngle) < 0.002;
	if (settled) whirlpoolCurrentAngle = whirlpoolTargetAngle;
	whirlpoolSection.style.setProperty('--vortex-angle', whirlpoolCurrentAngle + 'deg');
	whirlpoolScrollFrame = settled ? 0 : requestAnimationFrame(animateWhirlpoolVortex);
}

window.addEventListener('scroll', updateWhirlpoolVortex, { passive: true });
window.addEventListener('resize', updateWhirlpoolVortex);
whirlpoolReducedMotion.addEventListener('change', updateWhirlpoolVortex);
whirlpoolCurrentAngle = whirlpoolReducedMotion.matches ? 0 : (window.innerHeight - whirlpoolSection.getBoundingClientRect().top) * 0.22;
whirlpoolSection.style.setProperty('--vortex-angle', whirlpoolCurrentAngle + 'deg');
updateWhirlpoolVortex();
