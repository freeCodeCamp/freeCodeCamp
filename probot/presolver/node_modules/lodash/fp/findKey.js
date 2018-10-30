var convert = require('./convert'),
    func = convert('findKey', require('../findKey'));

func.placeholder = require('./placeholder');
module.exports = func;
