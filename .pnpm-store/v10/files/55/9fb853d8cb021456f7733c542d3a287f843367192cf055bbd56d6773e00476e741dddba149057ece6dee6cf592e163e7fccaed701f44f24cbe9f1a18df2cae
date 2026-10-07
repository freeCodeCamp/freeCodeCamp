// src/utils.ts
function S(e, t) {
  if (!e)
    throw new Error(t);
}
function f(e, t) {
  return typeof t === e;
}
function w(e) {
  return e instanceof Promise;
}
function u(e, t, r) {
  Object.defineProperty(e, t, r);
}
function l(e, t, r) {
  u(e, t, { value: r, configurable: !0, writable: !0 });
}

// src/constants.ts
var y = Symbol.for("tinyspy:spy");

// src/internal.ts
var x = /* @__PURE__ */ new Set(), h = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.resolves = [], e.next = [];
}, k = (e) => (u(e, y, {
  value: { reset: () => h(e[y]) }
}), e[y]), T = (e) => e[y] || k(e);
function R(e) {
  S(
    f("function", e) || f("undefined", e),
    "cannot spy on a non-function value"
  );
  let t = function(...s) {
    let n = T(t);
    n.called = !0, n.callCount++, n.calls.push(s);
    let d = n.next.shift();
    if (d) {
      n.results.push(d);
      let [a, i] = d;
      if (a === "ok")
        return i;
      throw i;
    }
    let o, c = "ok", p = n.results.length;
    if (n.impl)
      try {
        new.target ? o = Reflect.construct(n.impl, s, new.target) : o = n.impl.apply(this, s), c = "ok";
      } catch (a) {
        throw o = a, c = "error", n.results.push([c, a]), a;
      }
    let g = [c, o];
    return w(o) && o.then(
      (a) => n.resolves[p] = ["ok", a],
      (a) => n.resolves[p] = ["error", a]
    ), n.results.push(g), o;
  };
  l(t, "_isMockFunction", !0), l(t, "length", e ? e.length : 0), l(t, "name", e && e.name || "spy");
  let r = T(t);
  return r.reset(), r.impl = e, t;
}
function v(e) {
  return !!e && e._isMockFunction === !0;
}
function A(e) {
  let t = T(e);
  "returns" in e || (u(e, "returns", {
    get: () => t.results.map(([, r]) => r)
  }), [
    "called",
    "callCount",
    "results",
    "resolves",
    "calls",
    "reset",
    "impl"
  ].forEach(
    (r) => u(e, r, { get: () => t[r], set: (s) => t[r] = s })
  ), l(e, "nextError", (r) => (t.next.push(["error", r]), t)), l(e, "nextResult", (r) => (t.next.push(["ok", r]), t)));
}

// src/spy.ts
function Y(e) {
  let t = R(e);
  return A(t), t;
}

// src/spyOn.ts
var b = (e, t) => {
  let r = Object.getOwnPropertyDescriptor(e, t);
  if (r)
    return [e, r];
  let s = Object.getPrototypeOf(e);
  for (; s !== null; ) {
    let n = Object.getOwnPropertyDescriptor(s, t);
    if (n)
      return [s, n];
    s = Object.getPrototypeOf(s);
  }
}, P = (e, t) => {
  t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
};
function M(e, t, r) {
  S(
    !f("undefined", e),
    "spyOn could not find an object to spy upon"
  ), S(
    f("object", e) || f("function", e),
    "cannot spyOn on a primitive value"
  );
  let [s, n] = (() => {
    if (!f("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), [d, o] = b(e, s) || [];
  S(
    o || s in e,
    `${String(s)} does not exist`
  );
  let c = !1;
  n === "value" && o && !o.value && o.get && (n = "get", c = !0, r = o.get());
  let p;
  o ? p = o[n] : n !== "value" ? p = () => e[s] : p = e[s], p && j(p) && (p = p[y].getOriginal());
  let g = (I) => {
    let { value: F, ...O } = o || {
      configurable: !0,
      writable: !0
    };
    n !== "value" && delete O.writable, O[n] = I, u(e, s, O);
  }, a = () => {
    d !== e ? Reflect.deleteProperty(e, s) : o && !p ? u(e, s, o) : g(p);
  };
  r || (r = p);
  let i = E(R(r), r);
  n === "value" && P(i, p);
  let m = i[y];
  return l(m, "restore", a), l(m, "getOriginal", () => c ? p() : p), l(m, "willCall", (I) => (m.impl = I, i)), g(
    c ? () => (P(i, r), i) : i
  ), x.add(i), i;
}
var K = /* @__PURE__ */ new Set([
  "length",
  "name",
  "prototype"
]);
function D(e) {
  let t = /* @__PURE__ */ new Set(), r = {};
  for (; e && e !== Object.prototype && e !== Function.prototype; ) {
    let s = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (let n of s)
      r[n] || K.has(n) || (t.add(n), r[n] = Object.getOwnPropertyDescriptor(e, n));
    e = Object.getPrototypeOf(e);
  }
  return {
    properties: t,
    descriptors: r
  };
}
function E(e, t) {
  if (!t || // the original is already a spy, so it has all the properties
  y in t)
    return e;
  let { properties: r, descriptors: s } = D(t);
  for (let n of r) {
    let d = s[n];
    b(e, n) || u(e, n, d);
  }
  return e;
}
function Z(e, t, r) {
  let s = M(e, t, r);
  return A(s), ["restore", "getOriginal", "willCall"].forEach((n) => {
    l(s, n, s[y][n]);
  }), s;
}
function j(e) {
  return v(e) && "getOriginal" in e[y];
}

// src/restoreAll.ts
function te() {
  for (let e of x)
    e.restore();
  x.clear();
}
export {
  R as createInternalSpy,
  T as getInternalState,
  M as internalSpyOn,
  te as restoreAll,
  x as spies,
  Y as spy,
  Z as spyOn
};
