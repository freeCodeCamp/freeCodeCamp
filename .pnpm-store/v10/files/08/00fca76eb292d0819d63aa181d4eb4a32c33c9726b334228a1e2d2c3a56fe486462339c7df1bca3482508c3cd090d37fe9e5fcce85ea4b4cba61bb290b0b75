'use strict'

const yaml = require('yaml')
const { shouldRouteHide } = require('../../util/should-route-hide')
const { prepareDefaultOptions, prepareOpenapiObject, prepareOpenapiMethod, prepareOpenapiSchemas, normalizeUrl, resolveServerUrls } = require('./utils')

module.exports = function (opts, cache, routes, Ref) {
  let ref

  const defOpts = prepareDefaultOptions(opts)

  return function (opts) {
    if (opts?.yaml) {
      if (cache.string) return cache.string
    } else {
      if (cache.object) return cache.object
    }

    // Base Openapi info
    const openapiObject = prepareOpenapiObject(defOpts)

    ref = Ref()
    openapiObject.components.schemas = prepareOpenapiSchemas(defOpts, {
      ...openapiObject.components.schemas,
      ...(ref.definitions().definitions)
    }, ref)

    const serverUrls = resolveServerUrls(defOpts.servers)

    for (const route of routes) {
      const transformResult = route.config?.swaggerTransform !== undefined
        ? route.config.swaggerTransform
          ? route.config.swaggerTransform({ schema: route.schema, url: route.url, route, openapiObject })
          : {}
        : defOpts.transform
          ? defOpts.transform({ schema: route.schema, url: route.url, route, openapiObject })
          : {}

      const schema = transformResult.schema || route.schema
      const shouldRouteHideOpts = {
        hiddenTag: defOpts.hiddenTag,
        hideUntagged: defOpts.hideUntagged
      }

      if (shouldRouteHide(schema, shouldRouteHideOpts)) continue

      let url = transformResult.url || route.url
      url = normalizeUrl(url, serverUrls, defOpts.stripBasePath)

      const openapiRoute = Object.assign({}, openapiObject.paths[url])

      const openapiMethod = prepareOpenapiMethod(defOpts, schema, ref, openapiObject, url)

      if (route.links) {
        for (const statusCode of Object.keys(route.links)) {
          if (!openapiMethod.responses[statusCode]) {
            throw new Error(`missing status code ${statusCode} in route ${route.path}`)
          }
          openapiMethod.responses[statusCode].links = route.links[statusCode]
        }
      }

      // route.method should be either a String, like 'POST', or an Array of Strings, like ['POST','PUT','PATCH']
      const methods = typeof route.method === 'string' ? [route.method] : route.method

      for (const method of methods) {
        openapiRoute[method.toLowerCase()] = openapiMethod
      }

      openapiObject.paths[url] = openapiRoute
    }

    const transformObjectResult = defOpts.transformObject
      ? defOpts.transformObject({ openapiObject })
      : openapiObject

    if (opts?.yaml) {
      cache.string = yaml.stringify(transformObjectResult, { strict: false })
      return cache.string
    }

    cache.object = transformObjectResult
    return cache.object
  }
}
