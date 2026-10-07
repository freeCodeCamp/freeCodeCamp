export default validate;
export type JSONSchema4 = import('json-schema').JSONSchema4;
export type JSONSchema6 = import('json-schema').JSONSchema6;
export type JSONSchema7 = import('json-schema').JSONSchema7;
export type ErrorObject = import('ajv').ErrorObject;
export type Extend = {
  formatMinimum?: number | undefined;
  formatMaximum?: number | undefined;
  formatExclusiveMinimum?: boolean | undefined;
  formatExclusiveMaximum?: boolean | undefined;
};
export type Schema =
  | (import('json-schema').JSONSchema4 & Extend)
  | (import('json-schema').JSONSchema6 & Extend)
  | (import('json-schema').JSONSchema7 & Extend);
export type SchemaUtilErrorObject = import('ajv').ErrorObject & {
  children?: import('ajv').ErrorObject[] | undefined;
};
export type PostFormatter = (
  formattedError: string,
  error: SchemaUtilErrorObject
) => string;
export type ValidationErrorConfiguration = {
  name?: string | undefined;
  baseDataPath?: string | undefined;
  postFormatter?: PostFormatter | undefined;
};
/**
 * @param {Schema} schema
 * @param {Array<object> | object} options
 * @param {ValidationErrorConfiguration=} configuration
 * @returns {void}
 */
declare function validate(
  schema: Schema,
  options: Array<object> | object,
  configuration?: ValidationErrorConfiguration | undefined
): void;
declare namespace validate {
  export { ValidationError };
  export { ValidationError as ValidateError };
}
import ValidationError from './ValidationError';
