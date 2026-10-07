'use strict'

const { dequal: deepEqual } = require('dequal')
const resolvers = require('./lib/resolvers')
const errors = require('./lib/errors')

const keywordsResolvers = {
  $id: resolvers.skip,
  type: resolvers.hybridArraysIntersection,
  enum: resolvers.arraysIntersection,
  minLength: resolvers.maxNumber,
  maxLength: resolvers.minNumber,
  minimum: resolvers.maxNumber,
  maximum: resolvers.minNumber,
  multipleOf: resolvers.commonMultiple,
  exclusiveMinimum: resolvers.maxNumber,
  exclusiveMaximum: resolvers.minNumber,
  minItems: resolvers.maxNumber,
  maxItems: resolvers.minNumber,
  maxProperties: resolvers.minNumber,
  minProperties: resolvers.maxNumber,
  const: resolvers.allEqual,
  default: resolvers.allEqual,
  format: resolvers.allEqual,
  required: resolvers.arraysUnion,
  properties: mergeProperties,
  patternProperties: mergeObjects,
  additionalProperties: mergeSchemasResolver,
  items: mergeItems,
  additionalItems: mergeAdditionalItems,
  definitions: mergeObjects,
  $defs: mergeObjects,
  nullable: resolvers.booleanAnd,
  oneOf: mergeOneOf,
  anyOf: mergeOneOf,
  allOf: resolvers.arraysUnion,
  not: mergeSchemasResolver,
  if: mergeIfThenElseSchemas,
  then: resolvers.skip,
  else: resolvers.skip,
  dependencies: mergeDependencies,
  dependentRequired: mergeDependencies,
  dependentSchemas: mergeObjects,
  propertyNames: mergeSchemasResolver,
  uniqueItems: resolvers.booleanOr,
  contains: mergeSchemasResolver
}

function mergeSchemasResolver (keyword, values, mergedSchema, _schemas, options) {
  mergedSchema[keyword] = _mergeSchemas(values, options)
}

function cartesianProduct (arrays) {
  let result = [[]]

  for (const array of arrays) {
    const temp = []
    for (const x of result) {
      for (const y of array) {
        temp.push([...x, y])
      }
    }
    result = temp
  }

  return result
}

function mergeOneOf (keyword, values, mergedSchema, _schemas, options) {
  if (values.length === 1) {
    mergedSchema[keyword] = values[0]
    return
  }

  const product = cartesianProduct(values)
  const mergedOneOf = []
  for (const combination of product) {
    try {
      const mergedSchema = _mergeSchemas(combination, options)
      if (mergedSchema !== undefined) {
        mergedOneOf.push(mergedSchema)
      }
    } catch (error) {
      // If this combination is not valid, we can ignore it.
      if (error instanceof errors.MergeError) continue
      throw error
    }
  }
  mergedSchema[keyword] = mergedOneOf
}

function getSchemaForItem (schema, index) {
  const { items, additionalItems } = schema

  if (Array.isArray(items)) {
    if (index < items.length) {
      return items[index]
    }
    return additionalItems
  }

  if (items !== undefined) {
    return items
  }

  return additionalItems
}

function mergeItems (keyword, values, mergedSchema, schemas, options) {
  let maxArrayItemsLength = 0
  for (const itemsSchema of values) {
    if (Array.isArray(itemsSchema)) {
      maxArrayItemsLength = Math.max(maxArrayItemsLength, itemsSchema.length)
    }
  }

  if (maxArrayItemsLength === 0) {
    mergedSchema[keyword] = _mergeSchemas(values, options)
    return
  }

  const mergedItemsSchemas = []
  for (let i = 0; i < maxArrayItemsLength; i++) {
    const indexItemSchemas = []
    for (const schema of schemas) {
      const itemSchema = getSchemaForItem(schema, i)
      if (itemSchema !== undefined) {
        indexItemSchemas.push(itemSchema)
      }
    }
    mergedItemsSchemas[i] = _mergeSchemas(indexItemSchemas, options)
  }
  mergedSchema[keyword] = mergedItemsSchemas
}

function mergeAdditionalItems (keyword, values, mergedSchema, schemas, options) {
  let hasArrayItems = false
  for (const schema of schemas) {
    if (Array.isArray(schema.items)) {
      hasArrayItems = true
      break
    }
  }

  if (!hasArrayItems) {
    mergedSchema[keyword] = _mergeSchemas(values, options)
    return
  }

  const mergedAdditionalItemsSchemas = []
  for (const schema of schemas) {
    let additionalItemsSchema = schema.additionalItems
    if (
      additionalItemsSchema === undefined &&
      !Array.isArray(schema.items)
    ) {
      additionalItemsSchema = schema.items
    }
    if (additionalItemsSchema !== undefined) {
      mergedAdditionalItemsSchemas.push(additionalItemsSchema)
    }
  }

  mergedSchema[keyword] = _mergeSchemas(mergedAdditionalItemsSchemas, options)
}

function getSchemaForProperty (schema, propertyName) {
  const { properties, patternProperties, additionalProperties } = schema

  if (properties?.[propertyName] !== undefined) {
    return properties[propertyName]
  }

  for (const pattern of Object.keys(patternProperties ?? {})) {
    const regexp = new RegExp(pattern)
    if (regexp.test(propertyName)) {
      return patternProperties[pattern]
    }
  }

  return additionalProperties
}

function mergeProperties (keyword, _values, mergedSchema, schemas, options) {
  const foundProperties = {}
  for (const currentSchema of schemas) {
    const properties = currentSchema.properties ?? {}
    for (const propertyName of Object.keys(properties)) {
      if (foundProperties[propertyName] !== undefined) continue

      const propertySchema = properties[propertyName]
      foundProperties[propertyName] = [propertySchema]

      for (const anotherSchema of schemas) {
        if (currentSchema === anotherSchema) continue

        const propertySchema = getSchemaForProperty(anotherSchema, propertyName)
        if (propertySchema !== undefined) {
          foundProperties[propertyName].push(propertySchema)
        }
      }
    }
  }

  const mergedProperties = {}
  for (const property of Object.keys(foundProperties)) {
    const propertySchemas = foundProperties[property]
    mergedProperties[property] = _mergeSchemas(propertySchemas, options)
  }
  mergedSchema[keyword] = mergedProperties
}

function mergeObjects (keyword, values, mergedSchema, _schemas, options) {
  const objectsProperties = {}

  for (const properties of values) {
    for (const propertyName of Object.keys(properties)) {
      if (objectsProperties[propertyName] === undefined) {
        objectsProperties[propertyName] = []
      }
      objectsProperties[propertyName].push(properties[propertyName])
    }
  }

  const mergedProperties = {}
  for (const propertyName of Object.keys(objectsProperties)) {
    const propertySchemas = objectsProperties[propertyName]
    const mergedPropertySchema = _mergeSchemas(propertySchemas, options)
    mergedProperties[propertyName] = mergedPropertySchema
  }

  mergedSchema[keyword] = mergedProperties
}

function mergeIfThenElseSchemas (_keyword, _values, mergedSchema, schemas, options) {
  for (let i = 0; i < schemas.length; i++) {
    const subSchema = {
      if: schemas[i].if,
      then: schemas[i].then,
      else: schemas[i].else
    }

    if (subSchema.if === undefined) continue

    if (mergedSchema.if === undefined) {
      mergedSchema.if = subSchema.if
      if (subSchema.then !== undefined) {
        mergedSchema.then = subSchema.then
      }
      if (subSchema.else !== undefined) {
        mergedSchema.else = subSchema.else
      }
      continue
    }

    if (mergedSchema.then !== undefined) {
      mergedSchema.then = _mergeSchemas([mergedSchema.then, subSchema], options)
    }
    if (mergedSchema.else !== undefined) {
      mergedSchema.else = _mergeSchemas([mergedSchema.else, subSchema], options)
    }
  }
}

function mergeDependencies (keyword, values, mergedSchema) {
  const mergedDependencies = {}
  for (const dependencies of values) {
    for (const propertyName of Object.keys(dependencies)) {
      if (mergedDependencies[propertyName] === undefined) {
        mergedDependencies[propertyName] = []
      }
      const mergedPropertyDependencies = mergedDependencies[propertyName]
      for (const propertyDependency of dependencies[propertyName]) {
        if (!mergedPropertyDependencies.includes(propertyDependency)) {
          mergedPropertyDependencies.push(propertyDependency)
        }
      }
    }
  }
  mergedSchema[keyword] = mergedDependencies
}

function _mergeSchemas (schemas, options) {
  if (schemas.length === 0) return {}
  if (schemas.length === 1) return schemas[0]

  const mergedSchema = {}
  const keywords = {}

  let allSchemasAreTrue = true

  for (const schema of schemas) {
    if (schema === false) return false
    if (schema === true) continue
    allSchemasAreTrue = false

    for (const keyword of Object.keys(schema)) {
      if (keywords[keyword] === undefined) {
        keywords[keyword] = []
      }
      keywords[keyword].push(schema[keyword])
    }
  }

  if (allSchemasAreTrue) return true

  for (const keyword of Object.keys(keywords)) {
    const keywordValues = keywords[keyword]
    const resolver = options.resolvers[keyword] ?? options.defaultResolver
    resolver(keyword, keywordValues, mergedSchema, schemas, options)
  }

  return mergedSchema
}

function defaultResolver (keyword, values, mergedSchema, _schemas, options) {
  const onConflict = options.onConflict ?? 'throw'

  if (values.length === 1 || onConflict === 'first') {
    mergedSchema[keyword] = values[0]
    return
  }

  let allValuesEqual = true
  for (let i = 1; i < values.length; i++) {
    if (!deepEqual(values[i], values[0])) {
      allValuesEqual = false
      break
    }
  }

  if (allValuesEqual) {
    mergedSchema[keyword] = values[0]
    return
  }

  if (onConflict === 'throw') {
    throw new errors.ResolverNotFoundError(keyword, values)
  }
  if (onConflict === 'skip') {
    return
  }
  throw new errors.InvalidOnConflictOptionError(onConflict)
}

function mergeSchemas (schemas, options = {}) {
  if (options.defaultResolver === undefined) {
    options.defaultResolver = defaultResolver
  }

  options.resolvers = { ...keywordsResolvers, ...options.resolvers }

  const mergedSchema = _mergeSchemas(schemas, options)
  return mergedSchema
}

module.exports = { mergeSchemas, keywordsResolvers, defaultResolver, ...errors }
