var convert = require('./convert'),
    func = convert('isError', require('../isError'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
