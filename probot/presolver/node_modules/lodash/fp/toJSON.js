var convert = require('./convert'),
    func = convert('toJSON', require('../toJSON'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
