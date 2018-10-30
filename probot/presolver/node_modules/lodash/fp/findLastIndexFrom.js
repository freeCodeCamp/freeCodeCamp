var convert = require('./convert'),
    func = convert('findLastIndexFrom', require('../findLastIndex'));

func.placeholder = require('./placeholder');
module.exports = func;
