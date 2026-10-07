import process from 'node:process';
import os from 'node:os';
import fs from 'node:fs';
import isInsideContainer from 'is-inside-container';

const isWsl = () => {
	if (process.platform !== 'linux') {
		return false;
	}

	if (os.release().toLowerCase().includes('microsoft')) {
		if (isInsideContainer()) {
			return false;
		}

		return true;
	}

	try {
		return fs.readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft')
			? !isInsideContainer() : false;
	} catch {
		return false;
	}
};

export default process.env.__IS_WSL_TEST__ ? isWsl : isWsl();
