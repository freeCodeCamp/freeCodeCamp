var convert = require('./convert'),
    func = convert('multiply', require('../multiply'));

func.placeholder = require('./placeholder');
module.exports = func;
