var convert = require('./convert'),
    func = convert('assign', require('../assign'));

func.placeholder = require('./placeholder');
module.exports = func;
