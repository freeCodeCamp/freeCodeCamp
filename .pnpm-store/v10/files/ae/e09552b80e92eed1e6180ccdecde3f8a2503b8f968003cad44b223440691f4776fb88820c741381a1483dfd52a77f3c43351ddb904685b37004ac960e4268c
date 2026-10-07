import { H as HoistMocksOptions } from './hoistMocks.d-w2ILr1dG.js';
export { c as createManualModuleSource } from './hoistMocks.d-w2ILr1dG.js';
import { AutomockOptions } from './automock.js';
export { automockModule } from './automock.js';
import { Plugin, Rollup, ViteDevServer } from 'vite';
import { SourceMap } from 'magic-string';
import { M as MockerRegistry, S as ServerMockResolution, f as ServerIdResolution } from './types.d-BjI5eAwu.js';
export { findMockRedirect } from './redirect.js';

declare function automockPlugin(options?: AutomockOptions): Plugin;

interface DynamicImportPluginOptions {
	/**
	* @default `"__vitest_mocker__"`
	*/
	globalThisAccessor?: string;
	filter?: (id: string) => boolean;
}
declare function dynamicImportPlugin(options?: DynamicImportPluginOptions): Plugin;

interface HoistMocksPluginOptions extends Omit<HoistMocksOptions, "regexpHoistable"> {
	include?: string | RegExp | (string | RegExp)[];
	exclude?: string | RegExp | (string | RegExp)[];
	/**
	* overrides include/exclude options
	*/
	filter?: (id: string) => boolean;
}
declare function hoistMocksPlugin(options?: HoistMocksPluginOptions): Plugin;
declare function hoistMockAndResolve(code: string, id: string, parse: Rollup.PluginContext["parse"], options?: HoistMocksOptions): HoistMocksResult | undefined;
interface HoistMocksResult {
	code: string;
	map: SourceMap;
}

interface InterceptorPluginOptions {
	/**
	* @default "__vitest_mocker__"
	*/
	globalThisAccessor?: string;
	registry?: MockerRegistry;
}
declare function interceptorPlugin(options?: InterceptorPluginOptions): Plugin;

interface MockerPluginOptions extends AutomockOptions {
	hoistMocks?: HoistMocksPluginOptions;
}
declare function mockerPlugin(options?: MockerPluginOptions): Plugin[];

interface ServerResolverOptions {
	/**
	* @default ['/node_modules/']
	*/
	moduleDirectories?: string[];
}
declare class ServerMockResolver {
	private server;
	private options;
	constructor(server: ViteDevServer, options?: ServerResolverOptions);
	resolveMock(rawId: string, importer: string, options: {
		mock: "spy" | "factory" | "auto";
	}): Promise<ServerMockResolution>;
	invalidate(ids: string[]): void;
	resolveId(id: string, importer?: string): Promise<ServerIdResolution | null>;
	private normalizeResolveIdToUrl;
	private resolveMockId;
	private resolveModule;
}

export { AutomockOptions as AutomockPluginOptions, ServerMockResolver, automockPlugin, dynamicImportPlugin, hoistMockAndResolve as hoistMocks, hoistMocksPlugin, interceptorPlugin, mockerPlugin };
export type { HoistMocksPluginOptions, HoistMocksResult, InterceptorPluginOptions, ServerResolverOptions };
