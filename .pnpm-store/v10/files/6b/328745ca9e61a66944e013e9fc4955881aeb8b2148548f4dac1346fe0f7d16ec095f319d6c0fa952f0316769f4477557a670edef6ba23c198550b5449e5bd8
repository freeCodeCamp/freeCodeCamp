import katex from '../katex.mjs';

/* eslint no-constant-condition:0 */
var findEndOfMath = function findEndOfMath(delimiter, text, startIndex) {
  // Adapted from
  // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
  var index = startIndex;
  var braceLevel = 0;
  var delimLength = delimiter.length;
  while (index < text.length) {
    var character = text[index];
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
var escapeRegex = function escapeRegex(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
var amsRegex = /^\\begin{/;
var splitAtDelimiters = function splitAtDelimiters(text, delimiters) {
  var index;
  var data = [];
  var regexLeft = new RegExp("(" + delimiters.map(x => escapeRegex(x.left)).join("|") + ")");
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
    var i = delimiters.findIndex(delim => text.startsWith(delim.left));
    index = findEndOfMath(delimiters[i].right, text, delimiters[i].left.length);
    if (index === -1) {
      break;
    }
    var rawData = text.slice(0, index + delimiters[i].right.length);
    var math = amsRegex.test(rawData) ? rawData : text.slice(delimiters[i].left.length, index);
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

/* eslint no-console:0 */
/* Note: optionsCopy is mutated by this method. If it is ever exposed in the
 * API, we should copy it before mutating.
 */
var renderMathInText = function renderMathInText(text, optionsCopy) {
  var data = splitAtDelimiters(text, optionsCopy.delimiters);
  if (data.length === 1 && data[0].type === 'text') {
    // There is no formula in the text.
    // Let's return null which means there is no need to replace
    // the current text node with a new one.
    return null;
  }
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    if (data[i].type === "text") {
      fragment.appendChild(document.createTextNode(data[i].data));
    } else {
      var span = document.createElement("span");
      var math = data[i].data;
      // Override any display mode defined in the settings with that
      // defined by the text itself
      optionsCopy.displayMode = data[i].display;
      try {
        if (optionsCopy.preProcess) {
          math = optionsCopy.preProcess(math);
        }
        katex.render(math, span, optionsCopy);
      } catch (e) {
        if (!(e instanceof katex.ParseError)) {
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
var _renderElem = function renderElem(elem, optionsCopy) {
  var _loop = function _loop(_i) {
    var childNode = elem.childNodes[_i];
    if (childNode.nodeType === 3) {
      var _childNode$textConten;
      // Text node
      // Concatenate all sibling text nodes.
      // Webkit browsers split very large text nodes into smaller ones,
      // so the delimiters may be split across different nodes.
      var textContentConcat = (_childNode$textConten = childNode.textContent) != null ? _childNode$textConten : "";
      var sibling = childNode.nextSibling;
      var nSiblings = 0;
      while (sibling && sibling.nodeType === Node.TEXT_NODE) {
        var _sibling$textContent;
        textContentConcat += (_sibling$textContent = sibling.textContent) != null ? _sibling$textContent : "";
        sibling = sibling.nextSibling;
        nSiblings++;
      }
      var frag = renderMathInText(textContentConcat, optionsCopy);
      if (frag) {
        // Remove extra text nodes
        for (var j = 0; j < nSiblings; j++) {
          childNode.nextSibling.remove();
        }
        _i += frag.childNodes.length - 1;
        elem.replaceChild(frag, childNode);
      } else {
        // If the concatenated text does not contain math
        // the siblings will not either
        _i += nSiblings;
      }
    } else if (childNode.nodeType === 1) {
      // Element node
      var className = ' ' + childNode.className + ' ';
      var shouldRender = !optionsCopy.ignoredTags.has(childNode.nodeName.toLowerCase()) && optionsCopy.ignoredClasses.every(x => !className.includes(' ' + x + ' '));
      if (shouldRender) {
        _renderElem(childNode, optionsCopy);
      }
    }
    // Otherwise, it's something else, and ignore it.
    i = _i;
  };
  for (var i = 0; i < elem.childNodes.length; i++) {
    _loop(i);
  }
};
var renderMathInElement = function renderMathInElement(elem, options) {
  if (!elem) {
    throw new Error("No element provided to render");
  }
  var optionsCopy = {};
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
  _renderElem(elem, optionsCopy);
};

export { renderMathInElement as default };
