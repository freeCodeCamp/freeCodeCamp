import isWindow from './isWindow';
export default function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = isWindow(node);

    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }

  return scrollAccessor;
}