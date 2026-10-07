'use strict';
const path = require('path');
const Conf = require('./lib/conf');
const _defaults = require('./lib/defaults');

// https://github.com/npm/cli/blob/latest/lib/config/core.js#L101-L200
module.exports = (opts, types, defaults) => {
	const conf = new Conf(Object.assign({}, _defaults.defaults, defaults), types);

	conf.add(Object.assign({}, opts), 'cli');
	const warnings = [];
	let failedToLoadBuiltInConfig = false;

	if (require.resolve.paths) {
		const paths = require.resolve.paths('npm');
		// Assume that last path in resolve paths is builtin modules directory
		let npmPath;
		try {
			npmPath = require.resolve('npm', {paths: paths.slice(-1)});
		} catch (error) {
			// Error will be thrown if module cannot be found.
			// Update the flag while loading builtin config failed.
			failedToLoadBuiltInConfig = true;
		}

		if (npmPath) {
			/**
			 *  According to https://github.com/npm/cli/blob/86f5bdb91f7a5971953a5171d32d6eeda6a2e972/lib/npm.js#L258
			 *  and https://github.com/npm/cli/blob/86f5bdb91f7a5971953a5171d32d6eeda6a2e972/lib/config/core.js#L92
			 */
			warnings.push(conf.addFile(path.resolve(path.dirname(npmPath), '..', 'npmrc'), 'builtin'));
		}
	}

	conf.addEnv();
	conf.loadPrefix();

	const projectConf = path.resolve(conf.localPrefix, '.npmrc');
	const userConf = conf.get('userconfig');

	if (!conf.get('global') && projectConf !== userConf) {
		warnings.push(conf.addFile(projectConf, 'project'));
	} else {
		conf.add({}, 'project');
	}

	// TODO: cover with tests that configs from workspace .npmrc have bigger priority
	// than the ones in userconfig
	if (conf.get('workspace-prefix') && conf.get('workspace-prefix') !== projectConf) {
		const workspaceConf = path.resolve(conf.get('workspace-prefix'), '.npmrc');
		warnings.push(conf.addFile(workspaceConf, 'workspace'));
	}

	warnings.push(conf.addFile(conf.get('userconfig'), 'user'));

	if (conf.get('prefix')) {
		const etc = path.resolve(conf.get('prefix'), 'etc');
		conf.root.globalconfig = path.resolve(etc, 'npmrc');
		conf.root.globalignorefile = path.resolve(etc, 'npmignore');
	}

	warnings.push(conf.addFile(conf.get('globalconfig'), 'global'));
	conf.loadUser();

	const caFile = conf.get('cafile');

	if (caFile) {
		conf.loadCAFile(caFile);
	}

	return {
		config: conf,
		warnings: warnings.filter(Boolean),
		failedToLoadBuiltInConfig,
	};
};

Object.defineProperty(module.exports, 'defaults', {
	get() {
		return _defaults.defaults;
	},
	enumerable: true
})
