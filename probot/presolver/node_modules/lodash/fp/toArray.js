var convert = require('./convert'),
    func = convert('toArray', require('../toArray'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
