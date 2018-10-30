var convert = require('./convert'),
    func = convert('sortedLastIndexBy', require('../sortedLastIndexBy'));

func.placeholder = require('./placeholder');
module.exports = func;
