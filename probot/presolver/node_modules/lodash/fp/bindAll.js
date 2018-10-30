var convert = require('./convert'),
    func = convert('bindAll', require('../bindAll'));

func.placeholder = require('./placeholder');
module.exports = func;
