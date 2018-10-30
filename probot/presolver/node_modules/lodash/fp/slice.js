var convert = require('./convert'),
    func = convert('slice', require('../slice'));

func.placeholder = require('./placeholder');
module.exports = func;
