var convert = require('./convert'),
    func = convert('padCharsEnd', require('../padEnd'));

func.placeholder = require('./placeholder');
module.exports = func;
