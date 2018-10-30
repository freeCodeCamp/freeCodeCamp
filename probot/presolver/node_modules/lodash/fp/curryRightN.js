var convert = require('./convert'),
    func = convert('curryRightN', require('../curryRight'));

func.placeholder = require('./placeholder');
module.exports = func;
