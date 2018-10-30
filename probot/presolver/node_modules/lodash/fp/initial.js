var convert = require('./convert'),
    func = convert('initial', require('../initial'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
