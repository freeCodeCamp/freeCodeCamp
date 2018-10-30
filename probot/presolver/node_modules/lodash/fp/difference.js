var convert = require('./convert'),
    func = convert('difference', require('../difference'));

func.placeholder = require('./placeholder');
module.exports = func;
