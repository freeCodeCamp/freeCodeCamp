var convert = require('./convert'),
    func = convert('delay', require('../delay'));

func.placeholder = require('./placeholder');
module.exports = func;
