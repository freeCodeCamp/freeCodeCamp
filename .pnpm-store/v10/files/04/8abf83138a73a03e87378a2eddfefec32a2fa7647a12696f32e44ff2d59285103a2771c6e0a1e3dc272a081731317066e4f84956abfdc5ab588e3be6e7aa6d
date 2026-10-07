/* eslint-disable no-cond-assign, no-continue */
import css from './css';
import height from './height';
import isDocument from './isDocument';
/**
 * Find the first scrollable parent of an element.
 *
 * @param element Starting element
 * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
 */

export default function scrollParent(element, firstPossible) {
  var position = css(element, 'position');
  var excludeStatic = position === 'absolute';
  var ownerDoc = element.ownerDocument;
  if (position === 'fixed') return ownerDoc || document; // @ts-ignore

  while ((element = element.parentNode) && !isDocument(element)) {
    var isStatic = excludeStatic && css(element, 'position') === 'static';
    var style = (css(element, 'overflow') || '') + (css(element, 'overflow-y') || '') + css(element, 'overflow-x');
    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && (firstPossible || height(element) < element.scrollHeight)) {
      return element;
    }
  }

  return ownerDoc || document;
}