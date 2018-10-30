var convert = require('./convert'),
    func = convert('keysIn', require('../keysIn'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
