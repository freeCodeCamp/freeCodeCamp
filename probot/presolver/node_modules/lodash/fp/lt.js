var convert = require('./convert'),
    func = convert('lt', require('../lt'));

func.placeholder = require('./placeholder');
module.exports = func;
