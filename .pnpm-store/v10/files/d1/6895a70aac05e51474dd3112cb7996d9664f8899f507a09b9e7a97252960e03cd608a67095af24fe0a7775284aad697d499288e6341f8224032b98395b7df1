import { ZodArrayDef } from "zod";
import { ErrorMessages } from "../errorMessages.js";
import { JsonSchema7Type } from "../parseTypes.js";
import { Refs } from "../Refs.js";
export type JsonSchema7ArrayType = {
    type: "array";
    items?: JsonSchema7Type;
    minItems?: number;
    maxItems?: number;
    errorMessages?: ErrorMessages<JsonSchema7ArrayType, "items">;
};
export declare function parseArrayDef(def: ZodArrayDef, refs: Refs): JsonSchema7ArrayType;
