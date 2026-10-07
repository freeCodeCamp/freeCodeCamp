import { M as ModuleMockerInterceptor } from './mocker.d-Ce9_ySj5.js';
export { C as CompilerHintsOptions, b as ModuleMocker, a as ModuleMockerCompilerHints, d as ModuleMockerConfig, e as ModuleMockerRPC, R as ResolveIdResult, f as ResolveMockResult, c as createCompilerHints } from './mocker.d-Ce9_ySj5.js';
import { StartOptions, SetupWorker } from 'msw/browser';
import { c as MockerRegistry, g as MockedModule } from './registry.d-D765pazg.js';
import '@vitest/spy';
import './types.d-D_aRZRdy.js';

interface ModuleMockerMSWInterceptorOptions {
	/**
	* The identifier to access the globalThis object in the worker.
	* This will be injected into the script as is, so make sure it's a valid JS expression.
	* @example
	* ```js
	* // globalThisAccessor: '__my_variable__' produces:
	* globalThis[__my_variable__]
	* // globalThisAccessor: 'Symbol.for('secret:mocks')' produces:
	* globalThis[Symbol.for('secret:mocks')]
	* // globalThisAccessor: '"__vitest_mocker__"' (notice quotes) produces:
	* globalThis["__vitest_mocker__"]
	* ```
	* @default `"__vitest_mocker__"`
	*/
	globalThisAccessor?: string;
	/**
	* Options passed down to `msw.setupWorker().start(options)`
	*/
	mswOptions?: StartOptions;
	/**
	* A pre-configured `msw.setupWorker` instance.
	*/
	mswWorker?: SetupWorker;
}
declare class ModuleMockerMSWInterceptor implements ModuleMockerInterceptor {
	private readonly options;
	protected readonly mocks: MockerRegistry;
	private startPromise;
	private worker;
	constructor(options?: ModuleMockerMSWInterceptorOptions);
	register(module: MockedModule): Promise<void>;
	delete(url: string): Promise<void>;
	invalidate(): Promise<void>;
	private resolveManualMock;
	protected init(): Promise<SetupWorker>;
}

declare class ModuleMockerServerInterceptor implements ModuleMockerInterceptor {
	register(module: MockedModule): Promise<void>;
	delete(id: string): Promise<void>;
	invalidate(): Promise<void>;
}

export { ModuleMockerInterceptor, ModuleMockerMSWInterceptor, ModuleMockerServerInterceptor };
export type { ModuleMockerMSWInterceptorOptions };
