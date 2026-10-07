import type { CodeKeywordDefinition, ErrorObject, KeywordErrorDefinition, SchemaObject } from "../../types";
import type { KeywordCxt } from "../../compile/validate";
import { _JTDTypeError } from "./error";
declare enum PropError {
    Additional = "additional",
    Missing = "missing"
}
type PropKeyword = "properties" | "optionalProperties";
type PropSchema = {
    [P in string]?: SchemaObject;
};
export type JTDPropertiesError = _JTDTypeError<PropKeyword, "object", PropSchema> | ErrorObject<PropKeyword, {
    error: PropError.Additional;
    additionalProperty: string;
}, PropSchema> | ErrorObject<PropKeyword, {
    error: PropError.Missing;
    missingProperty: string;
}, PropSchema>;
export declare const error: KeywordErrorDefinition;
declare const def: CodeKeywordDefinition;
export declare function validateProperties(cxt: KeywordCxt): void;
export default def;
