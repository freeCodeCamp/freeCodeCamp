var convert = require('./convert'),
    func = convert('trimEnd', require('../trimEnd'));

func.placeholder = require('./placeholder');
module.exports = func;
