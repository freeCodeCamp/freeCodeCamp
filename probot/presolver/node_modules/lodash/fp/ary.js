var convert = require('./convert'),
    func = convert('ary', require('../ary'));

func.placeholder = require('./placeholder');
module.exports = func;
