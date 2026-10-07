function _using(o, n, e) {
  if (null == n) return n;
  if (Object(n) !== n) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
  if (e) var r = n[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
  if (null == r && (r = n[Symbol.dispose || Symbol["for"]("Symbol.dispose")]), "function" != typeof r) throw new TypeError("Property [Symbol.dispose] is not a function.");
  return o.push({
    v: n,
    d: r,
    a: e
  }), n;
}
module.exports = _using, module.exports.__esModule = true, module.exports["default"] = module.exports;