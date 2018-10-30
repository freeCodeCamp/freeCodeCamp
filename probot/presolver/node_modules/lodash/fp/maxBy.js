var convert = require('./convert'),
    func = convert('maxBy', require('../maxBy'));

func.placeholder = require('./placeholder');
module.exports = func;
