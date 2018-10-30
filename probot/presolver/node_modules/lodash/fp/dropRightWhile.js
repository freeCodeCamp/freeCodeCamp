var convert = require('./convert'),
    func = convert('dropRightWhile', require('../dropRightWhile'));

func.placeholder = require('./placeholder');
module.exports = func;
