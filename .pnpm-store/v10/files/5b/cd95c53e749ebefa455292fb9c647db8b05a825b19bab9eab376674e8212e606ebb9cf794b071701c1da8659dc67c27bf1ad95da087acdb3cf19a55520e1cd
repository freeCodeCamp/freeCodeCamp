function _usingCtx() {
  var r = "function" == typeof SuppressedError ? SuppressedError : function (r, e) {
      var n = Error();
      return n.name = "SuppressedError", n.error = r, n.suppressed = e, n;
    },
    e = {},
    n = [];
  function using(r, e) {
    if (null != e) {
      if (Object(e) !== e) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      if (r) var o = e[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
      if (void 0 === o && (o = e[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r)) var t = o;
      if ("function" != typeof o) throw new TypeError("Object is not disposable.");
      t && (o = function o() {
        try {
          t.call(e);
        } catch (r) {
          return Promise.reject(r);
        }
      }), n.push({
        v: e,
        d: o,
        a: r
      });
    } else r && n.push({
      d: e,
      a: r
    });
    return e;
  }
  return {
    e: e,
    u: using.bind(null, !1),
    a: using.bind(null, !0),
    d: function d() {
      var o,
        t = this.e,
        s = 0;
      function next() {
        for (; o = n.pop();) try {
          if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
          if (o.d) {
            var r = o.d.call(o.v);
            if (o.a) return s |= 2, Promise.resolve(r).then(next, err);
          } else s |= 1;
        } catch (r) {
          return err(r);
        }
        if (1 === s) return t !== e ? Promise.reject(t) : Promise.resolve();
        if (t !== e) throw t;
      }
      function err(n) {
        return t = t !== e ? new r(n, t) : n, next();
      }
      return next();
    }
  };
}
export { _usingCtx as default };