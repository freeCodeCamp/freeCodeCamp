'use strict'

const yaml = require('yaml')
const { shouldRouteHide } = require('../../util/should-route-hide')
const { prepareDefaultOptions, prepareSwaggerObject, prepareSwaggerMethod, normalizeUrl, prepareSwaggerDefinitions } = require('./utils')

module.exports = function (opts, cache, routes, Ref) {
  let ref

  const defOpts = prepareDefaultOptions(opts)

  return function (opts) {
    if (opts?.yaml) {
      if (cache.string) return cache.string
    } else {
      if (cache.object) return cache.object
    }

    const swaggerObject = prepareSwaggerObject(defOpts)

    ref = Ref()
    swaggerObject.definitions = prepareSwaggerDefinitions({
      ...swaggerObject.definitions,
      ...(ref.definitions().definitions)
    }, ref)

    for (const route of routes) {
      const transformResult = route.config?.swaggerTransform !== undefined
        ? route.config.swaggerTransform
          ? route.config.swaggerTransform({ schema: route.schema, url: route.url, route, swaggerObject })
          : {}
        : defOpts.transform
          ? defOpts.transform({ schema: route.schema, url: route.url, route, swaggerObject })
          : {}

      const schema = transformResult.schema || route.schema
      const shouldRouteHideOpts = {
        hiddenTag: defOpts.hiddenTag,
        hideUntagged: defOpts.hideUntagged
      }

      if (shouldRouteHide(schema, shouldRouteHideOpts)) continue

      let url = transformResult.url || route.url
      url = normalizeUrl(url, defOpts.basePath, defOpts.stripBasePath)

      const swaggerRoute = Object.assign({}, swaggerObject.paths[url])

      const swaggerMethod = prepareSwaggerMethod(schema, ref, swaggerObject, url)

      if (route.links) {
        throw new Error('Swagger (Open API v2) does not support Links. Upgrade to OpenAPI v3 (see @fastify/swagger readme)')
      }

      // route.method should be either a String, like 'POST', or an Array of Strings, like ['POST','PUT','PATCH']
      const methods = typeof route.method === 'string' ? [route.method] : route.method

      for (const method of methods) {
        swaggerRoute[method.toLowerCase()] = swaggerMethod
      }

      swaggerObject.paths[url] = swaggerRoute
    }

    const transformObjectResult = defOpts.transformObject
      ? defOpts.transformObject({ swaggerObject })
      : swaggerObject

    if (opts?.yaml) {
      cache.string = yaml.stringify(transformObjectResult, { strict: false })
      return cache.string
    }

    cache.object = transformObjectResult
    return cache.object
  }
}
