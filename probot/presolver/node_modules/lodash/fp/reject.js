var convert = require('./convert'),
    func = convert('reject', require('../reject'));

func.placeholder = require('./placeholder');
module.exports = func;
