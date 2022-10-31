function card(selectorId1, selectorId2, cardNameId, cardNumberId, shapeId1, shapeId2, name, value1, value2, value3, value4) {
	let selector1 = document.getElementById(selectorId1);
	let selector2 = document.getElementById(selectorId2);
	let cardName = document.getElementById(cardNameId);
	let cardNumber = document.getElementById(cardNumberId);
	let shape1 = document.getElementById(shapeId1);
	let shape2 = document.getElementById(shapeId2);

	selector1.addEventListener('click', (e) => {
		if (e.target) {
			e.preventDefault();
		}

		selector1.classList.remove('tiers__tier-selector--link--off');
		selector2.classList.add('tiers__tier-selector--link--off');
		cardName.setAttribute(name, value1);
		cardNumber.setAttribute(name, value2);
		shape1.setAttribute(name, value3);
		shape2.setAttribute(name, value4);
	});
}

{
	card('selector__light-free', 'selector__dark-free', 'card__name-free', 'card__number-free', 'first__shape-free', 'second__shape-free', 'fill', '#16194F', '#16194F', '#6A6D9E', '#F2F6FF');
	card('selector__dark-free', 'selector__light-free', 'card__name-free', 'card__number-free', 'first__shape-free', 'second__shape-free', 'fill', '#FFFFFF', '#FFFFFF', '#16194F', '#F44E77');
	card('selector__light-premium', 'selector__dark-premium', 'card__name-premium', 'card__number-premium', 'first__shape-premium', 'second__shape-premium', 'fill', '#16194F', '#16194F', '#6A6D9E', '#F2F6FF');
	card('selector__dark-premium', 'selector__light-premium', 'card__name-premium', 'card__number-premium', 'first__shape-premium', 'second__shape-premium', 'fill', '#FFFFFF', '#FFFFFF', '#16194F', '#F44E77');
}