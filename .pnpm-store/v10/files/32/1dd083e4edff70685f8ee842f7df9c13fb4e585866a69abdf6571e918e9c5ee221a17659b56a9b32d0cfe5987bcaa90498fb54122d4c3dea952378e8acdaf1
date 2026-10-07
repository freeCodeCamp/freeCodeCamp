import css from './css';
import ownerDocument from './ownerDocument';

var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};

export default function offsetParent(node) {
  var doc = ownerDocument(node);
  var parent = node && node.offsetParent;

  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && css(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }

  return parent || doc.documentElement;
}