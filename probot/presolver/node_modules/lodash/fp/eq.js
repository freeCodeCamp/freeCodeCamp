var convert = require('./convert'),
    func = convert('eq', require('../eq'));

func.placeholder = require('./placeholder');
module.exports = func;
