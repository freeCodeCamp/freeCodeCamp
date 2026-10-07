/*!
 * Get Node Dimensions 1.2.1
 * https://github.com/souporserious/get-node-dimensions
 * Copyright (c) 2018 Get Node Dimensions Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getNodeDimensions"] = factory();
	else
		root["getNodeDimensions"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getNodeDimensions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getCloneDimensions = __webpack_require__(1);

	var _getCloneDimensions2 = _interopRequireDefault(_getCloneDimensions);

	var _getMargin = __webpack_require__(2);

	var _getMargin2 = _interopRequireDefault(_getMargin);

	function getNodeDimensions(node) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var rect = node.getBoundingClientRect();
	  var width = undefined,
	      height = undefined,
	      margin = undefined;

	  // determine if we need to clone the element to get proper dimensions or not
	  if (!rect.width || !rect.height || options.clone) {
	    var cloneDimensions = (0, _getCloneDimensions2['default'])(node, options);
	    rect = cloneDimensions.rect;
	    margin = cloneDimensions.margin;
	  }
	  // if no cloning needed, we need to determine if margin should be accounted for
	  else if (options.margin) {
	      margin = (0, _getMargin2['default'])(getComputedStyle(node));
	    }

	  // include margin in width/height calculation if desired
	  if (options.margin) {
	    width = margin.left + rect.width + margin.right;
	    height = margin.top + rect.height + margin.bottom;
	  } else {
	    width = rect.width;
	    height = rect.height;
	  }

	  return {
	    width: width,
	    height: height,
	    top: rect.top,
	    right: rect.right,
	    bottom: rect.bottom,
	    left: rect.left
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getCloneDimensions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getMargin = __webpack_require__(2);

	var _getMargin2 = _interopRequireDefault(_getMargin);

	function getCloneDimensions(node, options) {
	  var parentNode = node.parentNode;

	  var context = document.createElement('div');
	  var clone = node.cloneNode(true);
	  var style = getComputedStyle(node);
	  var rect = undefined,
	      width = undefined,
	      height = undefined,
	      margin = undefined;

	  // give the node some context to measure off of
	  // no height and hidden overflow hide node copy
	  context.style.height = 0;
	  context.style.overflow = 'hidden';

	  // clean up any attributes that might cause a conflict with the original node
	  // i.e. inputs that should focus or submit data
	  clone.setAttribute('id', '');
	  clone.setAttribute('name', '');

	  // set props to get a true dimension calculation
	  if (options.display || style && style.getPropertyValue('display') === 'none') {
	    clone.style.display = options.display || 'block';
	  }
	  if (options.width || style && !parseInt(style.getPropertyValue('width'))) {
	    clone.style.width = options.width || 'auto';
	  }
	  if (options.height || style && !parseInt(style.getPropertyValue('height'))) {
	    clone.style.height = options.height || 'auto';
	  }

	  // append copy to context
	  context.appendChild(clone);

	  // append context to DOM so we can measure
	  parentNode.appendChild(context);

	  // get accurate dimensions
	  rect = clone.getBoundingClientRect();
	  width = clone.offsetWidth;
	  height = clone.offsetHeight;

	  // destroy clone
	  parentNode.removeChild(context);

	  return {
	    rect: {
	      width: width,
	      height: height,
	      top: rect.top,
	      right: rect.right,
	      bottom: rect.bottom,
	      left: rect.left
	    },
	    margin: (0, _getMargin2['default'])(style)
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getMargin;
	var toNumber = function toNumber(n) {
	  return parseInt(n) || 0;
	};

	function getMargin(style) {
	  return {
	    top: style ? toNumber(style.marginTop) : 0,
	    right: style ? toNumber(style.marginRight) : 0,
	    bottom: style ? toNumber(style.marginBottom) : 0,
	    left: style ? toNumber(style.marginLeft) : 0
	  };
	}

	module.exports = exports["default"];

/***/ }
/******/ ])
});
;