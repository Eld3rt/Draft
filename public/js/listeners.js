class Listeners {

	constructor(blockId) {
		this.block = blockId;

		this.init(blockId);
	}

	init(blockId) {
		this.block = document.getElementById(blockId);

		this.selection();
	}

	selection() {
		this.selectionObjects = [];

		this.selectionObjects.push(new Cards('.tiers__tier-selector--free', '.tiers__tier-card--free', 'tiers__tier-selector--active', 'tiers__tier-card--active', 0));
		this.selectionObjects.push(new Cards('.tiers__tier-selector--premium', '.tiers__tier-card--premium', 'tiers__tier-selector--active', 'tiers__tier-card--active', 1));
		this.selectionObjects.push(new Faq('.faq__questions-button', '.faq__questions-answer', undefined, 'faq__questions-answer--active', 0));

		this.block.addEventListener('click', (e) => {
			for (let j = 0; j < this.selectionObjects.length; j++) {
				let target = e.target.closest(this.selectionObjects[j].selectorClassName);
				if (!target) continue;
				if (!this.block.contains(target)) continue;
				if (target) {
					e.preventDefault();
					this.selectionObjects[j].selector.forEach((item, i) => {
						if (target == item) {
							this.selectionObjects[j].targetAction(i);
						}
					});
				}
			}
		});
	}
}