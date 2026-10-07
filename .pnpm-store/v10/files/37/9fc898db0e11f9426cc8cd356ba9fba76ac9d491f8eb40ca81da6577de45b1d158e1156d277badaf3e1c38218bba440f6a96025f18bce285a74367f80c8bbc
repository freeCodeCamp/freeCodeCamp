import {
	aNPlusBNotationPseudoClasses,
	aNPlusBOfSNotationPseudoClasses,
} from '../reference/selectors.mjs';

const classes = [
	...aNPlusBNotationPseudoClasses.values(),
	...aNPlusBOfSNotationPseudoClasses.values(),
].join('|');
const HAS_A_N_PLUS_B_NOTATION_PSEUDO_CLASSES = new RegExp(`\\b:(?:${classes})\\(`, 'i');

/**
 * Check if a selector contains any pseudo class function that might contain an An+B notation
 *
 * @param {string} selector
 * @returns {boolean}
 */
export default function hasANPlusBNotationPseudoClasses(selector) {
	return HAS_A_N_PLUS_B_NOTATION_PSEUDO_CLASSES.test(selector);
}
