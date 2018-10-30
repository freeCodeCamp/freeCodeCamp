var convert = require('./convert'),
    func = convert('mixin', require('../mixin'));

func.placeholder = require('./placeholder');
module.exports = func;
