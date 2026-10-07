declare const xdgBasedir: {
	/**
	Directory for user-specific data files.

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.data;
	//=> '/home/sindresorhus/.local/share'
	```
	*/
	readonly data?: string;

	/**
	Directory for user-specific configuration files.

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.config;
	//=> '/home/sindresorhus/.config'
	```
	*/
	readonly config?: string;

	/**
	Directory for user-specific non-essential data files.

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.cache;
	//=> '/home/sindresorhus/.cache'
	```
	*/
	readonly cache?: string;

	/**
	Directory for user-specific non-essential runtime files and other file objects (such as sockets, named pipes, etc).

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.runtime;
	//=> '/run/user/sindresorhus'
	```
	*/
	readonly runtime?: string;

	/**
	Preference-ordered array of base directories to search for data files in addition to `.data`.

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.dataDirs
	//=> ['/home/sindresorhus/.local/share', '/usr/local/share/', '/usr/share/']
	```
	*/
	readonly dataDirs: readonly string[];

	/**
	Preference-ordered array of base directories to search for configuration files in addition to `.config`.

	@example
	```js
	import xdgBasedir = require('xdg-basedir');

	xdgBasedir.configDirs;
	//=> ['/home/sindresorhus/.config', '/etc/xdg']
	```
	*/
	readonly configDirs: readonly string[];
};

export = xdgBasedir;
