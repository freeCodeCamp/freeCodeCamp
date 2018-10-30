var convert = require('./convert'),
    func = convert('clone', require('../clone'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
