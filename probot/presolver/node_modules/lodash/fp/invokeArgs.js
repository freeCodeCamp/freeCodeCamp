var convert = require('./convert'),
    func = convert('invokeArgs', require('../invoke'));

func.placeholder = require('./placeholder');
module.exports = func;
