"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTracer = exports.withRandom = exports.withConfigProvider = exports.withClock = exports.tracerWith = exports.sleep = exports.shuffle = exports.randomWith = exports.nextRange = exports.nextIntBetween = exports.nextInt = exports.nextBoolean = exports.next = exports.liveServices = exports.defaultServicesWith = exports.currentTimeNanos = exports.currentTimeMillis = exports.currentServices = exports.configProviderWith = exports.configOrDie = exports.config = exports.clockWith = exports.choice = void 0;
var Array = _interopRequireWildcard(require("../Array.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var clock = _interopRequireWildcard(require("./clock.js"));
var configProvider = _interopRequireWildcard(require("./configProvider.js"));
var core = _interopRequireWildcard(require("./core.js"));
var console_ = _interopRequireWildcard(require("./defaultServices/console.js"));
var random = _interopRequireWildcard(require("./random.js"));
var tracer = _interopRequireWildcard(require("./tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const liveServices = exports.liveServices = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/Context.empty(), /*#__PURE__*/Context.add(clock.clockTag, /*#__PURE__*/clock.make()), /*#__PURE__*/Context.add(console_.consoleTag, console_.defaultConsole), /*#__PURE__*/Context.add(random.randomTag, /*#__PURE__*/random.make(/*#__PURE__*/Math.random())), /*#__PURE__*/Context.add(configProvider.configProviderTag, /*#__PURE__*/configProvider.fromEnv()), /*#__PURE__*/Context.add(tracer.tracerTag, tracer.nativeTracer));
/**
 * The `FiberRef` holding the default `Effect` services.
 *
 * @since 2.0.0
 * @category fiberRefs
 */
const currentServices = exports.currentServices = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/DefaultServices/currentServices"), () => core.fiberRefUnsafeMakeContext(liveServices));
// circular with Clock
/** @internal */
const sleep = duration => {
  const decodedDuration = Duration.decode(duration);
  return clockWith(clock => clock.sleep(decodedDuration));
};
/** @internal */
exports.sleep = sleep;
const defaultServicesWith = f => core.withFiberRuntime(fiber => f(fiber.currentDefaultServices));
/** @internal */
exports.defaultServicesWith = defaultServicesWith;
const clockWith = f => defaultServicesWith(services => f(services.unsafeMap.get(clock.clockTag.key)));
/** @internal */
exports.clockWith = clockWith;
const currentTimeMillis = exports.currentTimeMillis = /*#__PURE__*/clockWith(clock => clock.currentTimeMillis);
/** @internal */
const currentTimeNanos = exports.currentTimeNanos = /*#__PURE__*/clockWith(clock => clock.currentTimeNanos);
/** @internal */
const withClock = exports.withClock = /*#__PURE__*/(0, _Function.dual)(2, (effect, c) => core.fiberRefLocallyWith(currentServices, Context.add(clock.clockTag, c))(effect));
// circular with ConfigProvider
/** @internal */
const withConfigProvider = exports.withConfigProvider = /*#__PURE__*/(0, _Function.dual)(2, (self, provider) => core.fiberRefLocallyWith(currentServices, Context.add(configProvider.configProviderTag, provider))(self));
/** @internal */
const configProviderWith = f => defaultServicesWith(services => f(services.unsafeMap.get(configProvider.configProviderTag.key)));
/** @internal */
exports.configProviderWith = configProviderWith;
const config = config => configProviderWith(_ => _.load(config));
/** @internal */
exports.config = config;
const configOrDie = config => core.orDie(configProviderWith(_ => _.load(config)));
// circular with Random
/** @internal */
exports.configOrDie = configOrDie;
const randomWith = f => defaultServicesWith(services => f(services.unsafeMap.get(random.randomTag.key)));
/** @internal */
exports.randomWith = randomWith;
const withRandom = exports.withRandom = /*#__PURE__*/(0, _Function.dual)(2, (effect, value) => core.fiberRefLocallyWith(currentServices, Context.add(random.randomTag, value))(effect));
/** @internal */
const next = exports.next = /*#__PURE__*/randomWith(random => random.next);
/** @internal */
const nextInt = exports.nextInt = /*#__PURE__*/randomWith(random => random.nextInt);
/** @internal */
const nextBoolean = exports.nextBoolean = /*#__PURE__*/randomWith(random => random.nextBoolean);
/** @internal */
const nextRange = (min, max) => randomWith(random => random.nextRange(min, max));
/** @internal */
exports.nextRange = nextRange;
const nextIntBetween = (min, max) => randomWith(random => random.nextIntBetween(min, max));
/** @internal */
exports.nextIntBetween = nextIntBetween;
const shuffle = elements => randomWith(random => random.shuffle(elements));
/** @internal */
exports.shuffle = shuffle;
const choice = elements => {
  const array = Array.fromIterable(elements);
  return core.map(array.length === 0 ? core.fail(new core.NoSuchElementException("Cannot select a random element from an empty array")) : randomWith(random => random.nextIntBetween(0, array.length)), i => array[i]);
};
// circular with Tracer
/** @internal */
exports.choice = choice;
const tracerWith = f => defaultServicesWith(services => f(services.unsafeMap.get(tracer.tracerTag.key)));
/** @internal */
exports.tracerWith = tracerWith;
const withTracer = exports.withTracer = /*#__PURE__*/(0, _Function.dual)(2, (effect, value) => core.fiberRefLocallyWith(currentServices, Context.add(tracer.tracerTag, value))(effect));
//# sourceMappingURL=defaultServices.js.map