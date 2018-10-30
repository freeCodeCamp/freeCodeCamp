var convert = require('./convert'),
    func = convert('isEmpty', require('../isEmpty'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
