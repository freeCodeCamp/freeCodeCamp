var convert = require('./convert'),
    func = convert('tap', require('../tap'));

func.placeholder = require('./placeholder');
module.exports = func;
