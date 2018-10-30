var convert = require('./convert'),
    func = convert('commit', require('../commit'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
