'use strict';
const path = require('path');
const findUp = require('find-up');

const pkgDir = async cwd => {
	const filePath = await findUp('package.json', {cwd});
	return filePath && path.dirname(filePath);
};

module.exports = pkgDir;
// TODO: Remove this for the next major release
module.exports.default = pkgDir;

module.exports.sync = cwd => {
	const filePath = findUp.sync('package.json', {cwd});
	return filePath && path.dirname(filePath);
};
