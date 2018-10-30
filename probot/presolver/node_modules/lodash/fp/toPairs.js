var convert = require('./convert'),
    func = convert('toPairs', require('../toPairs'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
