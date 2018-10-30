var convert = require('./convert'),
    func = convert('isArrayBuffer', require('../isArrayBuffer'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
