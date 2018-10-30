var convert = require('./convert'),
    func = convert('memoize', require('../memoize'));

func.placeholder = require('./placeholder');
module.exports = func;
