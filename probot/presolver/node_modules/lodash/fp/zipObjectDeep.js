var convert = require('./convert'),
    func = convert('zipObjectDeep', require('../zipObjectDeep'));

func.placeholder = require('./placeholder');
module.exports = func;
