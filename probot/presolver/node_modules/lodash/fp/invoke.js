var convert = require('./convert'),
    func = convert('invoke', require('../invoke'));

func.placeholder = require('./placeholder');
module.exports = func;
