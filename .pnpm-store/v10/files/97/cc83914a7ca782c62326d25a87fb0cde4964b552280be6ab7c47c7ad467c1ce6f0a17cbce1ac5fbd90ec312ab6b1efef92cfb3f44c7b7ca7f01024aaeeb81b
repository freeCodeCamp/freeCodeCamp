function dispose_SuppressedError(r, e) {
  return "undefined" != typeof SuppressedError ? dispose_SuppressedError = SuppressedError : (dispose_SuppressedError = function dispose_SuppressedError(r, e) {
    this.suppressed = e, this.error = r, this.stack = Error().stack;
  }, dispose_SuppressedError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: dispose_SuppressedError,
      writable: !0,
      configurable: !0
    }
  })), new dispose_SuppressedError(r, e);
}
function _dispose(r, e, s) {
  function next() {
    for (; r.length > 0;) try {
      var o = r.pop(),
        p = o.d.call(o.v);
      if (o.a) return Promise.resolve(p).then(next, err);
    } catch (r) {
      return err(r);
    }
    if (s) throw e;
  }
  function err(r) {
    return e = s ? new dispose_SuppressedError(e, r) : r, s = !0, next();
  }
  return next();
}
export { _dispose as default };