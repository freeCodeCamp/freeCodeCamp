'use strict';
const path = require('path');
const execa = require('execa');
const arch = require('arch');

// Binaries from: https://github.com/sindresorhus/win-clipboard
const windowBinaryPath = arch() === 'x64' ?
	path.join(__dirname, '../fallbacks/windows/clipboard_x86_64.exe') :
	path.join(__dirname, '../fallbacks/windows/clipboard_i686.exe');

module.exports = {
	copy: async options => execa(windowBinaryPath, ['--copy'], options),
	paste: async options => execa.stdout(windowBinaryPath, ['--paste'], options),
	copySync: options => execa.sync(windowBinaryPath, ['--copy'], options),
	pasteSync: options => execa.sync(windowBinaryPath, ['--paste'], options)
};
