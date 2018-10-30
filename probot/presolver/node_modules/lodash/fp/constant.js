var convert = require('./convert'),
    func = convert('constant', require('../constant'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
