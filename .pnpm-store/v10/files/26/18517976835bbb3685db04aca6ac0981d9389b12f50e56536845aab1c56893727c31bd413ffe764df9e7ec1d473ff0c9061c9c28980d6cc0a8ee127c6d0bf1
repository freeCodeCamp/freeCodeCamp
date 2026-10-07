"use strict";

module.exports = function (it) {
	const { pattern } = it;

	return `
You are linting "${pattern}", but all of the files matching the glob pattern "${pattern}" are ignored.

If you don't want to lint these files, remove the pattern "${pattern}" from the list of arguments passed to ESLint.

If you do want to lint these files, explicitly list one or more of the files from this glob that you'd like to lint to see more details about why they are ignored.

  * If the file is ignored because of a matching ignore pattern, check global ignores in your config file.
    https://eslint.org/docs/latest/use/configure/ignore

  * If the file is ignored because no matching configuration was supplied, check file patterns in your config file.
    https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-with-arbitrary-extensions

  * If the file is ignored because it is located outside of the base path, change the location of your config file to be in a parent directory.
`.trimStart();
};
