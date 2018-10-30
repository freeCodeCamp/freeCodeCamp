var convert = require('./convert'),
    func = convert('isMatchWith', require('../isMatchWith'));

func.placeholder = require('./placeholder');
module.exports = func;
