// Borrowed from here:
// https://github.com/colonyamerican/eslint-plugin-cah/issues/3

'use strict'

function isDeclared (scope, ref) {
  return scope.variables.some(function (variable) {
    if (variable.name !== ref.identifier.name) {
      return false
    }

    if (!variable.defs || !variable.defs.length) {
      return false
    }

    return true
  })
}

module.exports = {
  create: function (context) {
    var MESSAGE = '"{{name}}" is not defined.'

    /**
     * Checks for and reports reassigned constants
     *
     * @param {Scope} scope - an escope Scope object
     * @returns {void}
     * @private
     */
    return {
      'Program:exit': function () {
        var scope = context.getScope()

        scope.implicit.left.forEach(function (ref) {
          if (ref.identifier.name !== 'Promise') {
            return
          }

          if (!isDeclared(scope, ref)) {
            context.report(ref.identifier, MESSAGE, { name: ref.identifier.name })
          }
        })
      }
    }
  }
}
