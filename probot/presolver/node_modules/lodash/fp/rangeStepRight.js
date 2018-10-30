var convert = require('./convert'),
    func = convert('rangeStepRight', require('../rangeRight'));

func.placeholder = require('./placeholder');
module.exports = func;
