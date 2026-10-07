'use strict'

const URI = require('fast-uri')
const cloner = require('rfdc')({ proto: true, circles: false })
const { EventEmitter } = require('events')
const debug = require('debug')('json-schema-resolver')

const kIgnore = Symbol('json-schema-resolver.ignore') // untrack a schema (usually the root one)
const kRefToDef = Symbol('json-schema-resolver.refToDef') // assign to an external json a new reference
const kConsumed = Symbol('json-schema-resolver.consumed') // when an external json has been referenced

// ! Target: DRAFT-07
// https://tools.ietf.org/html/draft-handrews-json-schema-01

// ? Open to DRAFT 08
// https://json-schema.org/draft/2019-09/json-schema-core.html

const defaultOpts = {
  target: 'draft-07',
  clone: false,
  buildLocalReference (json, baseUri, fragment, i) {
    return `def-${i}`
  }
}

const targetSupported = ['draft-07'] // TODO , 'draft-08'
const targetCfg = {
  'draft-07': {
    def: 'definitions'
  },
  'draft-08': {
    def: '$defs'
  }
}

// logic: https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.appendix.B.1
function jsonSchemaResolver (options) {
  const ee = new EventEmitter()
  const {
    clone,
    target,
    applicationUri,
    externalSchemas: rootExternalSchemas,
    buildLocalReference
  } = Object.assign({}, defaultOpts, options)

  const allIds = new Map()
  let rolling = 0
  ee.on('$id', collectIds)

  const allRefs = []
  ee.on('$ref', collectRefs)

  if (!targetSupported.includes(target)) {
    throw new Error(`Unsupported JSON schema version ${target}`)
  }

  let defaultUri
  if (applicationUri) {
    defaultUri = getRootUri(applicationUri)

    if (rootExternalSchemas) {
      for (const es of rootExternalSchemas) { mapIds(ee, defaultUri, es) }
      debug('Processed root external schemas')
    }
  } else if (rootExternalSchemas) {
    throw new Error('If you set root externalSchema, the applicationUri option is needed')
  }

  return {
    resolve,
    definitions () {
      const defKey = targetCfg[target].def
      const x = { [defKey]: {} }
      allIds.forEach((json, baseUri) => {
        x[defKey][json[kRefToDef]] = json
      })
      return x
    }
  }

  function resolve (rootSchema, opts) {
    const { externalSchemas } = opts || {}

    if (!rootExternalSchemas) {
      allIds.clear()
    }
    allRefs.length = 0

    if (clone) {
      rootSchema = cloner(rootSchema)
    }

    const appUri = defaultUri || getRootUri(rootSchema.$id)
    debug('Found app URI %o', appUri)

    if (externalSchemas) {
      for (const es of externalSchemas) { mapIds(ee, appUri, es) }
      debug('Processed external schemas')
    }

    const baseUri = URI.serialize(appUri) // canonical absolute-URI
    if (rootSchema.$id) {
      rootSchema.$id = baseUri // fix the schema $id value
    }
    Object.defineProperty(rootSchema, kIgnore, { value: true, enumerable: false })

    mapIds(ee, appUri, rootSchema)
    debug('Processed root schema')

    debug('Generating %d refs', allRefs.length)
    allRefs.forEach(({ baseUri, ref, refUri, json }) => {
      debug('Evaluating $ref %s', ref)
      if (ref[0] === '#') { return }

      const evaluatedJson = allIds.get(baseUri)
      if (!evaluatedJson) {
        debug('External $ref %s not provided with baseUri %s', ref, baseUri)
        return
      }
      Object.defineProperty(evaluatedJson, kConsumed, { value: true, enumerable: false })
      json.$ref = `#/definitions/${evaluatedJson[kRefToDef]}${refUri.fragment || ''}`
    })

    if (externalSchemas) {
      // only if user sets external schema add it to the definitions
      const defKey = targetCfg[target].def
      allIds.forEach((json, baseUri) => {
        if (json[kConsumed] === true) {
          if (!rootSchema[defKey]) {
            rootSchema[defKey] = {}
          }

          rootSchema[defKey][json[kRefToDef]] = json
        }
      })
    }

    return rootSchema
  }

  function collectIds (json, baseUri, fragment) {
    if (json[kIgnore]) { return }

    const rel = (fragment && URI.serialize(fragment)) || ''
    const id = URI.serialize(baseUri) + rel
    if (!allIds.has(id)) {
      debug('Collected $id %s', id)
      const value = buildLocalReference(json, baseUri, fragment, rolling++)
      Object.defineProperty(json, kRefToDef, { value, enumerable: false })
      allIds.set(id, json)
    } else {
      debug('WARN duplicated id %s .. IGNORED - ', id)
    }
  }

  function collectRefs (json, baseUri, refVal) {
    const refUri = URI.parse(refVal)
    debug('Pre enqueue $ref %o', refUri)

    // "same-document";
    // "relative";
    // "absolute";
    // "uri";
    if (refUri.reference === 'relative') {
      refUri.scheme = baseUri.scheme
      refUri.userinfo = baseUri.userinfo
      refUri.host = baseUri.host
      refUri.port = baseUri.port

      const newBaseUri = Object.assign({}, baseUri)
      newBaseUri.path = refUri.path
      baseUri = newBaseUri
    } else if (refUri.reference === 'uri' || refUri.reference === 'absolute') {
      baseUri = { ...refUri, fragment: undefined }
    }

    const ref = URI.serialize(refUri)
    allRefs.push({
      baseUri: URI.serialize(baseUri),
      refUri,
      ref,
      json
    })
    debug('Enqueue $ref %s', ref)
  }
}

/**
   *
   * @param {URI} baseUri
   * @param {*} json
   */
function mapIds (ee, baseUri, json) {
  if (!(json instanceof Object)) return

  if (json.$id) {
    const $idUri = URI.parse(json.$id)
    let fragment = null

    if ($idUri.reference === 'absolute') {
      // "$id": "http://example.com/root.json"
      baseUri = $idUri // a new baseURI for children
    } else if ($idUri.reference === 'relative') {
      // "$id": "other.json",
      const newBaseUri = Object.assign({}, baseUri)
      newBaseUri.path = $idUri.path
      newBaseUri.fragment = $idUri.fragment
      baseUri = newBaseUri
    } else {
      // { "$id": "#bar" }
      fragment = $idUri
    }
    ee.emit('$id', json, baseUri, fragment)
  }
  // else if (json.$anchor) {
  // TODO the $id should manage $anchor to support draft 08
  // }

  const fields = Object.keys(json)
  for (const prop of fields) {
    if (prop === '$ref') {
      ee.emit('$ref', json, baseUri, json[prop])
    }
    mapIds(ee, baseUri, json[prop])
  }
}

function getRootUri (strUri = 'application.uri') {
  // If present, the value for this keyword MUST be a string, and MUST
  // represent a valid URI-reference [RFC3986].  This value SHOULD be
  // normalized, and SHOULD NOT be an empty fragment <#> or an empty
  // string <>.
  const uri = URI.parse(strUri)
  uri.fragment = undefined
  return uri
}

module.exports = jsonSchemaResolver
