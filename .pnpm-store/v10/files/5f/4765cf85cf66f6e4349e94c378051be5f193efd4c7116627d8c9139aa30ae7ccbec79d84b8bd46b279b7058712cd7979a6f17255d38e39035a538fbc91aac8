import { E as Environment } from './chunks/environment.d.CrsxCzP1.js';
export { a as EnvironmentReturn, V as VmEnvironmentReturn } from './chunks/environment.d.CrsxCzP1.js';
import '@vitest/utils';

declare const environments: {
	"node": Environment;
	"jsdom": Environment;
	"happy-dom": Environment;
	"edge-runtime": Environment;
};

interface PopulateOptions {
	bindFunctions?: boolean;
	additionalKeys?: string[];
}
declare function populateGlobal(global: any, win: any, options?: PopulateOptions): {
	keys: Set<string>;
	skipKeys: string[];
	originals: Map<string | symbol, any>;
};

export { Environment, environments as builtinEnvironments, populateGlobal };
