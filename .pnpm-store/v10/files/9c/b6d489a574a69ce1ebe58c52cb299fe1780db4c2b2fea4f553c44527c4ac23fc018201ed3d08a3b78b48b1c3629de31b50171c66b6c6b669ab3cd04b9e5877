import { pathToFileURL } from 'node:url';
import { r as resolveModule } from './index.BCY_7LL2.js';
import { resolve } from 'pathe';
import { ModuleRunner } from 'vite/module-runner';

class NativeModuleRunner extends ModuleRunner {
	/**
	* @internal
	*/
	mocker;
	constructor(root, mocker) {
		super({
			hmr: false,
			sourcemapInterceptor: false,
			transport: { invoke() {
				throw new Error("Unexpected `invoke`");
			} }
		});
		this.root = root;
		this.mocker = mocker;
		if (mocker) Object.defineProperty(globalThis, "__vitest_mocker__", {
			configurable: true,
			writable: true,
			value: mocker
		});
	}
	async import(moduleId) {
		const path = resolveModule(moduleId, { paths: [this.root] }) ?? resolve(this.root, moduleId);
		// resolveModule doesn't keep the query params, so we need to add them back
		let queryParams = "";
		if (moduleId.includes("?") && !path.includes("?")) queryParams = moduleId.slice(moduleId.indexOf("?"));
		return import(pathToFileURL(path + queryParams).toString());
	}
}

export { NativeModuleRunner as N };
