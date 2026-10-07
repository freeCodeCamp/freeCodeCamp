/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js";
import type { Effect } from "./Effect.js";
import type { Equivalence } from "./Equivalence.js";
import * as Option from "./Option.js";
import type { ParseIssue } from "./ParseResult.js";
import type { Concurrency } from "./Types.js";
/**
 * @category model
 * @since 3.10.0
 */
export type AST = Declaration | Literal | UniqueSymbol | UndefinedKeyword | VoidKeyword | NeverKeyword | UnknownKeyword | AnyKeyword | StringKeyword | NumberKeyword | BooleanKeyword | BigIntKeyword | SymbolKeyword | ObjectKeyword | Enums | TemplateLiteral | Refinement | TupleType | TypeLiteral | Union | Suspend | Transformation;
/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export type TypeConstructorAnnotation = {
    readonly _tag: string;
    [key: PropertyKey]: unknown;
};
/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export declare const TypeConstructorAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type BrandAnnotation = Arr.NonEmptyReadonlyArray<string | symbol>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const BrandAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type SchemaIdAnnotation = string | symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const SchemaIdAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type MessageAnnotation = (issue: ParseIssue) => string | Effect<string> | {
    readonly message: string | Effect<string>;
    readonly override: boolean;
};
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const MessageAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type MissingMessageAnnotation = () => string | Effect<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const MissingMessageAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type IdentifierAnnotation = string;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const IdentifierAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type TitleAnnotation = string;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const TitleAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type DescriptionAnnotation = string;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const DescriptionAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type ExamplesAnnotation<A> = Arr.NonEmptyReadonlyArray<A>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const ExamplesAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type DefaultAnnotation<A> = A;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const DefaultAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type JSONSchemaAnnotation = object;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const JSONSchemaAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const ArbitraryAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const PrettyAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type EquivalenceAnnotation<A, TypeParameters extends ReadonlyArray<any> = readonly []> = (...equivalences: {
    readonly [K in keyof TypeParameters]: Equivalence<TypeParameters[K]>;
}) => Equivalence<A>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const EquivalenceAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type DocumentationAnnotation = string;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const DocumentationAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type ConcurrencyAnnotation = Concurrency | undefined;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const ConcurrencyAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type BatchingAnnotation = boolean | "inherit" | undefined;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const BatchingAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type ParseIssueTitleAnnotation = (issue: ParseIssue) => string | undefined;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const ParseIssueTitleAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const ParseOptionsAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type DecodingFallbackAnnotation<A> = (issue: ParseIssue) => Effect<A, ParseIssue>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const DecodingFallbackAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const SurrogateAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export type SurrogateAnnotation = AST;
/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotations {
    readonly [_: string]: unknown;
    readonly [_: symbol]: unknown;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotated {
    readonly annotations: Annotations;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getAnnotation: {
    /**
     * @category annotations
     * @since 3.10.0
     */
    <A>(key: symbol): (annotated: Annotated) => Option.Option<A>;
    /**
     * @category annotations
     * @since 3.10.0
     */
    <A>(annotated: Annotated, key: symbol): Option.Option<A>;
};
/**
 * @category annotations
 * @since 3.19.0
 * @experimental
 */
export declare const getTypeConstructorAnnotation: (annotated: Annotated) => Option.Option<TypeConstructorAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getBrandAnnotation: (annotated: Annotated) => Option.Option<readonly [string | symbol, ...(string | symbol)[]]>;
/**
 * @category annotations
 * @since 3.14.2
 */
export declare const getSchemaIdAnnotation: (annotated: Annotated) => Option.Option<SchemaIdAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getMessageAnnotation: (annotated: Annotated) => Option.Option<MessageAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getMissingMessageAnnotation: (annotated: Annotated) => Option.Option<MissingMessageAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getTitleAnnotation: (annotated: Annotated) => Option.Option<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getIdentifierAnnotation: (annotated: Annotated) => Option.Option<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getDescriptionAnnotation: (annotated: Annotated) => Option.Option<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getExamplesAnnotation: (annotated: Annotated) => Option.Option<readonly [unknown, ...unknown[]]>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getDefaultAnnotation: (annotated: Annotated) => Option.Option<unknown>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getJSONSchemaAnnotation: (annotated: Annotated) => Option.Option<object>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getDocumentationAnnotation: (annotated: Annotated) => Option.Option<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getConcurrencyAnnotation: (annotated: Annotated) => Option.Option<ConcurrencyAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getBatchingAnnotation: (annotated: Annotated) => Option.Option<BatchingAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getParseIssueTitleAnnotation: (annotated: Annotated) => Option.Option<ParseIssueTitleAnnotation>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getParseOptionsAnnotation: (annotated: Annotated) => Option.Option<ParseOptions>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getDecodingFallbackAnnotation: (annotated: Annotated) => Option.Option<DecodingFallbackAnnotation<unknown>>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getSurrogateAnnotation: (annotated: Annotated) => Option.Option<AST>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const JSONIdentifierAnnotationId: unique symbol;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getJSONIdentifierAnnotation: (annotated: Annotated) => Option.Option<string>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare const getJSONIdentifier: (annotated: Annotated) => Option.Option<string>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const ParseJsonSchemaId: unique symbol;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Declaration implements Annotated {
    readonly typeParameters: ReadonlyArray<AST>;
    readonly decodeUnknown: (...typeParameters: ReadonlyArray<AST>) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>;
    readonly encodeUnknown: (...typeParameters: ReadonlyArray<AST>) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Declaration";
    constructor(typeParameters: ReadonlyArray<AST>, decodeUnknown: (...typeParameters: ReadonlyArray<AST>) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>, encodeUnknown: (...typeParameters: ReadonlyArray<AST>) => (input: unknown, options: ParseOptions, self: Declaration) => Effect<any, ParseIssue, any>, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isDeclaration: (ast: AST) => ast is Declaration;
/**
 * @category model
 * @since 3.10.0
 */
export type LiteralValue = string | number | boolean | null | bigint;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Literal implements Annotated {
    readonly literal: LiteralValue;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Literal";
    constructor(literal: LiteralValue, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isLiteral: (ast: AST) => ast is Literal;
declare const $null: Literal;
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
export declare class UniqueSymbol implements Annotated {
    readonly symbol: symbol;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "UniqueSymbol";
    constructor(symbol: symbol, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isUniqueSymbol: (ast: AST) => ast is UniqueSymbol;
/**
 * @category model
 * @since 3.10.0
 */
export declare class UndefinedKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "UndefinedKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const undefinedKeyword: UndefinedKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isUndefinedKeyword: (ast: AST) => ast is UndefinedKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class VoidKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "VoidKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const voidKeyword: VoidKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isVoidKeyword: (ast: AST) => ast is VoidKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class NeverKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "NeverKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const neverKeyword: NeverKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isNeverKeyword: (ast: AST) => ast is NeverKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class UnknownKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "UnknownKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const unknownKeyword: UnknownKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isUnknownKeyword: (ast: AST) => ast is UnknownKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class AnyKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "AnyKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const anyKeyword: AnyKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isAnyKeyword: (ast: AST) => ast is AnyKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class StringKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "StringKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const stringKeyword: StringKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isStringKeyword: (ast: AST) => ast is StringKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class NumberKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "NumberKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const numberKeyword: NumberKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isNumberKeyword: (ast: AST) => ast is NumberKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class BooleanKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "BooleanKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const booleanKeyword: BooleanKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isBooleanKeyword: (ast: AST) => ast is BooleanKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class BigIntKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "BigIntKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const bigIntKeyword: BigIntKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isBigIntKeyword: (ast: AST) => ast is BigIntKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class SymbolKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "SymbolKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const symbolKeyword: SymbolKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isSymbolKeyword: (ast: AST) => ast is SymbolKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class ObjectKeyword implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "ObjectKeyword";
    constructor(annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const objectKeyword: ObjectKeyword;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isObjectKeyword: (ast: AST) => ast is ObjectKeyword;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Enums implements Annotated {
    readonly enums: ReadonlyArray<readonly [string, string | number]>;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Enums";
    constructor(enums: ReadonlyArray<readonly [string, string | number]>, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isEnums: (ast: AST) => ast is Enums;
type TemplateLiteralSpanBaseType = StringKeyword | NumberKeyword | Literal | TemplateLiteral;
type TemplateLiteralSpanType = TemplateLiteralSpanBaseType | Union<TemplateLiteralSpanType>;
/**
 * @category model
 * @since 3.10.0
 */
export declare class TemplateLiteralSpan {
    readonly literal: string;
    /**
     * @since 3.10.0
     */
    readonly type: TemplateLiteralSpanType;
    constructor(type: AST, literal: string);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category model
 * @since 3.10.0
 */
export declare class TemplateLiteral implements Annotated {
    readonly head: string;
    readonly spans: Arr.NonEmptyReadonlyArray<TemplateLiteralSpan>;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "TemplateLiteral";
    constructor(head: string, spans: Arr.NonEmptyReadonlyArray<TemplateLiteralSpan>, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isTemplateLiteral: (ast: AST) => ast is TemplateLiteral;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Type implements Annotated {
    readonly type: AST;
    readonly annotations: Annotations;
    constructor(type: AST, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toJSON(): object;
    /**
     * @since 3.10.0
     */
    toString(): string;
}
/**
 * @category model
 * @since 3.10.0
 */
export declare class OptionalType extends Type {
    readonly isOptional: boolean;
    constructor(type: AST, isOptional: boolean, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toJSON(): object;
    /**
     * @since 3.10.0
     */
    toString(): string;
}
/**
 * @category model
 * @since 3.10.0
 */
export declare class TupleType implements Annotated {
    readonly elements: ReadonlyArray<OptionalType>;
    readonly rest: ReadonlyArray<Type>;
    readonly isReadonly: boolean;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "TupleType";
    constructor(elements: ReadonlyArray<OptionalType>, rest: ReadonlyArray<Type>, isReadonly: boolean, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isTupleType: (ast: AST) => ast is TupleType;
/**
 * @category model
 * @since 3.10.0
 */
export declare class PropertySignature extends OptionalType {
    readonly name: PropertyKey;
    readonly isReadonly: boolean;
    constructor(name: PropertyKey, type: AST, isOptional: boolean, isReadonly: boolean, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @since 3.10.0
 */
export type Parameter = StringKeyword | SymbolKeyword | TemplateLiteral | Refinement<Parameter>;
/**
 * @since 3.10.0
 */
export declare const isParameter: (ast: AST) => ast is Parameter;
/**
 * @category model
 * @since 3.10.0
 */
export declare class IndexSignature {
    readonly type: AST;
    readonly isReadonly: boolean;
    /**
     * @since 3.10.0
     */
    readonly parameter: Parameter;
    constructor(parameter: AST, type: AST, isReadonly: boolean);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category model
 * @since 3.10.0
 */
export declare class TypeLiteral implements Annotated {
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "TypeLiteral";
    /**
     * @since 3.10.0
     */
    readonly propertySignatures: ReadonlyArray<PropertySignature>;
    /**
     * @since 3.10.0
     */
    readonly indexSignatures: ReadonlyArray<IndexSignature>;
    constructor(propertySignatures: ReadonlyArray<PropertySignature>, indexSignatures: ReadonlyArray<IndexSignature>, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isTypeLiteral: (ast: AST) => ast is TypeLiteral;
/**
 * @since 3.10.0
 */
export type Members<A> = readonly [A, A, ...Array<A>];
/**
 * @category model
 * @since 3.10.0
 */
export declare class Union<M extends AST = AST> implements Annotated {
    readonly types: Members<M>;
    readonly annotations: Annotations;
    static make: (types: ReadonlyArray<AST>, annotations?: Annotations) => AST;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Union";
    private constructor();
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isUnion: (ast: AST) => ast is Union;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Suspend implements Annotated {
    readonly f: () => AST;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Suspend";
    constructor(f: () => AST, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isSuspend: (ast: AST) => ast is Suspend;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Refinement<From extends AST = AST> implements Annotated {
    readonly from: From;
    readonly filter: (input: any, options: ParseOptions, self: Refinement) => Option.Option<ParseIssue>;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Refinement";
    constructor(from: From, filter: (input: any, options: ParseOptions, self: Refinement) => Option.Option<ParseIssue>, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isRefinement: (ast: AST) => ast is Refinement<AST>;
/**
 * @category model
 * @since 3.10.0
 */
export interface ParseOptions {
    /**
     * The `errors` option allows you to receive all parsing errors when
     * attempting to parse a value using a schema. By default only the first error
     * is returned, but by setting the `errors` option to `"all"`, you can receive
     * all errors that occurred during the parsing process. This can be useful for
     * debugging or for providing more comprehensive error messages to the user.
     *
     * default: "first"
     *
     * @since 3.10.0
     */
    readonly errors?: "first" | "all" | undefined;
    /**
     * When using a `Schema` to parse a value, by default any properties that are
     * not specified in the `Schema` will be stripped out from the output. This is
     * because the `Schema` is expecting a specific shape for the parsed value,
     * and any excess properties do not conform to that shape.
     *
     * However, you can use the `onExcessProperty` option (default value:
     * `"ignore"`) to trigger a parsing error. This can be particularly useful in
     * cases where you need to detect and handle potential errors or unexpected
     * values.
     *
     * If you want to allow excess properties to remain, you can use
     * `onExcessProperty` set to `"preserve"`.
     *
     * default: "ignore"
     *
     * @since 3.10.0
     */
    readonly onExcessProperty?: "ignore" | "error" | "preserve" | undefined;
    /**
     * The `propertyOrder` option provides control over the order of object fields
     * in the output. This feature is particularly useful when the sequence of
     * keys is important for the consuming processes or when maintaining the input
     * order enhances readability and usability.
     *
     * By default, the `propertyOrder` option is set to `"none"`. This means that
     * the internal system decides the order of keys to optimize parsing speed.
     * The order of keys in this mode should not be considered stable, and it's
     * recommended not to rely on key ordering as it may change in future updates
     * without notice.
     *
     * Setting `propertyOrder` to `"original"` ensures that the keys are ordered
     * as they appear in the input during the decoding/encoding process.
     *
     * default: "none"
     *
     * @since 3.10.0
     */
    readonly propertyOrder?: "none" | "original" | undefined;
    /**
     * Handles missing properties in data structures. By default, missing
     * properties are treated as if present with an `undefined` value. To treat
     * missing properties as errors, set the `exact` option to `true`. This
     * setting is already enabled by default for `is` and `asserts` functions,
     * treating absent properties strictly unless overridden.
     *
     * default: false
     *
     * @since 3.10.0
     */
    readonly exact?: boolean | undefined;
}
/**
 * @since 3.10.0
 */
export declare const defaultParseOption: ParseOptions;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Transformation implements Annotated {
    readonly from: AST;
    readonly to: AST;
    readonly transformation: TransformationKind;
    readonly annotations: Annotations;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Transformation";
    constructor(from: AST, to: AST, transformation: TransformationKind, annotations?: Annotations);
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): object;
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isTransformation: (ast: AST) => ast is Transformation;
/**
 * @category model
 * @since 3.10.0
 */
export type TransformationKind = FinalTransformation | ComposeTransformation | TypeLiteralTransformation;
/**
 * @category model
 * @since 3.10.0
 */
export declare class FinalTransformation {
    readonly decode: (fromA: any, options: ParseOptions, self: Transformation, fromI: any) => Effect<any, ParseIssue, any>;
    readonly encode: (toI: any, options: ParseOptions, self: Transformation, toA: any) => Effect<any, ParseIssue, any>;
    /**
     * @since 3.10.0
     */
    readonly _tag = "FinalTransformation";
    constructor(decode: (fromA: any, options: ParseOptions, self: Transformation, fromI: any) => Effect<any, ParseIssue, any>, encode: (toI: any, options: ParseOptions, self: Transformation, toA: any) => Effect<any, ParseIssue, any>);
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isFinalTransformation: (ast: TransformationKind) => ast is FinalTransformation;
/**
 * @category model
 * @since 3.10.0
 */
export declare class ComposeTransformation {
    /**
     * @since 3.10.0
     */
    readonly _tag = "ComposeTransformation";
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const composeTransformation: ComposeTransformation;
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isComposeTransformation: (ast: TransformationKind) => ast is ComposeTransformation;
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
export declare class PropertySignatureTransformation {
    readonly from: PropertyKey;
    readonly to: PropertyKey;
    readonly decode: (o: Option.Option<any>) => Option.Option<any>;
    readonly encode: (o: Option.Option<any>) => Option.Option<any>;
    constructor(from: PropertyKey, to: PropertyKey, decode: (o: Option.Option<any>) => Option.Option<any>, encode: (o: Option.Option<any>) => Option.Option<any>);
}
/**
 * @category model
 * @since 3.10.0
 */
export declare class TypeLiteralTransformation {
    readonly propertySignatureTransformations: ReadonlyArray<PropertySignatureTransformation>;
    /**
     * @since 3.10.0
     */
    readonly _tag = "TypeLiteralTransformation";
    constructor(propertySignatureTransformations: ReadonlyArray<PropertySignatureTransformation>);
}
/**
 * @category guards
 * @since 3.10.0
 */
export declare const isTypeLiteralTransformation: (ast: TransformationKind) => ast is TypeLiteralTransformation;
/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * Any previously existing identifier annotations are deleted.
 *
 * @since 3.10.0
 */
export declare const annotations: (ast: AST, overrides: Annotations) => AST;
/**
 * Equivalent at runtime to the TypeScript type-level `keyof` operator.
 *
 * @since 3.10.0
 */
export declare const keyof: (ast: AST) => AST;
/**
 * Generates a regular expression from a `TemplateLiteral` AST node.
 *
 * @see {@link getTemplateLiteralCapturingRegExp} for a variant that captures the pattern.
 *
 * @since 3.10.0
 */
export declare const getTemplateLiteralRegExp: (ast: TemplateLiteral) => RegExp;
/**
 * Generates a regular expression that captures the pattern defined by the given `TemplateLiteral` AST.
 *
 * @see {@link getTemplateLiteralRegExp} for a variant that does not capture the pattern.
 *
 * @since 3.10.0
 */
export declare const getTemplateLiteralCapturingRegExp: (ast: TemplateLiteral) => RegExp;
/**
 * @since 3.10.0
 */
export declare const getPropertySignatures: (ast: AST) => Array<PropertySignature>;
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Pick`.
 *
 * @since 3.10.0
 */
export declare const pick: (ast: AST, keys: ReadonlyArray<PropertyKey>) => TypeLiteral | Transformation;
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Omit`.
 *
 * @since 3.10.0
 */
export declare const omit: (ast: AST, keys: ReadonlyArray<PropertyKey>) => TypeLiteral | Transformation;
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Partial`.
 *
 * @since 3.10.0
 */
export declare const partial: (ast: AST, options?: {
    readonly exact: true;
}) => AST;
/**
 * Equivalent at runtime to the built-in TypeScript utility type `Required`.
 *
 * @since 3.10.0
 */
export declare const required: (ast: AST) => AST;
/**
 * Creates a new AST with shallow mutability applied to its properties.
 *
 * @since 3.10.0
 */
export declare const mutable: (ast: AST) => AST;
/**
 * @since 3.10.0
 */
export type Compiler<A> = (ast: AST, path: ReadonlyArray<PropertyKey>) => A;
/**
 * @since 3.10.0
 */
export type Match<A> = {
    [K in AST["_tag"]]: (ast: Extract<AST, {
        _tag: K;
    }>, compile: Compiler<A>, path: ReadonlyArray<PropertyKey>) => A;
};
/**
 * @since 3.10.0
 */
export declare const getCompiler: <A>(match: Match<A>) => Compiler<A>;
/**
 * @since 3.10.0
 */
export declare const typeAST: (ast: AST) => AST;
/**
 * @since 3.10.0
 */
export declare const encodedAST: (ast: AST) => AST;
/**
 * @since 3.10.0
 */
export declare const encodedBoundAST: (ast: AST) => AST;
//# sourceMappingURL=SchemaAST.d.ts.map