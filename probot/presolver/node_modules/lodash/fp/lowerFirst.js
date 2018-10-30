var convert = require('./convert'),
    func = convert('lowerFirst', require('../lowerFirst'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
