var convert = require('./convert'),
    func = convert('assignWith', require('../assignWith'));

func.placeholder = require('./placeholder');
module.exports = func;
