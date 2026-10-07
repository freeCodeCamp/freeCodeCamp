'use strict'

const Ref = require('json-schema-resolver')
const cloner = require('rfdc')({ proto: true, circles: false })

function addHook (fastify, pluginOptions) {
  const routes = []
  const sharedSchemasMap = new Map()
  let hookRun = false

  fastify.addHook('onRoute', (routeOptions) => {
    const routeConfig = routeOptions.config || {}
    const swaggerConfig = routeConfig.swagger || {}
    if (routeOptions.method === 'HEAD' && pluginOptions.exposeHeadRoutes !== true && swaggerConfig.exposeHeadRoute !== true) {
      return
    }

    if (
      routeOptions.method === 'HEAD' &&
            routeOptions.schema !== undefined &&
            routeOptions.schema.operationId !== undefined
    ) {
      routes.push(
        // If two routes with operationId are added to the swagger
        // object, it is no longer valid.
        // therefore we suffix the operationId with `-head`.
        Object.assign({}, routeOptions, {
          schema: Object.assign({}, routeOptions.schema, {
            operationId: `${routeOptions.schema.operationId}-head`
          })
        })
      )
      return
    }

    routes.push(routeOptions)
  })

  fastify.addHook('onRegister', async (instance) => {
    // we need to wait the ready event to get all the .getSchemas()
    // otherwise it will be empty
    // TODO: better handle for schemaId
    // when schemaId is the same in difference instance
    // the latter will lost
    instance.addHook('onReady', (done) => {
      const allSchemas = instance.getSchemas()
      for (const schemaId of Object.keys(allSchemas)) {
        sharedSchemasMap.set(schemaId, allSchemas[schemaId])
      }
      done()
    })
  })

  fastify.addHook('onReady', (done) => {
    hookRun = true
    const allSchemas = fastify.getSchemas()
    for (const schemaId of Object.keys(allSchemas)) {
      // it is the top-level, we do not expect to have duplicate id
      sharedSchemasMap.set(schemaId, allSchemas[schemaId])
    }
    done()
  })

  return {
    routes,
    Ref () {
      if (hookRun === false) {
        throw new Error('.swagger() must be called after .ready()')
      }
      const externalSchemas = cloner(Array.from(sharedSchemasMap.values()))
      return Ref(Object.assign(
        { applicationUri: 'todo.com' },
        pluginOptions.refResolver,
        { clone: true, externalSchemas })
      )
    }
  }
}

module.exports = {
  addHook
}
