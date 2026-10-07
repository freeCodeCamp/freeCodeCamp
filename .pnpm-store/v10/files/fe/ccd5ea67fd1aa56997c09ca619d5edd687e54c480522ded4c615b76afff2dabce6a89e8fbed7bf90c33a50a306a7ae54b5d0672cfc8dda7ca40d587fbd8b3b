'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _smooth = require('./smooth');

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = require('./cancel-events');

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = require('./scroll-events');

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionX = function currentPositionX(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollLeft;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  }
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerWidth = function scrollContainerWidth(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollWidth - containerElement.offsetWidth;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.delta = Math.round(data.targetPosition - data.startPosition);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    if (options.horizontal) {
      data.containerElement.scrollLeft = data.currentPosition;
    } else {
      data.containerElement.scrollTop = data.currentPosition;
    }
  } else {
    if (options.horizontal) {
      window.scrollTo(data.currentPosition, 0);
    } else {
      window.scrollTo(0, data.currentPosition);
    }
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  var setCancel = function setCancel() {
    options.data.cancel = true;
  };
  _cancelEvents2.default.subscribe(setCancel);

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;

  if (options.data.startPosition === options.data.targetPosition) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
    }
    return;
  }

  options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);

  options.data.duration = functionWrapper(options.duration)(options.data.delta);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toPosition, options) {
  animateTopScroll(toPosition, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toPosition, options) {
  options = proceedOptions(options);
  setContainer(options);
  var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  animateTopScroll(toPosition + currentPosition, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};