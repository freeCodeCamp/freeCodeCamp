import type { ComponentValue } from '@csstools/css-parser-algorithms';
import type { ContainerNode } from '@csstools/css-parser-algorithms';
import { CSSToken } from '@csstools/css-tokenizer';
import type { ParseError } from '@csstools/css-tokenizer';
import type { TokenColon } from '@csstools/css-tokenizer';
import type { TokenDelim } from '@csstools/css-tokenizer';
import type { TokenIdent } from '@csstools/css-tokenizer';

export declare function cloneMediaQuery<T extends MediaQueryWithType | MediaQueryWithoutType | MediaQueryInvalid>(x: T): T;

export declare function comparisonFromTokens(tokens: [TokenDelim, TokenDelim] | [TokenDelim]): MediaFeatureComparison | false;

export declare class CustomMedia {
    type: NodeType;
    name: Array<CSSToken>;
    mediaQueryList: Array<MediaQuery> | null;
    trueOrFalseKeyword: Array<CSSToken> | null;
    constructor(name: Array<CSSToken>, mediaQueryList: Array<MediaQuery> | null, trueOrFalseKeyword?: Array<CSSToken>);
    getName(): string;
    getNameToken(): CSSToken | null;
    hasMediaQueryList(): boolean;
    hasTrueKeyword(): boolean;
    hasFalseKeyword(): boolean;
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isCustomMedia(): this is CustomMedia;
    static isCustomMedia(x: unknown): x is CustomMedia;
}

export declare class GeneralEnclosed {
    type: NodeType;
    value: ComponentValue;
    constructor(value: ComponentValue);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: ComponentValue): number | string;
    at(index: number | string): ComponentValue | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: GeneralEnclosedWalkerEntry;
        parent: GeneralEnclosedWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isGeneralEnclosed(): this is GeneralEnclosed;
    static isGeneralEnclosed(x: unknown): x is GeneralEnclosed;
}

export declare type GeneralEnclosedWalkerEntry = ComponentValue;

export declare type GeneralEnclosedWalkerParent = ContainerNode | GeneralEnclosed;

export declare function invertComparison(operator: MediaFeatureComparison): MediaFeatureComparison | false;

export declare function isCustomMedia(x: unknown): x is GeneralEnclosed;

export declare function isGeneralEnclosed(x: unknown): x is GeneralEnclosed;

export declare function isMediaAnd(x: unknown): x is MediaAnd;

export declare function isMediaCondition(x: unknown): x is MediaCondition;

export declare function isMediaConditionList(x: unknown): x is MediaConditionList;

export declare function isMediaConditionListWithAnd(x: unknown): x is MediaConditionListWithAnd;

export declare function isMediaConditionListWithOr(x: unknown): x is MediaConditionListWithOr;

export declare function isMediaFeature(x: unknown): x is MediaFeature;

export declare function isMediaFeatureBoolean(x: unknown): x is MediaFeatureBoolean;

export declare function isMediaFeatureName(x: unknown): x is MediaFeatureName;

export declare function isMediaFeaturePlain(x: unknown): x is MediaFeaturePlain;

export declare function isMediaFeatureRange(x: unknown): x is MediaFeatureRange;

export declare function isMediaFeatureRangeNameValue(x: unknown): x is MediaFeatureRangeNameValue;

export declare function isMediaFeatureRangeValueName(x: unknown): x is MediaFeatureRangeValueName;

export declare function isMediaFeatureRangeValueNameValue(x: unknown): x is MediaFeatureRangeValueNameValue;

export declare function isMediaFeatureValue(x: unknown): x is MediaFeatureValue;

export declare function isMediaInParens(x: unknown): x is MediaInParens;

export declare function isMediaNot(x: unknown): x is MediaNot;

export declare function isMediaOr(x: unknown): x is MediaOr;

export declare function isMediaQuery(x: unknown): x is MediaQuery;

export declare function isMediaQueryInvalid(x: unknown): x is MediaQueryInvalid;

export declare function isMediaQueryWithoutType(x: unknown): x is MediaQueryWithoutType;

export declare function isMediaQueryWithType(x: unknown): x is MediaQueryWithType;

export declare function matchesComparison(componentValues: Array<ComponentValue>): false | [number, number];

export declare function matchesRatio(componentValues: Array<ComponentValue>): -1 | [number, number];

export declare function matchesRatioExactly(componentValues: Array<ComponentValue>): -1 | [number, number];

export declare class MediaAnd {
    type: NodeType;
    modifier: Array<CSSToken>;
    media: MediaInParens;
    constructor(modifier: Array<CSSToken>, media: MediaInParens);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaInParens): number | string;
    at(index: number | string): MediaInParens | null;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaAndWalkerEntry;
        parent: MediaAndWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): unknown;
    /**
     * @internal
     */
    isMediaAnd(): this is MediaAnd;
    static isMediaAnd(x: unknown): x is MediaAnd;
}

export declare type MediaAndWalkerEntry = MediaInParensWalkerEntry | MediaInParens;

export declare type MediaAndWalkerParent = MediaInParensWalkerParent | MediaAnd;

export declare class MediaCondition {
    type: NodeType;
    media: MediaNot | MediaInParens | MediaConditionListWithAnd | MediaConditionListWithOr;
    constructor(media: MediaNot | MediaInParens | MediaConditionListWithAnd | MediaConditionListWithOr);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaNot | MediaInParens | MediaConditionListWithAnd | MediaConditionListWithOr): number | string;
    at(index: number | string): MediaNot | MediaInParens | MediaConditionListWithAnd | MediaConditionListWithOr | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaConditionWalkerEntry;
        parent: MediaConditionWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): unknown;
    /**
     * @internal
     */
    isMediaCondition(): this is MediaCondition;
    static isMediaCondition(x: unknown): x is MediaCondition;
}

export declare type MediaConditionList = MediaConditionListWithAnd | MediaConditionListWithOr;

export declare class MediaConditionListWithAnd {
    type: NodeType;
    leading: MediaInParens;
    list: Array<MediaAnd>;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(leading: MediaInParens, list: Array<MediaAnd>, before?: Array<CSSToken>, after?: Array<CSSToken>);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaInParens | MediaAnd): number | string;
    at(index: number | string): MediaInParens | MediaAnd | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaConditionListWithAndWalkerEntry;
        parent: MediaConditionListWithAndWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    toJSON(): unknown;
    isMediaConditionListWithAnd(): this is MediaConditionListWithAnd;
    static isMediaConditionListWithAnd(x: unknown): x is MediaConditionListWithAnd;
}

export declare type MediaConditionListWithAndWalkerEntry = MediaAndWalkerEntry | MediaAnd;

export declare type MediaConditionListWithAndWalkerParent = MediaAndWalkerParent | MediaConditionListWithAnd;

export declare class MediaConditionListWithOr {
    type: NodeType;
    leading: MediaInParens;
    list: Array<MediaOr>;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(leading: MediaInParens, list: Array<MediaOr>, before?: Array<CSSToken>, after?: Array<CSSToken>);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaInParens | MediaOr): number | string;
    at(index: number | string): MediaInParens | MediaOr | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaConditionListWithOrWalkerEntry;
        parent: MediaConditionListWithOrWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): unknown;
    /**
     * @internal
     */
    isMediaConditionListWithOr(): this is MediaConditionListWithOr;
    static isMediaConditionListWithOr(x: unknown): x is MediaConditionListWithOr;
}

export declare type MediaConditionListWithOrWalkerEntry = MediaOrWalkerEntry | MediaOr;

export declare type MediaConditionListWithOrWalkerParent = MediaOrWalkerParent | MediaConditionListWithOr;

export declare type MediaConditionWalkerEntry = MediaNotWalkerEntry | MediaConditionListWithAndWalkerEntry | MediaConditionListWithOrWalkerEntry | MediaNot | MediaConditionListWithAnd | MediaConditionListWithOr;

export declare type MediaConditionWalkerParent = MediaNotWalkerParent | MediaConditionListWithAndWalkerParent | MediaConditionListWithOrWalkerParent | MediaCondition;

export declare class MediaFeature {
    type: NodeType;
    feature: MediaFeaturePlain | MediaFeatureBoolean | MediaFeatureRange;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(feature: MediaFeaturePlain | MediaFeatureBoolean | MediaFeatureRange, before?: Array<CSSToken>, after?: Array<CSSToken>);
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaFeaturePlain | MediaFeatureBoolean | MediaFeatureRange): number | string;
    at(index: number | string): MediaFeatureBoolean | MediaFeaturePlain | MediaFeatureRange | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeatureWalkerEntry;
        parent: MediaFeatureWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeature(): this is MediaFeature;
    static isMediaFeature(x: unknown): x is MediaFeature;
}

export declare class MediaFeatureBoolean {
    type: NodeType;
    name: MediaFeatureName;
    constructor(name: MediaFeatureName);
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaFeatureName): number | string;
    at(index: number | string): MediaFeatureName | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureBoolean(): this is MediaFeatureBoolean;
    static isMediaFeatureBoolean(x: unknown): x is MediaFeatureBoolean;
}

export declare type MediaFeatureComparison = MediaFeatureLT | MediaFeatureGT | MediaFeatureEQ;

export declare enum MediaFeatureEQ {
    EQ = "="
}

export declare enum MediaFeatureGT {
    GT = ">",
    GT_OR_EQ = ">="
}

export declare enum MediaFeatureLT {
    LT = "<",
    LT_OR_EQ = "<="
}

export declare class MediaFeatureName {
    type: NodeType;
    name: ComponentValue;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(name: ComponentValue, before?: Array<CSSToken>, after?: Array<CSSToken>);
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: ComponentValue): number | string;
    at(index: number | string): ComponentValue | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureName(): this is MediaFeatureName;
    static isMediaFeatureName(x: unknown): x is MediaFeatureName;
}

export declare class MediaFeaturePlain {
    type: NodeType;
    name: MediaFeatureName;
    colon: TokenColon;
    value: MediaFeatureValue;
    constructor(name: MediaFeatureName, colon: TokenColon, value: MediaFeatureValue);
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaFeatureName | MediaFeatureValue): number | string;
    at(index: number | string): MediaFeatureName | MediaFeatureValue | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeaturePlainWalkerEntry;
        parent: MediaFeaturePlainWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeaturePlain(): this is MediaFeaturePlain;
    static isMediaFeaturePlain(x: unknown): x is MediaFeaturePlain;
}

export declare type MediaFeaturePlainWalkerEntry = MediaFeatureValueWalkerEntry | MediaFeatureValue;

export declare type MediaFeaturePlainWalkerParent = MediaFeatureValueWalkerParent | MediaFeaturePlain;

export declare type MediaFeatureRange = MediaFeatureRangeNameValue | MediaFeatureRangeValueName | MediaFeatureRangeValueNameValue;

export declare class MediaFeatureRangeNameValue {
    type: NodeType;
    name: MediaFeatureName;
    operator: [TokenDelim, TokenDelim] | [TokenDelim];
    value: MediaFeatureValue;
    constructor(name: MediaFeatureName, operator: [TokenDelim, TokenDelim] | [TokenDelim], value: MediaFeatureValue);
    operatorKind(): MediaFeatureComparison | false;
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaFeatureName | MediaFeatureValue): number | string;
    at(index: number | string): MediaFeatureName | MediaFeatureValue | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeatureRangeWalkerEntry;
        parent: MediaFeatureRangeWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureRangeNameValue(): this is MediaFeatureRangeNameValue;
    static isMediaFeatureRangeNameValue(x: unknown): x is MediaFeatureRangeNameValue;
}

export declare class MediaFeatureRangeValueName {
    type: NodeType;
    name: MediaFeatureName;
    operator: [TokenDelim, TokenDelim] | [TokenDelim];
    value: MediaFeatureValue;
    constructor(name: MediaFeatureName, operator: [TokenDelim, TokenDelim] | [TokenDelim], value: MediaFeatureValue);
    operatorKind(): MediaFeatureComparison | false;
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaFeatureName | MediaFeatureValue): number | string;
    at(index: number | string): MediaFeatureName | MediaFeatureValue | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeatureRangeWalkerEntry;
        parent: MediaFeatureRangeWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureRangeValueName(): this is MediaFeatureRangeValueName;
    static isMediaFeatureRangeValueName(x: unknown): x is MediaFeatureRangeValueName;
}

export declare class MediaFeatureRangeValueNameValue {
    type: NodeType;
    name: MediaFeatureName;
    valueOne: MediaFeatureValue;
    valueOneOperator: [TokenDelim, TokenDelim] | [TokenDelim];
    valueTwo: MediaFeatureValue;
    valueTwoOperator: [TokenDelim, TokenDelim] | [TokenDelim];
    constructor(name: MediaFeatureName, valueOne: MediaFeatureValue, valueOneOperator: [TokenDelim, TokenDelim] | [TokenDelim], valueTwo: MediaFeatureValue, valueTwoOperator: [TokenDelim, TokenDelim] | [TokenDelim]);
    valueOneOperatorKind(): MediaFeatureComparison | false;
    valueTwoOperatorKind(): MediaFeatureComparison | false;
    getName(): string;
    getNameToken(): CSSToken;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaFeatureName | MediaFeatureValue): number | string;
    at(index: number | string): MediaFeatureName | MediaFeatureValue | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeatureRangeWalkerEntry;
        parent: MediaFeatureRangeWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureRangeValueNameValue(): this is MediaFeatureRangeValueNameValue;
    static isMediaFeatureRangeValueNameValue(x: unknown): x is MediaFeatureRangeValueNameValue;
}

export declare type MediaFeatureRangeWalkerEntry = MediaFeatureValueWalkerEntry | MediaFeatureValue;

export declare type MediaFeatureRangeWalkerParent = MediaFeatureValueWalkerParent | MediaFeatureRange;

export declare class MediaFeatureValue {
    type: NodeType;
    value: ComponentValue | Array<ComponentValue>;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(value: ComponentValue | Array<ComponentValue>, before?: Array<CSSToken>, after?: Array<CSSToken>);
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: ComponentValue): number | string;
    at(index: number | string): ComponentValue | Array<ComponentValue> | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaFeatureValueWalkerEntry;
        parent: MediaFeatureValueWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaFeatureValue(): this is MediaFeatureValue;
    static isMediaFeatureValue(x: unknown): x is MediaFeatureValue;
}

export declare type MediaFeatureValueWalkerEntry = ComponentValue;

export declare type MediaFeatureValueWalkerParent = ContainerNode | MediaFeatureValue;

export declare type MediaFeatureWalkerEntry = MediaFeaturePlainWalkerEntry | MediaFeatureRangeWalkerEntry | MediaFeaturePlain | MediaFeatureBoolean | MediaFeatureRange;

export declare type MediaFeatureWalkerParent = MediaFeaturePlainWalkerParent | MediaFeatureRangeWalkerParent | MediaFeature;

export declare class MediaInParens {
    type: NodeType;
    media: MediaCondition | MediaFeature | GeneralEnclosed;
    before: Array<CSSToken>;
    after: Array<CSSToken>;
    constructor(media: MediaCondition | MediaFeature | GeneralEnclosed, before?: Array<CSSToken>, after?: Array<CSSToken>);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaCondition | MediaFeature | GeneralEnclosed): number | string;
    at(index: number | string): MediaCondition | MediaFeature | GeneralEnclosed | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaInParensWalkerEntry;
        parent: MediaInParensWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaInParens(): this is MediaInParens;
    static isMediaInParens(x: unknown): x is MediaInParens;
}

export declare type MediaInParensWalkerEntry = ComponentValue | GeneralEnclosed | MediaAnd | MediaNot | MediaOr | MediaConditionList | MediaCondition | MediaFeatureBoolean | MediaFeatureName | MediaFeaturePlain | MediaFeatureRange | MediaFeatureValue | MediaFeature | MediaInParens;

export declare type MediaInParensWalkerParent = ContainerNode | GeneralEnclosed | MediaAnd | MediaNot | MediaOr | MediaConditionList | MediaCondition | MediaFeatureBoolean | MediaFeatureName | MediaFeaturePlain | MediaFeatureRange | MediaFeatureValue | MediaFeature | MediaInParens;

export declare class MediaNot {
    type: NodeType;
    modifier: Array<CSSToken>;
    media: MediaInParens;
    constructor(modifier: Array<CSSToken>, media: MediaInParens);
    tokens(): Array<CSSToken>;
    toString(): string;
    /**
     * @internal
     */
    hasLeadingSpace(): boolean;
    indexOf(item: MediaInParens): number | string;
    at(index: number | string): MediaInParens | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaNotWalkerEntry;
        parent: MediaNotWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaNot(): this is MediaNot;
    static isMediaNot(x: unknown): x is MediaNot;
}

export declare type MediaNotWalkerEntry = MediaInParensWalkerEntry | MediaInParens;

export declare type MediaNotWalkerParent = MediaInParensWalkerParent | MediaNot;

export declare class MediaOr {
    type: NodeType;
    modifier: Array<CSSToken>;
    media: MediaInParens;
    constructor(modifier: Array<CSSToken>, media: MediaInParens);
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaInParens): number | string;
    at(index: number | string): MediaInParens | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaOrWalkerEntry;
        parent: MediaOrWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaOr(): this is MediaOr;
    static isMediaOr(x: unknown): x is MediaOr;
}

export declare type MediaOrWalkerEntry = MediaInParensWalkerEntry | MediaInParens;

export declare type MediaOrWalkerParent = MediaInParensWalkerParent | MediaOr;

export declare type MediaQuery = MediaQueryWithType | MediaQueryWithoutType | MediaQueryInvalid;

export declare class MediaQueryInvalid {
    type: NodeType;
    media: Array<ComponentValue>;
    constructor(media: Array<ComponentValue>);
    negateQuery(): Array<MediaQuery>;
    tokens(): Array<CSSToken>;
    toString(): string;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaQueryInvalidWalkerEntry;
        parent: MediaQueryInvalidWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaQueryInvalid(): this is MediaQueryInvalid;
    static isMediaQueryInvalid(x: unknown): x is MediaQueryInvalid;
}

export declare type MediaQueryInvalidWalkerEntry = ComponentValue;

export declare type MediaQueryInvalidWalkerParent = ComponentValue | MediaQueryInvalid;

export declare enum MediaQueryModifier {
    Not = "not",
    Only = "only"
}

export declare class MediaQueryWithoutType {
    type: NodeType;
    media: MediaCondition;
    constructor(media: MediaCondition);
    negateQuery(): Array<MediaQuery>;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaCondition): number | string;
    at(index: number | string): MediaCondition | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaQueryWithoutTypeWalkerEntry;
        parent: MediaQueryWithoutTypeWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaQueryWithoutType(): this is MediaQueryWithoutType;
    static isMediaQueryWithoutType(x: unknown): x is MediaQueryWithoutType;
}

export declare type MediaQueryWithoutTypeWalkerEntry = MediaConditionWalkerEntry | MediaCondition;

export declare type MediaQueryWithoutTypeWalkerParent = MediaConditionWalkerParent | MediaQueryWithoutType;

export declare class MediaQueryWithType {
    type: NodeType;
    modifier: Array<CSSToken>;
    mediaType: Array<CSSToken>;
    and: Array<CSSToken> | undefined;
    media: MediaCondition | undefined;
    constructor(modifier: Array<CSSToken>, mediaType: Array<CSSToken>, and?: Array<CSSToken>, media?: MediaCondition);
    getModifier(): string;
    negateQuery(): Array<MediaQuery>;
    getMediaType(): string;
    tokens(): Array<CSSToken>;
    toString(): string;
    indexOf(item: MediaCondition): number | string;
    at(index: number | string): MediaCondition | undefined;
    walk<T extends Record<string, unknown>>(cb: (entry: {
        node: MediaQueryWithTypeWalkerEntry;
        parent: MediaQueryWithTypeWalkerParent;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * @internal
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isMediaQueryWithType(): this is MediaQueryWithType;
    static isMediaQueryWithType(x: unknown): x is MediaQueryWithType;
}

export declare type MediaQueryWithTypeWalkerEntry = MediaConditionWalkerEntry | MediaCondition;

export declare type MediaQueryWithTypeWalkerParent = MediaConditionWalkerParent | MediaQueryWithType;

export declare enum MediaType {
    /** Always matches */
    All = "all",
    Print = "print",
    Screen = "screen",
    /** Never matches */
    Tty = "tty",
    /** Never matches */
    Tv = "tv",
    /** Never matches */
    Projection = "projection",
    /** Never matches */
    Handheld = "handheld",
    /** Never matches */
    Braille = "braille",
    /** Never matches */
    Embossed = "embossed",
    /** Never matches */
    Aural = "aural",
    /** Never matches */
    Speech = "speech"
}

export declare function modifierFromToken(token: TokenIdent): MediaQueryModifier | false;

export declare function newMediaFeatureBoolean(name: string): MediaFeature;

export declare function newMediaFeaturePlain(name: string, ...value: Array<CSSToken>): MediaFeature;

export declare enum NodeType {
    CustomMedia = "custom-media",
    GeneralEnclosed = "general-enclosed",
    MediaAnd = "media-and",
    MediaCondition = "media-condition",
    MediaConditionListWithAnd = "media-condition-list-and",
    MediaConditionListWithOr = "media-condition-list-or",
    MediaFeature = "media-feature",
    MediaFeatureBoolean = "mf-boolean",
    MediaFeatureName = "mf-name",
    MediaFeaturePlain = "mf-plain",
    MediaFeatureRangeNameValue = "mf-range-name-value",
    MediaFeatureRangeValueName = "mf-range-value-name",
    MediaFeatureRangeValueNameValue = "mf-range-value-name-value",
    MediaFeatureValue = "mf-value",
    MediaInParens = "media-in-parens",
    MediaNot = "media-not",
    MediaOr = "media-or",
    MediaQueryWithType = "media-query-with-type",
    MediaQueryWithoutType = "media-query-without-type",
    MediaQueryInvalid = "media-query-invalid"
}

export declare function parse(source: string, options?: {
    preserveInvalidMediaQueries?: boolean;
    onParseError?: (error: ParseError) => void;
}): Array<MediaQuery>;

export declare function parseCustomMedia(source: string, options?: {
    preserveInvalidMediaQueries?: boolean;
    onParseError?: (error: ParseError) => void;
}): CustomMedia | false;

export declare function parseCustomMediaFromTokens(tokens: Array<CSSToken>, options?: {
    preserveInvalidMediaQueries?: boolean;
    onParseError?: (error: ParseError) => void;
}): CustomMedia | false;

export declare function parseFromTokens(tokens: Array<CSSToken>, options?: {
    preserveInvalidMediaQueries?: boolean;
    onParseError?: (error: ParseError) => void;
}): Array<MediaQuery>;

export declare function typeFromToken(token: TokenIdent): MediaType | false;

export { }
