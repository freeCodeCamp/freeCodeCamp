export { default as ValidationError } from "./ValidationError";
export type JSONSchema4 = import("json-schema").JSONSchema4;
export type JSONSchema6 = import("json-schema").JSONSchema6;
export type JSONSchema7 = import("json-schema").JSONSchema7;
export type ErrorObject = import("ajv").ErrorObject;
export type ExtendedSchema = {
  /**
   * format minimum
   */
  formatMinimum?: (string | number) | undefined;
  /**
   * format maximum
   */
  formatMaximum?: (string | number) | undefined;
  /**
   * format exclusive minimum
   */
  formatExclusiveMinimum?: (string | boolean) | undefined;
  /**
   * format exclusive maximum
   */
  formatExclusiveMaximum?: (string | boolean) | undefined;
  /**
   * link
   */
  link?: string | undefined;
  /**
   * undefined will be resolved as null
   */
  undefinedAsNull?: boolean | undefined;
};
export type Extend = ExtendedSchema;
export type Schema = (JSONSchema4 | JSONSchema6 | JSONSchema7) & ExtendedSchema;
export type SchemaUtilErrorObject = ErrorObject & {
  children?: Array<ErrorObject>;
};
export type PostFormatter = (
  formattedError: string,
  error: SchemaUtilErrorObject,
) => string;
export type ValidationErrorConfiguration = {
  /**
   * name
   */
  name?: string | undefined;
  /**
   * base data path
   */
  baseDataPath?: string | undefined;
  /**
   * post formatter
   */
  postFormatter?: PostFormatter | undefined;
};
/**
 * @param {Schema} schema schema
 * @param {Array<object> | object} options options
 * @param {ValidationErrorConfiguration=} configuration configuration
 * @returns {void}
 */
export function validate(
  schema: Schema,
  options: Array<object> | object,
  configuration?: ValidationErrorConfiguration | undefined,
): void;
/**
 * @returns {void}
 */
export function enableValidation(): void;
/**
 * @returns {void}
 */
export function disableValidation(): void;
/**
 * @returns {boolean} true when need validate, otherwise false
 */
export function needValidate(): boolean;
