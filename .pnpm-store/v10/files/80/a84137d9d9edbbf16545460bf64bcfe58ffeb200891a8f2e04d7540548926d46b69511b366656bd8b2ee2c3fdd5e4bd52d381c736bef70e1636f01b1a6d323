import { EXIT_CODE_INVALID_CONFIG, EXIT_CODE_INVALID_USAGE } from '../constants.mjs';

export class ConfigurationError extends Error {
	name = 'ConfigurationError';

	code = EXIT_CODE_INVALID_CONFIG;

	/**
	 * @param {string} message
	 */
	constructor(message) {
		super(message);
	}
}

export class AllFilesIgnoredError extends Error {
	name = 'AllFilesIgnoredError';

	constructor() {
		super(
			'All input files were ignored because of the ignore pattern. Either change your input, ignore pattern or use "--allow-empty-input" to allow no inputs',
		);
	}
}

export class NoFilesFoundError extends Error {
	name = 'NoFilesFoundError';

	/**
	 * @param {string|string[]} fileList
	 */
	constructor(fileList) {
		super();

		if (typeof fileList === 'string') {
			fileList = [fileList];
		}

		const pattern = fileList.filter((i) => !i.startsWith('!')).join(', ');

		this.message = `No files matching the pattern "${pattern}" were found.`;
	}
}

export class SuppressionFileNotFoundError extends Error {
	name = 'SuppressionFileNotFoundError';

	code = EXIT_CODE_INVALID_USAGE;

	constructor() {
		super(
			'The suppressions file does not exist. Please run the command with "--suppress" or "--suppress=<rule>" to create it.',
		);
	}
}
