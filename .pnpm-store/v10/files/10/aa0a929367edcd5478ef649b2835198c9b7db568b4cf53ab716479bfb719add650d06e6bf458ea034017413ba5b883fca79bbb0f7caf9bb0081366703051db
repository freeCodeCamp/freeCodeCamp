import { M as ModuleMockerInterceptor } from './mocker.d-QEntlm6J.js';
export { C as CompilerHintsOptions, b as ModuleMocker, a as ModuleMockerCompilerHints, c as ModuleMockerConfig, d as ModuleMockerRPC, R as ResolveIdResult, e as ResolveMockResult, f as createCompilerHints } from './mocker.d-QEntlm6J.js';
import { StartOptions, SetupWorker } from 'msw/browser';
import { M as MockerRegistry, a as MockedModule } from './types.d-BjI5eAwu.js';
import '@vitest/spy';
import './index.d-B41z0AuW.js';

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
