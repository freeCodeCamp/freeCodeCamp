var convert = require('./convert'),
    func = convert('isNil', require('../isNil'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
