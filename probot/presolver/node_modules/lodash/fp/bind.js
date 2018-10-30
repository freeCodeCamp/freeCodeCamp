var convert = require('./convert'),
    func = convert('bind', require('../bind'));

func.placeholder = require('./placeholder');
module.exports = func;
