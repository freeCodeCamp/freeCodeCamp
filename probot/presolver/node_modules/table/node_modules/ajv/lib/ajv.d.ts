declare var ajv: { 
  (options?: ajv.Options): ajv.Ajv;
  new (options?: ajv.Options): ajv.Ajv;
}

declare namespace ajv {
  interface Ajv {
    /**
    * Validate data using schema
    * Schema will be compiled and cached (using serialized JSON as key. [json-stable-stringify](https://github.com/substack/json-stable-stringify) is used to serialize.
    * @param  {String|Object} schemaKeyRef key, ref or schema object
    * @param  {Any} data to be validated
    * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
    */
    validate(schemaKeyRef: Object | string, data: any): boolean;
    /**
    * Create validating function for passed schema.
    * @param  {Object} schema schema object
    * @return {Function} validating function
    */
    compile(schema: Object): ValidateFunction;
    /**
    * Creates validating function for passed schema with asynchronous loading of missing schemas.
    * `loadSchema` option should be a function that accepts schema uri and node-style callback.
    * @this  Ajv
    * @param {Object}   schema schema object
    * @param {Function} callback node-style callback, it is always called with 2 parameters: error (or null) and validating function.
    */
    compileAsync(schema: Object, callback: (err: Error, validate: ValidateFunction) => any): void;
    /**
    * Adds schema to the instance.
    * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
    * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
    */
    addSchema(schema: Array<Object> | Object, key?: string): void;
    /**
    * Add schema that will be used to validate other schemas
    * options in META_IGNORE_OPTIONS are alway set to false
    * @param {Object} schema schema object
    * @param {String} key optional schema key
    */
    addMetaSchema(schema: Object, key?: string): void;
    /**
    * Validate schema
    * @param {Object} schema schema to validate
    * @return {Boolean} true if schema is valid
    */
    validateSchema(schema: Object): boolean;
    /**
    * Get compiled schema from the instance by `key` or `ref`.
    * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
    * @return {Function} schema validating function (with property `schema`).
    */
    getSchema(keyRef: string): ValidateFunction;
    /**
    * Remove cached schema(s).
    * If no parameter is passed all schemas but meta-schemas are removed.
    * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
    */
    removeSchema(schemaKeyRef?: Object | string | RegExp): void;
    /**
    * Add custom format
    * @param {String} name format name
    * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
    */
    addFormat(name: string, format: FormatValidator | FormatDefinition): void;
    /**
    * Define custom keyword
    * @this  Ajv
    * @param {String} keyword custom keyword, should be a valid identifier, should be different from all standard, custom and macro keywords.
    * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
    */
    addKeyword(keyword: string, definition: KeywordDefinition): void;
    /**
    * Get keyword definition
    * @this  Ajv
    * @param {String} keyword pre-defined or custom keyword.
    * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
    */
    getKeyword(keyword: string): Object | boolean;
    /**
    * Remove keyword
    * @this  Ajv
    * @param {String} keyword pre-defined or custom keyword.
    */
    removeKeyword(keyword: string): void;
    /**
    * Convert array of error message objects to string
    * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
    * @param  {Object} options optional options with properties `separator` and `dataVar`.
    * @return {String} human readable string with all errors descriptions
    */
    errorsText(errors?: Array<ErrorObject>, options?: ErrorsTextOptions): string;
    errors?: Array<ErrorObject>;
  }

  interface Thenable <R> {
    then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  }

  interface ValidateFunction {
    (
      data: any,
      dataPath?: string,
      parentData?: Object | Array<any>,
      parentDataProperty?: string | number,
      rootData?: Object | Array<any>
    ): boolean | Thenable<boolean>;
    errors?: Array<ErrorObject>;
    schema?: Object;
  }

  interface Options {
    v5?: boolean;
    allErrors?: boolean;
    verbose?: boolean;
    jsonPointers?: boolean;
    uniqueItems?: boolean;
    unicode?: boolean;
    format?: string;
    formats?: Object;
    unknownFormats?: boolean | string | Array<string>;
    schemas?: Array<Object> | Object;
    ownProperties?: boolean;
    missingRefs?: boolean | string;
    extendRefs?: boolean | string;
    loadSchema?: (uri: string, cb: (err: Error, schema: Object) => any) => any;
    removeAdditional?: boolean | string;
    useDefaults?: boolean | string;
    coerceTypes?: boolean | string;
    async?: boolean | string;
    transpile?: string | ((code: string) => string);
    meta?: boolean | Object;
    validateSchema?: boolean | string;
    addUsedSchema?: boolean;
    inlineRefs?: boolean | number;
    passContext?: boolean;
    loopRequired?: number;
    multipleOfPrecision?: number;
    errorDataPath?: string;
    messages?: boolean;
    sourceCode?: boolean;
    beautify?: boolean | Object;
    cache?: Object;
  }

  type FormatValidator = string | RegExp | ((data: string) => boolean);

  interface FormatDefinition {
    validate: FormatValidator;
    compare: (data1: string, data2: string) => number;
    async?: boolean;
  }

  interface KeywordDefinition {
    type?: string | Array<string>;
    async?: boolean;
    errors?: boolean | string;
    // schema: false makes validate not to expect schema (ValidateFunction)
    schema?: boolean;
    modifying?: boolean;
    valid?: boolean;
    // one and only one of the following properties should be present
    validate?: ValidateFunction | SchemaValidateFunction;
    compile?: (schema: Object, parentSchema: Object) => ValidateFunction;
    macro?: (schema: Object, parentSchema: Object) => Object;
    inline?: (it: Object, keyword: string, schema: Object, parentSchema: Object) => string;
  }

  interface SchemaValidateFunction {
    (
      schema: Object,
      data: any,
      parentSchema?: Object,
      dataPath?: string,
      parentData?: Object | Array<any>,
      parentDataProperty?: string | number
    ): boolean | Thenable<boolean>;
    errors?: Array<ErrorObject>;
  }

  interface ErrorsTextOptions {
    separator?: string;
    dataVar?: string;
  }

  interface ErrorObject {
    keyword: string;
    dataPath: string;
    schemaPath: string;
    params: ErrorParameters;
    // Excluded if messages set to false.
    message?: string;
    // These are added with the `verbose` option.
    schema?: Object;
    parentSchema?: Object;
    data?: any;
  }

  type ErrorParameters = RefParams | LimitParams | AdditionalPropertiesParams |
                          DependenciesParams | FormatParams | ComparisonParams |
                          MultipleOfParams | PatternParams | RequiredParams |
                          TypeParams | UniqueItemsParams | CustomParams |
                          PatternGroupsParams | PatternRequiredParams |
                          SwitchParams | NoParams | EnumParams;

  interface RefParams {
    ref: string;
  }

  interface LimitParams {
    limit: number;
  }

  interface AdditionalPropertiesParams {
    additionalProperty: string;
  }

  interface DependenciesParams {
    property: string;
    missingProperty: string;
    depsCount: number;
    deps: string;
  }

  interface FormatParams {
    format: string
  }

  interface ComparisonParams {
    comparison: string;
    limit: number | string;
    exclusive: boolean;
  }

  interface MultipleOfParams {
    multipleOf: number;
  }

  interface PatternParams {
    pattern: string;
  }

  interface RequiredParams {
    missingProperty: string;
  }

  interface TypeParams {
    type: string;
  }

  interface UniqueItemsParams {
    i: number;
    j: number;
  }

  interface CustomParams {
    keyword: string;
  }

  interface PatternGroupsParams {
    reason: string;
    limit: number;
    pattern: string;
  }

  interface PatternRequiredParams {
    missingPattern: string;
  }

  interface SwitchParams {
    caseIndex: number;
  }

  interface NoParams {}

  interface EnumParams {
    allowedValues: Array<any>;
  }
}

export = ajv;
