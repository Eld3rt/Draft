function card(innerClassName, selectorClassName, shapeClassName, activeClass) {
	let inner = document.querySelector(innerClassName);
	let selectors = document.querySelectorAll(selectorClassName);
	let shapes = document.querySelectorAll(shapeClassName);

	inner.addEventListener('click', (e) => {
		const target = e.target.closest(selectorClassName);
		function showCard(name, value1, value2, value3, value4) {
			shapes.forEach((item, i) => {
				if (target == selectors[0] || target == selectors[1]) {
					shapes[0].setAttribute(name, value1);
					shapes[1].setAttribute(name, value2);
					shapes[2].setAttribute(name, value3);
					shapes[3].setAttribute(name, value4);
				} else {
					shapes[4].setAttribute(name, value1);
					shapes[5].setAttribute(name, value2);
					shapes[6].setAttribute(name, value3);
					shapes[7].setAttribute(name, value4);
				}
			});
		}
	
		function onSelector (i) {
			selectors[i].classList.remove(activeClass);
		}
	
		function offSelector (i) {
			selectors[i].classList.add(activeClass);
		}

		if (!target) return;
		if (!inner.contains(target)) return;
		if (target) {
			e.preventDefault();
			selectors.forEach((item, i) => {
				if (target == selectors[0] || target == selectors[2]) {
					showCard('fill', '#16194F', '#F44E77', '#FFFFFF', '#FFFFFF');
				} else {
					showCard('fill', '#6A6D9E', '#F2F6FF', '#16194F', '#16194F');
				}
				if (target == selectors[0]) {
					onSelector(0);
					offSelector(1);
				}
				if (target == selectors[1]) {
					onSelector(1);
					offSelector(0);
				}
				if (target == selectors[2]) {
					onSelector(2);
					offSelector(3);
				} 
				if (target == selectors[3]) {
					onSelector(3);
					offSelector(2);
				}
			});
		}
	});
}

{
	card('.tiers__inner', '.tiers__tier-selector--link', '.shape__active', 'tiers__tier-selector--link--off');
}