'use strict'

const { dequal: deepEqual } = require('dequal')

const jsonSchemaRefSymbol = Symbol.for('json-schema-ref')

class RefResolver {
  #schemas
  #derefSchemas
  #insertRefSymbol
  #allowEqualDuplicates
  #cloneSchemaWithoutRefs

  constructor (opts = {}) {
    this.#schemas = {}
    this.#derefSchemas = {}
    this.#insertRefSymbol = opts.insertRefSymbol ?? false
    this.#allowEqualDuplicates = opts.allowEqualDuplicates ?? true
    this.#cloneSchemaWithoutRefs = opts.cloneSchemaWithoutRefs ?? false
  }

  addSchema (schema, rootSchemaId, isRootSchema = true) {
    if (isRootSchema) {
      if (schema.$id !== undefined && schema.$id.charAt(0) !== '#') {
        // Schema has an $id that is not an anchor
        rootSchemaId = schema.$id
      } else {
        // Schema has no $id or $id is an anchor
        this.#insertSchemaBySchemaId(schema, rootSchemaId)
      }
    }

    const schemaId = schema.$id
    if (schemaId !== undefined && typeof schemaId === 'string') {
      if (schemaId.charAt(0) === '#') {
        this.#insertSchemaByAnchor(schema, rootSchemaId, schemaId)
      } else {
        this.#insertSchemaBySchemaId(schema, schemaId)
        rootSchemaId = schemaId
      }
    }

    const ref = schema.$ref
    if (ref !== undefined && typeof ref === 'string') {
      const { refSchemaId, refJsonPointer } = this.#parseSchemaRef(ref, rootSchemaId)
      this.#schemas[rootSchemaId].refs.push({
        schemaId: refSchemaId,
        jsonPointer: refJsonPointer
      })
    }

    for (const key in schema) {
      if (typeof schema[key] === 'object' && schema[key] !== null) {
        this.addSchema(schema[key], rootSchemaId, false)
      }
    }
  }

  getSchema (schemaId, jsonPointer = '#') {
    const schema = this.#schemas[schemaId]
    if (schema === undefined) {
      throw new Error(
        `Cannot resolve ref "${schemaId}${jsonPointer}". Schema with id "${schemaId}" is not found.`
      )
    }
    if (schema.anchors[jsonPointer] !== undefined) {
      return schema.anchors[jsonPointer]
    }
    return getDataByJSONPointer(schema.schema, jsonPointer)
  }

  hasSchema (schemaId) {
    return this.#schemas[schemaId] !== undefined
  }

  getSchemaRefs (schemaId) {
    const schema = this.#schemas[schemaId]
    if (schema === undefined) {
      throw new Error(`Schema with id "${schemaId}" is not found.`)
    }
    return schema.refs
  }

  getSchemaDependencies (schemaId, dependencies = {}) {
    const schema = this.#schemas[schemaId]

    for (const ref of schema.refs) {
      const dependencySchemaId = ref.schemaId
      if (
        dependencySchemaId === schemaId ||
        dependencies[dependencySchemaId] !== undefined
      ) continue

      dependencies[dependencySchemaId] = this.getSchema(dependencySchemaId)
      this.getSchemaDependencies(dependencySchemaId, dependencies)
    }

    return dependencies
  }

  derefSchema (schemaId) {
    if (this.#derefSchemas[schemaId] !== undefined) return

    const schema = this.#schemas[schemaId]
    if (schema === undefined) {
      throw new Error(`Schema with id "${schemaId}" is not found.`)
    }

    if (!this.#cloneSchemaWithoutRefs && schema.refs.length === 0) {
      this.#derefSchemas[schemaId] = {
        schema: schema.schema,
        anchors: schema.anchors
      }
    }

    const refs = []
    this.#addDerefSchema(schema.schema, schemaId, true, refs)

    const dependencies = this.getSchemaDependencies(schemaId)
    for (const schemaId in dependencies) {
      const schema = dependencies[schemaId]
      this.#addDerefSchema(schema, schemaId, true, refs)
    }

    for (const ref of refs) {
      const {
        refSchemaId,
        refJsonPointer
      } = this.#parseSchemaRef(ref.ref, ref.sourceSchemaId)

      const targetSchema = this.getDerefSchema(refSchemaId, refJsonPointer)
      if (targetSchema === null) {
        throw new Error(
          `Cannot resolve ref "${ref.ref}". Ref "${refJsonPointer}" is not found in schema "${refSchemaId}".`
        )
      }

      ref.targetSchema = targetSchema
      ref.targetSchemaId = refSchemaId
    }

    for (const ref of refs) {
      this.#resolveRef(ref, refs)
    }
  }

  getDerefSchema (schemaId, jsonPointer = '#') {
    let derefSchema = this.#derefSchemas[schemaId]
    if (derefSchema === undefined) {
      this.derefSchema(schemaId)
      derefSchema = this.#derefSchemas[schemaId]
    }
    if (derefSchema.anchors[jsonPointer] !== undefined) {
      return derefSchema.anchors[jsonPointer]
    }
    return getDataByJSONPointer(derefSchema.schema, jsonPointer)
  }

  #parseSchemaRef (ref, schemaId) {
    const sharpIndex = ref.indexOf('#')
    if (sharpIndex === -1) {
      return { refSchemaId: ref, refJsonPointer: '#' }
    }
    if (sharpIndex === 0) {
      return { refSchemaId: schemaId, refJsonPointer: ref }
    }
    return {
      refSchemaId: ref.slice(0, sharpIndex),
      refJsonPointer: ref.slice(sharpIndex)
    }
  }

  #addDerefSchema (schema, rootSchemaId, isRootSchema, refs = []) {
    const derefSchema = Array.isArray(schema) ? [...schema] : { ...schema }

    if (isRootSchema) {
      if (schema.$id !== undefined && schema.$id.charAt(0) !== '#') {
        // Schema has an $id that is not an anchor
        rootSchemaId = schema.$id
      } else {
        // Schema has no $id or $id is an anchor
        this.#insertDerefSchemaBySchemaId(derefSchema, rootSchemaId)
      }
    }

    const schemaId = derefSchema.$id
    if (schemaId !== undefined && typeof schemaId === 'string') {
      if (schemaId.charAt(0) === '#') {
        this.#insertDerefSchemaByAnchor(derefSchema, rootSchemaId, schemaId)
      } else {
        this.#insertDerefSchemaBySchemaId(derefSchema, schemaId)
        rootSchemaId = schemaId
      }
    }

    if (derefSchema.$ref !== undefined) {
      refs.push({
        ref: derefSchema.$ref,
        sourceSchemaId: rootSchemaId,
        sourceSchema: derefSchema
      })
    }

    for (const key in derefSchema) {
      const value = derefSchema[key]
      if (typeof value === 'object' && value !== null) {
        derefSchema[key] = this.#addDerefSchema(value, rootSchemaId, false, refs)
      }
    }

    return derefSchema
  }

  #resolveRef (ref, refs) {
    const { sourceSchema, targetSchema } = ref

    if (!sourceSchema.$ref) return
    if (this.#insertRefSymbol) {
      sourceSchema[jsonSchemaRefSymbol] = sourceSchema.$ref
    }

    delete sourceSchema.$ref

    if (targetSchema.$ref) {
      const targetSchemaRef = refs.find(ref => ref.sourceSchema === targetSchema)
      this.#resolveRef(targetSchemaRef, refs)
    }
    for (const key in targetSchema) {
      if (key === '$id') continue
      if (sourceSchema[key] !== undefined) {
        if (deepEqual(sourceSchema[key], targetSchema[key])) continue
        throw new Error(
          `Cannot resolve ref "${ref.ref}". Property "${key}" already exists in schema "${ref.sourceSchemaId}".`
        )
      }
      sourceSchema[key] = targetSchema[key]
    }
    ref.isResolved = true
  }

  #insertSchemaBySchemaId (schema, schemaId) {
    const foundSchema = this.#schemas[schemaId]
    if (foundSchema !== undefined) {
      if (this.#allowEqualDuplicates && deepEqual(schema, foundSchema.schema)) return
      throw new Error(`There is already another schema with id "${schemaId}".`)
    }
    this.#schemas[schemaId] = { schema, anchors: {}, refs: [] }
  }

  #insertSchemaByAnchor (schema, schemaId, anchor) {
    const { anchors } = this.#schemas[schemaId]
    if (anchors[anchor] !== undefined) {
      throw new Error(`There is already another anchor "${anchor}" in schema "${schemaId}".`)
    }
    anchors[anchor] = schema
  }

  #insertDerefSchemaBySchemaId (schema, schemaId) {
    const foundSchema = this.#derefSchemas[schemaId]
    if (foundSchema !== undefined) return

    this.#derefSchemas[schemaId] = { schema, anchors: {} }
  }

  #insertDerefSchemaByAnchor (schema, schemaId, anchor) {
    const { anchors } = this.#derefSchemas[schemaId]
    anchors[anchor] = schema
  }
}

function getDataByJSONPointer (data, jsonPointer) {
  const parts = jsonPointer.split('/')
  let current = data
  for (const part of parts) {
    if (part === '' || part === '#') continue
    if (typeof current !== 'object' || current === null) {
      return null
    }
    current = current[part]
  }
  return current ?? null
}

module.exports = { RefResolver }
