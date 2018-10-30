var convert = require('./convert'),
    func = convert('curryRight', require('../curryRight'));

func.placeholder = require('./placeholder');
module.exports = func;
