import type { Plugin, CodeKeywordDefinition, ErrorObject } from "ajv";
declare type Kwd = "formatMaximum" | "formatMinimum" | "formatExclusiveMaximum" | "formatExclusiveMinimum";
declare type Comparison = "<=" | ">=" | "<" | ">";
export declare type LimitFormatError = ErrorObject<Kwd, {
    limit: string;
    comparison: Comparison;
}>;
export declare const formatLimitDefinition: CodeKeywordDefinition;
declare const formatLimitPlugin: Plugin<undefined>;
export default formatLimitPlugin;
