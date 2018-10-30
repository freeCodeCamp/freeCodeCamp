var convert = require('./convert'),
    func = convert('flip', require('../flip'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
