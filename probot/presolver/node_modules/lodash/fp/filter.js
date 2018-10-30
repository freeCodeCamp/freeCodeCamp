var convert = require('./convert'),
    func = convert('filter', require('../filter'));

func.placeholder = require('./placeholder');
module.exports = func;
