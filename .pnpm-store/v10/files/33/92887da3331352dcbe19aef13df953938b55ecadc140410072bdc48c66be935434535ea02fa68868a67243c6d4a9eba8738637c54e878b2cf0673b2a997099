"use strict";

module.exports = function (it) {
	const { pluginName } = it;

	return `
ESLint couldn't find the plugin "${pluginName}". because there is whitespace in the name. Please check your configuration and remove all whitespace from the plugin name.

If you still can't figure out the problem, please stop by https://eslint.org/chat/help to chat with the team.
`.trimStart();
};
