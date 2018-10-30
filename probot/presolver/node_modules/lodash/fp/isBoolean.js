var convert = require('./convert'),
    func = convert('isBoolean', require('../isBoolean'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
