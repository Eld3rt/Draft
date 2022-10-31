import {TiersCards, TiersSliderButtons, tiersSlider} from './modules/tiers.js';
import Faq from './modules/faq.js';
import {navigation} from './modules/header.js';
import resizeAnimationStopper from './modules/resizeAnimationStopper.js';

{
	new TiersCards('selectors-free', '.tiers__tier-selector--free--icon', '.tiers__tier-card--free', 'tiers__tier-selector--icon--active', 'tiers__tier-card--active');
	new TiersCards('selectors-premium', '.tiers__tier-selector--premium--icon', '.tiers__tier-card--premium', 'tiers__tier-selector--icon--active', 'tiers__tier-card--active');
	new TiersSliderButtons('tier-titles', '.tiers__tier-title--mobile', '.tiers__tiers', 'tiers__tier-title--mobile--active', 'tiers__tiers--show-free', 'tiers__tiers--show-premium');
	tiersSlider('tiers', '.tiers__tier', '.tiers__tier-title--mobile', 'tiers__tier-title--mobile--active');
	new Faq('questions', '.faq__questions-button', '.faq__questions-answer', 'faq__questions-button--first-line--active', 'faq__questions-answer--active', '.faq__questions-button--first-line');
	navigation('.header__inner', '.header__link');
	resizeAnimationStopper('.tiers__tier', 'resize-animation-stopper');
	resizeAnimationStopper('.tiers__tiers', 'resize-animation-stopper');
}