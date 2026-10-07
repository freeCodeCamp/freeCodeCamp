import {execa, execaSync} from 'execa';

const handler = error => {
	if (error.code === 'ENOENT') {
		throw new Error('Couldn\'t find the termux-api scripts. You can install them with: apt install termux-api');
	}

	throw error;
};

const clipboard = {
	async copy(options) {
		try {
			await execa('termux-clipboard-set', options);
		} catch (error) {
			handler(error);
		}
	},
	async paste(options) {
		try {
			const {stdout} = await execa('termux-clipboard-get', options);
			return stdout;
		} catch (error) {
			handler(error);
		}
	},
	copySync(options) {
		try {
			execaSync('termux-clipboard-set', options);
		} catch (error) {
			handler(error);
		}
	},
	pasteSync(options) {
		try {
			return execaSync('termux-clipboard-get', options).stdout;
		} catch (error) {
			handler(error);
		}
	},
};

export default clipboard;
