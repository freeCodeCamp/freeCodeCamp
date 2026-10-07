import { UserConfig as UserConfig$1, ConfigEnv } from 'vite';
export { ConfigEnv, Plugin, UserConfig as ViteUserConfig, mergeConfig } from 'vite';
import { c as CoverageV8Options, R as ResolvedCoverageOptions, U as UserWorkspaceConfig, d as UserProjectConfigFn, e as UserProjectConfigExport, b as TestProjectConfiguration } from './chunks/reporters.d.BFLkQcL6.js';
export { f as TestProjectInlineConfiguration, g as WatcherTriggerPattern, W as WorkspaceProjectConfiguration } from './chunks/reporters.d.BFLkQcL6.js';
import './chunks/vite.d.CMLlLIFP.js';
import { F as FakeTimerInstallOpts } from './chunks/config.d.D2ROskhv.js';
import '@vitest/runner';
import './chunks/environment.d.cL3nLXbE.js';
import 'vitest/optional-types.js';
import '@vitest/utils';
import 'node:stream';
import 'node:console';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import './chunks/worker.d.1GmBbd7G.js';
import 'vite-node';
import '@vitest/snapshot';
import '@vitest/pretty-format';
import '@vitest/utils/diff';
import 'chai';
import './chunks/benchmark.d.BwvBVTda.js';
import '@vitest/runner/utils';
import 'tinybench';
import './chunks/coverage.d.S9RMNXIe.js';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'node:fs';
import '@vitest/snapshot/environment';

declare const defaultBrowserPort = 63315;
declare const extraInlineDeps: RegExp[];

declare const defaultInclude: string[];
declare const defaultExclude: string[];
// These are the generic defaults for coverage. Providers may also set some provider specific defaults.
declare const coverageConfigDefaults: ResolvedCoverageOptions;
declare const configDefaults: Readonly<{
	allowOnly: boolean
	isolate: boolean
	watch: boolean
	globals: boolean
	environment: "node"
	pool: "forks"
	clearMocks: boolean
	restoreMocks: boolean
	mockReset: boolean
	unstubGlobals: boolean
	unstubEnvs: boolean
	include: string[]
	exclude: string[]
	teardownTimeout: number
	forceRerunTriggers: string[]
	update: boolean
	reporters: never[]
	silent: boolean
	hideSkippedTests: boolean
	api: boolean
	ui: boolean
	uiBase: string
	open: boolean
	css: {
		include: never[]
	}
	coverage: CoverageV8Options
	fakeTimers: FakeTimerInstallOpts
	maxConcurrency: number
	dangerouslyIgnoreUnhandledErrors: boolean
	typecheck: {
		checker: "tsc"
		include: string[]
		exclude: string[]
	}
	slowTestThreshold: number
	disableConsoleIntercept: boolean
}>;

/**
* @deprecated Use `ViteUserConfig` instead
*/
type UserConfig = UserConfig$1;

type UserConfigFnObject = (env: ConfigEnv) => UserConfig$1;
type UserConfigFnPromise = (env: ConfigEnv) => Promise<UserConfig$1>;
type UserConfigFn = (env: ConfigEnv) => UserConfig$1 | Promise<UserConfig$1>;
type UserConfigExport = UserConfig$1 | Promise<UserConfig$1> | UserConfigFnObject | UserConfigFnPromise | UserConfigFn;
declare function defineConfig(config: UserConfig$1): UserConfig$1;
declare function defineConfig(config: Promise<UserConfig$1>): Promise<UserConfig$1>;
declare function defineConfig(config: UserConfigFnObject): UserConfigFnObject;
declare function defineConfig(config: UserConfigExport): UserConfigExport;
declare function defineProject(config: UserWorkspaceConfig): UserWorkspaceConfig;
declare function defineProject(config: Promise<UserWorkspaceConfig>): Promise<UserWorkspaceConfig>;
declare function defineProject(config: UserProjectConfigFn): UserProjectConfigFn;
declare function defineProject(config: UserProjectConfigExport): UserProjectConfigExport;
/**
* @deprecated use the `projects` field in the root config instead
*/
declare function defineWorkspace(config: TestProjectConfiguration[]): TestProjectConfiguration[];

export { TestProjectConfiguration, UserProjectConfigExport, UserProjectConfigFn, UserWorkspaceConfig, configDefaults, coverageConfigDefaults, defaultBrowserPort, defaultExclude, defaultInclude, defineConfig, defineProject, defineWorkspace, extraInlineDeps };
export type { UserConfig, UserConfigExport, UserConfigFn, UserConfigFnObject, UserConfigFnPromise };
