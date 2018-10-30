var convert = require('./convert'),
    func = convert('includes', require('../includes'));

func.placeholder = require('./placeholder');
module.exports = func;
