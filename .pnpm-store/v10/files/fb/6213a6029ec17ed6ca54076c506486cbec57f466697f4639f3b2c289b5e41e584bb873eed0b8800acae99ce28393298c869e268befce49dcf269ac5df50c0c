"use strict";

module.exports = function (it) {
	const { pattern } = it;

	return `
You are linting "${pattern}", but all of the files matching the glob pattern "${pattern}" are ignored.

If you don't want to lint these files, remove the pattern "${pattern}" from the list of arguments passed to ESLint.

If you do want to lint these files, try the following solutions:

* Check your .eslintignore file, or the eslintIgnore property in package.json, to ensure that the files are not configured to be ignored.
* Explicitly list the files from this glob that you'd like to lint on the command-line, rather than providing a glob as an argument.
`.trimStart();
};
