/**
Copyright 2020 Intel Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// node_modules/urlpattern-polyfill/dist/urlpattern.js
var Pe = Object.defineProperty;
var a = (e, t) => Pe(e, "name", { value: t, configurable: true });
var P = class {
  type = 3;
  name = "";
  prefix = "";
  value = "";
  suffix = "";
  modifier = 3;
  constructor(t, r, n, c, l, f) {
    this.type = t, this.name = r, this.prefix = n, this.value = c, this.suffix = l, this.modifier = f;
  }
  hasCustomName() {
    return this.name !== "" && typeof this.name != "number";
  }
};
a(P, "Part");
var Re = /[$_\p{ID_Start}]/u;
var Ee = /[$_\u200C\u200D\p{ID_Continue}]/u;
var v = ".*";
function Oe(e, t) {
  return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
a(Oe, "isASCII");
function D(e, t = false) {
  let r = [], n = 0;
  for (; n < e.length; ) {
    let c = e[n], l = a(function(f) {
      if (!t) throw new TypeError(f);
      r.push({ type: "INVALID_CHAR", index: n, value: e[n++] });
    }, "ErrorOrInvalid");
    if (c === "*") {
      r.push({ type: "ASTERISK", index: n, value: e[n++] });
      continue;
    }
    if (c === "+" || c === "?") {
      r.push({ type: "OTHER_MODIFIER", index: n, value: e[n++] });
      continue;
    }
    if (c === "\\") {
      r.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
      continue;
    }
    if (c === "{") {
      r.push({ type: "OPEN", index: n, value: e[n++] });
      continue;
    }
    if (c === "}") {
      r.push({ type: "CLOSE", index: n, value: e[n++] });
      continue;
    }
    if (c === ":") {
      let f = "", s = n + 1;
      for (; s < e.length; ) {
        let i = e.substr(s, 1);
        if (s === n + 1 && Re.test(i) || s !== n + 1 && Ee.test(i)) {
          f += e[s++];
          continue;
        }
        break;
      }
      if (!f) {
        l(`Missing parameter name at ${n}`);
        continue;
      }
      r.push({ type: "NAME", index: n, value: f }), n = s;
      continue;
    }
    if (c === "(") {
      let f = 1, s = "", i = n + 1, o = false;
      if (e[i] === "?") {
        l(`Pattern cannot start with "?" at ${i}`);
        continue;
      }
      for (; i < e.length; ) {
        if (!Oe(e[i], false)) {
          l(`Invalid character '${e[i]}' at ${i}.`), o = true;
          break;
        }
        if (e[i] === "\\") {
          s += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (f--, f === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (f++, e[i + 1] !== "?")) {
          l(`Capturing groups are not allowed at ${i}`), o = true;
          break;
        }
        s += e[i++];
      }
      if (o) continue;
      if (f) {
        l(`Unbalanced pattern at ${n}`);
        continue;
      }
      if (!s) {
        l(`Missing pattern at ${n}`);
        continue;
      }
      r.push({ type: "REGEX", index: n, value: s }), n = i;
      continue;
    }
    r.push({ type: "CHAR", index: n, value: e[n++] });
  }
  return r.push({ type: "END", index: n, value: "" }), r;
}
a(D, "lexer");
function F(e, t = {}) {
  let r = D(e);
  t.delimiter ??= "/#?", t.prefixes ??= "./";
  let n = `[^${x(t.delimiter)}]+?`, c = [], l = 0, f = 0, s = "", i = /* @__PURE__ */ new Set(), o = a((u) => {
    if (f < r.length && r[f].type === u) return r[f++].value;
  }, "tryConsume"), h = a(() => o("OTHER_MODIFIER") ?? o("ASTERISK"), "tryConsumeModifier"), p = a((u) => {
    let d = o(u);
    if (d !== void 0) return d;
    let { type: g, index: y } = r[f];
    throw new TypeError(`Unexpected ${g} at ${y}, expected ${u}`);
  }, "mustConsume"), A = a(() => {
    let u = "", d;
    for (; d = o("CHAR") ?? o("ESCAPED_CHAR"); ) u += d;
    return u;
  }, "consumeText"), xe = a((u) => u, "DefaultEncodePart"), N = t.encodePart || xe, H = "", $ = a((u) => {
    H += u;
  }, "appendToPendingFixedValue"), M = a(() => {
    H.length && (c.push(new P(3, "", "", N(H), "", 3)), H = "");
  }, "maybeAddPartFromPendingFixedValue"), X = a((u, d, g, y, Z) => {
    let m = 3;
    switch (Z) {
      case "?":
        m = 1;
        break;
      case "*":
        m = 0;
        break;
      case "+":
        m = 2;
        break;
    }
    if (!d && !g && m === 3) {
      $(u);
      return;
    }
    if (M(), !d && !g) {
      if (!u) return;
      c.push(new P(3, "", "", N(u), "", m));
      return;
    }
    let S;
    g ? g === "*" ? S = v : S = g : S = n;
    let k = 2;
    S === n ? (k = 1, S = "") : S === v && (k = 0, S = "");
    let E;
    if (d ? E = d : g && (E = l++), i.has(E)) throw new TypeError(`Duplicate name '${E}'.`);
    i.add(E), c.push(new P(k, E, N(u), S, N(y), m));
  }, "addPart");
  for (; f < r.length; ) {
    let u = o("CHAR"), d = o("NAME"), g = o("REGEX");
    if (!d && !g && (g = o("ASTERISK")), d || g) {
      let m = u ?? "";
      t.prefixes.indexOf(m) === -1 && ($(m), m = ""), M();
      let S = h();
      X(m, d, g, "", S);
      continue;
    }
    let y = u ?? o("ESCAPED_CHAR");
    if (y) {
      $(y);
      continue;
    }
    if (o("OPEN")) {
      let m = A(), S = o("NAME"), k = o("REGEX");
      !S && !k && (k = o("ASTERISK"));
      let E = A();
      p("CLOSE");
      let be = h();
      X(m, S, k, E, be);
      continue;
    }
    M(), p("END");
  }
  return c;
}
a(F, "parse");
function x(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
a(x, "escapeString");
function B(e) {
  return e && e.ignoreCase ? "ui" : "u";
}
a(B, "flags");
function q(e, t, r) {
  return W(F(e, r), t, r);
}
a(q, "stringToRegexp");
function T(e) {
  switch (e) {
    case 0:
      return "*";
    case 1:
      return "?";
    case 2:
      return "+";
    case 3:
      return "";
  }
}
a(T, "modifierToString");
function W(e, t, r = {}) {
  r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= false, r.strict ??= false, r.end ??= true, r.start ??= true, r.endsWith = "";
  let n = r.start ? "^" : "";
  for (let s of e) {
    if (s.type === 3) {
      s.modifier === 3 ? n += x(s.value) : n += `(?:${x(s.value)})${T(s.modifier)}`;
      continue;
    }
    t && t.push(s.name);
    let i = `[^${x(r.delimiter)}]+?`, o = s.value;
    if (s.type === 1 ? o = i : s.type === 0 && (o = v), !s.prefix.length && !s.suffix.length) {
      s.modifier === 3 || s.modifier === 1 ? n += `(${o})${T(s.modifier)}` : n += `((?:${o})${T(s.modifier)})`;
      continue;
    }
    if (s.modifier === 3 || s.modifier === 1) {
      n += `(?:${x(s.prefix)}(${o})${x(s.suffix)})`, n += T(s.modifier);
      continue;
    }
    n += `(?:${x(s.prefix)}`, n += `((?:${o})(?:`, n += x(s.suffix), n += x(s.prefix), n += `(?:${o}))*)${x(s.suffix)})`, s.modifier === 0 && (n += "?");
  }
  let c = `[${x(r.endsWith)}]|$`, l = `[${x(r.delimiter)}]`;
  if (r.end) return r.strict || (n += `${l}?`), r.endsWith.length ? n += `(?=${c})` : n += "$", new RegExp(n, B(r));
  r.strict || (n += `(?:${l}(?=${c}))?`);
  let f = false;
  if (e.length) {
    let s = e[e.length - 1];
    s.type === 3 && s.modifier === 3 && (f = r.delimiter.indexOf(s) > -1);
  }
  return f || (n += `(?=${l}|${c})`), new RegExp(n, B(r));
}
a(W, "partsToRegexp");
var b = { delimiter: "", prefixes: "", sensitive: true, strict: true };
var J = { delimiter: ".", prefixes: "", sensitive: true, strict: true };
var Q = { delimiter: "/", prefixes: "/", sensitive: true, strict: true };
function ee(e, t) {
  return e.length ? e[0] === "/" ? true : !t || e.length < 2 ? false : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : false;
}
a(ee, "isAbsolutePathname");
function te(e, t) {
  return e.startsWith(t) ? e.substring(t.length, e.length) : e;
}
a(te, "maybeStripPrefix");
function ke(e, t) {
  return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
}
a(ke, "maybeStripSuffix");
function _(e) {
  return !e || e.length < 2 ? false : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
}
a(_, "treatAsIPv6Hostname");
var re = ["ftp", "file", "http", "https", "ws", "wss"];
function U(e) {
  if (!e) return true;
  for (let t of re) if (e.test(t)) return true;
  return false;
}
a(U, "isSpecialScheme");
function ne(e, t) {
  if (e = te(e, "#"), t || e === "") return e;
  let r = new URL("https://example.com");
  return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
}
a(ne, "canonicalizeHash");
function se(e, t) {
  if (e = te(e, "?"), t || e === "") return e;
  let r = new URL("https://example.com");
  return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
}
a(se, "canonicalizeSearch");
function ie(e, t) {
  return t || e === "" ? e : _(e) ? K(e) : j(e);
}
a(ie, "canonicalizeHostname");
function ae(e, t) {
  if (t || e === "") return e;
  let r = new URL("https://example.com");
  return r.password = e, r.password;
}
a(ae, "canonicalizePassword");
function oe(e, t) {
  if (t || e === "") return e;
  let r = new URL("https://example.com");
  return r.username = e, r.username;
}
a(oe, "canonicalizeUsername");
function ce(e, t, r) {
  if (r || e === "") return e;
  if (t && !re.includes(t)) return new URL(`${t}:${e}`).pathname;
  let n = e[0] == "/";
  return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
}
a(ce, "canonicalizePathname");
function le(e, t, r) {
  return z(t) === e && (e = ""), r || e === "" ? e : G(e);
}
a(le, "canonicalizePort");
function fe(e, t) {
  return e = ke(e, ":"), t || e === "" ? e : w(e);
}
a(fe, "canonicalizeProtocol");
function z(e) {
  switch (e) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
a(z, "defaultPortForProtocol");
function w(e) {
  if (e === "") return e;
  if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
  throw new TypeError(`Invalid protocol '${e}'.`);
}
a(w, "protocolEncodeCallback");
function he(e) {
  if (e === "") return e;
  let t = new URL("https://example.com");
  return t.username = e, t.username;
}
a(he, "usernameEncodeCallback");
function ue(e) {
  if (e === "") return e;
  let t = new URL("https://example.com");
  return t.password = e, t.password;
}
a(ue, "passwordEncodeCallback");
function j(e) {
  if (e === "") return e;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
  let t = new URL("https://example.com");
  return t.hostname = e, t.hostname;
}
a(j, "hostnameEncodeCallback");
function K(e) {
  if (e === "") return e;
  if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
  return e.toLowerCase();
}
a(K, "ipv6HostnameEncodeCallback");
function G(e) {
  if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
  throw new TypeError(`Invalid port '${e}'.`);
}
a(G, "portEncodeCallback");
function de(e) {
  if (e === "") return e;
  let t = new URL("https://example.com");
  return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
}
a(de, "standardURLPathnameEncodeCallback");
function pe(e) {
  return e === "" ? e : new URL(`data:${e}`).pathname;
}
a(pe, "pathURLPathnameEncodeCallback");
function ge(e) {
  if (e === "") return e;
  let t = new URL("https://example.com");
  return t.search = e, t.search.substring(1, t.search.length);
}
a(ge, "searchEncodeCallback");
function me(e) {
  if (e === "") return e;
  let t = new URL("https://example.com");
  return t.hash = e, t.hash.substring(1, t.hash.length);
}
a(me, "hashEncodeCallback");
var C = class {
  #i;
  #n = [];
  #t = {};
  #e = 0;
  #s = 1;
  #l = 0;
  #o = 0;
  #d = 0;
  #p = 0;
  #g = false;
  constructor(t) {
    this.#i = t;
  }
  get result() {
    return this.#t;
  }
  parse() {
    for (this.#n = D(this.#i, true); this.#e < this.#n.length; this.#e += this.#s) {
      if (this.#s = 1, this.#n[this.#e].type === "END") {
        if (this.#o === 0) {
          this.#b(), this.#f() ? this.#r(9, 1) : this.#h() ? this.#r(8, 1) : this.#r(7, 0);
          continue;
        } else if (this.#o === 2) {
          this.#u(5);
          continue;
        }
        this.#r(10, 0);
        break;
      }
      if (this.#d > 0) if (this.#A()) this.#d -= 1;
      else continue;
      if (this.#T()) {
        this.#d += 1;
        continue;
      }
      switch (this.#o) {
        case 0:
          this.#P() && this.#u(1);
          break;
        case 1:
          if (this.#P()) {
            this.#C();
            let t = 7, r = 1;
            this.#E() ? (t = 2, r = 3) : this.#g && (t = 2), this.#r(t, r);
          }
          break;
        case 2:
          this.#S() ? this.#u(3) : (this.#x() || this.#h() || this.#f()) && this.#u(5);
          break;
        case 3:
          this.#O() ? this.#r(4, 1) : this.#S() && this.#r(5, 1);
          break;
        case 4:
          this.#S() && this.#r(5, 1);
          break;
        case 5:
          this.#y() ? this.#p += 1 : this.#w() && (this.#p -= 1), this.#k() && !this.#p ? this.#r(6, 1) : this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
          break;
        case 6:
          this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
          break;
        case 7:
          this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
          break;
        case 8:
          this.#f() && this.#r(9, 1);
          break;
        case 9:
          break;
        case 10:
          break;
      }
    }
    this.#t.hostname !== void 0 && this.#t.port === void 0 && (this.#t.port = "");
  }
  #r(t, r) {
    switch (this.#o) {
      case 0:
        break;
      case 1:
        this.#t.protocol = this.#c();
        break;
      case 2:
        break;
      case 3:
        this.#t.username = this.#c();
        break;
      case 4:
        this.#t.password = this.#c();
        break;
      case 5:
        this.#t.hostname = this.#c();
        break;
      case 6:
        this.#t.port = this.#c();
        break;
      case 7:
        this.#t.pathname = this.#c();
        break;
      case 8:
        this.#t.search = this.#c();
        break;
      case 9:
        this.#t.hash = this.#c();
        break;
      case 10:
        break;
    }
    this.#o !== 0 && t !== 10 && ([1, 2, 3, 4].includes(this.#o) && [6, 7, 8, 9].includes(t) && (this.#t.hostname ??= ""), [1, 2, 3, 4, 5, 6].includes(this.#o) && [8, 9].includes(t) && (this.#t.pathname ??= this.#g ? "/" : ""), [1, 2, 3, 4, 5, 6, 7].includes(this.#o) && t === 9 && (this.#t.search ??= "")), this.#R(t, r);
  }
  #R(t, r) {
    this.#o = t, this.#l = this.#e + r, this.#e += r, this.#s = 0;
  }
  #b() {
    this.#e = this.#l, this.#s = 0;
  }
  #u(t) {
    this.#b(), this.#o = t;
  }
  #m(t) {
    return t < 0 && (t = this.#n.length - t), t < this.#n.length ? this.#n[t] : this.#n[this.#n.length - 1];
  }
  #a(t, r) {
    let n = this.#m(t);
    return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
  }
  #P() {
    return this.#a(this.#e, ":");
  }
  #E() {
    return this.#a(this.#e + 1, "/") && this.#a(this.#e + 2, "/");
  }
  #S() {
    return this.#a(this.#e, "@");
  }
  #O() {
    return this.#a(this.#e, ":");
  }
  #k() {
    return this.#a(this.#e, ":");
  }
  #x() {
    return this.#a(this.#e, "/");
  }
  #h() {
    if (this.#a(this.#e, "?")) return true;
    if (this.#n[this.#e].value !== "?") return false;
    let t = this.#m(this.#e - 1);
    return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
  }
  #f() {
    return this.#a(this.#e, "#");
  }
  #T() {
    return this.#n[this.#e].type == "OPEN";
  }
  #A() {
    return this.#n[this.#e].type == "CLOSE";
  }
  #y() {
    return this.#a(this.#e, "[");
  }
  #w() {
    return this.#a(this.#e, "]");
  }
  #c() {
    let t = this.#n[this.#e], r = this.#m(this.#l).index;
    return this.#i.substring(r, t.index);
  }
  #C() {
    let t = {};
    Object.assign(t, b), t.encodePart = w;
    let r = q(this.#c(), void 0, t);
    this.#g = U(r);
  }
};
a(C, "Parser");
var V = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"];
var O = "*";
function Se(e, t) {
  if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
  let r = new URL(e, t);
  return { protocol: r.protocol.substring(0, r.protocol.length - 1), username: r.username, password: r.password, hostname: r.hostname, port: r.port, pathname: r.pathname, search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0, hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0 };
}
a(Se, "extractValues");
function R(e, t) {
  return t ? I(e) : e;
}
a(R, "processBaseURLString");
function L(e, t, r) {
  let n;
  if (typeof t.baseURL == "string") try {
    n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = R(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = R(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = R(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = R(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = R(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = R(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = R(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = R(n.hash.substring(1, n.hash.length), r));
  } catch {
    throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
  }
  if (typeof t.protocol == "string" && (e.protocol = fe(t.protocol, r)), typeof t.username == "string" && (e.username = oe(t.username, r)), typeof t.password == "string" && (e.password = ae(t.password, r)), typeof t.hostname == "string" && (e.hostname = ie(t.hostname, r)), typeof t.port == "string" && (e.port = le(t.port, e.protocol, r)), typeof t.pathname == "string") {
    if (e.pathname = t.pathname, n && !ee(e.pathname, r)) {
      let c = n.pathname.lastIndexOf("/");
      c >= 0 && (e.pathname = R(n.pathname.substring(0, c + 1), r) + e.pathname);
    }
    e.pathname = ce(e.pathname, e.protocol, r);
  }
  return typeof t.search == "string" && (e.search = se(t.search, r)), typeof t.hash == "string" && (e.hash = ne(t.hash, r)), e;
}
a(L, "applyInit");
function I(e) {
  return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
a(I, "escapePatternString");
function Te(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
a(Te, "escapeRegexpString");
function Ae(e, t) {
  t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= false, t.strict ??= false, t.end ??= true, t.start ??= true, t.endsWith = "";
  let r = ".*", n = `[^${Te(t.delimiter)}]+?`, c = /[$_\u200C\u200D\p{ID_Continue}]/u, l = "";
  for (let f = 0; f < e.length; ++f) {
    let s = e[f];
    if (s.type === 3) {
      if (s.modifier === 3) {
        l += I(s.value);
        continue;
      }
      l += `{${I(s.value)}}${T(s.modifier)}`;
      continue;
    }
    let i = s.hasCustomName(), o = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), h = f > 0 ? e[f - 1] : null, p = f < e.length - 1 ? e[f + 1] : null;
    if (!o && i && s.type === 1 && s.modifier === 3 && p && !p.prefix.length && !p.suffix.length) if (p.type === 3) {
      let A = p.value.length > 0 ? p.value[0] : "";
      o = c.test(A);
    } else o = !p.hasCustomName();
    if (!o && !s.prefix.length && h && h.type === 3) {
      let A = h.value[h.value.length - 1];
      o = t.prefixes.includes(A);
    }
    o && (l += "{"), l += I(s.prefix), i && (l += `:${s.name}`), s.type === 2 ? l += `(${s.value})` : s.type === 1 ? i || (l += `(${n})`) : s.type === 0 && (!i && (!h || h.type === 3 || h.modifier !== 3 || o || s.prefix !== "") ? l += "*" : l += `(${r})`), s.type === 1 && i && s.suffix.length && c.test(s.suffix[0]) && (l += "\\"), l += I(s.suffix), o && (l += "}"), s.modifier !== 3 && (l += T(s.modifier));
  }
  return l;
}
a(Ae, "partsToPattern");
var Y = class {
  #i;
  #n = {};
  #t = {};
  #e = {};
  #s = {};
  #l = false;
  constructor(t = {}, r, n) {
    try {
      let c;
      if (typeof r == "string" ? c = r : n = r, typeof t == "string") {
        let i = new C(t);
        if (i.parse(), t = i.result, c === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
        t.baseURL = c;
      } else {
        if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
        if (c) throw new TypeError("parameter 1 is not of type 'string'.");
      }
      typeof n > "u" && (n = { ignoreCase: false });
      let l = { ignoreCase: n.ignoreCase === true }, f = { pathname: O, protocol: O, username: O, password: O, hostname: O, port: O, search: O, hash: O };
      this.#i = L(f, t, true), z(this.#i.protocol) === this.#i.port && (this.#i.port = "");
      let s;
      for (s of V) {
        if (!(s in this.#i)) continue;
        let i = {}, o = this.#i[s];
        switch (this.#t[s] = [], s) {
          case "protocol":
            Object.assign(i, b), i.encodePart = w;
            break;
          case "username":
            Object.assign(i, b), i.encodePart = he;
            break;
          case "password":
            Object.assign(i, b), i.encodePart = ue;
            break;
          case "hostname":
            Object.assign(i, J), _(o) ? i.encodePart = K : i.encodePart = j;
            break;
          case "port":
            Object.assign(i, b), i.encodePart = G;
            break;
          case "pathname":
            U(this.#n.protocol) ? (Object.assign(i, Q, l), i.encodePart = de) : (Object.assign(i, b, l), i.encodePart = pe);
            break;
          case "search":
            Object.assign(i, b, l), i.encodePart = ge;
            break;
          case "hash":
            Object.assign(i, b, l), i.encodePart = me;
            break;
        }
        try {
          this.#s[s] = F(o, i), this.#n[s] = W(this.#s[s], this.#t[s], i), this.#e[s] = Ae(this.#s[s], i), this.#l = this.#l || this.#s[s].some((h) => h.type === 2);
        } catch {
          throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`);
        }
      }
    } catch (c) {
      throw new TypeError(`Failed to construct 'URLPattern': ${c.message}`);
    }
  }
  get [Symbol.toStringTag]() {
    return "URLPattern";
  }
  test(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u") return false;
    try {
      typeof t == "object" ? n = L(n, t, false) : n = L(n, Se(t, r), false);
    } catch {
      return false;
    }
    let c;
    for (c of V) if (!this.#n[c].exec(n[c])) return false;
    return true;
  }
  exec(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u") return;
    try {
      typeof t == "object" ? n = L(n, t, false) : n = L(n, Se(t, r), false);
    } catch {
      return null;
    }
    let c = {};
    r ? c.inputs = [t, r] : c.inputs = [t];
    let l;
    for (l of V) {
      let f = this.#n[l].exec(n[l]);
      if (!f) return null;
      let s = {};
      for (let [i, o] of this.#t[l].entries()) if (typeof o == "string" || typeof o == "number") {
        let h = f[i + 1];
        s[o] = h;
      }
      c[l] = { input: n[l] ?? "", groups: s };
    }
    return c;
  }
  static compareComponent(t, r, n) {
    let c = a((i, o) => {
      for (let h of ["type", "modifier", "prefix", "value", "suffix"]) {
        if (i[h] < o[h]) return -1;
        if (i[h] === o[h]) continue;
        return 1;
      }
      return 0;
    }, "comparePart"), l = new P(3, "", "", "", "", 3), f = new P(0, "", "", "", "", 3), s = a((i, o) => {
      let h = 0;
      for (; h < Math.min(i.length, o.length); ++h) {
        let p = c(i[h], o[h]);
        if (p) return p;
      }
      return i.length === o.length ? 0 : c(i[h] ?? l, o[h] ?? l);
    }, "comparePartList");
    return !r.#e[t] && !n.#e[t] ? 0 : r.#e[t] && !n.#e[t] ? s(r.#s[t], [f]) : !r.#e[t] && n.#e[t] ? s([f], n.#s[t]) : s(r.#s[t], n.#s[t]);
  }
  get protocol() {
    return this.#e.protocol;
  }
  get username() {
    return this.#e.username;
  }
  get password() {
    return this.#e.password;
  }
  get hostname() {
    return this.#e.hostname;
  }
  get port() {
    return this.#e.port;
  }
  get pathname() {
    return this.#e.pathname;
  }
  get search() {
    return this.#e.search;
  }
  get hash() {
    return this.#e.hash;
  }
  get hasRegExpGroups() {
    return this.#l;
  }
};
a(Y, "URLPattern");

// node_modules/urlpattern-polyfill/index.js
if (!globalThis.URLPattern) {
  globalThis.URLPattern = Y;
}
export {
  Y as URLPattern
};
