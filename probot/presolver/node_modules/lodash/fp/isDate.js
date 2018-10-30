var convert = require('./convert'),
    func = convert('isDate', require('../isDate'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
