function card(selectorsClassName, selectorClassName, shapeClassName, activeClass) {
	let selectors = document.querySelector(selectorsClassName);
	let selector = document.querySelectorAll(selectorClassName);
	let shapes = document.querySelectorAll(shapeClassName);

	selectors.addEventListener('click', (e) => {
		const target = e.target.closest(selectorClassName);
		function showCard(name, value1, value2, value3, value4) {
			shapes.forEach((item, i) => {
					shapes[0].setAttribute(name, value1);
					shapes[1].setAttribute(name, value2);
					shapes[2].setAttribute(name, value3);
					shapes[3].setAttribute(name, value4);
			});
		}

		function onSelector (i) {
			selector[i].classList.remove(activeClass);
		}
	
		function offSelector (i) {
			selector[i].classList.add(activeClass);
		}

		if (!target) return;
		if (!selectors.contains(target)) return;
		if (target) {
			e.preventDefault();
			selector.forEach((item, i) => {
				if (target == selector[0]) {
					showCard('fill', '#16194F', '#F44E77', '#FFFFFF', '#FFFFFF');
				} else {
					showCard('fill', '#6A6D9E', '#F2F6FF', '#16194F', '#16194F');
				}
				if (target == selector[0]) {
					onSelector(0);
					offSelector(1);
				}
				if (target == selector[1]) {
					onSelector(1);
					offSelector(0);
				}
			});
		}
	});
}

{
	card('.tiers__tier-selectors--free', '.tiers__tier-selector--free', '.shape__active--free', 'tiers__tier-selector--link--off');
	card('.tiers__tier-selectors--premium', '.tiers__tier-selector--premium', '.shape__active--premium', 'tiers__tier-selector--link--off');
}