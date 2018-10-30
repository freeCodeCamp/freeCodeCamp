var convert = require('./convert'),
    func = convert('lastIndexOf', require('../lastIndexOf'));

func.placeholder = require('./placeholder');
module.exports = func;
