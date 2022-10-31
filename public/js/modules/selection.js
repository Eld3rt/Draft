export default selection;

function selection(blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, i) {
	let block = document.getElementById(blockId);
	let selector = document.querySelectorAll(selectorClassName);
	let content = document.querySelectorAll(contentClassName);

	function hideContent() {
		content.forEach (item => {
			item.classList.remove(activeContentClass);
		});

		selector.forEach (item => {
			item.classList.remove(activeSelectorClass);
		});
	}

	function showContent(i = 0) {
		content[i].classList.add(activeContentClass);
		selector[i].classList.add(activeSelectorClass);
	}

	hideContent();
	showContent(i);

	block.addEventListener('click', (e) => {
		const target = e.target.closest(selectorClassName);
		if (!target) return;
		if (!block.contains(target)) return;
		if (target) {
			e.preventDefault();
			selector.forEach((item, i) => {
				if (target == item) {
					if (content[i].classList.contains(activeContentClass)) {
						hideContent();
					} else {
						hideContent();
						showContent(i);
					}
				}
			});
		}
	});
}