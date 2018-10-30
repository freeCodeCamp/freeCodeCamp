var convert = require('./convert'),
    func = convert('capitalize', require('../capitalize'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
