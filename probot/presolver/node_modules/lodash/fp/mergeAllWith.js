var convert = require('./convert'),
    func = convert('mergeAllWith', require('../mergeWith'));

func.placeholder = require('./placeholder');
module.exports = func;
