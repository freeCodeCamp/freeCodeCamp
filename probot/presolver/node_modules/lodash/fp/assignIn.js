var convert = require('./convert'),
    func = convert('assignIn', require('../assignIn'));

func.placeholder = require('./placeholder');
module.exports = func;
