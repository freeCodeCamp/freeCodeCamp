const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function createManualModuleSource(moduleUrl, exports, globalAccessor = "\"__vitest_mocker__\"") {
	const source = `const module = globalThis[${globalAccessor}].getFactoryModule("${moduleUrl}");`;
	const keys = exports.map((name) => {
		if (name === "default") {
			return `export default module["default"];`;
		}
		return `export const ${name} = module["${name}"];`;
	}).join("\n");
	return `${source}\n${keys}`;
}

export { cleanUrl as a, createManualModuleSource as c };
