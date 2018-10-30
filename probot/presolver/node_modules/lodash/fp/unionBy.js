var convert = require('./convert'),
    func = convert('unionBy', require('../unionBy'));

func.placeholder = require('./placeholder');
module.exports = func;
