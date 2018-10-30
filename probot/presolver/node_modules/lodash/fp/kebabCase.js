var convert = require('./convert'),
    func = convert('kebabCase', require('../kebabCase'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
