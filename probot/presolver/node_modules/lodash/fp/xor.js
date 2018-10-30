var convert = require('./convert'),
    func = convert('xor', require('../xor'));

func.placeholder = require('./placeholder');
module.exports = func;
