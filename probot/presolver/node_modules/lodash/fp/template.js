var convert = require('./convert'),
    func = convert('template', require('../template'));

func.placeholder = require('./placeholder');
module.exports = func;
