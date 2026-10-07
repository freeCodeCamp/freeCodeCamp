import { createRequire as __tinyexec_cr } from "node:module";const require = __tinyexec_cr(import.meta.url);
var St = Object.create;
var $ = Object.defineProperty;
var kt = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var At = Object.getPrototypeOf, Rt = Object.prototype.hasOwnProperty;
var h = /* @__PURE__ */ ((t) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
  get: (e, n) => (typeof require < "u" ? require : e)[n]
}) : t)(function(t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var l = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var $t = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let s of Tt(e))
      !Rt.call(t, s) && s !== n && $(t, s, { get: () => e[s], enumerable: !(r = kt(e, s)) || r.enumerable });
  return t;
};
var Nt = (t, e, n) => (n = t != null ? St(At(t)) : {}, $t(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? $(n, "default", { value: t, enumerable: !0 }) : n,
  t
));

// node_modules/isexe/windows.js
var W = l((Se, H) => {
  "use strict";
  H.exports = z;
  z.sync = Wt;
  var j = h("fs");
  function Ht(t, e) {
    var n = e.pathExt !== void 0 ? e.pathExt : process.env.PATHEXT;
    if (!n || (n = n.split(";"), n.indexOf("") !== -1))
      return !0;
    for (var r = 0; r < n.length; r++) {
      var s = n[r].toLowerCase();
      if (s && t.substr(-s.length).toLowerCase() === s)
        return !0;
    }
    return !1;
  }
  function F(t, e, n) {
    return !t.isSymbolicLink() && !t.isFile() ? !1 : Ht(e, n);
  }
  function z(t, e, n) {
    j.stat(t, function(r, s) {
      n(r, r ? !1 : F(s, t, e));
    });
  }
  function Wt(t, e) {
    return F(j.statSync(t), t, e);
  }
});

// node_modules/isexe/mode.js
var X = l((ke, B) => {
  "use strict";
  B.exports = K;
  K.sync = Dt;
  var D = h("fs");
  function K(t, e, n) {
    D.stat(t, function(r, s) {
      n(r, r ? !1 : M(s, e));
    });
  }
  function Dt(t, e) {
    return M(D.statSync(t), e);
  }
  function M(t, e) {
    return t.isFile() && Kt(t, e);
  }
  function Kt(t, e) {
    var n = t.mode, r = t.uid, s = t.gid, o = e.uid !== void 0 ? e.uid : process.getuid && process.getuid(), i = e.gid !== void 0 ? e.gid : process.getgid && process.getgid(), a = parseInt("100", 8), c = parseInt("010", 8), u = parseInt("001", 8), f = a | c, p = n & u || n & c && s === i || n & a && r === o || n & f && o === 0;
    return p;
  }
});

// node_modules/isexe/index.js
var U = l((Ae, G) => {
  "use strict";
  var Te = h("fs"), v;
  process.platform === "win32" || global.TESTING_WINDOWS ? v = W() : v = X();
  G.exports = y;
  y.sync = Mt;
  function y(t, e, n) {
    if (typeof e == "function" && (n = e, e = {}), !n) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(r, s) {
        y(t, e || {}, function(o, i) {
          o ? s(o) : r(i);
        });
      });
    }
    v(t, e || {}, function(r, s) {
      r && (r.code === "EACCES" || e && e.ignoreErrors) && (r = null, s = !1), n(r, s);
    });
  }
  function Mt(t, e) {
    try {
      return v.sync(t, e || {});
    } catch (n) {
      if (e && e.ignoreErrors || n.code === "EACCES")
        return !1;
      throw n;
    }
  }
});

// node_modules/which/which.js
var et = l((Re, tt) => {
  "use strict";
  var g = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", Y = h("path"), Bt = g ? ";" : ":", V = U(), J = (t) => Object.assign(new Error(`not found: ${t}`), { code: "ENOENT" }), Q = (t, e) => {
    let n = e.colon || Bt, r = t.match(/\//) || g && t.match(/\\/) ? [""] : [
      // windows always checks the cwd first
      ...g ? [process.cwd()] : [],
      ...(e.path || process.env.PATH || /* istanbul ignore next: very unusual */
      "").split(n)
    ], s = g ? e.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", o = g ? s.split(n) : [""];
    return g && t.indexOf(".") !== -1 && o[0] !== "" && o.unshift(""), {
      pathEnv: r,
      pathExt: o,
      pathExtExe: s
    };
  }, Z = (t, e, n) => {
    typeof e == "function" && (n = e, e = {}), e || (e = {});
    let { pathEnv: r, pathExt: s, pathExtExe: o } = Q(t, e), i = [], a = (u) => new Promise((f, p) => {
      if (u === r.length)
        return e.all && i.length ? f(i) : p(J(t));
      let d = r[u], w = /^".*"$/.test(d) ? d.slice(1, -1) : d, m = Y.join(w, t), b = !w && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + m : m;
      f(c(b, u, 0));
    }), c = (u, f, p) => new Promise((d, w) => {
      if (p === s.length)
        return d(a(f + 1));
      let m = s[p];
      V(u + m, { pathExt: o }, (b, Ot) => {
        if (!b && Ot)
          if (e.all)
            i.push(u + m);
          else
            return d(u + m);
        return d(c(u, f, p + 1));
      });
    });
    return n ? a(0).then((u) => n(null, u), n) : a(0);
  }, Xt = (t, e) => {
    e = e || {};
    let { pathEnv: n, pathExt: r, pathExtExe: s } = Q(t, e), o = [];
    for (let i = 0; i < n.length; i++) {
      let a = n[i], c = /^".*"$/.test(a) ? a.slice(1, -1) : a, u = Y.join(c, t), f = !c && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + u : u;
      for (let p = 0; p < r.length; p++) {
        let d = f + r[p];
        try {
          if (V.sync(d, { pathExt: s }))
            if (e.all)
              o.push(d);
            else
              return d;
        } catch {
        }
      }
    }
    if (e.all && o.length)
      return o;
    if (e.nothrow)
      return null;
    throw J(t);
  };
  tt.exports = Z;
  Z.sync = Xt;
});

// node_modules/path-key/index.js
var rt = l(($e, _) => {
  "use strict";
  var nt = (t = {}) => {
    let e = t.env || process.env;
    return (t.platform || process.platform) !== "win32" ? "PATH" : Object.keys(e).reverse().find((r) => r.toUpperCase() === "PATH") || "Path";
  };
  _.exports = nt;
  _.exports.default = nt;
});

// node_modules/cross-spawn/lib/util/resolveCommand.js
var ct = l((Ne, it) => {
  "use strict";
  var st = h("path"), Gt = et(), Ut = rt();
  function ot(t, e) {
    let n = t.options.env || process.env, r = process.cwd(), s = t.options.cwd != null, o = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (o)
      try {
        process.chdir(t.options.cwd);
      } catch {
      }
    let i;
    try {
      i = Gt.sync(t.command, {
        path: n[Ut({ env: n })],
        pathExt: e ? st.delimiter : void 0
      });
    } catch {
    } finally {
      o && process.chdir(r);
    }
    return i && (i = st.resolve(s ? t.options.cwd : "", i)), i;
  }
  function Yt(t) {
    return ot(t) || ot(t, !0);
  }
  it.exports = Yt;
});

// node_modules/cross-spawn/lib/util/escape.js
var ut = l((qe, P) => {
  "use strict";
  var C = /([()\][%!^"`<>&|;, *?])/g;
  function Vt(t) {
    return t = t.replace(C, "^$1"), t;
  }
  function Jt(t, e) {
    return t = `${t}`, t = t.replace(/(\\*)"/g, '$1$1\\"'), t = t.replace(/(\\*)$/, "$1$1"), t = `"${t}"`, t = t.replace(C, "^$1"), e && (t = t.replace(C, "^$1")), t;
  }
  P.exports.command = Vt;
  P.exports.argument = Jt;
});

// node_modules/shebang-regex/index.js
var lt = l((Ie, at) => {
  "use strict";
  at.exports = /^#!(.*)/;
});

// node_modules/shebang-command/index.js
var dt = l((Le, pt) => {
  "use strict";
  var Qt = lt();
  pt.exports = (t = "") => {
    let e = t.match(Qt);
    if (!e)
      return null;
    let [n, r] = e[0].replace(/#! ?/, "").split(" "), s = n.split("/").pop();
    return s === "env" ? r : r ? `${s} ${r}` : s;
  };
});

// node_modules/cross-spawn/lib/util/readShebang.js
var ht = l((je, ft) => {
  "use strict";
  var O = h("fs"), Zt = dt();
  function te(t) {
    let n = Buffer.alloc(150), r;
    try {
      r = O.openSync(t, "r"), O.readSync(r, n, 0, 150, 0), O.closeSync(r);
    } catch {
    }
    return Zt(n.toString());
  }
  ft.exports = te;
});

// node_modules/cross-spawn/lib/parse.js
var wt = l((Fe, Et) => {
  "use strict";
  var ee = h("path"), mt = ct(), gt = ut(), ne = ht(), re = process.platform === "win32", se = /\.(?:com|exe)$/i, oe = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function ie(t) {
    t.file = mt(t);
    let e = t.file && ne(t.file);
    return e ? (t.args.unshift(t.file), t.command = e, mt(t)) : t.file;
  }
  function ce(t) {
    if (!re)
      return t;
    let e = ie(t), n = !se.test(e);
    if (t.options.forceShell || n) {
      let r = oe.test(e);
      t.command = ee.normalize(t.command), t.command = gt.command(t.command), t.args = t.args.map((o) => gt.argument(o, r));
      let s = [t.command].concat(t.args).join(" ");
      t.args = ["/d", "/s", "/c", `"${s}"`], t.command = process.env.comspec || "cmd.exe", t.options.windowsVerbatimArguments = !0;
    }
    return t;
  }
  function ue(t, e, n) {
    e && !Array.isArray(e) && (n = e, e = null), e = e ? e.slice(0) : [], n = Object.assign({}, n);
    let r = {
      command: t,
      args: e,
      options: n,
      file: void 0,
      original: {
        command: t,
        args: e
      }
    };
    return n.shell ? r : ce(r);
  }
  Et.exports = ue;
});

// node_modules/cross-spawn/lib/enoent.js
var bt = l((ze, vt) => {
  "use strict";
  var S = process.platform === "win32";
  function k(t, e) {
    return Object.assign(new Error(`${e} ${t.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${e} ${t.command}`,
      path: t.command,
      spawnargs: t.args
    });
  }
  function ae(t, e) {
    if (!S)
      return;
    let n = t.emit;
    t.emit = function(r, s) {
      if (r === "exit") {
        let o = xt(s, e, "spawn");
        if (o)
          return n.call(t, "error", o);
      }
      return n.apply(t, arguments);
    };
  }
  function xt(t, e) {
    return S && t === 1 && !e.file ? k(e.original, "spawn") : null;
  }
  function le(t, e) {
    return S && t === 1 && !e.file ? k(e.original, "spawnSync") : null;
  }
  vt.exports = {
    hookChildProcess: ae,
    verifyENOENT: xt,
    verifyENOENTSync: le,
    notFoundError: k
  };
});

// node_modules/cross-spawn/index.js
var Ct = l((He, E) => {
  "use strict";
  var yt = h("child_process"), T = wt(), A = bt();
  function _t(t, e, n) {
    let r = T(t, e, n), s = yt.spawn(r.command, r.args, r.options);
    return A.hookChildProcess(s, r), s;
  }
  function pe(t, e, n) {
    let r = T(t, e, n), s = yt.spawnSync(r.command, r.args, r.options);
    return s.error = s.error || A.verifyENOENTSync(s.status, r), s;
  }
  E.exports = _t;
  E.exports.spawn = _t;
  E.exports.sync = pe;
  E.exports._parse = T;
  E.exports._enoent = A;
});

// src/main.ts
import { spawn as de } from "child_process";
import { normalize as fe } from "path";
import { cwd as he } from "process";

// src/env.ts
import {
  delimiter as N,
  resolve as qt,
  dirname as It
} from "path";
var Lt = /^path$/i, q = { key: "PATH", value: "" };
function jt(t) {
  for (let e in t) {
    if (!Object.prototype.hasOwnProperty.call(t, e) || !Lt.test(e))
      continue;
    let n = t[e];
    return n ? { key: e, value: n } : q;
  }
  return q;
}
function Ft(t, e) {
  let n = e.value.split(N), r = t, s;
  do
    n.push(qt(r, "node_modules", ".bin")), s = r, r = It(r);
  while (r !== s);
  return { key: e.key, value: n.join(N) };
}
function I(t, e) {
  let n = {
    ...process.env,
    ...e
  }, r = Ft(t, jt(n));
  return n[r.key] = r.value, n;
}

// src/stream.ts
import { PassThrough as zt } from "stream";
var L = (t) => {
  let e = t.length, n = new zt(), r = () => {
    --e === 0 && n.emit("end");
  };
  for (let s of t)
    s.pipe(n, { end: !1 }), s.on("end", r);
  return n;
};

// src/main.ts
var Pt = Nt(Ct(), 1);
import me from "readline";

// src/non-zero-exit-error.ts
var x = class extends Error {
  result;
  output;
  get exitCode() {
    if (this.result.exitCode !== null)
      return this.result.exitCode;
  }
  constructor(e, n) {
    super(`Process exited with non-zero status (${e.exitCode})`), this.result = e, this.output = n;
  }
};

// src/main.ts
var ge = {
  timeout: void 0,
  persist: !1
}, Ee = {
  windowsHide: !0
};
function we(t, e) {
  return {
    command: fe(t),
    args: e ?? []
  };
}
function xe(t) {
  let e = new AbortController();
  for (let n of t) {
    if (n.aborted)
      return e.abort(), n;
    let r = () => {
      e.abort(n.reason);
    };
    n.addEventListener("abort", r, {
      signal: e.signal
    });
  }
  return e.signal;
}
var R = class {
  _process;
  _aborted = !1;
  _options;
  _command;
  _args;
  _resolveClose;
  _processClosed;
  _thrownError;
  get process() {
    return this._process;
  }
  get pid() {
    return this._process?.pid;
  }
  get exitCode() {
    if (this._process && this._process.exitCode !== null)
      return this._process.exitCode;
  }
  constructor(e, n, r) {
    this._options = {
      ...ge,
      ...r
    }, this._command = e, this._args = n ?? [], this._processClosed = new Promise((s) => {
      this._resolveClose = s;
    });
  }
  kill(e) {
    return this._process?.kill(e) === !0;
  }
  get aborted() {
    return this._aborted;
  }
  get killed() {
    return this._process?.killed === !0;
  }
  pipe(e, n, r) {
    return be(e, n, {
      ...r,
      stdin: this
    });
  }
  async *[Symbol.asyncIterator]() {
    let e = this._process;
    if (!e)
      return;
    let n = [];
    this._streamErr && n.push(this._streamErr), this._streamOut && n.push(this._streamOut);
    let r = L(n), s = me.createInterface({
      input: r
    });
    for await (let o of s)
      yield o.toString();
    if (await this._processClosed, e.removeAllListeners(), this._thrownError)
      throw this._thrownError;
    if (this._options?.throwOnError && this.exitCode !== 0 && this.exitCode !== void 0)
      throw new x(this);
  }
  async _waitForOutput() {
    let e = this._process;
    if (!e)
      throw new Error("No process was started");
    let n = "", r = "";
    if (this._streamOut)
      for await (let o of this._streamOut)
        r += o.toString();
    if (this._streamErr)
      for await (let o of this._streamErr)
        n += o.toString();
    if (await this._processClosed, this._options?.stdin && await this._options.stdin, e.removeAllListeners(), this._thrownError)
      throw this._thrownError;
    let s = {
      stderr: n,
      stdout: r,
      exitCode: this.exitCode
    };
    if (this._options.throwOnError && this.exitCode !== 0 && this.exitCode !== void 0)
      throw new x(this, s);
    return s;
  }
  then(e, n) {
    return this._waitForOutput().then(e, n);
  }
  _streamOut;
  _streamErr;
  spawn() {
    let e = he(), n = this._options, r = {
      ...Ee,
      ...n.nodeOptions
    }, s = [];
    this._resetState(), n.timeout !== void 0 && s.push(AbortSignal.timeout(n.timeout)), n.signal !== void 0 && s.push(n.signal), n.persist === !0 && (r.detached = !0), s.length > 0 && (r.signal = xe(s)), r.env = I(e, r.env);
    let { command: o, args: i } = we(this._command, this._args), a = (0, Pt._parse)(o, i, r), c = de(
      a.command,
      a.args,
      a.options
    );
    if (c.stderr && (this._streamErr = c.stderr), c.stdout && (this._streamOut = c.stdout), this._process = c, c.once("error", this._onError), c.once("close", this._onClose), n.stdin !== void 0 && c.stdin && n.stdin.process) {
      let { stdout: u } = n.stdin.process;
      u && u.pipe(c.stdin);
    }
  }
  _resetState() {
    this._aborted = !1, this._processClosed = new Promise((e) => {
      this._resolveClose = e;
    }), this._thrownError = void 0;
  }
  _onError = (e) => {
    if (e.name === "AbortError" && (!(e.cause instanceof Error) || e.cause.name !== "TimeoutError")) {
      this._aborted = !0;
      return;
    }
    this._thrownError = e;
  };
  _onClose = () => {
    this._resolveClose && this._resolveClose();
  };
}, ve = (t, e, n) => {
  let r = new R(t, e, n);
  return r.spawn(), r;
}, be = ve;
export {
  R as ExecProcess,
  x as NonZeroExitError,
  be as exec,
  ve as x
};
