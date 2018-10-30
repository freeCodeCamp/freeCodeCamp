var convert = require('./convert'),
    func = convert('upperCase', require('../upperCase'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
