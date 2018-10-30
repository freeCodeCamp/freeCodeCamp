var convert = require('./convert'),
    func = convert('spreadFrom', require('../spread'));

func.placeholder = require('./placeholder');
module.exports = func;
