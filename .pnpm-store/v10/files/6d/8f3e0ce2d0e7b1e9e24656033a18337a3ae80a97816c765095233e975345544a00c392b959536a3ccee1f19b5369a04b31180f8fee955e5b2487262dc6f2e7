/**
  * RefResolver class is used to resolve JSON references.
  * @class
  * @constructor
  */
declare class RefResolver {
  /**
   * @param {object} opts - Options for the resolver.
   * @param {boolean} opts.allowEqualDuplicates - Whether to allow schemas with equal ids to be added to the resolver.
   */
  constructor (opts?: { allowEqualDuplicates?: boolean })

  /**
   * Adds the given schema to the resolver.
   * @param {any} schema - The schema to be added.
   * @param {string} schemaId - The default schema id of the schema to be added.
   */
  addSchema (schema: any, schemaId?: string): void

  /**
   * Returns the schema by the given schema id and jsonPointer.
   * If jsonPointer is not provided, returns the root schema.
   * @param {string} schemaId - The schema id of the schema to be returned.
   * @param {string} jsonPointer - The jsonPointer of the schema to be returned.
   * @returns {any | null} The schema by the given schema id and jsonPointer.
   */
  getSchema (schemaId: string, jsonPointer?: string): any | null

  /**
   * Returns true if the schema by the given schema id is added to the resolver.
   * @param {string} schemaId - The schema id of the schema to be checked.
   * @returns {boolean} True if the schema by the given schema id is added to the resolver.
   */
  hasSchema (schemaId: string): boolean

  /**
   * Returns the schema references of the schema by the given schema id.
   * @param {string} schemaId - The schema id of the schema whose references are to be returned.
   * @returns {Array<{ schemaId: string; jsonPointer: string }>} The schema references of the schema by the given schema id.
   */
  getSchemaRefs (schemaId: string): { schemaId: string; jsonPointer: string }[]

  /**
   * Returns all the schema dependencies of the schema by the given schema id.
   * @param {string} schemaId - The schema id of the schema whose dependencies are to be returned.
   * @returns {object} The schema dependencies of the schema by the given schema id.
   */
  getSchemaDependencies (schemaId: string): { [key: string]: any }

  /**
   * Dereferences the schema by the given schema id.
   * @param {string} schemaId - The schema id of the schema to be dereferenced.
   */
  derefSchema (schemaId: string): void

  /**
   * Returns the dereferenced schema by the given schema id and jsonPointer.
   * If jsonPointer is not provided, returns the dereferenced root schema.
   * If the schema is not dereferenced yet, dereferences it first.
   * @param {string} schemaId - The schema id of the schema to be returned.
   * @param {string} jsonPointer - The jsonPointer of the schema to be returned.
   * @returns {any | null} The dereferenced schema by the given schema id and jsonPointer.
   */
  getDerefSchema (schemaId: string, jsonPointer?: string): any | null
}

export { RefResolver }
