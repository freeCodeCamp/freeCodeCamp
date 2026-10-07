"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Array = exports.Any = void 0;
exports.ArrayEnsure = ArrayEnsure;
exports.Char = exports.CauseFromSelf = exports.Cause = exports.CapitalizedSchemaId = exports.Capitalized = exports.Capitalize = exports.BrandSchemaId = exports.BooleanFromUnknown = exports.BooleanFromString = exports.Boolean = exports.BigIntFromSelf = exports.BigIntFromNumber = exports.BigInt = exports.BigDecimalFromSelf = exports.BigDecimalFromNumber = exports.BigDecimal = exports.BetweenSchemaId = exports.BetweenDurationSchemaId = exports.BetweenDateSchemaId = exports.BetweenBigIntSchemaId = exports.BetweenBigDecimalSchemaId = exports.ArrayFormatterIssue = void 0;
exports.Chunk = Chunk;
exports.HashMapFromSelf = exports.HashMap = exports.GreaterThanSchemaId = exports.GreaterThanOrEqualToSchemaId = exports.GreaterThanOrEqualToDurationSchemaId = exports.GreaterThanOrEqualToDateSchemaId = exports.GreaterThanOrEqualToBigIntSchemaId = exports.GreaterThanOrEqualToBigDecimalSchemaId = exports.GreaterThanDurationSchemaId = exports.GreaterThanDateSchemaId = exports.GreaterThanBigIntSchemaId = exports.GreaterThanBigDecimalSchemaId = exports.FromPropertySignature = exports.FiniteSchemaId = exports.Finite = exports.FiberIdFromSelf = exports.FiberId = exports.ExitFromSelf = exports.Exit = exports.Enums = exports.EndsWithSchemaId = exports.EitherFromUnion = exports.EitherFromSelf = exports.Either = exports.DurationFromSelf = exports.DurationFromNanos = exports.DurationFromMillis = exports.Duration = exports.Defect = exports.DateTimeZonedFromSelf = exports.DateTimeZoned = exports.DateTimeUtcFromSelf = exports.DateTimeUtcFromNumber = exports.DateTimeUtcFromDate = exports.DateTimeUtc = exports.DateFromString = exports.DateFromSelfSchemaId = exports.DateFromSelf = exports.DateFromNumber = exports.Date = exports.DataFromSelf = exports.Data = exports.Config = exports.Class = exports.ChunkFromSelf = void 0;
exports.HashSet = HashSet;
exports.LessThanSchemaId = exports.LessThanOrEqualToSchemaId = exports.LessThanOrEqualToDurationSchemaId = exports.LessThanOrEqualToDateSchemaId = exports.LessThanOrEqualToBigIntSchemaId = exports.LessThanOrEqualToBigDecimalSchemaId = exports.LessThanDurationSchemaId = exports.LessThanDateSchemaId = exports.LessThanBigIntSchemaId = exports.LessThanBigDecimalSchemaId = exports.LengthSchemaId = exports.JsonNumberSchemaId = exports.JsonNumber = exports.ItemsCountSchemaId = exports.IntSchemaId = exports.Int = exports.InstanceOfSchemaId = exports.IncludesSchemaId = exports.HashSetFromSelf = void 0;
exports.List = List;
exports.ListFromSelf = void 0;
exports.Literal = Literal;
exports.LowercasedSchemaId = exports.Lowercased = exports.Lowercase = void 0;
exports.Map = map;
exports.MapFromSelf = exports.MapFromRecord = void 0;
exports.NonEmptyArray = exports.Never = exports.NegativeBigIntFromSelf = exports.NegativeBigInt = exports.NegativeBigDecimalSchemaId = exports.NegativeBigDecimalFromSelf = exports.Negative = exports.MultipleOfSchemaId = exports.MinLengthSchemaId = exports.MinItemsSchemaId = exports.MaxLengthSchemaId = exports.MaxItemsSchemaId = void 0;
exports.NonEmptyArrayEnsure = NonEmptyArrayEnsure;
exports.NonEmptyChunk = NonEmptyChunk;
exports.Object = exports.NumberFromString = exports.Number = exports.NullishOr = exports.NullOr = exports.Null = exports.Not = exports.NonPositiveBigIntFromSelf = exports.NonPositiveBigInt = exports.NonPositiveBigDecimalSchemaId = exports.NonPositiveBigDecimalFromSelf = exports.NonPositive = exports.NonNegativeInt = exports.NonNegativeBigIntFromSelf = exports.NonNegativeBigInt = exports.NonNegativeBigDecimalSchemaId = exports.NonNegativeBigDecimalFromSelf = exports.NonNegative = exports.NonNaNSchemaId = exports.NonNaN = exports.NonEmptyTrimmedString = exports.NonEmptyString = exports.NonEmptyChunkFromSelf = void 0;
exports.Option = Option;
exports.OptionFromNonEmptyTrimmedString = void 0;
exports.OptionFromNullOr = OptionFromNullOr;
exports.OptionFromNullishOr = OptionFromNullishOr;
exports.OptionFromSelf = void 0;
exports.OptionFromUndefinedOr = OptionFromUndefinedOr;
exports.PropertySignatureTypeId = exports.PropertySignatureTransformation = exports.PropertySignatureDeclaration = exports.PropertyKey = exports.PositiveBigIntFromSelf = exports.PositiveBigInt = exports.PositiveBigDecimalSchemaId = exports.PositiveBigDecimalFromSelf = exports.Positive = exports.PatternSchemaId = void 0;
exports.ReadonlyMap = ReadonlyMap;
exports.ReadonlyMapFromSelf = exports.ReadonlyMapFromRecord = void 0;
exports.ReadonlySet = ReadonlySet;
exports.Record = exports.ReadonlySetFromSelf = void 0;
exports.Redacted = Redacted;
exports.RefineSchemaId = exports.RedactedFromSelf = void 0;
exports.Set = set;
exports.SetFromSelf = void 0;
exports.SortedSet = SortedSet;
exports.StringFromUriComponent = exports.StringFromHex = exports.StringFromBase64Url = exports.StringFromBase64 = exports.String = exports.StartsWithSchemaId = exports.SortedSetFromSelf = void 0;
exports.Struct = Struct;
exports.TrimmedSchemaId = exports.Trimmed = exports.Trim = exports.ToPropertySignature = exports.TimeZoneOffsetFromSelf = exports.TimeZoneOffset = exports.TimeZoneNamedFromSelf = exports.TimeZoneNamed = exports.TimeZoneFromSelf = exports.TimeZone = exports.TemplateLiteralParser = exports.TemplateLiteral = exports.TaggedStruct = exports.TaggedRequest = exports.TaggedError = exports.TaggedClass = exports.SymbolFromSelf = exports.Symbol = void 0;
exports.Tuple = Tuple;
exports.Uint8 = exports.UUIDSchemaId = exports.UUID = exports.URLFromSelf = exports.URL = exports.ULIDSchemaId = exports.ULID = exports.TypeId = void 0;
exports.UndefinedOr = exports.Undefined = exports.UncapitalizedSchemaId = exports.Uncapitalized = exports.Uncapitalize = exports.Uint8ArrayFromSelf = exports.Uint8ArrayFromHex = exports.Uint8ArrayFromBase64Url = exports.Uint8ArrayFromBase64 = exports.Uint8Array = void 0;
exports.Union = Union;
exports.annotations = exports.Void = exports.ValidDateSchemaId = exports.ValidDateFromSelf = exports.UppercasedSchemaId = exports.Uppercased = exports.Uppercase = exports.Unknown = exports.UniqueSymbolFromSelf = void 0;
exports.asSchema = asSchema;
exports.asWithResult = exports.asSerializableWithResult = exports.asSerializable = void 0;
Object.defineProperty(exports, "asserts", {
  enumerable: true,
  get: function () {
    return ParseResult.asserts;
  }
});
exports.decodeEither = exports.decode = exports.declare = exports.compose = exports.clampDuration = exports.clampBigInt = exports.clampBigDecimal = exports.clamp = exports.capitalized = exports.brand = exports.betweenDuration = exports.betweenDate = exports.betweenBigInt = exports.betweenBigDecimal = exports.between = exports.attachPropertySignature = void 0;
Object.defineProperty(exports, "decodeOption", {
  enumerable: true,
  get: function () {
    return ParseResult.decodeOption;
  }
});
exports.decodePromise = void 0;
Object.defineProperty(exports, "decodeSync", {
  enumerable: true,
  get: function () {
    return ParseResult.decodeSync;
  }
});
exports.decodeUnknownEither = exports.decodeUnknown = void 0;
Object.defineProperty(exports, "decodeUnknownOption", {
  enumerable: true,
  get: function () {
    return ParseResult.decodeUnknownOption;
  }
});
exports.decodeUnknownPromise = void 0;
Object.defineProperty(exports, "decodeUnknownSync", {
  enumerable: true,
  get: function () {
    return ParseResult.decodeUnknownSync;
  }
});
exports.encodeEither = exports.encode = exports.element = exports.deserializeSuccess = exports.deserializeFailure = exports.deserializeExit = exports.deserialize = void 0;
Object.defineProperty(exports, "encodeOption", {
  enumerable: true,
  get: function () {
    return ParseResult.encodeOption;
  }
});
exports.encodePromise = void 0;
Object.defineProperty(exports, "encodeSync", {
  enumerable: true,
  get: function () {
    return ParseResult.encodeSync;
  }
});
exports.encodeUnknownEither = exports.encodeUnknown = void 0;
Object.defineProperty(exports, "encodeUnknownOption", {
  enumerable: true,
  get: function () {
    return ParseResult.encodeUnknownOption;
  }
});
exports.encodeUnknownPromise = void 0;
Object.defineProperty(exports, "encodeUnknownSync", {
  enumerable: true,
  get: function () {
    return ParseResult.encodeUnknownSync;
  }
});
exports.failureSchema = exports.extend = exports.exitSchema = exports.equivalence = exports.endsWith = exports.encodedSchema = exports.encodedBoundSchema = void 0;
exports.filter = filter;
exports.greaterThanOrEqualToDuration = exports.greaterThanOrEqualToDate = exports.greaterThanOrEqualToBigInt = exports.greaterThanOrEqualToBigDecimal = exports.greaterThanOrEqualTo = exports.greaterThanDuration = exports.greaterThanDate = exports.greaterThanBigInt = exports.greaterThanBigDecimal = exports.greaterThan = exports.getNumberIndexedAccess = exports.getClassTag = exports.fromKey = exports.fromBrand = exports.format = exports.finite = exports.filterEffect = void 0;
exports.head = head;
exports.headNonEmpty = headNonEmpty;
exports.int = exports.instanceOf = exports.includes = exports.headOrElse = void 0;
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return ParseResult.is;
  }
});
exports.keyof = exports.itemsCount = exports.isSchema = exports.isPropertySignature = void 0;
exports.lowercased = exports.lessThanOrEqualToDuration = exports.lessThanOrEqualToDate = exports.lessThanOrEqualToBigInt = exports.lessThanOrEqualToBigDecimal = exports.lessThanOrEqualTo = exports.lessThanDuration = exports.lessThanDate = exports.lessThanBigInt = exports.lessThanBigDecimal = exports.lessThan = exports.length = void 0;
exports.make = make;
exports.parseJson = exports.optionalWith = exports.optionalToRequired = exports.optionalToOptional = exports.optionalElement = exports.optional = exports.omit = exports.nonPositiveBigInt = exports.nonPositiveBigDecimal = exports.nonPositive = exports.nonNegativeBigInt = exports.nonNegativeBigDecimal = exports.nonNegative = exports.nonNaN = exports.nonEmptyString = exports.negativeBigInt = exports.negativeBigDecimal = exports.negative = exports.mutable = exports.multipleOf = exports.minLength = exports.minItems = exports.maxLength = exports.maxItems = exports.makePropertySignature = void 0;
exports.parseNumber = parseNumber;
exports.transform = exports.tag = exports.symbolWithResult = exports.symbolSerializable = exports.suspend = exports.successSchema = exports.startsWith = exports.standardSchemaV1 = exports.split = exports.serializeSuccess = exports.serializeFailure = exports.serializeExit = exports.serialize = exports.serializableSchema = exports.requiredToOptional = exports.required = exports.rename = exports.propertySignature = exports.positiveBigInt = exports.positiveBigDecimal = exports.positive = exports.pluck = exports.pickLiteral = exports.pick = exports.pattern = exports.partialWith = exports.partial = void 0;
exports.transformLiteral = transformLiteral;
exports.transformLiterals = transformLiterals;
exports.validateEither = exports.validate = exports.validDate = exports.uppercased = exports.uncapitalized = exports.typeSchema = exports.trimmed = exports.transformOrFail = void 0;
Object.defineProperty(exports, "validateOption", {
  enumerable: true,
  get: function () {
    return ParseResult.validateOption;
  }
});
exports.validatePromise = void 0;
Object.defineProperty(exports, "validateSync", {
  enumerable: true,
  get: function () {
    return ParseResult.validateSync;
  }
});
exports.withDefaults = exports.withDecodingDefault = exports.withConstructorDefault = void 0;
var array_ = _interopRequireWildcard(require("./Array.js"));
var bigDecimal_ = _interopRequireWildcard(require("./BigDecimal.js"));
var bigInt_ = _interopRequireWildcard(require("./BigInt.js"));
var boolean_ = _interopRequireWildcard(require("./Boolean.js"));
var cause_ = _interopRequireWildcard(require("./Cause.js"));
var chunk_ = _interopRequireWildcard(require("./Chunk.js"));
var config_ = _interopRequireWildcard(require("./Config.js"));
var configError_ = _interopRequireWildcard(require("./ConfigError.js"));
var data_ = _interopRequireWildcard(require("./Data.js"));
var dateTime = _interopRequireWildcard(require("./DateTime.js"));
var duration_ = _interopRequireWildcard(require("./Duration.js"));
var Effect = _interopRequireWildcard(require("./Effect.js"));
var either_ = _interopRequireWildcard(require("./Either.js"));
var Encoding = _interopRequireWildcard(require("./Encoding.js"));
var Equal = _interopRequireWildcard(require("./Equal.js"));
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var exit_ = _interopRequireWildcard(require("./Exit.js"));
var fastCheck_ = _interopRequireWildcard(require("./FastCheck.js"));
var fiberId_ = _interopRequireWildcard(require("./FiberId.js"));
var _Function = require("./Function.js");
var _GlobalValue = require("./GlobalValue.js");
var hashMap_ = _interopRequireWildcard(require("./HashMap.js"));
var hashSet_ = _interopRequireWildcard(require("./HashSet.js"));
var Inspectable = _interopRequireWildcard(require("./Inspectable.js"));
var internalCause_ = _interopRequireWildcard(require("./internal/cause.js"));
var errors_ = _interopRequireWildcard(require("./internal/schema/errors.js"));
var schemaId_ = _interopRequireWildcard(require("./internal/schema/schemaId.js"));
var util_ = _interopRequireWildcard(require("./internal/schema/util.js"));
var list_ = _interopRequireWildcard(require("./List.js"));
var number_ = _interopRequireWildcard(require("./Number.js"));
var option_ = _interopRequireWildcard(require("./Option.js"));
var ParseResult = _interopRequireWildcard(require("./ParseResult.js"));
var _Pipeable = require("./Pipeable.js");
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
var redacted_ = _interopRequireWildcard(require("./Redacted.js"));
var Request = _interopRequireWildcard(require("./Request.js"));
var scheduler_ = _interopRequireWildcard(require("./Scheduler.js"));
var AST = _interopRequireWildcard(require("./SchemaAST.js"));
var sortedSet_ = _interopRequireWildcard(require("./SortedSet.js"));
var string_ = _interopRequireWildcard(require("./String.js"));
var struct_ = _interopRequireWildcard(require("./Struct.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.10.0
 */

/**
 * @since 3.10.0
 * @category symbol
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Schema");
/**
 * @category constructors
 * @since 3.10.0
 */
function make(ast) {
  return class SchemaClass {
    [TypeId] = variance;
    static ast = ast;
    static annotations(annotations) {
      return make(mergeSchemaAnnotations(this.ast, annotations));
    }
    static pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    }
    static toString() {
      return String(ast);
    }
    static Type;
    static Encoded;
    static Context;
    static [TypeId] = variance;
  };
}
const variance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _I: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
const makeStandardResult = exit => exit_.isSuccess(exit) ? exit.value : makeStandardFailureResult(cause_.pretty(exit.cause));
const makeStandardFailureResult = message => ({
  issues: [{
    message
  }]
});
const makeStandardFailureFromParseIssue = issue => Effect.map(ParseResult.ArrayFormatter.formatIssue(issue), issues => ({
  issues: issues.map(issue => ({
    path: issue.path,
    message: issue.message
  }))
}));
/**
 * Returns a "Standard Schema" object conforming to the [Standard Schema
 * v1](https://standardschema.dev/) specification.
 *
 * This function creates a schema whose `validate` method attempts to decode and
 * validate the provided input synchronously. If the underlying `Schema`
 * includes any asynchronous components (e.g., asynchronous message resolutions
 * or checks), then validation will necessarily return a `Promise` instead.
 *
 * Any detected defects will be reported via a single issue containing no
 * `path`.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.String
 * })
 *
 * //      ┌─── StandardSchemaV1<{ readonly name: string; }>
 * //      ▼
 * const standardSchema = Schema.standardSchemaV1(schema)
 * ```
 *
 * @category Standard Schema
 * @since 3.13.0
 */
const standardSchemaV1 = (schema, overrideOptions) => {
  const decodeUnknown = ParseResult.decodeUnknown(schema, {
    errors: "all"
  });
  return class StandardSchemaV1Class extends make(schema.ast) {
    static "~standard" = {
      version: 1,
      vendor: "effect",
      validate(value) {
        const scheduler = new scheduler_.SyncScheduler();
        const fiber = Effect.runFork(Effect.matchEffect(decodeUnknown(value, overrideOptions), {
          onFailure: makeStandardFailureFromParseIssue,
          onSuccess: value => Effect.succeed({
            value
          })
        }), {
          scheduler
        });
        scheduler.flush();
        const exit = fiber.unsafePoll();
        if (exit) {
          return makeStandardResult(exit);
        }
        return new Promise(resolve => {
          fiber.addObserver(exit => {
            resolve(makeStandardResult(exit));
          });
        });
      }
    };
  };
};
exports.standardSchemaV1 = standardSchemaV1;
const builtInAnnotations = {
  typeConstructor: AST.TypeConstructorAnnotationId,
  schemaId: AST.SchemaIdAnnotationId,
  message: AST.MessageAnnotationId,
  missingMessage: AST.MissingMessageAnnotationId,
  identifier: AST.IdentifierAnnotationId,
  title: AST.TitleAnnotationId,
  description: AST.DescriptionAnnotationId,
  examples: AST.ExamplesAnnotationId,
  default: AST.DefaultAnnotationId,
  documentation: AST.DocumentationAnnotationId,
  jsonSchema: AST.JSONSchemaAnnotationId,
  arbitrary: AST.ArbitraryAnnotationId,
  pretty: AST.PrettyAnnotationId,
  equivalence: AST.EquivalenceAnnotationId,
  concurrency: AST.ConcurrencyAnnotationId,
  batching: AST.BatchingAnnotationId,
  parseIssueTitle: AST.ParseIssueTitleAnnotationId,
  parseOptions: AST.ParseOptionsAnnotationId,
  decodingFallback: AST.DecodingFallbackAnnotationId
};
const toASTAnnotations = annotations => {
  if (!annotations) {
    return {};
  }
  const out = {
    ...annotations
  };
  for (const key in builtInAnnotations) {
    if (key in annotations) {
      const id = builtInAnnotations[key];
      out[id] = annotations[key];
      delete out[key];
    }
  }
  return out;
};
const mergeSchemaAnnotations = (ast, annotations) => AST.annotations(ast, toASTAnnotations(annotations));
/**
 * @since 3.10.0
 */
function asSchema(schema) {
  return schema;
}
/**
 * @category formatting
 * @since 3.10.0
 */
const format = schema => String(schema.ast);
/**
 * The `encodedSchema` function allows you to extract the `Encoded` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without retaining any refinements or transformations that
 * were applied previously.
 *
 * @since 3.10.0
 */
exports.format = format;
const encodedSchema = schema => make(AST.encodedAST(schema.ast));
/**
 * The `encodedBoundSchema` function is similar to `encodedSchema` but preserves
 * the refinements up to the first transformation point in the original schema.
 *
 * @since 3.10.0
 */
exports.encodedSchema = encodedSchema;
const encodedBoundSchema = schema => make(AST.encodedBoundAST(schema.ast));
/**
 * The `typeSchema` function allows you to extract the `Type` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without considering the initial encoding or transformation
 * processes.
 *
 * @since 3.10.0
 */
exports.encodedBoundSchema = encodedBoundSchema;
const typeSchema = schema => make(AST.typeAST(schema.ast));
/* c8 ignore start */
exports.typeSchema = typeSchema;
/* c8 ignore end */
/**
 * @category encoding
 * @since 3.10.0
 */
const encodeUnknown = (schema, options) => {
  const encodeUnknown = ParseResult.encodeUnknown(schema, options);
  return (u, overrideOptions) => ParseResult.mapError(encodeUnknown(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category encoding
 * @since 3.10.0
 */
exports.encodeUnknown = encodeUnknown;
const encodeUnknownEither = (schema, options) => {
  const encodeUnknownEither = ParseResult.encodeUnknownEither(schema, options);
  return (u, overrideOptions) => either_.mapLeft(encodeUnknownEither(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category encoding
 * @since 3.10.0
 */
exports.encodeUnknownEither = encodeUnknownEither;
const encodeUnknownPromise = (schema, options) => {
  const parser = encodeUnknown(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * @category encoding
 * @since 3.10.0
 */
exports.encodeUnknownPromise = encodeUnknownPromise;
const encode = exports.encode = encodeUnknown;
/**
 * @category encoding
 * @since 3.10.0
 */
const encodeEither = exports.encodeEither = encodeUnknownEither;
/**
 * @category encoding
 * @since 3.10.0
 */
const encodePromise = exports.encodePromise = encodeUnknownPromise;
/**
 * @category decoding
 * @since 3.10.0
 */
const decodeUnknown = (schema, options) => {
  const decodeUnknown = ParseResult.decodeUnknown(schema, options);
  return (u, overrideOptions) => ParseResult.mapError(decodeUnknown(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category decoding
 * @since 3.10.0
 */
exports.decodeUnknown = decodeUnknown;
const decodeUnknownEither = (schema, options) => {
  const decodeUnknownEither = ParseResult.decodeUnknownEither(schema, options);
  return (u, overrideOptions) => either_.mapLeft(decodeUnknownEither(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category decoding
 * @since 3.10.0
 */
exports.decodeUnknownEither = decodeUnknownEither;
const decodeUnknownPromise = (schema, options) => {
  const parser = decodeUnknown(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * @category decoding
 * @since 3.10.0
 */
exports.decodeUnknownPromise = decodeUnknownPromise;
const decode = exports.decode = decodeUnknown;
/**
 * @category decoding
 * @since 3.10.0
 */
const decodeEither = exports.decodeEither = decodeUnknownEither;
/**
 * @category decoding
 * @since 3.10.0
 */
const decodePromise = exports.decodePromise = decodeUnknownPromise;
/**
 * @category validation
 * @since 3.10.0
 */
const validate = (schema, options) => {
  const validate = ParseResult.validate(schema, options);
  return (u, overrideOptions) => ParseResult.mapError(validate(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category validation
 * @since 3.10.0
 */
exports.validate = validate;
const validateEither = (schema, options) => {
  const validateEither = ParseResult.validateEither(schema, options);
  return (u, overrideOptions) => either_.mapLeft(validateEither(u, overrideOptions), ParseResult.parseError);
};
/**
 * @category validation
 * @since 3.10.0
 */
exports.validateEither = validateEither;
const validatePromise = (schema, options) => {
  const parser = validate(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * Tests if a value is a `Schema`.
 *
 * @category guards
 * @since 3.10.0
 */
exports.validatePromise = validatePromise;
const isSchema = u => Predicate.hasProperty(u, TypeId) && Predicate.isObject(u[TypeId]);
exports.isSchema = isSchema;
function getDefaultLiteralAST(literals) {
  return AST.isMembers(literals) ? AST.Union.make(AST.mapMembers(literals, literal => new AST.Literal(literal))) : new AST.Literal(literals[0]);
}
function makeLiteralClass(literals, ast = getDefaultLiteralAST(literals)) {
  return class LiteralClass extends make(ast) {
    static annotations(annotations) {
      return makeLiteralClass(this.literals, mergeSchemaAnnotations(this.ast, annotations));
    }
    static literals = [...literals];
  };
}
function Literal(...literals) {
  return array_.isNonEmptyReadonlyArray(literals) ? makeLiteralClass(literals) : Never;
}
/**
 * Creates a new `Schema` from a literal schema.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Schema } from "effect"
 *
 * const schema = Schema.Literal("a", "b", "c").pipe(Schema.pickLiteral("a", "b"))
 *
 * assert.deepStrictEqual(Schema.decodeSync(schema)("a"), "a")
 * assert.deepStrictEqual(Schema.decodeSync(schema)("b"), "b")
 * assert.strictEqual(Either.isLeft(Schema.decodeUnknownEither(schema)("c")), true)
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
const pickLiteral = (...literals) => _schema => Literal(...literals);
/**
 * @category constructors
 * @since 3.10.0
 */
exports.pickLiteral = pickLiteral;
const UniqueSymbolFromSelf = symbol => make(new AST.UniqueSymbol(symbol));
exports.UniqueSymbolFromSelf = UniqueSymbolFromSelf;
const getDefaultEnumsAST = enums => new AST.Enums(Object.keys(enums).filter(key => typeof enums[enums[key]] !== "number").map(key => [key, enums[key]]));
const makeEnumsClass = (enums, ast = getDefaultEnumsAST(enums)) => class EnumsClass extends make(ast) {
  static annotations(annotations) {
    return makeEnumsClass(this.enums, mergeSchemaAnnotations(this.ast, annotations));
  }
  static enums = {
    ...enums
  };
};
/**
 * @category constructors
 * @since 3.10.0
 */
const Enums = enums => makeEnumsClass(enums);
/**
 * @category template literal
 * @since 3.10.0
 */
exports.Enums = Enums;
const TemplateLiteral = (...[head, ...tail]) => {
  const spans = [];
  let h = "";
  let ts = tail;
  if (isSchema(head)) {
    if (AST.isLiteral(head.ast)) {
      h = String(head.ast.literal);
    } else {
      ts = [head, ...ts];
    }
  } else {
    h = String(head);
  }
  for (let i = 0; i < ts.length; i++) {
    const item = ts[i];
    if (isSchema(item)) {
      if (i < ts.length - 1) {
        const next = ts[i + 1];
        if (isSchema(next)) {
          if (AST.isLiteral(next.ast)) {
            spans.push(new AST.TemplateLiteralSpan(item.ast, String(next.ast.literal)));
            i++;
            continue;
          }
        } else {
          spans.push(new AST.TemplateLiteralSpan(item.ast, String(next)));
          i++;
          continue;
        }
      }
      spans.push(new AST.TemplateLiteralSpan(item.ast, ""));
    } else {
      spans.push(new AST.TemplateLiteralSpan(new AST.Literal(item), ""));
    }
  }
  if (array_.isNonEmptyArray(spans)) {
    return make(new AST.TemplateLiteral(h, spans));
  } else {
    return make(new AST.TemplateLiteral("", [new AST.TemplateLiteralSpan(new AST.Literal(h), "")]));
  }
};
exports.TemplateLiteral = TemplateLiteral;
function getTemplateLiteralParserCoercedElement(encoded, schema) {
  const ast = encoded.ast;
  switch (ast._tag) {
    case "Literal":
      {
        const literal = ast.literal;
        if (!Predicate.isString(literal)) {
          const s = String(literal);
          return transform(Literal(s), schema, {
            strict: true,
            decode: () => literal,
            encode: () => s
          });
        }
        break;
      }
    case "NumberKeyword":
      return compose(NumberFromString, schema);
    case "Union":
      {
        const members = [];
        let hasCoercions = false;
        for (const member of ast.types) {
          const schema = make(member);
          const encoded = encodedSchema(schema);
          const coerced = getTemplateLiteralParserCoercedElement(encoded, schema);
          if (coerced) {
            hasCoercions = true;
          }
          members.push(coerced ?? schema);
        }
        return hasCoercions ? compose(Union(...members), schema) : schema;
      }
  }
}
/**
 * @category template literal
 * @since 3.10.0
 */
const TemplateLiteralParser = (...params) => {
  const encodedSchemas = [];
  const elements = [];
  const schemas = [];
  let coerced = false;
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    const schema = isSchema(param) ? param : Literal(param);
    schemas.push(schema);
    const encoded = encodedSchema(schema);
    encodedSchemas.push(encoded);
    const element = getTemplateLiteralParserCoercedElement(encoded, schema);
    if (element) {
      elements.push(element);
      coerced = true;
    } else {
      elements.push(schema);
    }
  }
  const from = TemplateLiteral(...encodedSchemas);
  const re = AST.getTemplateLiteralCapturingRegExp(from.ast);
  let to = Tuple(...elements);
  if (coerced) {
    to = to.annotations({
      [AST.AutoTitleAnnotationId]: format(Tuple(...schemas))
    });
  }
  return class TemplateLiteralParserClass extends transformOrFail(from, to, {
    strict: false,
    decode: (i, _, ast) => {
      const match = re.exec(i);
      return match ? ParseResult.succeed(match.slice(1, params.length + 1)) : ParseResult.fail(new ParseResult.Type(ast, i, `${re.source}: no match for ${JSON.stringify(i)}`));
    },
    encode: tuple => ParseResult.succeed(tuple.join(""))
  }) {
    static params = params.slice();
  };
};
exports.TemplateLiteralParser = TemplateLiteralParser;
const declareConstructor = (typeParameters, options, annotations) => makeDeclareClass(typeParameters, new AST.Declaration(typeParameters.map(tp => tp.ast), (...typeParameters) => options.decode(...typeParameters.map(make)), (...typeParameters) => options.encode(...typeParameters.map(make)), toASTAnnotations(annotations)));
const declarePrimitive = (is, annotations) => {
  const decodeUnknown = () => (input, _, ast) => is(input) ? ParseResult.succeed(input) : ParseResult.fail(new ParseResult.Type(ast, input));
  const encodeUnknown = decodeUnknown;
  return makeDeclareClass([], new AST.Declaration([], decodeUnknown, encodeUnknown, toASTAnnotations(annotations)));
};
function makeDeclareClass(typeParameters, ast) {
  return class DeclareClass extends make(ast) {
    static annotations(annotations) {
      return makeDeclareClass(this.typeParameters, mergeSchemaAnnotations(this.ast, annotations));
    }
    static typeParameters = [...typeParameters];
  };
}
/**
 * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
 * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
 *
 * @category constructors
 * @since 3.10.0
 */
const declare = function () {
  if (Array.isArray(arguments[0])) {
    const typeParameters = arguments[0];
    const options = arguments[1];
    const annotations = arguments[2];
    return declareConstructor(typeParameters, options, annotations);
  }
  const is = arguments[0];
  const annotations = arguments[1];
  return declarePrimitive(is, annotations);
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.declare = declare;
const BrandSchemaId = exports.BrandSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Brand");
/**
 * @category constructors
 * @since 3.10.0
 */
const fromBrand = (constructor, annotations) => self => {
  const out = makeBrandClass(self, new AST.Refinement(self.ast, function predicate(a, _, ast) {
    const either = constructor.either(a);
    return either_.isLeft(either) ? option_.some(new ParseResult.Type(ast, a, either.left.map(v => v.message).join(", "))) : option_.none();
  }, toASTAnnotations({
    schemaId: BrandSchemaId,
    [BrandSchemaId]: {
      constructor
    },
    ...annotations
  })));
  return out;
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.fromBrand = fromBrand;
const InstanceOfSchemaId = exports.InstanceOfSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/InstanceOf");
/**
 * @category constructors
 * @since 3.10.0
 */
const instanceOf = (constructor, annotations) => declare(u => u instanceof constructor, {
  title: constructor.name,
  description: `an instance of ${constructor.name}`,
  pretty: () => String,
  schemaId: InstanceOfSchemaId,
  [InstanceOfSchemaId]: {
    constructor
  },
  ...annotations
});
/**
 * @category primitives
 * @since 3.10.0
 */
exports.instanceOf = instanceOf;
class Undefined extends /*#__PURE__*/make(AST.undefinedKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Undefined = Undefined;
class Void extends /*#__PURE__*/make(AST.voidKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Void = Void;
class Null extends /*#__PURE__*/make(AST.null) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Null = Null;
class Never extends /*#__PURE__*/make(AST.neverKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Never = Never;
class Unknown extends /*#__PURE__*/make(AST.unknownKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Unknown = Unknown;
class Any extends /*#__PURE__*/make(AST.anyKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.Any = Any;
class BigIntFromSelf extends /*#__PURE__*/make(AST.bigIntKeyword) {}
/**
 * @category primitives
 * @since 3.10.0
 */
exports.BigIntFromSelf = BigIntFromSelf;
class SymbolFromSelf extends /*#__PURE__*/make(AST.symbolKeyword) {}
/** @ignore */
exports.SymbolFromSelf = SymbolFromSelf;
class String$ extends /*#__PURE__*/make(AST.stringKeyword) {}
/** @ignore */
exports.String = String$;
class Number$ extends /*#__PURE__*/make(AST.numberKeyword) {}
/** @ignore */
exports.Number = Number$;
class Boolean$ extends /*#__PURE__*/make(AST.booleanKeyword) {}
/** @ignore */
exports.Boolean = Boolean$;
class Object$ extends /*#__PURE__*/make(AST.objectKeyword) {}
exports.Object = Object$;
const getDefaultUnionAST = members => AST.Union.make(members.map(m => m.ast));
function makeUnionClass(members, ast = getDefaultUnionAST(members)) {
  return class UnionClass extends make(ast) {
    static annotations(annotations) {
      return makeUnionClass(this.members, mergeSchemaAnnotations(this.ast, annotations));
    }
    static members = [...members];
  };
}
function Union(...members) {
  return AST.isMembers(members) ? makeUnionClass(members) : array_.isNonEmptyReadonlyArray(members) ? members[0] : Never;
}
/**
 * @category combinators
 * @since 3.10.0
 */
const NullOr = self => Union(self, Null);
/**
 * @category combinators
 * @since 3.10.0
 */
exports.NullOr = NullOr;
const UndefinedOr = self => Union(self, Undefined);
/**
 * @category combinators
 * @since 3.10.0
 */
exports.UndefinedOr = UndefinedOr;
const NullishOr = self => Union(self, Null, Undefined);
/**
 * @category combinators
 * @since 3.10.0
 */
exports.NullishOr = NullishOr;
const keyof = self => make(AST.keyof(self.ast));
/**
 * @since 3.10.0
 */
exports.keyof = keyof;
const element = self => new ElementImpl(new AST.OptionalType(self.ast, false), self);
/**
 * @since 3.10.0
 */
exports.element = element;
const optionalElement = self => new ElementImpl(new AST.OptionalType(self.ast, true), self);
exports.optionalElement = optionalElement;
class ElementImpl {
  ast;
  from;
  [TypeId];
  _Token;
  constructor(ast, from) {
    this.ast = ast;
    this.from = from;
  }
  annotations(annotations) {
    return new ElementImpl(new AST.OptionalType(this.ast.type, this.ast.isOptional, {
      ...this.ast.annotations,
      ...toASTAnnotations(annotations)
    }), this.from);
  }
  toString() {
    return `${this.ast.type}${this.ast.isOptional ? "?" : ""}`;
  }
}
const getDefaultTupleTypeAST = (elements, rest) => new AST.TupleType(elements.map(el => isSchema(el) ? new AST.OptionalType(el.ast, false) : el.ast), rest.map(el => isSchema(el) ? new AST.Type(el.ast) : el.ast), true);
function makeTupleTypeClass(elements, rest, ast = getDefaultTupleTypeAST(elements, rest)) {
  return class TupleTypeClass extends make(ast) {
    static annotations(annotations) {
      return makeTupleTypeClass(this.elements, this.rest, mergeSchemaAnnotations(this.ast, annotations));
    }
    static elements = [...elements];
    static rest = [...rest];
  };
}
function Tuple(...args) {
  return Array.isArray(args[0]) ? makeTupleTypeClass(args[0], args.slice(1)) : makeTupleTypeClass(args, []);
}
function makeArrayClass(value, ast) {
  return class ArrayClass extends makeTupleTypeClass([], [value], ast) {
    static annotations(annotations) {
      return makeArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations));
    }
    static value = value;
  };
}
const Array$ = value => makeArrayClass(value);
exports.Array = Array$;
function makeNonEmptyArrayClass(value, ast) {
  return class NonEmptyArrayClass extends makeTupleTypeClass([value], [value], ast) {
    static annotations(annotations) {
      return makeNonEmptyArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations));
    }
    static value = value;
  };
}
/**
 * @category constructors
 * @since 3.10.0
 */
const NonEmptyArray = value => makeNonEmptyArrayClass(value);
/**
 * @category constructors
 * @since 3.10.0
 */
exports.NonEmptyArray = NonEmptyArray;
function ArrayEnsure(value) {
  return transform(Union(value, Array$(value)), Array$(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => array_.ensure(i),
    encode: a => a.length === 1 ? a[0] : a
  });
}
/**
 * @category constructors
 * @since 3.10.0
 */
function NonEmptyArrayEnsure(value) {
  return transform(Union(value, NonEmptyArray(value)), NonEmptyArray(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => array_.isNonEmptyReadonlyArray(i) ? i : array_.of(i),
    encode: a => a.length === 1 ? a[0] : a
  });
}
const formatPropertySignatureToken = isOptional => isOptional ? "\"?:\"" : "\":\"";
/**
 * @category PropertySignature
 * @since 3.10.0
 */
class PropertySignatureDeclaration extends AST.OptionalType {
  isReadonly;
  defaultValue;
  /**
   * @since 3.10.0
   */
  _tag = "PropertySignatureDeclaration";
  constructor(type, isOptional, isReadonly, annotations, defaultValue) {
    super(type, isOptional, annotations);
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    const token = formatPropertySignatureToken(this.isOptional);
    const type = String(this.type);
    return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`;
  }
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
exports.PropertySignatureDeclaration = PropertySignatureDeclaration;
class FromPropertySignature extends AST.OptionalType {
  isReadonly;
  fromKey;
  constructor(type, isOptional, isReadonly, annotations, fromKey) {
    super(type, isOptional, annotations);
    this.isReadonly = isReadonly;
    this.fromKey = fromKey;
  }
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
exports.FromPropertySignature = FromPropertySignature;
class ToPropertySignature extends AST.OptionalType {
  isReadonly;
  defaultValue;
  constructor(type, isOptional, isReadonly, annotations, defaultValue) {
    super(type, isOptional, annotations);
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
}
exports.ToPropertySignature = ToPropertySignature;
const formatPropertyKey = p => {
  if (p === undefined) {
    return "never";
  }
  if (Predicate.isString(p)) {
    return JSON.stringify(p);
  }
  return String(p);
};
/**
 * @category PropertySignature
 * @since 3.10.0
 */
class PropertySignatureTransformation {
  from;
  to;
  decode;
  encode;
  /**
   * @since 3.10.0
   */
  _tag = "PropertySignatureTransformation";
  constructor(from, to, decode, encode) {
    this.from = from;
    this.to = to;
    this.decode = decode;
    this.encode = encode;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return `PropertySignature<${formatPropertySignatureToken(this.to.isOptional)}, ${this.to.type}, ${formatPropertyKey(this.from.fromKey)}, ${formatPropertySignatureToken(this.from.isOptional)}, ${this.from.type}>`;
  }
}
exports.PropertySignatureTransformation = PropertySignatureTransformation;
const mergeSignatureAnnotations = (ast, annotations) => {
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      {
        return new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, {
          ...ast.annotations,
          ...annotations
        }, ast.defaultValue);
      }
    case "PropertySignatureTransformation":
      {
        return new PropertySignatureTransformation(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
          ...ast.to.annotations,
          ...annotations
        }, ast.to.defaultValue), ast.decode, ast.encode);
      }
  }
};
/**
 * @since 3.10.0
 * @category symbol
 */
const PropertySignatureTypeId = exports.PropertySignatureTypeId = /*#__PURE__*/Symbol.for("effect/PropertySignature");
/**
 * @since 3.10.0
 * @category guards
 */
const isPropertySignature = u => Predicate.hasProperty(u, PropertySignatureTypeId);
exports.isPropertySignature = isPropertySignature;
class PropertySignatureImpl {
  ast;
  [TypeId];
  [PropertySignatureTypeId] = null;
  _TypeToken;
  _Key;
  _EncodedToken;
  _HasDefault;
  constructor(ast) {
    this.ast = ast;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  annotations(annotations) {
    return new PropertySignatureImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)));
  }
  toString() {
    return String(this.ast);
  }
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
const makePropertySignature = ast => new PropertySignatureImpl(ast);
exports.makePropertySignature = makePropertySignature;
class PropertySignatureWithFromImpl extends PropertySignatureImpl {
  from;
  constructor(ast, from) {
    super(ast);
    this.from = from;
  }
  annotations(annotations) {
    return new PropertySignatureWithFromImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations)), this.from);
  }
}
/**
 * Lifts a `Schema` into a `PropertySignature`.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
const propertySignature = self => new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(self.ast, false, true, {}, undefined), self);
/**
 * Enhances a property signature with a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
exports.propertySignature = propertySignature;
const withConstructorDefault = exports.withConstructorDefault = /*#__PURE__*/(0, _Function.dual)(2, (self, defaultValue) => {
  const ast = self.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      return makePropertySignature(new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, defaultValue));
    case "PropertySignatureTransformation":
      return makePropertySignature(new PropertySignatureTransformation(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, ast.to.annotations, defaultValue), ast.decode, ast.encode));
  }
});
const applyDefaultValue = (o, defaultValue) => option_.match(o, {
  onNone: () => option_.some(defaultValue()),
  onSome: value => option_.some(value === undefined ? defaultValue() : value)
});
const pruneUndefined = ast => AST.pruneUndefined(ast, pruneUndefined, ast => {
  const pruned = pruneUndefined(ast.to);
  if (pruned) {
    return new AST.Transformation(ast.from, pruned, ast.transformation);
  }
});
/**
 * Enhances a property signature with a default decoding value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
const withDecodingDefault = exports.withDecodingDefault = /*#__PURE__*/(0, _Function.dual)(2, (self, defaultValue) => {
  const ast = self.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      {
        const to = AST.typeAST(ast.type);
        return makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations), new ToPropertySignature(pruneUndefined(to) ?? to, false, true, {}, ast.defaultValue), o => applyDefaultValue(o, defaultValue), _Function.identity));
      }
    case "PropertySignatureTransformation":
      {
        const to = ast.to.type;
        return makePropertySignature(new PropertySignatureTransformation(ast.from, new ToPropertySignature(pruneUndefined(to) ?? to, false, ast.to.isReadonly, ast.to.annotations, ast.to.defaultValue), o => applyDefaultValue(ast.decode(o), defaultValue), ast.encode));
      }
  }
});
/**
 * Enhances a property signature with a default decoding value and a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
const withDefaults = exports.withDefaults = /*#__PURE__*/(0, _Function.dual)(2, (self, defaults) => self.pipe(withDecodingDefault(defaults.decoding), withConstructorDefault(defaults.constructor)));
/**
 * Enhances a property signature by specifying a different key for it in the Encoded type.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
const fromKey = exports.fromKey = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  const ast = self.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      {
        return makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, key), new ToPropertySignature(AST.typeAST(ast.type), ast.isOptional, ast.isReadonly, {}, ast.defaultValue), _Function.identity, _Function.identity));
      }
    case "PropertySignatureTransformation":
      return makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(ast.from.type, ast.from.isOptional, ast.from.isReadonly, ast.from.annotations, key), ast.to, ast.decode, ast.encode));
  }
});
/**
 * Converts an optional property to a required one through a transformation `Option -> Type`.
 *
 * - `decode`: `none` as argument means the value is missing in the input.
 * - `encode`: `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
const optionalToRequired = (from, to, options) => makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, true, true, {}, undefined), new ToPropertySignature(to.ast, false, true, {}, undefined), o => option_.some(options.decode(o)), option_.flatMap(options.encode)));
/**
 * Converts an optional property to a required one through a transformation `Type -> Option`.
 *
 * - `decode`: `none` as return value means the value will be missing in the output.
 * - `encode`: `none` as argument means the value is missing in the input.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
exports.optionalToRequired = optionalToRequired;
const requiredToOptional = (from, to, options) => makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, false, true, {}, undefined), new ToPropertySignature(to.ast, true, true, {}, undefined), option_.flatMap(options.decode), o => option_.some(options.encode(o))));
/**
 * Converts an optional property to another optional property through a transformation `Option -> Option`.
 *
 * - `decode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 * - `encode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
exports.requiredToOptional = requiredToOptional;
const optionalToOptional = (from, to, options) => makePropertySignature(new PropertySignatureTransformation(new FromPropertySignature(from.ast, true, true, {}, undefined), new ToPropertySignature(to.ast, true, true, {}, undefined), options.decode, options.encode));
exports.optionalToOptional = optionalToOptional;
const optionalPropertySignatureAST = (self, options) => {
  const isExact = options?.exact;
  const defaultValue = options?.default;
  const isNullable = options?.nullable;
  const asOption = options?.as == "Option";
  const asOptionEncode = options?.onNoneEncoding ? option_.orElse(options.onNoneEncoding) : _Function.identity;
  if (isExact) {
    if (defaultValue) {
      if (isNullable) {
        return withConstructorDefault(optionalToRequired(NullOr(self), typeSchema(self), {
          decode: option_.match({
            onNone: defaultValue,
            onSome: a => a === null ? defaultValue() : a
          }),
          encode: option_.some
        }), defaultValue).ast;
      } else {
        return withConstructorDefault(optionalToRequired(self, typeSchema(self), {
          decode: option_.match({
            onNone: defaultValue,
            onSome: _Function.identity
          }),
          encode: option_.some
        }), defaultValue).ast;
      }
    } else if (asOption) {
      const to = OptionFromSelf_(typeSchema(self));
      if (isNullable) {
        return optionalToRequired(NullOr(self), to, {
          decode: option_.filter(Predicate.isNotNull),
          encode: asOptionEncode
        }).ast;
      } else {
        return optionalToRequired(self, to, {
          decode: _Function.identity,
          encode: _Function.identity
        }).ast;
      }
    } else {
      if (isNullable) {
        return optionalToOptional(NullOr(self), typeSchema(self), {
          decode: option_.filter(Predicate.isNotNull),
          encode: _Function.identity
        }).ast;
      } else {
        return new PropertySignatureDeclaration(self.ast, true, true, {}, undefined);
      }
    }
  } else {
    if (defaultValue) {
      if (isNullable) {
        return withConstructorDefault(optionalToRequired(NullishOr(self), typeSchema(self), {
          decode: option_.match({
            onNone: defaultValue,
            onSome: a => a == null ? defaultValue() : a
          }),
          encode: option_.some
        }), defaultValue).ast;
      } else {
        return withConstructorDefault(optionalToRequired(UndefinedOr(self), typeSchema(self), {
          decode: option_.match({
            onNone: defaultValue,
            onSome: a => a === undefined ? defaultValue() : a
          }),
          encode: option_.some
        }), defaultValue).ast;
      }
    } else if (asOption) {
      const to = OptionFromSelf_(typeSchema(self));
      if (isNullable) {
        return optionalToRequired(NullishOr(self), to, {
          decode: option_.filter(a => a != null),
          encode: asOptionEncode
        }).ast;
      } else {
        return optionalToRequired(UndefinedOr(self), to, {
          decode: option_.filter(Predicate.isNotUndefined),
          encode: asOptionEncode
        }).ast;
      }
    } else {
      if (isNullable) {
        return optionalToOptional(NullishOr(self), UndefinedOr(typeSchema(self)), {
          decode: option_.filter(Predicate.isNotNull),
          encode: _Function.identity
        }).ast;
      } else {
        return new PropertySignatureDeclaration(UndefinedOr(self).ast, true, true, {}, undefined);
      }
    }
  }
};
/**
 * @category PropertySignature
 * @since 3.10.0
 */
const optional = self => {
  const ast = self.ast === AST.undefinedKeyword || self.ast === AST.neverKeyword ? AST.undefinedKeyword : UndefinedOr(self).ast;
  return new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(ast, true, true, {}, undefined), self);
};
/**
 * @category PropertySignature
 * @since 3.10.0
 */
exports.optional = optional;
const optionalWith = exports.optionalWith = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]), (self, options) => {
  return new PropertySignatureWithFromImpl(optionalPropertySignatureAST(self, options), self);
});
const preserveMissingMessageAnnotation = /*#__PURE__*/AST.pickAnnotations([AST.MissingMessageAnnotationId]);
const getDefaultTypeLiteralAST = (fields, records) => {
  const ownKeys = Reflect.ownKeys(fields);
  const pss = [];
  if (ownKeys.length > 0) {
    const from = [];
    const to = [];
    const transformations = [];
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i];
      const field = fields[key];
      if (isPropertySignature(field)) {
        const ast = field.ast;
        switch (ast._tag) {
          case "PropertySignatureDeclaration":
            {
              const type = ast.type;
              const isOptional = ast.isOptional;
              const toAnnotations = ast.annotations;
              from.push(new AST.PropertySignature(key, type, isOptional, true, preserveMissingMessageAnnotation(ast)));
              to.push(new AST.PropertySignature(key, AST.typeAST(type), isOptional, true, toAnnotations));
              pss.push(new AST.PropertySignature(key, type, isOptional, true, toAnnotations));
              break;
            }
          case "PropertySignatureTransformation":
            {
              const fromKey = ast.from.fromKey ?? key;
              from.push(new AST.PropertySignature(fromKey, ast.from.type, ast.from.isOptional, true, ast.from.annotations));
              to.push(new AST.PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations));
              transformations.push(new AST.PropertySignatureTransformation(fromKey, key, ast.decode, ast.encode));
              break;
            }
        }
      } else {
        from.push(new AST.PropertySignature(key, field.ast, false, true));
        to.push(new AST.PropertySignature(key, AST.typeAST(field.ast), false, true));
        pss.push(new AST.PropertySignature(key, field.ast, false, true));
      }
    }
    if (array_.isNonEmptyReadonlyArray(transformations)) {
      const issFrom = [];
      const issTo = [];
      for (const r of records) {
        const {
          indexSignatures,
          propertySignatures
        } = AST.record(r.key.ast, r.value.ast);
        propertySignatures.forEach(ps => {
          from.push(ps);
          to.push(new AST.PropertySignature(ps.name, AST.typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations));
        });
        indexSignatures.forEach(is => {
          issFrom.push(is);
          issTo.push(new AST.IndexSignature(is.parameter, AST.typeAST(is.type), is.isReadonly));
        });
      }
      return new AST.Transformation(new AST.TypeLiteral(from, issFrom, {
        [AST.AutoTitleAnnotationId]: "Struct (Encoded side)"
      }), new AST.TypeLiteral(to, issTo, {
        [AST.AutoTitleAnnotationId]: "Struct (Type side)"
      }), new AST.TypeLiteralTransformation(transformations));
    }
  }
  const iss = [];
  for (const r of records) {
    const {
      indexSignatures,
      propertySignatures
    } = AST.record(r.key.ast, r.value.ast);
    propertySignatures.forEach(ps => pss.push(ps));
    indexSignatures.forEach(is => iss.push(is));
  }
  return new AST.TypeLiteral(pss, iss);
};
const lazilyMergeDefaults = (fields, out) => {
  const ownKeys = Reflect.ownKeys(fields);
  for (const key of ownKeys) {
    const field = fields[key];
    if (out[key] === undefined && isPropertySignature(field)) {
      const ast = field.ast;
      const defaultValue = ast._tag === "PropertySignatureDeclaration" ? ast.defaultValue : ast.to.defaultValue;
      if (defaultValue !== undefined) {
        out[key] = defaultValue();
      }
    }
  }
  return out;
};
function makeTypeLiteralClass(fields, records, ast = getDefaultTypeLiteralAST(fields, records)) {
  return class TypeLiteralClass extends make(ast) {
    static annotations(annotations) {
      return makeTypeLiteralClass(this.fields, this.records, mergeSchemaAnnotations(this.ast, annotations));
    }
    static fields = {
      ...fields
    };
    static records = [...records];
    static make = (props, options) => {
      const propsWithDefaults = lazilyMergeDefaults(fields, {
        ...props
      });
      return getDisableValidationMakeOption(options) ? propsWithDefaults : ParseResult.validateSync(this)(propsWithDefaults);
    };
    static pick(...keys) {
      return Struct(struct_.pick(fields, ...keys));
    }
    static omit(...keys) {
      return Struct(struct_.omit(fields, ...keys));
    }
  };
}
function Struct(fields, ...records) {
  return makeTypeLiteralClass(fields, records);
}
/**
 * Returns a property signature that represents a tag.
 * A tag is a literal value that is used to distinguish between different types of objects.
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.Struct({
 *   _tag: Schema.tag("User"),
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @see {@link TaggedStruct}
 *
 * @since 3.10.0
 */
const tag = tag => Literal(tag).pipe(propertySignature, withConstructorDefault(() => tag));
/**
 * A tagged struct is a struct that has a tag property that is used to distinguish between different types of objects.
 *
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.TaggedStruct("User", {
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
exports.tag = tag;
const TaggedStruct = (value, fields) => Struct({
  _tag: tag(value),
  ...fields
});
exports.TaggedStruct = TaggedStruct;
function makeRecordClass(key, value, ast) {
  return class RecordClass extends makeTypeLiteralClass({}, [{
    key,
    value
  }], ast) {
    static annotations(annotations) {
      return makeRecordClass(key, value, mergeSchemaAnnotations(this.ast, annotations));
    }
    static key = key;
    static value = value;
  };
}
/**
 * @category constructors
 * @since 3.10.0
 */
const Record = options => makeRecordClass(options.key, options.value);
/**
 * @category struct transformations
 * @since 3.10.0
 */
exports.Record = Record;
const pick = (...keys) => self => make(AST.pick(self.ast, keys));
/**
 * @category struct transformations
 * @since 3.10.0
 */
exports.pick = pick;
const omit = (...keys) => self => make(AST.omit(self.ast, keys));
/**
 * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
 * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // ---------------------------------------------
 * // use case: pull out a single field from a
 * // struct through a transformation
 * // ---------------------------------------------
 *
 * const mytable = Schema.Struct({
 *   column1: Schema.NumberFromString,
 *   column2: Schema.Number
 * })
 *
 * // const pullOutColumn: S.Schema<number, {
 * //     readonly column1: string;
 * // }, never>
 * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
 *
 * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
 * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
 * ```
 *
 * @category struct transformations
 * @since 3.10.0
 */
exports.omit = omit;
const pluck = exports.pluck = /*#__PURE__*/(0, _Function.dual)(2, (schema, key) => {
  const ps = AST.getPropertyKeyIndexedAccess(AST.typeAST(schema.ast), key);
  const value = make(ps.isOptional ? AST.orUndefined(ps.type) : ps.type);
  const out = transform(schema.pipe(pick(key)), value, {
    strict: true,
    decode: i => i[key],
    encode: a => ps.isOptional && a === undefined ? {} : {
      [key]: a
    }
  });
  return out;
});
function makeBrandClass(from, ast) {
  return class BrandClass extends make(ast) {
    static annotations(annotations) {
      return makeBrandClass(this.from, mergeSchemaAnnotations(this.ast, annotations));
    }
    static make = (a, options) => {
      return getDisableValidationMakeOption(options) ? a : ParseResult.validateSync(this)(a);
    };
    static from = from;
  };
}
/**
 * Returns a nominal branded schema by applying a brand to a given schema.
 *
 * ```
 * Schema<A> + B -> Schema<A & Brand<B>>
 * ```
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const Int = Schema.Number.pipe(Schema.int(), Schema.brand("Int"))
 * type Int = Schema.Schema.Type<typeof Int> // number & Brand<"Int">
 * ```
 *
 * @category branding
 * @since 3.10.0
 */
const brand = (brand, annotations) => self => {
  const annotation = option_.match(AST.getBrandAnnotation(self.ast), {
    onNone: () => [brand],
    onSome: brands => [...brands, brand]
  });
  const ast = AST.annotations(self.ast, toASTAnnotations({
    [AST.BrandAnnotationId]: annotation,
    ...annotations
  }));
  return makeBrandClass(self, ast);
};
/**
 * @category combinators
 * @since 3.10.0
 */
exports.brand = brand;
const partial = self => make(AST.partial(self.ast));
/**
 * @category combinators
 * @since 3.10.0
 */
exports.partial = partial;
const partialWith = exports.partialWith = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]), (self, options) => make(AST.partial(self.ast, options)));
/**
 * @category combinators
 * @since 3.10.0
 */
const required = self => make(AST.required(self.ast));
/**
 * Creates a new schema with shallow mutability applied to its properties.
 *
 * @category combinators
 * @since 3.10.0
 */
exports.required = required;
const mutable = schema => make(AST.mutable(schema.ast));
exports.mutable = mutable;
const intersectTypeLiterals = (x, y, path) => {
  if (AST.isTypeLiteral(x) && AST.isTypeLiteral(y)) {
    const propertySignatures = [...x.propertySignatures];
    for (const ps of y.propertySignatures) {
      const name = ps.name;
      const i = propertySignatures.findIndex(ps => ps.name === name);
      if (i === -1) {
        propertySignatures.push(ps);
      } else {
        const {
          isOptional,
          type
        } = propertySignatures[i];
        propertySignatures[i] = new AST.PropertySignature(name, extendAST(type, ps.type, path.concat(name)), isOptional, true);
      }
    }
    return new AST.TypeLiteral(propertySignatures, x.indexSignatures.concat(y.indexSignatures));
  }
  throw new Error(errors_.getSchemaExtendErrorMessage(x, y, path));
};
const preserveRefinementAnnotations = /*#__PURE__*/AST.omitAnnotations([AST.IdentifierAnnotationId]);
const addRefinementToMembers = (refinement, asts) => asts.map(ast => new AST.Refinement(ast, refinement.filter, preserveRefinementAnnotations(refinement)));
const extendAST = (x, y, path) => AST.Union.make(intersectUnionMembers([x], [y], path));
const getTypes = ast => AST.isUnion(ast) ? ast.types : [ast];
const intersectUnionMembers = (xs, ys, path) => array_.flatMap(xs, x => array_.flatMap(ys, y => {
  switch (y._tag) {
    case "Literal":
      {
        if (Predicate.isString(y.literal) && AST.isStringKeyword(x) || Predicate.isNumber(y.literal) && AST.isNumberKeyword(x) || Predicate.isBoolean(y.literal) && AST.isBooleanKeyword(x)) {
          return [y];
        }
        break;
      }
    case "StringKeyword":
      {
        if (y === AST.stringKeyword) {
          if (AST.isStringKeyword(x) || AST.isLiteral(x) && Predicate.isString(x.literal)) {
            return [x];
          } else if (AST.isRefinement(x)) {
            return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
          }
        } else if (x === AST.stringKeyword) {
          return [y];
        }
        break;
      }
    case "NumberKeyword":
      {
        if (y === AST.numberKeyword) {
          if (AST.isNumberKeyword(x) || AST.isLiteral(x) && Predicate.isNumber(x.literal)) {
            return [x];
          } else if (AST.isRefinement(x)) {
            return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
          }
        } else if (x === AST.numberKeyword) {
          return [y];
        }
        break;
      }
    case "BooleanKeyword":
      {
        if (y === AST.booleanKeyword) {
          if (AST.isBooleanKeyword(x) || AST.isLiteral(x) && Predicate.isBoolean(x.literal)) {
            return [x];
          } else if (AST.isRefinement(x)) {
            return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
          }
        } else if (x === AST.booleanKeyword) {
          return [y];
        }
        break;
      }
    case "Union":
      return intersectUnionMembers(getTypes(x), y.types, path);
    case "Suspend":
      return [new AST.Suspend(() => extendAST(x, y.f(), path))];
    case "Refinement":
      return addRefinementToMembers(y, intersectUnionMembers(getTypes(x), getTypes(y.from), path));
    case "TypeLiteral":
      {
        switch (x._tag) {
          case "Union":
            return intersectUnionMembers(x.types, [y], path);
          case "Suspend":
            return [new AST.Suspend(() => extendAST(x.f(), y, path))];
          case "Refinement":
            return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
          case "TypeLiteral":
            return [intersectTypeLiterals(x, y, path)];
          case "Transformation":
            {
              const transformation = x.transformation;
              const from = intersectTypeLiterals(x.from, y, path);
              const to = intersectTypeLiterals(x.to, AST.typeAST(y), path);
              switch (transformation._tag) {
                case "TypeLiteralTransformation":
                  return [new AST.Transformation(from, to, new AST.TypeLiteralTransformation(transformation.propertySignatureTransformations))];
                case "ComposeTransformation":
                  return [new AST.Transformation(from, to, AST.composeTransformation)];
                case "FinalTransformation":
                  return [new AST.Transformation(from, to, new AST.FinalTransformation((fromA, options, ast, fromI) => ParseResult.map(transformation.decode(fromA, options, ast, fromI), partial => ({
                    ...fromA,
                    ...partial
                  })), (toI, options, ast, toA) => ParseResult.map(transformation.encode(toI, options, ast, toA), partial => ({
                    ...toI,
                    ...partial
                  }))))];
              }
            }
        }
        break;
      }
    case "Transformation":
      {
        if (AST.isTransformation(x)) {
          if (AST.isTypeLiteralTransformation(y.transformation) && AST.isTypeLiteralTransformation(x.transformation)) {
            return [new AST.Transformation(intersectTypeLiterals(x.from, y.from, path), intersectTypeLiterals(x.to, y.to, path), new AST.TypeLiteralTransformation(y.transformation.propertySignatureTransformations.concat(x.transformation.propertySignatureTransformations)))];
          }
        } else {
          return intersectUnionMembers([y], [x], path);
        }
        break;
      }
  }
  throw new Error(errors_.getSchemaExtendErrorMessage(x, y, path));
}));
/**
 * Extends a schema with another schema.
 *
 * Not all extensions are supported, and their support depends on the nature of
 * the involved schemas.
 *
 * Possible extensions include:
 * - `Schema.String` with another `Schema.String` refinement or a string literal
 * - `Schema.Number` with another `Schema.Number` refinement or a number literal
 * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
 *   literal
 * - A struct with another struct where overlapping fields support extension
 * - A struct with in index signature
 * - A struct with a union of supported schemas
 * - A refinement of a struct with a supported schema
 * - A suspend of a struct with a supported schema
 * - A transformation between structs where the “from” and “to” sides have no
 *   overlapping fields with the target struct
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const schema = Schema.Struct({
 *   a: Schema.String,
 *   b: Schema.String
 * })
 *
 * // const extended: Schema<
 * //   {
 * //     readonly a: string
 * //     readonly b: string
 * //   } & {
 * //     readonly c: string
 * //   } & {
 * //     readonly [x: string]: string
 * //   }
 * // >
 * const extended = Schema.asSchema(schema.pipe(
 *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
 *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
 * ))
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
const extend = exports.extend = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => make(extendAST(self.ast, that.ast, [])));
/**
 * @category combinators
 * @since 3.10.0
 */
const compose = exports.compose = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[1]), (from, to) => makeTransformationClass(from, to, AST.compose(from.ast, to.ast)));
/**
 * @category constructors
 * @since 3.10.0
 */
const suspend = f => make(new AST.Suspend(() => f().ast));
/**
 * @since 3.10.0
 * @category symbol
 */
exports.suspend = suspend;
const RefineSchemaId = exports.RefineSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Refine");
function makeRefineClass(from, filter, ast) {
  return class RefineClass extends make(ast) {
    static annotations(annotations) {
      return makeRefineClass(this.from, this.filter, mergeSchemaAnnotations(this.ast, annotations));
    }
    static [RefineSchemaId] = from;
    static from = from;
    static filter = filter;
    static make = (a, options) => {
      return getDisableValidationMakeOption(options) ? a : ParseResult.validateSync(this)(a);
    };
  };
}
const fromFilterPredicateReturnTypeItem = (item, ast, input) => {
  if (Predicate.isBoolean(item)) {
    return item ? option_.none() : option_.some(new ParseResult.Type(ast, input));
  }
  if (Predicate.isString(item)) {
    return option_.some(new ParseResult.Type(ast, input, item));
  }
  if (item !== undefined) {
    if ("_tag" in item) {
      return option_.some(item);
    }
    const issue = new ParseResult.Type(ast, input, item.message);
    return option_.some(array_.isNonEmptyReadonlyArray(item.path) ? new ParseResult.Pointer(item.path, input, issue) : issue);
  }
  return option_.none();
};
const toFilterParseIssue = (out, ast, input) => {
  if (util_.isSingle(out)) {
    return fromFilterPredicateReturnTypeItem(out, ast, input);
  }
  if (array_.isNonEmptyReadonlyArray(out)) {
    const issues = array_.filterMap(out, issue => fromFilterPredicateReturnTypeItem(issue, ast, input));
    if (array_.isNonEmptyReadonlyArray(issues)) {
      return option_.some(issues.length === 1 ? issues[0] : new ParseResult.Composite(ast, input, issues));
    }
  }
  return option_.none();
};
function filter(predicate, annotations) {
  return self => {
    function filter(input, options, ast) {
      return toFilterParseIssue(predicate(input, options, ast), ast, input);
    }
    const ast = new AST.Refinement(self.ast, filter, toASTAnnotations(annotations));
    return makeRefineClass(self, filter, ast);
  };
}
/**
 * @category transformations
 * @since 3.10.0
 */
const filterEffect = exports.filterEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => transformOrFail(self, typeSchema(self), {
  strict: true,
  decode: (i, options, ast) => ParseResult.flatMap(f(i, options, ast), filterReturnType => option_.match(toFilterParseIssue(filterReturnType, ast, i), {
    onNone: () => ParseResult.succeed(i),
    onSome: ParseResult.fail
  })),
  encode: a => ParseResult.succeed(a)
}));
function makeTransformationClass(from, to, ast) {
  return class TransformationClass extends make(ast) {
    static annotations(annotations) {
      return makeTransformationClass(this.from, this.to, mergeSchemaAnnotations(this.ast, annotations));
    }
    static from = from;
    static to = to;
  };
}
/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided decoding functions.
 *
 * @category transformations
 * @since 3.10.0
 */
const transformOrFail = exports.transformOrFail = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]) && isSchema(args[1]), (from, to, options) => makeTransformationClass(from, to, new AST.Transformation(from.ast, to.ast, new AST.FinalTransformation(options.decode, options.encode))));
/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided mapping functions.
 *
 * @category transformations
 * @since 3.10.0
 */
const transform = exports.transform = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]) && isSchema(args[1]), (from, to, options) => transformOrFail(from, to, {
  strict: true,
  decode: (fromA, _options, _ast, toA) => ParseResult.succeed(options.decode(fromA, toA)),
  encode: (toI, _options, _ast, toA) => ParseResult.succeed(options.encode(toI, toA))
}));
/**
 * Creates a new `Schema` which transforms literal values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 *
 * const schema = S.transformLiteral(0, "a")
 *
 * assert.deepStrictEqual(S.decodeSync(schema)(0), "a")
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
function transformLiteral(from, to) {
  return transform(Literal(from), Literal(to), {
    strict: true,
    decode: () => to,
    encode: () => from
  });
}
function transformLiterals(...pairs) {
  return Union(...pairs.map(([from, to]) => transformLiteral(from, to)));
}
/**
 * Attaches a property signature with the specified key and value to the schema.
 * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
 * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 * import { pipe } from "effect/Function"
 *
 * const Circle = S.Struct({ radius: S.Number })
 * const Square = S.Struct({ sideLength: S.Number })
 * const Shape = S.Union(
 *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
 *   Square.pipe(S.attachPropertySignature("kind", "square"))
 * )
 *
 * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
 *   kind: "circle",
 *   radius: 10
 * })
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
const attachPropertySignature = exports.attachPropertySignature = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]), (schema, key, value, annotations) => {
  const ast = extend(typeSchema(schema), Struct({
    [key]: Predicate.isSymbol(value) ? UniqueSymbolFromSelf(value) : Literal(value)
  })).ast;
  return make(new AST.Transformation(schema.ast, annotations ? mergeSchemaAnnotations(ast, annotations) : ast, new AST.TypeLiteralTransformation([new AST.PropertySignatureTransformation(key, key, () => option_.some(value), () => option_.none())])));
});
/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * @category annotations
 * @since 3.10.0
 */
const annotations = exports.annotations = /*#__PURE__*/(0, _Function.dual)(2, (self, annotations) => self.annotations(annotations));
/**
 * @category renaming
 * @since 3.10.0
 */
const rename = exports.rename = /*#__PURE__*/(0, _Function.dual)(2, (self, mapping) => make(AST.rename(self.ast, mapping)));
/**
 * @category schema id
 * @since 3.10.0
 */
const TrimmedSchemaId = exports.TrimmedSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Trimmed");
/**
 * Verifies that a string contains no leading or trailing whitespaces.
 *
 * Note. This combinator does not make any transformations, it only validates.
 * If what you were looking for was a combinator to trim strings, then check out the `trim` combinator.
 *
 * @category string filters
 * @since 3.10.0
 */
const trimmed = annotations => self => self.pipe(filter(a => a === a.trim(), {
  schemaId: TrimmedSchemaId,
  title: "trimmed",
  description: "a string with no leading or trailing whitespace",
  jsonSchema: {
    pattern: "^\\S[\\s\\S]*\\S$|^\\S$|^$"
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.trimmed = trimmed;
const MaxLengthSchemaId = exports.MaxLengthSchemaId = schemaId_.MaxLengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
const maxLength = (maxLength, annotations) => self => self.pipe(filter(a => a.length <= maxLength, {
  schemaId: MaxLengthSchemaId,
  title: `maxLength(${maxLength})`,
  description: `a string at most ${maxLength} character(s) long`,
  jsonSchema: {
    maxLength
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.maxLength = maxLength;
const MinLengthSchemaId = exports.MinLengthSchemaId = schemaId_.MinLengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
const minLength = (minLength, annotations) => self => self.pipe(filter(a => a.length >= minLength, {
  schemaId: MinLengthSchemaId,
  title: `minLength(${minLength})`,
  description: `a string at least ${minLength} character(s) long`,
  jsonSchema: {
    minLength
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.minLength = minLength;
const LengthSchemaId = exports.LengthSchemaId = schemaId_.LengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
const length = (length, annotations) => self => {
  const minLength = Predicate.isObject(length) ? Math.max(0, Math.floor(length.min)) : Math.max(0, Math.floor(length));
  const maxLength = Predicate.isObject(length) ? Math.max(minLength, Math.floor(length.max)) : minLength;
  if (minLength !== maxLength) {
    return self.pipe(filter(a => a.length >= minLength && a.length <= maxLength, {
      schemaId: LengthSchemaId,
      title: `length({ min: ${minLength}, max: ${maxLength})`,
      description: `a string at least ${minLength} character(s) and at most ${maxLength} character(s) long`,
      jsonSchema: {
        minLength,
        maxLength
      },
      ...annotations
    }));
  }
  return self.pipe(filter(a => a.length === minLength, {
    schemaId: LengthSchemaId,
    title: `length(${minLength})`,
    description: minLength === 1 ? `a single character` : `a string ${minLength} character(s) long`,
    jsonSchema: {
      minLength,
      maxLength: minLength
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.length = length;
const PatternSchemaId = exports.PatternSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Pattern");
/**
 * @category string filters
 * @since 3.10.0
 */
const pattern = (regex, annotations) => self => {
  const source = regex.source;
  return self.pipe(filter(a => {
    // The following line ensures that `lastIndex` is reset to `0` in case the user has specified the `g` flag
    regex.lastIndex = 0;
    return regex.test(a);
  }, {
    schemaId: PatternSchemaId,
    [PatternSchemaId]: {
      regex
    },
    // title: `pattern(/${source}/)`, // avoiding this because it can be very long
    description: `a string matching the pattern ${source}`,
    jsonSchema: {
      pattern: source
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.pattern = pattern;
const StartsWithSchemaId = exports.StartsWithSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/StartsWith");
/**
 * @category string filters
 * @since 3.10.0
 */
const startsWith = (startsWith, annotations) => self => {
  const formatted = JSON.stringify(startsWith);
  return self.pipe(filter(a => a.startsWith(startsWith), {
    schemaId: StartsWithSchemaId,
    [StartsWithSchemaId]: {
      startsWith
    },
    title: `startsWith(${formatted})`,
    description: `a string starting with ${formatted}`,
    jsonSchema: {
      pattern: `^${startsWith}`
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.startsWith = startsWith;
const EndsWithSchemaId = exports.EndsWithSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/EndsWith");
/**
 * @category string filters
 * @since 3.10.0
 */
const endsWith = (endsWith, annotations) => self => {
  const formatted = JSON.stringify(endsWith);
  return self.pipe(filter(a => a.endsWith(endsWith), {
    schemaId: EndsWithSchemaId,
    [EndsWithSchemaId]: {
      endsWith
    },
    title: `endsWith(${formatted})`,
    description: `a string ending with ${formatted}`,
    jsonSchema: {
      pattern: `^.*${endsWith}$`
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.endsWith = endsWith;
const IncludesSchemaId = exports.IncludesSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Includes");
/**
 * @category string filters
 * @since 3.10.0
 */
const includes = (searchString, annotations) => self => {
  const formatted = JSON.stringify(searchString);
  return self.pipe(filter(a => a.includes(searchString), {
    schemaId: IncludesSchemaId,
    [IncludesSchemaId]: {
      includes: searchString
    },
    title: `includes(${formatted})`,
    description: `a string including ${formatted}`,
    jsonSchema: {
      pattern: `.*${searchString}.*`
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.includes = includes;
const LowercasedSchemaId = exports.LowercasedSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Lowercased");
/**
 * Verifies that a string is lowercased.
 *
 * @category string filters
 * @since 3.10.0
 */
const lowercased = annotations => self => self.pipe(filter(a => a === a.toLowerCase(), {
  schemaId: LowercasedSchemaId,
  title: "lowercased",
  description: "a lowercase string",
  jsonSchema: {
    pattern: "^[^A-Z]*$"
  },
  ...annotations
}));
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.lowercased = lowercased;
class Lowercased extends /*#__PURE__*/String$.pipe(/*#__PURE__*/lowercased({
  identifier: "Lowercased"
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.Lowercased = Lowercased;
const UppercasedSchemaId = exports.UppercasedSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Uppercased");
/**
 * Verifies that a string is uppercased.
 *
 * @category string filters
 * @since 3.10.0
 */
const uppercased = annotations => self => self.pipe(filter(a => a === a.toUpperCase(), {
  schemaId: UppercasedSchemaId,
  title: "uppercased",
  description: "an uppercase string",
  jsonSchema: {
    pattern: "^[^a-z]*$"
  },
  ...annotations
}));
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.uppercased = uppercased;
class Uppercased extends /*#__PURE__*/String$.pipe(/*#__PURE__*/uppercased({
  identifier: "Uppercased"
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.Uppercased = Uppercased;
const CapitalizedSchemaId = exports.CapitalizedSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Capitalized");
/**
 * Verifies that a string is capitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
const capitalized = annotations => self => self.pipe(filter(a => a[0]?.toUpperCase() === a[0], {
  schemaId: CapitalizedSchemaId,
  title: "capitalized",
  description: "a capitalized string",
  jsonSchema: {
    pattern: "^[^a-z]?.*$"
  },
  ...annotations
}));
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.capitalized = capitalized;
class Capitalized extends /*#__PURE__*/String$.pipe(/*#__PURE__*/capitalized({
  identifier: "Capitalized"
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.Capitalized = Capitalized;
const UncapitalizedSchemaId = exports.UncapitalizedSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/Uncapitalized");
/**
 * Verifies that a string is uncapitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
const uncapitalized = annotations => self => self.pipe(filter(a => a[0]?.toLowerCase() === a[0], {
  schemaId: UncapitalizedSchemaId,
  title: "uncapitalized",
  description: "a uncapitalized string",
  jsonSchema: {
    pattern: "^[^A-Z]?.*$"
  },
  ...annotations
}));
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.uncapitalized = uncapitalized;
class Uncapitalized extends /*#__PURE__*/String$.pipe(/*#__PURE__*/uncapitalized({
  identifier: "Uncapitalized"
})) {}
/**
 * A schema representing a single character.
 *
 * @category string constructors
 * @since 3.10.0
 */
exports.Uncapitalized = Uncapitalized;
class Char extends /*#__PURE__*/String$.pipe(/*#__PURE__*/length(1, {
  identifier: "Char"
})) {}
/**
 * @category string filters
 * @since 3.10.0
 */
exports.Char = Char;
const nonEmptyString = annotations => minLength(1, {
  title: "nonEmptyString",
  description: "a non empty string",
  ...annotations
});
/**
 * This schema converts a string to lowercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.nonEmptyString = nonEmptyString;
class Lowercase extends /*#__PURE__*/transform(String$.annotations({
  description: "a string that will be converted to lowercase"
}), Lowercased, {
  strict: true,
  decode: i => i.toLowerCase(),
  encode: _Function.identity
}).annotations({
  identifier: "Lowercase"
}) {}
/**
 * This schema converts a string to uppercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.Lowercase = Lowercase;
class Uppercase extends /*#__PURE__*/transform(String$.annotations({
  description: "a string that will be converted to uppercase"
}), Uppercased, {
  strict: true,
  decode: i => i.toUpperCase(),
  encode: _Function.identity
}).annotations({
  identifier: "Uppercase"
}) {}
/**
 * This schema converts a string to capitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.Uppercase = Uppercase;
class Capitalize extends /*#__PURE__*/transform(String$.annotations({
  description: "a string that will be converted to a capitalized format"
}), Capitalized, {
  strict: true,
  decode: i => string_.capitalize(i),
  encode: _Function.identity
}).annotations({
  identifier: "Capitalize"
}) {}
/**
 * This schema converts a string to uncapitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.Capitalize = Capitalize;
class Uncapitalize extends /*#__PURE__*/transform(String$.annotations({
  description: "a string that will be converted to an uncapitalized format"
}), Uncapitalized, {
  strict: true,
  decode: i => string_.uncapitalize(i),
  encode: _Function.identity
}).annotations({
  identifier: "Uncapitalize"
}) {}
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.Uncapitalize = Uncapitalize;
class Trimmed extends /*#__PURE__*/String$.pipe(/*#__PURE__*/trimmed({
  identifier: "Trimmed"
})) {}
/**
 * Useful for validating strings that must contain meaningful characters without
 * leading or trailing whitespace.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)(" a ")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category string constructors
 * @since 3.10.0
 */
exports.Trimmed = Trimmed;
class NonEmptyTrimmedString extends /*#__PURE__*/Trimmed.pipe(/*#__PURE__*/nonEmptyString({
  identifier: "NonEmptyTrimmedString"
})) {}
/**
 * This schema allows removing whitespaces from the beginning and end of a string.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.NonEmptyTrimmedString = NonEmptyTrimmedString;
class Trim extends /*#__PURE__*/transform(String$.annotations({
  description: "a string that will be trimmed"
}), Trimmed, {
  strict: true,
  decode: i => i.trim(),
  encode: _Function.identity
}).annotations({
  identifier: "Trim"
}) {}
/**
 * Returns a schema that allows splitting a string into an array of strings.
 *
 * @category string transformations
 * @since 3.10.0
 */
exports.Trim = Trim;
const split = separator => transform(String$.annotations({
  description: "a string that will be split"
}), Array$(String$), {
  strict: true,
  decode: i => i.split(separator),
  encode: a => a.join(separator)
});
exports.split = split;
const getErrorMessage = e => e instanceof Error ? e.message : String(e);
const getParseJsonTransformation = options => transformOrFail(String$.annotations({
  description: "a string to be decoded into JSON"
}), Unknown, {
  strict: true,
  decode: (i, _, ast) => ParseResult.try({
    try: () => JSON.parse(i, options?.reviver),
    catch: e => new ParseResult.Type(ast, i, getErrorMessage(e))
  }),
  encode: (a, _, ast) => ParseResult.try({
    try: () => JSON.stringify(a, options?.replacer, options?.space),
    catch: e => new ParseResult.Type(ast, a, getErrorMessage(e))
  })
}).annotations({
  title: "parseJson",
  schemaId: AST.ParseJsonSchemaId
});
/**
 * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
 * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
 *
 * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
 *
 * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
 * ```
 *
 * @category string transformations
 * @since 3.10.0
 */
const parseJson = (schemaOrOptions, o) => isSchema(schemaOrOptions) ? compose(parseJson(o), schemaOrOptions) : getParseJsonTransformation(schemaOrOptions);
/**
 * @category string constructors
 * @since 3.10.0
 */
exports.parseJson = parseJson;
class NonEmptyString extends /*#__PURE__*/String$.pipe(/*#__PURE__*/nonEmptyString({
  identifier: "NonEmptyString"
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.NonEmptyString = NonEmptyString;
const UUIDSchemaId = exports.UUIDSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/UUID");
const uuidRegexp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
/**
 * Represents a Universally Unique Identifier (UUID).
 *
 * This schema ensures that the provided string adheres to the standard UUID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
class UUID extends /*#__PURE__*/String$.pipe(/*#__PURE__*/pattern(uuidRegexp, {
  schemaId: UUIDSchemaId,
  identifier: "UUID",
  jsonSchema: {
    format: "uuid",
    pattern: uuidRegexp.source
  },
  description: "a Universally Unique Identifier",
  arbitrary: () => fc => fc.uuid()
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.UUID = UUID;
const ULIDSchemaId = exports.ULIDSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/ULID");
const ulidRegexp = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i;
/**
 * Represents a Universally Unique Lexicographically Sortable Identifier (ULID).
 *
 * ULIDs are designed to be compact, URL-safe, and ordered, making them suitable for use as identifiers.
 * This schema ensures that the provided string adheres to the standard ULID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
class ULID extends /*#__PURE__*/String$.pipe(/*#__PURE__*/pattern(ulidRegexp, {
  schemaId: ULIDSchemaId,
  identifier: "ULID",
  description: "a Universally Unique Lexicographically Sortable Identifier",
  arbitrary: () => fc => fc.ulid()
})) {}
/**
 * Defines a schema that represents a `URL` object.
 *
 * @category URL constructors
 * @since 3.11.0
 */
exports.ULID = ULID;
class URLFromSelf extends /*#__PURE__*/instanceOf(URL, {
  typeConstructor: {
    _tag: "URL"
  },
  identifier: "URLFromSelf",
  arbitrary: () => fc => fc.webUrl().map(s => new URL(s)),
  pretty: () => url => url.toString()
}) {}
/** @ignore */
exports.URLFromSelf = URLFromSelf;
class URL$ extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a URL"
}), URLFromSelf, {
  strict: true,
  decode: (i, _, ast) => ParseResult.try({
    try: () => new URL(i),
    catch: e => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a URL. ${getErrorMessage(e)}`)
  }),
  encode: a => ParseResult.succeed(a.toString())
}).annotations({
  identifier: "URL",
  pretty: () => url => url.toString()
}) {}
exports.URL = URL$;
/**
 * @category schema id
 * @since 3.10.0
 */
const FiniteSchemaId = exports.FiniteSchemaId = schemaId_.FiniteSchemaId;
/**
 * Ensures that the provided value is a finite number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
const finite = annotations => self => self.pipe(filter(Number.isFinite, {
  schemaId: FiniteSchemaId,
  title: "finite",
  description: "a finite number",
  jsonSchema: {},
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.finite = finite;
const GreaterThanSchemaId = exports.GreaterThanSchemaId = schemaId_.GreaterThanSchemaId;
/**
 * This filter checks whether the provided number is greater than the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
const greaterThan = (exclusiveMinimum, annotations) => self => self.pipe(filter(a => a > exclusiveMinimum, {
  schemaId: GreaterThanSchemaId,
  title: `greaterThan(${exclusiveMinimum})`,
  description: exclusiveMinimum === 0 ? "a positive number" : `a number greater than ${exclusiveMinimum}`,
  jsonSchema: {
    exclusiveMinimum
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThan = greaterThan;
const GreaterThanOrEqualToSchemaId = exports.GreaterThanOrEqualToSchemaId = schemaId_.GreaterThanOrEqualToSchemaId;
/**
 * This filter checks whether the provided number is greater than or equal to the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
const greaterThanOrEqualTo = (minimum, annotations) => self => self.pipe(filter(a => a >= minimum, {
  schemaId: GreaterThanOrEqualToSchemaId,
  title: `greaterThanOrEqualTo(${minimum})`,
  description: minimum === 0 ? "a non-negative number" : `a number greater than or equal to ${minimum}`,
  jsonSchema: {
    minimum
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanOrEqualTo = greaterThanOrEqualTo;
const MultipleOfSchemaId = exports.MultipleOfSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/MultipleOf");
/**
 * @category number filters
 * @since 3.10.0
 */
const multipleOf = (divisor, annotations) => self => {
  const positiveDivisor = Math.abs(divisor); // spec requires positive divisor
  return self.pipe(filter(a => number_.remainder(a, divisor) === 0, {
    schemaId: MultipleOfSchemaId,
    title: `multipleOf(${positiveDivisor})`,
    description: `a number divisible by ${positiveDivisor}`,
    jsonSchema: {
      multipleOf: positiveDivisor
    },
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.multipleOf = multipleOf;
const IntSchemaId = exports.IntSchemaId = schemaId_.IntSchemaId;
/**
 * Ensures that the provided value is an integer number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
const int = annotations => self => self.pipe(filter(a => Number.isSafeInteger(a), {
  schemaId: IntSchemaId,
  title: "int",
  description: "an integer",
  jsonSchema: {
    type: "integer"
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.int = int;
const LessThanSchemaId = exports.LessThanSchemaId = schemaId_.LessThanSchemaId;
/**
 * This filter checks whether the provided number is less than the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
const lessThan = (exclusiveMaximum, annotations) => self => self.pipe(filter(a => a < exclusiveMaximum, {
  schemaId: LessThanSchemaId,
  title: `lessThan(${exclusiveMaximum})`,
  description: exclusiveMaximum === 0 ? "a negative number" : `a number less than ${exclusiveMaximum}`,
  jsonSchema: {
    exclusiveMaximum
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThan = lessThan;
const LessThanOrEqualToSchemaId = exports.LessThanOrEqualToSchemaId = schemaId_.LessThanOrEqualToSchemaId;
/**
 * This schema checks whether the provided number is less than or equal to the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
const lessThanOrEqualTo = (maximum, annotations) => self => self.pipe(filter(a => a <= maximum, {
  schemaId: LessThanOrEqualToSchemaId,
  title: `lessThanOrEqualTo(${maximum})`,
  description: maximum === 0 ? "a non-positive number" : `a number less than or equal to ${maximum}`,
  jsonSchema: {
    maximum
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanOrEqualTo = lessThanOrEqualTo;
const BetweenSchemaId = exports.BetweenSchemaId = schemaId_.BetweenSchemaId;
/**
 * This filter checks whether the provided number falls within the specified minimum and maximum values.
 *
 * @category number filters
 * @since 3.10.0
 */
const between = (minimum, maximum, annotations) => self => self.pipe(filter(a => a >= minimum && a <= maximum, {
  schemaId: BetweenSchemaId,
  title: `between(${minimum}, ${maximum})`,
  description: `a number between ${minimum} and ${maximum}`,
  jsonSchema: {
    minimum,
    maximum
  },
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.between = between;
const NonNaNSchemaId = exports.NonNaNSchemaId = schemaId_.NonNaNSchemaId;
/**
 * @category number filters
 * @since 3.10.0
 */
const nonNaN = annotations => self => self.pipe(filter(a => !Number.isNaN(a), {
  schemaId: NonNaNSchemaId,
  title: "nonNaN",
  description: "a number excluding NaN",
  ...annotations
}));
/**
 * @category number filters
 * @since 3.10.0
 */
exports.nonNaN = nonNaN;
const positive = annotations => greaterThan(0, {
  title: "positive",
  ...annotations
});
/**
 * @category number filters
 * @since 3.10.0
 */
exports.positive = positive;
const negative = annotations => lessThan(0, {
  title: "negative",
  ...annotations
});
/**
 * @category number filters
 * @since 3.10.0
 */
exports.negative = negative;
const nonPositive = annotations => lessThanOrEqualTo(0, {
  title: "nonPositive",
  ...annotations
});
/**
 * @category number filters
 * @since 3.10.0
 */
exports.nonPositive = nonPositive;
const nonNegative = annotations => greaterThanOrEqualTo(0, {
  title: "nonNegative",
  ...annotations
});
/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @category number transformations
 * @since 3.10.0
 */
exports.nonNegative = nonNegative;
const clamp = (minimum, maximum) => self => {
  return transform(self, typeSchema(self).pipe(between(minimum, maximum)), {
    strict: false,
    decode: i => number_.clamp(i, {
      minimum,
      maximum
    }),
    encode: _Function.identity
  });
};
/**
 * Transforms a `string` into a `number` by parsing the string using the `parse`
 * function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when
 * non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity",
 * "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
exports.clamp = clamp;
function parseNumber(self) {
  return transformOrFail(self, Number$, {
    strict: false,
    decode: (i, _, ast) => ParseResult.fromOption(number_.parse(i), () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a number`)),
    encode: a => ParseResult.succeed(String(a))
  });
}
/**
 * This schema transforms a `string` into a `number` by parsing the string using the `parse` function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity", "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
class NumberFromString extends /*#__PURE__*/parseNumber(String$.annotations({
  description: "a string to be decoded into a number"
})).annotations({
  identifier: "NumberFromString"
}) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.NumberFromString = NumberFromString;
class Finite extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/finite({
  identifier: "Finite"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.Finite = Finite;
class Int extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/int({
  identifier: "Int"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.Int = Int;
class NonNaN extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/nonNaN({
  identifier: "NonNaN"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.NonNaN = NonNaN;
class Positive extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/positive({
  identifier: "Positive"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.Positive = Positive;
class Negative extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/negative({
  identifier: "Negative"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.Negative = Negative;
class NonPositive extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/nonPositive({
  identifier: "NonPositive"
})) {}
/**
 * @category number constructors
 * @since 3.10.0
 */
exports.NonPositive = NonPositive;
class NonNegative extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/nonNegative({
  identifier: "NonNegative"
})) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.NonNegative = NonNegative;
const JsonNumberSchemaId = exports.JsonNumberSchemaId = schemaId_.JsonNumberSchemaId;
/**
 * The `JsonNumber` is a schema for representing JSON numbers. It ensures that the provided value is a valid
 * number by filtering out `NaN` and `(+/-) Infinity`. This is useful when you want to validate and represent numbers in JSON
 * format.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * const is = Schema.is(Schema.JsonNumber)
 *
 * assert.deepStrictEqual(is(42), true)
 * assert.deepStrictEqual(is(Number.NaN), false)
 * assert.deepStrictEqual(is(Number.POSITIVE_INFINITY), false)
 * assert.deepStrictEqual(is(Number.NEGATIVE_INFINITY), false)
 * ```
 *
 * @category number constructors
 * @since 3.10.0
 */
class JsonNumber extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/finite({
  schemaId: JsonNumberSchemaId,
  identifier: "JsonNumber"
})) {}
/**
 * @category boolean transformations
 * @since 3.10.0
 */
exports.JsonNumber = JsonNumber;
class Not extends /*#__PURE__*/transform(/*#__PURE__*/Boolean$.annotations({
  description: "a boolean that will be negated"
}), Boolean$, {
  strict: true,
  decode: i => boolean_.not(i),
  encode: a => boolean_.not(a)
}) {}
exports.Not = Not;
const encodeSymbol = (sym, ast) => {
  const key = Symbol.keyFor(sym);
  return key === undefined ? ParseResult.fail(new ParseResult.Type(ast, sym, `Unable to encode a unique symbol ${String(sym)} into a string`)) : ParseResult.succeed(key);
};
const decodeSymbol = s => ParseResult.succeed(Symbol.for(s));
/** @ignore */
class Symbol$ extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a globally shared symbol"
}), SymbolFromSelf, {
  strict: false,
  decode: i => decodeSymbol(i),
  encode: (a, _, ast) => encodeSymbol(a, ast)
}).annotations({
  identifier: "Symbol"
}) {}
exports.Symbol = Symbol$;
/**
 * @category schema id
 * @since 3.10.0
 */
const GreaterThanBigIntSchemaId = exports.GreaterThanBigIntSchemaId = schemaId_.GreaterThanBigintSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
const greaterThanBigInt = (min, annotations) => self => self.pipe(filter(a => a > min, {
  schemaId: GreaterThanBigIntSchemaId,
  [GreaterThanBigIntSchemaId]: {
    min
  },
  title: `greaterThanBigInt(${min})`,
  description: min === 0n ? "a positive bigint" : `a bigint greater than ${min}n`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanBigInt = greaterThanBigInt;
const GreaterThanOrEqualToBigIntSchemaId = exports.GreaterThanOrEqualToBigIntSchemaId = schemaId_.GreaterThanOrEqualToBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
const greaterThanOrEqualToBigInt = (min, annotations) => self => self.pipe(filter(a => a >= min, {
  schemaId: GreaterThanOrEqualToBigIntSchemaId,
  [GreaterThanOrEqualToBigIntSchemaId]: {
    min
  },
  title: `greaterThanOrEqualToBigInt(${min})`,
  description: min === 0n ? "a non-negative bigint" : `a bigint greater than or equal to ${min}n`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanOrEqualToBigInt = greaterThanOrEqualToBigInt;
const LessThanBigIntSchemaId = exports.LessThanBigIntSchemaId = schemaId_.LessThanBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
const lessThanBigInt = (max, annotations) => self => self.pipe(filter(a => a < max, {
  schemaId: LessThanBigIntSchemaId,
  [LessThanBigIntSchemaId]: {
    max
  },
  title: `lessThanBigInt(${max})`,
  description: max === 0n ? "a negative bigint" : `a bigint less than ${max}n`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanBigInt = lessThanBigInt;
const LessThanOrEqualToBigIntSchemaId = exports.LessThanOrEqualToBigIntSchemaId = schemaId_.LessThanOrEqualToBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
const lessThanOrEqualToBigInt = (max, annotations) => self => self.pipe(filter(a => a <= max, {
  schemaId: LessThanOrEqualToBigIntSchemaId,
  [LessThanOrEqualToBigIntSchemaId]: {
    max
  },
  title: `lessThanOrEqualToBigInt(${max})`,
  description: max === 0n ? "a non-positive bigint" : `a bigint less than or equal to ${max}n`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanOrEqualToBigInt = lessThanOrEqualToBigInt;
const BetweenBigIntSchemaId = exports.BetweenBigIntSchemaId = schemaId_.BetweenBigintSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
const betweenBigInt = (min, max, annotations) => self => self.pipe(filter(a => a >= min && a <= max, {
  schemaId: BetweenBigIntSchemaId,
  [BetweenBigIntSchemaId]: {
    min,
    max
  },
  title: `betweenBigInt(${min}, ${max})`,
  description: `a bigint between ${min}n and ${max}n`,
  ...annotations
}));
/**
 * @category bigint filters
 * @since 3.10.0
 */
exports.betweenBigInt = betweenBigInt;
const positiveBigInt = annotations => greaterThanBigInt(0n, {
  title: "positiveBigInt",
  ...annotations
});
/**
 * @category bigint filters
 * @since 3.10.0
 */
exports.positiveBigInt = positiveBigInt;
const negativeBigInt = annotations => lessThanBigInt(0n, {
  title: "negativeBigInt",
  ...annotations
});
/**
 * @category bigint filters
 * @since 3.10.0
 */
exports.negativeBigInt = negativeBigInt;
const nonNegativeBigInt = annotations => greaterThanOrEqualToBigInt(0n, {
  title: "nonNegativeBigInt",
  ...annotations
});
/**
 * @category bigint filters
 * @since 3.10.0
 */
exports.nonNegativeBigInt = nonNegativeBigInt;
const nonPositiveBigInt = annotations => lessThanOrEqualToBigInt(0n, {
  title: "nonPositiveBigInt",
  ...annotations
});
/**
 * Clamps a bigint between a minimum and a maximum value.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
exports.nonPositiveBigInt = nonPositiveBigInt;
const clampBigInt = (minimum, maximum) => self => transform(self, self.pipe(typeSchema, betweenBigInt(minimum, maximum)), {
  strict: false,
  decode: i => bigInt_.clamp(i, {
    minimum,
    maximum
  }),
  encode: _Function.identity
});
/** @ignore */
exports.clampBigInt = clampBigInt;
class BigInt$ extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a bigint"
}), BigIntFromSelf, {
  strict: true,
  decode: (i, _, ast) => ParseResult.fromOption(bigInt_.fromString(i), () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a bigint`)),
  encode: a => ParseResult.succeed(String(a))
}).annotations({
  identifier: "BigInt"
}) {}
exports.BigInt = BigInt$;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const PositiveBigIntFromSelf = exports.PositiveBigIntFromSelf = /*#__PURE__*/BigIntFromSelf.pipe(/*#__PURE__*/positiveBigInt({
  identifier: "PositiveBigintFromSelf"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const PositiveBigInt = exports.PositiveBigInt = /*#__PURE__*/BigInt$.pipe(/*#__PURE__*/positiveBigInt({
  identifier: "PositiveBigint"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NegativeBigIntFromSelf = exports.NegativeBigIntFromSelf = /*#__PURE__*/BigIntFromSelf.pipe(/*#__PURE__*/negativeBigInt({
  identifier: "NegativeBigintFromSelf"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NegativeBigInt = exports.NegativeBigInt = /*#__PURE__*/BigInt$.pipe(/*#__PURE__*/negativeBigInt({
  identifier: "NegativeBigint"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NonPositiveBigIntFromSelf = exports.NonPositiveBigIntFromSelf = /*#__PURE__*/BigIntFromSelf.pipe(/*#__PURE__*/nonPositiveBigInt({
  identifier: "NonPositiveBigintFromSelf"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NonPositiveBigInt = exports.NonPositiveBigInt = /*#__PURE__*/BigInt$.pipe(/*#__PURE__*/nonPositiveBigInt({
  identifier: "NonPositiveBigint"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NonNegativeBigIntFromSelf = exports.NonNegativeBigIntFromSelf = /*#__PURE__*/BigIntFromSelf.pipe(/*#__PURE__*/nonNegativeBigInt({
  identifier: "NonNegativeBigintFromSelf"
}));
/**
 * @category bigint constructors
 * @since 3.10.0
 */
const NonNegativeBigInt = exports.NonNegativeBigInt = /*#__PURE__*/BigInt$.pipe(/*#__PURE__*/nonNegativeBigInt({
  identifier: "NonNegativeBigint"
}));
/**
 * This schema transforms a `number` into a `bigint` by parsing the number using the `BigInt` function.
 *
 * It returns an error if the value can't be safely encoded as a `number` due to being out of range.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
class BigIntFromNumber extends /*#__PURE__*/transformOrFail(Number$.annotations({
  description: "a number to be decoded into a bigint"
}), BigIntFromSelf.pipe(betweenBigInt(BigInt(Number.MIN_SAFE_INTEGER), BigInt(Number.MAX_SAFE_INTEGER))), {
  strict: true,
  decode: (i, _, ast) => ParseResult.fromOption(bigInt_.fromNumber(i), () => new ParseResult.Type(ast, i, `Unable to decode ${i} into a bigint`)),
  encode: (a, _, ast) => ParseResult.fromOption(bigInt_.toNumber(a), () => new ParseResult.Type(ast, a, `Unable to encode ${a}n into a number`))
}).annotations({
  identifier: "BigIntFromNumber"
}) {}
exports.BigIntFromNumber = BigIntFromNumber;
const redactedArbitrary = value => fc => value(fc).map(redacted_.make);
const toComposite = (eff, onSuccess, ast, actual) => ParseResult.mapBoth(eff, {
  onFailure: e => new ParseResult.Composite(ast, actual, e),
  onSuccess
});
const redactedParse = decodeUnknown => (u, options, ast) => redacted_.isRedacted(u) ? toComposite(decodeUnknown(redacted_.value(u), options), redacted_.make, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Redacted constructors
 * @since 3.10.0
 */
const RedactedFromSelf = value => declare([value], {
  decode: value => redactedParse(ParseResult.decodeUnknown(value)),
  encode: value => redactedParse(ParseResult.encodeUnknown(value))
}, {
  typeConstructor: {
    _tag: "effect/Redacted"
  },
  description: "Redacted(<redacted>)",
  pretty: () => () => "Redacted(<redacted>)",
  arbitrary: redactedArbitrary,
  equivalence: redacted_.getEquivalence
});
/**
 * A transformation that transform a `Schema<A, I, R>` into a
 * `RedactedFromSelf<A>`.
 *
 * @category Redacted transformations
 * @since 3.10.0
 */
exports.RedactedFromSelf = RedactedFromSelf;
function Redacted(value) {
  return transform(value, RedactedFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => redacted_.make(i),
    encode: a => redacted_.value(a)
  });
}
/**
 * @category Duration constructors
 * @since 3.10.0
 */
class DurationFromSelf extends /*#__PURE__*/declare(duration_.isDuration, {
  typeConstructor: {
    _tag: "effect/Duration"
  },
  identifier: "DurationFromSelf",
  pretty: () => String,
  arbitrary: () => fc => fc.oneof(fc.constant(duration_.infinity), fc.bigInt({
    min: 0n
  }).map(_ => duration_.nanos(_)), fc.maxSafeNat().map(_ => duration_.millis(_))),
  equivalence: () => duration_.Equivalence
}) {}
/**
 * A schema that transforms a non negative `bigint` into a `Duration`. Treats
 * the value as the number of nanoseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
exports.DurationFromSelf = DurationFromSelf;
class DurationFromNanos extends /*#__PURE__*/transformOrFail(NonNegativeBigIntFromSelf.annotations({
  description: "a bigint to be decoded into a Duration"
}), DurationFromSelf.pipe(filter(duration => duration_.isFinite(duration), {
  description: "a finite duration"
})), {
  strict: true,
  decode: i => ParseResult.succeed(duration_.nanos(i)),
  encode: (a, _, ast) => option_.match(duration_.toNanos(a), {
    onNone: () => ParseResult.fail(new ParseResult.Type(ast, a, `Unable to encode ${a} into a bigint`)),
    onSome: nanos => ParseResult.succeed(nanos)
  })
}).annotations({
  identifier: "DurationFromNanos"
}) {}
/**
 * A non-negative integer. +Infinity is excluded.
 *
 * @category number constructors
 * @since 3.11.10
 */
exports.DurationFromNanos = DurationFromNanos;
const NonNegativeInt = exports.NonNegativeInt = /*#__PURE__*/NonNegative.pipe(int()).annotations({
  identifier: "NonNegativeInt"
});
/**
 * A schema that transforms a (possibly Infinite) non negative number into a
 * `Duration`. Treats the value as the number of milliseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
class DurationFromMillis extends /*#__PURE__*/transform(NonNegative.annotations({
  description: "a non-negative number to be decoded into a Duration"
}), DurationFromSelf, {
  strict: true,
  decode: i => duration_.millis(i),
  encode: a => duration_.toMillis(a)
}).annotations({
  identifier: "DurationFromMillis"
}) {}
exports.DurationFromMillis = DurationFromMillis;
const DurationValueMillis = /*#__PURE__*/TaggedStruct("Millis", {
  millis: NonNegativeInt
});
const DurationValueNanos = /*#__PURE__*/TaggedStruct("Nanos", {
  nanos: BigInt$
});
const DurationValueInfinity = /*#__PURE__*/TaggedStruct("Infinity", {});
const durationValueInfinity = /*#__PURE__*/DurationValueInfinity.make({});
const DurationValue = /*#__PURE__*/Union(DurationValueMillis, DurationValueNanos, DurationValueInfinity).annotations({
  identifier: "DurationValue",
  description: "an JSON-compatible tagged union to be decoded into a Duration"
});
const FiniteHRTime = /*#__PURE__*/Tuple(element(NonNegativeInt).annotations({
  title: "seconds"
}), element(NonNegativeInt).annotations({
  title: "nanos"
})).annotations({
  identifier: "FiniteHRTime"
});
const InfiniteHRTime = /*#__PURE__*/Tuple(Literal(-1), Literal(0)).annotations({
  identifier: "InfiniteHRTime"
});
const HRTime = /*#__PURE__*/Union(FiniteHRTime, InfiniteHRTime).annotations({
  identifier: "HRTime",
  description: "a tuple of seconds and nanos to be decoded into a Duration"
});
const isDurationValue = u => typeof u === "object";
// TODO(4.0): remove HRTime union member
/**
 * A schema that converts a JSON-compatible tagged union into a `Duration`.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
class Duration extends /*#__PURE__*/transform(Union(DurationValue, HRTime), DurationFromSelf, {
  strict: true,
  decode: i => {
    if (isDurationValue(i)) {
      switch (i._tag) {
        case "Millis":
          return duration_.millis(i.millis);
        case "Nanos":
          return duration_.nanos(i.nanos);
        case "Infinity":
          return duration_.infinity;
      }
    }
    const [seconds, nanos] = i;
    return seconds === -1 ? duration_.infinity : duration_.nanos(BigInt(seconds) * BigInt(1e9) + BigInt(nanos));
  },
  encode: a => {
    switch (a.value._tag) {
      case "Millis":
        return DurationValueMillis.make({
          millis: a.value.millis
        });
      case "Nanos":
        return DurationValueNanos.make({
          nanos: a.value.nanos
        });
      case "Infinity":
        return durationValueInfinity;
    }
  }
}).annotations({
  identifier: "Duration"
}) {}
/**
 * Clamps a `Duration` between a minimum and a maximum value.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
exports.Duration = Duration;
const clampDuration = (minimum, maximum) => self => transform(self, self.pipe(typeSchema, betweenDuration(minimum, maximum)), {
  strict: false,
  decode: i => duration_.clamp(i, {
    minimum,
    maximum
  }),
  encode: _Function.identity
});
/**
 * @category schema id
 * @since 3.10.0
 */
exports.clampDuration = clampDuration;
const LessThanDurationSchemaId = exports.LessThanDurationSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/LessThanDuration");
/**
 * @category Duration filters
 * @since 3.10.0
 */
const lessThanDuration = (max, annotations) => self => self.pipe(filter(a => duration_.lessThan(a, max), {
  schemaId: LessThanDurationSchemaId,
  [LessThanDurationSchemaId]: {
    max
  },
  title: `lessThanDuration(${max})`,
  description: `a Duration less than ${duration_.decode(max)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanDuration = lessThanDuration;
const LessThanOrEqualToDurationSchemaId = exports.LessThanOrEqualToDurationSchemaId = /*#__PURE__*/Symbol.for("effect/schema/LessThanOrEqualToDuration");
/**
 * @category Duration filters
 * @since 3.10.0
 */
const lessThanOrEqualToDuration = (max, annotations) => self => self.pipe(filter(a => duration_.lessThanOrEqualTo(a, max), {
  schemaId: LessThanDurationSchemaId,
  [LessThanDurationSchemaId]: {
    max
  },
  title: `lessThanOrEqualToDuration(${max})`,
  description: `a Duration less than or equal to ${duration_.decode(max)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanOrEqualToDuration = lessThanOrEqualToDuration;
const GreaterThanDurationSchemaId = exports.GreaterThanDurationSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/GreaterThanDuration");
/**
 * @category Duration filters
 * @since 3.10.0
 */
const greaterThanDuration = (min, annotations) => self => self.pipe(filter(a => duration_.greaterThan(a, min), {
  schemaId: GreaterThanDurationSchemaId,
  [GreaterThanDurationSchemaId]: {
    min
  },
  title: `greaterThanDuration(${min})`,
  description: `a Duration greater than ${duration_.decode(min)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanDuration = greaterThanDuration;
const GreaterThanOrEqualToDurationSchemaId = exports.GreaterThanOrEqualToDurationSchemaId = /*#__PURE__*/Symbol.for("effect/schema/GreaterThanOrEqualToDuration");
/**
 * @category Duration filters
 * @since 3.10.0
 */
const greaterThanOrEqualToDuration = (min, annotations) => self => self.pipe(filter(a => duration_.greaterThanOrEqualTo(a, min), {
  schemaId: GreaterThanOrEqualToDurationSchemaId,
  [GreaterThanOrEqualToDurationSchemaId]: {
    min
  },
  title: `greaterThanOrEqualToDuration(${min})`,
  description: `a Duration greater than or equal to ${duration_.decode(min)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanOrEqualToDuration = greaterThanOrEqualToDuration;
const BetweenDurationSchemaId = exports.BetweenDurationSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/BetweenDuration");
/**
 * @category Duration filters
 * @since 3.10.0
 */
const betweenDuration = (minimum, maximum, annotations) => self => self.pipe(filter(a => duration_.between(a, {
  minimum,
  maximum
}), {
  schemaId: BetweenDurationSchemaId,
  [BetweenDurationSchemaId]: {
    maximum,
    minimum
  },
  title: `betweenDuration(${minimum}, ${maximum})`,
  description: `a Duration between ${duration_.decode(minimum)} and ${duration_.decode(maximum)}`,
  ...annotations
}));
/**
 * @category Uint8Array constructors
 * @since 3.10.0
 */
exports.betweenDuration = betweenDuration;
class Uint8ArrayFromSelf extends /*#__PURE__*/declare(Predicate.isUint8Array, {
  typeConstructor: {
    _tag: "Uint8Array"
  },
  identifier: "Uint8ArrayFromSelf",
  pretty: () => u8arr => `new Uint8Array(${JSON.stringify(Array.from(u8arr))})`,
  arbitrary: () => fc => fc.uint8Array(),
  equivalence: () => array_.getEquivalence(Equal.equals)
}) {}
/**
 * @category number constructors
 * @since 3.11.10
 */
exports.Uint8ArrayFromSelf = Uint8ArrayFromSelf;
class Uint8 extends /*#__PURE__*/Number$.pipe(/*#__PURE__*/between(0, 255, {
  identifier: "Uint8",
  description: "a 8-bit unsigned integer"
})) {}
/** @ignore */
exports.Uint8 = Uint8;
class Uint8Array$ extends /*#__PURE__*/transform(Array$(Uint8).annotations({
  description: "an array of 8-bit unsigned integers to be decoded into a Uint8Array"
}), Uint8ArrayFromSelf, {
  strict: true,
  decode: i => Uint8Array.from(i),
  encode: a => Array.from(a)
}).annotations({
  identifier: "Uint8Array"
}) {}
exports.Uint8Array = Uint8Array$;
const makeUint8ArrayTransformation = (id, decode, encode) => transformOrFail(String$.annotations({
  description: "a string to be decoded into a Uint8Array"
}), Uint8ArrayFromSelf, {
  strict: true,
  decode: (i, _, ast) => either_.mapLeft(decode(i), decodeException => new ParseResult.Type(ast, i, decodeException.message)),
  encode: a => ParseResult.succeed(encode(a))
}).annotations({
  identifier: id
});
/**
 * Decodes a base64 (RFC4648) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
const Uint8ArrayFromBase64 = exports.Uint8ArrayFromBase64 = /*#__PURE__*/makeUint8ArrayTransformation("Uint8ArrayFromBase64", Encoding.decodeBase64, Encoding.encodeBase64);
/**
 * Decodes a base64 (URL) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
const Uint8ArrayFromBase64Url = exports.Uint8ArrayFromBase64Url = /*#__PURE__*/makeUint8ArrayTransformation("Uint8ArrayFromBase64Url", Encoding.decodeBase64Url, Encoding.encodeBase64Url);
/**
 * Decodes a hex encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
const Uint8ArrayFromHex = exports.Uint8ArrayFromHex = /*#__PURE__*/makeUint8ArrayTransformation("Uint8ArrayFromHex", Encoding.decodeHex, Encoding.encodeHex);
const makeEncodingTransformation = (id, decode, encode) => transformOrFail(String$.annotations({
  description: `A string that is interpreted as being ${id}-encoded and will be decoded into a UTF-8 string`
}), String$, {
  strict: true,
  decode: (i, _, ast) => either_.mapLeft(decode(i), decodeException => new ParseResult.Type(ast, i, decodeException.message)),
  encode: a => ParseResult.succeed(encode(a))
}).annotations({
  identifier: `StringFrom${id}`
});
/**
 * Decodes a base64 (RFC4648) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
const StringFromBase64 = exports.StringFromBase64 = /*#__PURE__*/makeEncodingTransformation("Base64", Encoding.decodeBase64String, Encoding.encodeBase64);
/**
 * Decodes a base64 (URL) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
const StringFromBase64Url = exports.StringFromBase64Url = /*#__PURE__*/makeEncodingTransformation("Base64Url", Encoding.decodeBase64UrlString, Encoding.encodeBase64Url);
/**
 * Decodes a hex encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
const StringFromHex = exports.StringFromHex = /*#__PURE__*/makeEncodingTransformation("Hex", Encoding.decodeHexString, Encoding.encodeHex);
/**
 * Decodes a URI component encoded string into a UTF-8 string.
 * Can be used to store data in a URL.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const PaginationSchema = Schema.Struct({
 *   maxItemPerPage: Schema.Number,
 *   page: Schema.Number
 * })
 *
 * const UrlSchema = Schema.compose(Schema.StringFromUriComponent, Schema.parseJson(PaginationSchema))
 *
 * console.log(Schema.encodeSync(UrlSchema)({ maxItemPerPage: 10, page: 1 }))
 * // Output: %7B%22maxItemPerPage%22%3A10%2C%22page%22%3A1%7D
 * ```
 *
 * @category string transformations
 * @since 3.12.0
 */
const StringFromUriComponent = exports.StringFromUriComponent = /*#__PURE__*/transformOrFail(String$.annotations({
  description: `A string that is interpreted as being UriComponent-encoded and will be decoded into a UTF-8 string`
}), String$, {
  strict: true,
  decode: (i, _, ast) => either_.mapLeft(Encoding.decodeUriComponent(i), decodeException => new ParseResult.Type(ast, i, decodeException.message)),
  encode: (a, _, ast) => either_.mapLeft(Encoding.encodeUriComponent(a), encodeException => new ParseResult.Type(ast, a, encodeException.message))
}).annotations({
  identifier: `StringFromUriComponent`
});
/**
 * @category schema id
 * @since 3.10.0
 */
const MinItemsSchemaId = exports.MinItemsSchemaId = schemaId_.MinItemsSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
const minItems = (n, annotations) => self => {
  const minItems = Math.floor(n);
  if (minItems < 1) {
    throw new Error(errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 1, actual ${n}`));
  }
  return self.pipe(filter(a => a.length >= minItems, {
    schemaId: MinItemsSchemaId,
    title: `minItems(${minItems})`,
    description: `an array of at least ${minItems} item(s)`,
    jsonSchema: {
      minItems
    },
    [AST.StableFilterAnnotationId]: true,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.minItems = minItems;
const MaxItemsSchemaId = exports.MaxItemsSchemaId = schemaId_.MaxItemsSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
const maxItems = (n, annotations) => self => {
  const maxItems = Math.floor(n);
  if (maxItems < 1) {
    throw new Error(errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 1, actual ${n}`));
  }
  return self.pipe(filter(a => a.length <= maxItems, {
    schemaId: MaxItemsSchemaId,
    title: `maxItems(${maxItems})`,
    description: `an array of at most ${maxItems} item(s)`,
    jsonSchema: {
      maxItems
    },
    [AST.StableFilterAnnotationId]: true,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.maxItems = maxItems;
const ItemsCountSchemaId = exports.ItemsCountSchemaId = schemaId_.ItemsCountSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
const itemsCount = (n, annotations) => self => {
  const itemsCount = Math.floor(n);
  if (itemsCount < 0) {
    throw new Error(errors_.getInvalidArgumentErrorMessage(`Expected an integer greater than or equal to 0, actual ${n}`));
  }
  return self.pipe(filter(a => a.length === itemsCount, {
    schemaId: ItemsCountSchemaId,
    title: `itemsCount(${itemsCount})`,
    description: `an array of exactly ${itemsCount} item(s)`,
    jsonSchema: {
      minItems: itemsCount,
      maxItems: itemsCount
    },
    [AST.StableFilterAnnotationId]: true,
    ...annotations
  }));
};
/**
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
exports.itemsCount = itemsCount;
const getNumberIndexedAccess = self => make(AST.getNumberIndexedAccess(self.ast));
/**
 * Get the first element of a `ReadonlyArray`, or `None` if the array is empty.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
exports.getNumberIndexedAccess = getNumberIndexedAccess;
function head(self) {
  return transform(self, OptionFromSelf(getNumberIndexedAccess(typeSchema(self))), {
    strict: false,
    decode: i => array_.head(i),
    encode: a => option_.match(a, {
      onNone: () => [],
      onSome: array_.of
    })
  });
}
/**
 * Get the first element of a `NonEmptyReadonlyArray`.
 *
 * @category NonEmptyReadonlyArray transformations
 * @since 3.12.0
 */
function headNonEmpty(self) {
  return transform(self, getNumberIndexedAccess(typeSchema(self)), {
    strict: false,
    decode: i => array_.headNonEmpty(i),
    encode: a => array_.of(a)
  });
}
/**
 * Retrieves the first element of a `ReadonlyArray`.
 *
 * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
const headOrElse = exports.headOrElse = /*#__PURE__*/(0, _Function.dual)(args => isSchema(args[0]), (self, fallback) => transformOrFail(self, getNumberIndexedAccess(typeSchema(self)), {
  strict: true,
  decode: (i, _, ast) => i.length > 0 ? ParseResult.succeed(i[0]) : fallback ? ParseResult.succeed(fallback()) : ParseResult.fail(new ParseResult.Type(ast, i, "Unable to retrieve the first element of an empty array")),
  encode: a => ParseResult.succeed(array_.of(a))
}));
/**
 * @category schema id
 * @since 3.10.0
 */
const ValidDateSchemaId = exports.ValidDateSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/ValidDate");
/**
 * Defines a filter that specifically rejects invalid dates, such as `new
 * Date("Invalid Date")`. This filter ensures that only properly formatted and
 * valid date objects are accepted, enhancing data integrity by preventing
 * erroneous date values from being processed.
 *
 * @category Date filters
 * @since 3.10.0
 */
const validDate = annotations => self => self.pipe(filter(a => !Number.isNaN(a.getTime()), {
  schemaId: ValidDateSchemaId,
  [ValidDateSchemaId]: {
    noInvalidDate: true
  },
  title: "validDate",
  description: "a valid Date",
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.validDate = validDate;
const LessThanDateSchemaId = exports.LessThanDateSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/LessThanDate");
/**
 * @category Date filters
 * @since 3.10.0
 */
const lessThanDate = (max, annotations) => self => self.pipe(filter(a => a < max, {
  schemaId: LessThanDateSchemaId,
  [LessThanDateSchemaId]: {
    max
  },
  title: `lessThanDate(${Inspectable.formatDate(max)})`,
  description: `a date before ${Inspectable.formatDate(max)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanDate = lessThanDate;
const LessThanOrEqualToDateSchemaId = exports.LessThanOrEqualToDateSchemaId = /*#__PURE__*/Symbol.for("effect/schema/LessThanOrEqualToDate");
/**
 * @category Date filters
 * @since 3.10.0
 */
const lessThanOrEqualToDate = (max, annotations) => self => self.pipe(filter(a => a <= max, {
  schemaId: LessThanOrEqualToDateSchemaId,
  [LessThanOrEqualToDateSchemaId]: {
    max
  },
  title: `lessThanOrEqualToDate(${Inspectable.formatDate(max)})`,
  description: `a date before or equal to ${Inspectable.formatDate(max)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanOrEqualToDate = lessThanOrEqualToDate;
const GreaterThanDateSchemaId = exports.GreaterThanDateSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/GreaterThanDate");
/**
 * @category Date filters
 * @since 3.10.0
 */
const greaterThanDate = (min, annotations) => self => self.pipe(filter(a => a > min, {
  schemaId: GreaterThanDateSchemaId,
  [GreaterThanDateSchemaId]: {
    min
  },
  title: `greaterThanDate(${Inspectable.formatDate(min)})`,
  description: `a date after ${Inspectable.formatDate(min)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanDate = greaterThanDate;
const GreaterThanOrEqualToDateSchemaId = exports.GreaterThanOrEqualToDateSchemaId = /*#__PURE__*/Symbol.for("effect/schema/GreaterThanOrEqualToDate");
/**
 * @category Date filters
 * @since 3.10.0
 */
const greaterThanOrEqualToDate = (min, annotations) => self => self.pipe(filter(a => a >= min, {
  schemaId: GreaterThanOrEqualToDateSchemaId,
  [GreaterThanOrEqualToDateSchemaId]: {
    min
  },
  title: `greaterThanOrEqualToDate(${Inspectable.formatDate(min)})`,
  description: `a date after or equal to ${Inspectable.formatDate(min)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanOrEqualToDate = greaterThanOrEqualToDate;
const BetweenDateSchemaId = exports.BetweenDateSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/BetweenDate");
/**
 * @category Date filters
 * @since 3.10.0
 */
const betweenDate = (min, max, annotations) => self => self.pipe(filter(a => a <= max && a >= min, {
  schemaId: BetweenDateSchemaId,
  [BetweenDateSchemaId]: {
    max,
    min
  },
  title: `betweenDate(${Inspectable.formatDate(min)}, ${Inspectable.formatDate(max)})`,
  description: `a date between ${Inspectable.formatDate(min)} and ${Inspectable.formatDate(max)}`,
  ...annotations
}));
/**
 * @category schema id
 * @since 3.11.8
 */
exports.betweenDate = betweenDate;
const DateFromSelfSchemaId = exports.DateFromSelfSchemaId = schemaId_.DateFromSelfSchemaId;
/**
 * Describes a schema that accommodates potentially invalid `Date` instances,
 * such as `new Date("Invalid Date")`, without rejection.
 *
 * @category Date constructors
 * @since 3.10.0
 */
class DateFromSelf extends /*#__PURE__*/declare(Predicate.isDate, {
  typeConstructor: {
    _tag: "Date"
  },
  identifier: "DateFromSelf",
  schemaId: DateFromSelfSchemaId,
  [DateFromSelfSchemaId]: {
    noInvalidDate: false
  },
  description: "a potentially invalid Date instance",
  pretty: () => date => `new Date(${JSON.stringify(date)})`,
  arbitrary: () => fc => fc.date({
    noInvalidDate: false
  }),
  equivalence: () => Equivalence.Date
}) {}
/**
 * Defines a schema that ensures only valid dates are accepted. This schema
 * rejects values like `new Date("Invalid Date")`, which, despite being a `Date`
 * instance, represents an invalid date. Such stringent validation ensures that
 * all date objects processed through this schema are properly formed and
 * represent real dates.
 *
 * @category Date constructors
 * @since 3.10.0
 */
exports.DateFromSelf = DateFromSelf;
class ValidDateFromSelf extends /*#__PURE__*/DateFromSelf.pipe(/*#__PURE__*/validDate({
  identifier: "ValidDateFromSelf",
  description: "a valid Date instance"
})) {}
/**
 * Defines a schema that attempts to convert a `string` to a `Date` object using
 * the `new Date` constructor. This conversion is lenient, meaning it does not
 * reject strings that do not form valid dates (e.g., using `new Date("Invalid
 * Date")` results in a `Date` object, despite being invalid).
 *
 * @category Date transformations
 * @since 3.10.0
 */
exports.ValidDateFromSelf = ValidDateFromSelf;
class DateFromString extends /*#__PURE__*/transform(String$.annotations({
  description: "a string to be decoded into a Date"
}), DateFromSelf, {
  strict: true,
  decode: i => new Date(i),
  encode: a => Inspectable.formatDate(a)
}).annotations({
  identifier: "DateFromString"
}) {}
/** @ignore */
exports.DateFromString = DateFromString;
class Date$ extends /*#__PURE__*/DateFromString.pipe(/*#__PURE__*/validDate({
  identifier: "Date"
})) {}
exports.Date = Date$;
/**
 * Defines a schema that converts a `number` into a `Date` object using the `new
 * Date` constructor. This schema does not validate the numerical input,
 * allowing potentially invalid values such as `NaN`, `Infinity`, and
 * `-Infinity` to be converted into `Date` objects. During the encoding process,
 * any invalid `Date` object will be encoded to `NaN`.
 *
 * @category Date transformations
 * @since 3.10.0
 */
class DateFromNumber extends /*#__PURE__*/transform(Number$.annotations({
  description: "a number to be decoded into a Date"
}), DateFromSelf, {
  strict: true,
  decode: i => new Date(i),
  encode: a => a.getTime()
}).annotations({
  identifier: "DateFromNumber"
}) {}
/**
 * Describes a schema that represents a `DateTime.Utc` instance.
 *
 * @category DateTime.Utc constructors
 * @since 3.10.0
 */
exports.DateFromNumber = DateFromNumber;
class DateTimeUtcFromSelf extends /*#__PURE__*/declare(u => dateTime.isDateTime(u) && dateTime.isUtc(u), {
  typeConstructor: {
    _tag: "effect/DateTime.Utc"
  },
  identifier: "DateTimeUtcFromSelf",
  description: "a DateTime.Utc instance",
  pretty: () => dateTime => dateTime.toString(),
  arbitrary: () => fc => fc.date({
    noInvalidDate: true
  }).map(date => dateTime.unsafeFromDate(date)),
  equivalence: () => dateTime.Equivalence
}) {}
exports.DateTimeUtcFromSelf = DateTimeUtcFromSelf;
const decodeDateTimeUtc = (input, ast) => ParseResult.try({
  try: () => dateTime.unsafeMake(input),
  catch: () => new ParseResult.Type(ast, input, `Unable to decode ${Inspectable.formatUnknown(input)} into a DateTime.Utc`)
});
/**
 * Defines a schema that attempts to convert a `number` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
class DateTimeUtcFromNumber extends /*#__PURE__*/transformOrFail(Number$.annotations({
  description: "a number to be decoded into a DateTime.Utc"
}), DateTimeUtcFromSelf, {
  strict: true,
  decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
  encode: a => ParseResult.succeed(dateTime.toEpochMillis(a))
}).annotations({
  identifier: "DateTimeUtcFromNumber"
}) {}
/**
 * Defines a schema that attempts to convert a `Date` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.12.0
 */
exports.DateTimeUtcFromNumber = DateTimeUtcFromNumber;
class DateTimeUtcFromDate extends /*#__PURE__*/transformOrFail(DateFromSelf.annotations({
  description: "a Date to be decoded into a DateTime.Utc"
}), DateTimeUtcFromSelf, {
  strict: true,
  decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
  encode: a => ParseResult.succeed(dateTime.toDateUtc(a))
}).annotations({
  identifier: "DateTimeUtcFromDate"
}) {}
/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
exports.DateTimeUtcFromDate = DateTimeUtcFromDate;
class DateTimeUtc extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a DateTime.Utc"
}), DateTimeUtcFromSelf, {
  strict: true,
  decode: (i, _, ast) => decodeDateTimeUtc(i, ast),
  encode: a => ParseResult.succeed(dateTime.formatIso(a))
}).annotations({
  identifier: "DateTimeUtc"
}) {}
exports.DateTimeUtc = DateTimeUtc;
const timeZoneOffsetArbitrary = () => fc => fc.integer({
  min: -12 * 60 * 60 * 1000,
  max: 14 * 60 * 60 * 1000
}).map(dateTime.zoneMakeOffset);
/**
 * Describes a schema that represents a `TimeZone.Offset` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
class TimeZoneOffsetFromSelf extends /*#__PURE__*/declare(dateTime.isTimeZoneOffset, {
  typeConstructor: {
    _tag: "effect/DateTime.TimeZone.Offset"
  },
  identifier: "TimeZoneOffsetFromSelf",
  description: "a TimeZone.Offset instance",
  pretty: () => zone => zone.toString(),
  arbitrary: timeZoneOffsetArbitrary
}) {}
/**
 * Defines a schema that converts a `number` to a `TimeZone.Offset` instance using the `DateTime.zoneMakeOffset` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
exports.TimeZoneOffsetFromSelf = TimeZoneOffsetFromSelf;
class TimeZoneOffset extends /*#__PURE__*/transform(Number$.annotations({
  description: "a number to be decoded into a TimeZone.Offset"
}), TimeZoneOffsetFromSelf, {
  strict: true,
  decode: i => dateTime.zoneMakeOffset(i),
  encode: a => a.offset
}).annotations({
  identifier: "TimeZoneOffset"
}) {}
exports.TimeZoneOffset = TimeZoneOffset;
const timeZoneNamedArbitrary = () => fc => fc.constantFrom(...Intl.supportedValuesOf("timeZone")).map(dateTime.zoneUnsafeMakeNamed);
/**
 * Describes a schema that represents a `TimeZone.Named` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
class TimeZoneNamedFromSelf extends /*#__PURE__*/declare(dateTime.isTimeZoneNamed, {
  typeConstructor: {
    _tag: "effect/DateTime.TimeZone.Named"
  },
  identifier: "TimeZoneNamedFromSelf",
  description: "a TimeZone.Named instance",
  pretty: () => zone => zone.toString(),
  arbitrary: timeZoneNamedArbitrary
}) {}
/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone.Named` instance using the `DateTime.zoneUnsafeMakeNamed` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
exports.TimeZoneNamedFromSelf = TimeZoneNamedFromSelf;
class TimeZoneNamed extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a TimeZone.Named"
}), TimeZoneNamedFromSelf, {
  strict: true,
  decode: (i, _, ast) => ParseResult.try({
    try: () => dateTime.zoneUnsafeMakeNamed(i),
    catch: () => new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a TimeZone.Named`)
  }),
  encode: a => ParseResult.succeed(a.id)
}).annotations({
  identifier: "TimeZoneNamed"
}) {}
/**
 * @category TimeZone constructors
 * @since 3.10.0
 */
exports.TimeZoneNamed = TimeZoneNamed;
class TimeZoneFromSelf extends /*#__PURE__*/Union(TimeZoneOffsetFromSelf, TimeZoneNamedFromSelf) {}
/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone` using the `DateTime.zoneFromString` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
exports.TimeZoneFromSelf = TimeZoneFromSelf;
class TimeZone extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a TimeZone"
}), TimeZoneFromSelf, {
  strict: true,
  decode: (i, _, ast) => option_.match(dateTime.zoneFromString(i), {
    onNone: () => ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a TimeZone`)),
    onSome: ParseResult.succeed
  }),
  encode: a => ParseResult.succeed(dateTime.zoneToString(a))
}).annotations({
  identifier: "TimeZone"
}) {}
exports.TimeZone = TimeZone;
const timeZoneArbitrary = fc => fc.oneof(timeZoneOffsetArbitrary()(fc), timeZoneNamedArbitrary()(fc));
/**
 * Describes a schema that represents a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned constructors
 * @since 3.10.0
 */
class DateTimeZonedFromSelf extends /*#__PURE__*/declare(u => dateTime.isDateTime(u) && dateTime.isZoned(u), {
  typeConstructor: {
    _tag: "effect/DateTime.Zoned"
  },
  identifier: "DateTimeZonedFromSelf",
  description: "a DateTime.Zoned instance",
  pretty: () => dateTime => dateTime.toString(),
  arbitrary: () => fc => fc.tuple(fc.integer({
    // time zone db supports +/- 1000 years or so
    min: -31536000000000,
    max: 31536000000000
  }), timeZoneArbitrary(fc)).map(([millis, timeZone]) => dateTime.unsafeMakeZoned(millis, {
    timeZone
  })),
  equivalence: () => dateTime.Equivalence
}) {}
/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned transformations
 * @since 3.10.0
 */
exports.DateTimeZonedFromSelf = DateTimeZonedFromSelf;
class DateTimeZoned extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a DateTime.Zoned"
}), DateTimeZonedFromSelf, {
  strict: true,
  decode: (i, _, ast) => option_.match(dateTime.makeZonedFromString(i), {
    onNone: () => ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a DateTime.Zoned`)),
    onSome: ParseResult.succeed
  }),
  encode: a => ParseResult.succeed(dateTime.formatIsoZoned(a))
}).annotations({
  identifier: "DateTimeZoned"
}) {}
exports.DateTimeZoned = DateTimeZoned;
const OptionNoneEncoded = /*#__PURE__*/Struct({
  _tag: Literal("None")
}).annotations({
  description: "NoneEncoded"
});
const optionSomeEncoded = value => Struct({
  _tag: Literal("Some"),
  value
}).annotations({
  description: `SomeEncoded<${format(value)}>`
});
const optionEncoded = value => Union(OptionNoneEncoded, optionSomeEncoded(value)).annotations({
  description: `OptionEncoded<${format(value)}>`
});
const optionDecode = input => input._tag === "None" ? option_.none() : option_.some(input.value);
const optionArbitrary = (value, ctx) => fc => fc.oneof(ctx, fc.record({
  _tag: fc.constant("None")
}), fc.record({
  _tag: fc.constant("Some"),
  value: value(fc)
})).map(optionDecode);
const optionPretty = value => option_.match({
  onNone: () => "none()",
  onSome: a => `some(${value(a)})`
});
const optionParse = decodeUnknown => (u, options, ast) => option_.isOption(u) ? option_.isNone(u) ? ParseResult.succeed(option_.none()) : toComposite(decodeUnknown(u.value, options), option_.some, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
const OptionFromSelf_ = value => {
  return declare([value], {
    decode: value => optionParse(ParseResult.decodeUnknown(value)),
    encode: value => optionParse(ParseResult.encodeUnknown(value))
  }, {
    typeConstructor: {
      _tag: "effect/Option"
    },
    pretty: optionPretty,
    arbitrary: optionArbitrary,
    equivalence: option_.getEquivalence
  });
};
/**
 * @category Option transformations
 * @since 3.10.0
 */
const OptionFromSelf = value => {
  return OptionFromSelf_(value).annotations({
    description: `Option<${format(value)}>`
  });
};
exports.OptionFromSelf = OptionFromSelf;
const makeNoneEncoded = {
  _tag: "None"
};
const makeSomeEncoded = value => ({
  _tag: "Some",
  value
});
/**
 * @category Option transformations
 * @since 3.10.0
 */
function Option(value) {
  const value_ = asSchema(value);
  const out = transform(optionEncoded(value_), OptionFromSelf(typeSchema(value_)), {
    strict: true,
    decode: i => optionDecode(i),
    encode: a => option_.match(a, {
      onNone: () => makeNoneEncoded,
      onSome: makeSomeEncoded
    })
  });
  return out;
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
function OptionFromNullOr(value) {
  return transform(NullOr(value), OptionFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => option_.fromNullable(i),
    encode: a => option_.getOrNull(a)
  });
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
function OptionFromNullishOr(value, onNoneEncoding) {
  return transform(NullishOr(value), OptionFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => option_.fromNullable(i),
    encode: onNoneEncoding === null ? a => option_.getOrNull(a) : a => option_.getOrUndefined(a)
  });
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
function OptionFromUndefinedOr(value) {
  return transform(UndefinedOr(value), OptionFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => option_.fromNullable(i),
    encode: a => option_.getOrUndefined(a)
  });
}
/**
 * Transforms strings into an Option type, effectively filtering out empty or
 * whitespace-only strings by trimming them and checking their length. Returns
 * `none` for invalid inputs and `some` for valid non-empty strings.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)(" a ")) // Option.some("a")
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category Option transformations
 * @since 3.10.0
 */
class OptionFromNonEmptyTrimmedString extends /*#__PURE__*/transform(String$, /*#__PURE__*/OptionFromSelf(NonEmptyTrimmedString), {
  strict: true,
  decode: i => option_.filter(option_.some(i.trim()), string_.isNonEmpty),
  encode: a => option_.getOrElse(a, () => "")
}) {}
exports.OptionFromNonEmptyTrimmedString = OptionFromNonEmptyTrimmedString;
const rightEncoded = right => Struct({
  _tag: Literal("Right"),
  right
}).annotations({
  description: `RightEncoded<${format(right)}>`
});
const leftEncoded = left => Struct({
  _tag: Literal("Left"),
  left
}).annotations({
  description: `LeftEncoded<${format(left)}>`
});
const eitherEncoded = (right, left) => Union(rightEncoded(right), leftEncoded(left)).annotations({
  description: `EitherEncoded<${format(left)}, ${format(right)}>`
});
const eitherDecode = input => input._tag === "Left" ? either_.left(input.left) : either_.right(input.right);
const eitherArbitrary = (right, left) => fc => fc.oneof(fc.record({
  _tag: fc.constant("Left"),
  left: left(fc)
}), fc.record({
  _tag: fc.constant("Right"),
  right: right(fc)
})).map(eitherDecode);
const eitherPretty = (right, left) => either_.match({
  onLeft: e => `left(${left(e)})`,
  onRight: a => `right(${right(a)})`
});
const eitherParse = (parseRight, decodeUnknownLeft) => (u, options, ast) => either_.isEither(u) ? either_.match(u, {
  onLeft: left => toComposite(decodeUnknownLeft(left, options), either_.left, ast, u),
  onRight: right => toComposite(parseRight(right, options), either_.right, ast, u)
}) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Either transformations
 * @since 3.10.0
 */
const EitherFromSelf = ({
  left,
  right
}) => {
  return declare([right, left], {
    decode: (right, left) => eitherParse(ParseResult.decodeUnknown(right), ParseResult.decodeUnknown(left)),
    encode: (right, left) => eitherParse(ParseResult.encodeUnknown(right), ParseResult.encodeUnknown(left))
  }, {
    typeConstructor: {
      _tag: "effect/Either"
    },
    description: `Either<${format(right)}, ${format(left)}>`,
    pretty: eitherPretty,
    arbitrary: eitherArbitrary,
    equivalence: (right, left) => either_.getEquivalence({
      left,
      right
    })
  });
};
exports.EitherFromSelf = EitherFromSelf;
const makeLeftEncoded = left => ({
  _tag: "Left",
  left
});
const makeRightEncoded = right => ({
  _tag: "Right",
  right
});
/**
 * @category Either transformations
 * @since 3.10.0
 */
const Either = ({
  left,
  right
}) => {
  const right_ = asSchema(right);
  const left_ = asSchema(left);
  const out = transform(eitherEncoded(right_, left_), EitherFromSelf({
    left: typeSchema(left_),
    right: typeSchema(right_)
  }), {
    strict: true,
    decode: i => eitherDecode(i),
    encode: a => either_.match(a, {
      onLeft: makeLeftEncoded,
      onRight: makeRightEncoded
    })
  });
  return out;
};
/**
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // Schema<string | number, Either<string, number>>
 * Schema.EitherFromUnion({ left: Schema.String, right: Schema.Number })
 * ```
 *
 * @category Either transformations
 * @since 3.10.0
 */
exports.Either = Either;
const EitherFromUnion = ({
  left,
  right
}) => {
  const right_ = asSchema(right);
  const left_ = asSchema(left);
  const toright = typeSchema(right_);
  const toleft = typeSchema(left_);
  const fromRight = transform(right_, rightEncoded(toright), {
    strict: true,
    decode: i => makeRightEncoded(i),
    encode: a => a.right
  });
  const fromLeft = transform(left_, leftEncoded(toleft), {
    strict: true,
    decode: i => makeLeftEncoded(i),
    encode: a => a.left
  });
  const out = transform(Union(fromRight, fromLeft), EitherFromSelf({
    left: toleft,
    right: toright
  }), {
    strict: true,
    decode: i => i._tag === "Left" ? either_.left(i.left) : either_.right(i.right),
    encode: a => either_.match(a, {
      onLeft: makeLeftEncoded,
      onRight: makeRightEncoded
    })
  });
  return out;
};
exports.EitherFromUnion = EitherFromUnion;
const mapArbitrary = (key, value, ctx) => {
  return fc => {
    const items = fc.array(fc.tuple(key(fc), value(fc)));
    return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(as => new Map(as));
  };
};
const readonlyMapPretty = (key, value) => map => `new Map([${Array.from(map.entries()).map(([k, v]) => `[${key(k)}, ${value(v)}]`).join(", ")}])`;
const readonlyMapEquivalence = (key, value) => {
  const arrayEquivalence = array_.getEquivalence(Equivalence.make(([ka, va], [kb, vb]) => key(ka, kb) && value(va, vb)));
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a.entries()), Array.from(b.entries())));
};
const readonlyMapParse = decodeUnknown => (u, options, ast) => Predicate.isMap(u) ? toComposite(decodeUnknown(Array.from(u.entries()), options), as => new Map(as), ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
const mapFromSelf_ = (key, value, description) => declare([key, value], {
  decode: (Key, Value) => readonlyMapParse(ParseResult.decodeUnknown(Array$(Tuple(Key, Value)))),
  encode: (Key, Value) => readonlyMapParse(ParseResult.encodeUnknown(Array$(Tuple(Key, Value))))
}, {
  typeConstructor: {
    _tag: "ReadonlyMap"
  },
  description,
  pretty: readonlyMapPretty,
  arbitrary: mapArbitrary,
  equivalence: readonlyMapEquivalence
});
/**
 * @category ReadonlyMap
 * @since 3.10.0
 */
const ReadonlyMapFromSelf = ({
  key,
  value
}) => mapFromSelf_(key, value, `ReadonlyMap<${format(key)}, ${format(value)}>`);
/**
 * @category Map
 * @since 3.10.0
 */
exports.ReadonlyMapFromSelf = ReadonlyMapFromSelf;
const MapFromSelf = ({
  key,
  value
}) => mapFromSelf_(key, value, `Map<${format(key)}, ${format(value)}>`);
/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
exports.MapFromSelf = MapFromSelf;
function ReadonlyMap({
  key,
  value
}) {
  return transform(Array$(Tuple(key, value)), ReadonlyMapFromSelf({
    key: typeSchema(asSchema(key)),
    value: typeSchema(asSchema(value))
  }), {
    strict: true,
    decode: i => new Map(i),
    encode: a => Array.from(a.entries())
  });
}
/** @ignore */
function map({
  key,
  value
}) {
  return transform(Array$(Tuple(key, value)), MapFromSelf({
    key: typeSchema(asSchema(key)),
    value: typeSchema(asSchema(value))
  }), {
    strict: true,
    decode: i => new Map(i),
    encode: a => Array.from(a.entries())
  });
}
/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
const ReadonlyMapFromRecord = ({
  key,
  value
}) => transform(Record({
  key: encodedBoundSchema(key),
  value
}).annotations({
  description: "a record to be decoded into a ReadonlyMap"
}), ReadonlyMapFromSelf({
  key,
  value: typeSchema(value)
}), {
  strict: true,
  decode: i => new Map(Object.entries(i)),
  encode: a => Object.fromEntries(a)
});
/**
 * @category Map transformations
 * @since 3.10.0
 */
exports.ReadonlyMapFromRecord = ReadonlyMapFromRecord;
const MapFromRecord = ({
  key,
  value
}) => transform(Record({
  key: encodedBoundSchema(key),
  value
}).annotations({
  description: "a record to be decoded into a Map"
}), MapFromSelf({
  key,
  value: typeSchema(value)
}), {
  strict: true,
  decode: i => new Map(Object.entries(i)),
  encode: a => Object.fromEntries(a)
});
exports.MapFromRecord = MapFromRecord;
const setArbitrary = (item, ctx) => fc => {
  const items = fc.array(item(fc));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(as => new Set(as));
};
const readonlySetPretty = item => set => `new Set([${Array.from(set.values()).map(a => item(a)).join(", ")}])`;
const readonlySetEquivalence = item => {
  const arrayEquivalence = array_.getEquivalence(item);
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a.values()), Array.from(b.values())));
};
const readonlySetParse = decodeUnknown => (u, options, ast) => Predicate.isSet(u) ? toComposite(decodeUnknown(Array.from(u.values()), options), as => new Set(as), ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
const setFromSelf_ = (value, description) => declare([value], {
  decode: item => readonlySetParse(ParseResult.decodeUnknown(Array$(item))),
  encode: item => readonlySetParse(ParseResult.encodeUnknown(Array$(item)))
}, {
  typeConstructor: {
    _tag: "ReadonlySet"
  },
  description,
  pretty: readonlySetPretty,
  arbitrary: setArbitrary,
  equivalence: readonlySetEquivalence
});
/**
 * @category ReadonlySet
 * @since 3.10.0
 */
const ReadonlySetFromSelf = value => setFromSelf_(value, `ReadonlySet<${format(value)}>`);
/**
 * @category Set
 * @since 3.10.0
 */
exports.ReadonlySetFromSelf = ReadonlySetFromSelf;
const SetFromSelf = value => setFromSelf_(value, `Set<${format(value)}>`);
/**
 * @category ReadonlySet transformations
 * @since 3.10.0
 */
exports.SetFromSelf = SetFromSelf;
function ReadonlySet(value) {
  return transform(Array$(value), ReadonlySetFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => new Set(i),
    encode: a => Array.from(a)
  });
}
/** @ignore */
function set(value) {
  return transform(Array$(value), SetFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => new Set(i),
    encode: a => Array.from(a)
  });
}
const bigDecimalPretty = () => val => `BigDecimal(${bigDecimal_.format(bigDecimal_.normalize(val))})`;
const bigDecimalArbitrary = () => fc => fc.tuple(fc.bigInt(), fc.integer({
  min: -18,
  max: 18
})).map(([value, scale]) => bigDecimal_.make(value, scale));
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
class BigDecimalFromSelf extends /*#__PURE__*/declare(bigDecimal_.isBigDecimal, {
  typeConstructor: {
    _tag: "effect/BigDecimal"
  },
  identifier: "BigDecimalFromSelf",
  pretty: bigDecimalPretty,
  arbitrary: bigDecimalArbitrary,
  equivalence: () => bigDecimal_.Equivalence
}) {}
/**
 * @category BigDecimal transformations
 * @since 3.10.0
 */
exports.BigDecimalFromSelf = BigDecimalFromSelf;
class BigDecimal extends /*#__PURE__*/transformOrFail(String$.annotations({
  description: "a string to be decoded into a BigDecimal"
}), BigDecimalFromSelf, {
  strict: true,
  decode: (i, _, ast) => bigDecimal_.fromString(i).pipe(option_.match({
    onNone: () => ParseResult.fail(new ParseResult.Type(ast, i, `Unable to decode ${JSON.stringify(i)} into a BigDecimal`)),
    onSome: val => ParseResult.succeed(bigDecimal_.normalize(val))
  })),
  encode: a => ParseResult.succeed(bigDecimal_.format(bigDecimal_.normalize(a)))
}).annotations({
  identifier: "BigDecimal"
}) {}
/**
 * A schema that transforms a `number` into a `BigDecimal`.
 * When encoding, this Schema will produce incorrect results if the BigDecimal exceeds the 64-bit range of a number.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
exports.BigDecimal = BigDecimal;
class BigDecimalFromNumber extends /*#__PURE__*/transform(Number$.annotations({
  description: "a number to be decoded into a BigDecimal"
}), BigDecimalFromSelf, {
  strict: true,
  decode: i => bigDecimal_.unsafeFromNumber(i),
  encode: a => bigDecimal_.unsafeToNumber(a)
}).annotations({
  identifier: "BigDecimalFromNumber"
}) {}
/**
 * @category schema id
 * @since 3.10.0
 */
exports.BigDecimalFromNumber = BigDecimalFromNumber;
const GreaterThanBigDecimalSchemaId = exports.GreaterThanBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/GreaterThanBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const greaterThanBigDecimal = (min, annotations) => self => {
  const formatted = bigDecimal_.format(min);
  return self.pipe(filter(a => bigDecimal_.greaterThan(a, min), {
    schemaId: GreaterThanBigDecimalSchemaId,
    [GreaterThanBigDecimalSchemaId]: {
      min
    },
    title: `greaterThanBigDecimal(${formatted})`,
    description: `a BigDecimal greater than ${formatted}`,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanBigDecimal = greaterThanBigDecimal;
const GreaterThanOrEqualToBigDecimalSchemaId = exports.GreaterThanOrEqualToBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/GreaterThanOrEqualToBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const greaterThanOrEqualToBigDecimal = (min, annotations) => self => {
  const formatted = bigDecimal_.format(min);
  return self.pipe(filter(a => bigDecimal_.greaterThanOrEqualTo(a, min), {
    schemaId: GreaterThanOrEqualToBigDecimalSchemaId,
    [GreaterThanOrEqualToBigDecimalSchemaId]: {
      min
    },
    title: `greaterThanOrEqualToBigDecimal(${formatted})`,
    description: `a BigDecimal greater than or equal to ${formatted}`,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.greaterThanOrEqualToBigDecimal = greaterThanOrEqualToBigDecimal;
const LessThanBigDecimalSchemaId = exports.LessThanBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/LessThanBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const lessThanBigDecimal = (max, annotations) => self => {
  const formatted = bigDecimal_.format(max);
  return self.pipe(filter(a => bigDecimal_.lessThan(a, max), {
    schemaId: LessThanBigDecimalSchemaId,
    [LessThanBigDecimalSchemaId]: {
      max
    },
    title: `lessThanBigDecimal(${formatted})`,
    description: `a BigDecimal less than ${formatted}`,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanBigDecimal = lessThanBigDecimal;
const LessThanOrEqualToBigDecimalSchemaId = exports.LessThanOrEqualToBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/LessThanOrEqualToBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const lessThanOrEqualToBigDecimal = (max, annotations) => self => {
  const formatted = bigDecimal_.format(max);
  return self.pipe(filter(a => bigDecimal_.lessThanOrEqualTo(a, max), {
    schemaId: LessThanOrEqualToBigDecimalSchemaId,
    [LessThanOrEqualToBigDecimalSchemaId]: {
      max
    },
    title: `lessThanOrEqualToBigDecimal(${formatted})`,
    description: `a BigDecimal less than or equal to ${formatted}`,
    ...annotations
  }));
};
/**
 * @category schema id
 * @since 3.10.0
 */
exports.lessThanOrEqualToBigDecimal = lessThanOrEqualToBigDecimal;
const PositiveBigDecimalSchemaId = exports.PositiveBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/PositiveBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const positiveBigDecimal = annotations => self => self.pipe(filter(a => bigDecimal_.isPositive(a), {
  schemaId: PositiveBigDecimalSchemaId,
  title: "positiveBigDecimal",
  description: `a positive BigDecimal`,
  ...annotations
}));
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
exports.positiveBigDecimal = positiveBigDecimal;
const PositiveBigDecimalFromSelf = exports.PositiveBigDecimalFromSelf = /*#__PURE__*/BigDecimalFromSelf.pipe(/*#__PURE__*/positiveBigDecimal({
  identifier: "PositiveBigDecimalFromSelf"
}));
/**
 * @category schema id
 * @since 3.10.0
 */
const NonNegativeBigDecimalSchemaId = exports.NonNegativeBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/NonNegativeBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const nonNegativeBigDecimal = annotations => self => self.pipe(filter(a => a.value >= 0n, {
  schemaId: NonNegativeBigDecimalSchemaId,
  title: "nonNegativeBigDecimal",
  description: `a non-negative BigDecimal`,
  ...annotations
}));
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
exports.nonNegativeBigDecimal = nonNegativeBigDecimal;
const NonNegativeBigDecimalFromSelf = exports.NonNegativeBigDecimalFromSelf = /*#__PURE__*/BigDecimalFromSelf.pipe(/*#__PURE__*/nonNegativeBigDecimal({
  identifier: "NonNegativeBigDecimalFromSelf"
}));
/**
 * @category schema id
 * @since 3.10.0
 */
const NegativeBigDecimalSchemaId = exports.NegativeBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/NegativeBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const negativeBigDecimal = annotations => self => self.pipe(filter(a => bigDecimal_.isNegative(a), {
  schemaId: NegativeBigDecimalSchemaId,
  title: "negativeBigDecimal",
  description: `a negative BigDecimal`,
  ...annotations
}));
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
exports.negativeBigDecimal = negativeBigDecimal;
const NegativeBigDecimalFromSelf = exports.NegativeBigDecimalFromSelf = /*#__PURE__*/BigDecimalFromSelf.pipe(/*#__PURE__*/negativeBigDecimal({
  identifier: "NegativeBigDecimalFromSelf"
}));
/**
 * @category schema id
 * @since 3.10.0
 */
const NonPositiveBigDecimalSchemaId = exports.NonPositiveBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/schema/NonPositiveBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const nonPositiveBigDecimal = annotations => self => self.pipe(filter(a => a.value <= 0n, {
  schemaId: NonPositiveBigDecimalSchemaId,
  title: "nonPositiveBigDecimal",
  description: `a non-positive BigDecimal`,
  ...annotations
}));
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
exports.nonPositiveBigDecimal = nonPositiveBigDecimal;
const NonPositiveBigDecimalFromSelf = exports.NonPositiveBigDecimalFromSelf = /*#__PURE__*/BigDecimalFromSelf.pipe(/*#__PURE__*/nonPositiveBigDecimal({
  identifier: "NonPositiveBigDecimalFromSelf"
}));
/**
 * @category schema id
 * @since 3.10.0
 */
const BetweenBigDecimalSchemaId = exports.BetweenBigDecimalSchemaId = /*#__PURE__*/Symbol.for("effect/SchemaId/BetweenBigDecimal");
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
const betweenBigDecimal = (minimum, maximum, annotations) => self => {
  const formattedMinimum = bigDecimal_.format(minimum);
  const formattedMaximum = bigDecimal_.format(maximum);
  return self.pipe(filter(a => bigDecimal_.between(a, {
    minimum,
    maximum
  }), {
    schemaId: BetweenBigDecimalSchemaId,
    [BetweenBigDecimalSchemaId]: {
      maximum,
      minimum
    },
    title: `betweenBigDecimal(${formattedMinimum}, ${formattedMaximum})`,
    description: `a BigDecimal between ${formattedMinimum} and ${formattedMaximum}`,
    ...annotations
  }));
};
/**
 * Clamps a `BigDecimal` between a minimum and a maximum value.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
exports.betweenBigDecimal = betweenBigDecimal;
const clampBigDecimal = (minimum, maximum) => self => transform(self, self.pipe(typeSchema, betweenBigDecimal(minimum, maximum)), {
  strict: false,
  decode: i => bigDecimal_.clamp(i, {
    minimum,
    maximum
  }),
  encode: _Function.identity
});
exports.clampBigDecimal = clampBigDecimal;
const chunkArbitrary = (item, ctx) => fc => {
  const items = fc.array(item(fc));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(chunk_.fromIterable);
};
const chunkPretty = item => c => `Chunk(${chunk_.toReadonlyArray(c).map(item).join(", ")})`;
const chunkParse = decodeUnknown => (u, options, ast) => chunk_.isChunk(u) ? chunk_.isEmpty(u) ? ParseResult.succeed(chunk_.empty()) : toComposite(decodeUnknown(chunk_.toReadonlyArray(u), options), chunk_.fromIterable, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Chunk
 * @since 3.10.0
 */
const ChunkFromSelf = value => {
  return declare([value], {
    decode: item => chunkParse(ParseResult.decodeUnknown(Array$(item))),
    encode: item => chunkParse(ParseResult.encodeUnknown(Array$(item)))
  }, {
    typeConstructor: {
      _tag: "effect/Chunk"
    },
    description: `Chunk<${format(value)}>`,
    pretty: chunkPretty,
    arbitrary: chunkArbitrary,
    equivalence: chunk_.getEquivalence
  });
};
/**
 * @category Chunk transformations
 * @since 3.10.0
 */
exports.ChunkFromSelf = ChunkFromSelf;
function Chunk(value) {
  return transform(Array$(value), ChunkFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => i.length === 0 ? chunk_.empty() : chunk_.fromIterable(i),
    encode: a => chunk_.toReadonlyArray(a)
  });
}
const nonEmptyChunkArbitrary = item => fc => fastCheck_.array(item(fc), {
  minLength: 1
}).map(as => chunk_.unsafeFromNonEmptyArray(as));
const nonEmptyChunkPretty = item => c => `NonEmptyChunk(${chunk_.toReadonlyArray(c).map(item).join(", ")})`;
const nonEmptyChunkParse = decodeUnknown => (u, options, ast) => chunk_.isChunk(u) && chunk_.isNonEmpty(u) ? toComposite(decodeUnknown(chunk_.toReadonlyArray(u), options), chunk_.unsafeFromNonEmptyArray, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Chunk
 * @since 3.10.0
 */
const NonEmptyChunkFromSelf = value => {
  return declare([value], {
    decode: item => nonEmptyChunkParse(ParseResult.decodeUnknown(NonEmptyArray(item))),
    encode: item => nonEmptyChunkParse(ParseResult.encodeUnknown(NonEmptyArray(item)))
  }, {
    typeConstructor: {
      _tag: "effect/Chunk.NonEmptyChunk"
    },
    description: `NonEmptyChunk<${format(value)}>`,
    pretty: nonEmptyChunkPretty,
    arbitrary: nonEmptyChunkArbitrary,
    equivalence: chunk_.getEquivalence
  });
};
/**
 * @category Chunk transformations
 * @since 3.10.0
 */
exports.NonEmptyChunkFromSelf = NonEmptyChunkFromSelf;
function NonEmptyChunk(value) {
  return transform(NonEmptyArray(value), NonEmptyChunkFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => chunk_.unsafeFromNonEmptyArray(i),
    encode: a => chunk_.toReadonlyArray(a)
  });
}
const decodeData = a => Array.isArray(a) ? data_.array(a) : data_.struct(a);
const dataArbitrary = item => fc => item(fc).map(decodeData);
const dataPretty = item => d => `Data(${item(d)})`;
const dataParse = decodeUnknown => (u, options, ast) => Equal.isEqual(u) ? toComposite(decodeUnknown(u, options), decodeData, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
const DataFromSelf = value => {
  return declare([value], {
    decode: item => dataParse(ParseResult.decodeUnknown(item)),
    encode: item => dataParse(ParseResult.encodeUnknown(item))
  }, {
    description: `Data<${format(value)}>`,
    pretty: dataPretty,
    arbitrary: dataArbitrary
  });
};
/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
exports.DataFromSelf = DataFromSelf;
const Data = value => {
  return transform(value, DataFromSelf(typeSchema(value)), {
    strict: false,
    decode: i => decodeData(i),
    encode: a => Array.isArray(a) ? Array.from(a) : Object.assign({}, a)
  });
};
exports.Data = Data;
const isField = u => isSchema(u) || isPropertySignature(u);
const isFields = fields => Reflect.ownKeys(fields).every(key => isField(fields[key]));
const getFields = hasFields => "fields" in hasFields ? hasFields.fields : getFields(hasFields[RefineSchemaId]);
const getSchemaFromFieldsOr = fieldsOr => isFields(fieldsOr) ? Struct(fieldsOr) : isSchema(fieldsOr) ? fieldsOr : Struct(getFields(fieldsOr));
const getFieldsFromFieldsOr = fieldsOr => isFields(fieldsOr) ? fieldsOr : getFields(fieldsOr);
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.Class<MyClass>("MyClass")({
 *  someField: Schema.String
 * }) {
 *  someMethod() {
 *    return this.someField + "bar"
 *  }
 * }
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
const Class = identifier => (fieldsOr, annotations) => makeClass({
  kind: "Class",
  identifier,
  schema: getSchemaFromFieldsOr(fieldsOr),
  fields: getFieldsFromFieldsOr(fieldsOr),
  Base: data_.Class,
  annotations
});
/** @internal */
exports.Class = Class;
const getClassTag = tag => withConstructorDefault(propertySignature(Literal(tag)), () => tag);
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.TaggedClass<MyClass>("MyClass")("MyClass", {
 *  a: Schema.String
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
exports.getClassTag = getClassTag;
const TaggedClass = identifier => (tag, fieldsOr, annotations) => {
  const fields = getFieldsFromFieldsOr(fieldsOr);
  const schema = getSchemaFromFieldsOr(fieldsOr);
  const newFields = {
    _tag: getClassTag(tag)
  };
  const taggedFields = extendFields(newFields, fields);
  return class TaggedClass extends makeClass({
    kind: "TaggedClass",
    identifier: identifier ?? tag,
    schema: extend(schema, Struct(newFields)),
    fields: taggedFields,
    Base: data_.Class,
    annotations
  }) {
    static _tag = tag;
  };
};
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyError extends Schema.TaggedError<MyError>("MyError")(
 *   "MyError",
 *   {
 *     module: Schema.String,
 *     method: Schema.String,
 *     description: Schema.String
 *   }
 * ) {
 *   get message(): string {
 *     return `${this.module}.${this.method}: ${this.description}`
 *   }
 * }
 * ```
 * @category classes
 * @since 3.10.0
 */
exports.TaggedClass = TaggedClass;
const TaggedError = identifier => (tag, fieldsOr, annotations) => {
  class Base extends data_.Error {}
  ;
  Base.prototype.name = tag;
  const fields = getFieldsFromFieldsOr(fieldsOr);
  const schema = getSchemaFromFieldsOr(fieldsOr);
  const newFields = {
    _tag: getClassTag(tag)
  };
  const taggedFields = extendFields(newFields, fields);
  const hasMessageField = "message" in taggedFields;
  class TaggedErrorClass extends makeClass({
    kind: "TaggedError",
    identifier: identifier ?? tag,
    schema: extend(schema, Struct(newFields)),
    fields: taggedFields,
    Base,
    annotations,
    disableToString: true
  }) {
    static _tag = tag;
  }
  if (!hasMessageField) {
    Object.defineProperty(TaggedErrorClass.prototype, "message", {
      get() {
        return `{ ${Reflect.ownKeys(fields).map(p => `${Inspectable.formatPropertyKey(p)}: ${Inspectable.formatUnknown(this[p])}`).join(", ")} }`;
      },
      enumerable: false,
      // mirrors the built-in Error.prototype.message, whose descriptor is also non-enumerable
      configurable: true
    });
  }
  return TaggedErrorClass;
};
exports.TaggedError = TaggedError;
const extendFields = (a, b) => {
  const out = {
    ...a
  };
  for (const key of Reflect.ownKeys(b)) {
    if (key in a) {
      throw new Error(errors_.getASTDuplicatePropertySignatureErrorMessage(key));
    }
    out[key] = b[key];
  }
  return out;
};
function getDisableValidationMakeOption(options) {
  return Predicate.isBoolean(options) ? options : options?.disableValidation ?? false;
}
const astCache = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Schema/astCache", () => new WeakMap());
const getClassAnnotations = annotations => {
  if (annotations === undefined) {
    return [];
  } else if (Array.isArray(annotations)) {
    return annotations;
  } else {
    return [annotations];
  }
};
const makeClass = ({
  Base,
  annotations,
  disableToString,
  fields,
  identifier,
  kind,
  schema
}) => {
  const classSymbol = Symbol.for(`effect/Schema/${kind}/${identifier}`);
  const [typeAnnotations, transformationAnnotations, encodedAnnotations] = getClassAnnotations(annotations);
  const typeSchema_ = typeSchema(schema);
  const declarationSurrogate = typeSchema_.annotations({
    identifier,
    ...typeAnnotations
  });
  const typeSide = typeSchema_.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Type side)`,
    ...typeAnnotations
  });
  const constructorSchema = schema.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Constructor)`,
    ...typeAnnotations
  });
  const encodedSide = schema.annotations({
    [AST.AutoTitleAnnotationId]: `${identifier} (Encoded side)`,
    ...encodedAnnotations
  });
  const transformationSurrogate = schema.annotations({
    ...encodedAnnotations,
    ...typeAnnotations,
    ...transformationAnnotations
  });
  const fallbackInstanceOf = u => Predicate.hasProperty(u, classSymbol) && ParseResult.is(typeSide)(u);
  const klass = class extends Base {
    constructor(props = {}, options = false) {
      props = {
        ...props
      };
      if (kind !== "Class") {
        delete props["_tag"];
      }
      props = lazilyMergeDefaults(fields, props);
      if (!getDisableValidationMakeOption(options)) {
        props = ParseResult.validateSync(constructorSchema)(props);
      }
      super(props, true);
    }
    // ----------------
    // Schema interface
    // ----------------
    static [TypeId] = variance;
    static get ast() {
      let out = astCache.get(this);
      if (out) {
        return out;
      }
      const declaration = declare([schema], {
        decode: () => (input, _, ast) => input instanceof this || fallbackInstanceOf(input) ? ParseResult.succeed(input) : ParseResult.fail(new ParseResult.Type(ast, input)),
        encode: () => (input, options) => input instanceof this ? ParseResult.succeed(input) : ParseResult.map(ParseResult.encodeUnknown(typeSide)(input, options), props => new this(props, true))
      }, {
        identifier,
        pretty: pretty => self => `${identifier}(${pretty(self)})`,
        // @ts-expect-error
        arbitrary: arb => fc => arb(fc).map(props => new this(props)),
        equivalence: _Function.identity,
        [AST.SurrogateAnnotationId]: declarationSurrogate.ast,
        ...typeAnnotations
      });
      out = transform(encodedSide, declaration, {
        strict: true,
        decode: i => new this(i, true),
        encode: _Function.identity
      }).annotations({
        [AST.SurrogateAnnotationId]: transformationSurrogate.ast,
        ...transformationAnnotations
      }).ast;
      astCache.set(this, out);
      return out;
    }
    static pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    }
    static annotations(annotations) {
      return make(this.ast).annotations(annotations);
    }
    static toString() {
      return `(${String(encodedSide)} <-> ${identifier})`;
    }
    // ----------------
    // Class interface
    // ----------------
    static make(...args) {
      return new this(...args);
    }
    static fields = {
      ...fields
    };
    static identifier = identifier;
    static extend(identifier) {
      return (newFieldsOr, annotations) => {
        const newFields = getFieldsFromFieldsOr(newFieldsOr);
        const newSchema = getSchemaFromFieldsOr(newFieldsOr);
        const extendedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier,
          schema: extend(schema, newSchema),
          fields: extendedFields,
          Base: this,
          annotations
        });
      };
    }
    static transformOrFail(identifier) {
      return (newFieldsOr, options, annotations) => {
        const transformedFields = extendFields(fields, newFieldsOr);
        return makeClass({
          kind,
          identifier,
          schema: transformOrFail(schema, typeSchema(Struct(transformedFields)), options),
          fields: transformedFields,
          Base: this,
          annotations
        });
      };
    }
    static transformOrFailFrom(identifier) {
      return (newFields, options, annotations) => {
        const transformedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier,
          schema: transformOrFail(encodedSchema(schema), Struct(transformedFields), options),
          fields: transformedFields,
          Base: this,
          annotations
        });
      };
    }
    // ----------------
    // other
    // ----------------
    get [classSymbol]() {
      return classSymbol;
    }
  };
  if (disableToString !== true) {
    Object.defineProperty(klass.prototype, "toString", {
      value() {
        return `${identifier}({ ${Reflect.ownKeys(fields).map(p => `${Inspectable.formatPropertyKey(p)}: ${Inspectable.formatUnknown(this[p])}`).join(", ")} })`;
      },
      configurable: true,
      writable: true
    });
  }
  return klass;
};
const FiberIdNoneEncoded = /*#__PURE__*/Struct({
  _tag: Literal("None")
}).annotations({
  identifier: "FiberIdNoneEncoded"
});
const FiberIdRuntimeEncoded = /*#__PURE__*/Struct({
  _tag: Literal("Runtime"),
  id: Int,
  startTimeMillis: Int
}).annotations({
  identifier: "FiberIdRuntimeEncoded"
});
const FiberIdCompositeEncoded = /*#__PURE__*/Struct({
  _tag: Literal("Composite"),
  left: suspend(() => FiberIdEncoded),
  right: suspend(() => FiberIdEncoded)
}).annotations({
  identifier: "FiberIdCompositeEncoded"
});
const FiberIdEncoded = /*#__PURE__*/Union(FiberIdNoneEncoded, FiberIdRuntimeEncoded, FiberIdCompositeEncoded).annotations({
  identifier: "FiberIdEncoded"
});
const fiberIdArbitrary = fc => fc.letrec(tie => ({
  None: fc.record({
    _tag: fc.constant("None")
  }),
  Runtime: fc.record({
    _tag: fc.constant("Runtime"),
    id: fc.integer(),
    startTimeMillis: fc.integer()
  }),
  Composite: fc.record({
    _tag: fc.constant("Composite"),
    left: tie("FiberId"),
    right: tie("FiberId")
  }),
  FiberId: fc.oneof(tie("None"), tie("Runtime"), tie("Composite"))
})).FiberId.map(fiberIdDecode);
const fiberIdPretty = fiberId => {
  switch (fiberId._tag) {
    case "None":
      return "FiberId.none";
    case "Runtime":
      return `FiberId.runtime(${fiberId.id}, ${fiberId.startTimeMillis})`;
    case "Composite":
      return `FiberId.composite(${fiberIdPretty(fiberId.right)}, ${fiberIdPretty(fiberId.left)})`;
  }
};
/**
 * @category FiberId constructors
 * @since 3.10.0
 */
class FiberIdFromSelf extends /*#__PURE__*/declare(fiberId_.isFiberId, {
  typeConstructor: {
    _tag: "effect/FiberId"
  },
  identifier: "FiberIdFromSelf",
  pretty: () => fiberIdPretty,
  arbitrary: () => fiberIdArbitrary
}) {}
exports.FiberIdFromSelf = FiberIdFromSelf;
const fiberIdDecode = input => {
  switch (input._tag) {
    case "None":
      return fiberId_.none;
    case "Runtime":
      return fiberId_.runtime(input.id, input.startTimeMillis);
    case "Composite":
      return fiberId_.composite(fiberIdDecode(input.left), fiberIdDecode(input.right));
  }
};
const fiberIdEncode = input => {
  switch (input._tag) {
    case "None":
      return {
        _tag: "None"
      };
    case "Runtime":
      return {
        _tag: "Runtime",
        id: input.id,
        startTimeMillis: input.startTimeMillis
      };
    case "Composite":
      return {
        _tag: "Composite",
        left: fiberIdEncode(input.left),
        right: fiberIdEncode(input.right)
      };
  }
};
/**
 * @category FiberId transformations
 * @since 3.10.0
 */
class FiberId extends /*#__PURE__*/transform(FiberIdEncoded, FiberIdFromSelf, {
  strict: true,
  decode: i => fiberIdDecode(i),
  encode: a => fiberIdEncode(a)
}).annotations({
  identifier: "FiberId"
}) {}
exports.FiberId = FiberId;
const causeDieEncoded = defect => Struct({
  _tag: Literal("Die"),
  defect
});
const CauseEmptyEncoded = /*#__PURE__*/Struct({
  _tag: /*#__PURE__*/Literal("Empty")
});
const causeFailEncoded = error => Struct({
  _tag: Literal("Fail"),
  error
});
const CauseInterruptEncoded = /*#__PURE__*/Struct({
  _tag: /*#__PURE__*/Literal("Interrupt"),
  fiberId: FiberIdEncoded
});
let causeEncodedId = 0;
const causeEncoded = (error, defect) => {
  const error_ = asSchema(error);
  const defect_ = asSchema(defect);
  const suspended = suspend(() => out);
  const out = Union(CauseEmptyEncoded, causeFailEncoded(error_), causeDieEncoded(defect_), CauseInterruptEncoded, Struct({
    _tag: Literal("Sequential"),
    left: suspended,
    right: suspended
  }), Struct({
    _tag: Literal("Parallel"),
    left: suspended,
    right: suspended
  })).annotations({
    title: `CauseEncoded<${format(error)}>`,
    [AST.JSONIdentifierAnnotationId]: `CauseEncoded${causeEncodedId++}`
  });
  return out;
};
const causeArbitrary = (error, defect) => fc => fc.letrec(tie => ({
  Empty: fc.record({
    _tag: fc.constant("Empty")
  }),
  Fail: fc.record({
    _tag: fc.constant("Fail"),
    error: error(fc)
  }),
  Die: fc.record({
    _tag: fc.constant("Die"),
    defect: defect(fc)
  }),
  Interrupt: fc.record({
    _tag: fc.constant("Interrupt"),
    fiberId: fiberIdArbitrary(fc)
  }),
  Sequential: fc.record({
    _tag: fc.constant("Sequential"),
    left: tie("Cause"),
    right: tie("Cause")
  }),
  Parallel: fc.record({
    _tag: fc.constant("Parallel"),
    left: tie("Cause"),
    right: tie("Cause")
  }),
  Cause: fc.oneof(tie("Empty"), tie("Fail"), tie("Die"), tie("Interrupt"), tie("Sequential"), tie("Parallel"))
})).Cause.map(causeDecode);
const causePretty = error => cause => {
  const f = cause => {
    switch (cause._tag) {
      case "Empty":
        return "Cause.empty";
      case "Fail":
        return `Cause.fail(${error(cause.error)})`;
      case "Die":
        return `Cause.die(${cause_.pretty(cause)})`;
      case "Interrupt":
        return `Cause.interrupt(${fiberIdPretty(cause.fiberId)})`;
      case "Sequential":
        return `Cause.sequential(${f(cause.left)}, ${f(cause.right)})`;
      case "Parallel":
        return `Cause.parallel(${f(cause.left)}, ${f(cause.right)})`;
    }
  };
  return f(cause);
};
const causeParse = decodeUnknown => (u, options, ast) => cause_.isCause(u) ? toComposite(decodeUnknown(causeEncode(u), options), causeDecode, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Cause transformations
 * @since 3.10.0
 */
const CauseFromSelf = ({
  defect,
  error
}) => {
  return declare([error, defect], {
    decode: (error, defect) => causeParse(ParseResult.decodeUnknown(causeEncoded(error, defect))),
    encode: (error, defect) => causeParse(ParseResult.encodeUnknown(causeEncoded(error, defect)))
  }, {
    typeConstructor: {
      _tag: "effect/Cause"
    },
    title: `Cause<${error.ast}>`,
    pretty: causePretty,
    arbitrary: causeArbitrary
  });
};
exports.CauseFromSelf = CauseFromSelf;
function causeDecode(cause) {
  switch (cause._tag) {
    case "Empty":
      return cause_.empty;
    case "Fail":
      return cause_.fail(cause.error);
    case "Die":
      return cause_.die(cause.defect);
    case "Interrupt":
      return cause_.interrupt(fiberIdDecode(cause.fiberId));
    case "Sequential":
      return cause_.sequential(causeDecode(cause.left), causeDecode(cause.right));
    case "Parallel":
      return cause_.parallel(causeDecode(cause.left), causeDecode(cause.right));
  }
}
function causeEncode(cause) {
  switch (cause._tag) {
    case "Empty":
      return {
        _tag: "Empty"
      };
    case "Fail":
      return {
        _tag: "Fail",
        error: cause.error
      };
    case "Die":
      return {
        _tag: "Die",
        defect: cause.defect
      };
    case "Interrupt":
      return {
        _tag: "Interrupt",
        fiberId: cause.fiberId
      };
    case "Sequential":
      return {
        _tag: "Sequential",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      };
    case "Parallel":
      return {
        _tag: "Parallel",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      };
  }
}
/**
 * @category Cause transformations
 * @since 3.10.0
 */
const Cause = ({
  defect,
  error
}) => {
  const error_ = asSchema(error);
  const defect_ = asSchema(defect);
  const out = transform(causeEncoded(error_, defect_), CauseFromSelf({
    error: typeSchema(error_),
    defect: typeSchema(defect_)
  }), {
    strict: false,
    decode: i => causeDecode(i),
    encode: a => causeEncode(a)
  });
  return out;
};
/**
 * Defines a schema for handling JavaScript errors (`Error` instances) and other types of defects.
 * It decodes objects into Error instances if they match the expected structure (i.e., have a `message` and optionally a `name` and `stack`),
 * or converts other values to their string representations.
 *
 * When encoding, it converts `Error` instances back into plain objects containing only the error's name and message,
 * or other values into their string forms.
 *
 * This is useful for serializing and deserializing errors across network boundaries where error objects do not natively serialize.
 *
 * @category defect
 * @since 3.10.0
 */
exports.Cause = Cause;
class Defect extends /*#__PURE__*/transform(Unknown, Unknown, {
  strict: true,
  decode: i => {
    if (Predicate.isObject(i) && "message" in i && typeof i.message === "string") {
      const err = new Error(i.message, {
        cause: i
      });
      if ("name" in i && typeof i.name === "string") {
        err.name = i.name;
      }
      err.stack = "stack" in i && typeof i.stack === "string" ? i.stack : "";
      return err;
    }
    return internalCause_.prettyErrorMessage(i);
  },
  encode: a => {
    if (a instanceof Error) {
      return {
        name: a.name,
        message: a.message
        // no stack because of security reasons
      };
    }
    return internalCause_.prettyErrorMessage(a);
  }
}).annotations({
  identifier: "Defect"
}) {}
exports.Defect = Defect;
const exitFailureEncoded = (error, defect) => Struct({
  _tag: Literal("Failure"),
  cause: causeEncoded(error, defect)
});
const exitSuccessEncoded = value => Struct({
  _tag: Literal("Success"),
  value
});
const exitEncoded = (value, error, defect) => {
  return Union(exitFailureEncoded(error, defect), exitSuccessEncoded(value)).annotations({
    title: `ExitEncoded<${format(value)}, ${format(error)}, ${format(defect)}>`
  });
};
const exitDecode = input => {
  switch (input._tag) {
    case "Failure":
      return exit_.failCause(causeDecode(input.cause));
    case "Success":
      return exit_.succeed(input.value);
  }
};
const exitArbitrary = (value, error, defect) => fc => fc.oneof(fc.record({
  _tag: fc.constant("Failure"),
  cause: causeArbitrary(error, defect)(fc)
}), fc.record({
  _tag: fc.constant("Success"),
  value: value(fc)
})).map(exitDecode);
const exitPretty = (value, error) => exit => exit._tag === "Failure" ? `Exit.failCause(${causePretty(error)(exit.cause)})` : `Exit.succeed(${value(exit.value)})`;
const exitParse = (decodeUnknownValue, decodeUnknownCause) => (u, options, ast) => exit_.isExit(u) ? exit_.match(u, {
  onFailure: cause => toComposite(decodeUnknownCause(cause, options), exit_.failCause, ast, u),
  onSuccess: value => toComposite(decodeUnknownValue(value, options), exit_.succeed, ast, u)
}) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category Exit transformations
 * @since 3.10.0
 */
const ExitFromSelf = ({
  defect,
  failure,
  success
}) => declare([success, failure, defect], {
  decode: (success, failure, defect) => exitParse(ParseResult.decodeUnknown(success), ParseResult.decodeUnknown(CauseFromSelf({
    error: failure,
    defect
  }))),
  encode: (success, failure, defect) => exitParse(ParseResult.encodeUnknown(success), ParseResult.encodeUnknown(CauseFromSelf({
    error: failure,
    defect
  })))
}, {
  typeConstructor: {
    _tag: "effect/Exit"
  },
  title: `Exit<${success.ast}, ${failure.ast}>`,
  pretty: exitPretty,
  arbitrary: exitArbitrary
});
/**
 * @category Exit transformations
 * @since 3.10.0
 */
exports.ExitFromSelf = ExitFromSelf;
const Exit = ({
  defect,
  failure,
  success
}) => {
  const success_ = asSchema(success);
  const failure_ = asSchema(failure);
  const defect_ = asSchema(defect);
  const out = transform(exitEncoded(success_, failure_, defect_), ExitFromSelf({
    failure: typeSchema(failure_),
    success: typeSchema(success_),
    defect: typeSchema(defect_)
  }), {
    strict: false,
    decode: i => exitDecode(i),
    encode: a => a._tag === "Failure" ? {
      _tag: "Failure",
      cause: a.cause
    } : {
      _tag: "Success",
      value: a.value
    }
  });
  return out;
};
exports.Exit = Exit;
const hashSetArbitrary = (item, ctx) => fc => {
  const items = fc.array(item(fc));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(hashSet_.fromIterable);
};
const hashSetPretty = item => set => `HashSet(${Array.from(set).map(a => item(a)).join(", ")})`;
const hashSetEquivalence = item => {
  const arrayEquivalence = array_.getEquivalence(item);
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
const hashSetParse = decodeUnknown => (u, options, ast) => hashSet_.isHashSet(u) ? toComposite(decodeUnknown(Array.from(u), options), hashSet_.fromIterable, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category HashSet transformations
 * @since 3.10.0
 */
const HashSetFromSelf = value => {
  return declare([value], {
    decode: item => hashSetParse(ParseResult.decodeUnknown(Array$(item))),
    encode: item => hashSetParse(ParseResult.encodeUnknown(Array$(item)))
  }, {
    typeConstructor: {
      _tag: "effect/HashSet"
    },
    description: `HashSet<${format(value)}>`,
    pretty: hashSetPretty,
    arbitrary: hashSetArbitrary,
    equivalence: hashSetEquivalence
  });
};
/**
 * @category HashSet transformations
 * @since 3.10.0
 */
exports.HashSetFromSelf = HashSetFromSelf;
function HashSet(value) {
  return transform(Array$(value), HashSetFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => hashSet_.fromIterable(i),
    encode: a => Array.from(a)
  });
}
const hashMapArbitrary = (key, value, ctx) => fc => {
  const items = fc.array(fc.tuple(key(fc), value(fc)));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(hashMap_.fromIterable);
};
const hashMapPretty = (key, value) => map => `HashMap([${Array.from(map).map(([k, v]) => `[${key(k)}, ${value(v)}]`).join(", ")}])`;
const hashMapEquivalence = (key, value) => {
  const arrayEquivalence = array_.getEquivalence(Equivalence.make(([ka, va], [kb, vb]) => key(ka, kb) && value(va, vb)));
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
const hashMapParse = decodeUnknown => (u, options, ast) => hashMap_.isHashMap(u) ? toComposite(decodeUnknown(Array.from(u), options), hashMap_.fromIterable, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category HashMap transformations
 * @since 3.10.0
 */
const HashMapFromSelf = ({
  key,
  value
}) => {
  return declare([key, value], {
    decode: (key, value) => hashMapParse(ParseResult.decodeUnknown(Array$(Tuple(key, value)))),
    encode: (key, value) => hashMapParse(ParseResult.encodeUnknown(Array$(Tuple(key, value))))
  }, {
    typeConstructor: {
      _tag: "effect/HashMap"
    },
    description: `HashMap<${format(key)}, ${format(value)}>`,
    pretty: hashMapPretty,
    arbitrary: hashMapArbitrary,
    equivalence: hashMapEquivalence
  });
};
/**
 * @category HashMap transformations
 * @since 3.10.0
 */
exports.HashMapFromSelf = HashMapFromSelf;
const HashMap = ({
  key,
  value
}) => {
  return transform(Array$(Tuple(key, value)), HashMapFromSelf({
    key: typeSchema(asSchema(key)),
    value: typeSchema(asSchema(value))
  }), {
    strict: true,
    decode: i => hashMap_.fromIterable(i),
    encode: a => Array.from(a)
  });
};
exports.HashMap = HashMap;
const listArbitrary = (item, ctx) => fc => {
  const items = fc.array(item(fc));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(list_.fromIterable);
};
const listPretty = item => set => `List(${Array.from(set).map(a => item(a)).join(", ")})`;
const listEquivalence = item => {
  const arrayEquivalence = array_.getEquivalence(item);
  return Equivalence.make((a, b) => arrayEquivalence(Array.from(a), Array.from(b)));
};
const listParse = decodeUnknown => (u, options, ast) => list_.isList(u) ? toComposite(decodeUnknown(Array.from(u), options), list_.fromIterable, ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category List transformations
 * @since 3.10.0
 */
const ListFromSelf = value => {
  return declare([value], {
    decode: item => listParse(ParseResult.decodeUnknown(Array$(item))),
    encode: item => listParse(ParseResult.encodeUnknown(Array$(item)))
  }, {
    typeConstructor: {
      _tag: "effect/List"
    },
    description: `List<${format(value)}>`,
    pretty: listPretty,
    arbitrary: listArbitrary,
    equivalence: listEquivalence
  });
};
/**
 * @category List transformations
 * @since 3.10.0
 */
exports.ListFromSelf = ListFromSelf;
function List(value) {
  return transform(Array$(value), ListFromSelf(typeSchema(asSchema(value))), {
    strict: true,
    decode: i => list_.fromIterable(i),
    encode: a => Array.from(a)
  });
}
const sortedSetArbitrary = (item, ord, ctx) => fc => {
  const items = fc.array(item(fc));
  return (ctx.depthIdentifier !== undefined ? fc.oneof(ctx, fc.constant([]), items) : items).map(as => sortedSet_.fromIterable(as, ord));
};
const sortedSetPretty = item => set => `new SortedSet([${Array.from(sortedSet_.values(set)).map(a => item(a)).join(", ")}])`;
const sortedSetParse = (decodeUnknown, ord) => (u, options, ast) => sortedSet_.isSortedSet(u) ? toComposite(decodeUnknown(Array.from(sortedSet_.values(u)), options), as => sortedSet_.fromIterable(as, ord), ast, u) : ParseResult.fail(new ParseResult.Type(ast, u));
/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
const SortedSetFromSelf = (value, ordA, ordI) => {
  return declare([value], {
    decode: item => sortedSetParse(ParseResult.decodeUnknown(Array$(item)), ordA),
    encode: item => sortedSetParse(ParseResult.encodeUnknown(Array$(item)), ordI)
  }, {
    typeConstructor: {
      _tag: "effect/SortedSet"
    },
    description: `SortedSet<${format(value)}>`,
    pretty: sortedSetPretty,
    arbitrary: (arb, ctx) => sortedSetArbitrary(arb, ordA, ctx),
    equivalence: () => sortedSet_.getEquivalence()
  });
};
/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
exports.SortedSetFromSelf = SortedSetFromSelf;
function SortedSet(value, ordA) {
  const to = typeSchema(asSchema(value));
  return transform(Array$(value), SortedSetFromSelf(to, ordA, ordA), {
    strict: true,
    decode: i => sortedSet_.fromIterable(i, ordA),
    encode: a => Array.from(sortedSet_.values(a))
  });
}
/**
 * Converts an arbitrary value to a `boolean` by testing whether it is truthy.
 * Uses `!!val` to coerce the value to a `boolean`.
 *
 * @see https://developer.mozilla.org/docs/Glossary/Truthy
 *
 * @category boolean constructors
 * @since 3.10.0
 */
class BooleanFromUnknown extends /*#__PURE__*/transform(Unknown, Boolean$, {
  strict: true,
  decode: i => Predicate.isTruthy(i),
  encode: _Function.identity
}).annotations({
  identifier: "BooleanFromUnknown"
}) {}
/**
 * Converts an `string` value into its corresponding `boolean`
 * ("true" as `true` and "false" as `false`).
 *
 * @category boolean transformations
 * @since 3.11.0
 */
exports.BooleanFromUnknown = BooleanFromUnknown;
class BooleanFromString extends /*#__PURE__*/transform(Literal("true", "false").annotations({
  description: "a string to be decoded into a boolean"
}), Boolean$, {
  strict: true,
  decode: i => i === "true",
  encode: a => a ? "true" : "false"
}).annotations({
  identifier: "BooleanFromString"
}) {}
/**
 * @category Config validations
 * @since 3.10.0
 */
exports.BooleanFromString = BooleanFromString;
const Config = (name, schema) => {
  const decodeUnknownEither = ParseResult.decodeUnknownEither(schema);
  return config_.string(name).pipe(config_.mapOrFail(s => decodeUnknownEither(s).pipe(either_.mapLeft(error => configError_.InvalidData([], ParseResult.TreeFormatter.formatIssueSync(error))))));
};
// ---------------------------------------------
// Serializable
// ---------------------------------------------
/**
 * @since 3.10.0
 * @category symbol
 */
exports.Config = Config;
const symbolSerializable = exports.symbolSerializable = /*#__PURE__*/Symbol.for("effect/Schema/Serializable/symbol");
/**
 * @since 3.10.0
 */
const asSerializable = serializable => serializable;
/**
 * @since 3.10.0
 * @category accessor
 */
exports.asSerializable = asSerializable;
const serializableSchema = self => self[symbolSerializable];
/**
 * @since 3.10.0
 * @category encoding
 */
exports.serializableSchema = serializableSchema;
const serialize = self => encodeUnknown(self[symbolSerializable])(self);
/**
 * @since 3.10.0
 * @category decoding
 */
exports.serialize = serialize;
const deserialize = exports.deserialize = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => decodeUnknown(self[symbolSerializable])(value));
/**
 * @since 3.10.0
 * @category symbol
 */
const symbolWithResult = exports.symbolWithResult = /*#__PURE__*/Symbol.for("effect/Schema/Serializable/symbolResult");
/**
 * @since 3.10.0
 */
const asWithResult = withExit => withExit;
/**
 * @since 3.10.0
 * @category accessor
 */
exports.asWithResult = asWithResult;
const failureSchema = self => self[symbolWithResult].failure;
/**
 * @since 3.10.0
 * @category accessor
 */
exports.failureSchema = failureSchema;
const successSchema = self => self[symbolWithResult].success;
exports.successSchema = successSchema;
const exitSchemaCache = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Schema/Serializable/exitSchemaCache", () => new WeakMap());
/**
 * @since 3.10.0
 * @category accessor
 */
const exitSchema = self => {
  const proto = Object.getPrototypeOf(self);
  if (!(symbolWithResult in proto)) {
    return Exit({
      failure: failureSchema(self),
      success: successSchema(self),
      defect: Defect
    });
  }
  let schema = exitSchemaCache.get(proto);
  if (schema === undefined) {
    schema = Exit({
      failure: failureSchema(self),
      success: successSchema(self),
      defect: Defect
    });
    exitSchemaCache.set(proto, schema);
  }
  return schema;
};
/**
 * @since 3.10.0
 * @category encoding
 */
exports.exitSchema = exitSchema;
const serializeFailure = exports.serializeFailure = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => encode(self[symbolWithResult].failure)(value));
/**
 * @since 3.10.0
 * @category decoding
 */
const deserializeFailure = exports.deserializeFailure = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => decodeUnknown(self[symbolWithResult].failure)(value));
/**
 * @since 3.10.0
 * @category encoding
 */
const serializeSuccess = exports.serializeSuccess = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => encode(self[symbolWithResult].success)(value));
/**
 * @since 3.10.0
 * @category decoding
 */
const deserializeSuccess = exports.deserializeSuccess = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => decodeUnknown(self[symbolWithResult].success)(value));
/**
 * @since 3.10.0
 * @category encoding
 */
const serializeExit = exports.serializeExit = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => encode(exitSchema(self))(value));
/**
 * @since 3.10.0
 * @category decoding
 */
const deserializeExit = exports.deserializeExit = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => decodeUnknown(exitSchema(self))(value));
/**
 * @since 3.10.0
 */
const asSerializableWithResult = procedure => procedure;
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyRequest extends Schema.TaggedRequest<MyRequest>("MyRequest")("MyRequest", {
 *  failure: Schema.String,
 *  success: Schema.Number,
 *  payload: { id: Schema.String }
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
exports.asSerializableWithResult = asSerializableWithResult;
const TaggedRequest = identifier => (tag, options, annotations) => {
  const taggedFields = extendFields({
    _tag: getClassTag(tag)
  }, options.payload);
  return class TaggedRequestClass extends makeClass({
    kind: "TaggedRequest",
    identifier: identifier ?? tag,
    schema: Struct(taggedFields),
    fields: taggedFields,
    Base: Request.Class,
    annotations
  }) {
    static _tag = tag;
    static success = options.success;
    static failure = options.failure;
    get [symbolSerializable]() {
      return this.constructor;
    }
    get [symbolWithResult]() {
      return {
        failure: options.failure,
        success: options.success
      };
    }
  };
};
// -------------------------------------------------------------------------------------------------
// Equivalence compiler
// -------------------------------------------------------------------------------------------------
/**
 * Given a schema `Schema<A, I, R>`, returns an `Equivalence` instance for `A`.
 *
 * @category Equivalence
 * @since 3.10.0
 */
exports.TaggedRequest = TaggedRequest;
const equivalence = schema => go(schema.ast, []);
exports.equivalence = equivalence;
const getEquivalenceAnnotation = /*#__PURE__*/AST.getAnnotation(AST.EquivalenceAnnotationId);
const go = (ast, path) => {
  const hook = getEquivalenceAnnotation(ast);
  if (option_.isSome(hook)) {
    switch (ast._tag) {
      case "Declaration":
        return hook.value(...ast.typeParameters.map(tp => go(tp, path)));
      case "Refinement":
        return hook.value(go(ast.from, path));
      default:
        return hook.value();
    }
  }
  switch (ast._tag) {
    case "NeverKeyword":
      throw new Error(errors_.getEquivalenceUnsupportedErrorMessage(ast, path));
    case "Transformation":
      return go(ast.to, path);
    case "Declaration":
    case "Literal":
    case "StringKeyword":
    case "TemplateLiteral":
    case "UniqueSymbol":
    case "SymbolKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "Enums":
    case "ObjectKeyword":
      return Equal.equals;
    case "Refinement":
      return go(ast.from, path);
    case "Suspend":
      {
        const get = util_.memoizeThunk(() => go(ast.f(), path));
        return (a, b) => get()(a, b);
      }
    case "TupleType":
      {
        const elements = ast.elements.map((element, i) => go(element.type, path.concat(i)));
        const rest = ast.rest.map(annotatedAST => go(annotatedAST.type, path));
        return Equivalence.make((a, b) => {
          if (!Array.isArray(a) || !Array.isArray(b)) {
            return false;
          }
          const len = a.length;
          if (len !== b.length) {
            return false;
          }
          // ---------------------------------------------
          // handle elements
          // ---------------------------------------------
          let i = 0;
          for (; i < Math.min(len, ast.elements.length); i++) {
            if (!elements[i](a[i], b[i])) {
              return false;
            }
          }
          // ---------------------------------------------
          // handle rest element
          // ---------------------------------------------
          if (array_.isNonEmptyReadonlyArray(rest)) {
            const [head, ...tail] = rest;
            for (; i < len - tail.length; i++) {
              if (!head(a[i], b[i])) {
                return false;
              }
            }
            // ---------------------------------------------
            // handle post rest elements
            // ---------------------------------------------
            for (let j = 0; j < tail.length; j++) {
              i += j;
              if (!tail[j](a[i], b[i])) {
                return false;
              }
            }
          }
          return true;
        });
      }
    case "TypeLiteral":
      {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          return Equal.equals;
        }
        const propertySignatures = ast.propertySignatures.map(ps => go(ps.type, path.concat(ps.name)));
        const indexSignatures = ast.indexSignatures.map(is => go(is.type, path));
        return Equivalence.make((a, b) => {
          if (!Predicate.isRecord(a) || !Predicate.isRecord(b)) {
            return false;
          }
          const aStringKeys = Object.keys(a);
          const aSymbolKeys = Object.getOwnPropertySymbols(a);
          // ---------------------------------------------
          // handle property signatures
          // ---------------------------------------------
          for (let i = 0; i < propertySignatures.length; i++) {
            const ps = ast.propertySignatures[i];
            const name = ps.name;
            const aHas = Object.prototype.hasOwnProperty.call(a, name);
            const bHas = Object.prototype.hasOwnProperty.call(b, name);
            if (ps.isOptional) {
              if (aHas !== bHas) {
                return false;
              }
            }
            if (aHas && bHas && !propertySignatures[i](a[name], b[name])) {
              return false;
            }
          }
          // ---------------------------------------------
          // handle index signatures
          // ---------------------------------------------
          let bSymbolKeys;
          let bStringKeys;
          for (let i = 0; i < indexSignatures.length; i++) {
            const is = ast.indexSignatures[i];
            const encodedParameter = AST.getEncodedParameter(is.parameter);
            const isSymbol = AST.isSymbolKeyword(encodedParameter);
            if (isSymbol) {
              bSymbolKeys = bSymbolKeys || Object.getOwnPropertySymbols(b);
              if (aSymbolKeys.length !== bSymbolKeys.length) {
                return false;
              }
            } else {
              bStringKeys = bStringKeys || Object.keys(b);
              if (aStringKeys.length !== bStringKeys.length) {
                return false;
              }
            }
            const aKeys = isSymbol ? aSymbolKeys : aStringKeys;
            for (let j = 0; j < aKeys.length; j++) {
              const key = aKeys[j];
              if (!Object.prototype.hasOwnProperty.call(b, key) || !indexSignatures[i](a[key], b[key])) {
                return false;
              }
            }
          }
          return true;
        });
      }
    case "Union":
      {
        const searchTree = ParseResult.getSearchTree(ast.types, true);
        const ownKeys = Reflect.ownKeys(searchTree.keys);
        const len = ownKeys.length;
        return Equivalence.make((a, b) => {
          let candidates = [];
          if (len > 0 && Predicate.isRecordOrArray(a)) {
            for (let i = 0; i < len; i++) {
              const name = ownKeys[i];
              const buckets = searchTree.keys[name].buckets;
              if (Object.prototype.hasOwnProperty.call(a, name)) {
                const literal = String(a[name]);
                if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                  candidates = candidates.concat(buckets[literal]);
                }
              }
            }
          }
          if (searchTree.otherwise.length > 0) {
            candidates = candidates.concat(searchTree.otherwise);
          }
          const tuples = candidates.map(ast => [go(ast, path), ParseResult.is({
            ast
          })]);
          for (let i = 0; i < tuples.length; i++) {
            const [equivalence, is] = tuples[i];
            if (is(a) && is(b)) {
              if (equivalence(a, b)) {
                return true;
              }
            }
          }
          return false;
        });
      }
  }
};
const SymbolStruct = /*#__PURE__*/TaggedStruct("symbol", {
  key: String$
}).annotations({
  description: "an object to be decoded into a globally shared symbol"
});
const SymbolFromStruct = /*#__PURE__*/transformOrFail(SymbolStruct, SymbolFromSelf, {
  strict: true,
  decode: i => decodeSymbol(i.key),
  encode: (a, _, ast) => ParseResult.map(encodeSymbol(a, ast), key => SymbolStruct.make({
    key
  }))
});
/** @ignore */
class PropertyKey$ extends /*#__PURE__*/Union(String$, Number$, SymbolFromStruct).annotations({
  identifier: "PropertyKey"
}) {}
exports.PropertyKey = PropertyKey$;
/**
 * @category ArrayFormatter
 * @since 3.12.5
 */
class ArrayFormatterIssue extends /*#__PURE__*/Struct({
  _tag: propertySignature(Literal("Pointer", "Unexpected", "Missing", "Composite", "Refinement", "Transformation", "Type", "Forbidden")).annotations({
    description: "The tag identifying the type of parse issue"
  }),
  path: propertySignature(Array$(PropertyKey$)).annotations({
    description: "The path to the property where the issue occurred"
  }),
  message: propertySignature(String$).annotations({
    description: "A descriptive message explaining the issue"
  })
}).annotations({
  identifier: "ArrayFormatterIssue",
  description: "Represents an issue returned by the ArrayFormatter formatter"
}) {}
exports.ArrayFormatterIssue = ArrayFormatterIssue;
//# sourceMappingURL=Schema.js.map