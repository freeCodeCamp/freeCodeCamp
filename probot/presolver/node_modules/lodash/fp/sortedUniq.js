var convert = require('./convert'),
    func = convert('sortedUniq', require('../sortedUniq'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
