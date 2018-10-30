var convert = require('./convert'),
    func = convert('debounce', require('../debounce'));

func.placeholder = require('./placeholder');
module.exports = func;
