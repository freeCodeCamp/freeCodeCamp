var convert = require('./convert'),
    func = convert('uniq', require('../uniq'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
