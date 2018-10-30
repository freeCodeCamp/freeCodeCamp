var convert = require('./convert'),
    func = convert('hasIn', require('../hasIn'));

func.placeholder = require('./placeholder');
module.exports = func;
