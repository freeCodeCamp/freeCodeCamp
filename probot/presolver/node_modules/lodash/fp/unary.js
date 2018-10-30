var convert = require('./convert'),
    func = convert('unary', require('../unary'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
