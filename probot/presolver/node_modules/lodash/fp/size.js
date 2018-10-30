var convert = require('./convert'),
    func = convert('size', require('../size'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
