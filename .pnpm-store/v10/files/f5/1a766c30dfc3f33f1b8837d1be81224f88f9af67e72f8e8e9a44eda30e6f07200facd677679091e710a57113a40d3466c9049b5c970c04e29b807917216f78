"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _usingCtx;
function _usingCtx() {
  var _disposeSuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed) {
      var err = new Error();
      err.name = "SuppressedError";
      err.error = error;
      err.suppressed = suppressed;
      return err;
    },
    empty = {},
    stack = [];
  function using(isAwait, value) {
    if (value != null) {
      if (Object(value) !== value) {
        throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      }
      if (isAwait) {
        var dispose = value[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
      }
      if (dispose === undefined) {
        dispose = value[Symbol.dispose || Symbol["for"]("Symbol.dispose")];
        if (isAwait) {
          var inner = dispose;
        }
      }
      if (typeof dispose !== "function") {
        throw new TypeError("Object is not disposable.");
      }
      if (inner) {
        dispose = function () {
          try {
            inner.call(value);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      stack.push({
        v: value,
        d: dispose,
        a: isAwait
      });
    } else if (isAwait) {
      stack.push({
        d: value,
        a: isAwait
      });
    }
    return value;
  }
  return {
    e: empty,
    u: using.bind(null, false),
    a: using.bind(null, true),
    d: function () {
      var error = this.e,
        state = 0,
        resource;
      function next() {
        while (resource = stack.pop()) {
          try {
            if (!resource.a && state === 1) {
              state = 0;
              stack.push(resource);
              return Promise.resolve().then(next);
            }
            if (resource.d) {
              var disposalResult = resource.d.call(resource.v);
              if (resource.a) {
                state |= 2;
                return Promise.resolve(disposalResult).then(next, err);
              }
            } else {
              state |= 1;
            }
          } catch (e) {
            return err(e);
          }
        }
        if (state === 1) {
          if (error !== empty) {
            return Promise.reject(error);
          } else {
            return Promise.resolve();
          }
        }
        if (error !== empty) throw error;
      }
      function err(e) {
        error = error !== empty ? new _disposeSuppressedError(e, error) : e;
        return next();
      }
      return next();
    }
  };
}

//# sourceMappingURL=usingCtx.js.map
