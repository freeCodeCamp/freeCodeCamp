var convert = require('./convert'),
    func = convert('includesFrom', require('../includes'));

func.placeholder = require('./placeholder');
module.exports = func;
