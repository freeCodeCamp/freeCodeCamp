var convert = require('./convert'),
    func = convert('curryN', require('../curry'));

func.placeholder = require('./placeholder');
module.exports = func;
