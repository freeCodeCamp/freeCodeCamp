var convert = require('./convert'),
    func = convert('nthArg', require('../nthArg'));

func.placeholder = require('./placeholder');
module.exports = func;
