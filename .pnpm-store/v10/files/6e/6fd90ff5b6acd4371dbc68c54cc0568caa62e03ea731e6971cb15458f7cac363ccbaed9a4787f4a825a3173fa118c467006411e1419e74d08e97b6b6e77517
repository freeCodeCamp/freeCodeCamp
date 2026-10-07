'use strict'

var dotenvExpand = function (config) {
  // if ignoring process.env, use a blank object
  var environment = config.ignoreProcessEnv ? {} : process.env

  var interpolate = function (envValue) {
    var matches = envValue.match(/(.?\${?(?:[a-zA-Z0-9_]+)?}?)/g) || []

    return matches.reduce(function (newEnv, match) {
      var parts = /(.?)\${?([a-zA-Z0-9_]+)?}?/g.exec(match)
      var prefix = parts[1]

      var value, replacePart

      if (prefix === '\\') {
        replacePart = parts[0]
        value = replacePart.replace('\\$', '$')
      } else {
        var key = parts[2]
        replacePart = parts[0].substring(prefix.length)
        // process.env value 'wins' over .env file's value
        value = environment.hasOwnProperty(key) ? environment[key] : (config.parsed[key] || '')

        // Resolve recursive interpolations
        value = interpolate(value)
      }

      return newEnv.replace(replacePart, value)
    }, envValue)
  }

  for (var configKey in config.parsed) {
    var value = environment.hasOwnProperty(configKey) ? environment[configKey] : config.parsed[configKey]

    config.parsed[configKey] = interpolate(value)
  }

  for (var processKey in config.parsed) {
    environment[processKey] = config.parsed[processKey]
  }

  return config
}

module.exports = dotenvExpand
