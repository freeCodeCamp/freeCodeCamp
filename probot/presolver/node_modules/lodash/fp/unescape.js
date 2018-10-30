var convert = require('./convert'),
    func = convert('unescape', require('../unescape'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
