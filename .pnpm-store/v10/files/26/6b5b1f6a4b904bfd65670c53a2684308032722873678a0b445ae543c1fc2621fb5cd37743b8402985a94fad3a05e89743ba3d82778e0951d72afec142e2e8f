import type { ErrorObject, Vocabulary } from "../../types";
import { LimitNumberError } from "./limitNumber";
import { MultipleOfError } from "./multipleOf";
import { PatternError } from "./pattern";
import { RequiredError } from "./required";
import { UniqueItemsError } from "./uniqueItems";
import { ConstError } from "./const";
import { EnumError } from "./enum";
declare const validation: Vocabulary;
export default validation;
type LimitError = ErrorObject<"maxItems" | "minItems" | "minProperties" | "maxProperties" | "minLength" | "maxLength", {
    limit: number;
}, number | {
    $data: string;
}>;
export type ValidationKeywordError = LimitError | LimitNumberError | MultipleOfError | PatternError | RequiredError | UniqueItemsError | ConstError | EnumError;
