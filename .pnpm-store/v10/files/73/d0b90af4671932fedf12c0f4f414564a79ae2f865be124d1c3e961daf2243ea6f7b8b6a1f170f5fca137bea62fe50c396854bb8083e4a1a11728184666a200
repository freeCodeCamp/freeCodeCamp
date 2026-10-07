"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.screen = void 0;
var _lzString = _interopRequireDefault(require("lz-string"));
var _getQueriesForElement = require("./get-queries-for-element");
var _helpers = require("./helpers");
var _prettyDom = require("./pretty-dom");
var queries = _interopRequireWildcard(require("./queries"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// WARNING: `lz-string` only has a default export but statically we assume named exports are allowed
// TODO: Statically verify we don't rely on NodeJS implicit named imports.

function unindent(string) {
  // remove white spaces first, to save a few bytes.
  // testing-playground will reformat on load any ways.
  return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
}
function encode(value) {
  return _lzString.default.compressToEncodedURIComponent(unindent(value));
}
function getPlaygroundUrl(markup) {
  return `https://testing-playground.com/#markup=${encode(markup)}`;
}
const debug = (element, maxLength, options) => Array.isArray(element) ? element.forEach(el => (0, _prettyDom.logDOM)(el, maxLength, options)) : (0, _prettyDom.logDOM)(element, maxLength, options);
const logTestingPlaygroundURL = (element = (0, _helpers.getDocument)().body) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!element || !('innerHTML' in element)) {
    console.log(`The element you're providing isn't a valid DOM element.`);
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!element.innerHTML) {
    console.log(`The provided element doesn't have any children.`);
    return;
  }
  const playgroundUrl = getPlaygroundUrl(element.innerHTML);
  console.log(`Open this URL in your browser\n\n${playgroundUrl}`);
  return playgroundUrl;
};
const initialValue = {
  debug,
  logTestingPlaygroundURL
};
const screen = exports.screen = typeof document !== 'undefined' && document.body // eslint-disable-line @typescript-eslint/no-unnecessary-condition
? (0, _getQueriesForElement.getQueriesForElement)(document.body, queries, initialValue) : Object.keys(queries).reduce((helpers, key) => {
  // `key` is for all intents and purposes the type of keyof `helpers`, which itself is the type of `initialValue` plus incoming properties from `queries`
  // if `Object.keys(something)` returned Array<keyof typeof something> this explicit type assertion would not be necessary
  // see https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript
  helpers[key] = () => {
    throw new TypeError('For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error');
  };
  return helpers;
}, initialValue);