var safe = require('../');
var regex = process.argv.slice(2).join(' ');
console.log(safe(regex));
