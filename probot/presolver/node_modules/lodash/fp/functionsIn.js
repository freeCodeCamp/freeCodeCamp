var convert = require('./convert'),
    func = convert('functionsIn', require('../functionsIn'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
