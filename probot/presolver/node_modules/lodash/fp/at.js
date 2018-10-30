var convert = require('./convert'),
    func = convert('at', require('../at'));

func.placeholder = require('./placeholder');
module.exports = func;
