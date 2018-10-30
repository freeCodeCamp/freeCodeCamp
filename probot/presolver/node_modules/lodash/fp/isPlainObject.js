var convert = require('./convert'),
    func = convert('isPlainObject', require('../isPlainObject'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
