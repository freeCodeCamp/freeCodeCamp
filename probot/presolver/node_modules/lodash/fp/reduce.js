var convert = require('./convert'),
    func = convert('reduce', require('../reduce'));

func.placeholder = require('./placeholder');
module.exports = func;
