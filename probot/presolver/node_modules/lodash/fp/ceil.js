var convert = require('./convert'),
    func = convert('ceil', require('../ceil'));

func.placeholder = require('./placeholder');
module.exports = func;
