var convert = require('./convert'),
    func = convert('toPlainObject', require('../toPlainObject'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
