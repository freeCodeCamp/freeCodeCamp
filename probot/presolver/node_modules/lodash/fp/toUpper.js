var convert = require('./convert'),
    func = convert('toUpper', require('../toUpper'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
