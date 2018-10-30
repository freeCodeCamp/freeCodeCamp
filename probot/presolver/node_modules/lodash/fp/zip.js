var convert = require('./convert'),
    func = convert('zip', require('../zip'));

func.placeholder = require('./placeholder');
module.exports = func;
