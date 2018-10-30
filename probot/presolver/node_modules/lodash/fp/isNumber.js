var convert = require('./convert'),
    func = convert('isNumber', require('../isNumber'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
