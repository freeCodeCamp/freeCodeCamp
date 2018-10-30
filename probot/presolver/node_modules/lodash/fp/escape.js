var convert = require('./convert'),
    func = convert('escape', require('../escape'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
