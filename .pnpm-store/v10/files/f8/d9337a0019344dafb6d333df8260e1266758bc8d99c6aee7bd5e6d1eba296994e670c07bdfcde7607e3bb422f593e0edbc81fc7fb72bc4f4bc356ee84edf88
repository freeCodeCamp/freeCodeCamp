/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js";
import * as Cause from "./Cause.js";
import { TaggedError } from "./Data.js";
import * as Effect from "./Effect.js";
import * as Either from "./Either.js";
import * as Exit from "./Exit.js";
import { dual } from "./Function.js";
import { globalValue } from "./GlobalValue.js";
import * as Inspectable from "./Inspectable.js";
import * as util_ from "./internal/schema/util.js";
import * as Option from "./Option.js";
import * as Predicate from "./Predicate.js";
import * as Scheduler from "./Scheduler.js";
import * as AST from "./SchemaAST.js";
/**
 * @category model
 * @since 3.10.0
 */
export class Pointer {
  path;
  actual;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Pointer";
  constructor(path, actual, issue) {
    this.path = path;
    this.actual = actual;
    this.issue = issue;
  }
}
/**
 * Error that occurs when an unexpected key or index is present.
 *
 * @category model
 * @since 3.10.0
 */
export class Unexpected {
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Unexpected";
  constructor(actual,
  /**
   * @since 3.10.0
   */
  message) {
    this.actual = actual;
    this.message = message;
  }
}
/**
 * Error that occurs when a required key or index is missing.
 *
 * @category model
 * @since 3.10.0
 */
export class Missing {
  ast;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Missing";
  /**
   * @since 3.10.0
   */
  actual = undefined;
  constructor(
  /**
   * @since 3.10.0
   */
  ast,
  /**
   * @since 3.10.0
   */
  message) {
    this.ast = ast;
    this.message = message;
  }
}
/**
 * Error that contains multiple issues.
 *
 * @category model
 * @since 3.10.0
 */
export class Composite {
  ast;
  actual;
  issues;
  output;
  /**
   * @since 3.10.0
   */
  _tag = "Composite";
  constructor(ast, actual, issues, output) {
    this.ast = ast;
    this.actual = actual;
    this.issues = issues;
    this.output = output;
  }
}
/**
 * Error that occurs when a refinement has an error.
 *
 * @category model
 * @since 3.10.0
 */
export class Refinement {
  ast;
  actual;
  kind;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Refinement";
  constructor(ast, actual, kind, issue) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
}
/**
 * Error that occurs when a transformation has an error.
 *
 * @category model
 * @since 3.10.0
 */
export class Transformation {
  ast;
  actual;
  kind;
  issue;
  /**
   * @since 3.10.0
   */
  _tag = "Transformation";
  constructor(ast, actual, kind, issue) {
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
}
/**
 * The `Type` variant of the `ParseIssue` type represents an error that occurs when the `actual` value is not of the expected type.
 * The `ast` field specifies the expected type, and the `actual` field contains the value that caused the error.
 *
 * @category model
 * @since 3.10.0
 */
export class Type {
  ast;
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Type";
  constructor(ast, actual, message) {
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
}
/**
 * The `Forbidden` variant of the `ParseIssue` type represents a forbidden operation, such as when encountering an Effect that is not allowed to execute (e.g., using `runSync`).
 *
 * @category model
 * @since 3.10.0
 */
export class Forbidden {
  ast;
  actual;
  message;
  /**
   * @since 3.10.0
   */
  _tag = "Forbidden";
  constructor(ast, actual, message) {
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
}
/**
 * @category type id
 * @since 3.10.0
 */
export const ParseErrorTypeId = /*#__PURE__*/Symbol.for("effect/Schema/ParseErrorTypeId");
/**
 * @since 3.10.0
 */
export const isParseError = u => Predicate.hasProperty(u, ParseErrorTypeId);
/**
 * @since 3.10.0
 */
export class ParseError extends /*#__PURE__*/TaggedError("ParseError") {
  /**
   * @since 3.10.0
   */
  [ParseErrorTypeId] = ParseErrorTypeId;
  get message() {
    return this.toString();
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return TreeFormatter.formatIssueSync(this.issue);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    };
  }
  /**
   * @since 3.10.0
   */
  [Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const parseError = issue => new ParseError({
  issue
});
/**
 * @category constructors
 * @since 3.10.0
 */
export const succeed = Either.right;
/**
 * @category constructors
 * @since 3.10.0
 */
export const fail = Either.left;
const _try = Either.try;
export {
/**
 * @category constructors
 * @since 3.10.0
 */
_try as try };
/**
 * @category constructors
 * @since 3.10.0
 */
export const fromOption = Either.fromOption;
const isEither = Either.isEither;
/**
 * @category optimisation
 * @since 3.10.0
 */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  return isEither(self) ? Either.match(self, {
    onLeft: Either.left,
    onRight: f
  }) : Effect.flatMap(self, f);
});
/**
 * @category optimisation
 * @since 3.10.0
 */
export const map = /*#__PURE__*/dual(2, (self, f) => {
  return isEither(self) ? Either.map(self, f) : Effect.map(self, f);
});
/**
 * @category optimisation
 * @since 3.10.0
 */
export const mapError = /*#__PURE__*/dual(2, (self, f) => {
  return isEither(self) ? Either.mapLeft(self, f) : Effect.mapError(self, f);
});
// TODO(4.0): remove
/**
 * @category optimisation
 * @since 3.10.0
 */
export const eitherOrUndefined = self => {
  if (isEither(self)) {
    return self;
  }
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export const mapBoth = /*#__PURE__*/dual(2, (self, options) => {
  return isEither(self) ? Either.mapBoth(self, {
    onLeft: options.onFailure,
    onRight: options.onSuccess
  }) : Effect.mapBoth(self, options);
});
/**
 * @category optimisation
 * @since 3.10.0
 */
export const orElse = /*#__PURE__*/dual(2, (self, f) => {
  return isEither(self) ? Either.match(self, {
    onLeft: f,
    onRight: Either.right
  }) : Effect.catchAll(self, f);
});
/** @internal */
export const mergeInternalOptions = (options, overrideOptions) => {
  if (overrideOptions === undefined || Predicate.isNumber(overrideOptions)) {
    return options;
  }
  if (options === undefined) {
    return overrideOptions;
  }
  return {
    ...options,
    ...overrideOptions
  };
};
const getEither = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (u, overrideOptions) => parser(u, mergeInternalOptions(options, overrideOptions));
};
const getSync = (ast, isDecoding, options) => {
  const parser = getEither(ast, isDecoding, options);
  return (input, overrideOptions) => Either.getOrThrowWith(parser(input, overrideOptions), parseError);
};
/** @internal */
export const getOption = (ast, isDecoding, options) => {
  const parser = getEither(ast, isDecoding, options);
  return (input, overrideOptions) => Option.getRight(parser(input, overrideOptions));
};
const getEffect = (ast, isDecoding, options) => {
  const parser = goMemo(ast, isDecoding);
  return (input, overrideOptions) => parser(input, {
    ...mergeInternalOptions(options, overrideOptions),
    isEffectAllowed: true
  });
};
/**
 * @throws `ParseError`
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownSync = (schema, options) => getSync(schema.ast, true, options);
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownOption = (schema, options) => getOption(schema.ast, true, options);
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownEither = (schema, options) => getEither(schema.ast, true, options);
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknownPromise = (schema, options) => {
  const parser = decodeUnknown(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeUnknown = (schema, options) => getEffect(schema.ast, true, options);
/**
 * @throws `ParseError`
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownSync = (schema, options) => getSync(schema.ast, false, options);
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownOption = (schema, options) => getOption(schema.ast, false, options);
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownEither = (schema, options) => getEither(schema.ast, false, options);
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknownPromise = (schema, options) => {
  const parser = encodeUnknown(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeUnknown = (schema, options) => getEffect(schema.ast, false, options);
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeSync = decodeUnknownSync;
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeOption = decodeUnknownOption;
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodeEither = decodeUnknownEither;
/**
 * @category decoding
 * @since 3.10.0
 */
export const decodePromise = decodeUnknownPromise;
/**
 * @category decoding
 * @since 3.10.0
 */
export const decode = decodeUnknown;
/**
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export const validateSync = (schema, options) => getSync(AST.typeAST(schema.ast), true, options);
/**
 * @category validation
 * @since 3.10.0
 */
export const validateOption = (schema, options) => getOption(AST.typeAST(schema.ast), true, options);
/**
 * @category validation
 * @since 3.10.0
 */
export const validateEither = (schema, options) => getEither(AST.typeAST(schema.ast), true, options);
/**
 * @category validation
 * @since 3.10.0
 */
export const validatePromise = (schema, options) => {
  const parser = validate(schema, options);
  return (u, overrideOptions) => Effect.runPromise(parser(u, overrideOptions));
};
/**
 * @category validation
 * @since 3.10.0
 */
export const validate = (schema, options) => getEffect(AST.typeAST(schema.ast), true, options);
/**
 * By default the option `exact` is set to `true`.
 *
 * @category validation
 * @since 3.10.0
 */
export const is = (schema, options) => {
  const parser = goMemo(AST.typeAST(schema.ast), true);
  return (u, overrideOptions) => Either.isRight(parser(u, {
    exact: true,
    ...mergeInternalOptions(options, overrideOptions)
  }));
};
/**
 * By default the option `exact` is set to `true`.
 *
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export const asserts = (schema, options) => {
  const parser = goMemo(AST.typeAST(schema.ast), true);
  return (u, overrideOptions) => {
    const result = parser(u, {
      exact: true,
      ...mergeInternalOptions(options, overrideOptions)
    });
    if (Either.isLeft(result)) {
      throw parseError(result.left);
    }
  };
};
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeSync = encodeUnknownSync;
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeOption = encodeUnknownOption;
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodeEither = encodeUnknownEither;
/**
 * @category encoding
 * @since 3.10.0
 */
export const encodePromise = encodeUnknownPromise;
/**
 * @category encoding
 * @since 3.10.0
 */
export const encode = encodeUnknown;
const decodeMemoMap = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/ParseResult/decodeMemoMap"), () => new WeakMap());
const encodeMemoMap = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/ParseResult/encodeMemoMap"), () => new WeakMap());
const goMemo = (ast, isDecoding) => {
  const memoMap = isDecoding ? decodeMemoMap : encodeMemoMap;
  const memo = memoMap.get(ast);
  if (memo) {
    return memo;
  }
  const raw = go(ast, isDecoding);
  const parseOptionsAnnotation = AST.getParseOptionsAnnotation(ast);
  const parserWithOptions = Option.isSome(parseOptionsAnnotation) ? (i, options) => raw(i, mergeInternalOptions(options, parseOptionsAnnotation.value)) : raw;
  const decodingFallbackAnnotation = AST.getDecodingFallbackAnnotation(ast);
  const parser = isDecoding && Option.isSome(decodingFallbackAnnotation) ? (i, options) => handleForbidden(orElse(parserWithOptions(i, options), decodingFallbackAnnotation.value), ast, i, options) : parserWithOptions;
  memoMap.set(ast, parser);
  return parser;
};
const getConcurrency = ast => Option.getOrUndefined(AST.getConcurrencyAnnotation(ast));
const getBatching = ast => Option.getOrUndefined(AST.getBatchingAnnotation(ast));
const go = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Refinement":
      {
        if (isDecoding) {
          const from = goMemo(ast.from, true);
          return (i, options) => {
            options = options ?? AST.defaultParseOption;
            const allErrors = options?.errors === "all";
            const result = flatMap(orElse(from(i, options), ef => {
              const issue = new Refinement(ast, i, "From", ef);
              if (allErrors && AST.hasStableFilter(ast) && isComposite(ef)) {
                return Option.match(ast.filter(i, options, ast), {
                  onNone: () => Either.left(issue),
                  onSome: ep => Either.left(new Composite(ast, i, [issue, new Refinement(ast, i, "Predicate", ep)]))
                });
              }
              return Either.left(issue);
            }), a => Option.match(ast.filter(a, options, ast), {
              onNone: () => Either.right(a),
              onSome: ep => Either.left(new Refinement(ast, i, "Predicate", ep))
            }));
            return handleForbidden(result, ast, i, options);
          };
        } else {
          const from = goMemo(AST.typeAST(ast), true);
          const to = goMemo(dropRightRefinement(ast.from), false);
          return (i, options) => handleForbidden(flatMap(from(i, options), a => to(a, options)), ast, i, options);
        }
      }
    case "Transformation":
      {
        const transform = getFinalTransformation(ast.transformation, isDecoding);
        const from = isDecoding ? goMemo(ast.from, true) : goMemo(ast.to, false);
        const to = isDecoding ? goMemo(ast.to, true) : goMemo(ast.from, false);
        return (i, options) => handleForbidden(flatMap(mapError(from(i, options), e => new Transformation(ast, i, isDecoding ? "Encoded" : "Type", e)), a => flatMap(mapError(transform(a, options ?? AST.defaultParseOption, ast, i), e => new Transformation(ast, i, "Transformation", e)), i2 => mapError(to(i2, options), e => new Transformation(ast, i, isDecoding ? "Type" : "Encoded", e)))), ast, i, options);
      }
    case "Declaration":
      {
        const parse = isDecoding ? ast.decodeUnknown(...ast.typeParameters) : ast.encodeUnknown(...ast.typeParameters);
        return (i, options) => handleForbidden(parse(i, options ?? AST.defaultParseOption, ast), ast, i, options);
      }
    case "Literal":
      return fromRefinement(ast, u => u === ast.literal);
    case "UniqueSymbol":
      return fromRefinement(ast, u => u === ast.symbol);
    case "UndefinedKeyword":
      return fromRefinement(ast, Predicate.isUndefined);
    case "NeverKeyword":
      return fromRefinement(ast, Predicate.isNever);
    case "UnknownKeyword":
    case "AnyKeyword":
    case "VoidKeyword":
      return Either.right;
    case "StringKeyword":
      return fromRefinement(ast, Predicate.isString);
    case "NumberKeyword":
      return fromRefinement(ast, Predicate.isNumber);
    case "BooleanKeyword":
      return fromRefinement(ast, Predicate.isBoolean);
    case "BigIntKeyword":
      return fromRefinement(ast, Predicate.isBigInt);
    case "SymbolKeyword":
      return fromRefinement(ast, Predicate.isSymbol);
    case "ObjectKeyword":
      return fromRefinement(ast, Predicate.isObject);
    case "Enums":
      return fromRefinement(ast, u => ast.enums.some(([_, value]) => value === u));
    case "TemplateLiteral":
      {
        const regex = AST.getTemplateLiteralRegExp(ast);
        return fromRefinement(ast, u => Predicate.isString(u) && regex.test(u));
      }
    case "TupleType":
      {
        const elements = ast.elements.map(e => goMemo(e.type, isDecoding));
        const rest = ast.rest.map(annotatedAST => goMemo(annotatedAST.type, isDecoding));
        let requiredTypes = ast.elements.filter(e => !e.isOptional);
        if (ast.rest.length > 0) {
          requiredTypes = requiredTypes.concat(ast.rest.slice(1));
        }
        const requiredLen = requiredTypes.length;
        const expectedIndexes = ast.elements.length > 0 ? ast.elements.map((_, i) => i).join(" | ") : "never";
        const concurrency = getConcurrency(ast);
        const batching = getBatching(ast);
        return (input, options) => {
          if (!Arr.isArray(input)) {
            return Either.left(new Type(ast, input));
          }
          const allErrors = options?.errors === "all";
          const es = [];
          let stepKey = 0;
          const output = [];
          // ---------------------------------------------
          // handle missing indexes
          // ---------------------------------------------
          const len = input.length;
          for (let i = len; i <= requiredLen - 1; i++) {
            const e = new Pointer(i, input, new Missing(requiredTypes[i - len]));
            if (allErrors) {
              es.push([stepKey++, e]);
              continue;
            } else {
              return Either.left(new Composite(ast, input, e, output));
            }
          }
          // ---------------------------------------------
          // handle excess indexes
          // ---------------------------------------------
          if (ast.rest.length === 0) {
            for (let i = ast.elements.length; i <= len - 1; i++) {
              const e = new Pointer(i, input, new Unexpected(input[i], `is unexpected, expected: ${expectedIndexes}`));
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return Either.left(new Composite(ast, input, e, output));
              }
            }
          }
          let i = 0;
          let queue = undefined;
          // ---------------------------------------------
          // handle elements
          // ---------------------------------------------
          for (; i < elements.length; i++) {
            if (len < i + 1) {
              if (ast.elements[i].isOptional) {
                // the input element is missing
                continue;
              }
            } else {
              const parser = elements[i];
              const te = parser(input[i], options);
              if (isEither(te)) {
                if (Either.isLeft(te)) {
                  // the input element is present but is not valid
                  const e = new Pointer(i, input, te.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                  }
                }
                output.push([stepKey++, te.right]);
              } else {
                const nk = stepKey++;
                const index = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es,
                  output
                }) => Effect.flatMap(Effect.either(te), t => {
                  if (Either.isLeft(t)) {
                    // the input element is present but is not valid
                    const e = new Pointer(index, input, t.left);
                    if (allErrors) {
                      es.push([nk, e]);
                      return Effect.void;
                    } else {
                      return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                    }
                  }
                  output.push([nk, t.right]);
                  return Effect.void;
                }));
              }
            }
          }
          // ---------------------------------------------
          // handle rest element
          // ---------------------------------------------
          if (Arr.isNonEmptyReadonlyArray(rest)) {
            const [head, ...tail] = rest;
            for (; i < len - tail.length; i++) {
              const te = head(input[i], options);
              if (isEither(te)) {
                if (Either.isLeft(te)) {
                  const e = new Pointer(i, input, te.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                  }
                } else {
                  output.push([stepKey++, te.right]);
                }
              } else {
                const nk = stepKey++;
                const index = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es,
                  output
                }) => Effect.flatMap(Effect.either(te), t => {
                  if (Either.isLeft(t)) {
                    const e = new Pointer(index, input, t.left);
                    if (allErrors) {
                      es.push([nk, e]);
                      return Effect.void;
                    } else {
                      return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                    }
                  } else {
                    output.push([nk, t.right]);
                    return Effect.void;
                  }
                }));
              }
            }
            // ---------------------------------------------
            // handle post rest elements
            // ---------------------------------------------
            for (let j = 0; j < tail.length; j++) {
              const index = i + j;
              if (len < index + 1) {
                continue;
              } else {
                const te = tail[j](input[index], options);
                if (isEither(te)) {
                  if (Either.isLeft(te)) {
                    // the input element is present but is not valid
                    const e = new Pointer(index, input, te.left);
                    if (allErrors) {
                      es.push([stepKey++, e]);
                      continue;
                    } else {
                      return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                    }
                  }
                  output.push([stepKey++, te.right]);
                } else {
                  const nk = stepKey++;
                  if (!queue) {
                    queue = [];
                  }
                  queue.push(({
                    es,
                    output
                  }) => Effect.flatMap(Effect.either(te), t => {
                    if (Either.isLeft(t)) {
                      // the input element is present but is not valid
                      const e = new Pointer(index, input, t.left);
                      if (allErrors) {
                        es.push([nk, e]);
                        return Effect.void;
                      } else {
                        return Either.left(new Composite(ast, input, e, sortByIndex(output)));
                      }
                    }
                    output.push([nk, t.right]);
                    return Effect.void;
                  }));
                }
              }
            }
          }
          // ---------------------------------------------
          // compute result
          // ---------------------------------------------
          const computeResult = ({
            es,
            output
          }) => Arr.isNonEmptyArray(es) ? Either.left(new Composite(ast, input, sortByIndex(es), sortByIndex(output))) : Either.right(sortByIndex(output));
          if (queue && queue.length > 0) {
            const cqueue = queue;
            return Effect.suspend(() => {
              const state = {
                es: Arr.copy(es),
                output: Arr.copy(output)
              };
              return Effect.flatMap(Effect.forEach(cqueue, f => f(state), {
                concurrency,
                batching,
                discard: true
              }), () => computeResult(state));
            });
          }
          return computeResult({
            output,
            es
          });
        };
      }
    case "TypeLiteral":
      {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          return fromRefinement(ast, Predicate.isNotNullable);
        }
        const propertySignatures = [];
        const expectedKeysMap = {};
        const expectedKeys = [];
        for (const ps of ast.propertySignatures) {
          propertySignatures.push([goMemo(ps.type, isDecoding), ps]);
          expectedKeysMap[ps.name] = null;
          expectedKeys.push(ps.name);
        }
        const indexSignatures = ast.indexSignatures.map(is => [goMemo(is.parameter, isDecoding), goMemo(is.type, isDecoding), is.parameter]);
        const expectedAST = AST.Union.make(ast.indexSignatures.map(is => is.parameter).concat(expectedKeys.map(key => Predicate.isSymbol(key) ? new AST.UniqueSymbol(key) : new AST.Literal(key))));
        const expected = goMemo(expectedAST, isDecoding);
        const concurrency = getConcurrency(ast);
        const batching = getBatching(ast);
        return (input, options) => {
          if (!Predicate.isRecord(input)) {
            return Either.left(new Type(ast, input));
          }
          const allErrors = options?.errors === "all";
          const es = [];
          let stepKey = 0;
          // ---------------------------------------------
          // handle excess properties
          // ---------------------------------------------
          const onExcessPropertyError = options?.onExcessProperty === "error";
          const onExcessPropertyPreserve = options?.onExcessProperty === "preserve";
          const output = {};
          let inputKeys;
          if (onExcessPropertyError || onExcessPropertyPreserve) {
            inputKeys = Reflect.ownKeys(input);
            for (const key of inputKeys) {
              const te = expected(key, options);
              if (isEither(te) && Either.isLeft(te)) {
                // key is unexpected
                if (onExcessPropertyError) {
                  const e = new Pointer(key, input, new Unexpected(input[key], `is unexpected, expected: ${String(expectedAST)}`));
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return Either.left(new Composite(ast, input, e, output));
                  }
                } else {
                  // preserve key
                  output[key] = input[key];
                }
              }
            }
          }
          let queue = undefined;
          const isExact = options?.exact === true;
          for (let i = 0; i < propertySignatures.length; i++) {
            const ps = propertySignatures[i][1];
            const name = ps.name;
            const hasKey = Object.prototype.hasOwnProperty.call(input, name);
            if (!hasKey) {
              if (ps.isOptional) {
                continue;
              } else if (isExact) {
                const e = new Pointer(name, input, new Missing(ps));
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return Either.left(new Composite(ast, input, e, output));
                }
              }
            }
            const parser = propertySignatures[i][0];
            const te = parser(input[name], options);
            if (isEither(te)) {
              if (Either.isLeft(te)) {
                const e = new Pointer(name, input, hasKey ? te.left : new Missing(ps));
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return Either.left(new Composite(ast, input, e, output));
                }
              }
              output[name] = te.right;
            } else {
              const nk = stepKey++;
              const index = name;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es,
                output
              }) => Effect.flatMap(Effect.either(te), t => {
                if (Either.isLeft(t)) {
                  const e = new Pointer(index, input, hasKey ? t.left : new Missing(ps));
                  if (allErrors) {
                    es.push([nk, e]);
                    return Effect.void;
                  } else {
                    return Either.left(new Composite(ast, input, e, output));
                  }
                }
                output[index] = t.right;
                return Effect.void;
              }));
            }
          }
          // ---------------------------------------------
          // handle index signatures
          // ---------------------------------------------
          for (let i = 0; i < indexSignatures.length; i++) {
            const indexSignature = indexSignatures[i];
            const parameter = indexSignature[0];
            const type = indexSignature[1];
            const keys = util_.getKeysForIndexSignature(input, indexSignature[2]);
            for (const key of keys) {
              // ---------------------------------------------
              // handle keys
              // ---------------------------------------------
              const keu = parameter(key, options);
              if (isEither(keu) && Either.isRight(keu)) {
                // ---------------------------------------------
                // handle values
                // ---------------------------------------------
                const vpr = type(input[key], options);
                if (isEither(vpr)) {
                  if (Either.isLeft(vpr)) {
                    const e = new Pointer(key, input, vpr.left);
                    if (allErrors) {
                      es.push([stepKey++, e]);
                      continue;
                    } else {
                      return Either.left(new Composite(ast, input, e, output));
                    }
                  } else {
                    if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                      output[key] = vpr.right;
                    }
                  }
                } else {
                  const nk = stepKey++;
                  const index = key;
                  if (!queue) {
                    queue = [];
                  }
                  queue.push(({
                    es,
                    output
                  }) => Effect.flatMap(Effect.either(vpr), tv => {
                    if (Either.isLeft(tv)) {
                      const e = new Pointer(index, input, tv.left);
                      if (allErrors) {
                        es.push([nk, e]);
                        return Effect.void;
                      } else {
                        return Either.left(new Composite(ast, input, e, output));
                      }
                    } else {
                      if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                        output[key] = tv.right;
                      }
                      return Effect.void;
                    }
                  }));
                }
              }
            }
          }
          // ---------------------------------------------
          // compute result
          // ---------------------------------------------
          const computeResult = ({
            es,
            output
          }) => {
            if (Arr.isNonEmptyArray(es)) {
              return Either.left(new Composite(ast, input, sortByIndex(es), output));
            }
            if (options?.propertyOrder === "original") {
              // preserve input keys order
              const keys = inputKeys || Reflect.ownKeys(input);
              for (const name of expectedKeys) {
                if (keys.indexOf(name) === -1) {
                  keys.push(name);
                }
              }
              const out = {};
              for (const key of keys) {
                if (Object.prototype.hasOwnProperty.call(output, key)) {
                  out[key] = output[key];
                }
              }
              return Either.right(out);
            }
            return Either.right(output);
          };
          if (queue && queue.length > 0) {
            const cqueue = queue;
            return Effect.suspend(() => {
              const state = {
                es: Arr.copy(es),
                output: Object.assign({}, output)
              };
              return Effect.flatMap(Effect.forEach(cqueue, f => f(state), {
                concurrency,
                batching,
                discard: true
              }), () => computeResult(state));
            });
          }
          return computeResult({
            es,
            output
          });
        };
      }
    case "Union":
      {
        const searchTree = getSearchTree(ast.types, isDecoding);
        const ownKeys = Reflect.ownKeys(searchTree.keys);
        const ownKeysLen = ownKeys.length;
        const astTypesLen = ast.types.length;
        const map = new Map();
        for (let i = 0; i < astTypesLen; i++) {
          map.set(ast.types[i], goMemo(ast.types[i], isDecoding));
        }
        const concurrency = getConcurrency(ast) ?? 1;
        const batching = getBatching(ast);
        return (input, options) => {
          const es = [];
          let stepKey = 0;
          let candidates = [];
          if (ownKeysLen > 0) {
            if (Predicate.isRecordOrArray(input)) {
              for (let i = 0; i < ownKeysLen; i++) {
                const name = ownKeys[i];
                const buckets = searchTree.keys[name].buckets;
                // for each property that should contain a literal, check if the input contains that property
                if (Object.prototype.hasOwnProperty.call(input, name)) {
                  const literal = String(input[name]);
                  // check that the value obtained from the input for the property corresponds to an existing bucket
                  if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                    // retrive the minimal set of candidates for decoding
                    candidates = candidates.concat(buckets[literal]);
                  } else {
                    const {
                      candidates,
                      literals
                    } = searchTree.keys[name];
                    const literalsUnion = AST.Union.make(literals);
                    const errorAst = candidates.length === astTypesLen ? new AST.TypeLiteral([new AST.PropertySignature(name, literalsUnion, false, true)], []) : AST.Union.make(candidates);
                    es.push([stepKey++, new Composite(errorAst, input, new Pointer(name, input, new Type(literalsUnion, input[name])))]);
                  }
                } else {
                  const {
                    candidates,
                    literals
                  } = searchTree.keys[name];
                  const fakePropertySignature = new AST.PropertySignature(name, AST.Union.make(literals), false, true);
                  const errorAst = candidates.length === astTypesLen ? new AST.TypeLiteral([fakePropertySignature], []) : AST.Union.make(candidates);
                  es.push([stepKey++, new Composite(errorAst, input, new Pointer(name, input, new Missing(fakePropertySignature)))]);
                }
              }
            } else {
              const errorAst = searchTree.candidates.length === astTypesLen ? ast : AST.Union.make(searchTree.candidates);
              es.push([stepKey++, new Type(errorAst, input)]);
            }
          }
          if (searchTree.otherwise.length > 0) {
            candidates = candidates.concat(searchTree.otherwise);
          }
          let queue = undefined;
          for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i];
            const pr = map.get(candidate)(input, options);
            // the members of a union are ordered based on which one should be decoded first,
            // therefore if one member has added a task, all subsequent members must
            // also add a task to the queue even if they are synchronous
            if (isEither(pr) && (!queue || queue.length === 0)) {
              if (Either.isRight(pr)) {
                return pr;
              } else {
                es.push([stepKey++, pr.left]);
              }
            } else {
              const nk = stepKey++;
              if (!queue) {
                queue = [];
              }
              queue.push(state => Effect.suspend(() => {
                if ("finalResult" in state) {
                  return Effect.void;
                } else {
                  return Effect.flatMap(Effect.either(pr), t => {
                    if (Either.isRight(t)) {
                      state.finalResult = t;
                    } else {
                      state.es.push([nk, t.left]);
                    }
                    return Effect.void;
                  });
                }
              }));
            }
          }
          // ---------------------------------------------
          // compute result
          // ---------------------------------------------
          const computeResult = es => Arr.isNonEmptyArray(es) ? es.length === 1 && es[0][1]._tag === "Type" ? Either.left(es[0][1]) : Either.left(new Composite(ast, input, sortByIndex(es))) :
          // this should never happen
          Either.left(new Type(ast, input));
          if (queue && queue.length > 0) {
            const cqueue = queue;
            return Effect.suspend(() => {
              const state = {
                es: Arr.copy(es)
              };
              return Effect.flatMap(Effect.forEach(cqueue, f => f(state), {
                concurrency,
                batching,
                discard: true
              }), () => {
                if ("finalResult" in state) {
                  return state.finalResult;
                }
                return computeResult(state.es);
              });
            });
          }
          return computeResult(es);
        };
      }
    case "Suspend":
      {
        const get = util_.memoizeThunk(() => goMemo(ast.f(), isDecoding));
        return (a, options) => get()(a, options);
      }
  }
};
const fromRefinement = (ast, refinement) => u => refinement(u) ? Either.right(u) : Either.left(new Type(ast, u));
/** @internal */
export const getLiterals = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Declaration":
      {
        const annotation = AST.getSurrogateAnnotation(ast);
        if (Option.isSome(annotation)) {
          return getLiterals(annotation.value, isDecoding);
        }
        break;
      }
    case "TypeLiteral":
      {
        const out = [];
        for (let i = 0; i < ast.propertySignatures.length; i++) {
          const propertySignature = ast.propertySignatures[i];
          const type = isDecoding ? AST.encodedAST(propertySignature.type) : AST.typeAST(propertySignature.type);
          if (AST.isLiteral(type) && !propertySignature.isOptional) {
            out.push([propertySignature.name, type]);
          }
        }
        return out;
      }
    case "TupleType":
      {
        const out = [];
        for (let i = 0; i < ast.elements.length; i++) {
          const element = ast.elements[i];
          const type = isDecoding ? AST.encodedAST(element.type) : AST.typeAST(element.type);
          if (AST.isLiteral(type) && !element.isOptional) {
            out.push([i, type]);
          }
        }
        return out;
      }
    case "Refinement":
      return getLiterals(ast.from, isDecoding);
    case "Suspend":
      return getLiterals(ast.f(), isDecoding);
    case "Transformation":
      return getLiterals(isDecoding ? ast.from : ast.to, isDecoding);
  }
  return [];
};
/**
 * The purpose of the algorithm is to narrow down the pool of possible
 * candidates for decoding as much as possible.
 *
 * This function separates the schemas into two groups, `keys` and `otherwise`:
 *
 * - `keys`: the schema has at least one property with a literal value
 * - `otherwise`: the schema has no properties with a literal value
 *
 * If a schema has at least one property with a literal value, so it ends up in
 * `keys`, first a namespace is created for the name of the property containing
 * the literal, and then within this namespace a "bucket" is created for the
 * literal value in which to store all the schemas that have the same property
 * and literal value.
 *
 * @internal
 */
export const getSearchTree = (members, isDecoding) => {
  const keys = {};
  const otherwise = [];
  const candidates = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const tags = getLiterals(member, isDecoding);
    if (tags.length > 0) {
      candidates.push(member);
      for (let j = 0; j < tags.length; j++) {
        const [key, literal] = tags[j];
        const hash = String(literal.literal);
        keys[key] = keys[key] || {
          buckets: {},
          literals: [],
          candidates: []
        };
        const buckets = keys[key].buckets;
        if (Object.prototype.hasOwnProperty.call(buckets, hash)) {
          if (j < tags.length - 1) {
            continue;
          }
          buckets[hash].push(member);
          keys[key].literals.push(literal);
          keys[key].candidates.push(member);
        } else {
          buckets[hash] = [member];
          keys[key].literals.push(literal);
          keys[key].candidates.push(member);
          break;
        }
      }
    } else {
      otherwise.push(member);
    }
  }
  return {
    keys,
    otherwise,
    candidates
  };
};
const dropRightRefinement = ast => AST.isRefinement(ast) ? dropRightRefinement(ast.from) : ast;
const handleForbidden = (effect, ast, actual, options) => {
  // If effects are allowed, return the original effect
  if (options?.isEffectAllowed === true) {
    return effect;
  }
  // If the effect is already an Either, return it directly
  if (isEither(effect)) {
    return effect;
  }
  // Otherwise, attempt to execute the effect synchronously
  const scheduler = new Scheduler.SyncScheduler();
  const fiber = Effect.runFork(effect, {
    scheduler
  });
  scheduler.flush();
  const exit = fiber.unsafePoll();
  if (exit) {
    if (Exit.isSuccess(exit)) {
      // If the effect successfully resolves, wrap the value in a Right
      return Either.right(exit.value);
    }
    const cause = exit.cause;
    if (Cause.isFailType(cause)) {
      // The effect executed synchronously but failed due to a ParseIssue
      return Either.left(cause.error);
    }
    // The effect executed synchronously but failed due to a defect (e.g., a missing dependency)
    return Either.left(new Forbidden(ast, actual, Cause.pretty(cause)));
  }
  // The effect could not be resolved synchronously, meaning it performs async work
  return Either.left(new Forbidden(ast, actual, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
};
const compare = ([a], [b]) => a > b ? 1 : a < b ? -1 : 0;
function sortByIndex(es) {
  return es.sort(compare).map(t => t[1]);
}
// -------------------------------------------------------------------------------------
// transformations interpreter
// -------------------------------------------------------------------------------------
/** @internal */
export const getFinalTransformation = (transformation, isDecoding) => {
  switch (transformation._tag) {
    case "FinalTransformation":
      return isDecoding ? transformation.decode : transformation.encode;
    case "ComposeTransformation":
      return Either.right;
    case "TypeLiteralTransformation":
      return input => {
        let out = Either.right(input);
        // ---------------------------------------------
        // handle property signature transformations
        // ---------------------------------------------
        for (const pst of transformation.propertySignatureTransformations) {
          const [from, to] = isDecoding ? [pst.from, pst.to] : [pst.to, pst.from];
          const transformation = isDecoding ? pst.decode : pst.encode;
          const f = input => {
            const o = transformation(Object.prototype.hasOwnProperty.call(input, from) ? Option.some(input[from]) : Option.none());
            delete input[from];
            if (Option.isSome(o)) {
              input[to] = o.value;
            }
            return input;
          };
          out = map(out, f);
        }
        return out;
      };
  }
};
const makeTree = (value, forest = []) => ({
  value,
  forest
});
/**
 * @category formatting
 * @since 3.10.0
 */
export const TreeFormatter = {
  formatIssue: issue => map(formatTree(issue), drawTree),
  formatIssueSync: issue => {
    const e = TreeFormatter.formatIssue(issue);
    return isEither(e) ? Either.getOrThrow(e) : Effect.runSync(e);
  },
  formatError: error => TreeFormatter.formatIssue(error.issue),
  formatErrorSync: error => TreeFormatter.formatIssueSync(error.issue)
};
const drawTree = tree => tree.value + draw("\n", tree.forest);
const draw = (indentation, forest) => {
  let r = "";
  const len = forest.length;
  let tree;
  for (let i = 0; i < len; i++) {
    tree = forest[i];
    const isLast = i === len - 1;
    r += indentation + (isLast ? "└" : "├") + "─ " + tree.value;
    r += draw(indentation + (len > 1 && !isLast ? "│  " : "   "), tree.forest);
  }
  return r;
};
const formatTransformationKind = kind => {
  switch (kind) {
    case "Encoded":
      return "Encoded side transformation failure";
    case "Transformation":
      return "Transformation process failure";
    case "Type":
      return "Type side transformation failure";
  }
};
const formatRefinementKind = kind => {
  switch (kind) {
    case "From":
      return "From side refinement failure";
    case "Predicate":
      return "Predicate refinement failure";
  }
};
const getAnnotated = issue => "ast" in issue ? Option.some(issue.ast) : Option.none();
// TODO: replace with Either.void when 3.13 lands
const Either_void = /*#__PURE__*/Either.right(undefined);
const getCurrentMessage = issue => getAnnotated(issue).pipe(Option.flatMap(AST.getMessageAnnotation), Option.match({
  onNone: () => Either_void,
  onSome: messageAnnotation => {
    const union = messageAnnotation(issue);
    if (Predicate.isString(union)) {
      return Either.right({
        message: union,
        override: false
      });
    }
    if (Effect.isEffect(union)) {
      return Effect.map(union, message => ({
        message,
        override: false
      }));
    }
    if (Predicate.isString(union.message)) {
      return Either.right({
        message: union.message,
        override: union.override
      });
    }
    return Effect.map(union.message, message => ({
      message,
      override: union.override
    }));
  }
}));
const createParseIssueGuard = tag => issue => issue._tag === tag;
/**
 * Returns `true` if the value is a `Composite`.
 *
 * @category guards
 * @since 3.10.0
 */
export const isComposite = /*#__PURE__*/createParseIssueGuard("Composite");
const isRefinement = /*#__PURE__*/createParseIssueGuard("Refinement");
const isTransformation = /*#__PURE__*/createParseIssueGuard("Transformation");
const getMessage = issue => flatMap(getCurrentMessage(issue), currentMessage => {
  if (currentMessage !== undefined) {
    const useInnerMessage = !currentMessage.override && (isComposite(issue) || isRefinement(issue) && issue.kind === "From" || isTransformation(issue) && issue.kind !== "Transformation");
    return useInnerMessage ? isTransformation(issue) || isRefinement(issue) ? getMessage(issue.issue) : Either_void : Either.right(currentMessage.message);
  }
  return Either_void;
});
const getParseIssueTitleAnnotation = issue => getAnnotated(issue).pipe(Option.flatMap(AST.getParseIssueTitleAnnotation), Option.flatMapNullable(annotation => annotation(issue)), Option.getOrUndefined);
/** @internal */
export function getRefinementExpected(ast) {
  return AST.getDescriptionAnnotation(ast).pipe(Option.orElse(() => AST.getTitleAnnotation(ast)), Option.orElse(() => AST.getAutoTitleAnnotation(ast)), Option.orElse(() => AST.getIdentifierAnnotation(ast)), Option.getOrElse(() => `{ ${ast.from} | filter }`));
}
function getDefaultTypeMessage(issue) {
  if (issue.message !== undefined) {
    return issue.message;
  }
  const expected = AST.isRefinement(issue.ast) ? getRefinementExpected(issue.ast) : String(issue.ast);
  return `Expected ${expected}, actual ${Inspectable.formatUnknown(issue.actual)}`;
}
const formatTypeMessage = issue => map(getMessage(issue), message => message ?? getParseIssueTitleAnnotation(issue) ?? getDefaultTypeMessage(issue));
const getParseIssueTitle = issue => getParseIssueTitleAnnotation(issue) ?? String(issue.ast);
const formatForbiddenMessage = issue => issue.message ?? "is forbidden";
const formatUnexpectedMessage = issue => issue.message ?? "is unexpected";
const formatMissingMessage = issue => {
  const missingMessageAnnotation = AST.getMissingMessageAnnotation(issue.ast);
  if (Option.isSome(missingMessageAnnotation)) {
    const annotation = missingMessageAnnotation.value();
    return Predicate.isString(annotation) ? Either.right(annotation) : annotation;
  }
  return Either.right(issue.message ?? "is missing");
};
const formatTree = issue => {
  switch (issue._tag) {
    case "Type":
      return map(formatTypeMessage(issue), makeTree);
    case "Forbidden":
      return Either.right(makeTree(getParseIssueTitle(issue), [makeTree(formatForbiddenMessage(issue))]));
    case "Unexpected":
      return Either.right(makeTree(formatUnexpectedMessage(issue)));
    case "Missing":
      return map(formatMissingMessage(issue), makeTree);
    case "Transformation":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right(makeTree(message));
        }
        return map(formatTree(issue.issue), tree => makeTree(getParseIssueTitle(issue), [makeTree(formatTransformationKind(issue.kind), [tree])]));
      });
    case "Refinement":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right(makeTree(message));
        }
        return map(formatTree(issue.issue), tree => makeTree(getParseIssueTitle(issue), [makeTree(formatRefinementKind(issue.kind), [tree])]));
      });
    case "Pointer":
      return map(formatTree(issue.issue), tree => makeTree(util_.formatPath(issue.path), [tree]));
    case "Composite":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right(makeTree(message));
        }
        const parseIssueTitle = getParseIssueTitle(issue);
        return util_.isNonEmpty(issue.issues) ? map(Effect.forEach(issue.issues, formatTree), forest => makeTree(parseIssueTitle, forest)) : map(formatTree(issue.issues), tree => makeTree(parseIssueTitle, [tree]));
      });
  }
};
const makeArrayFormatterIssue = (_tag, path, message) => ({
  _tag,
  path,
  message
});
/**
 * @category formatting
 * @since 3.10.0
 */
export const ArrayFormatter = {
  formatIssue: issue => getArrayFormatterIssues(issue, undefined, []),
  formatIssueSync: issue => {
    const e = ArrayFormatter.formatIssue(issue);
    return isEither(e) ? Either.getOrThrow(e) : Effect.runSync(e);
  },
  formatError: error => ArrayFormatter.formatIssue(error.issue),
  formatErrorSync: error => ArrayFormatter.formatIssueSync(error.issue)
};
const getArrayFormatterIssues = (issue, parentTag, path) => {
  const _tag = issue._tag;
  switch (_tag) {
    case "Type":
      return map(formatTypeMessage(issue), message => [makeArrayFormatterIssue(parentTag ?? _tag, path, message)]);
    case "Forbidden":
      return Either.right([makeArrayFormatterIssue(_tag, path, formatForbiddenMessage(issue))]);
    case "Unexpected":
      return Either.right([makeArrayFormatterIssue(_tag, path, formatUnexpectedMessage(issue))]);
    case "Missing":
      return map(formatMissingMessage(issue), message => [makeArrayFormatterIssue(_tag, path, message)]);
    case "Pointer":
      return getArrayFormatterIssues(issue.issue, undefined, path.concat(issue.path));
    case "Composite":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)]);
        }
        return util_.isNonEmpty(issue.issues) ? map(Effect.forEach(issue.issues, issue => getArrayFormatterIssues(issue, undefined, path)), Arr.flatten) : getArrayFormatterIssues(issue.issues, undefined, path);
      });
    case "Refinement":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)]);
        }
        return getArrayFormatterIssues(issue.issue, issue.kind === "Predicate" ? _tag : undefined, path);
      });
    case "Transformation":
      return flatMap(getMessage(issue), message => {
        if (message !== undefined) {
          return Either.right([makeArrayFormatterIssue(_tag, path, message)]);
        }
        return getArrayFormatterIssues(issue.issue, issue.kind === "Transformation" ? _tag : undefined, path);
      });
  }
};
//# sourceMappingURL=ParseResult.js.map