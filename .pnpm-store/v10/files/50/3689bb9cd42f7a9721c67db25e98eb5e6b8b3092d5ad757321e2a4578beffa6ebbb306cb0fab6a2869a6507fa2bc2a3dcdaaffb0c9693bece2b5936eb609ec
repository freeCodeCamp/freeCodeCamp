import type { FuncKeywordDefinition } from "ajv";
export declare type DynamicDefaultFunc = (args?: Record<string, any>) => () => any;
declare const DEFAULTS: Record<string, DynamicDefaultFunc | undefined>;
declare const getDef: (() => FuncKeywordDefinition) & {
    DEFAULTS: typeof DEFAULTS;
};
export default getDef;
