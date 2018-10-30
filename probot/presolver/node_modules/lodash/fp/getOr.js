var convert = require('./convert'),
    func = convert('getOr', require('../get'));

func.placeholder = require('./placeholder');
module.exports = func;
