class Methods {
	
	constructor (selectorClassName, contentClassName, activeSelectorClass, activeContentClass, i) {
		this.selector = selectorClassName;
		this.content = contentClassName;
		this.activeSelectorClass = activeSelectorClass;
		this.activeContentClass = activeContentClass;
		this.i = i;
	}

	hideAllSelector() {
		this.selector.forEach (item => {
			item.classList.remove(activeSelectorClass);
		});
	}

	showSelector(i) {
		this.selector[i].classList.add(activeSelectorClass);
	}

	hideAllContent() {
		this.content.forEach (item => {
			item.classList.remove(activeContentClass);
		});
	}

	showContent(i) {
		this.content[i].classList.add(activeContentClass);
	}

}