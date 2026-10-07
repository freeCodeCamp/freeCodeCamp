"use strict";

exports.__esModule = true;
exports.StaticProperties = exports.PromiseDependenciesWithIterators = exports.PromiseDependencies = exports.InstanceProperties = exports.DecoratorMetadataDependencies = exports.CommonIterators = exports.BuiltIns = void 0;
var _data = _interopRequireDefault(require("../core-js-compat/data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const polyfillsOrder = {};
Object.keys(_data.default).forEach((name, index) => {
  polyfillsOrder[name] = index;
});
const define = (pure, global, name = global[0], exclude) => {
  return {
    name,
    pure,
    global: global.sort((a, b) => polyfillsOrder[a] - polyfillsOrder[b]),
    exclude
  };
};
const typed = name => define(null, [name, ...TypedArrayDependencies]);
const ArrayNatureIterators = ["es.array.iterator", "web.dom-collections.iterator"];
const CommonIterators = ["es.string.iterator", ...ArrayNatureIterators];
exports.CommonIterators = CommonIterators;
const ArrayNatureIteratorsWithTag = ["es.object.to-string", ...ArrayNatureIterators];
const CommonIteratorsWithTag = ["es.object.to-string", ...CommonIterators];
const ErrorDependencies = ["es.error.cause", "es.error.to-string"];
const SuppressedErrorDependencies = ["esnext.suppressed-error.constructor", ...ErrorDependencies];
const TypedArrayDependencies = ["es.typed-array.at", "es.typed-array.copy-within", "es.typed-array.every", "es.typed-array.fill", "es.typed-array.filter", "es.typed-array.find", "es.typed-array.find-index", "es.typed-array.find-last", "es.typed-array.find-last-index", "es.typed-array.for-each", "es.typed-array.includes", "es.typed-array.index-of", "es.typed-array.iterator", "es.typed-array.join", "es.typed-array.last-index-of", "es.typed-array.map", "es.typed-array.reduce", "es.typed-array.reduce-right", "es.typed-array.reverse", "es.typed-array.set", "es.typed-array.slice", "es.typed-array.some", "es.typed-array.sort", "es.typed-array.subarray", "es.typed-array.to-locale-string", "es.typed-array.to-reversed", "es.typed-array.to-sorted", "es.typed-array.to-string", "es.typed-array.with", "es.object.to-string", "es.array.iterator", "es.array-buffer.slice", "esnext.array-buffer.detached", "esnext.array-buffer.transfer", "esnext.array-buffer.transfer-to-fixed-length", "esnext.typed-array.filter-reject", "esnext.typed-array.group-by", "esnext.typed-array.to-spliced", "esnext.typed-array.unique-by"];
const PromiseDependencies = ["es.promise", "es.object.to-string"];
exports.PromiseDependencies = PromiseDependencies;
const PromiseDependenciesWithIterators = [...PromiseDependencies, ...CommonIterators];
exports.PromiseDependenciesWithIterators = PromiseDependenciesWithIterators;
const SymbolDependencies = ["es.symbol", "es.symbol.description", "es.object.to-string"];
const MapDependencies = ["es.map", "esnext.map.delete-all", "esnext.map.emplace", "esnext.map.every", "esnext.map.filter", "esnext.map.find", "esnext.map.find-key", "esnext.map.includes", "esnext.map.key-of", "esnext.map.map-keys", "esnext.map.map-values", "esnext.map.merge", "esnext.map.reduce", "esnext.map.some", "esnext.map.update", ...CommonIteratorsWithTag];
const SetDependencies = ["es.set", "esnext.set.add-all", "esnext.set.delete-all", "esnext.set.difference", "esnext.set.difference.v2", "esnext.set.every", "esnext.set.filter", "esnext.set.find", "esnext.set.intersection", "esnext.set.intersection.v2", "esnext.set.is-disjoint-from", "esnext.set.is-disjoint-from.v2", "esnext.set.is-subset-of", "esnext.set.is-subset-of.v2", "esnext.set.is-superset-of", "esnext.set.is-superset-of.v2", "esnext.set.join", "esnext.set.map", "esnext.set.reduce", "esnext.set.some", "esnext.set.symmetric-difference", "esnext.set.symmetric-difference.v2", "esnext.set.union", "esnext.set.union.v2", ...CommonIteratorsWithTag];
const WeakMapDependencies = ["es.weak-map", "esnext.weak-map.delete-all", "esnext.weak-map.emplace", ...CommonIteratorsWithTag];
const WeakSetDependencies = ["es.weak-set", "esnext.weak-set.add-all", "esnext.weak-set.delete-all", ...CommonIteratorsWithTag];
const DOMExceptionDependencies = ["web.dom-exception.constructor", "web.dom-exception.stack", "web.dom-exception.to-string-tag", "es.error.to-string"];
const URLSearchParamsDependencies = ["web.url-search-params", "web.url-search-params.delete", "web.url-search-params.has", "web.url-search-params.size", ...CommonIteratorsWithTag];
const AsyncIteratorDependencies = ["esnext.async-iterator.constructor", ...PromiseDependencies];
const AsyncIteratorProblemMethods = ["esnext.async-iterator.every", "esnext.async-iterator.filter", "esnext.async-iterator.find", "esnext.async-iterator.flat-map", "esnext.async-iterator.for-each", "esnext.async-iterator.map", "esnext.async-iterator.reduce", "esnext.async-iterator.some"];
const IteratorDependencies = ["esnext.iterator.constructor", "es.object.to-string"];
const DecoratorMetadataDependencies = ["esnext.symbol.metadata", "esnext.function.metadata"];
exports.DecoratorMetadataDependencies = DecoratorMetadataDependencies;
const TypedArrayStaticMethods = {
  from: define(null, ["es.typed-array.from"]),
  fromAsync: define(null, ["esnext.typed-array.from-async", ...PromiseDependenciesWithIterators]),
  of: define(null, ["es.typed-array.of"])
};
const DataViewDependencies = ["es.data-view", "es.array-buffer.slice", "es.object.to-string"];
const BuiltIns = {
  AsyncDisposableStack: define("async-disposable-stack/index", ["esnext.async-disposable-stack.constructor", "es.object.to-string", "esnext.async-iterator.async-dispose", "esnext.iterator.dispose", ...PromiseDependencies, ...SuppressedErrorDependencies]),
  AsyncIterator: define("async-iterator/index", AsyncIteratorDependencies),
  AggregateError: define("aggregate-error", ["es.aggregate-error", ...ErrorDependencies, ...CommonIteratorsWithTag, "es.aggregate-error.cause"]),
  ArrayBuffer: define(null, ["es.array-buffer.constructor", "es.array-buffer.slice", "es.object.to-string"]),
  DataView: define(null, DataViewDependencies),
  Date: define(null, ["es.date.to-string"]),
  DOMException: define("dom-exception/index", DOMExceptionDependencies),
  DisposableStack: define("disposable-stack/index", ["esnext.disposable-stack.constructor", "es.object.to-string", "esnext.iterator.dispose", ...SuppressedErrorDependencies]),
  Error: define(null, ErrorDependencies),
  EvalError: define(null, ErrorDependencies),
  Float32Array: typed("es.typed-array.float32-array"),
  Float64Array: typed("es.typed-array.float64-array"),
  Int8Array: typed("es.typed-array.int8-array"),
  Int16Array: typed("es.typed-array.int16-array"),
  Int32Array: typed("es.typed-array.int32-array"),
  Iterator: define("iterator/index", IteratorDependencies),
  Uint8Array: typed("es.typed-array.uint8-array"),
  Uint8ClampedArray: typed("es.typed-array.uint8-clamped-array"),
  Uint16Array: typed("es.typed-array.uint16-array"),
  Uint32Array: typed("es.typed-array.uint32-array"),
  Map: define("map/index", MapDependencies),
  Number: define(null, ["es.number.constructor"]),
  Observable: define("observable/index", ["esnext.observable", "esnext.symbol.observable", "es.object.to-string", ...CommonIteratorsWithTag]),
  Promise: define("promise/index", PromiseDependencies),
  RangeError: define(null, ErrorDependencies),
  ReferenceError: define(null, ErrorDependencies),
  Reflect: define(null, ["es.reflect.to-string-tag", "es.object.to-string"]),
  RegExp: define(null, ["es.regexp.constructor", "es.regexp.dot-all", "es.regexp.exec", "es.regexp.sticky", "es.regexp.to-string"]),
  Set: define("set/index", SetDependencies),
  SuppressedError: define("suppressed-error", SuppressedErrorDependencies),
  Symbol: define("symbol/index", SymbolDependencies),
  SyntaxError: define(null, ErrorDependencies),
  TypeError: define(null, ErrorDependencies),
  URIError: define(null, ErrorDependencies),
  URL: define("url/index", ["web.url", ...URLSearchParamsDependencies]),
  URLSearchParams: define("url-search-params/index", URLSearchParamsDependencies),
  WeakMap: define("weak-map/index", WeakMapDependencies),
  WeakSet: define("weak-set/index", WeakSetDependencies),
  atob: define("atob", ["web.atob", ...DOMExceptionDependencies]),
  btoa: define("btoa", ["web.btoa", ...DOMExceptionDependencies]),
  clearImmediate: define("clear-immediate", ["web.immediate"]),
  compositeKey: define("composite-key", ["esnext.composite-key"]),
  compositeSymbol: define("composite-symbol", ["esnext.composite-symbol"]),
  escape: define("escape", ["es.escape"]),
  fetch: define(null, PromiseDependencies),
  globalThis: define("global-this", ["es.global-this"]),
  parseFloat: define("parse-float", ["es.parse-float"]),
  parseInt: define("parse-int", ["es.parse-int"]),
  queueMicrotask: define("queue-microtask", ["web.queue-microtask"]),
  self: define("self", ["web.self"]),
  setImmediate: define("set-immediate", ["web.immediate"]),
  setInterval: define("set-interval", ["web.timers"]),
  setTimeout: define("set-timeout", ["web.timers"]),
  structuredClone: define("structured-clone", ["web.structured-clone", ...DOMExceptionDependencies, "es.array.iterator", "es.object.keys", "es.object.to-string", "es.map", "es.set"]),
  unescape: define("unescape", ["es.unescape"])
};
exports.BuiltIns = BuiltIns;
const StaticProperties = {
  AsyncIterator: {
    from: define("async-iterator/from", ["esnext.async-iterator.from", ...AsyncIteratorDependencies, ...AsyncIteratorProblemMethods, ...CommonIterators])
  },
  Array: {
    from: define("array/from", ["es.array.from", "es.string.iterator"]),
    fromAsync: define("array/from-async", ["esnext.array.from-async", ...PromiseDependenciesWithIterators]),
    isArray: define("array/is-array", ["es.array.is-array"]),
    isTemplateObject: define("array/is-template-object", ["esnext.array.is-template-object"]),
    of: define("array/of", ["es.array.of"])
  },
  ArrayBuffer: {
    isView: define(null, ["es.array-buffer.is-view"])
  },
  BigInt: {
    range: define("bigint/range", ["esnext.bigint.range", "es.object.to-string"])
  },
  Date: {
    now: define("date/now", ["es.date.now"])
  },
  Function: {
    isCallable: define("function/is-callable", ["esnext.function.is-callable"]),
    isConstructor: define("function/is-constructor", ["esnext.function.is-constructor"])
  },
  Iterator: {
    from: define("iterator/from", ["esnext.iterator.from", ...IteratorDependencies, ...CommonIterators]),
    range: define("iterator/range", ["esnext.iterator.range", "es.object.to-string"])
  },
  JSON: {
    isRawJSON: define("json/is-raw-json", ["esnext.json.is-raw-json"]),
    parse: define("json/parse", ["esnext.json.parse", "es.object.keys"]),
    rawJSON: define("json/raw-json", ["esnext.json.raw-json", "es.object.create", "es.object.freeze"]),
    stringify: define("json/stringify", ["es.json.stringify"], "es.symbol")
  },
  Math: {
    DEG_PER_RAD: define("math/deg-per-rad", ["esnext.math.deg-per-rad"]),
    RAD_PER_DEG: define("math/rad-per-deg", ["esnext.math.rad-per-deg"]),
    acosh: define("math/acosh", ["es.math.acosh"]),
    asinh: define("math/asinh", ["es.math.asinh"]),
    atanh: define("math/atanh", ["es.math.atanh"]),
    cbrt: define("math/cbrt", ["es.math.cbrt"]),
    clamp: define("math/clamp", ["esnext.math.clamp"]),
    clz32: define("math/clz32", ["es.math.clz32"]),
    cosh: define("math/cosh", ["es.math.cosh"]),
    degrees: define("math/degrees", ["esnext.math.degrees"]),
    expm1: define("math/expm1", ["es.math.expm1"]),
    fround: define("math/fround", ["es.math.fround"]),
    f16round: define("math/f16round", ["esnext.math.f16round"]),
    fscale: define("math/fscale", ["esnext.math.fscale"]),
    hypot: define("math/hypot", ["es.math.hypot"]),
    iaddh: define("math/iaddh", ["esnext.math.iaddh"]),
    imul: define("math/imul", ["es.math.imul"]),
    imulh: define("math/imulh", ["esnext.math.imulh"]),
    isubh: define("math/isubh", ["esnext.math.isubh"]),
    log10: define("math/log10", ["es.math.log10"]),
    log1p: define("math/log1p", ["es.math.log1p"]),
    log2: define("math/log2", ["es.math.log2"]),
    radians: define("math/radians", ["esnext.math.radians"]),
    scale: define("math/scale", ["esnext.math.scale"]),
    seededPRNG: define("math/seeded-prng", ["esnext.math.seeded-prng"]),
    sign: define("math/sign", ["es.math.sign"]),
    signbit: define("math/signbit", ["esnext.math.signbit"]),
    sinh: define("math/sinh", ["es.math.sinh"]),
    tanh: define("math/tanh", ["es.math.tanh"]),
    trunc: define("math/trunc", ["es.math.trunc"]),
    umulh: define("math/umulh", ["esnext.math.umulh"])
  },
  Map: {
    from: define(null, ["esnext.map.from", ...MapDependencies]),
    groupBy: define(null, ["esnext.map.group-by", ...MapDependencies]),
    keyBy: define(null, ["esnext.map.key-by", ...MapDependencies]),
    of: define(null, ["esnext.map.of", ...MapDependencies])
  },
  Number: {
    EPSILON: define("number/epsilon", ["es.number.epsilon"]),
    MAX_SAFE_INTEGER: define("number/max-safe-integer", ["es.number.max-safe-integer"]),
    MIN_SAFE_INTEGER: define("number/min-safe-integer", ["es.number.min-safe-integer"]),
    fromString: define("number/from-string", ["esnext.number.from-string"]),
    isFinite: define("number/is-finite", ["es.number.is-finite"]),
    isInteger: define("number/is-integer", ["es.number.is-integer"]),
    isNaN: define("number/is-nan", ["es.number.is-nan"]),
    isSafeInteger: define("number/is-safe-integer", ["es.number.is-safe-integer"]),
    parseFloat: define("number/parse-float", ["es.number.parse-float"]),
    parseInt: define("number/parse-int", ["es.number.parse-int"]),
    range: define("number/range", ["esnext.number.range", "es.object.to-string"])
  },
  Object: {
    assign: define("object/assign", ["es.object.assign"]),
    create: define("object/create", ["es.object.create"]),
    defineProperties: define("object/define-properties", ["es.object.define-properties"]),
    defineProperty: define("object/define-property", ["es.object.define-property"]),
    entries: define("object/entries", ["es.object.entries"]),
    freeze: define("object/freeze", ["es.object.freeze"]),
    fromEntries: define("object/from-entries", ["es.object.from-entries", "es.array.iterator"]),
    getOwnPropertyDescriptor: define("object/get-own-property-descriptor", ["es.object.get-own-property-descriptor"]),
    getOwnPropertyDescriptors: define("object/get-own-property-descriptors", ["es.object.get-own-property-descriptors"]),
    getOwnPropertyNames: define("object/get-own-property-names", ["es.object.get-own-property-names"]),
    getOwnPropertySymbols: define("object/get-own-property-symbols", ["es.symbol"]),
    getPrototypeOf: define("object/get-prototype-of", ["es.object.get-prototype-of"]),
    groupBy: define("object/group-by", ["esnext.object.group-by", "es.object.create"]),
    hasOwn: define("object/has-own", ["es.object.has-own"]),
    is: define("object/is", ["es.object.is"]),
    isExtensible: define("object/is-extensible", ["es.object.is-extensible"]),
    isFrozen: define("object/is-frozen", ["es.object.is-frozen"]),
    isSealed: define("object/is-sealed", ["es.object.is-sealed"]),
    keys: define("object/keys", ["es.object.keys"]),
    preventExtensions: define("object/prevent-extensions", ["es.object.prevent-extensions"]),
    seal: define("object/seal", ["es.object.seal"]),
    setPrototypeOf: define("object/set-prototype-of", ["es.object.set-prototype-of"]),
    values: define("object/values", ["es.object.values"])
  },
  Promise: {
    all: define(null, PromiseDependenciesWithIterators),
    allSettled: define(null, ["es.promise.all-settled", ...PromiseDependenciesWithIterators]),
    any: define(null, ["es.promise.any", "es.aggregate-error", ...PromiseDependenciesWithIterators]),
    race: define(null, PromiseDependenciesWithIterators),
    try: define(null, ["esnext.promise.try", ...PromiseDependencies]),
    withResolvers: define(null, ["esnext.promise.with-resolvers", ...PromiseDependencies])
  },
  Reflect: {
    apply: define("reflect/apply", ["es.reflect.apply"]),
    construct: define("reflect/construct", ["es.reflect.construct"]),
    defineMetadata: define("reflect/define-metadata", ["esnext.reflect.define-metadata"]),
    defineProperty: define("reflect/define-property", ["es.reflect.define-property"]),
    deleteMetadata: define("reflect/delete-metadata", ["esnext.reflect.delete-metadata"]),
    deleteProperty: define("reflect/delete-property", ["es.reflect.delete-property"]),
    get: define("reflect/get", ["es.reflect.get"]),
    getMetadata: define("reflect/get-metadata", ["esnext.reflect.get-metadata"]),
    getMetadataKeys: define("reflect/get-metadata-keys", ["esnext.reflect.get-metadata-keys"]),
    getOwnMetadata: define("reflect/get-own-metadata", ["esnext.reflect.get-own-metadata"]),
    getOwnMetadataKeys: define("reflect/get-own-metadata-keys", ["esnext.reflect.get-own-metadata-keys"]),
    getOwnPropertyDescriptor: define("reflect/get-own-property-descriptor", ["es.reflect.get-own-property-descriptor"]),
    getPrototypeOf: define("reflect/get-prototype-of", ["es.reflect.get-prototype-of"]),
    has: define("reflect/has", ["es.reflect.has"]),
    hasMetadata: define("reflect/has-metadata", ["esnext.reflect.has-metadata"]),
    hasOwnMetadata: define("reflect/has-own-metadata", ["esnext.reflect.has-own-metadata"]),
    isExtensible: define("reflect/is-extensible", ["es.reflect.is-extensible"]),
    metadata: define("reflect/metadata", ["esnext.reflect.metadata"]),
    ownKeys: define("reflect/own-keys", ["es.reflect.own-keys"]),
    preventExtensions: define("reflect/prevent-extensions", ["es.reflect.prevent-extensions"]),
    set: define("reflect/set", ["es.reflect.set"]),
    setPrototypeOf: define("reflect/set-prototype-of", ["es.reflect.set-prototype-of"])
  },
  RegExp: {
    escape: define("regexp/escape", ["esnext.regexp.escape"])
  },
  Set: {
    from: define(null, ["esnext.set.from", ...SetDependencies]),
    of: define(null, ["esnext.set.of", ...SetDependencies])
  },
  String: {
    cooked: define("string/cooked", ["esnext.string.cooked"]),
    dedent: define("string/dedent", ["esnext.string.dedent", "es.string.from-code-point", "es.weak-map"]),
    fromCodePoint: define("string/from-code-point", ["es.string.from-code-point"]),
    raw: define("string/raw", ["es.string.raw"])
  },
  Symbol: {
    asyncDispose: define("symbol/async-dispose", ["esnext.symbol.async-dispose", "esnext.async-iterator.async-dispose"]),
    asyncIterator: define("symbol/async-iterator", ["es.symbol.async-iterator"]),
    dispose: define("symbol/dispose", ["esnext.symbol.dispose", "esnext.iterator.dispose"]),
    for: define("symbol/for", [], "es.symbol"),
    hasInstance: define("symbol/has-instance", ["es.symbol.has-instance", "es.function.has-instance"]),
    isConcatSpreadable: define("symbol/is-concat-spreadable", ["es.symbol.is-concat-spreadable", "es.array.concat"]),
    isRegistered: define("symbol/is-registered", ["esnext.symbol.is-registered", "es.symbol"]),
    isRegisteredSymbol: define("symbol/is-registered-symbol", ["esnext.symbol.is-registered-symbol", "es.symbol"]),
    isWellKnown: define("symbol/is-well-known", ["esnext.symbol.is-well-known", "es.symbol"]),
    isWellKnownSymbol: define("symbol/is-well-known-symbol", ["esnext.symbol.is-well-known-symbol", "es.symbol"]),
    iterator: define("symbol/iterator", ["es.symbol.iterator", ...CommonIteratorsWithTag]),
    keyFor: define("symbol/key-for", [], "es.symbol"),
    match: define("symbol/match", ["es.symbol.match", "es.string.match"]),
    matcher: define("symbol/matcher", ["esnext.symbol.matcher"]),
    matchAll: define("symbol/match-all", ["es.symbol.match-all", "es.string.match-all"]),
    metadata: define("symbol/metadata", DecoratorMetadataDependencies),
    metadataKey: define("symbol/metadata-key", ["esnext.symbol.metadata-key"]),
    observable: define("symbol/observable", ["esnext.symbol.observable"]),
    patternMatch: define("symbol/pattern-match", ["esnext.symbol.pattern-match"]),
    replace: define("symbol/replace", ["es.symbol.replace", "es.string.replace"]),
    search: define("symbol/search", ["es.symbol.search", "es.string.search"]),
    species: define("symbol/species", ["es.symbol.species", "es.array.species"]),
    split: define("symbol/split", ["es.symbol.split", "es.string.split"]),
    toPrimitive: define("symbol/to-primitive", ["es.symbol.to-primitive", "es.date.to-primitive"]),
    toStringTag: define("symbol/to-string-tag", ["es.symbol.to-string-tag", "es.object.to-string", "es.math.to-string-tag", "es.json.to-string-tag"]),
    unscopables: define("symbol/unscopables", ["es.symbol.unscopables"])
  },
  URL: {
    canParse: define("url/can-parse", ["web.url.can-parse", "web.url"])
  },
  WeakMap: {
    from: define(null, ["esnext.weak-map.from", ...WeakMapDependencies]),
    of: define(null, ["esnext.weak-map.of", ...WeakMapDependencies])
  },
  WeakSet: {
    from: define(null, ["esnext.weak-set.from", ...WeakSetDependencies]),
    of: define(null, ["esnext.weak-set.of", ...WeakSetDependencies])
  },
  Int8Array: TypedArrayStaticMethods,
  Uint8Array: TypedArrayStaticMethods,
  Uint8ClampedArray: TypedArrayStaticMethods,
  Int16Array: TypedArrayStaticMethods,
  Uint16Array: TypedArrayStaticMethods,
  Int32Array: TypedArrayStaticMethods,
  Uint32Array: TypedArrayStaticMethods,
  Float32Array: TypedArrayStaticMethods,
  Float64Array: TypedArrayStaticMethods,
  WebAssembly: {
    CompileError: define(null, ErrorDependencies),
    LinkError: define(null, ErrorDependencies),
    RuntimeError: define(null, ErrorDependencies)
  }
};
exports.StaticProperties = StaticProperties;
const InstanceProperties = {
  asIndexedPairs: define("instance/asIndexedPairs", ["esnext.async-iterator.as-indexed-pairs", ...AsyncIteratorDependencies, "esnext.iterator.as-indexed-pairs", ...IteratorDependencies]),
  at: define("instance/at", [
  // TODO: We should introduce overloaded instance methods definition
  // Before that is implemented, the `esnext.string.at` must be the first
  // In pure mode, the provider resolves the descriptor as a "pure" `esnext.string.at`
  // and treats the compat-data of `esnext.string.at` as the compat-data of
  // pure import `instance/at`. The first polyfill here should have the lowest corejs
  // supported versions.
  "esnext.string.at", "es.string.at-alternative", "es.array.at"]),
  anchor: define(null, ["es.string.anchor"]),
  big: define(null, ["es.string.big"]),
  bind: define("instance/bind", ["es.function.bind"]),
  blink: define(null, ["es.string.blink"]),
  bold: define(null, ["es.string.bold"]),
  codePointAt: define("instance/code-point-at", ["es.string.code-point-at"]),
  codePoints: define("instance/code-points", ["esnext.string.code-points"]),
  concat: define("instance/concat", ["es.array.concat"], undefined, ["String"]),
  copyWithin: define("instance/copy-within", ["es.array.copy-within"]),
  demethodize: define("instance/demethodize", ["esnext.function.demethodize"]),
  description: define(null, ["es.symbol", "es.symbol.description"]),
  dotAll: define(null, ["es.regexp.dot-all"]),
  drop: define(null, ["esnext.async-iterator.drop", ...AsyncIteratorDependencies, "esnext.iterator.drop", ...IteratorDependencies]),
  emplace: define("instance/emplace", ["esnext.map.emplace", "esnext.weak-map.emplace"]),
  endsWith: define("instance/ends-with", ["es.string.ends-with"]),
  entries: define("instance/entries", ArrayNatureIteratorsWithTag),
  every: define("instance/every", ["es.array.every", "esnext.async-iterator.every",
  // TODO: add async iterator dependencies when we support sub-dependencies
  // esnext.async-iterator.every depends on es.promise
  // but we don't want to pull es.promise when esnext.async-iterator is disabled
  //
  // ...AsyncIteratorDependencies
  "esnext.iterator.every", ...IteratorDependencies]),
  exec: define(null, ["es.regexp.exec"]),
  fill: define("instance/fill", ["es.array.fill"]),
  filter: define("instance/filter", ["es.array.filter", "esnext.async-iterator.filter", "esnext.iterator.filter", ...IteratorDependencies]),
  filterReject: define("instance/filterReject", ["esnext.array.filter-reject"]),
  finally: define(null, ["es.promise.finally", ...PromiseDependencies]),
  find: define("instance/find", ["es.array.find", "esnext.async-iterator.find", "esnext.iterator.find", ...IteratorDependencies]),
  findIndex: define("instance/find-index", ["es.array.find-index"]),
  findLast: define("instance/find-last", ["es.array.find-last"]),
  findLastIndex: define("instance/find-last-index", ["es.array.find-last-index"]),
  fixed: define(null, ["es.string.fixed"]),
  flags: define("instance/flags", ["es.regexp.flags"]),
  flatMap: define("instance/flat-map", ["es.array.flat-map", "es.array.unscopables.flat-map", "esnext.async-iterator.flat-map", "esnext.iterator.flat-map", ...IteratorDependencies]),
  flat: define("instance/flat", ["es.array.flat", "es.array.unscopables.flat"]),
  getFloat16: define(null, ["esnext.data-view.get-float16", ...DataViewDependencies]),
  getUint8Clamped: define(null, ["esnext.data-view.get-uint8-clamped", ...DataViewDependencies]),
  getYear: define(null, ["es.date.get-year"]),
  group: define("instance/group", ["esnext.array.group"]),
  groupBy: define("instance/group-by", ["esnext.array.group-by"]),
  groupByToMap: define("instance/group-by-to-map", ["esnext.array.group-by-to-map", "es.map", "es.object.to-string"]),
  groupToMap: define("instance/group-to-map", ["esnext.array.group-to-map", "es.map", "es.object.to-string"]),
  fontcolor: define(null, ["es.string.fontcolor"]),
  fontsize: define(null, ["es.string.fontsize"]),
  forEach: define("instance/for-each", ["es.array.for-each", "esnext.async-iterator.for-each", "esnext.iterator.for-each", ...IteratorDependencies, "web.dom-collections.for-each"]),
  includes: define("instance/includes", ["es.array.includes", "es.string.includes"]),
  indexed: define(null, ["esnext.async-iterator.indexed", ...AsyncIteratorDependencies, "esnext.iterator.indexed", ...IteratorDependencies]),
  indexOf: define("instance/index-of", ["es.array.index-of"]),
  isWellFormed: define("instance/is-well-formed", ["es.string.is-well-formed"]),
  italic: define(null, ["es.string.italics"]),
  join: define(null, ["es.array.join"]),
  keys: define("instance/keys", ArrayNatureIteratorsWithTag),
  lastIndex: define(null, ["esnext.array.last-index"]),
  lastIndexOf: define("instance/last-index-of", ["es.array.last-index-of"]),
  lastItem: define(null, ["esnext.array.last-item"]),
  link: define(null, ["es.string.link"]),
  map: define("instance/map", ["es.array.map", "esnext.async-iterator.map", "esnext.iterator.map"]),
  match: define(null, ["es.string.match", "es.regexp.exec"]),
  matchAll: define("instance/match-all", ["es.string.match-all", "es.regexp.exec"]),
  name: define(null, ["es.function.name"]),
  padEnd: define("instance/pad-end", ["es.string.pad-end"]),
  padStart: define("instance/pad-start", ["es.string.pad-start"]),
  push: define("instance/push", ["es.array.push"]),
  reduce: define("instance/reduce", ["es.array.reduce", "esnext.async-iterator.reduce", "esnext.iterator.reduce", ...IteratorDependencies]),
  reduceRight: define("instance/reduce-right", ["es.array.reduce-right"]),
  repeat: define("instance/repeat", ["es.string.repeat"]),
  replace: define(null, ["es.string.replace", "es.regexp.exec"]),
  replaceAll: define("instance/replace-all", ["es.string.replace-all", "es.string.replace", "es.regexp.exec"]),
  reverse: define("instance/reverse", ["es.array.reverse"]),
  search: define(null, ["es.string.search", "es.regexp.exec"]),
  setFloat16: define(null, ["esnext.data-view.set-float16", ...DataViewDependencies]),
  setUint8Clamped: define(null, ["esnext.data-view.set-uint8-clamped", ...DataViewDependencies]),
  setYear: define(null, ["es.date.set-year"]),
  slice: define("instance/slice", ["es.array.slice"]),
  small: define(null, ["es.string.small"]),
  some: define("instance/some", ["es.array.some", "esnext.async-iterator.some", "esnext.iterator.some", ...IteratorDependencies]),
  sort: define("instance/sort", ["es.array.sort"]),
  splice: define("instance/splice", ["es.array.splice"]),
  split: define(null, ["es.string.split", "es.regexp.exec"]),
  startsWith: define("instance/starts-with", ["es.string.starts-with"]),
  sticky: define(null, ["es.regexp.sticky"]),
  strike: define(null, ["es.string.strike"]),
  sub: define(null, ["es.string.sub"]),
  substr: define(null, ["es.string.substr"]),
  sup: define(null, ["es.string.sup"]),
  take: define(null, ["esnext.async-iterator.take", ...AsyncIteratorDependencies, "esnext.iterator.take", ...IteratorDependencies]),
  test: define(null, ["es.regexp.test", "es.regexp.exec"]),
  toArray: define(null, ["esnext.async-iterator.to-array", ...AsyncIteratorDependencies, "esnext.iterator.to-array", ...IteratorDependencies]),
  toAsync: define(null, ["esnext.iterator.to-async", ...IteratorDependencies, ...AsyncIteratorDependencies, ...AsyncIteratorProblemMethods]),
  toExponential: define(null, ["es.number.to-exponential"]),
  toFixed: define(null, ["es.number.to-fixed"]),
  toGMTString: define(null, ["es.date.to-gmt-string"]),
  toISOString: define(null, ["es.date.to-iso-string"]),
  toJSON: define(null, ["es.date.to-json", "web.url.to-json"]),
  toPrecision: define(null, ["es.number.to-precision"]),
  toReversed: define("instance/to-reversed", ["es.array.to-reversed"]),
  toSorted: define("instance/to-sorted", ["es.array.to-sorted", "es.array.sort"]),
  toSpliced: define("instance/to-spliced", ["es.array.to-spliced"]),
  toString: define(null, ["es.object.to-string", "es.error.to-string", "es.date.to-string", "es.regexp.to-string"]),
  toWellFormed: define("instance/to-well-formed", ["es.string.to-well-formed"]),
  trim: define("instance/trim", ["es.string.trim"]),
  trimEnd: define("instance/trim-end", ["es.string.trim-end"]),
  trimLeft: define("instance/trim-left", ["es.string.trim-start"]),
  trimRight: define("instance/trim-right", ["es.string.trim-end"]),
  trimStart: define("instance/trim-start", ["es.string.trim-start"]),
  uniqueBy: define("instance/unique-by", ["esnext.array.unique-by", "es.map"]),
  unshift: define("instance/unshift", ["es.array.unshift"]),
  unThis: define("instance/un-this", ["esnext.function.un-this"]),
  values: define("instance/values", ArrayNatureIteratorsWithTag),
  with: define("instance/with", ["es.array.with"]),
  __defineGetter__: define(null, ["es.object.define-getter"]),
  __defineSetter__: define(null, ["es.object.define-setter"]),
  __lookupGetter__: define(null, ["es.object.lookup-getter"]),
  __lookupSetter__: define(null, ["es.object.lookup-setter"]),
  ["__proto__"]: define(null, ["es.object.proto"])
};
exports.InstanceProperties = InstanceProperties;