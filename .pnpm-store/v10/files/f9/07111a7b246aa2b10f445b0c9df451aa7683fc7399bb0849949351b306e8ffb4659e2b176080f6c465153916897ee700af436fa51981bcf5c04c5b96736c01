"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTime = exports.withGroup = exports.withConsoleScoped = exports.withConsole = exports.warn = exports.trace = exports.timeLog = exports.time = exports.table = exports.setConsole = exports.log = exports.info = exports.group = exports.error = exports.dirxml = exports.dir = exports.debug = exports.countReset = exports.count = exports.consoleWith = exports.console = exports.clear = exports.assert = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var _Function = require("../Function.js");
var core = _interopRequireWildcard(require("./core.js"));
var defaultServices = _interopRequireWildcard(require("./defaultServices.js"));
var defaultConsole = _interopRequireWildcard(require("./defaultServices/console.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var layer = _interopRequireWildcard(require("./layer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const console = exports.console = /*#__PURE__*/core.map(/*#__PURE__*/core.fiberRefGet(defaultServices.currentServices), /*#__PURE__*/Context.get(defaultConsole.consoleTag));
/** @internal */
const consoleWith = f => core.fiberRefGetWith(defaultServices.currentServices, services => f(Context.get(services, defaultConsole.consoleTag)));
/** @internal */
exports.consoleWith = consoleWith;
const withConsole = exports.withConsole = /*#__PURE__*/(0, _Function.dual)(2, (effect, value) => core.fiberRefLocallyWith(effect, defaultServices.currentServices, Context.add(defaultConsole.consoleTag, value)));
/** @internal */
const withConsoleScoped = console => fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(defaultConsole.consoleTag, console));
/** @internal */
exports.withConsoleScoped = withConsoleScoped;
const setConsole = console => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(defaultConsole.consoleTag, console)));
/** @internal */
exports.setConsole = setConsole;
const assert = (condition, ...args) => consoleWith(_ => _.assert(condition, ...args));
/** @internal */
exports.assert = assert;
const clear = exports.clear = /*#__PURE__*/consoleWith(_ => _.clear);
/** @internal */
const count = label => consoleWith(_ => _.count(label));
/** @internal */
exports.count = count;
const countReset = label => consoleWith(_ => _.countReset(label));
/** @internal */
exports.countReset = countReset;
const debug = (...args) => consoleWith(_ => _.debug(...args));
/** @internal */
exports.debug = debug;
const dir = (item, options) => consoleWith(_ => _.dir(item, options));
/** @internal */
exports.dir = dir;
const dirxml = (...args) => consoleWith(_ => _.dirxml(...args));
/** @internal */
exports.dirxml = dirxml;
const error = (...args) => consoleWith(_ => _.error(...args));
/** @internal */
exports.error = error;
const group = options => consoleWith(_ => fiberRuntime.acquireRelease(_.group(options), () => _.groupEnd));
/** @internal */
exports.group = group;
const info = (...args) => consoleWith(_ => _.info(...args));
/** @internal */
exports.info = info;
const log = (...args) => consoleWith(_ => _.log(...args));
/** @internal */
exports.log = log;
const table = (tabularData, properties) => consoleWith(_ => _.table(tabularData, properties));
/** @internal */
exports.table = table;
const time = label => consoleWith(_ => fiberRuntime.acquireRelease(_.time(label), () => _.timeEnd(label)));
/** @internal */
exports.time = time;
const timeLog = (label, ...args) => consoleWith(_ => _.timeLog(label, ...args));
/** @internal */
exports.timeLog = timeLog;
const trace = (...args) => consoleWith(_ => _.trace(...args));
/** @internal */
exports.trace = trace;
const warn = (...args) => consoleWith(_ => _.warn(...args));
/** @internal */
exports.warn = warn;
const withGroup = exports.withGroup = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, options) => consoleWith(_ => core.acquireUseRelease(_.group(options), () => self, () => _.groupEnd)));
/** @internal */
const withTime = exports.withTime = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, label) => consoleWith(_ => core.acquireUseRelease(_.time(label), () => self, () => _.timeEnd(label))));
//# sourceMappingURL=console.js.map