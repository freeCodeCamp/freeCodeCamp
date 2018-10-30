'use strict';

var customError = require('es5-ext/error/custom')
  , ee          = require('../');

module.exports = function (t, a) {
	var x, error = customError('Some error', 'ERROR_TEST'), emitted;

	x = ee();
	a.throws(function () { t.call(x, error); }, 'ERROR_TEST');
	x.on('error', function (err) { emitted = err; });
	t.call(x, error);
	a(emitted, error);
};
