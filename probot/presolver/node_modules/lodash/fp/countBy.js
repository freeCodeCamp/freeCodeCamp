var convert = require('./convert'),
    func = convert('countBy', require('../countBy'));

func.placeholder = require('./placeholder');
module.exports = func;
