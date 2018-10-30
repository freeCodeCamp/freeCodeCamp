var convert = require('./convert'),
    func = convert('stubFalse', require('../stubFalse'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
