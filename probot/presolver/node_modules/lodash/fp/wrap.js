var convert = require('./convert'),
    func = convert('wrap', require('../wrap'));

func.placeholder = require('./placeholder');
module.exports = func;
