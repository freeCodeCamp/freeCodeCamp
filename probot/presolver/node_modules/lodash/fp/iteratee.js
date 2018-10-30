var convert = require('./convert'),
    func = convert('iteratee', require('../iteratee'));

func.placeholder = require('./placeholder');
module.exports = func;
