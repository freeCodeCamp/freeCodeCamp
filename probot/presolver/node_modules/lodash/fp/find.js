var convert = require('./convert'),
    func = convert('find', require('../find'));

func.placeholder = require('./placeholder');
module.exports = func;
