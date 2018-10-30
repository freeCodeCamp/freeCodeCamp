'use strict';
module.exports = 'npm_config_username' in process.env ||
	'npm_package_name' in process.env ||
	'npm_config_heading' in process.env;
