var convert = require('./convert'),
    func = convert('isArray', require('../isArray'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
