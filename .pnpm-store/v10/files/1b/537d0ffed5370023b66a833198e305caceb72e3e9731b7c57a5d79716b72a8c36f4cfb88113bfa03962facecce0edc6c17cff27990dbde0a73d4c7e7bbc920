import { ModuleEvaluator, ModuleRunnerImportMeta, ModuleRunnerContext, EvaluatedModuleNode } from 'vite/module-runner';
import { V as VitestEvaluatedModules } from './chunks/evaluatedModules.d.BxJ5omdx.js';
import vm from 'node:vm';
import { R as RuntimeRPC } from './chunks/rpc.d.B_8sPU0w.js';
import '@vitest/runner';
import '@vitest/snapshot';
import './chunks/traces.d.D2T_R8rx.js';

type ModuleExecutionInfo = Map<string, ModuleExecutionInfoEntry>;
interface ModuleExecutionInfoEntry {
	startOffset: number;
	/** The duration that was spent executing the module. */
	duration: number;
	/** The time that was spent executing the module itself and externalized imports. */
	selfTime: number;
	external?: boolean;
	importer?: string;
}

declare class FileMap {
	private fsCache;
	private fsBufferCache;
	readFileAsync(path: string): Promise<string>;
	readFile(path: string): string;
	readBuffer(path: string): Buffer<ArrayBuffer>;
}

interface ModuleEvaluateOptions {
	timeout?: vm.RunningScriptOptions["timeout"] | undefined;
	breakOnSigint?: vm.RunningScriptOptions["breakOnSigint"] | undefined;
}
type ModuleLinker = (specifier: string, referencingModule: VMModule, extra: {
	assert: object;
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
	importModuleDynamically: (specifier: string, referencer: VMModule) => Promise<VMModule>;
	resolveModule: (specifier: string, referencer: string) => Promise<VMModule>;
	resolve(specifier: string, parent: string): string;
	private getModuleInformation;
	private createModule;
	private get isNetworkSupported();
}

declare module "vite/module-runner" {
	interface EvaluatedModuleNode {
		/**
		* @internal
		*/
		mockedExports?: Record<string, any>;
	}
}

declare module "vite/module-runner" {
	interface EvaluatedModuleNode {
		/**
		* @internal
		*/
		mockedExports?: Record<string, any>;
	}
}

interface VitestVmOptions {
	context: vm.Context;
	externalModulesExecutor: ExternalModulesExecutor;
}

interface VitestModuleEvaluatorOptions {
	evaluatedModules?: VitestEvaluatedModules;
	interopDefault?: boolean | undefined;
	moduleExecutionInfo?: ModuleExecutionInfo;
	getCurrentTestFilepath?: () => string | undefined;
	compiledFunctionArgumentsNames?: string[];
	compiledFunctionArgumentsValues?: unknown[];
}
declare class VitestModuleEvaluator implements ModuleEvaluator {
	private options;
	stubs: Record<string, any>;
	env: ModuleRunnerImportMeta["env"];
	private vm;
	private compiledFunctionArgumentsNames?;
	private compiledFunctionArgumentsValues;
	private primitives;
	private debug;
	private _otel;
	private _evaluatedModules?;
	constructor(vmOptions?: VitestVmOptions | undefined, options?: VitestModuleEvaluatorOptions);
	private convertIdToImportUrl;
	runExternalModule(id: string): Promise<any>;
	runInlinedModule(context: ModuleRunnerContext, code: string, module: Readonly<EvaluatedModuleNode>): Promise<any>;
	private _createCJSGlobals;
	private _runInlinedModule;
	private createRequire;
	private shouldInterop;
}
declare function createImportMetaEnvProxy(): ModuleRunnerImportMeta["env"];
declare function getDefaultRequestStubs(context?: vm.Context): Record<string, any>;
declare function isPrimitive(v: any): boolean;
declare function wrapId(id: string): string;
declare function unwrapId(id: string): string;

export { VitestModuleEvaluator, createImportMetaEnvProxy, getDefaultRequestStubs, isPrimitive, unwrapId, wrapId };
export type { VitestModuleEvaluatorOptions };
