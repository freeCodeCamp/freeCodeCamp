var convert = require('./convert'),
    func = convert('reduceRight', require('../reduceRight'));

func.placeholder = require('./placeholder');
module.exports = func;
