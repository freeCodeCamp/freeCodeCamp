var convert = require('./convert'),
    func = convert('next', require('../next'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
