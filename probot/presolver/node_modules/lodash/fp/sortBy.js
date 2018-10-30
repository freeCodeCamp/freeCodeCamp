var convert = require('./convert'),
    func = convert('sortBy', require('../sortBy'));

func.placeholder = require('./placeholder');
module.exports = func;
