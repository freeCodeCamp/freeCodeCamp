var convert = require('./convert'),
    func = convert('findIndex', require('../findIndex'));

func.placeholder = require('./placeholder');
module.exports = func;
