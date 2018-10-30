var convert = require('./convert'),
    func = convert('isMatch', require('../isMatch'));

func.placeholder = require('./placeholder');
module.exports = func;
