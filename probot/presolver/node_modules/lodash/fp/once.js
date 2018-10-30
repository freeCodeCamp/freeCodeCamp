var convert = require('./convert'),
    func = convert('once', require('../once'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
