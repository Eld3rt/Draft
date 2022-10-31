import {TiersCards} from './tiers.js';

export default class Faq extends TiersCards {

	hideAllSelector() {
		this.selectorLine.forEach (item => {
			item.classList.remove(this.activeSelectorClass);
		});
	}

	showSelector(i) {
		this.selectorLine[i].classList.add(this.activeSelectorClass);
	}

	targetAction(i) {
		if (this.content[i].classList.contains(this.activeContentClass)) {
			this.hideAllSelector();
			this.hideAllContent();
		} else {
			this.hideAllSelector();
			this.showSelector(i);
			this.hideAllContent();
			this.showContent(i);
		}
	}

}