'use strict';
const os = require('os');
const path = require('path');

const home = os.homedir();
const env = process.env;

exports.data = env.XDG_DATA_HOME ||
	(home ? path.join(home, '.local', 'share') : null);

exports.config = env.XDG_CONFIG_HOME ||
	(home ? path.join(home, '.config') : null);

exports.cache = env.XDG_CACHE_HOME || (home ? path.join(home, '.cache') : null);

exports.runtime = env.XDG_RUNTIME_DIR || null;

exports.dataDirs = (env.XDG_DATA_DIRS || '/usr/local/share/:/usr/share/').split(':');

if (exports.data) {
	exports.dataDirs.unshift(exports.data);
}

exports.configDirs = (env.XDG_CONFIG_DIRS || '/etc/xdg').split(':');

if (exports.config) {
	exports.configDirs.unshift(exports.config);
}
