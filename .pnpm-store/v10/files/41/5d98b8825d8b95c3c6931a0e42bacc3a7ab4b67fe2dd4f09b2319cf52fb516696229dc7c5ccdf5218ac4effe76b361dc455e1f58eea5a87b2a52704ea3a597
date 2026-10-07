'use strict';
const execa = require('execa');

const env = {
	...process.env,
	LC_CTYPE: 'UTF-8'
};

module.exports = {
	copy: async options => execa('pbcopy', {...options, env}),
	paste: async options => execa.stdout('pbpaste', {...options, env}),
	copySync: options => execa.sync('pbcopy', {...options, env}),
	pasteSync: options => execa.sync('pbpaste', {...options, env})
};
