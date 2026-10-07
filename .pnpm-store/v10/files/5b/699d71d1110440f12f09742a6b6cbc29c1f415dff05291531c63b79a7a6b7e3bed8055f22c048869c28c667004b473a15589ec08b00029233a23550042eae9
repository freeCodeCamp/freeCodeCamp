import _typeof from "./typeof.js";
import checkInRHS from "./checkInRHS.js";
import setFunctionName from "./setFunctionName.js";
import toPropertyKey from "./toPropertyKey.js";
function applyDecs2301Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function assertInstanceIfPrivate(e, t) {
    if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
  }
  function memberDec(e, t, r, n, a, i, s, o, c) {
    var u;
    switch (a) {
      case 1:
        u = "accessor";
        break;
      case 2:
        u = "method";
        break;
      case 3:
        u = "getter";
        break;
      case 4:
        u = "setter";
        break;
      default:
        u = "field";
    }
    var l,
      f,
      p = {
        kind: u,
        name: s ? "#" + t : toPropertyKey(t),
        "static": i,
        "private": s
      },
      d = {
        v: !1
      };
    if (0 !== a && (p.addInitializer = createAddInitializerMethod(n, d)), s || 0 !== a && 2 !== a) {
      if (2 === a) l = function l(e) {
        return assertInstanceIfPrivate(c, e), r.value;
      };else {
        var h = 0 === a || 1 === a;
        (h || 3 === a) && (l = s ? function (e) {
          return assertInstanceIfPrivate(c, e), r.get.call(e);
        } : function (e) {
          return r.get.call(e);
        }), (h || 4 === a) && (f = s ? function (e, t) {
          assertInstanceIfPrivate(c, e), r.set.call(e, t);
        } : function (e, t) {
          r.set.call(e, t);
        });
      }
    } else l = function l(e) {
      return e[t];
    }, 0 === a && (f = function f(e, r) {
      e[t] = r;
    });
    var v = s ? c.bind() : function (e) {
      return t in e;
    };
    p.access = l && f ? {
      get: l,
      set: f,
      has: v
    } : l ? {
      get: l,
      has: v
    } : {
      set: f,
      has: v
    };
    try {
      return e(o, p);
    } finally {
      d.v = !0;
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
  function curryThis2(e) {
    return function (t) {
      e(this, t);
    };
  }
  function applyMemberDec(e, t, r, n, a, i, s, o, c) {
    var u,
      l,
      f,
      p,
      d,
      h,
      v,
      y,
      g = r[0];
    if (s ? (0 === a || 1 === a ? (u = {
      get: (d = r[3], function () {
        return d(this);
      }),
      set: curryThis2(r[4])
    }, f = "get") : 3 === a ? (u = {
      get: r[3]
    }, f = "get") : 4 === a ? (u = {
      set: r[3]
    }, f = "set") : u = {
      value: r[3]
    }, 0 !== a && (1 === a && setFunctionName(u.set, "#" + n, "set"), setFunctionName(u[f || "value"], "#" + n, f))) : 0 !== a && (u = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? p = {
      get: u.get,
      set: u.set
    } : 2 === a ? p = u.value : 3 === a ? p = u.get : 4 === a && (p = u.set), "function" == typeof g) void 0 !== (h = memberDec(g, n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? l = h : 1 === a ? (l = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h);else for (var m = g.length - 1; m >= 0; m--) {
      var b;
      void 0 !== (h = memberDec(g[m], n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? b = h : 1 === a ? (b = h.init, v = h.get || p.get, y = h.set || p.set, p = {
        get: v,
        set: y
      }) : p = h, void 0 !== b && (void 0 === l ? l = b : "function" == typeof l ? l = [l, b] : l.push(b)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function l(e, t) {
        return t;
      };else if ("function" != typeof l) {
        var I = l;
        l = function l(e, t) {
          for (var r = t, n = 0; n < I.length; n++) r = I[n].call(e, r);
          return r;
        };
      } else {
        var w = l;
        l = function l(e, t) {
          return w.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (u.get = p.get, u.set = p.set) : 2 === a ? u.value = p : 3 === a ? u.get = p : 4 === a && (u.set = p), s ? 1 === a ? (e.push(function (e, t) {
      return p.get.call(e, t);
    }), e.push(function (e, t) {
      return p.set.call(e, t);
    })) : 2 === a ? e.push(p) : e.push(function (e, t) {
      return p.call(e, t);
    }) : Object.defineProperty(t, n, u));
  }
  function applyMemberDecs(e, t, r) {
    for (var n, a, i, s = [], o = new Map(), c = new Map(), u = 0; u < t.length; u++) {
      var l = t[u];
      if (Array.isArray(l)) {
        var f,
          p,
          d = l[1],
          h = l[2],
          v = l.length > 3,
          y = d >= 5,
          g = r;
        if (y ? (f = e, 0 != (d -= 5) && (p = a = a || []), v && !i && (i = function i(t) {
          return checkInRHS(t) === e;
        }), g = i) : (f = e.prototype, 0 !== d && (p = n = n || [])), 0 !== d && !v) {
          var m = y ? c : o,
            b = m.get(h) || 0;
          if (!0 === b || 3 === b && 4 !== d || 4 === b && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
          !b && d > 2 ? m.set(h, d) : m.set(h, !0);
        }
        applyMemberDec(s, f, l, h, d, y, v, p, g);
      }
    }
    return pushInitializers(s, n), pushInitializers(s, a), s;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r, n) {
    return {
      e: applyMemberDecs(e, t, n),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var s = {
                v: !1
              };
              try {
                var o = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, s)
                });
              } finally {
                s.v = !0;
              }
              void 0 !== o && (assertValidReturnValue(10, o), n = o);
            }
            return [n, function () {
              for (var e = 0; e < r.length; e++) r[e].call(n);
            }];
          }
        }(e, r);
      }
    };
  };
}
function applyDecs2301(e, t, r, n) {
  return (applyDecs2301 = applyDecs2301Factory())(e, t, r, n);
}
export { applyDecs2301 as default };