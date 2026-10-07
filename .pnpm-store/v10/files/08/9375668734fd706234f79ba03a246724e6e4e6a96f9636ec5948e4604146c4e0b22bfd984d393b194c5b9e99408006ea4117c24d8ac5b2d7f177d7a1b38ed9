import { ViteNodeRunnerOptions } from 'vite-node';
import { ViteNodeRunner, ModuleExecutionInfo } from 'vite-node/client';
import { R as RuntimeRPC, W as WorkerGlobalState } from './chunks/worker.d.1GmBbd7G.js';
import vm from 'node:vm';
import { MockedModule, MockedModuleType } from '@vitest/mocker';
import { P as PendingSuiteMock, b as MockFactory, a as MockOptions } from './chunks/mocker.d.BE_2ls6u.js';
import '@vitest/runner';
import './chunks/config.d.D2ROskhv.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/snapshot/environment';
import '@vitest/utils/diff';
import './chunks/environment.d.cL3nLXbE.js';
import 'vitest/optional-types.js';

declare class FileMap {
	private fsCache;
	private fsBufferCache;
	readFileAsync(path: string): Promise<string>;
	readFile(path: string): string;
	readBuffer(path: string): Buffer;
}

// need to copy paste types for vm
// because they require latest @types/node which we don't bundle
interface ModuleEvaluateOptions {
	timeout?: vm.RunningScriptOptions["timeout"] | undefined;
	breakOnSigint?: vm.RunningScriptOptions["breakOnSigint"] | undefined;
}
type ModuleLinker = (specifier: string, referencingModule: VMModule, extra: {
	assert: object
}) => VMModule | Promise<VMModule>;
type ModuleStatus = "unlinked" | "linking" | "linked" | "evaluating" | "evaluated" | "errored";
declare class VMModule {
	dependencySpecifiers: readonly string[];
	error: any;
	identifier: string;
	context: vm.Context;
	namespace: object;
	status: ModuleStatus;
	evaluate(options?: ModuleEvaluateOptions): Promise<void>;
	link(linker: ModuleLinker): Promise<void>;
}

interface ExternalModulesExecutorOptions {
	context: vm.Context;
	fileMap: FileMap;
	packageCache: Map<string, any>;
	transform: RuntimeRPC["transform"];
	interopDefault?: boolean;
	viteClientModule: Record<string, unknown>;
}
// TODO: improve Node.js strict mode support in #2854
declare class ExternalModulesExecutor {
	#private;
	private options;
	private cjs;
	private esm;
	private vite;
	private context;
	private fs;
	private resolvers;
	constructor(options: ExternalModulesExecutorOptions);
	import(identifier: string): Promise<object>;
	require(identifier: string): any;
	createRequire(identifier: string): NodeJS.Require;
	// dynamic import can be used in both ESM and CJS, so we have it in the executor
	importModuleDynamically: (specifier: string, referencer: VMModule) => Promise<VMModule>;
	resolveModule: (specifier: string, referencer: string) => Promise<VMModule>;
	resolve(specifier: string, parent: string): string;
	private findNearestPackageData;
	private getModuleInformation;
	private createModule;
	private get isNetworkSupported();
}

interface MockContext {
	/**
	* When mocking with a factory, this refers to the module that imported the mock.
	*/
	callstack: null | string[];
}
declare class VitestMocker {
	executor: VitestExecutor;
	static pendingIds: PendingSuiteMock[];
	private spyModule?;
	private primitives;
	private filterPublicKeys;
	private registries;
	private mockContext;
	constructor(executor: VitestExecutor);
	private get root();
	private get moduleCache();
	private get moduleDirectories();
	initializeSpyModule(): Promise<void>;
	private getMockerRegistry;
	reset(): void;
	private deleteCachedItem;
	private isModuleDirectory;
	getSuiteFilepath(): string;
	private createError;
	private resolvePath;
	resolveMocks(): Promise<void>;
	private callFunctionMock;
	// public method to avoid circular dependency
	getMockContext(): MockContext;
	// path used to store mocked dependencies
	getMockPath(dep: string): string;
	getDependencyMock(id: string): MockedModule | undefined;
	normalizePath(path: string): string;
	resolveMockPath(mockPath: string, external: string | null): string | null;
	mockObject(object: Record<string | symbol, any>, mockExports?: Record<string | symbol, any>, behavior?: MockedModuleType): Record<string | symbol, any>;
	unmockPath(path: string): void;
	mockPath(originalId: string, path: string, external: string | null, mockType: MockedModuleType | undefined, factory: MockFactory | undefined): void;
	importActual<T>(rawId: string, importer: string, callstack?: string[] | null): Promise<T>;
	importMock(rawId: string, importee: string): Promise<any>;
	requestWithMock(url: string, callstack: string[]): Promise<any>;
	queueMock(id: string, importer: string, factoryOrOptions?: MockFactory | MockOptions): void;
	queueUnmock(id: string, importer: string): void;
}

interface ExecuteOptions extends ViteNodeRunnerOptions {
	moduleDirectories?: string[];
	state: WorkerGlobalState;
	context?: vm.Context;
	externalModulesExecutor?: ExternalModulesExecutor;
}
declare class VitestExecutor extends ViteNodeRunner {
	options: ExecuteOptions;
	mocker: VitestMocker;
	externalModules?: ExternalModulesExecutor;
	private primitives;
	constructor(options: ExecuteOptions);
	protected getContextPrimitives(): {
		Object: typeof Object
		Reflect: typeof Reflect
		Symbol: typeof Symbol
	};
	get state(): WorkerGlobalState;
	get moduleExecutionInfo(): ModuleExecutionInfo | undefined;
	shouldResolveId(id: string, _importee?: string | undefined): boolean;
	originalResolveUrl(id: string, importer?: string): Promise<[url: string, fsPath: string]>;
	resolveUrl(id: string, importer?: string): Promise<[url: string, fsPath: string]>;
	protected runModule(context: Record<string, any>, transformed: string): Promise<void>;
	importExternalModule(path: string): Promise<any>;
	dependencyRequest(id: string, fsPath: string, callstack: string[]): Promise<any>;
	prepareContext(context: Record<string, any>): Record<string, any>;
}

export { VitestExecutor };
