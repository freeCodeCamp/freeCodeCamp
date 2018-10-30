var convert = require('./convert'),
    func = convert('unzip', require('../unzip'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
