import _typeof from "./typeof.js";
import setFunctionName from "./setFunctionName.js";
import toPropertyKey from "./toPropertyKey.js";
function applyDecs2203RFactory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, n, a, i, o, s) {
    var c;
    switch (a) {
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
        name: o ? "#" + t : toPropertyKey(t),
        "static": i,
        "private": o
      },
      p = {
        v: !1
      };
    0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? o ? (l = r.get, u = r.set) : (l = function l() {
      return this[t];
    }, u = function u(e) {
      this[t] = e;
    }) : 2 === a ? l = function l() {
      return r.value;
    } : (1 !== a && 3 !== a || (l = function l() {
      return r.get.call(this);
    }), 1 !== a && 4 !== a || (u = function u(e) {
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
      return e(s, f);
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
  function applyMemberDec(e, t, r, n, a, i, o, s) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h,
      v = r[0];
    if (o ? (0 === a || 1 === a ? (c = {
      get: r[3],
      set: r[4]
    }, u = "get") : 3 === a ? (c = {
      get: r[3]
    }, u = "get") : 4 === a ? (c = {
      set: r[3]
    }, u = "set") : c = {
      value: r[3]
    }, 0 !== a && (1 === a && setFunctionName(r[4], "#" + n, "set"), setFunctionName(r[3], "#" + n, u))) : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? f = {
      get: c.get,
      set: c.set
    } : 2 === a ? f = c.value : 3 === a ? f = c.get : 4 === a && (f = c.set), "function" == typeof v) void 0 !== (p = memberDec(v, n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? l = p : 1 === a ? (l = p.init, d = p.get || f.get, h = p.set || f.set, f = {
      get: d,
      set: h
    }) : f = p);else for (var g = v.length - 1; g >= 0; g--) {
      var y;
      void 0 !== (p = memberDec(v[g], n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? y = p : 1 === a ? (y = p.init, d = p.get || f.get, h = p.set || f.set, f = {
        get: d,
        set: h
      }) : f = p, void 0 !== y && (void 0 === l ? l = y : "function" == typeof l ? l = [l, y] : l.push(y)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function l(e, t) {
        return t;
      };else if ("function" != typeof l) {
        var m = l;
        l = function l(e, t) {
          for (var r = t, n = 0; n < m.length; n++) r = m[n].call(e, r);
          return r;
        };
      } else {
        var b = l;
        l = function l(e, t) {
          return b.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (c.get = f.get, c.set = f.set) : 2 === a ? c.value = f : 3 === a ? c.get = f : 4 === a && (c.set = f), o ? 1 === a ? (e.push(function (e, t) {
      return f.get.call(e, t);
    }), e.push(function (e, t) {
      return f.set.call(e, t);
    })) : 2 === a ? e.push(f) : e.push(function (e, t) {
      return f.call(e, t);
    }) : Object.defineProperty(t, n, c));
  }
  function applyMemberDecs(e, t) {
    for (var r, n, a = [], i = new Map(), o = new Map(), s = 0; s < t.length; s++) {
      var c = t[s];
      if (Array.isArray(c)) {
        var l,
          u,
          f = c[1],
          p = c[2],
          d = c.length > 3,
          h = f >= 5;
        if (h ? (l = e, 0 != (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) {
          var v = h ? o : i,
            g = v.get(p) || 0;
          if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
          !g && f > 2 ? v.set(p, f) : v.set(p, !0);
        }
        applyMemberDec(a, l, c, p, f, h, d, u);
      }
    }
    return pushInitializers(a, r), pushInitializers(a, n), a;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    return {
      e: applyMemberDecs(e, t),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var o = {
                v: !1
              };
              try {
                var s = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, o)
                });
              } finally {
                o.v = !0;
              }
              void 0 !== s && (assertValidReturnValue(10, s), n = s);
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
function applyDecs2203R(e, t, r) {
  return (applyDecs2203R = applyDecs2203RFactory())(e, t, r);
}
export { applyDecs2203R as default };