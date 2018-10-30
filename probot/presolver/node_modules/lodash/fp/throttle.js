var convert = require('./convert'),
    func = convert('throttle', require('../throttle'));

func.placeholder = require('./placeholder');
module.exports = func;
