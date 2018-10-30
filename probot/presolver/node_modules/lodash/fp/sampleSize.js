var convert = require('./convert'),
    func = convert('sampleSize', require('../sampleSize'));

func.placeholder = require('./placeholder');
module.exports = func;
