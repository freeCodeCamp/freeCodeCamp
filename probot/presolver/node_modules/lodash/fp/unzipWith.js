var convert = require('./convert'),
    func = convert('unzipWith', require('../unzipWith'));

func.placeholder = require('./placeholder');
module.exports = func;
