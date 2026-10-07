import type { CodeKeywordDefinition } from "ajv";
declare type TransformName = "trimStart" | "trimEnd" | "trimLeft" | "trimRight" | "trim" | "toLowerCase" | "toUpperCase" | "toEnumCase";
interface TransformConfig {
    hash: Record<string, string | undefined>;
}
declare type Transform = (s: string, cfg?: TransformConfig) => string;
declare const transform: {
    [key in TransformName]: Transform;
};
declare const getDef: (() => CodeKeywordDefinition) & {
    transform: typeof transform;
};
export default getDef;
