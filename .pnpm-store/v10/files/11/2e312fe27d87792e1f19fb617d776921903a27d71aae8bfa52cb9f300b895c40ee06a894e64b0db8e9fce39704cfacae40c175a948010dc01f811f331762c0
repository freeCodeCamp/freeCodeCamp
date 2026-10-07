import { ZodSetDef } from "zod";
import { ErrorMessages } from "../errorMessages.js";
import { JsonSchema7Type } from "../parseTypes.js";
import { Refs } from "../Refs.js";
export type JsonSchema7SetType = {
    type: "array";
    uniqueItems: true;
    items?: JsonSchema7Type;
    minItems?: number;
    maxItems?: number;
    errorMessage?: ErrorMessages<JsonSchema7SetType>;
};
export declare function parseSetDef(def: ZodSetDef, refs: Refs): JsonSchema7SetType;
