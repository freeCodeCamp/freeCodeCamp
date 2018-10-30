require('../../modules/web.dom.iterable');
var $iterators = require('../../modules/es6.array.iterator');
module.exports = {
  keys: $iterators.keys,
  values: $iterators.values,
  entries: $iterators.entries,
  iterator: $iterators.values
};
