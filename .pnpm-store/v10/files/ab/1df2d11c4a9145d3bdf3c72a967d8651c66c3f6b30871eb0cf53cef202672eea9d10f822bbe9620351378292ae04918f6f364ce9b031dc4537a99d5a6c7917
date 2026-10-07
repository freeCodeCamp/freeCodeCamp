'use strict'

const { test } = require('node:test')
const build = require('..')

test('use toJSON method on object types', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    type: 'object',
    properties: {
      productName: {
        type: 'string'
      }
    }
  })
  const object = {
    product: { name: 'cola' },
    toJSON: function () {
      return { productName: this.product.name }
    }
  }

  t.assert.equal('{"productName":"cola"}', stringify(object))
})

test('use toJSON method on nested object types', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple array',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        productName: {
          type: 'string'
        }
      }
    }
  })
  const array = [
    {
      product: { name: 'cola' },
      toJSON: function () {
        return { productName: this.product.name }
      }
    },
    {
      product: { name: 'sprite' },
      toJSON: function () {
        return { productName: this.product.name }
      }
    }
  ]

  t.assert.equal('[{"productName":"cola"},{"productName":"sprite"}]', stringify(array))
})

test('not use toJSON if does not exist', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    type: 'object',
    properties: {
      product: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  })
  const object = {
    product: { name: 'cola' }
  }

  t.assert.equal('{"product":{"name":"cola"}}', stringify(object))
})

test('not fail on null object declared nullable', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    type: 'object',
    nullable: true,
    properties: {
      product: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  })
  t.assert.equal('null', stringify(null))
})

test('not fail on null sub-object declared nullable', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    type: 'object',
    properties: {
      product: {
        nullable: true,
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  })
  const object = {
    product: null
  }
  t.assert.equal('{"product":null}', stringify(object))
})

test('on non nullable null sub-object it should coerce to {}', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    type: 'object',
    properties: {
      product: {
        nullable: false,
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  })
  const object = {
    product: null
  }

  const result = stringify(object)
  t.assert.equal(result, JSON.stringify({ product: {} }))
})

test('on non nullable null object it should coerce to {}', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    nullable: false,
    type: 'object',
    properties: {
      product: {
        nullable: false,
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  })

  const result = stringify(null)
  t.assert.equal(result, '{}')
})

test('on non-nullable null object it should skip rendering, skipping required fields checks', (t) => {
  t.plan(1)

  const stringify = build({
    title: 'simple object',
    nullable: false,
    type: 'object',
    properties: {
      product: {
        nullable: false,
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    },
    required: ['product']
  })

  const result = stringify(null)
  t.assert.equal(result, '{}')
})
