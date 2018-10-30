var convert = require('./convert'),
    func = convert('findLastKey', require('../findLastKey'));

func.placeholder = require('./placeholder');
module.exports = func;
