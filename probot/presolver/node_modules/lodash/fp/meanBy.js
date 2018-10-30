var convert = require('./convert'),
    func = convert('meanBy', require('../meanBy'));

func.placeholder = require('./placeholder');
module.exports = func;
