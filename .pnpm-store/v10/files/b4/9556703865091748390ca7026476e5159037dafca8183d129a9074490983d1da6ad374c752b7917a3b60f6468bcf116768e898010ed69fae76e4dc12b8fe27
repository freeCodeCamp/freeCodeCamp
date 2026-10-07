import { MaybeMockedDeep } from '@vitest/spy';
import { b as ModuleMockOptions, a as ModuleMockFactoryWithHelper } from './types.d-D_aRZRdy.js';
import { g as MockedModule, c as MockerRegistry, M as MockedModuleType } from './registry.d-D765pazg.js';

interface CompilerHintsOptions {
	/**
	* This is the key used to access the globalThis object in the worker.
	* Unlike `globalThisAccessor` in other APIs, this is not injected into the script.
	* ```ts
	* // globalThisKey: '__my_variable__' produces:
	* globalThis['__my_variable__']
	* // globalThisKey: '"__my_variable__"' produces:
	* globalThis['"__my_variable__"'] // notice double quotes
	* ```
	* @default '__vitest_mocker__'
	*/
	globalThisKey?: string;
}
interface ModuleMockerCompilerHints {
	hoisted: <T>(factory: () => T) => T;
	mock: (path: string | Promise<unknown>, factory?: ModuleMockOptions | ModuleMockFactoryWithHelper) => void;
	unmock: (path: string | Promise<unknown>) => void;
	doMock: (path: string | Promise<unknown>, factory?: ModuleMockOptions | ModuleMockFactoryWithHelper) => void;
	doUnmock: (path: string | Promise<unknown>) => void;
	importActual: <T>(path: string) => Promise<T>;
	importMock: <T>(path: string) => Promise<MaybeMockedDeep<T>>;
}
declare function createCompilerHints(options?: CompilerHintsOptions): ModuleMockerCompilerHints;

interface ModuleMockerInterceptor {
	register: (module: MockedModule) => Promise<void>;
	delete: (url: string) => Promise<void>;
	invalidate: () => Promise<void>;
}

declare class ModuleMocker {
	private interceptor;
	private rpc;
	private spyOn;
	private config;
	protected registry: MockerRegistry;
	private queue;
	private mockedIds;
	constructor(interceptor: ModuleMockerInterceptor, rpc: ModuleMockerRPC, spyOn: (obj: any, method: string | symbol) => any, config: ModuleMockerConfig);
	prepare(): Promise<void>;
	resolveFactoryModule(id: string): Promise<Record<string | symbol, any>>;
	getFactoryModule(id: string): any;
	invalidate(): Promise<void>;
	importActual<T>(id: string, importer: string): Promise<T>;
	importMock<T>(rawId: string, importer: string): Promise<T>;
	mockObject(object: Record<string | symbol, any>, moduleType?: MockedModuleType): Record<string | symbol, any>;
	queueMock(rawId: string, importer: string, factoryOrOptions?: ModuleMockOptions | (() => any)): void;
	queueUnmock(id: string, importer: string): void;
	// We need to await mock registration before importing the actual module
	// In case there is a mocked module in the import chain
	wrapDynamicImport<T>(moduleFactory: () => Promise<T>): Promise<T>;
	private resolveMockPath;
}
interface ResolveIdResult {
	id: string;
	url: string;
	optimized: boolean;
}
interface ResolveMockResult {
	mockType: MockedModuleType;
	resolvedId: string;
	resolvedUrl: string;
	redirectUrl?: string | null;
	needsInterop?: boolean;
}
interface ModuleMockerRPC {
	invalidate: (ids: string[]) => Promise<void>;
	resolveId: (id: string, importer: string) => Promise<ResolveIdResult | null>;
	resolveMock: (id: string, importer: string, options: {
		mock: "spy" | "factory" | "auto"
	}) => Promise<ResolveMockResult>;
}
interface ModuleMockerConfig {
	root: string;
}

export { ModuleMocker as b, createCompilerHints as c };
export type { CompilerHintsOptions as C, ModuleMockerInterceptor as M, ResolveIdResult as R, ModuleMockerCompilerHints as a, ModuleMockerConfig as d, ModuleMockerRPC as e, ResolveMockResult as f };
