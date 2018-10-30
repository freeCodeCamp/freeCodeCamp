var convert = require('./convert'),
    func = convert('orderBy', require('../orderBy'));

func.placeholder = require('./placeholder');
module.exports = func;
