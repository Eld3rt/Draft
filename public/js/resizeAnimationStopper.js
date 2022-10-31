{
	let resizeTimer;
	const headerNav = document.querySelector('.tiers__tier');
	window.addEventListener("resize", () => {
		headerNav.classList.add('resize-animation-stopper');
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			headerNav.classList.remove('resize-animation-stopper');
		}, 100);
	});
}