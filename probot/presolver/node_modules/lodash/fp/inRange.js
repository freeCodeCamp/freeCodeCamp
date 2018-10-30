var convert = require('./convert'),
    func = convert('inRange', require('../inRange'));

func.placeholder = require('./placeholder');
module.exports = func;
