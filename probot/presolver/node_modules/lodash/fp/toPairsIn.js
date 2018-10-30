var convert = require('./convert'),
    func = convert('toPairsIn', require('../toPairsIn'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
