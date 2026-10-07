(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// ./contrib/copy-tex/katex2tex.ts
// Set these to how you want inline and display math to be delimited.
const defaultCopyDelimiters = {
  inline: ['$', '$'],
  // alternative: ['\(', '\)']
  display: ['$$', '$$'] // alternative: ['\[', '\]']
};

// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
function katexReplaceWithTex(fragment, copyDelimiters) {
  if (copyDelimiters === void 0) {
    copyDelimiters = defaultCopyDelimiters;
  }
  // Remove .katex-html blocks that are preceded by .katex-mathml blocks
  // (which will get replaced below).
  const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
  for (let i = 0; i < katexHtml.length; i++) {
    const element = katexHtml[i];
    if (element.remove) {
      element.remove();
    } else if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  // Replace .katex-mathml elements with their annotation (TeX source)
  // descendant, with inline delimiters.
  const katexMathml = fragment.querySelectorAll('.katex-mathml');
  for (let i = 0; i < katexMathml.length; i++) {
    const element = katexMathml[i];
    const texSource = element.querySelector('annotation');
    if (texSource) {
      if (element.replaceWith) {
        element.replaceWith(texSource);
      } else if (element.parentNode) {
        element.parentNode.replaceChild(texSource, element);
      }
      texSource.innerHTML = copyDelimiters.inline[0] + texSource.innerHTML + copyDelimiters.inline[1];
    }
  }
  // Switch display math to display delimiters.
  const displays = fragment.querySelectorAll('.katex-display annotation');
  for (let i = 0; i < displays.length; i++) {
    const element = displays[i];
    element.innerHTML = copyDelimiters.display[0] + element.innerHTML.substr(copyDelimiters.inline[0].length, element.innerHTML.length - copyDelimiters.inline[0].length - copyDelimiters.inline[1].length) + copyDelimiters.display[1];
  }
  return fragment;
}
/* harmony default export */ var katex2tex = (katexReplaceWithTex);
;// ./contrib/copy-tex/copy-tex.ts


// Return <div class="katex"> element containing node, or null if not found.
function closestKatex(node) {
  // If node is a Text Node, for example, go up to containing Element,
  // where we can apply the `closest` method.
  const element = node instanceof Element ? node : node.parentElement;
  return element && element.closest('.katex');
}

// Global copy handler to modify behavior on/within .katex elements.
document.addEventListener('copy', function (event) {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !event.clipboardData) {
    return; // default action OK if selection is empty or unchangeable
  }
  const clipboardData = event.clipboardData;
  const range = selection.getRangeAt(0);

  // When start point is within a formula, expand to entire formula.
  const startKatex = closestKatex(range.startContainer);
  if (startKatex) {
    range.setStartBefore(startKatex);
  }

  // Similarly, when end point is within a formula, expand to entire formula.
  const endKatex = closestKatex(range.endContainer);
  if (endKatex) {
    range.setEndAfter(endKatex);
  }
  const fragment = range.cloneContents();
  if (!fragment.querySelector('.katex-mathml')) {
    return; // default action OK if no .katex-mathml elements
  }
  const htmlContents = Array.prototype.map.call(fragment.childNodes, el => el instanceof Text ? el.textContent : el.outerHTML).join('');

  // Preserve usual HTML copy/paste behavior.
  clipboardData.setData('text/html', htmlContents);
  // Rewrite plain-text version.
  clipboardData.setData('text/plain', katex2tex(fragment).textContent);
  // Prevent normal copy handling.
  event.preventDefault();
});
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});