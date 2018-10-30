var convert = require('./convert'),
    func = convert('update', require('../update'));

func.placeholder = require('./placeholder');
module.exports = func;
