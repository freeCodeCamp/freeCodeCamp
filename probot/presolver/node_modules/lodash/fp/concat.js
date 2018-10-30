var convert = require('./convert'),
    func = convert('concat', require('../concat'));

func.placeholder = require('./placeholder');
module.exports = func;
