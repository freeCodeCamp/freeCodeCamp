var convert = require('./convert'),
    func = convert('assignAll', require('../assign'));

func.placeholder = require('./placeholder');
module.exports = func;
