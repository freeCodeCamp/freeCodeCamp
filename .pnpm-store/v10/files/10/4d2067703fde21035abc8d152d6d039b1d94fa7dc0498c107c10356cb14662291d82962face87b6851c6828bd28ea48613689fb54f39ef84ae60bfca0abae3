"use strict";

module.exports = function ({ plugins }) {
	const isArrayOfStrings = typeof plugins[0] === "string";

	return `
A config object has a "plugins" key defined as an array${isArrayOfStrings ? " of strings" : ""}. It looks something like this:

    {
        "plugins": ${JSON.stringify(plugins)}
    }

Flat config requires "plugins" to be an object, like this:

    {
        plugins: {
            ${isArrayOfStrings && plugins[0] ? plugins[0] : "namespace"}: pluginObject
        }
    }

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#importing-plugins-and-custom-parsers

If you're using a shareable config that you cannot rewrite in flat config format, then use the compatibility utility:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`;
};
