"use strict"
exports.__esModule = true

exports.default = function declaredScope(context, name) {
  let references = context.getScope().references
    , i
  for (i = 0; i < references.length; i++) {
    if (references[i].identifier.name === name) {
      break
    }
  }
  if (!references[i]) return undefined
  return references[i].resolved.scope.type
}
