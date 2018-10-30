var convert = require('./convert'),
    func = convert('findLastIndex', require('../findLastIndex'));

func.placeholder = require('./placeholder');
module.exports = func;
