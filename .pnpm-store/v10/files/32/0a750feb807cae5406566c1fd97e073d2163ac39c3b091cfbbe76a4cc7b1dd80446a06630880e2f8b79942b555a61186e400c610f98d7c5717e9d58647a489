"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encode = exports.decode = void 0;
var Either = _interopRequireWildcard(require("../../Either.js"));
var Base64 = _interopRequireWildcard(require("./base64.js"));
var _common = require("./common.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const encode = data => Base64.encode(data).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
/** @internal */
exports.encode = encode;
const decode = str => {
  const stripped = Base64.stripCrlf(str);
  const length = stripped.length;
  if (length % 4 === 1) {
    return Either.left((0, _common.DecodeException)(stripped, `Length should be a multiple of 4, but is ${length}`));
  }
  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(stripped)) {
    return Either.left((0, _common.DecodeException)(stripped, "Invalid input"));
  }
  // Some variants allow or require omitting the padding '=' signs
  let sanitized = length % 4 === 2 ? `${stripped}==` : length % 4 === 3 ? `${stripped}=` : stripped;
  sanitized = sanitized.replace(/-/g, "+").replace(/_/g, "/");
  return Base64.decode(sanitized);
};
exports.decode = decode;
//# sourceMappingURL=base64Url.js.map