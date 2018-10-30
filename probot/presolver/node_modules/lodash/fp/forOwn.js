var convert = require('./convert'),
    func = convert('forOwn', require('../forOwn'));

func.placeholder = require('./placeholder');
module.exports = func;
