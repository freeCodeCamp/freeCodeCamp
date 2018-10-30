var convert = require('./convert'),
    func = convert('every', require('../every'));

func.placeholder = require('./placeholder');
module.exports = func;
