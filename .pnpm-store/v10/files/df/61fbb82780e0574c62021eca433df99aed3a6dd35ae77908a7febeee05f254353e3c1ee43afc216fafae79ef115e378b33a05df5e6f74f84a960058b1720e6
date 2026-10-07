import { PrettyFormatOptions } from '@vitest/pretty-format';
import { SequenceHooks, SequenceSetupFiles } from '@vitest/runner';
import { SnapshotUpdateState } from '@vitest/snapshot';
import { SnapshotEnvironment } from '@vitest/snapshot/environment';
import { SerializedDiffOptions } from '@vitest/utils/diff';

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
     * An array with names of global methods and APIs to fake.
     * For instance, `vi.useFakeTimer({ toFake: ['setTimeout', 'performance'] })` will fake only `setTimeout()` and `performance.now()`
     * @default everything available globally except `nextTick`
     */
    toFake?: FakeMethod[] | undefined;

    /**
     * The maximum number of timers that will be run when calling runAll()
     * @default 10000
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
     * Tells FakeTimers to clear 'native' (i.e. not fake) timers by delegating to their respective handlers.
     * @default true
     */
    shouldClearNativeTimers?: boolean | undefined;

    /**
     * Don't throw error when asked to fake timers that are not present.
     * @default false
     */
    ignoreMissingTimers?: boolean | undefined;
}

/**
* Config that tests have access to.
*/
interface SerializedConfig {
	name: string | undefined;
	globals: boolean;
	base: string | undefined;
	snapshotEnvironment?: string;
	disableConsoleIntercept: boolean | undefined;
	runner: string | undefined;
	isolate: boolean;
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
	// TODO: make optional
	fakeTimers: FakeTimerInstallOpts;
	maxConcurrency: number;
	defines: Record<string, any>;
	expect: {
		requireAssertions?: boolean
		poll?: {
			timeout?: number
			interval?: number
		}
	};
	printConsoleTrace: boolean | undefined;
	sequence: {
		shuffle?: boolean
		concurrent?: boolean
		seed: number
		hooks: SequenceHooks
		setupFiles: SequenceSetupFiles
	};
	poolOptions: {
		forks: {
			singleFork: boolean
			isolate: boolean
		}
		threads: {
			singleThread: boolean
			isolate: boolean
		}
		vmThreads: {
			singleThread: boolean
		}
		vmForks: {
			singleFork: boolean
		}
	};
	deps: {
		web: {
			transformAssets?: boolean
			transformCss?: boolean
			transformGlobPattern?: RegExp | RegExp[]
		}
		optimizer: {
			web: {
				enabled: boolean
			}
			ssr: {
				enabled: boolean
			}
		}
		interopDefault: boolean | undefined
		moduleDirectories: string[] | undefined
	};
	snapshotOptions: {
		updateSnapshot: SnapshotUpdateState
		expand: boolean | undefined
		snapshotFormat: PrettyFormatOptions | undefined
		/**
		* only exists for tests, not available in the main process
		*/
		snapshotEnvironment: SnapshotEnvironment
	};
	pool: string;
	snapshotSerializers: string[];
	chaiConfig: {
		includeStack?: boolean
		showDiff?: boolean
		truncateThreshold?: number
	} | undefined;
	diff: string | SerializedDiffOptions | undefined;
	retry: number;
	includeTaskLocation: boolean | undefined;
	inspect: boolean | string | undefined;
	inspectBrk: boolean | string | undefined;
	inspector: {
		enabled?: boolean
		port?: number
		host?: string
		waitForDebugger?: boolean
	};
	watch: boolean;
	env: Record<string, any>;
	browser: {
		name: string
		headless: boolean
		isolate: boolean
		fileParallelism: boolean
		ui: boolean
		viewport: {
			width: number
			height: number
		}
		locators: {
			testIdAttribute: string
		}
		screenshotFailures: boolean
		providerOptions: {
			// for playwright
			actionTimeout?: number
		}
	};
	standalone: boolean;
	logHeapUsage: boolean | undefined;
	coverage: SerializedCoverageConfig;
	benchmark: {
		includeSamples: boolean
	} | undefined;
}
interface SerializedCoverageConfig {
	provider: "istanbul" | "v8" | "custom" | undefined;
	reportsDirectory: string;
	htmlReporter: {
		subdir: string | undefined
	} | undefined;
	enabled: boolean;
	customProviderModule: string | undefined;
}
type RuntimeConfig = Pick<SerializedConfig, "allowOnly" | "testTimeout" | "hookTimeout" | "clearMocks" | "mockReset" | "restoreMocks" | "fakeTimers" | "maxConcurrency" | "expect" | "printConsoleTrace"> & {
	sequence?: {
		hooks?: SequenceHooks
	}
};
type RuntimeOptions = Partial<RuntimeConfig>;

export type { FakeTimerInstallOpts as F, RuntimeOptions as R, SerializedCoverageConfig as S, SerializedConfig as a, RuntimeConfig as b };
