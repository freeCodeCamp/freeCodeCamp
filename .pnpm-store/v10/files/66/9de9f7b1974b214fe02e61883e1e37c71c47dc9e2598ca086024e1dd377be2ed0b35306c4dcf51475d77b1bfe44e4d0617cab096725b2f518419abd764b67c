// Set these to how you want inline and display math to be delimited.
var defaultCopyDelimiters = {
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
  var katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');
  for (var i = 0; i < katexHtml.length; i++) {
    var element = katexHtml[i];
    if (element.remove) {
      element.remove();
    } else if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  // Replace .katex-mathml elements with their annotation (TeX source)
  // descendant, with inline delimiters.
  var katexMathml = fragment.querySelectorAll('.katex-mathml');
  for (var _i = 0; _i < katexMathml.length; _i++) {
    var _element = katexMathml[_i];
    var texSource = _element.querySelector('annotation');
    if (texSource) {
      if (_element.replaceWith) {
        _element.replaceWith(texSource);
      } else if (_element.parentNode) {
        _element.parentNode.replaceChild(texSource, _element);
      }
      texSource.innerHTML = copyDelimiters.inline[0] + texSource.innerHTML + copyDelimiters.inline[1];
    }
  }
  // Switch display math to display delimiters.
  var displays = fragment.querySelectorAll('.katex-display annotation');
  for (var _i2 = 0; _i2 < displays.length; _i2++) {
    var _element2 = displays[_i2];
    _element2.innerHTML = copyDelimiters.display[0] + _element2.innerHTML.substr(copyDelimiters.inline[0].length, _element2.innerHTML.length - copyDelimiters.inline[0].length - copyDelimiters.inline[1].length) + copyDelimiters.display[1];
  }
  return fragment;
}

// Return <div class="katex"> element containing node, or null if not found.
function closestKatex(node) {
  // If node is a Text Node, for example, go up to containing Element,
  // where we can apply the `closest` method.
  var element = node instanceof Element ? node : node.parentElement;
  return element && element.closest('.katex');
}
// Global copy handler to modify behavior on/within .katex elements.
document.addEventListener('copy', function (event) {
  var selection = window.getSelection();
  if (!selection || selection.isCollapsed || !event.clipboardData) {
    return; // default action OK if selection is empty or unchangeable
  }
  var clipboardData = event.clipboardData;
  var range = selection.getRangeAt(0);
  // When start point is within a formula, expand to entire formula.
  var startKatex = closestKatex(range.startContainer);
  if (startKatex) {
    range.setStartBefore(startKatex);
  }
  // Similarly, when end point is within a formula, expand to entire formula.
  var endKatex = closestKatex(range.endContainer);
  if (endKatex) {
    range.setEndAfter(endKatex);
  }
  var fragment = range.cloneContents();
  if (!fragment.querySelector('.katex-mathml')) {
    return; // default action OK if no .katex-mathml elements
  }
  var htmlContents = Array.prototype.map.call(fragment.childNodes, el => el instanceof Text ? el.textContent : el.outerHTML).join('');
  // Preserve usual HTML copy/paste behavior.
  clipboardData.setData('text/html', htmlContents);
  // Rewrite plain-text version.
  clipboardData.setData('text/plain', katexReplaceWithTex(fragment).textContent);
  // Prevent normal copy handling.
  event.preventDefault();
});
