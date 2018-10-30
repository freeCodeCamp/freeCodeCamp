var convert = require('./convert'),
    func = convert('lastIndexOfFrom', require('../lastIndexOf'));

func.placeholder = require('./placeholder');
module.exports = func;
