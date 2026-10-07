'use strict'

const { test } = require('node:test')
const Ajv = require('ajv')
const { kRequestCacheValidateFns, kRouteContext } = require('../../lib/symbols')
const Fastify = require('../../fastify')

const defaultSchema = {
  type: 'object',
  required: ['hello'],
  properties: {
    hello: { type: 'string' },
    world: { type: 'string' }
  }
}

const requestSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        minimum: 1
      }
    }
  },
  querystring: {
    type: 'object',
    properties: {
      foo: {
        type: 'string',
        enum: ['bar']
      }
    }
  },
  body: defaultSchema,
  headers: {
    type: 'object',
    properties: {
      'x-foo': {
        type: 'string'
      }
    }
  }
}

test('#compileValidationSchema', async subtest => {
  subtest.plan(7)

  await subtest.test('Should return a function - Route without schema', async t => {
    const fastify = Fastify()

    t.plan(3)

    fastify.get('/', (req, reply) => {
      const validate = req.compileValidationSchema(defaultSchema)

      t.assert.ok(validate instanceof Function)
      t.assert.ok(validate({ hello: 'world' }))
      t.assert.ok(!validate({ world: 'foo' }))

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test('Validate function errors property should be null after validation when input is valid', async t => {
    const fastify = Fastify()

    t.plan(3)

    fastify.get('/', (req, reply) => {
      const validate = req.compileValidationSchema(defaultSchema)

      t.assert.ok(validate({ hello: 'world' }))
      t.assert.ok(Object.hasOwn(validate, 'errors'))
      t.assert.strictEqual(validate.errors, null)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test('Validate function errors property should be an array of errors after validation when input is valid', async t => {
    const fastify = Fastify()

    t.plan(4)

    fastify.get('/', (req, reply) => {
      const validate = req.compileValidationSchema(defaultSchema)

      t.assert.ok(!validate({ world: 'foo' }))
      t.assert.ok(Object.hasOwn(validate, 'errors'))
      t.assert.ok(Array.isArray(validate.errors))
      t.assert.ok(validate.errors.length > 0)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test(
    'Should reuse the validate fn across multiple invocations - Route without schema',
    async t => {
      const fastify = Fastify()
      let validate = null
      let counter = 0

      t.plan(16)

      fastify.get('/', (req, reply) => {
        counter++
        if (counter > 1) {
          const newValidate = req.compileValidationSchema(defaultSchema)
          t.assert.strictEqual(validate, newValidate, 'Are the same validate function')
          validate = newValidate
        } else {
          validate = req.compileValidationSchema(defaultSchema)
        }

        t.assert.ok(validate instanceof Function)
        t.assert.ok(validate({ hello: 'world' }))
        t.assert.ok(!validate({ world: 'foo' }))

        reply.send({ hello: 'world' })
      })

      await Promise.all([
        fastify.inject({
          path: '/',
          method: 'GET'
        }),
        fastify.inject({
          path: '/',
          method: 'GET'
        }),
        fastify.inject({
          path: '/',
          method: 'GET'
        }),
        fastify.inject({
          path: '/',
          method: 'GET'
        })
      ])

      t.assert.strictEqual(counter, 4)
    }
  )

  await subtest.test('Should return a function - Route with schema', async t => {
    const fastify = Fastify()

    t.plan(3)

    fastify.post(
      '/',
      {
        schema: {
          body: defaultSchema
        }
      },
      (req, reply) => {
        const validate = req.compileValidationSchema(defaultSchema)

        t.assert.ok(validate instanceof Function)
        t.assert.ok(validate({ hello: 'world' }))
        t.assert.ok(!validate({ world: 'foo' }))

        reply.send({ hello: 'world' })
      }
    )

    await fastify.inject({
      path: '/',
      method: 'POST',
      payload: {
        hello: 'world',
        world: 'foo'
      }
    })
  })

  await subtest.test(
    'Should use the custom validator compiler for the route',
    async t => {
      const fastify = Fastify()
      let called = 0
      const custom = ({ schema, httpPart, url, method }) => {
        t.assert.strictEqual(schema, defaultSchema)
        t.assert.strictEqual(url, '/')
        t.assert.strictEqual(method, 'GET')
        t.assert.strictEqual(httpPart, 'querystring')

        return input => {
          called++
          t.assert.deepStrictEqual(input, { hello: 'world' })
          return true
        }
      }

      t.plan(10)

      fastify.get('/', { validatorCompiler: custom }, (req, reply) => {
        const first = req.compileValidationSchema(defaultSchema, 'querystring')
        const second = req.compileValidationSchema(defaultSchema, 'querystring')

        t.assert.strictEqual(first, second)
        t.assert.ok(first({ hello: 'world' }))
        t.assert.ok(second({ hello: 'world' }))
        t.assert.strictEqual(called, 2)

        reply.send({ hello: 'world' })
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })
    }
  )

  await subtest.test(
    'Should instantiate a WeakMap when executed for first time',
    async t => {
      const fastify = Fastify()

      t.plan(5)

      fastify.get('/', (req, reply) => {
        t.assert.strictEqual(req[kRouteContext][kRequestCacheValidateFns], null)
        t.assert.ok(req.compileValidationSchema(defaultSchema) instanceof Function)
        t.assert.ok(req[kRouteContext][kRequestCacheValidateFns] instanceof WeakMap)
        t.assert.ok(req.compileValidationSchema(Object.assign({}, defaultSchema)) instanceof Function)
        t.assert.ok(req[kRouteContext][kRequestCacheValidateFns] instanceof WeakMap)

        reply.send({ hello: 'world' })
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })
    }
  )
})

test('#getValidationFunction', async subtest => {
  subtest.plan(6)

  await subtest.test('Should return a validation function', async t => {
    const fastify = Fastify()

    t.plan(1)

    fastify.get('/', (req, reply) => {
      const original = req.compileValidationSchema(defaultSchema)
      const referenced = req.getValidationFunction(defaultSchema)

      t.assert.strictEqual(original, referenced)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test('Validate function errors property should be null after validation when input is valid', async t => {
    const fastify = Fastify()

    t.plan(3)

    fastify.get('/', (req, reply) => {
      req.compileValidationSchema(defaultSchema)
      const validate = req.getValidationFunction(defaultSchema)

      t.assert.ok(validate({ hello: 'world' }))
      t.assert.ok(Object.hasOwn(validate, 'errors'))
      t.assert.strictEqual(validate.errors, null)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test('Validate function errors property should be an array of errors after validation when input is valid', async t => {
    const fastify = Fastify()

    t.plan(4)

    fastify.get('/', (req, reply) => {
      req.compileValidationSchema(defaultSchema)
      const validate = req.getValidationFunction(defaultSchema)

      t.assert.ok(!validate({ world: 'foo' }))
      t.assert.ok(Object.hasOwn(validate, 'errors'))
      t.assert.ok(Array.isArray(validate.errors))
      t.assert.ok(validate.errors.length > 0)

      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })

  await subtest.test('Should return undefined if no schema compiled', async t => {
    const fastify = Fastify()

    t.plan(2)

    fastify.get('/', (req, reply) => {
      const validate = req.getValidationFunction(defaultSchema)
      t.assert.ok(!validate)

      const validateFn = req.getValidationFunction(42)
      t.assert.ok(!validateFn)

      reply.send({ hello: 'world' })
    })

    await fastify.inject('/')
  })

  await subtest.test(
    'Should return the validation function from each HTTP part',
    async t => {
      const fastify = Fastify()
      let headerValidation = null
      let customValidation = null

      t.plan(15)

      fastify.post(
        '/:id',
        {
          schema: requestSchema
        },
        (req, reply) => {
          const { params } = req

          switch (params.id) {
            case 1:
              customValidation = req.compileValidationSchema(defaultSchema)
              t.assert.ok(req.getValidationFunction('body'))
              t.assert.ok(req.getValidationFunction('body')({ hello: 'world' }))
              t.assert.ok(!req.getValidationFunction('body')({ world: 'hello' }))
              break
            case 2:
              headerValidation = req.getValidationFunction('headers')
              t.assert.ok(headerValidation)
              t.assert.ok(headerValidation({ 'x-foo': 'world' }))
              t.assert.ok(!headerValidation({ 'x-foo': [] }))
              break
            case 3:
              t.assert.ok(req.getValidationFunction('params'))
              t.assert.ok(req.getValidationFunction('params')({ id: 123 }))
              t.assert.ok(!req.getValidationFunction('params'({ id: 1.2 })))
              break
            case 4:
              t.assert.ok(req.getValidationFunction('querystring'))
              t.assert.ok(req.getValidationFunction('querystring')({ foo: 'bar' }))
              t.assert.ok(!req.getValidationFunction('querystring')({ foo: 'not-bar' })
              )
              break
            case 5:
              t.assert.strictEqual(
                customValidation,
                req.getValidationFunction(defaultSchema)
              )
              t.assert.ok(customValidation({ hello: 'world' }))
              t.assert.ok(!customValidation({}))
              t.assert.strictEqual(headerValidation, req.getValidationFunction('headers'))
              break
            default:
              t.assert.fail('Invalid id')
          }

          reply.send({ hello: 'world' })
        }
      )

      const promises = []

      for (let i = 1; i < 6; i++) {
        promises.push(
          fastify.inject({
            path: `/${i}`,
            method: 'post',
            query: { foo: 'bar' },
            payload: {
              hello: 'world'
            },
            headers: {
              'x-foo': 'x-bar'
            }
          })
        )
      }

      await Promise.all(promises)
    }
  )

  await subtest.test('Should not set a WeakMap if there is no schema', async t => {
    const fastify = Fastify()

    t.plan(1)

    fastify.get('/', (req, reply) => {
      req.getValidationFunction(defaultSchema)
      req.getValidationFunction('body')

      t.assert.strictEqual(req[kRouteContext][kRequestCacheValidateFns], null)
      reply.send({ hello: 'world' })
    })

    await fastify.inject({
      path: '/',
      method: 'GET'
    })
  })
})

test('#validate', async subtest => {
  subtest.plan(7)

  await subtest.test(
    'Should return true/false if input valid - Route without schema',
    async t => {
      const fastify = Fastify()

      t.plan(2)

      fastify.get('/', (req, reply) => {
        const isNotValid = req.validateInput({ world: 'string' }, defaultSchema)
        const isValid = req.validateInput({ hello: 'string' }, defaultSchema)

        t.assert.ok(!isNotValid)
        t.assert.ok(isValid)

        reply.send({ hello: 'world' })
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })
    }
  )

  await subtest.test(
    'Should use the custom validator compiler for the route',
    async t => {
      const fastify = Fastify()
      let called = 0
      const custom = ({ schema, httpPart, url, method }) => {
        t.assert.strictEqual(schema, defaultSchema)
        t.assert.strictEqual(url, '/')
        t.assert.strictEqual(method, 'GET')
        t.assert.strictEqual(httpPart, 'querystring')

        return input => {
          called++
          t.assert.deepStrictEqual(input, { hello: 'world' })
          return true
        }
      }

      t.plan(9)

      fastify.get('/', { validatorCompiler: custom }, (req, reply) => {
        const ok = req.validateInput(
          { hello: 'world' },
          defaultSchema,
          'querystring'
        )
        const ok2 = req.validateInput({ hello: 'world' }, defaultSchema)

        t.assert.ok(ok)
        t.assert.ok(ok2)
        t.assert.strictEqual(called, 2)

        reply.send({ hello: 'world' })
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })
    }
  )

  await subtest.test(
    'Should return true/false if input valid - With Schema for Route defined',
    async t => {
      const fastify = Fastify()

      t.plan(8)

      fastify.post(
        '/:id',
        {
          schema: requestSchema
        },
        (req, reply) => {
          const { params } = req

          switch (params.id) {
            case 1:
              t.assert.ok(req.validateInput({ hello: 'world' }, 'body'))
              t.assert.ok(!req.validateInput({ hello: [], world: 'foo' }, 'body'))
              break
            case 2:
              t.assert.ok(!req.validateInput({ foo: 'something' }, 'querystring'))
              t.assert.ok(req.validateInput({ foo: 'bar' }, 'querystring'))
              break
            case 3:
              t.assert.ok(!req.validateInput({ 'x-foo': [] }, 'headers'))
              t.assert.ok(req.validateInput({ 'x-foo': 'something' }, 'headers'))
              break
            case 4:
              t.assert.ok(req.validateInput({ id: params.id }, 'params'))
              t.assert.ok(!req.validateInput({ id: 0 }, 'params'))
              break
            default:
              t.assert.fail('Invalid id')
          }

          reply.send({ hello: 'world' })
        }
      )

      const promises = []

      for (let i = 1; i < 5; i++) {
        promises.push(
          fastify.inject({
            path: `/${i}`,
            method: 'post',
            query: { foo: 'bar' },
            payload: {
              hello: 'world'
            },
            headers: {
              'x-foo': 'x-bar'
            }
          })
        )
      }

      await Promise.all(promises)
    }
  )

  await subtest.test(
    'Should throw if missing validation fn for HTTP part and not schema provided',
    async t => {
      const fastify = Fastify()

      t.plan(10)

      fastify.get('/:id', (req, reply) => {
        const { params } = req

        switch (parseInt(params.id)) {
          case 1:
            req.validateInput({}, 'body')
            break
          case 2:
            req.validateInput({}, 'querystring')
            break
          case 3:
            req.validateInput({}, 'query')
            break
          case 4:
            req.validateInput({ 'x-foo': [] }, 'headers')
            break
          case 5:
            req.validateInput({ id: 0 }, 'params')
            break
          default:
            t.assert.fail('Invalid id')
        }
      })

      const promises = []

      for (let i = 1; i < 6; i++) {
        promises.push(
          (async j => {
            const response = await fastify.inject(`/${j}`)

            const result = response.json()
            t.assert.strictEqual(result.statusCode, 500)
            t.assert.strictEqual(result.code, 'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION')
          })(i)
        )
      }

      await Promise.all(promises)
    }
  )

  await subtest.test(
    'Should throw if missing validation fn for HTTP part and not valid schema provided',
    async t => {
      const fastify = Fastify()

      t.plan(10)

      fastify.get('/:id', (req, reply) => {
        const { params } = req

        switch (parseInt(params.id)) {
          case 1:
            req.validateInput({}, 1, 'body')
            break
          case 2:
            req.validateInput({}, [], 'querystring')
            break
          case 3:
            req.validateInput({}, '', 'query')
            break
          case 4:
            req.validateInput({ 'x-foo': [] }, null, 'headers')
            break
          case 5:
            req.validateInput({ id: 0 }, () => {}, 'params')
            break
          default:
            t.assert.fail('Invalid id')
        }
      })

      const promises = []

      for (let i = 1; i < 6; i++) {
        promises.push(
          (async j => {
            const response = await fastify.inject({
              path: `/${j}`,
              method: 'GET'
            })

            const result = response.json()
            t.assert.strictEqual(result.statusCode, 500)
            t.assert.strictEqual(result.code, 'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION')
          })(i)
        )
      }

      await Promise.all(promises)
    }
  )

  await subtest.test('Should throw if invalid schema passed', async t => {
    const fastify = Fastify()

    t.plan(10)

    fastify.get('/:id', (req, reply) => {
      const { params } = req

      switch (parseInt(params.id)) {
        case 1:
          req.validateInput({}, 1)
          break
        case 2:
          req.validateInput({}, '')
          break
        case 3:
          req.validateInput({}, [])
          break
        case 4:
          req.validateInput({ 'x-foo': [] }, null)
          break
        case 5:
          req.validateInput({ id: 0 }, () => {})
          break
        default:
          t.assert.fail('Invalid id')
      }
    })

    const promises = []

    for (let i = 1; i < 6; i++) {
      promises.push(
        (async j => {
          const response = await fastify.inject({
            path: `/${j}`,
            method: 'GET'
          })

          const result = response.json()
          t.assert.strictEqual(result.statusCode, 500)
          t.assert.strictEqual(result.code, 'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION')
        })(i)
      )
    }

    await Promise.all(promises)
  })

  await subtest.test(
    'Should set a WeakMap if compiling the very first schema',
    async t => {
      const fastify = Fastify()

      t.plan(3)

      fastify.get('/', (req, reply) => {
        t.assert.strictEqual(req[kRouteContext][kRequestCacheValidateFns], null)
        t.assert.strictEqual(req.validateInput({ hello: 'world' }, defaultSchema), true)
        t.assert.ok(req[kRouteContext][kRequestCacheValidateFns] instanceof WeakMap)

        reply.send({ hello: 'world' })
      })

      await fastify.inject({
        path: '/',
        method: 'GET'
      })
    }
  )
})

test('Nested Context', async subtest => {
  subtest.plan(1)

  await subtest.test('Level_1', async tst => {
    tst.plan(3)
    await tst.test('#compileValidationSchema', async ntst => {
      ntst.plan(5)

      await ntst.test('Should return a function - Route without schema', async t => {
        const fastify = Fastify()

        fastify.register((instance, opts, next) => {
          instance.get('/', (req, reply) => {
            const validate = req.compileValidationSchema(defaultSchema)

            t.assert.ok(validate, Function)
            t.assert.ok(validate({ hello: 'world' }))
            t.assert.ok(!validate({ world: 'foo' }))

            reply.send({ hello: 'world' })
          })

          next()
        })

        t.plan(3)

        await fastify.inject({
          path: '/',
          method: 'GET'
        })
      })

      await ntst.test(
        'Should reuse the validate fn across multiple invocations - Route without schema',
        async t => {
          const fastify = Fastify()
          let validate = null
          let counter = 0

          t.plan(16)

          fastify.register((instance, opts, next) => {
            instance.get('/', (req, reply) => {
              counter++
              if (counter > 1) {
                const newValidate = req.compileValidationSchema(defaultSchema)
                t.assert.strictEqual(validate, newValidate, 'Are the same validate function')
                validate = newValidate
              } else {
                validate = req.compileValidationSchema(defaultSchema)
              }

              t.assert.ok(validate, Function)
              t.assert.ok(validate({ hello: 'world' }))
              t.assert.ok(!validate({ world: 'foo' }))

              reply.send({ hello: 'world' })
            })

            next()
          })

          await Promise.all([
            fastify.inject('/'),
            fastify.inject('/'),
            fastify.inject('/'),
            fastify.inject('/')
          ])

          t.assert.strictEqual(counter, 4)
        }
      )

      await ntst.test('Should return a function - Route with schema', async t => {
        const fastify = Fastify()

        t.plan(3)

        fastify.register((instance, opts, next) => {
          instance.post(
            '/',
            {
              schema: {
                body: defaultSchema
              }
            },
            (req, reply) => {
              const validate = req.compileValidationSchema(defaultSchema)

              t.assert.ok(validate, Function)
              t.assert.ok(validate({ hello: 'world' }))
              t.assert.ok(!validate({ world: 'foo' }))

              reply.send({ hello: 'world' })
            }
          )

          next()
        })

        await fastify.inject({
          path: '/',
          method: 'POST',
          payload: {
            hello: 'world',
            world: 'foo'
          }
        })
      })

      await ntst.test(
        'Should use the custom validator compiler for the route',
        async t => {
          const fastify = Fastify()
          let called = 0

          t.plan(10)

          fastify.register((instance, opts, next) => {
            const custom = ({ schema, httpPart, url, method }) => {
              t.assert.strictEqual(schema, defaultSchema)
              t.assert.strictEqual(url, '/')
              t.assert.strictEqual(method, 'GET')
              t.assert.strictEqual(httpPart, 'querystring')

              return input => {
                called++
                t.assert.deepStrictEqual(input, { hello: 'world' })
                return true
              }
            }

            fastify.get('/', { validatorCompiler: custom }, (req, reply) => {
              const first = req.compileValidationSchema(
                defaultSchema,
                'querystring'
              )
              const second = req.compileValidationSchema(
                defaultSchema,
                'querystring'
              )

              t.assert.strictEqual(first, second)
              t.assert.ok(first({ hello: 'world' }))
              t.assert.ok(second({ hello: 'world' }))
              t.assert.strictEqual(called, 2)

              reply.send({ hello: 'world' })
            })

            next()
          })

          await fastify.inject('/')
        }
      )

      await ntst.test('Should compile the custom validation - nested with schema.headers', async t => {
        const fastify = Fastify()
        let called = false

        const schemaWithHeaders = {
          headers: {
            'x-foo': {
              type: 'string'
            }
          }
        }

        const custom = ({ schema, httpPart, url, method }) => {
          if (called) return () => true
          // only custom validators keep the same headers object
          t.assert.strictEqual(schema, schemaWithHeaders.headers)
          t.assert.strictEqual(url, '/')
          t.assert.strictEqual(httpPart, 'headers')
          called = true
          return () => true
        }

        t.plan(4)

        fastify.setValidatorCompiler(custom)

        fastify.register((instance, opts, next) => {
          instance.get('/', { schema: schemaWithHeaders }, (req, reply) => {
            t.assert.strictEqual(called, true)

            reply.send({ hello: 'world' })
          })

          next()
        })

        await fastify.inject('/')
      })
    })

    await tst.test('#getValidationFunction', async ntst => {
      ntst.plan(6)

      await ntst.test('Should return a validation function', async t => {
        const fastify = Fastify()

        t.plan(1)

        fastify.register((instance, opts, next) => {
          instance.get('/', (req, reply) => {
            const original = req.compileValidationSchema(defaultSchema)
            const referenced = req.getValidationFunction(defaultSchema)

            t.assert.strictEqual(original, referenced)

            reply.send({ hello: 'world' })
          })

          next()
        })

        await fastify.inject('/')
      })

      await ntst.test('Should return undefined if no schema compiled', async t => {
        const fastify = Fastify()

        t.plan(1)

        fastify.register((instance, opts, next) => {
          instance.get('/', (req, reply) => {
            const validate = req.getValidationFunction(defaultSchema)

            t.assert.ok(!validate)

            reply.send({ hello: 'world' })
          })

          next()
        })

        await fastify.inject('/')
      })

      await ntst.test(
        'Should return the validation function from each HTTP part',
        async t => {
          const fastify = Fastify()
          let headerValidation = null
          let customValidation = null

          t.plan(15)

          fastify.register((instance, opts, next) => {
            instance.post(
              '/:id',
              {
                schema: requestSchema
              },
              (req, reply) => {
                const { params } = req

                switch (params.id) {
                  case 1:
                    customValidation = req.compileValidationSchema(
                      defaultSchema
                    )
                    t.assert.ok(req.getValidationFunction('body'))
                    t.assert.ok(req.getValidationFunction('body')({ hello: 'world' }))
                    t.assert.ok(!req.getValidationFunction('body')({ world: 'hello' })
                    )
                    break
                  case 2:
                    headerValidation = req.getValidationFunction('headers')
                    t.assert.ok(headerValidation)
                    t.assert.ok(headerValidation({ 'x-foo': 'world' }))
                    t.assert.ok(!headerValidation({ 'x-foo': [] }))
                    break
                  case 3:
                    t.assert.ok(req.getValidationFunction('params'))
                    t.assert.ok(req.getValidationFunction('params')({ id: 123 }))
                    t.assert.ok(!req.getValidationFunction('params'({ id: 1.2 })))
                    break
                  case 4:
                    t.assert.ok(req.getValidationFunction('querystring'))
                    t.assert.ok(
                      req.getValidationFunction('querystring')({ foo: 'bar' })
                    )
                    t.assert.ok(!req.getValidationFunction('querystring')({
                      foo: 'not-bar'
                    })
                    )
                    break
                  case 5:
                    t.assert.strictEqual(
                      customValidation,
                      req.getValidationFunction(defaultSchema)
                    )
                    t.assert.ok(customValidation({ hello: 'world' }))
                    t.assert.ok(!customValidation({}))
                    t.assert.strictEqual(
                      headerValidation,
                      req.getValidationFunction('headers')
                    )
                    break
                  default:
                    t.assert.fail('Invalid id')
                }

                reply.send({ hello: 'world' })
              }
            )

            next()
          })
          const promises = []

          for (let i = 1; i < 6; i++) {
            promises.push(
              fastify.inject({
                path: `/${i}`,
                method: 'post',
                query: { foo: 'bar' },
                payload: {
                  hello: 'world'
                },
                headers: {
                  'x-foo': 'x-bar'
                }
              })
            )
          }

          await Promise.all(promises)
        }
      )

      await ntst.test('Should return a validation function - nested', async t => {
        const fastify = Fastify()
        let called = false
        const custom = ({ schema, httpPart, url, method }) => {
          t.assert.strictEqual(schema, defaultSchema)
          t.assert.strictEqual(url, '/')
          t.assert.strictEqual(method, 'GET')
          t.assert.ok(!httpPart)

          called = true
          return () => true
        }

        t.plan(6)

        fastify.setValidatorCompiler(custom)

        fastify.register((instance, opts, next) => {
          instance.get('/', (req, reply) => {
            const original = req.compileValidationSchema(defaultSchema)
            const referenced = req.getValidationFunction(defaultSchema)

            t.assert.strictEqual(original, referenced)
            t.assert.strictEqual(called, true)

            reply.send({ hello: 'world' })
          })

          next()
        })

        await fastify.inject('/')
      })

      await ntst.test(
        'Should return undefined if no schema compiled - nested',
        async t => {
          const fastify = Fastify()
          let called = 0
          const custom = ({ schema, httpPart, url, method }) => {
            called++
            return () => true
          }

          t.plan(3)

          fastify.setValidatorCompiler(custom)

          fastify.get('/', (req, reply) => {
            const validate = req.compileValidationSchema(defaultSchema)

            t.assert.strictEqual(typeof validate, 'function')

            reply.send({ hello: 'world' })
          })

          fastify.register(
            (instance, opts, next) => {
              instance.get('/', (req, reply) => {
                const validate = req.getValidationFunction(defaultSchema)

                t.assert.ok(!validate)
                t.assert.strictEqual(called, 1)

                reply.send({ hello: 'world' })
              })

              next()
            },
            { prefix: '/nested' }
          )

          await fastify.inject('/')
          await fastify.inject('/nested')
        }
      )

      await ntst.test('Should per-route defined validation compiler', async t => {
        const fastify = Fastify()
        let validateParent
        let validateChild
        let calledParent = 0
        let calledChild = 0
        const customParent = ({ schema, httpPart, url, method }) => {
          calledParent++
          return () => true
        }

        const customChild = ({ schema, httpPart, url, method }) => {
          calledChild++
          return () => true
        }

        t.plan(5)

        fastify.setValidatorCompiler(customParent)

        fastify.get('/', (req, reply) => {
          validateParent = req.compileValidationSchema(defaultSchema)

          t.assert.strictEqual(typeof validateParent, 'function')

          reply.send({ hello: 'world' })
        })

        fastify.register(
          (instance, opts, next) => {
            instance.get(
              '/',
              {
                validatorCompiler: customChild
              },
              (req, reply) => {
                const validate1 = req.compileValidationSchema(defaultSchema)
                validateChild = req.getValidationFunction(defaultSchema)

                t.assert.strictEqual(validate1, validateChild)
                t.assert.notStrictEqual(validateParent, validateChild)
                t.assert.strictEqual(calledParent, 1)
                t.assert.strictEqual(calledChild, 1)

                reply.send({ hello: 'world' })
              }
            )

            next()
          },
          { prefix: '/nested' }
        )

        await fastify.inject('/')
        await fastify.inject('/nested')
      })
    })

    await tst.test('#validate', async ntst => {
      ntst.plan(3)

      await ntst.test(
        'Should return true/false if input valid - Route without schema',
        async t => {
          const fastify = Fastify()

          t.plan(2)

          fastify.register((instance, opts, next) => {
            instance.get('/', (req, reply) => {
              const isNotValid = req.validateInput(
                { world: 'string' },
                defaultSchema
              )
              const isValid = req.validateInput({ hello: 'string' }, defaultSchema)

              t.assert.ok(!isNotValid)
              t.assert.ok(isValid)

              reply.send({ hello: 'world' })
            })

            next()
          })

          await fastify.inject('/')
        }
      )

      await ntst.test(
        'Should use the custom validator compiler for the route',
        async t => {
          const fastify = Fastify()
          let parentCalled = 0
          let childCalled = 0
          const customParent = () => {
            parentCalled++

            return () => true
          }

          const customChild = ({ schema, httpPart, url, method }) => {
            t.assert.strictEqual(schema, defaultSchema)
            t.assert.strictEqual(url, '/')
            t.assert.strictEqual(method, 'GET')
            t.assert.strictEqual(httpPart, 'querystring')

            return input => {
              childCalled++
              t.assert.deepStrictEqual(input, { hello: 'world' })
              return true
            }
          }

          t.plan(10)

          fastify.setValidatorCompiler(customParent)

          fastify.register((instance, opts, next) => {
            instance.get(
              '/',
              { validatorCompiler: customChild },
              (req, reply) => {
                const ok = req.validateInput(
                  { hello: 'world' },
                  defaultSchema,
                  'querystring'
                )
                const ok2 = req.validateInput({ hello: 'world' }, defaultSchema)

                t.assert.ok(ok)
                t.assert.ok(ok2)
                t.assert.strictEqual(childCalled, 2)
                t.assert.strictEqual(parentCalled, 0)

                reply.send({ hello: 'world' })
              }
            )

            next()
          })

          await fastify.inject('/')
        }
      )

      await ntst.test(
        'Should return true/false if input valid - With Schema for Route defined and scoped validator compiler',
        async t => {
          const validator = new Ajv()
          const fastify = Fastify()
          const childCounter = {
            query: 0,
            body: 0,
            params: 0,
            headers: 0
          }
          let parentCalled = 0

          const parent = () => {
            parentCalled++
            return () => true
          }
          const child = ({ schema, httpPart, url, method }) => {
            httpPart = httpPart === 'querystring' ? 'query' : httpPart
            const validate = validator.compile(schema)

            return input => {
              childCounter[httpPart]++
              return validate(input)
            }
          }

          t.plan(13)

          fastify.setValidatorCompiler(parent)
          fastify.register((instance, opts, next) => {
            instance.setValidatorCompiler(child)
            instance.post(
              '/:id',
              {
                schema: requestSchema
              },
              (req, reply) => {
                const { params } = req

                switch (parseInt(params.id)) {
                  case 1:
                    t.assert.ok(req.validateInput({ hello: 'world' }, 'body'))
                    t.assert.ok(!req.validateInput({ hello: [], world: 'foo' }, 'body'))
                    break
                  case 2:
                    t.assert.ok(!req.validateInput({ foo: 'something' }, 'querystring'))
                    t.assert.ok(req.validateInput({ foo: 'bar' }, 'querystring'))
                    break
                  case 3:
                    t.assert.ok(!req.validateInput({ 'x-foo': [] }, 'headers'))
                    t.assert.ok(req.validateInput({ 'x-foo': 'something' }, 'headers'))
                    break
                  case 4:
                    t.assert.ok(req.validateInput({ id: 1 }, 'params'))
                    t.assert.ok(!req.validateInput({ id: params.id }, 'params'))
                    break
                  default:
                    t.assert.fail('Invalid id')
                }

                reply.send({ hello: 'world' })
              }
            )

            next()
          })

          const promises = []

          for (let i = 1; i < 5; i++) {
            promises.push(
              fastify.inject({
                path: `/${i}`,
                method: 'post',
                query: {},
                payload: {
                  hello: 'world'
                }
              })
            )
          }

          await Promise.all(promises)

          t.assert.strictEqual(childCounter.query, 6) // 4 calls made + 2 custom validations
          t.assert.strictEqual(childCounter.headers, 6) // 4 calls made + 2 custom validations
          t.assert.strictEqual(childCounter.body, 6) // 4 calls made + 2 custom validations
          t.assert.strictEqual(childCounter.params, 6) // 4 calls made + 2 custom validations
          t.assert.strictEqual(parentCalled, 0)
        }
      )
    })
  })
})
