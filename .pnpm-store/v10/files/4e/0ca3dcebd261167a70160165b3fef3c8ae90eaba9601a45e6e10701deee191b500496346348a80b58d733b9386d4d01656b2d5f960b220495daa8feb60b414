import { E as Environment } from './chunks/environment.d.cL3nLXbE.js';
export { a as EnvironmentReturn, V as VmEnvironmentReturn } from './chunks/environment.d.cL3nLXbE.js';
import 'vitest/optional-types.js';

declare const environments: {
	"node": Environment
	"jsdom": Environment
	"happy-dom": Environment
	"edge-runtime": Environment
};

interface PopulateOptions {
	// we bind functions such as addEventListener and others
	// because they rely on `this` in happy-dom, and in jsdom it
	// has a priority for getting implementation from symbols
	// (global doesn't have these symbols, but window - does)
	bindFunctions?: boolean;
	additionalKeys?: string[];
}
declare function populateGlobal(global: any, win: any, options?: PopulateOptions): {
	keys: Set<string>
	skipKeys: string[]
	originals: Map<string | symbol, any>
};

export { Environment, environments as builtinEnvironments, populateGlobal };
