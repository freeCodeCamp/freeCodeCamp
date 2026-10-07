"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoizeThunk = exports.isSingle = exports.isNonEmpty = exports.getKeysForIndexSignature = exports.formatPathKey = exports.formatPath = void 0;
var Inspectable = _interopRequireWildcard(require("../../Inspectable.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const getKeysForIndexSignature = (input, parameter) => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input);
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from);
  }
};
/** @internal */
exports.getKeysForIndexSignature = getKeysForIndexSignature;
const memoizeThunk = f => {
  let done = false;
  let a;
  return () => {
    if (done) {
      return a;
    }
    a = f();
    done = true;
    return a;
  };
};
/** @internal */
exports.memoizeThunk = memoizeThunk;
const isNonEmpty = x => Array.isArray(x);
/** @internal */
exports.isNonEmpty = isNonEmpty;
const isSingle = x => !Array.isArray(x);
/** @internal */
exports.isSingle = isSingle;
const formatPathKey = key => `[${Inspectable.formatPropertyKey(key)}]`;
/** @internal */
exports.formatPathKey = formatPathKey;
const formatPath = path => isNonEmpty(path) ? path.map(formatPathKey).join("") : formatPathKey(path);
exports.formatPath = formatPath;
//# sourceMappingURL=util.js.map