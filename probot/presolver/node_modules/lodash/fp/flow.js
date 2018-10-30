var convert = require('./convert'),
    func = convert('flow', require('../flow'));

func.placeholder = require('./placeholder');
module.exports = func;
