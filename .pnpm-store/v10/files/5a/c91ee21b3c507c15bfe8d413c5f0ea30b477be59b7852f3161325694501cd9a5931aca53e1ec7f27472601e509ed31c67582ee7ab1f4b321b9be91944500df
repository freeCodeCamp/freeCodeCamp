import { PrettyFormatOptions } from '@vitest/pretty-format';
import { SequenceHooks, SequenceSetupFiles, SerializableRetry, TestTagDefinition } from '@vitest/runner';
import { SnapshotUpdateState, SnapshotEnvironment } from '@vitest/snapshot';
import { SerializedDiffOptions } from '@vitest/utils/diff';
import { L as LabelColor } from './traces.d.D2T_R8rx.js';

/**
 * Names of clock methods that may be faked by install.
 */
type FakeMethod =
    | "setTimeout"
    | "clearTimeout"
    | "setImmediate"
    | "clearImmediate"
    | "setInterval"
    | "clearInterval"
    | "Date"
    | "nextTick"
    | "hrtime"
    | "requestAnimationFrame"
    | "cancelAnimationFrame"
    | "requestIdleCallback"
    | "cancelIdleCallback"
    | "performance"
    | "queueMicrotask";

interface FakeTimerInstallOpts {
    /**
     * Installs fake timers with the specified unix epoch (default: 0)
     */
    now?: number | Date | undefined;

    /**
     * An array with names of global methods and APIs to fake. By default, `@sinonjs/fake-timers` does not replace `nextTick()` and `queueMicrotask()`.
     * For instance, `FakeTimers.install({ toFake: ['setTimeout', 'nextTick'] })` will fake only `setTimeout()` and `nextTick()`
     */
    toFake?: FakeMethod[] | undefined;

    /**
     * The maximum number of timers that will be run when calling runAll() (default: 1000)
     */
    loopLimit?: number | undefined;

    /**
     * Tells @sinonjs/fake-timers to increment mocked time automatically based on the real system time shift (e.g. the mocked time will be incremented by
     * 20ms for every 20ms change in the real system time) (default: false)
     */
    shouldAdvanceTime?: boolean | undefined;

    /**
     * Relevant only when using with shouldAdvanceTime: true. increment mocked time by advanceTimeDelta ms every advanceTimeDelta ms change
     * in the real system time (default: 20)
     */
    advanceTimeDelta?: number | undefined;

    /**
     * Tells FakeTimers to clear 'native' (i.e. not fake) timers by delegating to their respective handlers. These are not cleared by
     * default, leading to potentially unexpected behavior if timers existed prior to installing FakeTimers. (default: false)
     */
    shouldClearNativeTimers?: boolean | undefined;

    /**
     * Tells FakeTimers to not throw an error when faking a timer that does not exist in the global object. (default: false)
     */
    ignoreMissingTimers?: boolean | undefined;
}

/**
* Config that tests have access to.
*/
interface SerializedConfig {
	name: string | undefined;
	color?: LabelColor;
	globals: boolean;
	base: string | undefined;
	snapshotEnvironment?: string;
	disableConsoleIntercept: boolean | undefined;
	runner: string | undefined;
	isolate: boolean;
	maxWorkers: number;
	mode: "test" | "benchmark";
	bail: number | undefined;
	environmentOptions?: Record<string, any>;
	root: string;
	setupFiles: string[];
	passWithNoTests: boolean;
	testNamePattern: RegExp | undefined;
	allowOnly: boolean;
	testTimeout: number;
	hookTimeout: number;
	clearMocks: boolean;
	mockReset: boolean;
	restoreMocks: boolean;
	unstubGlobals: boolean;
	unstubEnvs: boolean;
	fakeTimers: FakeTimerInstallOpts;
	maxConcurrency: number;
	defines: Record<string, any>;
	expect: {
		requireAssertions?: boolean;
		poll?: {
			timeout?: number;
			interval?: number;
		};
	};
	printConsoleTrace: boolean | undefined;
	sequence: {
		shuffle?: boolean;
		concurrent?: boolean;
		seed: number;
		hooks: SequenceHooks;
		setupFiles: SequenceSetupFiles;
	};
	deps: {
		web: {
			transformAssets?: boolean;
			transformCss?: boolean;
			transformGlobPattern?: RegExp | RegExp[];
		};
		optimizer: Record<string, {
			enabled: boolean;
		}>;
		interopDefault: boolean | undefined;
		moduleDirectories: string[] | undefined;
	};
	snapshotOptions: {
		updateSnapshot: SnapshotUpdateState;
		expand: boolean | undefined;
		snapshotFormat: PrettyFormatOptions | undefined;
		/**
		* only exists for tests, not available in the main process
		*/
		snapshotEnvironment: SnapshotEnvironment;
	};
	pool: string;
	snapshotSerializers: string[];
	chaiConfig: {
		includeStack?: boolean;
		showDiff?: boolean;
		truncateThreshold?: number;
	} | undefined;
	api: {
		allowExec: boolean | undefined;
		allowWrite: boolean | undefined;
	};
	diff: string | SerializedDiffOptions | undefined;
	retry: SerializableRetry;
	includeTaskLocation: boolean | undefined;
	inspect: boolean | string | undefined;
	inspectBrk: boolean | string | undefined;
	inspector: {
		enabled?: boolean;
		port?: number;
		host?: string;
		waitForDebugger?: boolean;
	};
	watch: boolean;
	env: Record<string, any>;
	browser: {
		name: string;
		headless: boolean;
		isolate: boolean;
		fileParallelism: boolean;
		ui: boolean;
		viewport: {
			width: number;
			height: number;
		};
		locators: {
			testIdAttribute: string;
			exact: boolean;
		};
		screenshotFailures: boolean;
		providerOptions: {
			actionTimeout?: number;
		};
		trace: BrowserTraceViewMode;
		trackUnhandledErrors: boolean;
		detailsPanelPosition: "right" | "bottom";
	};
	standalone: boolean;
	logHeapUsage: boolean | undefined;
	detectAsyncLeaks: boolean;
	coverage: SerializedCoverageConfig;
	benchmark: {
		includeSamples: boolean;
	} | undefined;
	serializedDefines: string;
	experimental: {
		fsModuleCache: boolean;
		importDurations: {
			print: boolean | "on-warn";
			limit: number;
			failOnDanger: boolean;
			thresholds: {
				warn: number;
				danger: number;
			};
		};
		viteModuleRunner: boolean;
		nodeLoader: boolean;
		openTelemetry: {
			enabled: boolean;
			sdkPath?: string;
			browserSdkPath?: string;
		} | undefined;
	};
	tags: TestTagDefinition[];
	tagsFilter: string[] | undefined;
	strictTags: boolean;
	slowTestThreshold: number | undefined;
	isAgent: boolean;
}
interface SerializedCoverageConfig {
	provider: "istanbul" | "v8" | "custom" | undefined;
	reportsDirectory: string;
	htmlDir: string | undefined;
	enabled: boolean;
	customProviderModule: string | undefined;
}
interface SerializedRootConfig extends SerializedConfig {
	projects: SerializedConfig[];
}
type RuntimeConfig = Pick<SerializedConfig, "allowOnly" | "testTimeout" | "hookTimeout" | "clearMocks" | "mockReset" | "restoreMocks" | "fakeTimers" | "maxConcurrency" | "expect" | "printConsoleTrace"> & {
	sequence?: {
		hooks?: SequenceHooks;
	};
};
type RuntimeOptions = Partial<RuntimeConfig>;
type BrowserTraceViewMode = "on" | "off" | "on-first-retry" | "on-all-retries" | "retain-on-failure";

export type { BrowserTraceViewMode as B, FakeTimerInstallOpts as F, RuntimeOptions as R, SerializedConfig as S, SerializedCoverageConfig as a, SerializedRootConfig as b, RuntimeConfig as c };
