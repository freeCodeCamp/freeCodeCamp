"use strict"
exports.__esModule = true

const extname = require('path').extname

const log = require('debug')('eslint-plugin-import:utils:ignore')

// one-shot memoized
let cachedSet, lastSettings
function validExtensions(context) {
  if (cachedSet && context.settings === lastSettings) {
    return cachedSet
  }

  lastSettings = context.settings
  cachedSet = makeValidExtensionSet(context.settings)
  return cachedSet
}

function makeValidExtensionSet(settings) {
  // start with explicit JS-parsed extensions
  const exts = new Set(settings['import/extensions'] || [ '.js' ])

  // all alternate parser extensions are also valid
  if ('import/parsers' in settings) {
    for (let parser in settings['import/parsers']) {
      settings['import/parsers'][parser]
        .forEach(ext => exts.add(ext))
    }
  }

  return exts
}

exports.default = function ignore(path, context) {
  // check extension whitelist first (cheap)
  if (!hasValidExtension(path, context)) return true

  if (!('import/ignore' in context.settings)) return false
  const ignoreStrings = context.settings['import/ignore']

  for (let i = 0; i < ignoreStrings.length; i++) {
    const regex = new RegExp(ignoreStrings[i])
    if (regex.test(path)) {
      log(`ignoring ${path}, matched pattern /${ignoreStrings[i]}/`)
      return true
    }
  }

  return false
}

function hasValidExtension(path, context) {
  return validExtensions(context).has(extname(path))
}
exports.hasValidExtension = hasValidExtension
