var convert = require('./convert'),
    func = convert('isEqualWith', require('../isEqualWith'));

func.placeholder = require('./placeholder');
module.exports = func;
