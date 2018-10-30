var convert = require('./convert'),
    func = convert('isWeakMap', require('../isWeakMap'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
