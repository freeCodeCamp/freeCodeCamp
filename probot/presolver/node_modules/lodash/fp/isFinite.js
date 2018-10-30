var convert = require('./convert'),
    func = convert('isFinite', require('../isFinite'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
