import { MaybeMockedDeep } from '@vitest/spy';
import { b as ModuleMockOptions, c as ModuleMockFactoryWithHelper, a as MockedModule, T as TestModuleMocker, M as MockerRegistry, d as MockedModuleType, e as ModuleMockContext } from './types.d-BjI5eAwu.js';
import { C as CreateMockInstanceProcedure } from './index.d-B41z0AuW.js';

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

declare class ModuleMocker implements TestModuleMocker {
	private interceptor;
	private rpc;
	private createMockInstance;
	private config;
	protected registry: MockerRegistry;
	private queue;
	private mockedIds;
	constructor(interceptor: ModuleMockerInterceptor, rpc: ModuleMockerRPC, createMockInstance: CreateMockInstanceProcedure, config: ModuleMockerConfig);
	prepare(): Promise<void>;
	resolveFactoryModule(id: string): Promise<Record<string | symbol, any>>;
	getFactoryModule(id: string): any;
	invalidate(): Promise<void>;
	importActual<T>(id: string, importer: string): Promise<T>;
	protected getBaseUrl(): string;
	importMock<T>(rawId: string, importer: string): Promise<T>;
	mockObject(object: Record<string | symbol, any>, moduleType?: "automock" | "autospy"): Record<string | symbol, any>;
	mockObject(object: Record<string | symbol, any>, mockExports: Record<string | symbol, any> | undefined, moduleType?: "automock" | "autospy"): Record<string | symbol, any>;
	getMockContext(): ModuleMockContext;
	queueMock(rawId: string, importer: string, factoryOrOptions?: ModuleMockOptions | (() => any)): void;
	queueUnmock(id: string, importer: string): void;
	wrapDynamicImport<T>(moduleFactory: () => Promise<T>): Promise<T>;
	getMockedModuleById(id: string): MockedModule | undefined;
	reset(): void;
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
		mock: "spy" | "factory" | "auto";
	}) => Promise<ResolveMockResult>;
}
interface ModuleMockerConfig {
	root: string;
}

export { ModuleMocker as b, createCompilerHints as f };
export type { CompilerHintsOptions as C, ModuleMockerInterceptor as M, ResolveIdResult as R, ModuleMockerCompilerHints as a, ModuleMockerConfig as c, ModuleMockerRPC as d, ResolveMockResult as e };
