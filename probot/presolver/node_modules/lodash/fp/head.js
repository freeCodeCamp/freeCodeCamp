var convert = require('./convert'),
    func = convert('head', require('../head'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
