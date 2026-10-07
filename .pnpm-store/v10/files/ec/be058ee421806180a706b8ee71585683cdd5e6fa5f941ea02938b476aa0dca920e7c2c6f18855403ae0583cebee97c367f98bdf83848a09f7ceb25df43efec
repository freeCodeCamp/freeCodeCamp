let Value = require('../value')

class DisplayGrid extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'display-grid') {
      this.name = 'grid'
    }
  }

  /**
   * Faster check for flex value
   */
  check(decl) {
    return decl.prop === 'display' && decl.value === this.name
  }
}

DisplayGrid.names = ['display-grid', 'inline-grid']

module.exports = DisplayGrid
