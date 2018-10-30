var convert = require('./convert'),
    func = convert('rangeStep', require('../range'));

func.placeholder = require('./placeholder');
module.exports = func;
