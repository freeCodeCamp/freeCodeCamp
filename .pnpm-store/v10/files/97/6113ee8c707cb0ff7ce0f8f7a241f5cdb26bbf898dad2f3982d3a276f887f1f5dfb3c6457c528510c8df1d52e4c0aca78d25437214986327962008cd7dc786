"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDOM = void 0;
exports.prettyDOM = prettyDOM;
exports.prettyFormat = void 0;
var prettyFormat = _interopRequireWildcard(require("pretty-format"));
exports.prettyFormat = prettyFormat;
var _DOMElementFilter = _interopRequireDefault(require("./DOMElementFilter"));
var _getUserCodeFrame = require("./get-user-code-frame");
var _helpers = require("./helpers");
var _config = require("./config");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const shouldHighlight = () => {
  if (typeof process === 'undefined') {
    // Don't colorize in non-node environments (e.g. Browsers)
    return false;
  }
  let colors;
  // Try to safely parse env COLORS: We will default behavior if any step fails.
  try {
    const colorsJSON = process.env?.COLORS;
    if (colorsJSON) {
      colors = JSON.parse(colorsJSON);
    }
  } catch {
    // If this throws, process.env?.COLORS wasn't parsable. Since we only
    // care about `true` or `false`, we can safely ignore the error.
  }
  if (typeof colors === 'boolean') {
    // If `colors` is set explicitly (both `true` and `false`), use that value.
    return colors;
  } else {
    // If `colors` is not set, colorize if we're in node.
    return process.versions !== undefined && process.versions.node !== undefined;
  }
};
const {
  DOMCollection
} = prettyFormat.plugins;

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const ELEMENT_NODE = 1;
const COMMENT_NODE = 8;

// https://github.com/facebook/jest/blob/615084195ae1ae61ddd56162c62bbdda17587569/packages/pretty-format/src/plugins/DOMElement.ts#L50
function filterCommentsAndDefaultIgnoreTagsTags(value) {
  return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches((0, _config.getConfig)().defaultIgnore));
}
function prettyDOM(dom, maxLength, options = {}) {
  if (!dom) {
    dom = (0, _helpers.getDocument)().body;
  }
  if (typeof maxLength !== 'number') {
    maxLength = typeof process !== 'undefined' && typeof process.env !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;
  }
  if (maxLength === 0) {
    return '';
  }
  if (dom.documentElement) {
    dom = dom.documentElement;
  }
  let domTypeName = typeof dom;
  if (domTypeName === 'object') {
    domTypeName = dom.constructor.name;
  } else {
    // To don't fall with `in` operator
    dom = {};
  }
  if (!('outerHTML' in dom)) {
    throw new TypeError(`Expected an element or document but got ${domTypeName}`);
  }
  const {
    filterNode = filterCommentsAndDefaultIgnoreTagsTags,
    ...prettyFormatOptions
  } = options;
  const debugContent = prettyFormat.format(dom, {
    plugins: [(0, _DOMElementFilter.default)(filterNode), DOMCollection],
    printFunctionName: false,
    highlight: shouldHighlight(),
    ...prettyFormatOptions
  });
  return maxLength !== undefined && dom.outerHTML.length > maxLength ? `${debugContent.slice(0, maxLength)}...` : debugContent;
}
const logDOM = (...args) => {
  const userCodeFrame = (0, _getUserCodeFrame.getUserCodeFrame)();
  if (userCodeFrame) {
    console.log(`${prettyDOM(...args)}\n\n${userCodeFrame}`);
  } else {
    console.log(prettyDOM(...args));
  }
};
exports.logDOM = logDOM;