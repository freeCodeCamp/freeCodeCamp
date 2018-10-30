var convert = require('./convert'),
    func = convert('takeRightWhile', require('../takeRightWhile'));

func.placeholder = require('./placeholder');
module.exports = func;
