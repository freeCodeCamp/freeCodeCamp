const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

let loggedTypeFailures = {};

/**
 * Reset the history of which prop type warnings have been logged.
 */
export function resetPropWarnings() {
	loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * Adapted from https://github.com/facebook/prop-types/blob/master/checkPropTypes.js
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 */
export function checkPropTypes(
	typeSpecs,
	values,
	location,
	componentName,
	getStack
) {
	Object.keys(typeSpecs).forEach(typeSpecName => {
		let error;
		try {
			error = typeSpecs[typeSpecName](
				values,
				typeSpecName,
				componentName,
				location,
				null,
				ReactPropTypesSecret
			);
		} catch (e) {
			error = e;
		}
		if (error && !(error.message in loggedTypeFailures)) {
			loggedTypeFailures[error.message] = true;
			console.error(
				`Failed ${location} type: ${error.message}${
					(getStack && `\n${getStack()}`) || ''
				}`
			);
		}
	});
}
