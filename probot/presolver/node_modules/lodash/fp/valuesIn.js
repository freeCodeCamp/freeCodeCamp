var convert = require('./convert'),
    func = convert('valuesIn', require('../valuesIn'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
