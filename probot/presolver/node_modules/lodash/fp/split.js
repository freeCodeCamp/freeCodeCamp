var convert = require('./convert'),
    func = convert('split', require('../split'));

func.placeholder = require('./placeholder');
module.exports = func;
