var convert = require('./convert'),
    func = convert('intersectionWith', require('../intersectionWith'));

func.placeholder = require('./placeholder');
module.exports = func;
