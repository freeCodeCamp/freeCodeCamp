'use strict'

function resolveSwaggerFunction (opts, cache, routes, Ref) {
  if (opts.openapi === undefined || opts.openapi === null) {
    return require('../spec/swagger')(opts, cache, routes, Ref)
  } else {
    return require('../spec/openapi')(opts, cache, routes, Ref)
  }
}

module.exports = {
  resolveSwaggerFunction
}
