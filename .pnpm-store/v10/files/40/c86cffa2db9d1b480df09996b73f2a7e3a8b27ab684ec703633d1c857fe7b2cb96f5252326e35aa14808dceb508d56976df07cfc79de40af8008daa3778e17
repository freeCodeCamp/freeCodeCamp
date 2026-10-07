'use strict';

var defaultEncoding;
/* istanbul ignore next */
if (global.process && global.process.browser) {
	defaultEncoding = 'utf-8';
} else if (global.process && global.process.version) {
	var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10);

	defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary';
} else {
	defaultEncoding = 'utf-8';
}
module.exports = defaultEncoding;
