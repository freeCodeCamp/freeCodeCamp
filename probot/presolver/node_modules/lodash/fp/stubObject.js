var convert = require('./convert'),
    func = convert('stubObject', require('../stubObject'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
