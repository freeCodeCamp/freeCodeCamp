"use strict";

module.exports = function (it) {
	const { pluginName, ruleId } = it;

	return `
A configuration object specifies rule "${ruleId}", but could not find plugin "${pluginName}".

Common causes of this problem include:

1. The "${pluginName}" plugin is not defined in your configuration file.
2. The "${pluginName}" plugin is not defined within the same configuration object in which the "${ruleId}" rule is applied.
`.trimStart();
};
