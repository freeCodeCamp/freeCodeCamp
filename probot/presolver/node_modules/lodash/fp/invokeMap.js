var convert = require('./convert'),
    func = convert('invokeMap', require('../invokeMap'));

func.placeholder = require('./placeholder');
module.exports = func;
