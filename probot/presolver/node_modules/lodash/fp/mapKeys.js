var convert = require('./convert'),
    func = convert('mapKeys', require('../mapKeys'));

func.placeholder = require('./placeholder');
module.exports = func;
