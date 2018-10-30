var convert = require('./convert'),
    func = convert('round', require('../round'));

func.placeholder = require('./placeholder');
module.exports = func;
