var convert = require('./convert'),
    func = convert('dropWhile', require('../dropWhile'));

func.placeholder = require('./placeholder');
module.exports = func;
