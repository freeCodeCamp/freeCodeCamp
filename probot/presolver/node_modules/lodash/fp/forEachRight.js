var convert = require('./convert'),
    func = convert('forEachRight', require('../forEachRight'));

func.placeholder = require('./placeholder');
module.exports = func;
