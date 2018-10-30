var convert = require('./convert'),
    func = convert('keys', require('../keys'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
