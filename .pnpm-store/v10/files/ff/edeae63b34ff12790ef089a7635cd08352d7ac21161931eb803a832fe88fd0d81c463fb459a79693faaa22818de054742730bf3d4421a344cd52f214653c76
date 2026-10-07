"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConsole = exports.consoleTag = exports.TypeId = void 0;
var Context = _interopRequireWildcard(require("../../Context.js"));
var core = _interopRequireWildcard(require("../core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Console");
/** @internal */
const consoleTag = exports.consoleTag = /*#__PURE__*/Context.GenericTag("effect/Console");
/** @internal */
const defaultConsole = exports.defaultConsole = {
  [TypeId]: TypeId,
  assert(condition, ...args) {
    return core.sync(() => {
      console.assert(condition, ...args);
    });
  },
  clear: /*#__PURE__*/core.sync(() => {
    console.clear();
  }),
  count(label) {
    return core.sync(() => {
      console.count(label);
    });
  },
  countReset(label) {
    return core.sync(() => {
      console.countReset(label);
    });
  },
  debug(...args) {
    return core.sync(() => {
      console.debug(...args);
    });
  },
  dir(item, options) {
    return core.sync(() => {
      console.dir(item, options);
    });
  },
  dirxml(...args) {
    return core.sync(() => {
      console.dirxml(...args);
    });
  },
  error(...args) {
    return core.sync(() => {
      console.error(...args);
    });
  },
  group(options) {
    return options?.collapsed ? core.sync(() => console.groupCollapsed(options?.label)) : core.sync(() => console.group(options?.label));
  },
  groupEnd: /*#__PURE__*/core.sync(() => {
    console.groupEnd();
  }),
  info(...args) {
    return core.sync(() => {
      console.info(...args);
    });
  },
  log(...args) {
    return core.sync(() => {
      console.log(...args);
    });
  },
  table(tabularData, properties) {
    return core.sync(() => {
      console.table(tabularData, properties);
    });
  },
  time(label) {
    return core.sync(() => console.time(label));
  },
  timeEnd(label) {
    return core.sync(() => console.timeEnd(label));
  },
  timeLog(label, ...args) {
    return core.sync(() => {
      console.timeLog(label, ...args);
    });
  },
  trace(...args) {
    return core.sync(() => {
      console.trace(...args);
    });
  },
  warn(...args) {
    return core.sync(() => {
      console.warn(...args);
    });
  },
  unsafe: console
};
//# sourceMappingURL=console.js.map