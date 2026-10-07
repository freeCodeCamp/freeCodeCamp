import { isBuiltin } from 'node:module';

let port;
const initialize = async ({ port: _port, time: _time }) => {
	port = _port;
};
const NOW_LENGTH = Date.now().toString().length;
const REGEXP_VITEST = new RegExp(`%3Fvitest=\\d{${NOW_LENGTH}}`);
const REGEXP_MOCK_ACTUAL = /\?mock=actual/;
const resolve = (specifier, context, defaultResolve) => {
	if (specifier.includes("mock=actual")) {
		// url is already resolved by `importActual`
		const moduleId = specifier.replace(REGEXP_MOCK_ACTUAL, "");
		return {
			url: moduleId,
			format: isBuiltin(moduleId) ? "builtin" : void 0,
			shortCircuit: true
		};
	}
	const isVitest = specifier.includes("%3Fvitest=");
	const result = defaultResolve(isVitest ? specifier.replace(REGEXP_VITEST, "") : specifier, context);
	if (!port || !context?.parentURL) return result;
	if (typeof result === "object" && "then" in result) return result.then((resolved) => {
		ensureModuleGraphEntry(resolved.url, context.parentURL);
		if (isVitest) resolved.url = `${resolved.url}?vitest=${Date.now()}`;
		return resolved;
	});
	if (isVitest) result.url = `${result.url}?vitest=${Date.now()}`;
	ensureModuleGraphEntry(result.url, context.parentURL);
	return result;
};
function ensureModuleGraphEntry(url, parentURL) {
	if (url.includes("/node_modules/")) return;
	port.postMessage({
		event: "register-module-graph-entry",
		url,
		parentURL
	});
}

export { initialize, resolve };
