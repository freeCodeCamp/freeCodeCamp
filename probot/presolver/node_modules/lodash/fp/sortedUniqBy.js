var convert = require('./convert'),
    func = convert('sortedUniqBy', require('../sortedUniqBy'));

func.placeholder = require('./placeholder');
module.exports = func;
