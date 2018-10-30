var convert = require('./convert'),
    func = convert('trim', require('../trim'));

func.placeholder = require('./placeholder');
module.exports = func;
