var convert = require('./convert'),
    func = convert('uniqueId', require('../uniqueId'));

func.placeholder = require('./placeholder');
module.exports = func;
