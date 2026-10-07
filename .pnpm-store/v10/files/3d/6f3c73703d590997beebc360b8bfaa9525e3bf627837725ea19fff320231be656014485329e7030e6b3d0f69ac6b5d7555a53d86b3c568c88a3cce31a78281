interface RuntimeCoverageModuleLoader {
	import: (id: string) => Promise<{
		default: RuntimeCoverageProviderModule;
	}>;
	isBrowser?: boolean;
	moduleExecutionInfo?: Map<string, {
		startOffset: number;
	}>;
}
interface RuntimeCoverageProviderModule {
	/**
	* Factory for creating a new coverage provider
	*/
	getProvider: () => any;
	/**
	* Executed before tests are run in the worker thread.
	*/
	startCoverage?: (runtimeOptions: {
		isolate: boolean;
	}) => unknown | Promise<unknown>;
	/**
	* Executed on after each run in the worker thread. Possible to return a payload passed to the provider
	*/
	takeCoverage?: (runtimeOptions?: {
		moduleExecutionInfo?: Map<string, {
			startOffset: number;
		}>;
	}) => unknown | Promise<unknown>;
	/**
	* Executed after all tests have been run in the worker thread.
	*/
	stopCoverage?: (runtimeOptions: {
		isolate: boolean;
	}) => unknown | Promise<unknown>;
}

export type { RuntimeCoverageModuleLoader as R, RuntimeCoverageProviderModule as a };
