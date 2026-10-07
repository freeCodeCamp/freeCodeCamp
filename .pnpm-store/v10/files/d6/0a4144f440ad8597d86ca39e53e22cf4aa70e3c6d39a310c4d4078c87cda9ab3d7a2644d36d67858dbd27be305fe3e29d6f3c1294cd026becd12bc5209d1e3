var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Client: () => Client,
  Command: () => Command,
  LazyJsonString: () => LazyJsonString,
  NoOpLogger: () => NoOpLogger,
  SENSITIVE_STRING: () => SENSITIVE_STRING,
  ServiceException: () => ServiceException,
  StringWrapper: () => StringWrapper,
  _json: () => _json,
  collectBody: () => collectBody,
  convertMap: () => convertMap,
  createAggregatedClient: () => createAggregatedClient,
  dateToUtcString: () => dateToUtcString,
  decorateServiceException: () => decorateServiceException,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  expectBoolean: () => expectBoolean,
  expectByte: () => expectByte,
  expectFloat32: () => expectFloat32,
  expectInt: () => expectInt,
  expectInt32: () => expectInt32,
  expectLong: () => expectLong,
  expectNonNull: () => expectNonNull,
  expectNumber: () => expectNumber,
  expectObject: () => expectObject,
  expectShort: () => expectShort,
  expectString: () => expectString,
  expectUnion: () => expectUnion,
  extendedEncodeURIComponent: () => extendedEncodeURIComponent,
  getArrayIfSingleItem: () => getArrayIfSingleItem,
  getDefaultClientConfiguration: () => getDefaultClientConfiguration,
  getDefaultExtensionConfiguration: () => getDefaultExtensionConfiguration,
  getValueFromTextNode: () => getValueFromTextNode,
  handleFloat: () => handleFloat,
  limitedParseDouble: () => limitedParseDouble,
  limitedParseFloat: () => limitedParseFloat,
  limitedParseFloat32: () => limitedParseFloat32,
  loadConfigsForDefaultMode: () => loadConfigsForDefaultMode,
  logger: () => logger,
  map: () => map,
  parseBoolean: () => parseBoolean,
  parseEpochTimestamp: () => parseEpochTimestamp,
  parseRfc3339DateTime: () => parseRfc3339DateTime,
  parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime: () => parseRfc7231DateTime,
  resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig,
  resolvedPath: () => resolvedPath,
  serializeFloat: () => serializeFloat,
  splitEvery: () => splitEvery,
  strictParseByte: () => strictParseByte,
  strictParseDouble: () => strictParseDouble,
  strictParseFloat: () => strictParseFloat,
  strictParseFloat32: () => strictParseFloat32,
  strictParseInt: () => strictParseInt,
  strictParseInt32: () => strictParseInt32,
  strictParseLong: () => strictParseLong,
  strictParseShort: () => strictParseShort,
  take: () => take,
  throwDefaultError: () => throwDefaultError,
  withBaseException: () => withBaseException
});
module.exports = __toCommonJS(src_exports);

// src/NoOpLogger.ts
var _NoOpLogger = class _NoOpLogger {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};
__name(_NoOpLogger, "NoOpLogger");
var NoOpLogger = _NoOpLogger;

// src/client.ts
var import_middleware_stack = require("@smithy/middleware-stack");
var _Client = class _Client {
  constructor(config) {
    this.middlewareStack = (0, import_middleware_stack.constructStack)();
    this.config = config;
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler(command).then(
        (result) => callback(null, result.output),
        (err) => callback(err)
      ).catch(
        // prevent any errors thrown in the callback from triggering an
        // unhandled promise rejection
        () => {
        }
      );
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  }
};
__name(_Client, "Client");
var Client = _Client;

// src/collect-stream-body.ts
var import_util_stream = require("@smithy/util-stream");
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context.streamCollector(streamBody);
  return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// src/command.ts

var import_types = require("@smithy/types");
var _Command = class _Command {
  constructor() {
    this.middlewareStack = (0, import_middleware_stack.constructStack)();
  }
  /**
   * Factory for Command ClassBuilder.
   * @internal
   */
  static classBuilder() {
    return new ClassBuilder();
  }
  /**
   * @internal
   */
  resolveMiddlewareWithContext(clientStack, configuration, options, {
    middlewareFn,
    clientName,
    commandName,
    inputFilterSensitiveLog,
    outputFilterSensitiveLog,
    smithyContext,
    additionalContext,
    CommandCtor
  }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [import_types.SMITHY_CONTEXT_KEY]: {
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request) => requestHandler.handle(request.request, options || {}),
      handlerExecutionContext
    );
  }
};
__name(_Command, "Command");
var Command = _Command;
var _ClassBuilder = class _ClassBuilder {
  constructor() {
    this._init = () => {
    };
    this._ep = {};
    this._middlewareFn = () => [];
    this._commandName = "";
    this._clientName = "";
    this._additionalContext = {};
    this._smithyContext = {};
    this._inputFilterSensitiveLog = (_) => _;
    this._outputFilterSensitiveLog = (_) => _;
    this._serializer = null;
    this._deserializer = null;
  }
  /**
   * Optional init callback.
   */
  init(cb) {
    this._init = cb;
  }
  /**
   * Set the endpoint parameter instructions.
   */
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  /**
   * Add any number of middleware.
   */
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  /**
   * Set the initial handler execution context Smithy field.
   */
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  /**
   * Set the initial handler execution context.
   */
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  /**
   * Set constant string identifiers for the operation.
   */
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  /**
   * Set the input and output sensistive log filters.
   */
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  /**
   * Sets the serializer.
   */
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  /**
   * Sets the deserializer.
   */
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  /**
   * @returns a Command class with the classBuilder properties.
   */
  build() {
    var _a;
    const closure = this;
    let CommandRef;
    return CommandRef = (_a = class extends Command {
      /**
       * @public
       */
      constructor(...[input]) {
        super();
        /**
         * @internal
         */
        // @ts-ignore used in middlewareFn closure.
        this.serialize = closure._serializer;
        /**
         * @internal
         */
        // @ts-ignore used in middlewareFn closure.
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
      }
      /**
       * @public
       */
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      /**
       * @internal
       */
      resolveMiddleware(stack, configuration, options) {
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
    }, __name(_a, "CommandRef"), _a);
  }
};
__name(_ClassBuilder, "ClassBuilder");
var ClassBuilder = _ClassBuilder;

// src/constants.ts
var SENSITIVE_STRING = "***SensitiveInformation***";

// src/create-aggregated-client.ts
var createAggregatedClient = /* @__PURE__ */ __name((commands, Client2) => {
  for (const command of Object.keys(commands)) {
    const CommandCtor = commands[command];
    const methodImpl = /* @__PURE__ */ __name(async function(args, optionsOrCb, cb) {
      const command2 = new CommandCtor(args);
      if (typeof optionsOrCb === "function") {
        this.send(command2, optionsOrCb);
      } else if (typeof cb === "function") {
        if (typeof optionsOrCb !== "object")
          throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
        this.send(command2, optionsOrCb || {}, cb);
      } else {
        return this.send(command2, optionsOrCb);
      }
    }, "methodImpl");
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
    Client2.prototype[methodName] = methodImpl;
  }
}, "createAggregatedClient");

// src/parse-utils.ts
var parseBoolean = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
}, "parseBoolean");
var expectBoolean = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "number") {
    if (value === 0 || value === 1) {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (value === 0) {
      return false;
    }
    if (value === 1) {
      return true;
    }
  }
  if (typeof value === "string") {
    const lower = value.toLowerCase();
    if (lower === "false" || lower === "true") {
      logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
    }
    if (lower === "false") {
      return false;
    }
    if (lower === "true") {
      return true;
    }
  }
  if (typeof value === "boolean") {
    return value;
  }
  throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
}, "expectBoolean");
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = /* @__PURE__ */ __name((value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
}, "expectFloat32");
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt = expectLong;
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectNonNull = /* @__PURE__ */ __name((value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
}, "expectNonNull");
var expectObject = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
}, "expectObject");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var expectUnion = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  const asObject = expectObject(value);
  const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
  if (setKeys.length === 0) {
    throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
  }
  if (setKeys.length > 1) {
    throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
  }
  return asObject;
}, "expectUnion");
var strictParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectNumber(parseNumber(value));
  }
  return expectNumber(value);
}, "strictParseDouble");
var strictParseFloat = strictParseDouble;
var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
}, "strictParseFloat32");
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = /* @__PURE__ */ __name((value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
}, "parseNumber");
var limitedParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectNumber(value);
}, "limitedParseDouble");
var handleFloat = limitedParseDouble;
var limitedParseFloat = limitedParseDouble;
var limitedParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return parseFloatString(value);
  }
  return expectFloat32(value);
}, "limitedParseFloat32");
var parseFloatString = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "NaN":
      return NaN;
    case "Infinity":
      return Infinity;
    case "-Infinity":
      return -Infinity;
    default:
      throw new Error(`Unable to parse float value: ${value}`);
  }
}, "parseFloatString");
var strictParseLong = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectLong(parseNumber(value));
  }
  return expectLong(value);
}, "strictParseLong");
var strictParseInt = strictParseLong;
var strictParseInt32 = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
}, "strictParseInt32");
var strictParseShort = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
}, "strictParseShort");
var strictParseByte = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
}, "strictParseByte");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// src/date-utils.ts
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
__name(dateToUtcString, "dateToUtcString");
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var parseRfc3339DateTime = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
}, "parseRfc3339DateTime");
var RFC3339_WITH_OFFSET = new RegExp(
  /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
);
var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
}, "parseRfc3339DateTimeWithOffset");
var IMF_FIXDATE = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
var RFC_850_DATE = new RegExp(
  /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
);
var ASC_TIME = new RegExp(
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
);
var parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-7231 date-times must be expressed as strings");
  }
  let match = IMF_FIXDATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return buildDate(
      strictParseShort(stripLeadingZeroes(yearStr)),
      parseMonthByShortName(monthStr),
      parseDateValue(dayStr, "day", 1, 31),
      { hours, minutes, seconds, fractionalMilliseconds }
    );
  }
  match = RFC_850_DATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return adjustRfc850Year(
      buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
      })
    );
  }
  match = ASC_TIME.exec(value);
  if (match) {
    const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
    return buildDate(
      strictParseShort(stripLeadingZeroes(yearStr)),
      parseMonthByShortName(monthStr),
      parseDateValue(dayStr.trimLeft(), "day", 1, 31),
      { hours, minutes, seconds, fractionalMilliseconds }
    );
  }
  throw new TypeError("Invalid RFC-7231 date-time value");
}, "parseRfc7231DateTime");
var parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  let valueAsDouble;
  if (typeof value === "number") {
    valueAsDouble = value;
  } else if (typeof value === "string") {
    valueAsDouble = strictParseDouble(value);
  } else {
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
  }
  if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
  }
  return new Date(Math.round(valueAsDouble * 1e3));
}, "parseEpochTimestamp");
var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(
    Date.UTC(
      year,
      adjustedMonth,
      day,
      parseDateValue(time.hours, "hour", 0, 23),
      parseDateValue(time.minutes, "minute", 0, 59),
      // seconds can go up to 60 for leap seconds
      parseDateValue(time.seconds, "seconds", 0, 60),
      parseMilliseconds(time.fractionalMilliseconds)
    )
  );
}, "buildDate");
var parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
  const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
  const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
  if (valueInThisCentury < thisYear) {
    return valueInThisCentury + 100;
  }
  return valueInThisCentury;
}, "parseTwoDigitYear");
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var adjustRfc850Year = /* @__PURE__ */ __name((input) => {
  if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
    return new Date(
      Date.UTC(
        input.getUTCFullYear() - 100,
        input.getUTCMonth(),
        input.getUTCDate(),
        input.getUTCHours(),
        input.getUTCMinutes(),
        input.getUTCSeconds(),
        input.getUTCMilliseconds()
      )
    );
  }
  return input;
}, "adjustRfc850Year");
var parseMonthByShortName = /* @__PURE__ */ __name((value) => {
  const monthIdx = MONTHS.indexOf(value);
  if (monthIdx < 0) {
    throw new TypeError(`Invalid month: ${value}`);
  }
  return monthIdx + 1;
}, "parseMonthByShortName");
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
}, "validateDayOfMonth");
var isLeapYear = /* @__PURE__ */ __name((year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}, "isLeapYear");
var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
}, "parseDateValue");
var parseMilliseconds = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
}, "parseMilliseconds");
var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
}, "parseOffsetToMilliseconds");
var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
}, "stripLeadingZeroes");

// src/exceptions.ts
var _ServiceException = class _ServiceException extends Error {
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, _ServiceException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
};
__name(_ServiceException, "ServiceException");
var ServiceException = _ServiceException;
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
    if (exception[k] == void 0 || exception[k] === "") {
      exception[k] = v;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// src/default-error-handler.ts
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: (parsedBody == null ? void 0 : parsedBody.code) || (parsedBody == null ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// src/defaults-mode.ts
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// src/emitWarningIfUnsupportedVersion.ts
var warningEmitted = false;
var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
    warningEmitted = true;
  }
}, "emitWarningIfUnsupportedVersion");

// src/extensions/checksum.ts

var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in import_types.AlgorithmId) {
    const algorithmId = import_types.AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: () => algorithmId,
      checksumConstructor: () => runtimeConfig[algorithmId]
    });
  }
  return {
    _checksumAlgorithms: checksumAlgorithms,
    addChecksumAlgorithm(algo) {
      this._checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return this._checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// src/extensions/retry.ts
var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  let _retryStrategy = runtimeConfig.retryStrategy;
  return {
    setRetryStrategy(retryStrategy) {
      _retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return _retryStrategy;
    }
  };
}, "getRetryConfiguration");
var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
}, "resolveRetryRuntimeConfig");

// src/extensions/defaultExtensionConfiguration.ts
var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    ...getChecksumConfiguration(runtimeConfig),
    ...getRetryConfiguration(runtimeConfig)
  };
}, "getDefaultExtensionConfiguration");
var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    ...resolveChecksumRuntimeConfig(config),
    ...resolveRetryRuntimeConfig(config)
  };
}, "resolveDefaultRuntimeConfig");

// src/extended-encode-uri-component.ts
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(extendedEncodeURIComponent, "extendedEncodeURIComponent");

// src/get-array-if-single-item.ts
var getArrayIfSingleItem = /* @__PURE__ */ __name((mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray], "getArrayIfSingleItem");

// src/get-value-from-text-node.ts
var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}, "getValueFromTextNode");

// src/lazy-json.ts
var StringWrapper = /* @__PURE__ */ __name(function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
}, "StringWrapper");
StringWrapper.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper, String);
var _LazyJsonString = class _LazyJsonString extends StringWrapper {
  deserializeJSON() {
    return JSON.parse(super.toString());
  }
  toJSON() {
    return super.toString();
  }
  static fromObject(object) {
    if (object instanceof _LazyJsonString) {
      return object;
    } else if (object instanceof String || typeof object === "string") {
      return new _LazyJsonString(object);
    }
    return new _LazyJsonString(JSON.stringify(object));
  }
};
__name(_LazyJsonString, "LazyJsonString");
var LazyJsonString = _LazyJsonString;

// src/object-mapping.ts
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
__name(map, "map");
var convertMap = /* @__PURE__ */ __name((target) => {
  const output = {};
  for (const [k, v] of Object.entries(target || {})) {
    output[k] = [, v];
  }
  return output;
}, "convertMap");
var take = /* @__PURE__ */ __name((source, instructions) => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
}, "take");
var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
  return map(
    target,
    Object.entries(instructions).reduce(
      (_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      },
      {}
    )
  );
}, "mapWithFilter");
var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, "applyInstruction");
var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
var pass = /* @__PURE__ */ __name((_) => _, "pass");

// src/resolve-path.ts
var resolvedPath = /* @__PURE__ */ __name((resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
  if (input != null && input[memberName] !== void 0) {
    const labelValue = labelValueProvider();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
    }
    resolvedPath2 = resolvedPath2.replace(
      uriLabel,
      isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: " + memberName + ".");
  }
  return resolvedPath2;
}, "resolvedPath");

// src/ser-utils.ts
var serializeFloat = /* @__PURE__ */ __name((value) => {
  if (value !== value) {
    return "NaN";
  }
  switch (value) {
    case Infinity:
      return "Infinity";
    case -Infinity:
      return "-Infinity";
    default:
      return value;
  }
}, "serializeFloat");

// src/serde-json.ts
var _json = /* @__PURE__ */ __name((obj) => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_) => _ != null).map(_json);
  }
  if (typeof obj === "object") {
    const target = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
}, "_json");

// src/split-every.ts
function splitEvery(value, delimiter, numDelimiters) {
  if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
    throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
  }
  const segments = value.split(delimiter);
  if (numDelimiters === 1) {
    return segments;
  }
  const compoundSegments = [];
  let currentSegment = "";
  for (let i = 0; i < segments.length; i++) {
    if (currentSegment === "") {
      currentSegment = segments[i];
    } else {
      currentSegment += delimiter + segments[i];
    }
    if ((i + 1) % numDelimiters === 0) {
      compoundSegments.push(currentSegment);
      currentSegment = "";
    }
  }
  if (currentSegment !== "") {
    compoundSegments.push(currentSegment);
  }
  return compoundSegments;
}
__name(splitEvery, "splitEvery");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  NoOpLogger,
  Client,
  collectBody,
  Command,
  SENSITIVE_STRING,
  createAggregatedClient,
  dateToUtcString,
  parseRfc3339DateTime,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
  parseEpochTimestamp,
  throwDefaultError,
  withBaseException,
  loadConfigsForDefaultMode,
  emitWarningIfUnsupportedVersion,
  getDefaultExtensionConfiguration,
  getDefaultClientConfiguration,
  resolveDefaultRuntimeConfig,
  ServiceException,
  decorateServiceException,
  extendedEncodeURIComponent,
  getArrayIfSingleItem,
  getValueFromTextNode,
  StringWrapper,
  LazyJsonString,
  map,
  convertMap,
  take,
  parseBoolean,
  expectBoolean,
  expectNumber,
  expectFloat32,
  expectLong,
  expectInt,
  expectInt32,
  expectShort,
  expectByte,
  expectNonNull,
  expectObject,
  expectString,
  expectUnion,
  strictParseDouble,
  strictParseFloat,
  strictParseFloat32,
  limitedParseDouble,
  handleFloat,
  limitedParseFloat,
  limitedParseFloat32,
  strictParseLong,
  strictParseInt,
  strictParseInt32,
  strictParseShort,
  strictParseByte,
  logger,
  resolvedPath,
  serializeFloat,
  _json,
  splitEvery
});

