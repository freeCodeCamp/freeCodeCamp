"use strict";

module.exports = function (t, a) {
	a(t.call(new Date(2001, 0, 1)), 31, "January");
	a(t.call(new Date(2001, 1, 1)), 28, "February");
	a(t.call(new Date(2000, 1, 1)), 29, "February (leap)");
	a(t.call(new Date(2001, 2, 1)), 31, "March");
	a(t.call(new Date(2001, 3, 1)), 30, "April");
	a(t.call(new Date(2001, 4, 1)), 31, "May");
	a(t.call(new Date(2001, 5, 1)), 30, "June");
	a(t.call(new Date(2001, 6, 1)), 31, "July");
	a(t.call(new Date(2001, 7, 1)), 31, "August");
	a(t.call(new Date(2001, 8, 1)), 30, "September");
	a(t.call(new Date(2001, 9, 1)), 31, "October");
	a(t.call(new Date(2001, 10, 1)), 30, "November");
	a(t.call(new Date(2001, 11, 1)), 31, "December");
};
