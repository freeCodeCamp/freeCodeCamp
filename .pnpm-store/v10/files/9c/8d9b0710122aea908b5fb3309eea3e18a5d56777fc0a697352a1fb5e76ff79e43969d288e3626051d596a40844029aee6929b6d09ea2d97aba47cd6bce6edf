import { d as decamelizeKeys, b as constructParserOptions } from './dependencies.js';

const buildParserFlags = ({flags, booleanDefault}) => {
	const parserFlags = {};

	for (const [flagKey, flagValue] of Object.entries(flags)) {
		const flag = {...flagValue};

		// `minimist-options` expects `flag.alias`
		if (flag.shortFlag) {
			flag.alias = flag.shortFlag;
			delete flag.shortFlag;
		}

		if (
			booleanDefault !== undefined
				&& flag.type === 'boolean'
				&& !Object.hasOwn(flag, 'default')
		) {
			flag.default = flag.isMultiple ? [booleanDefault] : booleanDefault;
		}

		if (flag.isMultiple) {
			flag.type = flag.type ? `${flag.type}-array` : 'array';
			flag.default = flag.default ?? [];
			delete flag.isMultiple;
		}

		if (Array.isArray(flag.aliases)) {
			if (flag.alias) {
				flag.aliases.push(flag.alias);
			}

			flag.alias = flag.aliases;
			delete flag.aliases;
		}

		parserFlags[flagKey] = flag;
	}

	return parserFlags;
};

const buildParserOptions = options => {
	let parserOptions = buildParserFlags(options);
	parserOptions.arguments = options.input;

	parserOptions = decamelizeKeys(parserOptions, {separator: '-', exclude: ['stopEarly', '--']});

	if (options.inferType) {
		delete parserOptions.arguments;
	}

	// Add --help and --version to known flags if autoHelp or autoVersion are set
	if (!options.allowUnknownFlags) {
		if (options.autoHelp && !parserOptions.help) {
			parserOptions.help = {type: 'boolean'};
		}

		if (options.autoVersion && !parserOptions.version) {
			parserOptions.version = {type: 'boolean'};
		}
	}

	parserOptions = constructParserOptions(parserOptions);

	parserOptions.configuration = {
		...parserOptions.configuration,
		'greedy-arrays': false,
	};

	if (parserOptions['--']) {
		parserOptions.configuration['populate--'] = true;
	}

	if (!options.allowUnknownFlags) {
		// Collect unknown options in `argv._` to be checked later.
		parserOptions.configuration['unknown-options-as-args'] = true;
	}

	return parserOptions;
};

export { buildParserOptions };
