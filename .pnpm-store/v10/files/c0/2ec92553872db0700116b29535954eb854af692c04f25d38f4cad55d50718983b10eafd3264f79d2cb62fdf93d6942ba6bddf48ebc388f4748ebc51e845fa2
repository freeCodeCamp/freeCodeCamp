import { type RootResult } from '../result/RootResult';
export type JtpResult = JtpNameResult | JtpNullableResult | JtpNotNullableResult | JtpOptionalResult | JtpVariadicResult | JtpTypeOfResult | JtpTupleResult | JtpKeyOfResult | JtpStringValueResult | JtpImportResult | JtpAnyResult | JtpUnknownResult | JtpFunctionResult | JtpGenericResult | JtpRecordEntryResult | JtpRecordResult | JtpMemberResult | JtpUnionResult | JtpParenthesisResult | JtpNamedParameterResult | JtpModuleResult | JtpFilePath | JtpIntersectionResult | JtpNumberResult;
type JtpQuoteStyle = 'single' | 'double' | 'none';
export interface JtpNullableResult {
    type: 'NULLABLE';
    value: JtpResult;
    meta: {
        syntax: 'PREFIX_QUESTION_MARK' | 'SUFFIX_QUESTION_MARK';
    };
}
export interface JtpNotNullableResult {
    type: 'NOT_NULLABLE';
    value: JtpResult;
    meta: {
        syntax: 'PREFIX_BANG' | 'SUFFIX_BANG';
    };
}
export interface JtpOptionalResult {
    type: 'OPTIONAL';
    value: JtpResult;
    meta: {
        syntax: 'PREFIX_EQUAL_SIGN' | 'SUFFIX_EQUALS_SIGN' | 'SUFFIX_KEY_QUESTION_MARK';
    };
}
export interface JtpVariadicResult {
    type: 'VARIADIC';
    value?: JtpResult;
    meta: {
        syntax: 'PREFIX_DOTS' | 'SUFFIX_DOTS' | 'ONLY_DOTS';
    };
}
export interface JtpNameResult {
    type: 'NAME';
    name: string;
}
export interface JtpTypeOfResult {
    type: 'TYPE_QUERY';
    name?: JtpResult;
}
export interface JtpKeyOfResult {
    type: 'KEY_QUERY';
    value?: JtpResult;
}
export interface JtpTupleResult {
    type: 'TUPLE';
    entries: JtpResult[];
}
export interface JtpStringValueResult {
    type: 'STRING_VALUE';
    quoteStyle: JtpQuoteStyle;
    string: string;
}
export interface JtpImportResult {
    type: 'IMPORT';
    path: JtpStringValueResult;
}
export interface JtpAnyResult {
    type: 'ANY';
}
export interface JtpUnknownResult {
    type: 'UNKNOWN';
}
export interface JtpFunctionResult {
    type: 'FUNCTION' | 'ARROW';
    params: JtpResult[];
    returns: JtpResult | null;
    new: JtpResult | null;
    this?: JtpResult | null;
}
export interface JtpGenericResult {
    type: 'GENERIC';
    subject: JtpResult;
    objects: JtpResult[];
    meta: {
        syntax: 'ANGLE_BRACKET' | 'ANGLE_BRACKET_WITH_DOT' | 'SQUARE_BRACKET';
    };
}
export interface JtpRecordEntryResult {
    type: 'RECORD_ENTRY';
    key: string;
    quoteStyle: JtpQuoteStyle;
    value: JtpResult | null;
    readonly: false;
}
export interface JtpRecordResult {
    type: 'RECORD';
    entries: JtpRecordEntryResult[];
}
export interface JtpMemberResult {
    type: 'MEMBER' | 'INNER_MEMBER' | 'INSTANCE_MEMBER';
    owner: JtpResult;
    name: string;
    quoteStyle: JtpQuoteStyle;
    hasEventPrefix: boolean;
}
export interface JtpUnionResult {
    type: 'UNION';
    left: JtpResult;
    right: JtpResult;
}
export interface JtpIntersectionResult {
    type: 'INTERSECTION';
    left: JtpResult;
    right: JtpResult;
}
export interface JtpParenthesisResult {
    type: 'PARENTHESIS';
    value: JtpResult;
}
export interface JtpNamedParameterResult {
    type: 'NAMED_PARAMETER';
    name: string;
    typeName: JtpResult;
}
export interface JtpModuleResult {
    type: 'MODULE';
    value: JtpResult;
}
export interface JtpFilePath {
    type: 'FILE_PATH';
    quoteStyle: JtpQuoteStyle;
    path: string;
}
export interface JtpNumberResult {
    type: 'NUMBER_VALUE';
    number: string;
}
export declare function jtpTransform(result: RootResult): JtpResult;
export {};
