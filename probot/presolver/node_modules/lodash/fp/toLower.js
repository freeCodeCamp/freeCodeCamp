var convert = require('./convert'),
    func = convert('toLower', require('../toLower'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
