'use strict';

var assign = require('./helpers/assign');

var ES5 = require('./es5');
var ES2015 = require('./es2015');
var ES2016 = require('./es2016');
var ES2017 = require('./es2017');
var ES2018 = require('./es2018');
var ES2019 = require('./es2019');
var ES2020 = require('./es2020');
var ES2021 = require('./es2021');
var ES2022 = require('./es2022');
var ES2023 = require('./es2023');
var ES2024 = require('./es2024');
var ES2025 = require('./es2025');

var ES = {
	ES5: ES5,
	ES6: ES2015,
	ES2015: ES2015,
	ES7: ES2016,
	ES2016: ES2016,
	ES2017: ES2017,
	ES2018: ES2018,
	ES2019: ES2019,
	ES2020: ES2020,
	ES2021: ES2021,
	ES2022: ES2022,
	ES2023: ES2023,
	ES2024: ES2024,
	ES2025: ES2025
};
assign(ES, ES5);
delete ES.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
assign(ES, ES2015);

module.exports = ES;
