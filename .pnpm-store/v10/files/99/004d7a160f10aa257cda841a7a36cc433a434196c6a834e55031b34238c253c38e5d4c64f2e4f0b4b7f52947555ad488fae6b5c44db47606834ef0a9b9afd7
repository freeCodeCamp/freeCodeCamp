import process from 'node:process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { a as readPackageUpSync } from './dependencies.js';
import { joinFlagKeys, decamelizeFlagKey } from './utils.js';

const validateOptions = options => {
	const invalidOptionFilters = {
		flags: {
			keyContainsDashes: {
				filter: ([flagKey]) => flagKey.includes('-') && flagKey !== '--',
				message: flagKeys => `Flag keys may not contain '-'. Invalid flags: ${joinFlagKeys(flagKeys, '')}`,
			},
			aliasIsSet: {
				filter: ([, flag]) => Object.hasOwn(flag, 'alias'),
				message: flagKeys => `The option \`alias\` has been renamed to \`shortFlag\`. The following flags need to be updated: ${joinFlagKeys(flagKeys)}`,
			},
			choicesNotAnArray: {
				filter: ([, flag]) => Object.hasOwn(flag, 'choices') && !Array.isArray(flag.choices),
				message: flagKeys => `The option \`choices\` must be an array. Invalid flags: ${joinFlagKeys(flagKeys)}`,
			},
			choicesNotMatchFlagType: {
				filter: ([, flag]) => flag.type && Array.isArray(flag.choices) && flag.choices.some(choice => typeof choice !== flag.type),
				message(flagKeys) {
					const flagKeysAndTypes = flagKeys.map(flagKey => `(\`${decamelizeFlagKey(flagKey)}\`, type: '${options.flags[flagKey].type}')`);
					return `Each value of the option \`choices\` must be of the same type as its flag. Invalid flags: ${flagKeysAndTypes.join(', ')}`;
				},
			},
			defaultNotInChoices: {
				filter: ([, flag]) => flag.default && Array.isArray(flag.choices) && ![flag.default].flat().every(value => flag.choices.includes(value)),
				message: flagKeys => `Each value of the option \`default\` must exist within the option \`choices\`. Invalid flags: ${joinFlagKeys(flagKeys)}`,
			},
		},
	};

	const errorMessages = [];

	for (const [optionKey, filters] of Object.entries(invalidOptionFilters)) {
		const optionEntries = Object.entries(options[optionKey]);

		for (const {filter, message} of Object.values(filters)) {
			const invalidOptions = optionEntries.filter(option => filter(option));
			const invalidOptionKeys = invalidOptions.map(([key]) => key);

			if (invalidOptions.length > 0) {
				errorMessages.push(message(invalidOptionKeys));
			}
		}
	}

	if (errorMessages.length > 0) {
		throw new Error(errorMessages.join('\n'));
	}
};

const buildOptions = (helpText, options) => {
	if (typeof helpText !== 'string') {
		options = helpText;
		helpText = '';
	}

	if (!options.importMeta?.url) {
		throw new TypeError('The `importMeta` option is required. Its value must be `import.meta`.');
	}

	const foundPackage = readPackageUpSync({
		cwd: dirname(fileURLToPath(options.importMeta.url)),
		normalize: false,
	});

	const parsedOptions = {
		pkg: foundPackage ? foundPackage.packageJson : {},
		argv: process.argv.slice(2),
		flags: {},
		inferType: false,
		input: 'string',
		help: helpText,
		autoHelp: true,
		autoVersion: true,
		booleanDefault: false,
		allowUnknownFlags: true,
		allowParentFlags: true,
		helpIndent: 2,
		...options,
	};

	validateOptions(parsedOptions);

	return parsedOptions;
};

export { buildOptions };
