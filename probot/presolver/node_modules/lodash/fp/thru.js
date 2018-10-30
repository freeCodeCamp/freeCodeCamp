var convert = require('./convert'),
    func = convert('thru', require('../thru'));

func.placeholder = require('./placeholder');
module.exports = func;
