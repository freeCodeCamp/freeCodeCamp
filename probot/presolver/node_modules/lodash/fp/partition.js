var convert = require('./convert'),
    func = convert('partition', require('../partition'));

func.placeholder = require('./placeholder');
module.exports = func;
