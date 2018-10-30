'use strict';

var assign = require('./helpers/assign');

var ES5 = require('./es5');
var ES2015 = require('./es2015');
var ES2016 = require('./es2016');
var ES2017 = require('./es2017');

var ES = {
	ES5: ES5,
	ES6: ES2015,
	ES2015: ES2015,
	ES7: ES2016,
	ES2016: ES2016,
	ES2017: ES2017
};
assign(ES, ES5);
delete ES.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
assign(ES, ES2015);

module.exports = ES;
