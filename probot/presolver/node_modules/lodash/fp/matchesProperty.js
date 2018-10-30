var convert = require('./convert'),
    func = convert('matchesProperty', require('../matchesProperty'));

func.placeholder = require('./placeholder');
module.exports = func;
