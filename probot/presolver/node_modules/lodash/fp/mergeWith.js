var convert = require('./convert'),
    func = convert('mergeWith', require('../mergeWith'));

func.placeholder = require('./placeholder');
module.exports = func;
