var convert = require('./convert'),
    func = convert('defaults', require('../defaults'));

func.placeholder = require('./placeholder');
module.exports = func;
