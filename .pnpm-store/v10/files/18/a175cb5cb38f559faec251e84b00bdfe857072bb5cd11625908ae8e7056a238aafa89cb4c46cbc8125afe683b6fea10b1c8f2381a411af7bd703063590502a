'use strict'

let Node = require('./node')

class Declaration extends Node {
  get variable() {
    return this.prop.startsWith('--') || this.prop[0] === '$'
  }

  constructor(defaults) {
    if (
      defaults &&
      typeof defaults.value !== 'undefined' &&
      typeof defaults.value !== 'string'
    ) {
      defaults = { ...defaults, value: String(defaults.value) }
    }
    super(defaults)
    this.type = 'decl'
  }
}

module.exports = Declaration
Declaration.default = Declaration
