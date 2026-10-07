"use strict";
var It = Object.create;
var v = Object.defineProperty;
var Lt = Object.getOwnPropertyDescriptor;
var jt = Object.getOwnPropertyNames;
var Ft = Object.getPrototypeOf, zt = Object.prototype.hasOwnProperty;
var l = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), Ht = (t, e) => {
  for (var n in e)
    v(t, n, { get: e[n], enumerable: !0 });
}, N = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let s of jt(e))
      !zt.call(t, s) && s !== n && v(t, s, { get: () => e[s], enumerable: !(r = Lt(e, s)) || r.enumerable });
  return t;
};
var q = (t, e, n) => (n = t != null ? It(Ft(t)) : {}, N(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? v(n, "default", { value: t, enumerable: !0 }) : n,
  t
)), Wt = (t) => N(v({}, "__esModule", { value: !0 }), t);

// node_modules/isexe/windows.js
var K = l((Pe, D) => {
  "use strict";
  D.exports = W;
  W.sync = Xt;
  var z = require("fs");
  function Bt(t, e) {
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
  function H(t, e, n) {
    return !t.isSymbolicLink() && !t.isFile() ? !1 : Bt(e, n);
  }
  function W(t, e, n) {
    z.stat(t, function(r, s) {
      n(r, r ? !1 : H(s, t, e));
    });
  }
  function Xt(t, e) {
    return H(z.statSync(t), t, e);
  }
});

// node_modules/isexe/mode.js
var U = l((Oe, G) => {
  "use strict";
  G.exports = B;
  B.sync = Gt;
  var M = require("fs");
  function B(t, e, n) {
    M.stat(t, function(r, s) {
      n(r, r ? !1 : X(s, e));
    });
  }
  function Gt(t, e) {
    return X(M.statSync(t), e);
  }
  function X(t, e) {
    return t.isFile() && Ut(t, e);
  }
  function Ut(t, e) {
    var n = t.mode, r = t.uid, s = t.gid, o = e.uid !== void 0 ? e.uid : process.getuid && process.getuid(), i = e.gid !== void 0 ? e.gid : process.getgid && process.getgid(), a = parseInt("100", 8), c = parseInt("010", 8), u = parseInt("001", 8), f = a | c, p = n & u || n & c && s === i || n & a && r === o || n & f && o === 0;
    return p;
  }
});

// node_modules/isexe/index.js
var V = l((ke, Y) => {
  "use strict";
  var Se = require("fs"), b;
  process.platform === "win32" || global.TESTING_WINDOWS ? b = K() : b = U();
  Y.exports = C;
  C.sync = Yt;
  function C(t, e, n) {
    if (typeof e == "function" && (n = e, e = {}), !n) {
      if (typeof Promise != "function")
        throw new TypeError("callback not provided");
      return new Promise(function(r, s) {
        C(t, e || {}, function(o, i) {
          o ? s(o) : r(i);
        });
      });
    }
    b(t, e || {}, function(r, s) {
      r && (r.code === "EACCES" || e && e.ignoreErrors) && (r = null, s = !1), n(r, s);
    });
  }
  function Yt(t, e) {
    try {
      return b.sync(t, e || {});
    } catch (n) {
      if (e && e.ignoreErrors || n.code === "EACCES")
        return !1;
      throw n;
    }
  }
});

// node_modules/which/which.js
var rt = l((Te, nt) => {
  "use strict";
  var g = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", J = require("path"), Vt = g ? ";" : ":", Q = V(), Z = (t) => Object.assign(new Error(`not found: ${t}`), { code: "ENOENT" }), tt = (t, e) => {
    let n = e.colon || Vt, r = t.match(/\//) || g && t.match(/\\/) ? [""] : [
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
  }, et = (t, e, n) => {
    typeof e == "function" && (n = e, e = {}), e || (e = {});
    let { pathEnv: r, pathExt: s, pathExtExe: o } = tt(t, e), i = [], a = (u) => new Promise((f, p) => {
      if (u === r.length)
        return e.all && i.length ? f(i) : p(Z(t));
      let d = r[u], x = /^".*"$/.test(d) ? d.slice(1, -1) : d, m = J.join(x, t), _ = !x && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + m : m;
      f(c(_, u, 0));
    }), c = (u, f, p) => new Promise((d, x) => {
      if (p === s.length)
        return d(a(f + 1));
      let m = s[p];
      Q(u + m, { pathExt: o }, (_, qt) => {
        if (!_ && qt)
          if (e.all)
            i.push(u + m);
          else
            return d(u + m);
        return d(c(u, f, p + 1));
      });
    });
    return n ? a(0).then((u) => n(null, u), n) : a(0);
  }, Jt = (t, e) => {
    e = e || {};
    let { pathEnv: n, pathExt: r, pathExtExe: s } = tt(t, e), o = [];
    for (let i = 0; i < n.length; i++) {
      let a = n[i], c = /^".*"$/.test(a) ? a.slice(1, -1) : a, u = J.join(c, t), f = !c && /^\.[\\\/]/.test(t) ? t.slice(0, 2) + u : u;
      for (let p = 0; p < r.length; p++) {
        let d = f + r[p];
        try {
          if (Q.sync(d, { pathExt: s }))
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
    throw Z(t);
  };
  nt.exports = et;
  et.sync = Jt;
});

// node_modules/path-key/index.js
var ot = l((Ae, P) => {
  "use strict";
  var st = (t = {}) => {
    let e = t.env || process.env;
    return (t.platform || process.platform) !== "win32" ? "PATH" : Object.keys(e).reverse().find((r) => r.toUpperCase() === "PATH") || "Path";
  };
  P.exports = st;
  P.exports.default = st;
});

// node_modules/cross-spawn/lib/util/resolveCommand.js
var at = l((Re, ut) => {
  "use strict";
  var it = require("path"), Qt = rt(), Zt = ot();
  function ct(t, e) {
    let n = t.options.env || process.env, r = process.cwd(), s = t.options.cwd != null, o = s && process.chdir !== void 0 && !process.chdir.disabled;
    if (o)
      try {
        process.chdir(t.options.cwd);
      } catch {
      }
    let i;
    try {
      i = Qt.sync(t.command, {
        path: n[Zt({ env: n })],
        pathExt: e ? it.delimiter : void 0
      });
    } catch {
    } finally {
      o && process.chdir(r);
    }
    return i && (i = it.resolve(s ? t.options.cwd : "", i)), i;
  }
  function te(t) {
    return ct(t) || ct(t, !0);
  }
  ut.exports = te;
});

// node_modules/cross-spawn/lib/util/escape.js
var lt = l(($e, S) => {
  "use strict";
  var O = /([()\][%!^"`<>&|;, *?])/g;
  function ee(t) {
    return t = t.replace(O, "^$1"), t;
  }
  function ne(t, e) {
    return t = `${t}`, t = t.replace(/(\\*)"/g, '$1$1\\"'), t = t.replace(/(\\*)$/, "$1$1"), t = `"${t}"`, t = t.replace(O, "^$1"), e && (t = t.replace(O, "^$1")), t;
  }
  S.exports.command = ee;
  S.exports.argument = ne;
});

// node_modules/shebang-regex/index.js
var dt = l((Ne, pt) => {
  "use strict";
  pt.exports = /^#!(.*)/;
});

// node_modules/shebang-command/index.js
var ht = l((qe, ft) => {
  "use strict";
  var re = dt();
  ft.exports = (t = "") => {
    let e = t.match(re);
    if (!e)
      return null;
    let [n, r] = e[0].replace(/#! ?/, "").split(" "), s = n.split("/").pop();
    return s === "env" ? r : r ? `${s} ${r}` : s;
  };
});

// node_modules/cross-spawn/lib/util/readShebang.js
var gt = l((Ie, mt) => {
  "use strict";
  var k = require("fs"), se = ht();
  function oe(t) {
    let n = Buffer.alloc(150), r;
    try {
      r = k.openSync(t, "r"), k.readSync(r, n, 0, 150, 0), k.closeSync(r);
    } catch {
    }
    return se(n.toString());
  }
  mt.exports = oe;
});

// node_modules/cross-spawn/lib/parse.js
var vt = l((Le, xt) => {
  "use strict";
  var ie = require("path"), Et = at(), wt = lt(), ce = gt(), ue = process.platform === "win32", ae = /\.(?:com|exe)$/i, le = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function pe(t) {
    t.file = Et(t);
    let e = t.file && ce(t.file);
    return e ? (t.args.unshift(t.file), t.command = e, Et(t)) : t.file;
  }
  function de(t) {
    if (!ue)
      return t;
    let e = pe(t), n = !ae.test(e);
    if (t.options.forceShell || n) {
      let r = le.test(e);
      t.command = ie.normalize(t.command), t.command = wt.command(t.command), t.args = t.args.map((o) => wt.argument(o, r));
      let s = [t.command].concat(t.args).join(" ");
      t.args = ["/d", "/s", "/c", `"${s}"`], t.command = process.env.comspec || "cmd.exe", t.options.windowsVerbatimArguments = !0;
    }
    return t;
  }
  function fe(t, e, n) {
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
    return n.shell ? r : de(r);
  }
  xt.exports = fe;
});

// node_modules/cross-spawn/lib/enoent.js
var _t = l((je, yt) => {
  "use strict";
  var T = process.platform === "win32";
  function A(t, e) {
    return Object.assign(new Error(`${e} ${t.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${e} ${t.command}`,
      path: t.command,
      spawnargs: t.args
    });
  }
  function he(t, e) {
    if (!T)
      return;
    let n = t.emit;
    t.emit = function(r, s) {
      if (r === "exit") {
        let o = bt(s, e, "spawn");
        if (o)
          return n.call(t, "error", o);
      }
      return n.apply(t, arguments);
    };
  }
  function bt(t, e) {
    return T && t === 1 && !e.file ? A(e.original, "spawn") : null;
  }
  function me(t, e) {
    return T && t === 1 && !e.file ? A(e.original, "spawnSync") : null;
  }
  yt.exports = {
    hookChildProcess: he,
    verifyENOENT: bt,
    verifyENOENTSync: me,
    notFoundError: A
  };
});

// node_modules/cross-spawn/index.js
var Ot = l((Fe, E) => {
  "use strict";
  var Ct = require("child_process"), R = vt(), $ = _t();
  function Pt(t, e, n) {
    let r = R(t, e, n), s = Ct.spawn(r.command, r.args, r.options);
    return $.hookChildProcess(s, r), s;
  }
  function ge(t, e, n) {
    let r = R(t, e, n), s = Ct.spawnSync(r.command, r.args, r.options);
    return s.error = s.error || $.verifyENOENTSync(s.status, r), s;
  }
  E.exports = Pt;
  E.exports.spawn = Pt;
  E.exports.sync = ge;
  E.exports._parse = R;
  E.exports._enoent = $;
});

// src/main.ts
var be = {};
Ht(be, {
  ExecProcess: () => y,
  NonZeroExitError: () => w,
  exec: () => Nt,
  x: () => $t
});
module.exports = Wt(be);
var St = require("child_process"), kt = require("path"), Tt = require("process");

// src/env.ts
var h = require("path"), Dt = /^path$/i, I = { key: "PATH", value: "" };
function Kt(t) {
  for (let e in t) {
    if (!Object.prototype.hasOwnProperty.call(t, e) || !Dt.test(e))
      continue;
    let n = t[e];
    return n ? { key: e, value: n } : I;
  }
  return I;
}
function Mt(t, e) {
  let n = e.value.split(h.delimiter), r = t, s;
  do
    n.push((0, h.resolve)(r, "node_modules", ".bin")), s = r, r = (0, h.dirname)(r);
  while (r !== s);
  return { key: e.key, value: n.join(h.delimiter) };
}
function L(t, e) {
  let n = {
    ...process.env,
    ...e
  }, r = Mt(t, Kt(n));
  return n[r.key] = r.value, n;
}

// src/stream.ts
var j = require("stream");
var F = (t) => {
  let e = t.length, n = new j.PassThrough(), r = () => {
    --e === 0 && n.emit("end");
  };
  for (let s of t)
    s.pipe(n, { end: !1 }), s.on("end", r);
  return n;
};

// src/main.ts
var At = q(require("readline"), 1), Rt = q(Ot(), 1);

// src/non-zero-exit-error.ts
var w = class extends Error {
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
var Ee = {
  timeout: void 0,
  persist: !1
}, we = {
  windowsHide: !0
};
function xe(t, e) {
  return {
    command: (0, kt.normalize)(t),
    args: e ?? []
  };
}
function ve(t) {
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
var y = class {
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
      ...Ee,
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
    return Nt(e, n, {
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
    let r = F(n), s = At.default.createInterface({
      input: r
    });
    for await (let o of s)
      yield o.toString();
    if (await this._processClosed, e.removeAllListeners(), this._thrownError)
      throw this._thrownError;
    if (this._options?.throwOnError && this.exitCode !== 0 && this.exitCode !== void 0)
      throw new w(this);
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
      throw new w(this, s);
    return s;
  }
  then(e, n) {
    return this._waitForOutput().then(e, n);
  }
  _streamOut;
  _streamErr;
  spawn() {
    let e = (0, Tt.cwd)(), n = this._options, r = {
      ...we,
      ...n.nodeOptions
    }, s = [];
    this._resetState(), n.timeout !== void 0 && s.push(AbortSignal.timeout(n.timeout)), n.signal !== void 0 && s.push(n.signal), n.persist === !0 && (r.detached = !0), s.length > 0 && (r.signal = ve(s)), r.env = L(e, r.env);
    let { command: o, args: i } = xe(this._command, this._args), a = (0, Rt._parse)(o, i, r), c = (0, St.spawn)(
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
}, $t = (t, e, n) => {
  let r = new y(t, e, n);
  return r.spawn(), r;
}, Nt = $t;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExecProcess,
  NonZeroExitError,
  exec,
  x
});
