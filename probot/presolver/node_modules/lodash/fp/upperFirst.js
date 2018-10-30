var convert = require('./convert'),
    func = convert('upperFirst', require('../upperFirst'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
