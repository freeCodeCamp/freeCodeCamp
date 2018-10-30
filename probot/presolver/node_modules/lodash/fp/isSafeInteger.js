var convert = require('./convert'),
    func = convert('isSafeInteger', require('../isSafeInteger'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
