'use strict'

class MergeError extends Error {
  constructor (keyword, schemas) {
    super()
    this.name = 'JsonSchemaMergeError'
    this.code = 'JSON_SCHEMA_MERGE_ERROR'
    this.message = `Failed to merge "${keyword}" keyword schemas.`
    this.schemas = schemas
  }
}

class ResolverNotFoundError extends Error {
  constructor (keyword, schemas) {
    super()
    this.name = 'JsonSchemaMergeError'
    this.code = 'JSON_SCHEMA_MERGE_ERROR'
    this.message = `Resolver for "${keyword}" keyword not found.`
    this.schemas = schemas
  }
}

class InvalidOnConflictOptionError extends Error {
  constructor (onConflict) {
    super()
    this.name = 'JsonSchemaMergeError'
    this.code = 'JSON_SCHEMA_MERGE_ERROR'
    this.message = `Invalid "onConflict" option: "${onConflict}".`
  }
}

module.exports = {
  MergeError,
  ResolverNotFoundError,
  InvalidOnConflictOptionError
}
