var convert = require('./convert'),
    func = convert('stubString', require('../stubString'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
