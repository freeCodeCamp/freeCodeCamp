var convert = require('./convert'),
    func = convert('omit', require('../omit'));

func.placeholder = require('./placeholder');
module.exports = func;
