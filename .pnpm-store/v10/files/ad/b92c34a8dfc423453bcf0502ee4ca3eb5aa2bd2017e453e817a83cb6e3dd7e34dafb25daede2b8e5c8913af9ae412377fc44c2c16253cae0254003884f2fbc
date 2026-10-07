(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("katex"));
	else if(typeof define === 'function' && define.amd)
		define(["katex"], factory);
	else if(typeof exports === 'object')
		exports["renderMathInElement"] = factory(require("katex"));
	else
		root["renderMathInElement"] = factory(root["katex"]);
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auto_render; }
});

// EXTERNAL MODULE: external "katex"
var external_katex_ = __webpack_require__(757);
var external_katex_default = /*#__PURE__*/__webpack_require__.n(external_katex_);
;// ./contrib/auto-render/splitAtDelimiters.ts
/* eslint no-constant-condition:0 */

const findEndOfMath = function (delimiter, text, startIndex) {
  // Adapted from
  // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
  let index = startIndex;
  let braceLevel = 0;
  const delimLength = delimiter.length;
  while (index < text.length) {
    const character = text[index];
    if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) {
      return index;
    } else if (character === "\\") {
      index++;
    } else if (character === "{") {
      braceLevel++;
    } else if (character === "}") {
      braceLevel--;
    }
    index++;
  }
  return -1;
};
const escapeRegex = function (string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
const amsRegex = /^\\begin{/;
const splitAtDelimiters = function (text, delimiters) {
  let index;
  const data = [];
  const regexLeft = new RegExp("(" + delimiters.map(x => escapeRegex(x.left)).join("|") + ")");
  while (true) {
    index = text.search(regexLeft);
    if (index === -1) {
      break;
    }
    if (index > 0) {
      data.push({
        type: "text",
        data: text.slice(0, index)
      });
      text = text.slice(index); // now text starts with delimiter
    }
    // ... so this always succeeds:
    const i = delimiters.findIndex(delim => text.startsWith(delim.left));
    index = findEndOfMath(delimiters[i].right, text, delimiters[i].left.length);
    if (index === -1) {
      break;
    }
    const rawData = text.slice(0, index + delimiters[i].right.length);
    const math = amsRegex.test(rawData) ? rawData : text.slice(delimiters[i].left.length, index);
    data.push({
      type: "math",
      data: math,
      rawData,
      display: delimiters[i].display
    });
    text = text.slice(index + delimiters[i].right.length);
  }
  if (text !== "") {
    data.push({
      type: "text",
      data: text
    });
  }
  return data;
};
/* harmony default export */ var auto_render_splitAtDelimiters = (splitAtDelimiters);
;// ./contrib/auto-render/auto-render.ts
/* eslint no-console:0 */



/* Note: optionsCopy is mutated by this method. If it is ever exposed in the
 * API, we should copy it before mutating.
 */
const renderMathInText = function (text, optionsCopy) {
  const data = auto_render_splitAtDelimiters(text, optionsCopy.delimiters);
  if (data.length === 1 && data[0].type === 'text') {
    // There is no formula in the text.
    // Let's return null which means there is no need to replace
    // the current text node with a new one.
    return null;
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "text") {
      fragment.appendChild(document.createTextNode(data[i].data));
    } else {
      const span = document.createElement("span");
      let math = data[i].data;
      // Override any display mode defined in the settings with that
      // defined by the text itself
      optionsCopy.displayMode = data[i].display;
      try {
        if (optionsCopy.preProcess) {
          math = optionsCopy.preProcess(math);
        }
        external_katex_default().render(math, span, optionsCopy);
      } catch (e) {
        if (!(e instanceof (external_katex_default()).ParseError)) {
          throw e;
        }
        optionsCopy.errorCallback("KaTeX auto-render: Failed to parse `" + data[i].data + "` with ", e);
        fragment.appendChild(document.createTextNode(data[i].rawData));
        continue;
      }
      fragment.appendChild(span);
    }
  }
  return fragment;
};
const renderElem = function (elem, optionsCopy) {
  for (let i = 0; i < elem.childNodes.length; i++) {
    const childNode = elem.childNodes[i];
    if (childNode.nodeType === 3) {
      var _childNode$textConten;
      // Text node
      // Concatenate all sibling text nodes.
      // Webkit browsers split very large text nodes into smaller ones,
      // so the delimiters may be split across different nodes.
      let textContentConcat = (_childNode$textConten = childNode.textContent) != null ? _childNode$textConten : "";
      let sibling = childNode.nextSibling;
      let nSiblings = 0;
      while (sibling && sibling.nodeType === Node.TEXT_NODE) {
        var _sibling$textContent;
        textContentConcat += (_sibling$textContent = sibling.textContent) != null ? _sibling$textContent : "";
        sibling = sibling.nextSibling;
        nSiblings++;
      }
      const frag = renderMathInText(textContentConcat, optionsCopy);
      if (frag) {
        // Remove extra text nodes
        for (let j = 0; j < nSiblings; j++) {
          childNode.nextSibling.remove();
        }
        i += frag.childNodes.length - 1;
        elem.replaceChild(frag, childNode);
      } else {
        // If the concatenated text does not contain math
        // the siblings will not either
        i += nSiblings;
      }
    } else if (childNode.nodeType === 1) {
      // Element node
      const className = ' ' + childNode.className + ' ';
      const shouldRender = !optionsCopy.ignoredTags.has(childNode.nodeName.toLowerCase()) && optionsCopy.ignoredClasses.every(x => !className.includes(' ' + x + ' '));
      if (shouldRender) {
        renderElem(childNode, optionsCopy);
      }
    }
    // Otherwise, it's something else, and ignore it.
  }
};
const renderMathInElement = function (elem, options) {
  if (!elem) {
    throw new Error("No element provided to render");
  }
  const optionsCopy = {};
  Object.assign(optionsCopy, options);

  // default options
  optionsCopy.delimiters = optionsCopy.delimiters || [{
    left: "$$",
    right: "$$",
    display: true
  }, {
    left: "\\(",
    right: "\\)",
    display: false
  },
  // LaTeX uses $…$, but it ruins the display of normal `$` in text:
  // {left: "$", right: "$", display: false},
  // $ must come after $$

  // Render AMS environments even if outside $$…$$ delimiters.
  {
    left: "\\begin{equation}",
    right: "\\end{equation}",
    display: true
  }, {
    left: "\\begin{align}",
    right: "\\end{align}",
    display: true
  }, {
    left: "\\begin{alignat}",
    right: "\\end{alignat}",
    display: true
  }, {
    left: "\\begin{gather}",
    right: "\\end{gather}",
    display: true
  }, {
    left: "\\begin{CD}",
    right: "\\end{CD}",
    display: true
  }, {
    left: "\\[",
    right: "\\]",
    display: true
  }];
  optionsCopy.ignoredTags = new Set((options == null ? void 0 : options.ignoredTags) || ["script", "noscript", "style", "textarea", "pre", "code", "option"]);
  optionsCopy.ignoredClasses = optionsCopy.ignoredClasses || [];
  optionsCopy.errorCallback = optionsCopy.errorCallback || console.error;

  // Enable sharing of global macros defined via `\gdef` between different
  // math elements within a single call to `renderMathInElement`.
  optionsCopy.macros = optionsCopy.macros || {};
  renderElem(elem, optionsCopy);
};
/* harmony default export */ var auto_render = (renderMathInElement);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});