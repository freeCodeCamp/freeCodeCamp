"use strict";
var x = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var J = Object.getOwnPropertyNames;
var U = Object.prototype.hasOwnProperty;
var q = (n) => {
  throw TypeError(n);
};
var W = (n, s, t) => s in n ? x(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t;
var X = (n, s) => {
  for (var t in s)
    x(n, t, { get: s[t], enumerable: !0 });
}, Z = (n, s, t, e) => {
  if (s && typeof s == "object" || typeof s == "function")
    for (let r of J(s))
      !U.call(n, r) && r !== t && x(n, r, { get: () => s[r], enumerable: !(e = G(s, r)) || e.enumerable });
  return n;
};
var tt = (n) => Z(x({}, "__esModule", { value: !0 }), n);
var M = (n, s, t) => W(n, typeof s != "symbol" ? s + "" : s, t), S = (n, s, t) => s.has(n) || q("Cannot " + t);
var d = (n, s, t) => (S(n, s, "read from private field"), t ? t.call(n) : s.get(n)), L = (n, s, t) => s.has(n) ? q("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(n) : s.set(n, t), f = (n, s, t, e) => (S(n, s, "write to private field"), e ? e.call(n, t) : s.set(n, t), t);
var N = (n, s, t, e) => ({
  set _(r) {
    f(n, s, r, t);
  },
  get _() {
    return d(n, s, e);
  }
});

// src/index.ts
var ot = {};
X(ot, {
  Bench: () => k,
  Task: () => v,
  hrtimeNow: () => z,
  now: () => A
});
module.exports = tt(ot);

// node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
var B = class {
  constructor(s) {
    M(this, "value");
    M(this, "next");
    this.value = s;
  }
}, m, E, b, g = class {
  constructor() {
    L(this, m);
    L(this, E);
    L(this, b);
    this.clear();
  }
  enqueue(s) {
    let t = new B(s);
    d(this, m) ? (d(this, E).next = t, f(this, E, t)) : (f(this, m, t), f(this, E, t)), N(this, b)._++;
  }
  dequeue() {
    let s = d(this, m);
    if (s)
      return f(this, m, d(this, m).next), N(this, b)._--, s.value;
  }
  clear() {
    f(this, m, void 0), f(this, E, void 0), f(this, b, 0);
  }
  get size() {
    return d(this, b);
  }
  *[Symbol.iterator]() {
    let s = d(this, m);
    for (; s; )
      yield s.value, s = s.next;
  }
};
m = new WeakMap(), E = new WeakMap(), b = new WeakMap();

// node_modules/.pnpm/p-limit@4.0.0/node_modules/p-limit/index.js
function y(n) {
  if (!((Number.isInteger(n) || n === Number.POSITIVE_INFINITY) && n > 0))
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  let s = new g(), t = 0, e = () => {
    t--, s.size > 0 && s.dequeue()();
  }, r = async (h, p, a) => {
    t++;
    let l = (async () => h(...a))();
    p(l);
    try {
      await l;
    } catch (T) {
    }
    e();
  }, i = (h, p, a) => {
    s.enqueue(r.bind(void 0, h, p, a)), (async () => (await Promise.resolve(), t < n && s.size > 0 && s.dequeue()()))();
  }, c = (h, ...p) => new Promise((a) => {
    i(h, a, p);
  });
  return Object.defineProperties(c, {
    activeCount: {
      get: () => t
    },
    pendingCount: {
      get: () => s.size
    },
    clearQueue: {
      value: () => {
        s.clear();
      }
    }
  }), c;
}

// src/event.ts
function o(n, s = null) {
  let t = new Event(n);
  return s && Object.defineProperty(t, "task", {
    value: s,
    enumerable: !0,
    writable: !1,
    configurable: !1
  }), t;
}

// src/constants.ts
var et = {
  1: 12.71,
  2: 4.303,
  3: 3.182,
  4: 2.776,
  5: 2.571,
  6: 2.447,
  7: 2.365,
  8: 2.306,
  9: 2.262,
  10: 2.228,
  11: 2.201,
  12: 2.179,
  13: 2.16,
  14: 2.145,
  15: 2.131,
  16: 2.12,
  17: 2.11,
  18: 2.101,
  19: 2.093,
  20: 2.086,
  21: 2.08,
  22: 2.074,
  23: 2.069,
  24: 2.064,
  25: 2.06,
  26: 2.056,
  27: 2.052,
  28: 2.048,
  29: 2.045,
  30: 2.042,
  31: 2.0399,
  32: 2.0378,
  33: 2.0357,
  34: 2.0336,
  35: 2.0315,
  36: 2.0294,
  37: 2.0273,
  38: 2.0252,
  39: 2.0231,
  40: 2.021,
  41: 2.0198,
  42: 2.0186,
  43: 2.0174,
  44: 2.0162,
  45: 2.015,
  46: 2.0138,
  47: 2.0126,
  48: 2.0114,
  49: 2.0102,
  50: 2.009,
  51: 2.0081,
  52: 2.0072,
  53: 2.0063,
  54: 2.0054,
  55: 2.0045,
  56: 2.0036,
  57: 2.0027,
  58: 2.0018,
  59: 2.0009,
  60: 2,
  61: 1.9995,
  62: 1.999,
  63: 1.9985,
  64: 1.998,
  65: 1.9975,
  66: 1.997,
  67: 1.9965,
  68: 1.996,
  69: 1.9955,
  70: 1.995,
  71: 1.9945,
  72: 1.994,
  73: 1.9935,
  74: 1.993,
  75: 1.9925,
  76: 1.992,
  77: 1.9915,
  78: 1.991,
  79: 1.9905,
  80: 1.99,
  81: 1.9897,
  82: 1.9894,
  83: 1.9891,
  84: 1.9888,
  85: 1.9885,
  86: 1.9882,
  87: 1.9879,
  88: 1.9876,
  89: 1.9873,
  90: 1.987,
  91: 1.9867,
  92: 1.9864,
  93: 1.9861,
  94: 1.9858,
  95: 1.9855,
  96: 1.9852,
  97: 1.9849,
  98: 1.9846,
  99: 1.9843,
  100: 1.984,
  101: 1.9838,
  102: 1.9836,
  103: 1.9834,
  104: 1.9832,
  105: 1.983,
  106: 1.9828,
  107: 1.9826,
  108: 1.9824,
  109: 1.9822,
  110: 1.982,
  111: 1.9818,
  112: 1.9816,
  113: 1.9814,
  114: 1.9812,
  115: 1.9819,
  116: 1.9808,
  117: 1.9806,
  118: 1.9804,
  119: 1.9802,
  120: 1.98,
  infinity: 1.96
}, P = et;

// src/utils.ts
var st = (n) => n / 1e6, z = () => st(Number(process.hrtime.bigint())), A = () => performance.now();
function nt(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var j = (n, s) => n.reduce((e, r) => e + (r - s) ** 2, 0) / (n.length - 1) || 0, rt = (async () => {
}).constructor, it = (n) => n.constructor === rt, H = async (n) => {
  if (it(n.fn))
    return !0;
  try {
    if (n.opts.beforeEach != null)
      try {
        await n.opts.beforeEach.call(n);
      } catch (e) {
      }
    let s = n.fn(), t = nt(s);
    if (t)
      try {
        await s;
      } catch (e) {
      }
    if (n.opts.afterEach != null)
      try {
        await n.opts.afterEach.call(n);
      } catch (e) {
      }
    return t;
  } catch (s) {
    return !1;
  }
};

// src/task.ts
var v = class extends EventTarget {
  constructor(t, e, r, i = {}) {
    super();
    /*
     * the number of times the task
     * function has been executed
     */
    this.runs = 0;
    this.bench = t, this.name = e, this.fn = r, this.opts = i;
  }
  async loop(t, e) {
    var T;
    let r = this.bench.concurrency === "task", { threshold: i } = this.bench, c = 0, h = [];
    if (this.opts.beforeAll != null)
      try {
        await this.opts.beforeAll.call(this);
      } catch (u) {
        return { error: u };
      }
    let p = await H(this), a = async () => {
      this.opts.beforeEach != null && await this.opts.beforeEach.call(this);
      let u = 0;
      if (p) {
        let w = this.bench.now();
        await this.fn.call(this), u = this.bench.now() - w;
      } else {
        let w = this.bench.now();
        this.fn.call(this), u = this.bench.now() - w;
      }
      h.push(u), c += u, this.opts.afterEach != null && await this.opts.afterEach.call(this);
    }, l = y(i);
    try {
      let u = [];
      for (; (c < t || h.length + l.activeCount + l.pendingCount < e) && !((T = this.bench.signal) != null && T.aborted); )
        r ? u.push(l(a)) : await a();
      u.length && await Promise.all(u);
    } catch (u) {
      return { error: u };
    }
    if (this.opts.afterAll != null)
      try {
        await this.opts.afterAll.call(this);
      } catch (u) {
        return { error: u };
      }
    return { samples: h };
  }
  /**
   * run the current task and write the results in `Task.result` object
   */
  async run() {
    var r, i;
    if ((r = this.result) != null && r.error)
      return this;
    this.dispatchEvent(o("start", this)), await this.bench.setup(this, "run");
    let { samples: t, error: e } = await this.loop(this.bench.time, this.bench.iterations);
    if (this.bench.teardown(this, "run"), t) {
      let c = t.reduce((O, F) => O + F, 0);
      this.runs = t.length, t.sort((O, F) => O - F);
      let h = c / this.runs, p = 1e3 / h, a = t.length, l = a - 1, T = t[0], u = t[l], w = c / t.length || 0, R = j(t, w), I = Math.sqrt(R), _ = I / Math.sqrt(a), K = P[String(Math.round(l) || 1)] || P.infinity, C = _ * K, V = C / w * 100, Q = t[Math.ceil(a * 0.75) - 1], Y = t[Math.ceil(a * 0.99) - 1], $ = t[Math.ceil(a * 0.995) - 1], D = t[Math.ceil(a * 0.999) - 1];
      if ((i = this.bench.signal) != null && i.aborted)
        return this;
      this.setResult({
        totalTime: c,
        min: T,
        max: u,
        hz: p,
        period: h,
        samples: t,
        mean: w,
        variance: R,
        sd: I,
        sem: _,
        df: l,
        critical: K,
        moe: C,
        rme: V,
        p75: Q,
        p99: Y,
        p995: $,
        p999: D
      });
    }
    if (e) {
      if (this.setResult({ error: e }), this.bench.throws)
        throw e;
      this.dispatchEvent(o("error", this)), this.bench.dispatchEvent(o("error", this));
    }
    return this.dispatchEvent(o("cycle", this)), this.bench.dispatchEvent(o("cycle", this)), this.dispatchEvent(o("complete", this)), this;
  }
  /**
   * warmup the current task
   */
  async warmup() {
    var e;
    if ((e = this.result) != null && e.error)
      return;
    this.dispatchEvent(o("warmup", this)), await this.bench.setup(this, "warmup");
    let { error: t } = await this.loop(this.bench.warmupTime, this.bench.warmupIterations);
    if (this.bench.teardown(this, "warmup"), t && (this.setResult({ error: t }), this.bench.throws))
      throw t;
  }
  addEventListener(t, e, r) {
    super.addEventListener(t, e, r);
  }
  removeEventListener(t, e, r) {
    super.removeEventListener(t, e, r);
  }
  /**
   * change the result object values
   */
  setResult(t) {
    this.result = { ...this.result, ...t }, Object.freeze(this.result);
  }
  /**
   * reset the task to make the `Task.runs` a zero-value and remove the `Task.result`
   * object
   */
  reset() {
    this.dispatchEvent(o("reset", this)), this.runs = 0, this.result = void 0;
  }
};

// src/bench.ts
var k = class extends EventTarget {
  constructor(t = {}) {
    var e, r, i, c, h, p, a, l;
    super();
    /*
     * @private the task map
     */
    this._tasks = /* @__PURE__ */ new Map();
    this._todos = /* @__PURE__ */ new Map();
    /**
    * Executes tasks concurrently based on the specified concurrency mode.
    *
    * - When `mode` is set to `null` (default), concurrency is disabled.
    * - When `mode` is set to 'task', each task's iterations (calls of a task function) run concurrently.
    * - When `mode` is set to 'bench', different tasks within the bench run concurrently.
    */
    this.concurrency = null;
    /**
     * The maximum number of concurrent tasks to run. Defaults to Infinity.
     */
    this.threshold = 1 / 0;
    this.warmupTime = 100;
    this.warmupIterations = 5;
    this.time = 500;
    this.iterations = 10;
    this.now = A;
    this.now = (e = t.now) != null ? e : this.now, this.warmupTime = (r = t.warmupTime) != null ? r : this.warmupTime, this.warmupIterations = (i = t.warmupIterations) != null ? i : this.warmupIterations, this.time = (c = t.time) != null ? c : this.time, this.iterations = (h = t.iterations) != null ? h : this.iterations, this.signal = t.signal, this.throws = (p = t.throws) != null ? p : !1, this.setup = (a = t.setup) != null ? a : () => {
    }, this.teardown = (l = t.teardown) != null ? l : () => {
    }, this.signal && this.signal.addEventListener(
      "abort",
      () => {
        this.dispatchEvent(o("abort"));
      },
      { once: !0 }
    );
  }
  runTask(t) {
    var e;
    return (e = this.signal) != null && e.aborted ? t : t.run();
  }
  /**
   * run the added tasks that were registered using the
   * {@link add} method.
   * Note: This method does not do any warmup. Call {@link warmup} for that.
   */
  async run() {
    if (this.concurrency === "bench")
      return this.runConcurrently(this.threshold, this.concurrency);
    this.dispatchEvent(o("start"));
    let t = [];
    for (let e of [...this._tasks.values()])
      t.push(await this.runTask(e));
    return this.dispatchEvent(o("complete")), t;
  }
  /**
   * See Bench.{@link concurrency}
   */
  async runConcurrently(t = 1 / 0, e = "bench") {
    if (this.threshold = t, this.concurrency = e, e === "task")
      return this.run();
    this.dispatchEvent(o("start"));
    let r = y(t), i = [];
    for (let h of [...this._tasks.values()])
      i.push(r(() => this.runTask(h)));
    let c = await Promise.all(i);
    return this.dispatchEvent(o("complete")), c;
  }
  /**
   * warmup the benchmark tasks.
   * This is not run by default by the {@link run} method.
   */
  async warmup() {
    if (this.concurrency === "bench") {
      await this.warmupConcurrently(this.threshold, this.concurrency);
      return;
    }
    this.dispatchEvent(o("warmup"));
    for (let [, t] of this._tasks)
      await t.warmup();
  }
  /**
   * warmup the benchmark tasks concurrently.
   * This is not run by default by the {@link runConcurrently} method.
   */
  async warmupConcurrently(t = 1 / 0, e = "bench") {
    if (this.threshold = t, this.concurrency = e, e === "task") {
      await this.warmup();
      return;
    }
    this.dispatchEvent(o("warmup"));
    let r = y(t), i = [];
    for (let [, c] of this._tasks)
      i.push(r(() => c.warmup()));
    await Promise.all(i);
  }
  /**
   * reset each task and remove its result
   */
  reset() {
    this.dispatchEvent(o("reset")), this._tasks.forEach((t) => {
      t.reset();
    });
  }
  /**
   * add a benchmark task to the task map
   */
  add(t, e, r = {}) {
    let i = new v(this, t, e, r);
    return this._tasks.set(t, i), this.dispatchEvent(o("add", i)), this;
  }
  /**
   * add a benchmark todo to the todo map
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  todo(t, e = () => {
  }, r = {}) {
    let i = new v(this, t, e, r);
    return this._todos.set(t, i), this.dispatchEvent(o("todo", i)), this;
  }
  /**
   * remove a benchmark task from the task map
   */
  remove(t) {
    let e = this.getTask(t);
    return e && (this.dispatchEvent(o("remove", e)), this._tasks.delete(t)), this;
  }
  addEventListener(t, e, r) {
    super.addEventListener(t, e, r);
  }
  removeEventListener(t, e, r) {
    super.removeEventListener(t, e, r);
  }
  /**
   * table of the tasks results
   */
  table(t) {
    return this.tasks.map((e) => {
      if (e.result) {
        if (e.result.error)
          throw e.result.error;
        return (t == null ? void 0 : t(e)) || {
          "Task Name": e.name,
          "ops/sec": e.result.error ? "NaN" : parseInt(e.result.hz.toString(), 10).toLocaleString(),
          "Average Time (ns)": e.result.error ? "NaN" : e.result.mean * 1e3 * 1e3,
          Margin: e.result.error ? "NaN" : `\xB1${e.result.rme.toFixed(2)}%`,
          Samples: e.result.error ? "NaN" : e.result.samples.length
        };
      }
      return null;
    });
  }
  /**
   * (getter) tasks results as an array
   */
  get results() {
    return [...this._tasks.values()].map((t) => t.result);
  }
  /**
   * (getter) tasks as an array
   */
  get tasks() {
    return [...this._tasks.values()];
  }
  get todos() {
    return [...this._todos.values()];
  }
  /**
   * get a task based on the task name
   */
  getTask(t) {
    return this._tasks.get(t);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Bench,
  Task,
  hrtimeNow,
  now
});
