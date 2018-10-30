var convert = require('./convert'),
    func = convert('isNative', require('../isNative'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
