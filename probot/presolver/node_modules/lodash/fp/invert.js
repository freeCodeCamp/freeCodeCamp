var convert = require('./convert'),
    func = convert('invert', require('../invert'));

func.placeholder = require('./placeholder');
module.exports = func;
