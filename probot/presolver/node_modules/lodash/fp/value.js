var convert = require('./convert'),
    func = convert('value', require('../value'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
