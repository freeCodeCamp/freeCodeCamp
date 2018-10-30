var convert = require('./convert'),
    func = convert('findFrom', require('../find'));

func.placeholder = require('./placeholder');
module.exports = func;
