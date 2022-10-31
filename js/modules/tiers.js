export class TiersCards {
	
	constructor (blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, selectorLine) {
		this.block = blockId;
		this.selector = selectorClassName;
		this.content = contentClassName;
		this.activeSelectorClass = activeSelectorClass;
		this.activeContentClass = activeContentClass;
		this.selectorClassName = selectorClassName;
		this.selectorLine = selectorLine;

		this.selection(blockId, selectorClassName, contentClassName, selectorLine);
	}

	hideAllSelector() {
		this.selector.forEach (item => {
			item.classList.remove(this.activeSelectorClass);
		});
	}

	showSelector(i) {
		this.selector[i].classList.add(this.activeSelectorClass);
	}

	hideAllContent() {
		this.content.forEach (item => {
			item.classList.remove(this.activeContentClass);
		});
	}

	showContent(i) {
		this.content[i].classList.add(this.activeContentClass);
	}

	targetAction(i) {
		this.hideAllSelector();
		this.showSelector(i);
		this.hideAllContent();
		this.showContent(i);
	}

	selection(blockId, selectorClassName, contentClassName, selectorLine) {
		this.block = document.getElementById(blockId);
		this.selector = document.querySelectorAll(selectorClassName);
		this.content = document.querySelectorAll(contentClassName);
		this.selectorLine = document.querySelectorAll(selectorLine);
		this.block.addEventListener('click', (e) => {
			let target = e.target.closest(this.selectorClassName);
			if (!target);
			if (!this.block.contains(target));
			if (target) {
				e.preventDefault();
				this.selector.forEach((item, i) => {
					if (target == item) {
						this.targetAction(i);
					}
				});
			}
		});
	}
}

export class TiersSliderButtons extends TiersCards {
	constructor (blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, activeContentClassMod, selectorLine) {
		super(blockId, selectorClassName, contentClassName, activeSelectorClass, activeContentClass, selectorLine);
		this.activeContentClassMod = activeContentClassMod;
	}
	
	hideAllContent() {
		this.content[0].classList.remove(this.activeContentClass);
		this.content[0].classList.remove(this.activeContentClassMod);
	}

	showContent(i) {
		if (i == 0) {
			this.content[0].style.transform = `translateX(0)`
		} else {
			this.content[0].style.transform = `translateX(-100vw)`
		}
	}
}
/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

export function tiersSlider (blockID, contentClassName, selectorClassName, activeSelectorClass) {

const slider = document.getElementById(blockID);
const slides = Array.from(document.querySelectorAll(contentClassName));
const selectors = document.querySelectorAll(selectorClassName);

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

function touchStart(index) {
		return function(event) {
			if (isMobile()){
				currentIndex = index
				startPos = getPositionX(event)
				isDragging = true
				animationID = requestAnimationFrame(animation)
			}
		}
}

function touchEnd() {
	if (isMobile()){
		isDragging = false
		cancelAnimationFrame(animationID)

		const movedBy = currentTranslate - prevTranslate

		if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

		if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

		setPositionByIndex(currentIndex);

		setSelector(currentIndex);
	}
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex(currentIndex) {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSelector(currentIndex) {
	selectors.forEach (selector => {
		selector.classList.remove(activeSelectorClass);
	});
	selectors[currentIndex].classList.add(activeSelectorClass);
}

function isMobile() {
	if (document.documentElement.clientWidth <= 626) return true;
}

function resizeSliderReset() {
	window.addEventListener("resize", () => {
		if (slider.style.transform != `translateX(0px)`) {
			setPositionByIndex(0);
			setSelector(0);
		}
	});
}

resizeSliderReset();
}