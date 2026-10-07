// src/index.ts
var b = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
function i(e) {
  return String(e);
}
i.open = "";
i.close = "";
function p() {
  let e = {
    isColorSupported: !1,
    reset: i
  };
  for (let r in b)
    e[r] = i;
  return e;
}
function B() {
  let e = typeof process != "undefined" ? process : void 0, r = (e == null ? void 0 : e.env) || {}, a = r.FORCE_TTY !== "false", l = (e == null ? void 0 : e.argv) || [];
  return !("NO_COLOR" in r || l.includes("--no-color")) && ("FORCE_COLOR" in r || l.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || a && r.TERM !== "dumb" || "CI" in r) || typeof window != "undefined" && !!window.chrome;
}
function C({ force: e } = {}) {
  let r = e || B(), a = (t, o, u, n) => {
    let g = "", s = 0;
    do
      g += t.substring(s, n) + u, s = n + o.length, n = t.indexOf(o, s);
    while (~n);
    return g + t.substring(s);
  }, l = (t, o, u = t) => {
    let n = (g) => {
      let s = String(g), h = s.indexOf(o, t.length);
      return ~h ? t + a(s, o, u, h) + o : t + s + o;
    };
    return n.open = t, n.close = o, n;
  }, c = {
    isColorSupported: r
  }, f = (t) => `\x1B[${t}m`;
  for (let t in b) {
    let o = b[t];
    c[t] = r ? l(
      f(o[0]),
      f(o[1]),
      o[2]
    ) : i;
  }
  return c;
}
var d = C();
function m() {
  Object.assign(d, p());
}
function w() {
  Object.assign(d, C({ force: !0 }));
}
var y = d;
export {
  C as createColors,
  y as default,
  m as disableDefaultColors,
  w as enabledDefaultColors,
  p as getDefaultColors,
  B as isSupported
};
