/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js";
import { dual, identity } from "./Function.js";
import { globalValue } from "./GlobalValue.js";
import * as Inspectable from "./Inspectable.js";
import * as errors_ from "./internal/schema/errors.js";
import * as util_ from "./internal/schema/util.js";
import * as Number from "./Number.js";
import * as Option from "./Option.js";
import * as Order from "./Order.js";
import * as Predicate from "./Predicate.js";
import * as regexp from "./RegExp.js";
/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export const TypeConstructorAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/TypeConstructor");
/**
 * @category annotations
 * @since 3.10.0
 */
export const BrandAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Brand");
/**
 * @category annotations
 * @since 3.10.0
 */
export const SchemaIdAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/SchemaId");
/**
 * @category annotations
 * @since 3.10.0
 */
export const MessageAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Message");
/**
 * @category annotations
 * @since 3.10.0
 */
export const MissingMessageAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/MissingMessage");
/**
 * @category annotations
 * @since 3.10.0
 */
export const IdentifierAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Identifier");
/**
 * @category annotations
 * @since 3.10.0
 */
export const TitleAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Title");
/** @internal */
export const AutoTitleAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/AutoTitle");
/**
 * @category annotations
 * @since 3.10.0
 */
export const DescriptionAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Description");
/**
 * @category annotations
 * @since 3.10.0
 */
export const ExamplesAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Examples");
/**
 * @category annotations
 * @since 3.10.0
 */
export const DefaultAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Default");
/**
 * @category annotations
 * @since 3.10.0
 */
export const JSONSchemaAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/JSONSchema");
/**
 * @category annotations
 * @since 3.10.0
 */
export const ArbitraryAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Arbitrary");
/**
 * @category annotations
 * @since 3.10.0
 */
export const PrettyAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Pretty");
/**
 * @category annotations
 * @since 3.10.0
 */
export const EquivalenceAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Equivalence");
/**
 * @category annotations
 * @since 3.10.0
 */
export const DocumentationAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Documentation");
/**
 * @category annotations
 * @since 3.10.0
 */
export const ConcurrencyAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Concurrency");
/**
 * @category annotations
 * @since 3.10.0
 */
export const BatchingAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Batching");
/**
 * @category annotations
 * @since 3.10.0
 */
export const ParseIssueTitleAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/ParseIssueTitle");
/**
 * @category annotations
 * @since 3.10.0
 */
export const ParseOptionsAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/ParseOptions");
/**
 * @category annotations
 * @since 3.10.0
 */
export const DecodingFallbackAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/DecodingFallback");
/**
 * @category annotations
 * @since 3.10.0
 */
export const SurrogateAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/Surrogate");
/** @internal */
export const StableFilterAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/StableFilter");
/**
 * @category annotations
 * @since 3.10.0
 */
export const getAnnotation = /*#__PURE__*/dual(2, (annotated, key) => Object.prototype.hasOwnProperty.call(annotated.annotations, key) ? Option.some(annotated.annotations[key]) : Option.none());
/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export const getTypeConstructorAnnotation = /*#__PURE__*/getAnnotation(TypeConstructorAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getBrandAnnotation = /*#__PURE__*/getAnnotation(BrandAnnotationId);
/**
 * @category annotations
 * @since 3.14.2
 */
export const getSchemaIdAnnotation = /*#__PURE__*/getAnnotation(SchemaIdAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getMessageAnnotation = /*#__PURE__*/getAnnotation(MessageAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getMissingMessageAnnotation = /*#__PURE__*/getAnnotation(MissingMessageAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getTitleAnnotation = /*#__PURE__*/getAnnotation(TitleAnnotationId);
/** @internal */
export const getAutoTitleAnnotation = /*#__PURE__*/getAnnotation(AutoTitleAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getIdentifierAnnotation = /*#__PURE__*/getAnnotation(IdentifierAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getDescriptionAnnotation = /*#__PURE__*/getAnnotation(DescriptionAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getExamplesAnnotation = /*#__PURE__*/getAnnotation(ExamplesAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getDefaultAnnotation = /*#__PURE__*/getAnnotation(DefaultAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONSchemaAnnotation = /*#__PURE__*/getAnnotation(JSONSchemaAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getDocumentationAnnotation = /*#__PURE__*/getAnnotation(DocumentationAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getConcurrencyAnnotation = /*#__PURE__*/getAnnotation(ConcurrencyAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getBatchingAnnotation = /*#__PURE__*/getAnnotation(BatchingAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getParseIssueTitleAnnotation = /*#__PURE__*/getAnnotation(ParseIssueTitleAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getParseOptionsAnnotation = /*#__PURE__*/getAnnotation(ParseOptionsAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getDecodingFallbackAnnotation = /*#__PURE__*/getAnnotation(DecodingFallbackAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getSurrogateAnnotation = /*#__PURE__*/getAnnotation(SurrogateAnnotationId);
const getStableFilterAnnotation = /*#__PURE__*/getAnnotation(StableFilterAnnotationId);
/** @internal */
export const hasStableFilter = annotated => Option.exists(getStableFilterAnnotation(annotated), b => b === true);
/**
 * @category annotations
 * @since 3.10.0
 */
export const JSONIdentifierAnnotationId = /*#__PURE__*/Symbol.for("effect/annotation/JSONIdentifier");
/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONIdentifierAnnotation = /*#__PURE__*/getAnnotation(JSONIdentifierAnnotationId);
/**
 * @category annotations
 * @since 3.10.0
 */
export const getJSONIdentifier = annotated => Option.orElse(getJSONIdentifierAnnotation(annotated), () => getIdentifierAnnotation(annotated));
// -------------------------------------------------------------------------------------
// schema ids
// -------------------------------------------------------------------------------------
/**
 * @category schema id
 * @since 3.10.0
 */
export const ParseJsonSchemaId = /*#__PURE__*/Symbol.for("effect/schema/ParseJson");
/**
 * @category model
 * @since 3.10.0
 */
export class Declaration {
  typeParameters;
  decodeUnknown;
  encodeUnknown;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Declaration";
  constructor(typeParameters, decodeUnknown, encodeUnknown, annotations = {}) {
    this.typeParameters = typeParameters;
    this.decodeUnknown = decodeUnknown;
    this.encodeUnknown = encodeUnknown;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => "<declaration schema>");
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      typeParameters: this.typeParameters.map(ast => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const createASTGuard = tag => ast => ast._tag === tag;
/**
 * @category guards
 * @since 3.10.0
 */
export const isDeclaration = /*#__PURE__*/createASTGuard("Declaration");
/**
 * @category model
 * @since 3.10.0
 */
export class Literal {
  literal;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Literal";
  constructor(literal, annotations = {}) {
    this.literal = literal;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => Inspectable.formatUnknown(this.literal));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      literal: Predicate.isBigInt(this.literal) ? String(this.literal) : this.literal,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isLiteral = /*#__PURE__*/createASTGuard("Literal");
const $null = /*#__PURE__*/new Literal(null);
export {
/**
 * @category constructors
 * @since 3.10.0
 */
$null as null };
/**
 * @category model
 * @since 3.10.0
 */
export class UniqueSymbol {
  symbol;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UniqueSymbol";
  constructor(symbol, annotations = {}) {
    this.symbol = symbol;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => Inspectable.formatUnknown(this.symbol));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isUniqueSymbol = /*#__PURE__*/createASTGuard("UniqueSymbol");
/**
 * @category model
 * @since 3.10.0
 */
export class UndefinedKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UndefinedKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const undefinedKeyword = /*#__PURE__*/new UndefinedKeyword({
  [TitleAnnotationId]: "undefined"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isUndefinedKeyword = /*#__PURE__*/createASTGuard("UndefinedKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class VoidKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "VoidKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const voidKeyword = /*#__PURE__*/new VoidKeyword({
  [TitleAnnotationId]: "void"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isVoidKeyword = /*#__PURE__*/createASTGuard("VoidKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class NeverKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "NeverKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const neverKeyword = /*#__PURE__*/new NeverKeyword({
  [TitleAnnotationId]: "never"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isNeverKeyword = /*#__PURE__*/createASTGuard("NeverKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class UnknownKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "UnknownKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const unknownKeyword = /*#__PURE__*/new UnknownKeyword({
  [TitleAnnotationId]: "unknown"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isUnknownKeyword = /*#__PURE__*/createASTGuard("UnknownKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class AnyKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "AnyKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const anyKeyword = /*#__PURE__*/new AnyKeyword({
  [TitleAnnotationId]: "any"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isAnyKeyword = /*#__PURE__*/createASTGuard("AnyKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class StringKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "StringKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const stringKeyword = /*#__PURE__*/new StringKeyword({
  [TitleAnnotationId]: "string",
  [DescriptionAnnotationId]: "a string"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isStringKeyword = /*#__PURE__*/createASTGuard("StringKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class NumberKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "NumberKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const numberKeyword = /*#__PURE__*/new NumberKeyword({
  [TitleAnnotationId]: "number",
  [DescriptionAnnotationId]: "a number"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isNumberKeyword = /*#__PURE__*/createASTGuard("NumberKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class BooleanKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "BooleanKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const booleanKeyword = /*#__PURE__*/new BooleanKeyword({
  [TitleAnnotationId]: "boolean",
  [DescriptionAnnotationId]: "a boolean"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isBooleanKeyword = /*#__PURE__*/createASTGuard("BooleanKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class BigIntKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "BigIntKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const bigIntKeyword = /*#__PURE__*/new BigIntKeyword({
  [TitleAnnotationId]: "bigint",
  [DescriptionAnnotationId]: "a bigint"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isBigIntKeyword = /*#__PURE__*/createASTGuard("BigIntKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class SymbolKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "SymbolKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const symbolKeyword = /*#__PURE__*/new SymbolKeyword({
  [TitleAnnotationId]: "symbol",
  [DescriptionAnnotationId]: "a symbol"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isSymbolKeyword = /*#__PURE__*/createASTGuard("SymbolKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class ObjectKeyword {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "ObjectKeyword";
  constructor(annotations = {}) {
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const objectKeyword = /*#__PURE__*/new ObjectKeyword({
  [TitleAnnotationId]: "object",
  [DescriptionAnnotationId]: "an object in the TypeScript meaning, i.e. the `object` type"
});
/**
 * @category guards
 * @since 3.10.0
 */
export const isObjectKeyword = /*#__PURE__*/createASTGuard("ObjectKeyword");
/**
 * @category model
 * @since 3.10.0
 */
export class Enums {
  enums;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Enums";
  constructor(enums, annotations = {}) {
    this.enums = enums;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => `<enum ${this.enums.length} value(s): ${this.enums.map(([_, value]) => JSON.stringify(value)).join(" | ")}>`);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      enums: this.enums,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isEnums = /*#__PURE__*/createASTGuard("Enums");
const isTemplateLiteralSpanType = ast => {
  switch (ast._tag) {
    case "Literal":
    case "NumberKeyword":
    case "StringKeyword":
    case "TemplateLiteral":
      return true;
    case "Union":
      return ast.types.every(isTemplateLiteralSpanType);
  }
  return false;
};
const templateLiteralSpanUnionTypeToString = type => {
  switch (type._tag) {
    case "Literal":
      return JSON.stringify(String(type.literal));
    case "StringKeyword":
      return "string";
    case "NumberKeyword":
      return "number";
    case "TemplateLiteral":
      return String(type);
    case "Union":
      return type.types.map(templateLiteralSpanUnionTypeToString).join(" | ");
  }
};
const templateLiteralSpanTypeToString = type => {
  switch (type._tag) {
    case "Literal":
      return String(type.literal);
    case "StringKeyword":
      return "${string}";
    case "NumberKeyword":
      return "${number}";
    case "TemplateLiteral":
      return "${" + String(type) + "}";
    case "Union":
      return "${" + type.types.map(templateLiteralSpanUnionTypeToString).join(" | ") + "}";
  }
};
/**
 * @category model
 * @since 3.10.0
 */
export class TemplateLiteralSpan {
  literal;
  /**
   * @since 3.10.0
   */
  type;
  constructor(type, literal) {
    this.literal = literal;
    if (isTemplateLiteralSpanType(type)) {
      this.type = type;
    } else {
      throw new Error(errors_.getSchemaUnsupportedLiteralSpanErrorMessage(type));
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return templateLiteralSpanTypeToString(this.type) + this.literal;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      literal: this.literal
    };
  }
}
/**
 * @category model
 * @since 3.10.0
 */
export class TemplateLiteral {
  head;
  spans;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "TemplateLiteral";
  constructor(head, spans, annotations = {}) {
    this.head = head;
    this.spans = spans;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTemplateLiteral(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      head: this.head,
      spans: this.spans.map(span => span.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const formatTemplateLiteral = ast => "`" + ast.head + ast.spans.map(String).join("") + "`";
/**
 * @category guards
 * @since 3.10.0
 */
export const isTemplateLiteral = /*#__PURE__*/createASTGuard("TemplateLiteral");
/**
 * @category model
 * @since 3.10.0
 */
export class Type {
  type;
  annotations;
  constructor(type, annotations = {}) {
    this.type = type;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type);
  }
}
/**
 * @category model
 * @since 3.10.0
 */
export class OptionalType extends Type {
  isOptional;
  constructor(type, isOptional, annotations = {}) {
    super(type, annotations);
    this.isOptional = isOptional;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "");
  }
}
const getRestASTs = rest => rest.map(annotatedAST => annotatedAST.type);
/**
 * @category model
 * @since 3.10.0
 */
export class TupleType {
  elements;
  rest;
  isReadonly;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "TupleType";
  constructor(elements, rest, isReadonly, annotations = {}) {
    this.elements = elements;
    this.rest = rest;
    this.isReadonly = isReadonly;
    this.annotations = annotations;
    let hasOptionalElement = false;
    let hasIllegalRequiredElement = false;
    for (const e of elements) {
      if (e.isOptional) {
        hasOptionalElement = true;
      } else if (hasOptionalElement) {
        hasIllegalRequiredElement = true;
        break;
      }
    }
    if (hasIllegalRequiredElement || hasOptionalElement && rest.length > 1) {
      throw new Error(errors_.getASTRequiredElementFollowinAnOptionalElementErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTuple(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      elements: this.elements.map(e => e.toJSON()),
      rest: this.rest.map(ast => ast.toJSON()),
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const formatTuple = ast => {
  const formattedElements = ast.elements.map(String).join(", ");
  return Arr.matchLeft(ast.rest, {
    onEmpty: () => `readonly [${formattedElements}]`,
    onNonEmpty: (head, tail) => {
      const formattedHead = String(head);
      const wrappedHead = formattedHead.includes(" | ") ? `(${formattedHead})` : formattedHead;
      if (tail.length > 0) {
        const formattedTail = tail.map(String).join(", ");
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[], ${formattedTail}]`;
        } else {
          return `readonly [...${wrappedHead}[], ${formattedTail}]`;
        }
      } else {
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[]]`;
        } else {
          return `ReadonlyArray<${formattedHead}>`;
        }
      }
    }
  });
};
/**
 * @category guards
 * @since 3.10.0
 */
export const isTupleType = /*#__PURE__*/createASTGuard("TupleType");
/**
 * @category model
 * @since 3.10.0
 */
export class PropertySignature extends OptionalType {
  name;
  isReadonly;
  constructor(name, type, isOptional, isReadonly, annotations) {
    super(type, isOptional, annotations);
    this.name = name;
    this.isReadonly = isReadonly;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + String(this.name) + (this.isOptional ? "?" : "") + ": " + this.type;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      name: String(this.name),
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @since 3.10.0
 */
export const isParameter = ast => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return true;
    case "Refinement":
      return isParameter(ast.from);
  }
  return false;
};
/**
 * @category model
 * @since 3.10.0
 */
export class IndexSignature {
  type;
  isReadonly;
  /**
   * @since 3.10.0
   */
  parameter;
  constructor(parameter, type, isReadonly) {
    this.type = type;
    this.isReadonly = isReadonly;
    if (isParameter(parameter)) {
      this.parameter = parameter;
    } else {
      throw new Error(errors_.getASTIndexSignatureParameterErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + `[x: ${this.parameter}]: ${this.type}`;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    };
  }
}
/**
 * @category model
 * @since 3.10.0
 */
export class TypeLiteral {
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "TypeLiteral";
  /**
   * @since 3.10.0
   */
  propertySignatures;
  /**
   * @since 3.10.0
   */
  indexSignatures;
  constructor(propertySignatures, indexSignatures, annotations = {}) {
    this.annotations = annotations;
    // check for duplicate property signatures
    const keys = {};
    for (let i = 0; i < propertySignatures.length; i++) {
      const name = propertySignatures[i].name;
      if (Object.prototype.hasOwnProperty.call(keys, name)) {
        throw new Error(errors_.getASTDuplicatePropertySignatureErrorMessage(name));
      }
      keys[name] = null;
    }
    // check for duplicate index signatures
    const parameters = {
      string: false,
      symbol: false
    };
    for (let i = 0; i < indexSignatures.length; i++) {
      const encodedParameter = getEncodedParameter(indexSignatures[i].parameter);
      if (isStringKeyword(encodedParameter)) {
        if (parameters.string) {
          throw new Error(errors_.getASTDuplicateIndexSignatureErrorMessage("string"));
        }
        parameters.string = true;
      } else if (isSymbolKeyword(encodedParameter)) {
        if (parameters.symbol) {
          throw new Error(errors_.getASTDuplicateIndexSignatureErrorMessage("symbol"));
        }
        parameters.symbol = true;
      }
    }
    this.propertySignatures = propertySignatures;
    this.indexSignatures = indexSignatures;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => formatTypeLiteral(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      propertySignatures: this.propertySignatures.map(ps => ps.toJSON()),
      indexSignatures: this.indexSignatures.map(ps => ps.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const formatIndexSignatures = iss => iss.map(String).join("; ");
const formatTypeLiteral = ast => {
  if (ast.propertySignatures.length > 0) {
    const pss = ast.propertySignatures.map(String).join("; ");
    if (ast.indexSignatures.length > 0) {
      return `{ ${pss}; ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return `{ ${pss} }`;
    }
  } else {
    if (ast.indexSignatures.length > 0) {
      return `{ ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return "{}";
    }
  }
};
/**
 * @category guards
 * @since 3.10.0
 */
export const isTypeLiteral = /*#__PURE__*/createASTGuard("TypeLiteral");
const sortCandidates = /*#__PURE__*/Arr.sort(/*#__PURE__*/Order.mapInput(Number.Order, ast => {
  switch (ast._tag) {
    case "AnyKeyword":
      return 0;
    case "UnknownKeyword":
      return 1;
    case "ObjectKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
  }
  return 4;
}));
const literalMap = {
  string: "StringKeyword",
  number: "NumberKeyword",
  boolean: "BooleanKeyword",
  bigint: "BigIntKeyword"
};
/** @internal */
export const flatten = candidates => Arr.flatMap(candidates, ast => isUnion(ast) ? flatten(ast.types) : [ast]);
/** @internal */
export const unify = candidates => {
  const cs = sortCandidates(candidates);
  const out = [];
  const uniques = {};
  const literals = [];
  for (const ast of cs) {
    switch (ast._tag) {
      case "NeverKeyword":
        break;
      case "AnyKeyword":
        return [anyKeyword];
      case "UnknownKeyword":
        return [unknownKeyword];
      // uniques
      case "ObjectKeyword":
      case "UndefinedKeyword":
      case "VoidKeyword":
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword":
        {
          if (!uniques[ast._tag]) {
            uniques[ast._tag] = ast;
            out.push(ast);
          }
          break;
        }
      case "Literal":
        {
          const type = typeof ast.literal;
          switch (type) {
            case "string":
            case "number":
            case "bigint":
            case "boolean":
              {
                const _tag = literalMap[type];
                if (!uniques[_tag] && !literals.includes(ast.literal)) {
                  literals.push(ast.literal);
                  out.push(ast);
                }
                break;
              }
            // null
            case "object":
              {
                if (!literals.includes(ast.literal)) {
                  literals.push(ast.literal);
                  out.push(ast);
                }
                break;
              }
          }
          break;
        }
      case "UniqueSymbol":
        {
          if (!uniques["SymbolKeyword"] && !literals.includes(ast.symbol)) {
            literals.push(ast.symbol);
            out.push(ast);
          }
          break;
        }
      case "TupleType":
        {
          if (!uniques["ObjectKeyword"]) {
            out.push(ast);
          }
          break;
        }
      case "TypeLiteral":
        {
          if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
            if (!uniques["{}"]) {
              uniques["{}"] = ast;
              out.push(ast);
            }
          } else if (!uniques["ObjectKeyword"]) {
            out.push(ast);
          }
          break;
        }
      default:
        out.push(ast);
    }
  }
  return out;
};
/**
 * @category model
 * @since 3.10.0
 */
export class Union {
  types;
  annotations;
  static make = (types, annotations) => {
    return isMembers(types) ? new Union(types, annotations) : types.length === 1 ? types[0] : neverKeyword;
  };
  /** @internal */
  static unify = (candidates, annotations) => {
    return Union.make(unify(flatten(candidates)), annotations);
  };
  /**
   * @since 3.10.0
   */
  _tag = "Union";
  constructor(types, annotations = {}) {
    this.types = types;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => this.types.map(String).join(" | "));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      types: this.types.map(ast => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/** @internal */
export const mapMembers = (members, f) => members.map(f);
/** @internal */
export const isMembers = as => as.length > 1;
/**
 * @category guards
 * @since 3.10.0
 */
export const isUnion = /*#__PURE__*/createASTGuard("Union");
const toJSONMemoMap = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Schema/AST/toJSONMemoMap"), () => new WeakMap());
/**
 * @category model
 * @since 3.10.0
 */
export class Suspend {
  f;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Suspend";
  constructor(f, annotations = {}) {
    this.f = f;
    this.annotations = annotations;
    this.f = util_.memoizeThunk(f);
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getExpected(this).pipe(Option.orElse(() => Option.flatMap(Option.liftThrowable(this.f)(), ast => getExpected(ast))), Option.getOrElse(() => "<suspended schema>"));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    const ast = this.f();
    let out = toJSONMemoMap.get(ast);
    if (out) {
      return out;
    }
    toJSONMemoMap.set(ast, {
      _tag: this._tag
    });
    out = {
      _tag: this._tag,
      ast: ast.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
    toJSONMemoMap.set(ast, out);
    return out;
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isSuspend = /*#__PURE__*/createASTGuard("Suspend");
/**
 * @category model
 * @since 3.10.0
 */
export class Refinement {
  from;
  filter;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Refinement";
  constructor(from, filter, annotations = {}) {
    this.from = from;
    this.filter = filter;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getIdentifierAnnotation(this).pipe(Option.getOrElse(() => Option.match(getOrElseExpected(this), {
      onNone: () => `{ ${this.from} | filter }`,
      onSome: expected => isRefinement(this.from) ? String(this.from) + " & " + expected : expected
    })));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isRefinement = /*#__PURE__*/createASTGuard("Refinement");
/**
 * @since 3.10.0
 */
export const defaultParseOption = {};
/**
 * @category model
 * @since 3.10.0
 */
export class Transformation {
  from;
  to;
  transformation;
  annotations;
  /**
   * @since 3.10.0
   */
  _tag = "Transformation";
  constructor(from, to, transformation, annotations = {}) {
    this.from = from;
    this.to = to;
    this.transformation = transformation;
    this.annotations = annotations;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return Option.getOrElse(getExpected(this), () => `(${String(this.from)} <-> ${String(this.to)})`);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      to: this.to.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isTransformation = /*#__PURE__*/createASTGuard("Transformation");
/**
 * @category model
 * @since 3.10.0
 */
export class FinalTransformation {
  decode;
  encode;
  /**
   * @since 3.10.0
   */
  _tag = "FinalTransformation";
  constructor(decode, encode) {
    this.decode = decode;
    this.encode = encode;
  }
}
const createTransformationGuard = tag => ast => ast._tag === tag;
/**
 * @category guards
 * @since 3.10.0
 */
export const isFinalTransformation = /*#__PURE__*/createTransformationGuard("FinalTransformation");
/**
 * @category model
 * @since 3.10.0
 */
export class ComposeTransformation {
  /**
   * @since 3.10.0
   */
  _tag = "ComposeTransformation";
}
/**
 * @category constructors
 * @since 3.10.0
 */
export const composeTransformation = /*#__PURE__*/new ComposeTransformation();
/**
 * @category guards
 * @since 3.10.0
 */
export const isComposeTransformation = /*#__PURE__*/createTransformationGuard("ComposeTransformation");
/**
 * Represents a `PropertySignature -> PropertySignature` transformation
 *
 * The semantic of `decode` is:
 * - `none()` represents the absence of the key/value pair
 * - `some(value)` represents the presence of the key/value pair
 *
 * The semantic of `encode` is:
 * - `none()` you don't want to output the key/value pair
 * - `some(value)` you want to output the key/value pair
 *
 * @category model
 * @since 3.10.0
 */
export class PropertySignatureTransformation {
  from;
  to;
  decode;
  encode;
  constructor(from, to, decode, encode) {
    this.from = from;
    this.to = to;
    this.decode = decode;
    this.encode = encode;
  }
}
const isRenamingPropertySignatureTransformation = t => t.decode === identity && t.encode === identity;
/**
 * @category model
 * @since 3.10.0
 */
export class TypeLiteralTransformation {
  propertySignatureTransformations;
  /**
   * @since 3.10.0
   */
  _tag = "TypeLiteralTransformation";
  constructor(propertySignatureTransformations) {
    this.propertySignatureTransformations = propertySignatureTransformations;
    // check for duplicate property signature transformations
    const fromKeys = {};
    const toKeys = {};
    for (const pst of propertySignatureTransformations) {
      const from = pst.from;
      if (fromKeys[from]) {
        throw new Error(errors_.getASTDuplicatePropertySignatureTransformationErrorMessage(from));
      }
      fromKeys[from] = true;
      const to = pst.to;
      if (toKeys[to]) {
        throw new Error(errors_.getASTDuplicatePropertySignatureTransformationErrorMessage(to));
      }
      toKeys[to] = true;
    }
  }
}
/**
 * @category guards
 * @since 3.10.0
 */
export const isTypeLiteralTransformation = /*#__PURE__*/createTransformationGuard("TypeLiteralTransformation");
// -------------------------------------------------------------------------------------
// API
// -------------------------------------------------------------------------------------
/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * Any previously existing identifier annotations are deleted.
 *
 * @since 3.10.0
 */
export const annotations = (ast, overrides) => {
  const d = Object.getOwnPropertyDescriptors(ast);
  const base = {
    ...ast.annotations
  };
  delete base[IdentifierAnnotationId];
  const value = {
    ...base,
    ...overrides
  };
  const surrogate = getSurrogateAnnotation(ast);
  if (Option.isSome(surrogate)) {
    value[SurrogateAnnotationId] = annotations(surrogate.value, overrides);
  }
  d.annotations.value = value;
  return Object.create(Object.getPrototypeOf(ast), d);
};
/**
 * Equivalent at runtime to the TypeScript type-level `keyof` operator.
 *
 * @since 3.10.0
 */
export const keyof = ast => Union.unify(_keyof(ast));
const STRING_KEYWORD_PATTERN = "[\\s\\S]*?"; // any string, including newlines
const NUMBER_KEYWORD_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?";
const getTemplateLiteralSpanTypePattern = (type, capture) => {
  switch (type._tag) {
    case "Literal":
      return regexp.escape(String(type.literal));
    case "StringKeyword":
      return STRING_KEYWORD_PATTERN;
    case "NumberKeyword":
      return NUMBER_KEYWORD_PATTERN;
    case "TemplateLiteral":
      return getTemplateLiteralPattern(type, capture, false);
    case "Union":
      return type.types.map(type => getTemplateLiteralSpanTypePattern(type, capture)).join("|");
  }
};
const handleTemplateLiteralSpanTypeParens = (type, s, capture, top) => {
  if (isUnion(type)) {
    if (capture && !top) {
      return `(?:${s})`;
    }
  } else if (!capture || !top) {
    return s;
  }
  return `(${s})`;
};
const getTemplateLiteralPattern = (ast, capture, top) => {
  let pattern = ``;
  if (ast.head !== "") {
    const head = regexp.escape(ast.head);
    pattern += capture && top ? `(${head})` : head;
  }
  for (const span of ast.spans) {
    const spanPattern = getTemplateLiteralSpanTypePattern(span.type, capture);
    pattern += handleTemplateLiteralSpanTypeParens(span.type, spanPattern, capture, top);
    if (span.literal !== "") {
      const literal = regexp.escape(span.literal);
      pattern += capture && top ? `(${literal})` : literal;
    }
  }
  return pattern;
};
/**
 * Generates a regular expression from a `TemplateLiteral` AST node.
 *
 * @see {@link getTemplateLiteralCapturingRegExp} for a variant that captures the pattern.
 *
 * @since 3.10.0
 */
export const getTemplateLiteralRegExp = ast => new RegExp(`^${getTemplateLiteralPattern(ast, false, true)}$`);
/**
 * Generates a regular expression that captures the pattern defined by the given `TemplateLiteral` AST.
 *
 * @see {@link getTemplateLiteralRegExp} for a variant that does not capture the pattern.
 *
 * @since 3.10.0
 */
export const getTemplateLiteralCapturingRegExp = ast => new RegExp(`^${getTemplateLiteralPattern(ast, true, true)}$`);
/**
 * @since 3.10.0
 */
export const getPropertySignatures = ast => {
  const annotation = getSurrogateAnnotation(ast);
  if (Option.isSome(annotation)) {
    return getPropertySignatures(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.slice();
    case "Suspend":
      return getPropertySignatures(ast.f());
    case "Refinement":
      return getPropertySignatures(ast.from);
  }
  return getPropertyKeys(ast).map(name => getPropertyKeyIndexedAccess(ast, name));
};
const getIndexSignatures = ast => {
  const annotation = getSurrogateAnnotation(ast);
  if (Option.isSome(annotation)) {
    return getIndexSignatures(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.indexSignatures.slice();
    case "Suspend":
      return getIndexSignatures(ast.f());
    case "Refinement":
      return getIndexSignatures(ast.from);
    case "Transformation":
      return getIndexSignatures(ast.to);
  }
  return [];
};
/** @internal */
export const getNumberIndexedAccess = ast => {
  switch (ast._tag) {
    case "TupleType":
      {
        let hasOptional = false;
        let out = [];
        for (const e of ast.elements) {
          if (e.isOptional) {
            hasOptional = true;
          }
          out.push(e.type);
        }
        if (hasOptional) {
          out.push(undefinedKeyword);
        }
        out = out.concat(getRestASTs(ast.rest));
        return Union.make(out);
      }
    case "Refinement":
      return getNumberIndexedAccess(ast.from);
    case "Union":
      return Union.make(ast.types.map(getNumberIndexedAccess));
    case "Suspend":
      return getNumberIndexedAccess(ast.f());
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
};
const getTypeLiteralPropertySignature = (ast, name) => {
  // from property signatures...
  const ops = Arr.findFirst(ast.propertySignatures, ps => ps.name === name);
  if (Option.isSome(ops)) {
    return ops.value;
  }
  // from index signatures...
  if (Predicate.isString(name)) {
    let out = undefined;
    for (const is of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is.parameter);
      switch (encodedParameter._tag) {
        case "TemplateLiteral":
          {
            const regex = getTemplateLiteralRegExp(encodedParameter);
            if (regex.test(name)) {
              return new PropertySignature(name, is.type, false, true);
            }
            break;
          }
        case "StringKeyword":
          {
            if (out === undefined) {
              out = new PropertySignature(name, is.type, false, true);
            }
          }
      }
    }
    if (out) {
      return out;
    }
  } else if (Predicate.isSymbol(name)) {
    for (const is of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is.parameter);
      if (isSymbolKeyword(encodedParameter)) {
        return new PropertySignature(name, is.type, false, true);
      }
    }
  }
};
/** @internal */
export const getPropertyKeyIndexedAccess = (ast, name) => {
  const annotation = getSurrogateAnnotation(ast);
  if (Option.isSome(annotation)) {
    return getPropertyKeyIndexedAccess(annotation.value, name);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      {
        const ps = getTypeLiteralPropertySignature(ast, name);
        if (ps) {
          return ps;
        }
        break;
      }
    case "Union":
      return new PropertySignature(name, Union.make(ast.types.map(ast => getPropertyKeyIndexedAccess(ast, name).type)), false, true);
    case "Suspend":
      return getPropertyKeyIndexedAccess(ast.f(), name);
    case "Refinement":
      return getPropertyKeyIndexedAccess(ast.from, name);
    case "Transformation":
      return getPropertyKeyIndexedAccess(ast.to, name);
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
};
const getPropertyKeys = ast => {
  const annotation = getSurrogateAnnotation(ast);
  if (Option.isSome(annotation)) {
    return getPropertyKeys(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.map(ps => ps.name);
    case "Union":
      return ast.types.slice(1).reduce((out, ast) => Arr.intersection(out, getPropertyKeys(ast)), getPropertyKeys(ast.types[0]));
    case "Suspend":
      return getPropertyKeys(ast.f());
    case "Refinement":
      return getPropertyKeys(ast.from);
    case "Transformation":
      return getPropertyKeys(ast.to);
  }
  return [];
};
/** @internal */
export const record = (key, value) => {
  const propertySignatures = [];
  const indexSignatures = [];
  const go = key => {
    switch (key._tag) {
      case "NeverKeyword":
        break;
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        indexSignatures.push(new IndexSignature(key, value, true));
        break;
      case "Literal":
        if (Predicate.isString(key.literal) || Predicate.isNumber(key.literal)) {
          propertySignatures.push(new PropertySignature(key.literal, value, false, true));
        } else {
          throw new Error(errors_.getASTUnsupportedLiteralErrorMessage(key.literal));
        }
        break;
      case "Enums":
        {
          for (const [_, name] of key.enums) {
            propertySignatures.push(new PropertySignature(name, value, false, true));
          }
          break;
        }
      case "UniqueSymbol":
        propertySignatures.push(new PropertySignature(key.symbol, value, false, true));
        break;
      case "Union":
        key.types.forEach(go);
        break;
      default:
        throw new Error(errors_.getASTUnsupportedKeySchemaErrorMessage(key));
    }
  };
  go(key);
  return {
    propertySignatures,
    indexSignatures
  };
};
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Pick`.
 *
 * @since 3.10.0
 */
export const pick = (ast, keys) => {
  const annotation = getSurrogateAnnotation(ast);
  if (Option.isSome(annotation)) {
    return pick(annotation.value, keys);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      {
        const pss = [];
        const names = {};
        for (const ps of ast.propertySignatures) {
          names[ps.name] = null;
          if (keys.includes(ps.name)) {
            pss.push(ps);
          }
        }
        for (const key of keys) {
          if (!(key in names)) {
            const ps = getTypeLiteralPropertySignature(ast, key);
            if (ps) {
              pss.push(ps);
            }
          }
        }
        return new TypeLiteral(pss, []);
      }
    case "Union":
      return new TypeLiteral(keys.map(name => getPropertyKeyIndexedAccess(ast, name)), []);
    case "Suspend":
      return pick(ast.f(), keys);
    case "Refinement":
      return pick(ast.from, keys);
    case "Transformation":
      {
        switch (ast.transformation._tag) {
          case "ComposeTransformation":
            return new Transformation(pick(ast.from, keys), pick(ast.to, keys), composeTransformation);
          case "TypeLiteralTransformation":
            {
              const ts = [];
              const fromKeys = [];
              for (const k of keys) {
                const t = ast.transformation.propertySignatureTransformations.find(t => t.to === k);
                if (t) {
                  ts.push(t);
                  fromKeys.push(t.from);
                } else {
                  fromKeys.push(k);
                }
              }
              return Arr.isNonEmptyReadonlyArray(ts) ? new Transformation(pick(ast.from, fromKeys), pick(ast.to, keys), new TypeLiteralTransformation(ts)) : pick(ast.from, fromKeys);
            }
        }
      }
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
};
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Omit`.
 *
 * @since 3.10.0
 */
export const omit = (ast, keys) => {
  let indexSignatures = getIndexSignatures(ast);
  if (indexSignatures.length > 0) {
    if (indexSignatures.some(is => isStringKeyword(getEncodedParameter(is.parameter)))) {
      indexSignatures = indexSignatures.filter(is => !isTemplateLiteral(getEncodedParameter(is.parameter)));
    }
    return new TypeLiteral([], indexSignatures);
  }
  return pick(ast, getPropertyKeys(ast).filter(name => !keys.includes(name)));
};
/** @internal */
export const orUndefined = ast => Union.make([ast, undefinedKeyword]);
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Partial`.
 *
 * @since 3.10.0
 */
export const partial = (ast, options) => {
  const exact = options?.exact === true;
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(ast.elements.map(e => new OptionalType(exact ? e.type : orUndefined(e.type), true)), Arr.match(ast.rest, {
        onEmpty: () => ast.rest,
        onNonEmpty: rest => [new Type(Union.make([...getRestASTs(rest), undefinedKeyword]))]
      }), ast.isReadonly);
    case "TypeLiteral":
      return new TypeLiteral(ast.propertySignatures.map(ps => new PropertySignature(ps.name, exact ? ps.type : orUndefined(ps.type), true, ps.isReadonly, ps.annotations)), ast.indexSignatures.map(is => new IndexSignature(is.parameter, orUndefined(is.type), is.isReadonly)));
    case "Union":
      return Union.make(ast.types.map(member => partial(member, options)));
    case "Suspend":
      return new Suspend(() => partial(ast.f(), options));
    case "Declaration":
    case "Refinement":
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
    case "Transformation":
      {
        if (isTypeLiteralTransformation(ast.transformation) && ast.transformation.propertySignatureTransformations.every(isRenamingPropertySignatureTransformation)) {
          return new Transformation(partial(ast.from, options), partial(ast.to, options), ast.transformation);
        }
        throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
      }
  }
  return ast;
};
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Required`.
 *
 * @since 3.10.0
 */
export const required = ast => {
  switch (ast._tag) {
    case "TupleType":
      return new TupleType(ast.elements.map(e => new OptionalType(e.type, false)), ast.rest, ast.isReadonly);
    case "TypeLiteral":
      return new TypeLiteral(ast.propertySignatures.map(f => new PropertySignature(f.name, f.type, false, f.isReadonly, f.annotations)), ast.indexSignatures);
    case "Union":
      return Union.make(ast.types.map(member => required(member)));
    case "Suspend":
      return new Suspend(() => required(ast.f()));
    case "Declaration":
    case "Refinement":
      throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
    case "Transformation":
      {
        if (isTypeLiteralTransformation(ast.transformation) && ast.transformation.propertySignatureTransformations.every(isRenamingPropertySignatureTransformation)) {
          return new Transformation(required(ast.from), required(ast.to), ast.transformation);
        }
        throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
      }
  }
  return ast;
};
/**
 * Creates a new AST with shallow mutability applied to its properties.
 *
 * @since 3.10.0
 */
export const mutable = ast => {
  switch (ast._tag) {
    case "TupleType":
      return ast.isReadonly === false ? ast : new TupleType(ast.elements, ast.rest, false, ast.annotations);
    case "TypeLiteral":
      {
        const propertySignatures = changeMap(ast.propertySignatures, ps => ps.isReadonly === false ? ps : new PropertySignature(ps.name, ps.type, ps.isOptional, false, ps.annotations));
        const indexSignatures = changeMap(ast.indexSignatures, is => is.isReadonly === false ? is : new IndexSignature(is.parameter, is.type, false));
        return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
      }
    case "Union":
      {
        const types = changeMap(ast.types, mutable);
        return types === ast.types ? ast : Union.make(types, ast.annotations);
      }
    case "Suspend":
      return new Suspend(() => mutable(ast.f()), ast.annotations);
    case "Refinement":
      {
        const from = mutable(ast.from);
        return from === ast.from ? ast : new Refinement(from, ast.filter, ast.annotations);
      }
    case "Transformation":
      {
        const from = mutable(ast.from);
        const to = mutable(ast.to);
        return from === ast.from && to === ast.to ? ast : new Transformation(from, to, ast.transformation, ast.annotations);
      }
  }
  return ast;
};
/**
 * @since 3.10.0
 */
export const getCompiler = match => {
  const compile = (ast, path) => match[ast._tag](ast, compile, path);
  return compile;
};
/** @internal */
export const pickAnnotations = annotationIds => annotated => {
  let out = undefined;
  for (const id of annotationIds) {
    if (Object.prototype.hasOwnProperty.call(annotated.annotations, id)) {
      if (out === undefined) {
        out = {};
      }
      out[id] = annotated.annotations[id];
    }
  }
  return out;
};
/** @internal */
export const omitAnnotations = annotationIds => annotated => {
  const out = {
    ...annotated.annotations
  };
  for (const id of annotationIds) {
    delete out[id];
  }
  return out;
};
const preserveTransformationAnnotations = /*#__PURE__*/pickAnnotations([ExamplesAnnotationId, DefaultAnnotationId, JSONSchemaAnnotationId, ArbitraryAnnotationId, PrettyAnnotationId, EquivalenceAnnotationId]);
/**
 * @since 3.10.0
 */
export const typeAST = ast => {
  switch (ast._tag) {
    case "Declaration":
      {
        const typeParameters = changeMap(ast.typeParameters, typeAST);
        return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
      }
    case "TupleType":
      {
        const elements = changeMap(ast.elements, e => {
          const type = typeAST(e.type);
          return type === e.type ? e : new OptionalType(type, e.isOptional);
        });
        const restASTs = getRestASTs(ast.rest);
        const rest = changeMap(restASTs, typeAST);
        return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map(type => new Type(type)), ast.isReadonly, ast.annotations);
      }
    case "TypeLiteral":
      {
        const propertySignatures = changeMap(ast.propertySignatures, p => {
          const type = typeAST(p.type);
          return type === p.type ? p : new PropertySignature(p.name, type, p.isOptional, p.isReadonly);
        });
        const indexSignatures = changeMap(ast.indexSignatures, is => {
          const type = typeAST(is.type);
          return type === is.type ? is : new IndexSignature(is.parameter, type, is.isReadonly);
        });
        return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
      }
    case "Union":
      {
        const types = changeMap(ast.types, typeAST);
        return types === ast.types ? ast : Union.make(types, ast.annotations);
      }
    case "Suspend":
      return new Suspend(() => typeAST(ast.f()), ast.annotations);
    case "Refinement":
      {
        const from = typeAST(ast.from);
        return from === ast.from ? ast : new Refinement(from, ast.filter, ast.annotations);
      }
    case "Transformation":
      {
        const preserve = preserveTransformationAnnotations(ast);
        return typeAST(preserve !== undefined ? annotations(ast.to, preserve) : ast.to);
      }
  }
  return ast;
};
function changeMap(as, f) {
  let changed = false;
  const out = Arr.allocate(as.length);
  for (let i = 0; i < as.length; i++) {
    const a = as[i];
    const fa = f(a);
    if (fa !== a) {
      changed = true;
    }
    out[i] = fa;
  }
  return changed ? out : as;
}
/**
 * Returns the from part of a transformation if it exists
 *
 * @internal
 */
export const getTransformationFrom = ast => {
  switch (ast._tag) {
    case "Transformation":
      return ast.from;
    case "Refinement":
      return getTransformationFrom(ast.from);
    case "Suspend":
      return getTransformationFrom(ast.f());
  }
};
const encodedAST_ = (ast, isBound) => {
  switch (ast._tag) {
    case "Declaration":
      {
        const typeParameters = changeMap(ast.typeParameters, ast => encodedAST_(ast, isBound));
        return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown);
      }
    case "TupleType":
      {
        const elements = changeMap(ast.elements, e => {
          const type = encodedAST_(e.type, isBound);
          return type === e.type ? e : new OptionalType(type, e.isOptional);
        });
        const restASTs = getRestASTs(ast.rest);
        const rest = changeMap(restASTs, ast => encodedAST_(ast, isBound));
        return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map(ast => new Type(ast)), ast.isReadonly);
      }
    case "TypeLiteral":
      {
        const propertySignatures = changeMap(ast.propertySignatures, ps => {
          const type = encodedAST_(ps.type, isBound);
          return type === ps.type ? ps : new PropertySignature(ps.name, type, ps.isOptional, ps.isReadonly);
        });
        const indexSignatures = changeMap(ast.indexSignatures, is => {
          const type = encodedAST_(is.type, isBound);
          return type === is.type ? is : new IndexSignature(is.parameter, type, is.isReadonly);
        });
        return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures);
      }
    case "Union":
      {
        const types = changeMap(ast.types, ast => encodedAST_(ast, isBound));
        return types === ast.types ? ast : Union.make(types);
      }
    case "Suspend":
      {
        let borrowedAnnotations = undefined;
        const identifier = getJSONIdentifier(ast);
        if (Option.isSome(identifier)) {
          const suffix = isBound ? "Bound" : "";
          borrowedAnnotations = {
            [JSONIdentifierAnnotationId]: `${identifier.value}Encoded${suffix}`
          };
        }
        return new Suspend(() => encodedAST_(ast.f(), isBound), borrowedAnnotations);
      }
    case "Refinement":
      {
        const from = encodedAST_(ast.from, isBound);
        if (isBound) {
          if (from === ast.from) return ast;
          if (getTransformationFrom(ast.from) === undefined && hasStableFilter(ast)) {
            return new Refinement(from, ast.filter, ast.annotations);
          }
          return from;
        } else {
          return from;
        }
      }
    case "Transformation":
      return encodedAST_(ast.from, isBound);
  }
  return ast;
};
/**
 * @since 3.10.0
 */
export const encodedAST = ast => encodedAST_(ast, false);
/**
 * @since 3.10.0
 */
export const encodedBoundAST = ast => encodedAST_(ast, true);
const toJSONAnnotations = annotations => {
  const out = {};
  for (const k of Object.getOwnPropertySymbols(annotations)) {
    out[String(k)] = annotations[k];
  }
  return out;
};
/** @internal */
export const getEncodedParameter = ast => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast;
    case "Refinement":
      return getEncodedParameter(ast.from);
  }
};
/** @internal  */
export const equals = (self, that) => {
  switch (self._tag) {
    case "Literal":
      return isLiteral(that) && that.literal === self.literal;
    case "UniqueSymbol":
      return isUniqueSymbol(that) && that.symbol === self.symbol;
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "NeverKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
    case "ObjectKeyword":
      return that._tag === self._tag;
    case "TemplateLiteral":
      return isTemplateLiteral(that) && that.head === self.head && equalsTemplateLiteralSpan(that.spans, self.spans);
    case "Enums":
      return isEnums(that) && equalsEnums(that.enums, self.enums);
    case "Union":
      return isUnion(that) && equalsUnion(self.types, that.types);
    case "Refinement":
    case "TupleType":
    case "TypeLiteral":
    case "Suspend":
    case "Transformation":
    case "Declaration":
      return self === that;
  }
};
const equalsTemplateLiteralSpan = /*#__PURE__*/Arr.getEquivalence((self, that) => {
  return self.literal === that.literal && equals(self.type, that.type);
});
const equalsEnums = /*#__PURE__*/Arr.getEquivalence((self, that) => that[0] === self[0] && that[1] === self[1]);
const equalsUnion = /*#__PURE__*/Arr.getEquivalence(equals);
const intersection = /*#__PURE__*/Arr.intersectionWith(equals);
const _keyof = ast => {
  switch (ast._tag) {
    case "Declaration":
      {
        const annotation = getSurrogateAnnotation(ast);
        if (Option.isSome(annotation)) {
          return _keyof(annotation.value);
        }
        break;
      }
    case "TypeLiteral":
      return ast.propertySignatures.map(p => Predicate.isSymbol(p.name) ? new UniqueSymbol(p.name) : new Literal(p.name)).concat(ast.indexSignatures.map(is => getEncodedParameter(is.parameter)));
    case "Suspend":
      return _keyof(ast.f());
    case "Union":
      return ast.types.slice(1).reduce((out, ast) => intersection(out, _keyof(ast)), _keyof(ast.types[0]));
    case "Transformation":
      return _keyof(ast.to);
  }
  throw new Error(errors_.getASTUnsupportedSchemaErrorMessage(ast));
};
/** @internal */
export const compose = (ab, cd) => new Transformation(ab, cd, composeTransformation);
/** @internal */
export const rename = (ast, mapping) => {
  switch (ast._tag) {
    case "TypeLiteral":
      {
        const propertySignatureTransformations = [];
        for (const key of Reflect.ownKeys(mapping)) {
          const name = mapping[key];
          if (name !== undefined) {
            propertySignatureTransformations.push(new PropertySignatureTransformation(key, name, identity, identity));
          }
        }
        if (propertySignatureTransformations.length === 0) {
          return ast;
        }
        return new Transformation(ast, new TypeLiteral(ast.propertySignatures.map(ps => {
          const name = mapping[ps.name];
          return new PropertySignature(name === undefined ? ps.name : name, typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations);
        }), ast.indexSignatures), new TypeLiteralTransformation(propertySignatureTransformations));
      }
    case "Union":
      return Union.make(ast.types.map(ast => rename(ast, mapping)));
    case "Suspend":
      return new Suspend(() => rename(ast.f(), mapping));
    case "Transformation":
      return compose(ast, rename(typeAST(ast), mapping));
  }
  throw new Error(errors_.getASTUnsupportedRenameSchemaErrorMessage(ast));
};
const formatKeyword = ast => Option.getOrElse(getExpected(ast), () => ast._tag);
function getBrands(ast) {
  return Option.match(getBrandAnnotation(ast), {
    onNone: () => "",
    onSome: brands => brands.map(brand => ` & Brand<${Inspectable.formatUnknown(brand)}>`).join("")
  });
}
const getOrElseExpected = ast => getTitleAnnotation(ast).pipe(Option.orElse(() => getDescriptionAnnotation(ast)), Option.orElse(() => getAutoTitleAnnotation(ast)), Option.map(s => s + getBrands(ast)));
const getExpected = ast => Option.orElse(getIdentifierAnnotation(ast), () => getOrElseExpected(ast));
/** @internal */
export const pruneUndefined = (ast, self, onTransformation) => {
  switch (ast._tag) {
    case "UndefinedKeyword":
      return neverKeyword;
    case "Union":
      {
        const types = [];
        let hasUndefined = false;
        for (const type of ast.types) {
          const pruned = self(type);
          if (pruned) {
            hasUndefined = true;
            if (!isNeverKeyword(pruned)) {
              types.push(pruned);
            }
          } else {
            types.push(type);
          }
        }
        if (hasUndefined) {
          return Union.make(types);
        }
        break;
      }
    case "Suspend":
      return self(ast.f());
    case "Transformation":
      return onTransformation(ast);
  }
};
//# sourceMappingURL=SchemaAST.js.map