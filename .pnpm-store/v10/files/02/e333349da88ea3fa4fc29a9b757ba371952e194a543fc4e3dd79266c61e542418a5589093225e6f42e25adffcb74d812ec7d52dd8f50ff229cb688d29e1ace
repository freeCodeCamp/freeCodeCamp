(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("katex"));
	else if(typeof define === 'function' && define.amd)
		define(["katex"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("katex")) : factory(root["katex"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__757__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 757:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__757__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(757);
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_0__);

let scripts = document.body.getElementsByTagName("script");
scripts = Array.prototype.slice.call(scripts);
scripts.forEach(function (script) {
  if (!script.type || !script.type.match(/math\/tex/i)) {
    return -1;
  }
  const display = script.type.match(/mode\s*=\s*display(;|\s|\n|$)/) != null;
  const katexElement = document.createElement(display ? "div" : "span");
  katexElement.setAttribute("class", display ? "equation" : "inline-equation");
  try {
    katex__WEBPACK_IMPORTED_MODULE_0___default().render(script.text, katexElement, {
      displayMode: display
    });
  } catch (err) {
    //console.error(err); linter doesn't like this
    katexElement.textContent = script.text;
  }
  script.parentNode.replaceChild(katexElement, script);
});
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});