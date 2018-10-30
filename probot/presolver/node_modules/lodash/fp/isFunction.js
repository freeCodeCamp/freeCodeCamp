var convert = require('./convert'),
    func = convert('isFunction', require('../isFunction'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
