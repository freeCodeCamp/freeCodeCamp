"use strict";

module.exports = function ({ key, objectKey }) {
	// special case for parsers
	const isParser =
		objectKey === "parser" && (key === "parse" || key === "parseForESLint");
	const parserMessage = `
    This typically happens when you're using a custom parser that does not
provide a "meta" property, which is how ESLint determines the serialized
representation. Please open an issue with the maintainer of the custom parser
and share this link:

https://eslint.org/docs/latest/extend/custom-parsers#meta-data-in-custom-parsers
`.trim();

	return `
The requested operation requires ESLint to serialize configuration data,
but the configuration key "${objectKey}.${key}" contains a function value,
which cannot be serialized.

${
	isParser
		? parserMessage
		: "Please double-check your configuration for errors."
}

If you still have problems, please stop by https://eslint.org/chat/help to chat
with the team.
`.trimStart();
};
