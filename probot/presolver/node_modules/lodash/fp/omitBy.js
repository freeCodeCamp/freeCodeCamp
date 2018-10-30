var convert = require('./convert'),
    func = convert('omitBy', require('../omitBy'));

func.placeholder = require('./placeholder');
module.exports = func;
