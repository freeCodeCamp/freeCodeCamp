var convert = require('./convert'),
    func = convert('isMap', require('../isMap'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
