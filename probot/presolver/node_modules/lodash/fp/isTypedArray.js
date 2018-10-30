var convert = require('./convert'),
    func = convert('isTypedArray', require('../isTypedArray'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
