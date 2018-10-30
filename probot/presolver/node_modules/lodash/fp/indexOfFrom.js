var convert = require('./convert'),
    func = convert('indexOfFrom', require('../indexOf'));

func.placeholder = require('./placeholder');
module.exports = func;
