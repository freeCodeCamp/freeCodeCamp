var convert = require('./convert'),
    func = convert('defaultsAll', require('../defaults'));

func.placeholder = require('./placeholder');
module.exports = func;
