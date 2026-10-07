let Value = require('../value')

class FilterValue extends Value {
  constructor(name, prefixes) {
    super(name, prefixes)
    if (name === 'filter-function') {
      this.name = 'filter'
    }
  }
}

FilterValue.names = ['filter', 'filter-function']

module.exports = FilterValue
