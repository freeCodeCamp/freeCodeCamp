var OverloadYield = require("./OverloadYield.js");
function _wrapAsyncGenerator(e) {
  return function () {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t, n) {
    try {
      var r = e[t](n),
        o = r.value,
        u = o instanceof OverloadYield;
      Promise.resolve(u ? o.v : o).then(function (n) {
        if (u) {
          var i = "return" === t && o.k ? t : "next";
          if (!o.k || n.done) return resume(i, n);
          n = e[i](n).value;
        }
        settle(!!r.done, n);
      }, function (e) {
        resume("throw", e);
      });
    } catch (e) {
      settle(2, e);
    }
  }
  function settle(e, r) {
    2 === e ? t.reject(r) : t.resolve({
      value: r,
      done: e
    }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function (e, r) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: r,
        resolve: o,
        reject: u,
        next: null
      };
      n ? n = n.next = i : (t = n = i, resume(e, r));
    });
  }, "function" != typeof e["return"] && (this["return"] = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, AsyncGenerator.prototype.next = function (e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype["throw"] = function (e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype["return"] = function (e) {
  return this._invoke("return", e);
};
module.exports = _wrapAsyncGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;