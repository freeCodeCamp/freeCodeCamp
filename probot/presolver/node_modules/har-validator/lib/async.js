var Ajv = require('ajv')
var HARError = require('./error')
var schemas = require('har-schema')

var ajv

function validate (name, data, next) {
  data = data || {}

  // validator config
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  var validate = ajv.getSchema(name + '.json')

  var valid = validate(data)

  // callback?
  if (typeof next === 'function') {
    return next(!valid ? new HARError(validate.errors) : null, valid)
  }

  return valid
}

exports.afterRequest = function (data, next) {
  return validate('afterRequest', data, next)
}

exports.beforeRequest = function (data, next) {
  return validate('beforeRequest', data, next)
}

exports.browser = function (data, next) {
  return validate('browser', data, next)
}

exports.cache = function (data, next) {
  return validate('cache', data, next)
}

exports.content = function (data, next) {
  return validate('content', data, next)
}

exports.cookie = function (data, next) {
  return validate('cookie', data, next)
}

exports.creator = function (data, next) {
  return validate('creator', data, next)
}

exports.entry = function (data, next) {
  return validate('entry', data, next)
}

exports.har = function (data, next) {
  return validate('har', data, next)
}

exports.header = function (data, next) {
  return validate('header', data, next)
}

exports.log = function (data, next) {
  return validate('log', data, next)
}

exports.page = function (data, next) {
  return validate('page', data, next)
}

exports.pageTimings = function (data, next) {
  return validate('pageTimings', data, next)
}

exports.postData = function (data, next) {
  return validate('postData', data, next)
}

exports.query = function (data, next) {
  return validate('query', data, next)
}

exports.request = function (data, next) {
  return validate('request', data, next)
}

exports.response = function (data, next) {
  return validate('response', data, next)
}

exports.timings = function (data, next) {
  return validate('timings', data, next)
}
