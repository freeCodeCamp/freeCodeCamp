"use strict";

module.exports = function (t, a) {
	a.deep(t({ 1: 1, 2: 2, 3: 3, 4: 4 },
		function (value) {
 return Boolean(value % 2);
}), { 1: 1, 3: 3 });
};
