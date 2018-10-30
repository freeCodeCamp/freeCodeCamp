var convert = require('./convert'),
    func = convert('mapValues', require('../mapValues'));

func.placeholder = require('./placeholder');
module.exports = func;
