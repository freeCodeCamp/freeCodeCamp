'use strict';

/**
 * Highlight the given string of `js`.
 *
 * @private
 * @param {string} js
 * @return {string}
 */
function highlight(js) {
  return js
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
    .replace(/('.*?')/gm, '<span class="string">$1</span>')
    .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
    .replace(/(\d+)/gm, '<span class="number">$1</span>')
    .replace(
      /\bnew[ \t]+(\w+)/gm,
      '<span class="keyword">new</span> <span class="init">$1</span>'
    )
    .replace(
      /\b(function|new|throw|return|var|if|else)\b/gm,
      '<span class="keyword">$1</span>'
    );
}

/**
 * Highlight the contents of tag `name`.
 *
 * @private
 * @param {string} name
 */
module.exports = function highlightTags(name) {
  var code = document.getElementById('mocha').getElementsByTagName(name);
  for (var i = 0, len = code.length; i < len; ++i) {
    code[i].innerHTML = highlight(code[i].innerHTML);
  }
};
