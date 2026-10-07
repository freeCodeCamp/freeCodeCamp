var _typeof = require("./typeof.js")["default"];
function applyDecs2203Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, a, n, i, s, o) {
    var c;
    switch (n) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var l,
      u,
      f = {
        kind: c,
        name: s ? "#" + t : t,
        "static": i,
        "private": s
      },
      p = {
        v: !1
      };
    0 !== n && (f.addInitializer = createAddInitializerMethod(a, p)), 0 === n ? s ? (l = r.get, u = r.set) : (l = function l() {
      return this[t];
    }, u = function u(e) {
      this[t] = e;
    }) : 2 === n ? l = function l() {
      return r.value;
    } : (1 !== n && 3 !== n || (l = function l() {
      return r.get.call(this);
    }), 1 !== n && 4 !== n || (u = function u(e) {
      r.set.call(this, e);
    })), f.access = l && u ? {
      get: l,
      set: u
    } : l ? {
      get: l
    } : {
      set: u
    };
    try {
      return e(o, f);
    } finally {
      p.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = _typeof(t);
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function applyMemberDec(e, t, r, a, n, i, s, o) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h = r[0];
    if (s ? c = 0 === n || 1 === n ? {
      get: r[3],
      set: r[4]
    } : 3 === n ? {
      get: r[3]
    } : 4 === n ? {
      set: r[3]
    } : {
      value: r[3]
    } : 0 !== n && (c = Object.getOwnPropertyDescriptor(t, a)), 1 === n ? u = {
      get: c.get,
      set: c.set
    } : 2 === n ? u = c.value : 3 === n ? u = c.get : 4 === n && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? l = f : 1 === n ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = {
      get: p,
      set: d
    }) : u = f);else for (var v = h.length - 1; v >= 0; v--) {
      var g;
      void 0 !== (f = memberDec(h[v], a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? g = f : 1 === n ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = {
        get: p,
        set: d
      }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g)));
    }
    if (0 === n || 1 === n) {
      if (void 0 === l) l = function l(e, t) {
        return t;
      };else if ("function" != typeof l) {
        var y = l;
        l = function l(e, t) {
          for (var r = t, a = 0; a < y.length; a++) r = y[a].call(e, r);
          return r;
        };
      } else {
        var m = l;
        l = function l(e, t) {
          return m.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== n && (1 === n ? (c.get = u.get, c.set = u.set) : 2 === n ? c.value = u : 3 === n ? c.get = u : 4 === n && (c.set = u), s ? 1 === n ? (e.push(function (e, t) {
      return u.get.call(e, t);
    }), e.push(function (e, t) {
      return u.set.call(e, t);
    })) : 2 === n ? e.push(u) : e.push(function (e, t) {
      return u.call(e, t);
    }) : Object.defineProperty(t, a, c));
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    var a = [];
    return function (e, t, r) {
      for (var a, n, i = new Map(), s = new Map(), o = 0; o < r.length; o++) {
        var c = r[o];
        if (Array.isArray(c)) {
          var l,
            u,
            f = c[1],
            p = c[2],
            d = c.length > 3,
            h = f >= 5;
          if (h ? (l = t, 0 != (f -= 5) && (u = n = n || [])) : (l = t.prototype, 0 !== f && (u = a = a || [])), 0 !== f && !d) {
            var v = h ? s : i,
              g = v.get(p) || 0;
            if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
            !g && f > 2 ? v.set(p, f) : v.set(p, !0);
          }
          applyMemberDec(e, l, c, p, f, h, d, u);
        }
      }
      pushInitializers(e, a), pushInitializers(e, n);
    }(a, e, t), function (e, t, r) {
      if (r.length > 0) {
        for (var a = [], n = t, i = t.name, s = r.length - 1; s >= 0; s--) {
          var o = {
            v: !1
          };
          try {
            var c = r[s](n, {
              kind: "class",
              name: i,
              addInitializer: createAddInitializerMethod(a, o)
            });
          } finally {
            o.v = !0;
          }
          void 0 !== c && (assertValidReturnValue(10, c), n = c);
        }
        e.push(n, function () {
          for (var e = 0; e < a.length; e++) a[e].call(n);
        });
      }
    }(a, e, r), a;
  };
}
var applyDecs2203Impl;
function applyDecs2203(e, t, r) {
  return (applyDecs2203Impl = applyDecs2203Impl || applyDecs2203Factory())(e, t, r);
}
module.exports = applyDecs2203, module.exports.__esModule = true, module.exports["default"] = module.exports;