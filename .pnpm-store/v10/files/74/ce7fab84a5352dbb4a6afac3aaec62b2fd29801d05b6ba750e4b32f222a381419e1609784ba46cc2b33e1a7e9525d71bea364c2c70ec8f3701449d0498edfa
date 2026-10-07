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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const shouldHighlight = () => {
  let colors;
  try {
    var _process;
    colors = JSON.parse((_process = process) == null || (_process = _process.env) == null ? void 0 : _process.COLORS);
  } catch (e) {
    // If this throws, process?.env?.COLORS wasn't parsable. Since we only
    // care about `true` or `false`, we can safely ignore the error.
  }
  if (typeof colors === 'boolean') {
    // If `colors` is set explicitly (both `true` and `false`), use that value.
    return colors;
  } else {
    // If `colors` is not set, colorize if we're in node.
    return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined;
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
    maxLength = typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;
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