'use strict';
const { readCAFileSync } = require('@pnpm/network.ca-file');
const fs = require('fs');
const path = require('path');
const {ConfigChain} = require('config-chain');
const envKeyToSetting = require('./envKeyToSetting');
const util = require('./util');

class Conf extends ConfigChain {
	// https://github.com/npm/cli/blob/latest/lib/config/core.js#L203-L217
	constructor(base, types) {
		super(base);
		this.root = base;
		this._parseField = util.parseField.bind(null, types || require('./types'));
	}

	// https://github.com/npm/cli/blob/latest/lib/config/core.js#L326-L338
	add(data, marker) {
		try {
			for (const [key, value] of Object.entries(data)) {
				const substKey = util.parseKey(key);
				if (substKey !== key) {
					delete data[key];
				}
				data[substKey] = this._parseField(value, substKey);
			}
		} catch (error) {
			throw error;
		}

		return super.add(data, marker);
	}

	// https://github.com/npm/cli/blob/latest/lib/config/core.js#L306-L319
	addFile(file, name) {
		name = name || file;

		const marker = {__source__: name};

		this.sources[name] = {path: file, type: 'ini'};
		this.push(marker);
		this._await();

		try {
			const contents = fs.readFileSync(file, 'utf8');
			this.addString(contents, file, 'ini', marker);
		} catch (error) {
			if (error.code === 'ENOENT') {
				this.add({}, marker);
			} else if (error.code !== 'EISDIR') {
				return `Issue while reading "${file}". ${error.message}`
			}
		}
	}

	// https://github.com/npm/cli/blob/latest/lib/config/core.js#L341-L357
	addEnv(env) {
		env = env || process.env;

		const conf = {};

		Object.keys(env)
			.filter(x => /^npm_config_/i.test(x))
			.forEach(x => {
				if (!env[x]) {
					return;
				}

				// PNPM patch.
				// BEGIN
				const key = envKeyToSetting(x.substr(11));
				const rawVal = env[x];

				conf[key] = deserializeEnvVal(key, rawVal);
				// END
			});

		return super.addEnv('', conf, 'env');
	}

	// https://github.com/npm/cli/blob/latest/lib/config/load-prefix.js
	loadPrefix() {
		const cli = this.list[0];

		Object.defineProperty(this, 'prefix', {
			enumerable: true,
			set: prefix => {
				const g = this.get('global');
				this[g ? 'globalPrefix' : 'localPrefix'] = prefix;
			},
			get: () => {
				const g = this.get('global');
				return g ? this.globalPrefix : this.localPrefix;
			}
		});

		Object.defineProperty(this, 'globalPrefix', {
			enumerable: true,
			set: prefix => {
				this.set('prefix', prefix);
			},
			get: () => {
				return path.resolve(this.get('prefix'));
			}
		});

		let p;

		Object.defineProperty(this, 'localPrefix', {
			enumerable: true,
			set: prefix => {
				p = prefix;
			},
			get: () => {
				return p;
			}
		});

		if (Object.prototype.hasOwnProperty.call(cli, 'prefix')) {
			p = path.resolve(cli.prefix);
		} else {
			try {
				const prefix = util.findPrefix(process.cwd());
				p = prefix;
			} catch (error) {
				throw error;
			}
		}

		return p;
	}

	// https://github.com/npm/cli/blob/latest/lib/config/load-cafile.js
	loadCAFile(file) {
		if (!file) {
			return;
		}

		const ca = readCAFileSync(file);
		if (ca) {
			this.set('ca', ca);
		}
	}

	// https://github.com/npm/cli/blob/latest/lib/config/set-user.js
	loadUser() {
		const defConf = this.root;

		if (this.get('global')) {
			return;
		}

		if (process.env.SUDO_UID) {
			defConf.user = Number(process.env.SUDO_UID);
			return;
		}

		const prefix = path.resolve(this.get('prefix'));

		try {
			const stats = fs.statSync(prefix);
			defConf.user = stats.uid;
		} catch (error) {
			if (error.code === 'ENOENT') {
				return;
			}

			throw error;
		}
	}
}

// PNPM patch.
// BEGIN
function deserializeEnvVal(envKey, envValue) {
	function deserializeList(envValue) {
		const npmConfigSep = '\n\n';
		if (envValue.indexOf(npmConfigSep)) {
			// Supports NPM config serialization format. See:
			// https://docs.npmjs.com/cli/v10/using-npm/config#ca
			// https://github.com/npm/cli/blob/v10.0.0/workspaces/config/lib/set-envs.js#L15
			return envValue.split(npmConfigSep);
		}
		return envValue.split(',');
	}

	switch (envKey) {
		case 'hoist-pattern':
		case 'public-hoist-pattern':
			return deserializeList(envValue);
	}
	return envValue;
}
// END

module.exports = Conf;
