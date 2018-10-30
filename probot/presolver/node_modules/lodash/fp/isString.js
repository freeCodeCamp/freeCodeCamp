var convert = require('./convert'),
    func = convert('isString', require('../isString'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
