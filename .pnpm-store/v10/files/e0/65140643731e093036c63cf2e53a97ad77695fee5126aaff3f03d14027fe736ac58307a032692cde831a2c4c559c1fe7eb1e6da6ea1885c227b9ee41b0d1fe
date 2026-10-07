import type { Plugin, CodeKeywordDefinition, ErrorObject } from "ajv";
type Kwd = "formatMaximum" | "formatMinimum" | "formatExclusiveMaximum" | "formatExclusiveMinimum";
type Comparison = "<=" | ">=" | "<" | ">";
export type LimitFormatError = ErrorObject<Kwd, {
    limit: string;
    comparison: Comparison;
}>;
export declare const formatLimitDefinition: CodeKeywordDefinition;
declare const formatLimitPlugin: Plugin<undefined>;
export default formatLimitPlugin;
