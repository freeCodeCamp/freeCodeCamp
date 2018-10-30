var convert = require('./convert'),
    func = convert('reverse', require('../reverse'));

func.placeholder = require('./placeholder');
module.exports = func;
