var convert = require('./convert'),
    func = convert('toInteger', require('../toInteger'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
