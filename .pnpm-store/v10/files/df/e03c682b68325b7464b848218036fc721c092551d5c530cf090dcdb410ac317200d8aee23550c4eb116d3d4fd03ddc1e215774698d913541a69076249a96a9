import type { CodeKeywordDefinition } from "../../types";
import { _JTDTypeError } from "./error";
export type JTDTypeError = _JTDTypeError<"type", JTDType, JTDType>;
export type IntType = "int8" | "uint8" | "int16" | "uint16" | "int32" | "uint32";
export declare const intRange: {
    [T in IntType]: [number, number, number];
};
export type JTDType = "boolean" | "string" | "timestamp" | "float32" | "float64" | IntType;
declare const def: CodeKeywordDefinition;
export default def;
