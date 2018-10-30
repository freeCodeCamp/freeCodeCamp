var convert = require('./convert'),
    func = convert('flattenDeep', require('../flattenDeep'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
