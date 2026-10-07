'use strict';
const path = require('path');
const findUp = require('find-up');

module.exports = cwd => findUp('package.json', {cwd}).then(fp => fp ? path.dirname(fp) : null);

module.exports.sync = cwd => {
	const fp = findUp.sync('package.json', {cwd});
	return fp ? path.dirname(fp) : null;
};
