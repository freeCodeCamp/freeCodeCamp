import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execa, execaSync} from 'execa';
import {is64bitSync} from 'is64bit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const binarySuffix = is64bitSync() ? 'x86_64' : 'i686';

// Binaries from: https://github.com/sindresorhus/win-clipboard
const windowBinaryPath = path.join(__dirname, `../fallbacks/windows/clipboard_${binarySuffix}.exe`);

const clipboard = {
	copy: async options => execa(windowBinaryPath, ['--copy'], options),
	async paste(options) {
		const {stdout} = await execa(windowBinaryPath, ['--paste'], options);
		return stdout;
	},
	copySync: options => execaSync(windowBinaryPath, ['--copy'], options),
	pasteSync: options => execaSync(windowBinaryPath, ['--paste'], options).stdout,
};

export default clipboard;
