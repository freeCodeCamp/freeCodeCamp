export default ValidationError;
export type JSONSchema6 = import('json-schema').JSONSchema6;
export type JSONSchema7 = import('json-schema').JSONSchema7;
export type Schema =
  | (import('json-schema').JSONSchema4 & import('./validate').Extend)
  | (import('json-schema').JSONSchema6 & import('./validate').Extend)
  | (import('json-schema').JSONSchema7 & import('./validate').Extend);
export type ValidationErrorConfiguration = {
  name?: string | undefined;
  baseDataPath?: string | undefined;
  postFormatter?: import('./validate').PostFormatter | undefined;
};
export type PostFormatter = (
  formattedError: string,
  error: import('ajv').ErrorObject & {
    children?: import('ajv').ErrorObject[] | undefined;
  }
) => string;
export type SchemaUtilErrorObject = import('ajv').ErrorObject & {
  children?: import('ajv').ErrorObject[] | undefined;
};
export type SPECIFICITY = number;
declare class ValidationError extends Error {
  /**
   * @param {Array<SchemaUtilErrorObject>} errors
   * @param {Schema} schema
   * @param {ValidationErrorConfiguration} configuration
   */
  constructor(
    errors: Array<SchemaUtilErrorObject>,
    schema: Schema,
    configuration?: ValidationErrorConfiguration
  );
  /** @type {Array<SchemaUtilErrorObject>} */
  errors: Array<SchemaUtilErrorObject>;
  /** @type {Schema} */
  schema: Schema;
  /** @type {string} */
  headerName: string;
  /** @type {string} */
  baseDataPath: string;
  /** @type {PostFormatter | null} */
  postFormatter: PostFormatter | null;
  /**
   * @param {string} path
   * @returns {Schema}
   */
  getSchemaPart(path: string): Schema;
  /**
   * @param {Schema} schema
   * @param {boolean} logic
   * @param {Array<Object>} prevSchemas
   * @returns {string}
   */
  formatSchema(
    schema: Schema,
    logic?: boolean,
    prevSchemas?: Array<Object>
  ): string;
  /**
   * @param {Schema=} schemaPart
   * @param {(boolean | Array<string>)=} additionalPath
   * @param {boolean=} needDot
   * @param {boolean=} logic
   * @returns {string}
   */
  getSchemaPartText(
    schemaPart?: Schema | undefined,
    additionalPath?: (boolean | Array<string>) | undefined,
    needDot?: boolean | undefined,
    logic?: boolean | undefined
  ): string;
  /**
   * @param {Schema=} schemaPart
   * @returns {string}
   */
  getSchemaPartDescription(schemaPart?: Schema | undefined): string;
  /**
   * @param {SchemaUtilErrorObject} error
   * @returns {string}
   */
  formatValidationError(error: SchemaUtilErrorObject): string;
  /**
   * @param {Array<SchemaUtilErrorObject>} errors
   * @returns {string}
   */
  formatValidationErrors(errors: Array<SchemaUtilErrorObject>): string;
}
