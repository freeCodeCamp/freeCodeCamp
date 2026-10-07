import process from 'node:process';
import { decamelizeFlagKey } from './utils.js';

const validateFlags = (flags, options) => {
	for (const [flagKey, flagValue] of Object.entries(options.flags)) {
		if (flagKey !== '--' && !flagValue.isMultiple && Array.isArray(flags[flagKey])) {
			throw new Error(`The flag --${flagKey} can only be set once.`);
		}
	}
};

const validateChoicesByFlag = (flagKey, flagValue, receivedInput) => {
	const {choices, isRequired} = flagValue;

	if (!choices) {
		return;
	}

	const valueMustBeOneOf = `Value must be one of: [\`${choices.join('`, `')}\`]`;

	if (!receivedInput) {
		if (isRequired) {
			return `Flag \`${decamelizeFlagKey(flagKey)}\` has no value. ${valueMustBeOneOf}`;
		}

		return;
	}

	if (Array.isArray(receivedInput)) {
		const unknownValues = receivedInput.filter(index => !choices.includes(index));

		if (unknownValues.length > 0) {
			const valuesText = unknownValues.length > 1 ? 'values' : 'value';

			return `Unknown ${valuesText} for flag \`${decamelizeFlagKey(flagKey)}\`: \`${unknownValues.join('`, `')}\`. ${valueMustBeOneOf}`;
		}
	} else if (!choices.includes(receivedInput)) {
		return `Unknown value for flag \`${decamelizeFlagKey(flagKey)}\`: \`${receivedInput}\`. ${valueMustBeOneOf}`;
	}
};

const validateChoices = (flags, receivedFlags) => {
	const errors = [];

	for (const [flagKey, flagValue] of Object.entries(flags)) {
		const receivedInput = receivedFlags[flagKey];
		const errorMessage = validateChoicesByFlag(flagKey, flagValue, receivedInput);

		if (errorMessage) {
			errors.push(errorMessage);
		}
	}

	if (errors.length > 0) {
		throw new Error(`${errors.join('\n')}`);
	}
};

const validate = (flags, options) => {
	validateFlags(flags, options);
	validateChoices(options.flags, flags);
};

const reportUnknownFlags = unknownFlags => {
	console.error([
		`Unknown flag${unknownFlags.length > 1 ? 's' : ''}`,
		...unknownFlags,
	].join('\n'));
};

const checkUnknownFlags = input => {
	const unknownFlags = input.filter(item => typeof item === 'string' && item.startsWith('-'));
	if (unknownFlags.length > 0) {
		reportUnknownFlags(unknownFlags);
		process.exit(2);
	}
};

const isFlagMissing = (flagName, definedFlags, receivedFlags, input) => {
	const flag = definedFlags[flagName];
	let isFlagRequired = true;

	if (typeof flag.isRequired === 'function') {
		isFlagRequired = flag.isRequired(receivedFlags, input);
		if (typeof isFlagRequired !== 'boolean') {
			throw new TypeError(`Return value for isRequired callback should be of type boolean, but ${typeof isFlagRequired} was returned.`);
		}
	}

	if (receivedFlags[flagName] === undefined) {
		return isFlagRequired;
	}

	return flag.isMultiple && receivedFlags[flagName].length === 0 && isFlagRequired;
};

const reportMissingRequiredFlags = missingRequiredFlags => {
	console.error(`Missing required flag${missingRequiredFlags.length > 1 ? 's' : ''}`);
	for (const flag of missingRequiredFlags) {
		console.error(`\t${decamelizeFlagKey(flag.key)}${flag.shortFlag ? `, -${flag.shortFlag}` : ''}`);
	}
};

const checkMissingRequiredFlags = (flags, receivedFlags, input) => {
	const missingRequiredFlags = [];
	if (flags === undefined) {
		return [];
	}

	for (const flagName of Object.keys(flags)) {
		if (flags[flagName].isRequired && isFlagMissing(flagName, flags, receivedFlags, input)) {
			missingRequiredFlags.push({key: flagName, ...flags[flagName]});
		}
	}

	if (missingRequiredFlags.length > 0) {
		reportMissingRequiredFlags(missingRequiredFlags);
		process.exit(2);
	}
};

export { checkMissingRequiredFlags, checkUnknownFlags, validate };
