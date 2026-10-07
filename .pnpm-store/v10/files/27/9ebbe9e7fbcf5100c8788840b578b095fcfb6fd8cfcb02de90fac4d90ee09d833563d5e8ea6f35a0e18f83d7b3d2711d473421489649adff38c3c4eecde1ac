"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipRight = exports.zipLeft = exports.zip = exports.sync = exports.succeed = exports.structuredMessage = exports.structuredLogger = exports.stringLogger = exports.simple = exports.prettyLoggerDefault = exports.prettyLogger = exports.none = exports.mapInputOptions = exports.mapInput = exports.map = exports.makeLogger = exports.logfmtLogger = exports.jsonLogger = exports.isLogger = exports.filterLogLevel = exports.LoggerTypeId = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var FiberRefs = _interopRequireWildcard(require("../FiberRefs.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var Inspectable = _interopRequireWildcard(require("../Inspectable.js"));
var List = _interopRequireWildcard(require("../List.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var Cause = _interopRequireWildcard(require("./cause.js"));
var defaultServices = _interopRequireWildcard(require("./defaultServices.js"));
var _console = require("./defaultServices/console.js");
var fiberId_ = _interopRequireWildcard(require("./fiberId.js"));
var logSpan_ = _interopRequireWildcard(require("./logSpan.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const LoggerSymbolKey = "effect/Logger";
/** @internal */
const LoggerTypeId = exports.LoggerTypeId = /*#__PURE__*/Symbol.for(LoggerSymbolKey);
const loggerVariance = {
  /* c8 ignore next */
  _Message: _ => _,
  /* c8 ignore next */
  _Output: _ => _
};
/** @internal */
const makeLogger = log => ({
  [LoggerTypeId]: loggerVariance,
  log,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
});
/** @internal */
exports.makeLogger = makeLogger;
const mapInput = exports.mapInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => makeLogger(options => self.log({
  ...options,
  message: f(options.message)
})));
/** @internal */
const mapInputOptions = exports.mapInputOptions = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => makeLogger(options => self.log(f(options))));
/** @internal */
const filterLogLevel = exports.filterLogLevel = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => makeLogger(options => f(options.logLevel) ? Option.some(self.log(options)) : Option.none()));
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => makeLogger(options => f(self.log(options))));
/** @internal */
const none = exports.none = {
  [LoggerTypeId]: loggerVariance,
  log: _Function.constVoid,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const simple = log => ({
  [LoggerTypeId]: loggerVariance,
  log: ({
    message
  }) => log(message),
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
});
/** @internal */
exports.simple = simple;
const succeed = value => {
  return simple(() => value);
};
/** @internal */
exports.succeed = succeed;
const sync = evaluate => {
  return simple(evaluate);
};
/** @internal */
exports.sync = sync;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => makeLogger(options => [self.log(options), that.log(options)]));
/** @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => map(zip(self, that), tuple => tuple[0]));
/** @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => map(zip(self, that), tuple => tuple[1]));
/**
 * Match strings that do not contain any whitespace characters, double quotes,
 * or equal signs.
 *
 * @internal
 */
const textOnly = /^[^\s"=]*$/;
/**
 * Used by both {@link stringLogger} and {@link logfmtLogger} to render a log
 * message.
 *
 * @internal
 */
const format = (quoteValue, whitespace) => ({
  annotations,
  cause,
  date,
  fiberId,
  logLevel,
  message,
  spans
}) => {
  const formatValue = value => value.match(textOnly) ? value : quoteValue(value);
  const format = (label, value) => `${logSpan_.formatLabel(label)}=${formatValue(value)}`;
  const append = (label, value) => " " + format(label, value);
  let out = format("timestamp", date.toISOString());
  out += append("level", logLevel.label);
  out += append("fiber", fiberId_.threadName(fiberId));
  const messages = Arr.ensure(message);
  for (let i = 0; i < messages.length; i++) {
    out += append("message", Inspectable.toStringUnknown(messages[i], whitespace));
  }
  if (!Cause.isEmptyType(cause)) {
    out += append("cause", Cause.pretty(cause, {
      renderErrorCause: true
    }));
  }
  for (const span of spans) {
    out += " " + logSpan_.render(date.getTime())(span);
  }
  for (const [label, value] of annotations) {
    out += append(label, Inspectable.toStringUnknown(value, whitespace));
  }
  return out;
};
/** @internal */
const escapeDoubleQuotes = s => `"${s.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
/** @internal */
const stringLogger = exports.stringLogger = /*#__PURE__*/makeLogger(/*#__PURE__*/format(escapeDoubleQuotes));
/** @internal */
const logfmtLogger = exports.logfmtLogger = /*#__PURE__*/makeLogger(/*#__PURE__*/format(JSON.stringify, 0));
/** @internal */
const structuredLogger = exports.structuredLogger = /*#__PURE__*/makeLogger(({
  annotations,
  cause,
  date,
  fiberId,
  logLevel,
  message,
  spans
}) => {
  const now = date.getTime();
  const annotationsObj = {};
  const spansObj = {};
  if (HashMap.size(annotations) > 0) {
    for (const [k, v] of annotations) {
      annotationsObj[k] = structuredMessage(v);
    }
  }
  if (List.isCons(spans)) {
    for (const span of spans) {
      spansObj[span.label] = now - span.startTime;
    }
  }
  const messageArr = Arr.ensure(message);
  return {
    message: messageArr.length === 1 ? structuredMessage(messageArr[0]) : messageArr.map(structuredMessage),
    logLevel: logLevel.label,
    timestamp: date.toISOString(),
    cause: Cause.isEmpty(cause) ? undefined : Cause.pretty(cause, {
      renderErrorCause: true
    }),
    annotations: annotationsObj,
    spans: spansObj,
    fiberId: fiberId_.threadName(fiberId)
  };
});
/** @internal */
const structuredMessage = u => {
  switch (typeof u) {
    case "bigint":
    case "function":
    case "symbol":
      {
        return String(u);
      }
    default:
      {
        return Inspectable.toJSON(u);
      }
  }
};
/** @internal */
exports.structuredMessage = structuredMessage;
const jsonLogger = exports.jsonLogger = /*#__PURE__*/map(structuredLogger, Inspectable.stringifyCircular);
/** @internal */
const isLogger = u => {
  return typeof u === "object" && u != null && LoggerTypeId in u;
};
exports.isLogger = isLogger;
const withColor = (text, ...colors) => {
  let out = "";
  for (let i = 0; i < colors.length; i++) {
    out += `\x1b[${colors[i]}m`;
  }
  return out + text + "\x1b[0m";
};
const withColorNoop = (text, ..._colors) => text;
const colors = {
  bold: "1",
  red: "31",
  green: "32",
  yellow: "33",
  blue: "34",
  cyan: "36",
  white: "37",
  gray: "90",
  black: "30",
  bgBrightRed: "101"
};
const logLevelColors = {
  None: [],
  All: [],
  Trace: [colors.gray],
  Debug: [colors.blue],
  Info: [colors.green],
  Warning: [colors.yellow],
  Error: [colors.red],
  Fatal: [colors.bgBrightRed, colors.black]
};
const logLevelStyle = {
  None: "",
  All: "",
  Trace: "color:gray",
  Debug: "color:blue",
  Info: "color:green",
  Warning: "color:orange",
  Error: "color:red",
  Fatal: "background-color:red;color:white"
};
const defaultDateFormat = date => `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
const hasProcessStdout = typeof process === "object" && process !== null && typeof process.stdout === "object" && process.stdout !== null;
const processStdoutIsTTY = hasProcessStdout && process.stdout.isTTY === true;
const hasProcessStdoutOrDeno = hasProcessStdout || "Deno" in globalThis;
/** @internal */
const prettyLogger = options => {
  const mode_ = options?.mode ?? "auto";
  const mode = mode_ === "auto" ? hasProcessStdoutOrDeno ? "tty" : "browser" : mode_;
  const isBrowser = mode === "browser";
  const showColors = typeof options?.colors === "boolean" ? options.colors : processStdoutIsTTY || isBrowser;
  const formatDate = options?.formatDate ?? defaultDateFormat;
  return isBrowser ? prettyLoggerBrowser({
    colors: showColors,
    formatDate
  }) : prettyLoggerTty({
    colors: showColors,
    formatDate,
    stderr: options?.stderr === true
  });
};
exports.prettyLogger = prettyLogger;
const prettyLoggerTty = options => {
  const color = options.colors ? withColor : withColorNoop;
  return makeLogger(({
    annotations,
    cause,
    context,
    date,
    fiberId,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = FiberRefs.getOrDefault(context, defaultServices.currentServices);
    const console = Context.get(services, _console.consoleTag).unsafe;
    const log = options.stderr === true ? console.error : console.log;
    const message = Arr.ensure(message_);
    let firstLine = color(`[${options.formatDate(date)}]`, colors.white) + ` ${color(logLevel.label, ...logLevelColors[logLevel._tag])}` + ` (${fiberId_.threadName(fiberId)})`;
    if (List.isCons(spans)) {
      const now = date.getTime();
      const render = logSpan_.render(now);
      for (const span of spans) {
        firstLine += " " + render(span);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += " " + color(firstMaybeString, colors.bold, colors.cyan);
        messageIndex++;
      }
    }
    log(firstLine);
    console.group();
    if (!Cause.isEmpty(cause)) {
      log(Cause.pretty(cause, {
        renderErrorCause: true
      }));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        log(Inspectable.redact(message[messageIndex]));
      }
    }
    if (HashMap.size(annotations) > 0) {
      for (const [key, value] of annotations) {
        log(color(`${key}:`, colors.bold, colors.white), Inspectable.redact(value));
      }
    }
    console.groupEnd();
  });
};
const prettyLoggerBrowser = options => {
  const color = options.colors ? "%c" : "";
  return makeLogger(({
    annotations,
    cause,
    context,
    date,
    fiberId,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = FiberRefs.getOrDefault(context, defaultServices.currentServices);
    const console = Context.get(services, _console.consoleTag).unsafe;
    const message = Arr.ensure(message_);
    let firstLine = `${color}[${options.formatDate(date)}]`;
    const firstParams = [];
    if (options.colors) {
      firstParams.push("color:gray");
    }
    firstLine += ` ${color}${logLevel.label}${color} (${fiberId_.threadName(fiberId)})`;
    if (options.colors) {
      firstParams.push(logLevelStyle[logLevel._tag], "");
    }
    if (List.isCons(spans)) {
      const now = date.getTime();
      const render = logSpan_.render(now);
      for (const span of spans) {
        firstLine += " " + render(span);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += ` ${color}${firstMaybeString}`;
        if (options.colors) {
          firstParams.push("color:deepskyblue");
        }
        messageIndex++;
      }
    }
    console.groupCollapsed(firstLine, ...firstParams);
    if (!Cause.isEmpty(cause)) {
      console.error(...Cause.prettyErrors(cause));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        console.log(Inspectable.redact(message[messageIndex]));
      }
    }
    if (HashMap.size(annotations) > 0) {
      for (const [key, value] of annotations) {
        const redacted = Inspectable.redact(value);
        if (options.colors) {
          console.log(`%c${key}:`, "color:gray", redacted);
        } else {
          console.log(`${key}:`, redacted);
        }
      }
    }
    console.groupEnd();
  });
};
/** @internal */
const prettyLoggerDefault = exports.prettyLoggerDefault = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Logger/prettyLoggerDefault", () => prettyLogger());
//# sourceMappingURL=logger.js.map