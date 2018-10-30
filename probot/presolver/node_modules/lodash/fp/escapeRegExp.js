var convert = require('./convert'),
    func = convert('escapeRegExp', require('../escapeRegExp'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
