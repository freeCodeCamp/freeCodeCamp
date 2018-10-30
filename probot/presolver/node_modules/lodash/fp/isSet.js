var convert = require('./convert'),
    func = convert('isSet', require('../isSet'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
