import css from './css';
import hyphenate from './hyphenate';
import isTransform from './isTransform';
import transitionEnd from './transitionEnd';
var reset = {
  transition: '',
  'transition-duration': '',
  'transition-delay': '',
  'transition-timing-function': ''
};

// super lean animate function for transitions
// doesn't support all translations to keep it matching the jquery API

/**
 * code in part from: Zepto 1.1.4 | zeptojs.com/license
 */
function _animate(_ref) {
  var node = _ref.node,
      properties = _ref.properties,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 200 : _ref$duration,
      easing = _ref.easing,
      callback = _ref.callback;
  var cssProperties = [];
  var cssValues = {};
  var transforms = '';
  Object.keys(properties).forEach(function (key) {
    var value = properties[key];
    if (isTransform(key)) transforms += key + "(" + value + ") ";else {
      cssValues[key] = value;
      cssProperties.push(hyphenate(key));
    }
  });

  if (transforms) {
    cssValues.transform = transforms;
    cssProperties.push('transform');
  }

  function done(event) {
    if (event.target !== event.currentTarget) return;
    css(node, reset);
    if (callback) callback.call(this, event);
  }

  if (duration > 0) {
    cssValues.transition = cssProperties.join(', ');
    cssValues['transition-duration'] = duration / 1000 + "s";
    cssValues['transition-delay'] = '0s';
    cssValues['transition-timing-function'] = easing || 'linear';
  }

  var removeListener = transitionEnd(node, done, duration); // eslint-disable-next-line no-unused-expressions

  node.clientLeft; // trigger page reflow

  css(node, cssValues);
  return {
    cancel: function cancel() {
      removeListener();
      css(node, reset);
    }
  };
}

function animate(nodeOrOptions, properties, duration, easing, callback) {
  if (!('nodeType' in nodeOrOptions)) {
    return _animate(nodeOrOptions);
  }

  if (!properties) {
    throw new Error('must include properties to animate');
  }

  if (typeof easing === 'function') {
    callback = easing;
    easing = '';
  }

  return _animate({
    node: nodeOrOptions,
    properties: properties,
    duration: duration,
    easing: easing,
    callback: callback
  });
}

export default animate;