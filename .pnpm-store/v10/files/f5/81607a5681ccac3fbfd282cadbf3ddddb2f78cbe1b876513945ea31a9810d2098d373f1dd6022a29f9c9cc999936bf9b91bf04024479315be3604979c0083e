'use strict'

/* eslint no-prototype-builtins: 0 */

const { RefResolver } = require('json-schema-ref-resolver')

const Serializer = require('./lib/serializer')
const Validator = require('./lib/validator')
const Location = require('./lib/location')
const validate = require('./lib/schema-validator')
const mergeSchemas = require('./lib/merge-schemas')

const SINGLE_TICK = /'/g

let largeArraySize = 2e4
let largeArrayMechanism = 'default'

const validRoundingMethods = [
  'floor',
  'ceil',
  'round',
  'trunc'
]

const validLargeArrayMechanisms = [
  'default',
  'json-stringify'
]

let schemaIdCounter = 0

function isValidSchema (schema, name) {
  if (!validate(schema)) {
    if (name) {
      name = `"${name}" `
    } else {
      name = ''
    }
    const first = validate.errors[0]
    const err = new Error(`${name}schema is invalid: data${first.instancePath} ${first.message}`)
    err.errors = isValidSchema.errors
    throw err
  }
}

function resolveRef (context, location) {
  const ref = location.schema.$ref

  let hashIndex = ref.indexOf('#')
  if (hashIndex === -1) {
    hashIndex = ref.length
  }

  const schemaId = ref.slice(0, hashIndex) || location.schemaId
  const jsonPointer = ref.slice(hashIndex) || '#'

  const schema = context.refResolver.getSchema(schemaId, jsonPointer)
  if (schema === null) {
    throw new Error(`Cannot find reference "${ref}"`)
  }

  const newLocation = new Location(schema, schemaId, jsonPointer)
  if (schema.$ref !== undefined) {
    return resolveRef(context, newLocation)
  }

  return newLocation
}

function getMergedLocation (context, mergedSchemaId) {
  const mergedSchema = context.refResolver.getSchema(mergedSchemaId, '#')
  return new Location(mergedSchema, mergedSchemaId, '#')
}

function getSchemaId (schema, rootSchemaId) {
  if (schema.$id && schema.$id.charAt(0) !== '#') {
    return schema.$id
  }
  return rootSchemaId
}

function build (schema, options) {
  isValidSchema(schema)

  options = options || {}

  const context = {
    functions: [],
    functionsCounter: 0,
    functionsNamesBySchema: new Map(),
    options,
    refResolver: new RefResolver(),
    rootSchemaId: schema.$id || `__fjs_root_${schemaIdCounter++}`,
    validatorSchemasIds: new Set(),
    mergedSchemasIds: new Map()
  }

  const schemaId = getSchemaId(schema, context.rootSchemaId)
  if (!context.refResolver.hasSchema(schemaId)) {
    context.refResolver.addSchema(schema, context.rootSchemaId)
  }

  if (options.schema) {
    for (const key in options.schema) {
      const schema = options.schema[key]
      const schemaId = getSchemaId(schema, key)
      if (!context.refResolver.hasSchema(schemaId)) {
        isValidSchema(schema, key)
        context.refResolver.addSchema(schema, key)
      }
    }
  }

  if (options.rounding) {
    if (!validRoundingMethods.includes(options.rounding)) {
      throw new Error(`Unsupported integer rounding method ${options.rounding}`)
    }
  }

  if (options.largeArrayMechanism) {
    if (validLargeArrayMechanisms.includes(options.largeArrayMechanism)) {
      largeArrayMechanism = options.largeArrayMechanism
    } else {
      throw new Error(`Unsupported large array mechanism ${options.largeArrayMechanism}`)
    }
  }

  if (options.largeArraySize) {
    if (typeof options.largeArraySize === 'string' && Number.isFinite(Number.parseInt(options.largeArraySize, 10))) {
      largeArraySize = Number.parseInt(options.largeArraySize, 10)
    } else if (typeof options.largeArraySize === 'number' && Number.isInteger(options.largeArraySize)) {
      largeArraySize = options.largeArraySize
    } else if (typeof options.largeArraySize === 'bigint') {
      largeArraySize = Number(options.largeArraySize)
    } else {
      throw new Error(`Unsupported large array size. Expected integer-like, got ${typeof options.largeArraySize} with value ${options.largeArraySize}`)
    }
  }

  const location = new Location(schema, context.rootSchemaId)
  const code = buildValue(context, location, 'input')

  let contextFunctionCode = `
    const JSON_STR_BEGIN_OBJECT = '{'
    const JSON_STR_END_OBJECT = '}'
    const JSON_STR_BEGIN_ARRAY = '['
    const JSON_STR_END_ARRAY = ']'
    const JSON_STR_COMMA = ','
    const JSON_STR_COLONS = ':'
    const JSON_STR_QUOTE = '"'
    const JSON_STR_EMPTY_OBJECT = JSON_STR_BEGIN_OBJECT + JSON_STR_END_OBJECT
    const JSON_STR_EMPTY_ARRAY = JSON_STR_BEGIN_ARRAY + JSON_STR_END_ARRAY
    const JSON_STR_EMPTY_STRING = JSON_STR_QUOTE + JSON_STR_QUOTE
    const JSON_STR_NULL = 'null'
  `

  // If we have only the invocation of the 'anonymous0' function, we would
  // basically just wrap the 'anonymous0' function in the 'main' function and
  // and the overhead of the intermediate variable 'json'. We can avoid the
  // wrapping and the unnecessary memory allocation by aliasing 'anonymous0' to
  // 'main'
  if (code === 'json += anonymous0(input)') {
    contextFunctionCode += `
    ${context.functions.join('\n')}
    const main = anonymous0
    return main
    `
  } else {
    contextFunctionCode += `
    function main (input) {
      let json = ''
      ${code}
      return json
    }
    ${context.functions.join('\n')}
    return main
    `
  }

  const serializer = new Serializer(options)
  const validator = new Validator(options.ajv)

  for (const schemaId of context.validatorSchemasIds) {
    const schema = context.refResolver.getSchema(schemaId)
    validator.addSchema(schema, schemaId)

    const dependencies = context.refResolver.getSchemaDependencies(schemaId)
    for (const [schemaId, schema] of Object.entries(dependencies)) {
      validator.addSchema(schema, schemaId)
    }
  }

  if (options.debugMode) {
    options.mode = 'debug'
  }

  if (options.mode === 'debug') {
    return {
      validator,
      serializer,
      code: `validator\nserializer\n${contextFunctionCode}`,
      ajv: validator.ajv
    }
  }

  /* eslint no-new-func: "off" */
  const contextFunc = new Function('validator', 'serializer', contextFunctionCode)

  if (options.mode === 'standalone') {
    const buildStandaloneCode = require('./lib/standalone')
    return buildStandaloneCode(contextFunc, context, serializer, validator)
  }

  return contextFunc(validator, serializer)
}

const objectKeywords = [
  'properties',
  'required',
  'additionalProperties',
  'patternProperties',
  'maxProperties',
  'minProperties',
  'dependencies'
]

const arrayKeywords = [
  'items',
  'additionalItems',
  'maxItems',
  'minItems',
  'uniqueItems',
  'contains'
]

const stringKeywords = [
  'maxLength',
  'minLength',
  'pattern'
]

const numberKeywords = [
  'multipleOf',
  'maximum',
  'exclusiveMaximum',
  'minimum',
  'exclusiveMinimum'
]

/**
 * Infer type based on keyword in order to generate optimized code
 * https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6
 */
function inferTypeByKeyword (schema) {
  for (const keyword of objectKeywords) {
    if (keyword in schema) return 'object'
  }
  for (const keyword of arrayKeywords) {
    if (keyword in schema) return 'array'
  }
  for (const keyword of stringKeywords) {
    if (keyword in schema) return 'string'
  }
  for (const keyword of numberKeywords) {
    if (keyword in schema) return 'number'
  }
  return schema.type
}

function buildExtraObjectPropertiesSerializer (context, location, addComma) {
  const schema = location.schema
  const propertiesKeys = Object.keys(schema.properties || {})

  let code = `
    const propertiesKeys = ${JSON.stringify(propertiesKeys)}
    for (const [key, value] of Object.entries(obj)) {
      if (
        propertiesKeys.includes(key) ||
        value === undefined ||
        typeof value === 'function' ||
        typeof value === 'symbol'
      ) continue
  `

  const patternPropertiesLocation = location.getPropertyLocation('patternProperties')
  const patternPropertiesSchema = patternPropertiesLocation.schema

  if (patternPropertiesSchema !== undefined) {
    for (const propertyKey in patternPropertiesSchema) {
      const propertyLocation = patternPropertiesLocation.getPropertyLocation(propertyKey)

      code += `
        if (/${propertyKey.replace(/\\*\//g, '\\/')}/.test(key)) {
          ${addComma}
          json += serializer.asString(key) + JSON_STR_COLONS
          ${buildValue(context, propertyLocation, 'value')}
          continue
        }
      `
    }
  }

  const additionalPropertiesLocation = location.getPropertyLocation('additionalProperties')
  const additionalPropertiesSchema = additionalPropertiesLocation.schema

  if (additionalPropertiesSchema !== undefined) {
    if (additionalPropertiesSchema === true) {
      code += `
        ${addComma}
        json += serializer.asString(key) + JSON_STR_COLONS + JSON.stringify(value)
      `
    } else {
      const propertyLocation = location.getPropertyLocation('additionalProperties')
      code += `
        ${addComma}
        json += serializer.asString(key) + JSON_STR_COLONS
        ${buildValue(context, propertyLocation, 'value')}
      `
    }
  }

  code += `
    }
  `
  return code
}

function buildInnerObject (context, location) {
  const schema = location.schema

  const propertiesLocation = location.getPropertyLocation('properties')
  const requiredProperties = schema.required || []

  // Should serialize required properties first
  const propertiesKeys = Object.keys(schema.properties || {}).sort(
    (key1, key2) => {
      const required1 = requiredProperties.includes(key1)
      const required2 = requiredProperties.includes(key2)
      return required1 === required2 ? 0 : required1 ? -1 : 1
    }
  )
  const hasRequiredProperties = requiredProperties.includes(propertiesKeys[0])

  let code = 'let value\n'

  for (const key of requiredProperties) {
    if (!propertiesKeys.includes(key)) {
      const sanitizedKey = JSON.stringify(key)
      code += `if (obj[${sanitizedKey}] === undefined) throw new Error('${sanitizedKey.replace(/'/g, '\\\'')} is required!')\n`
    }
  }

  code += 'let json = JSON_STR_BEGIN_OBJECT\n'

  let addComma = ''
  if (!hasRequiredProperties) {
    code += 'let addComma = false\n'
    addComma = '!addComma && (addComma = true) || (json += JSON_STR_COMMA)'
  }

  for (const key of propertiesKeys) {
    let propertyLocation = propertiesLocation.getPropertyLocation(key)
    if (propertyLocation.schema.$ref) {
      propertyLocation = resolveRef(context, propertyLocation)
    }

    const sanitizedKey = JSON.stringify(key)
    const defaultValue = propertyLocation.schema.default
    const isRequired = requiredProperties.includes(key)

    code += `
      value = obj[${sanitizedKey}]
      if (value !== undefined) {
        ${addComma}
        json += ${JSON.stringify(sanitizedKey + ':')}
        ${buildValue(context, propertyLocation, 'value')}
      }`

    if (defaultValue !== undefined) {
      code += ` else {
        ${addComma}
        json += ${JSON.stringify(sanitizedKey + ':' + JSON.stringify(defaultValue))}
      }
      `
    } else if (isRequired) {
      code += ` else {
        throw new Error('${sanitizedKey.replace(/'/g, '\\\'')} is required!')
      }
      `
    } else {
      code += '\n'
    }

    if (hasRequiredProperties) {
      addComma = 'json += \',\''
    }
  }

  if (schema.patternProperties || schema.additionalProperties) {
    code += buildExtraObjectPropertiesSerializer(context, location, addComma)
  }

  code += `
    return json + JSON_STR_END_OBJECT
  `
  return code
}

function mergeLocations (context, mergedSchemaId, mergedLocations) {
  for (let i = 0; i < mergedLocations.length; i++) {
    const location = mergedLocations[i]
    const schema = location.schema
    if (schema.$ref) {
      mergedLocations[i] = resolveRef(context, location)
    }
  }

  const mergedSchemas = []
  for (const location of mergedLocations) {
    const schema = cloneOriginSchema(context, location.schema, location.schemaId)
    delete schema.$id

    mergedSchemas.push(schema)
  }

  const mergedSchema = mergeSchemas(mergedSchemas)
  const mergedLocation = new Location(mergedSchema, mergedSchemaId)

  context.refResolver.addSchema(mergedSchema, mergedSchemaId)
  return mergedLocation
}

function cloneOriginSchema (context, schema, schemaId) {
  const clonedSchema = Array.isArray(schema) ? [] : {}

  if (
    schema.$id !== undefined &&
    schema.$id.charAt(0) !== '#'
  ) {
    schemaId = schema.$id
  }

  const mergedSchemaRef = context.mergedSchemasIds.get(schema)
  if (mergedSchemaRef) {
    context.mergedSchemasIds.set(clonedSchema, mergedSchemaRef)
  }

  for (const key in schema) {
    let value = schema[key]

    if (key === '$ref' && typeof value === 'string' && value.charAt(0) === '#') {
      value = schemaId + value
    }

    if (typeof value === 'object' && value !== null) {
      value = cloneOriginSchema(context, value, schemaId)
    }

    clonedSchema[key] = value
  }

  return clonedSchema
}

function toJSON (variableName) {
  return `(${variableName} && typeof ${variableName}.toJSON === 'function')
    ? ${variableName}.toJSON()
    : ${variableName}
  `
}

function buildObject (context, location) {
  const schema = location.schema

  if (context.functionsNamesBySchema.has(schema)) {
    return context.functionsNamesBySchema.get(schema)
  }

  const functionName = generateFuncName(context)
  context.functionsNamesBySchema.set(schema, functionName)

  let schemaRef = location.getSchemaRef()
  if (schemaRef.startsWith(context.rootSchemaId)) {
    schemaRef = schemaRef.replace(context.rootSchemaId, '')
  }

  let functionCode = `
  `

  const nullable = schema.nullable === true
  functionCode += `
    // ${schemaRef}
    function ${functionName} (input) {
      const obj = ${toJSON('input')}
      ${!nullable ? 'if (obj === null) return JSON_STR_EMPTY_OBJECT' : ''}

      ${buildInnerObject(context, location)}
    }
  `

  context.functions.push(functionCode)
  return functionName
}

function buildArray (context, location) {
  const schema = location.schema

  let itemsLocation = location.getPropertyLocation('items')
  itemsLocation.schema = itemsLocation.schema || {}

  if (itemsLocation.schema.$ref) {
    itemsLocation = resolveRef(context, itemsLocation)
  }

  const itemsSchema = itemsLocation.schema

  if (context.functionsNamesBySchema.has(schema)) {
    return context.functionsNamesBySchema.get(schema)
  }

  const functionName = generateFuncName(context)
  context.functionsNamesBySchema.set(schema, functionName)

  let schemaRef = location.getSchemaRef()
  if (schemaRef.startsWith(context.rootSchemaId)) {
    schemaRef = schemaRef.replace(context.rootSchemaId, '')
  }

  let functionCode = `
    function ${functionName} (obj) {
      // ${schemaRef}
  `

  const nullable = schema.nullable === true
  functionCode += `
    ${!nullable ? 'if (obj === null) return JSON_STR_EMPTY_ARRAY' : ''}
    if (!Array.isArray(obj)) {
      throw new TypeError(\`The value of '${schemaRef}' does not match schema definition.\`)
    }
    const arrayLength = obj.length
  `

  if (!schema.additionalItems && Array.isArray(itemsSchema)) {
    functionCode += `
      if (arrayLength > ${itemsSchema.length}) {
        throw new Error(\`Item at ${itemsSchema.length} does not match schema definition.\`)
      }
    `
  }

  if (largeArrayMechanism === 'json-stringify') {
    functionCode += `if (arrayLength >= ${largeArraySize}) return JSON.stringify(obj)\n`
  }

  functionCode += `
    const arrayEnd = arrayLength - 1
    let value
    let json = ''
  `

  if (Array.isArray(itemsSchema)) {
    for (let i = 0; i < itemsSchema.length; i++) {
      const item = itemsSchema[i]
      functionCode += `value = obj[${i}]`
      const tmpRes = buildValue(context, itemsLocation.getPropertyLocation(i), 'value')
      functionCode += `
        if (${i} < arrayLength) {
          if (${buildArrayTypeCondition(item.type, `[${i}]`)}) {
            ${tmpRes}
            if (${i} < arrayEnd) {
              json += JSON_STR_COMMA
            }
          } else {
            throw new Error(\`Item at ${i} does not match schema definition.\`)
          }
        }
        `
    }

    if (schema.additionalItems) {
      functionCode += `
        for (let i = ${itemsSchema.length}; i < arrayLength; i++) {
          json += JSON.stringify(obj[i])
          if (i < arrayEnd) {
            json += JSON_STR_COMMA
          }
        }`
    }
  } else {
    const code = buildValue(context, itemsLocation, 'obj[i]')
    functionCode += `
      for (let i = 0; i < arrayLength; i++) {
        ${code}
        if (i < arrayEnd) {
          json += JSON_STR_COMMA
        }
      }`
  }

  functionCode += `
    return JSON_STR_BEGIN_ARRAY + json + JSON_STR_END_ARRAY
  }`

  context.functions.push(functionCode)
  return functionName
}

function buildArrayTypeCondition (type, accessor) {
  let condition
  switch (type) {
    case 'null':
      condition = 'value === null'
      break
    case 'string':
      condition = `typeof value === 'string' ||
      value === null ||
      value instanceof Date ||
      value instanceof RegExp ||
      (
        typeof value === "object" &&
        typeof value.toString === "function" &&
        value.toString !== Object.prototype.toString
      )`
      break
    case 'integer':
      condition = 'Number.isInteger(value)'
      break
    case 'number':
      condition = 'Number.isFinite(value)'
      break
    case 'boolean':
      condition = 'typeof value === \'boolean\''
      break
    case 'object':
      condition = 'value && typeof value === \'object\' && value.constructor === Object'
      break
    case 'array':
      condition = 'Array.isArray(value)'
      break
    default:
      if (Array.isArray(type)) {
        const conditions = type.map((subType) => {
          return buildArrayTypeCondition(subType, accessor)
        })
        condition = `(${conditions.join(' || ')})`
      }
  }
  return condition
}

function generateFuncName (context) {
  return 'anonymous' + context.functionsCounter++
}

function buildMultiTypeSerializer (context, location, input) {
  const schema = location.schema
  const types = schema.type.sort(t1 => t1 === 'null' ? -1 : 1)

  let code = ''

  types.forEach((type, index) => {
    location.schema = { ...location.schema, type }
    const nestedResult = buildSingleTypeSerializer(context, location, input)

    const statement = index === 0 ? 'if' : 'else if'
    switch (type) {
      case 'null':
        code += `
          ${statement} (${input} === null)
            ${nestedResult}
          `
        break
      case 'string': {
        code += `
          ${statement}(
            typeof ${input} === "string" ||
            ${input} === null ||
            ${input} instanceof Date ||
            ${input} instanceof RegExp ||
            (
              typeof ${input} === "object" &&
              typeof ${input}.toString === "function" &&
              ${input}.toString !== Object.prototype.toString
            )
          )
            ${nestedResult}
        `
        break
      }
      case 'array': {
        code += `
          ${statement}(Array.isArray(${input}))
            ${nestedResult}
        `
        break
      }
      case 'integer': {
        code += `
          ${statement}(Number.isInteger(${input}) || ${input} === null)
            ${nestedResult}
        `
        break
      }
      default: {
        code += `
          ${statement}(typeof ${input} === "${type}" || ${input} === null)
            ${nestedResult}
        `
        break
      }
    }
  })
  let schemaRef = location.getSchemaRef()
  if (schemaRef.startsWith(context.rootSchemaId)) {
    schemaRef = schemaRef.replace(context.rootSchemaId, '')
  }
  code += `
    else throw new TypeError(\`The value of '${schemaRef}' does not match schema definition.\`)
  `

  return code
}

function buildSingleTypeSerializer (context, location, input) {
  const schema = location.schema

  switch (schema.type) {
    case 'null':
      return 'json += JSON_STR_NULL'
    case 'string': {
      if (schema.format === 'date-time') {
        return `json += serializer.asDateTime(${input})`
      } else if (schema.format === 'date') {
        return `json += serializer.asDate(${input})`
      } else if (schema.format === 'time') {
        return `json += serializer.asTime(${input})`
      } else if (schema.format === 'unsafe') {
        return `json += serializer.asUnsafeString(${input})`
      } else {
        return `
        if (typeof ${input} !== 'string') {
          if (${input} === null) {
            json += JSON_STR_EMPTY_STRING
          } else if (${input} instanceof Date) {
            json += JSON_STR_QUOTE + ${input}.toISOString() + JSON_STR_QUOTE
          } else if (${input} instanceof RegExp) {
            json += serializer.asString(${input}.source)
          } else {
            json += serializer.asString(${input}.toString())
          }
        } else {
          json += serializer.asString(${input})
        }
        `
      }
    }
    case 'integer':
      return `json += serializer.asInteger(${input})`
    case 'number':
      return `json += serializer.asNumber(${input})`
    case 'boolean':
      return `json += serializer.asBoolean(${input})`
    case 'object': {
      const funcName = buildObject(context, location)
      return `json += ${funcName}(${input})`
    }
    case 'array': {
      const funcName = buildArray(context, location)
      return `json += ${funcName}(${input})`
    }
    case undefined:
      return `json += JSON.stringify(${input})`
    default:
      throw new Error(`${schema.type} unsupported`)
  }
}

function buildConstSerializer (location, input) {
  const schema = location.schema
  const type = schema.type

  const hasNullType = Array.isArray(type) && type.includes('null')

  let code = ''

  if (hasNullType) {
    code += `
      if (${input} === null) {
        json += JSON_STR_NULL
      } else {
    `
  }

  code += `json += '${JSON.stringify(schema.const).replace(SINGLE_TICK, "\\'")}'`

  if (hasNullType) {
    code += `
      }
    `
  }

  return code
}

function buildAllOf (context, location, input) {
  const schema = location.schema

  let mergedSchemaId = context.mergedSchemasIds.get(schema)
  if (mergedSchemaId) {
    const mergedLocation = getMergedLocation(context, mergedSchemaId)
    return buildValue(context, mergedLocation, input)
  }

  mergedSchemaId = `__fjs_merged_${schemaIdCounter++}`
  context.mergedSchemasIds.set(schema, mergedSchemaId)

  const { allOf, ...schemaWithoutAllOf } = location.schema
  const locations = [
    new Location(
      schemaWithoutAllOf,
      location.schemaId,
      location.jsonPointer
    )
  ]

  const allOfsLocation = location.getPropertyLocation('allOf')
  for (let i = 0; i < allOf.length; i++) {
    locations.push(allOfsLocation.getPropertyLocation(i))
  }

  const mergedLocation = mergeLocations(context, mergedSchemaId, locations)
  return buildValue(context, mergedLocation, input)
}

function buildOneOf (context, location, input) {
  context.validatorSchemasIds.add(location.schemaId)

  const schema = location.schema

  const type = schema.anyOf ? 'anyOf' : 'oneOf'
  const { [type]: oneOfs, ...schemaWithoutAnyOf } = location.schema

  const locationWithoutOneOf = new Location(
    schemaWithoutAnyOf,
    location.schemaId,
    location.jsonPointer
  )
  const oneOfsLocation = location.getPropertyLocation(type)

  let code = ''

  for (let index = 0; index < oneOfs.length; index++) {
    const optionLocation = oneOfsLocation.getPropertyLocation(index)
    const optionSchema = optionLocation.schema

    let mergedSchemaId = context.mergedSchemasIds.get(optionSchema)
    let mergedLocation = null
    if (mergedSchemaId) {
      mergedLocation = getMergedLocation(context, mergedSchemaId)
    } else {
      mergedSchemaId = `__fjs_merged_${schemaIdCounter++}`
      context.mergedSchemasIds.set(optionSchema, mergedSchemaId)

      mergedLocation = mergeLocations(context, mergedSchemaId, [
        locationWithoutOneOf,
        optionLocation
      ])
    }

    const nestedResult = buildValue(context, mergedLocation, input)
    const schemaRef = optionLocation.getSchemaRef()
    code += `
      ${index === 0 ? 'if' : 'else if'}(validator.validate("${schemaRef}", ${input}))
        ${nestedResult}
    `
  }

  let schemaRef = location.getSchemaRef()
  if (schemaRef.startsWith(context.rootSchemaId)) {
    schemaRef = schemaRef.replace(context.rootSchemaId, '')
  }

  code += `
    else throw new TypeError(\`The value of '${schemaRef}' does not match schema definition.\`)
  `

  return code
}

function buildIfThenElse (context, location, input) {
  context.validatorSchemasIds.add(location.schemaId)

  const {
    if: ifSchema,
    then: thenSchema,
    else: elseSchema,
    ...schemaWithoutIfThenElse
  } = location.schema

  const rootLocation = new Location(
    schemaWithoutIfThenElse,
    location.schemaId,
    location.jsonPointer
  )

  const ifLocation = location.getPropertyLocation('if')
  const ifSchemaRef = ifLocation.getSchemaRef()

  const thenLocation = location.getPropertyLocation('then')
  let thenMergedSchemaId = context.mergedSchemasIds.get(thenSchema)
  let thenMergedLocation = null
  if (thenMergedSchemaId) {
    thenMergedLocation = getMergedLocation(context, thenMergedSchemaId)
  } else {
    thenMergedSchemaId = `__fjs_merged_${schemaIdCounter++}`
    context.mergedSchemasIds.set(thenSchema, thenMergedSchemaId)

    thenMergedLocation = mergeLocations(context, thenMergedSchemaId, [
      rootLocation,
      thenLocation
    ])
  }

  if (!elseSchema) {
    return `
      if (validator.validate("${ifSchemaRef}", ${input})) {
        ${buildValue(context, thenMergedLocation, input)}
      } else {
        ${buildValue(context, rootLocation, input)}
      }
    `
  }

  const elseLocation = location.getPropertyLocation('else')
  let elseMergedSchemaId = context.mergedSchemasIds.get(elseSchema)
  let elseMergedLocation = null
  if (elseMergedSchemaId) {
    elseMergedLocation = getMergedLocation(context, elseMergedSchemaId)
  } else {
    elseMergedSchemaId = `__fjs_merged_${schemaIdCounter++}`
    context.mergedSchemasIds.set(elseSchema, elseMergedSchemaId)

    elseMergedLocation = mergeLocations(context, elseMergedSchemaId, [
      rootLocation,
      elseLocation
    ])
  }

  return `
    if (validator.validate("${ifSchemaRef}", ${input})) {
      ${buildValue(context, thenMergedLocation, input)}
    } else {
      ${buildValue(context, elseMergedLocation, input)}
    }
  `
}

function buildValue (context, location, input) {
  let schema = location.schema

  if (typeof schema === 'boolean') {
    return `json += JSON.stringify(${input})`
  }

  if (schema.$ref) {
    location = resolveRef(context, location)
    schema = location.schema
  }

  if (schema.allOf) {
    return buildAllOf(context, location, input)
  }

  if (schema.anyOf || schema.oneOf) {
    return buildOneOf(context, location, input)
  }

  if (schema.if && schema.then) {
    return buildIfThenElse(context, location, input)
  }

  if (schema.type === undefined) {
    const inferredType = inferTypeByKeyword(schema)
    if (inferredType) {
      schema.type = inferredType
    }
  }

  let code = ''

  const type = schema.type
  const nullable = schema.nullable === true
  if (nullable) {
    code += `
      if (${input} === null) {
        json += JSON_STR_NULL
      } else {
    `
  }

  if (schema.const !== undefined) {
    code += buildConstSerializer(location, input)
  } else if (Array.isArray(type)) {
    code += buildMultiTypeSerializer(context, location, input)
  } else {
    code += buildSingleTypeSerializer(context, location, input)
  }

  if (nullable) {
    code += `
      }
    `
  }

  return code
}

module.exports = build
module.exports.default = build
module.exports.build = build

module.exports.validLargeArrayMechanisms = validLargeArrayMechanisms

module.exports.restore = function ({ code, validator, serializer }) {
  // eslint-disable-next-line
  return (Function.apply(null, ['validator', 'serializer', code])
    .apply(null, [validator, serializer]))
}
