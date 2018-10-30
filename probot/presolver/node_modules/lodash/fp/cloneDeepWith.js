var convert = require('./convert'),
    func = convert('cloneDeepWith', require('../cloneDeepWith'));

func.placeholder = require('./placeholder');
module.exports = func;
