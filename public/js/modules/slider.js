export class TiersSlider extends TiersButtons {
	constructor(blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, selectorLine){
	super(blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, selectorLine);
	
	this.isDragging = false,
	this.startPos = 0,
	this.currentTranslate = 0,
	this.prevTranslate = 0,
	this.animationID = 0,
	this.i = 0
	}

	selection(blockId, selectorClassName, contentClassName) {
		this.block = document.getElementById(blockId);
		this.selector = document.querySelectorAll(selectorClassName);
		this.content = Array.from(document.querySelectorAll(contentClassName));

		this.content.forEach((item, index) => {

		// Touch events
		item.addEventListener('touchstart', (e) => this.touchStart(e, index));
		item.addEventListener('touchend', () => this.touchEnd());
		// item.addEventListener('touchmove', this.touchMove);

		// Mouse events
		item.addEventListener('mousedown', (e) => this.touchStart(e, index));
		item.addEventListener('mouseup', () => this.touchEnd());
		item.addEventListener('mouseleave', () => this.touchEnd());
		// item.addEventListener('mousemove', this.touchMove);
		});
	}
	
	touchStart(e, index) {
		this.i = index;
		this.startPos = this.getPositionX(e);
		this.isDragging = true;
	
		this.animationID = window.requestAnimationFrame(() => this.animation);
	}

	touchEnd() {
		this.isDragging = false;
		window.cancelAnimationFrame(() => this.animationID);
	
		const movedBy = this.currentTranslate - this.prevTranslate;
	
		if (movedBy < -100 && this.i < this.content.length - 1) this.i += 1;
	
		if (movedBy > 100 && this.i > 0) this.i -= 1;
	
		this.targetAction(this.i);
	
	}

	getPositionX(e) {
		return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
	}

	animation() {
		this.targetAction(i);
		if (this.isDragging) window.requestAnimationFrame(() => this.animation);
	}
}