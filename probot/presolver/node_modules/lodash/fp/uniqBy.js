var convert = require('./convert'),
    func = convert('uniqBy', require('../uniqBy'));

func.placeholder = require('./placeholder');
module.exports = func;
