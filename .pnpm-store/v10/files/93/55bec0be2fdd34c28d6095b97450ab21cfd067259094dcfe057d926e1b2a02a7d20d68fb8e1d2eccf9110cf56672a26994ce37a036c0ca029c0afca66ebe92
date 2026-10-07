"use strict";

module.exports = function (it) {
	const { configName, importerName } = it;

	return `
"${configName}" is invalid syntax for a config specifier.

* If your intention is to extend from a configuration exported from the plugin, add the configuration name after a slash: e.g. "${configName}/myConfig".
* If this is the name of a shareable config instead of a plugin, remove the "plugin:" prefix: i.e. "${configName.slice("plugin:".length)}".

"${configName}" was referenced from the config file in "${importerName}".

If you still can't figure out the problem, please see https://eslint.org/docs/latest/use/troubleshooting.
`.trimStart();
};
