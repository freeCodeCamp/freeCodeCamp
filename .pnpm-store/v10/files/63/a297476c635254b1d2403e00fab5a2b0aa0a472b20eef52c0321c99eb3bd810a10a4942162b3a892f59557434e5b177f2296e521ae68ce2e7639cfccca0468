import addClass from './addClass';
import hasClass from './hasClass';
import removeClass from './removeClass';
/**
 * Toggles a CSS class on a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

export default function toggleClass(element, className) {
  if (element.classList) element.classList.toggle(className);else if (hasClass(element, className)) removeClass(element, className);else addClass(element, className);
}