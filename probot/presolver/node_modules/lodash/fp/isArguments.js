var convert = require('./convert'),
    func = convert('isArguments', require('../isArguments'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
