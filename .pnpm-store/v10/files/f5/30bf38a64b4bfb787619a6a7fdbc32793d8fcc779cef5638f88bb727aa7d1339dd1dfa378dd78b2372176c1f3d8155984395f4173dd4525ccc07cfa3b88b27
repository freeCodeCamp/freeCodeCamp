const { dirname } = require("node:path");
const { absolute } = require("empathic/resolve");
/**
* Get all parent directories of {@link base}.
* Stops after {@link Options['last']} is processed.
*
* @returns An array of absolute paths of all parent directories.
*/
function up(base, options) {
	let { last, cwd } = options || {};
	let tmp = absolute(base, cwd);
	let root = absolute(last || "/", cwd);
	let prev, arr = [];
	while (prev !== root) {
		arr.push(tmp);
		tmp = dirname(prev = tmp);
		if (tmp === prev) break;
	}
	return arr;
}

exports.up = up;