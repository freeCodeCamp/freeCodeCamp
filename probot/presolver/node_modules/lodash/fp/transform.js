var convert = require('./convert'),
    func = convert('transform', require('../transform'));

func.placeholder = require('./placeholder');
module.exports = func;
