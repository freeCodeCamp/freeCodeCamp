import cronometro from 'cronometro'

import fjs from 'fast-json-stringify'
import AjvCompiler from '../index.js'

const fjsSerialize = buildFJSSerializerFunction({
  type: 'object',
  properties: {
    hello: { type: 'string' },
    name: { type: 'string' }
  }
})
const ajvSerialize = buildAJVSerializerFunction({
  properties: {
    hello: { type: 'string' },
    name: { type: 'string' }
  }
})

await cronometro({
  'fast-json-stringify': function () {
    fjsSerialize({ hello: 'Ciao', name: 'Manuel' })
  },
  'ajv serializer': function () {
    ajvSerialize({ hello: 'Ciao', name: 'Manuel' })
  }
})

function buildFJSSerializerFunction (schema) {
  return fjs(schema)
}

function buildAJVSerializerFunction (schema) {
  const factory = AjvCompiler({ jtdSerializer: true })
  const compiler = factory({}, { customOptions: {} })
  return compiler({ schema })
}
