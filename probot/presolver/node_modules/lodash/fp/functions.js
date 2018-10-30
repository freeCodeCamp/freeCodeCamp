var convert = require('./convert'),
    func = convert('functions', require('../functions'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
