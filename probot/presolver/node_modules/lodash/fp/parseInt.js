var convert = require('./convert'),
    func = convert('parseInt', require('../parseInt'));

func.placeholder = require('./placeholder');
module.exports = func;
