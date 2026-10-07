import process from 'node:process';
import isWSL from 'is-wsl';
import termux from './lib/termux.js';
import linux from './lib/linux.js';
import macos from './lib/macos.js';
import windows from './lib/windows.js';

const platformLib = (() => {
	switch (process.platform) {
		case 'darwin': {
			return macos;
		}

		case 'win32': {
			return windows;
		}

		case 'android': {
			if (process.env.PREFIX !== '/data/data/com.termux/files/usr') {
				throw new Error('You need to install Termux for this module to work on Android: https://termux.com');
			}

			return termux;
		}

		default: {
			// `process.platform === 'linux'` for WSL.
			if (isWSL) {
				return windows;
			}

			return linux;
		}
	}
})();

const clipboard = {};

clipboard.write = async text => {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof text}`);
	}

	await platformLib.copy({input: text});
};

clipboard.read = async () => platformLib.paste({stripFinalNewline: false});

clipboard.writeSync = text => {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof text}`);
	}

	platformLib.copySync({input: text});
};

clipboard.readSync = () => platformLib.pasteSync({stripFinalNewline: false});

export default clipboard;
