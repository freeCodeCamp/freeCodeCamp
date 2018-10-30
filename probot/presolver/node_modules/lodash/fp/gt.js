var convert = require('./convert'),
    func = convert('gt', require('../gt'));

func.placeholder = require('./placeholder');
module.exports = func;
