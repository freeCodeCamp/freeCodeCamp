var convert = require('./convert'),
    func = convert('remove', require('../remove'));

func.placeholder = require('./placeholder');
module.exports = func;
