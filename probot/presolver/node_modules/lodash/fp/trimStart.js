var convert = require('./convert'),
    func = convert('trimStart', require('../trimStart'));

func.placeholder = require('./placeholder');
module.exports = func;
