var convert = require('./convert'),
    func = convert('add', require('../add'));

func.placeholder = require('./placeholder');
module.exports = func;
