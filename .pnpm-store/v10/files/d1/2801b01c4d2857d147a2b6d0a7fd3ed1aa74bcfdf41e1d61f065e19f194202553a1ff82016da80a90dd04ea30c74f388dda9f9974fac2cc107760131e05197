import * as Context from "../Context.js";
import { dual } from "../Function.js";
import * as core from "./core.js";
import * as defaultServices from "./defaultServices.js";
import * as defaultConsole from "./defaultServices/console.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as layer from "./layer.js";
/** @internal */
export const console = /*#__PURE__*/core.map(/*#__PURE__*/core.fiberRefGet(defaultServices.currentServices), /*#__PURE__*/Context.get(defaultConsole.consoleTag));
/** @internal */
export const consoleWith = f => core.fiberRefGetWith(defaultServices.currentServices, services => f(Context.get(services, defaultConsole.consoleTag)));
/** @internal */
export const withConsole = /*#__PURE__*/dual(2, (effect, value) => core.fiberRefLocallyWith(effect, defaultServices.currentServices, Context.add(defaultConsole.consoleTag, value)));
/** @internal */
export const withConsoleScoped = console => fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(defaultConsole.consoleTag, console));
/** @internal */
export const setConsole = console => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(defaultConsole.consoleTag, console)));
/** @internal */
export const assert = (condition, ...args) => consoleWith(_ => _.assert(condition, ...args));
/** @internal */
export const clear = /*#__PURE__*/consoleWith(_ => _.clear);
/** @internal */
export const count = label => consoleWith(_ => _.count(label));
/** @internal */
export const countReset = label => consoleWith(_ => _.countReset(label));
/** @internal */
export const debug = (...args) => consoleWith(_ => _.debug(...args));
/** @internal */
export const dir = (item, options) => consoleWith(_ => _.dir(item, options));
/** @internal */
export const dirxml = (...args) => consoleWith(_ => _.dirxml(...args));
/** @internal */
export const error = (...args) => consoleWith(_ => _.error(...args));
/** @internal */
export const group = options => consoleWith(_ => fiberRuntime.acquireRelease(_.group(options), () => _.groupEnd));
/** @internal */
export const info = (...args) => consoleWith(_ => _.info(...args));
/** @internal */
export const log = (...args) => consoleWith(_ => _.log(...args));
/** @internal */
export const table = (tabularData, properties) => consoleWith(_ => _.table(tabularData, properties));
/** @internal */
export const time = label => consoleWith(_ => fiberRuntime.acquireRelease(_.time(label), () => _.timeEnd(label)));
/** @internal */
export const timeLog = (label, ...args) => consoleWith(_ => _.timeLog(label, ...args));
/** @internal */
export const trace = (...args) => consoleWith(_ => _.trace(...args));
/** @internal */
export const warn = (...args) => consoleWith(_ => _.warn(...args));
/** @internal */
export const withGroup = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, options) => consoleWith(_ => core.acquireUseRelease(_.group(options), () => self, () => _.groupEnd)));
/** @internal */
export const withTime = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, label) => consoleWith(_ => core.acquireUseRelease(_.time(label), () => self, () => _.timeEnd(label))));
//# sourceMappingURL=console.js.map