var convert = require('./convert'),
    func = convert('fill', require('../fill'));

func.placeholder = require('./placeholder');
module.exports = func;
