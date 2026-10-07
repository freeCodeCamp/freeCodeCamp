'use strict';
const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const generate = require('babel-generator').default;
const traverse = require('babel-traverse').default;

const INDENT_REGEXP = /^((?:  )+)/gmu;
/** @param {string} match */
const INDENT_REPLACER = match => {
	return '\t'.repeat(match.length >>> 1);
};

/** @param {string} body */
const defaultsTemplate = body => `\
// Generated with \`lib/make.js\`
'use strict';
const os = require('os');
const path = require('path');

const temp = os.tmpdir();
const uidOrPid = process.getuid ? process.getuid() : process.pid;
const hasUnicode = () => true;
const isWindows = process.platform === 'win32';

const osenv = {
	editor: () => process.env.EDITOR || process.env.VISUAL || (isWindows ? 'notepad.exe' : 'vi'),
	shell: () => isWindows ? (process.env.COMSPEC || 'cmd.exe') : (process.env.SHELL || '/bin/bash')
};

const umask = {
	fromString: () => process.umask()
};

let home = os.homedir();

if (home) {
	process.env.HOME = home;
} else {
	home = path.resolve(temp, 'npm-' + uidOrPid);
}

const cacheExtra = process.platform === 'win32' ? 'npm-cache' : '.npm';
const cacheRoot = process.platform === 'win32' ? process.env.APPDATA : home;
const cache = path.resolve(cacheRoot, cacheExtra);

let defaults;
let globalPrefix;

${body.replace(INDENT_REGEXP, INDENT_REPLACER).replace("'node-version': process.version,", '// We remove node-version to fix the issue described here: https://github.com/pnpm/pnpm/issues/4203#issuecomment-1133872769')};
`;

/** @param {string} body */
const typesTemplate = body => `\
// Generated with \`lib/make.js\`
'use strict';
const path = require('path');
const Stream = require('stream').Stream;
const url = require('url');

const Umask = () => {};
const getLocalAddresses = () => [];
const semver = () => {};

${body.replace(INDENT_REGEXP, INDENT_REPLACER)};
`;

const defaults = require.resolve('npm/lib/config/defaults');
const ast = babylon.parse(fs.readFileSync(defaults, 'utf8'));

const isDefaults = node =>
	node.callee.type === 'MemberExpression' &&
	node.callee.object.name === 'Object' &&
	node.callee.property.name === 'defineProperty' &&
	node.arguments.some(x => x.name === 'exports');

const isTypes = node =>
	node.type === 'MemberExpression' &&
	node.object.name === 'exports' &&
	node.property.name === 'types';

let defs;
let types;

traverse(ast, {
	CallExpression(path) {
		if (isDefaults(path.node)) {
			defs = path.node;
		}
	},
	AssignmentExpression(path) {
		if (path.node.left && isTypes(path.node.left)) {
			types = path.node;
		}
	}
});

fs.writeFileSync(path.join(__dirname, 'defaults.js'), defaultsTemplate(generate(defs).code));
fs.writeFileSync(path.join(__dirname, 'types.js'), typesTemplate(generate(types).code));
