import { V as Vitest, av as ResolvedCoverageOptions, a$ as CoverageMap, ao as ReportContext, T as TestProject } from './chunks/reporters.d.CEnv6XRv.js';
import { TransformResult } from 'vite';
import { a as AfterSuiteRunMeta } from './chunks/traces.d.D2T_R8rx.js';
import '@vitest/runner';
import '@vitest/utils';
import 'node:stream';
import './chunks/config.d.A1h_Y6Jt.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/utils/diff';
import './chunks/browser.d.BcoexmFG.js';
import './chunks/worker.d.ZpHpO4yb.js';
import 'vite/module-runner';
import './chunks/environment.d.CrsxCzP1.js';
import './chunks/rpc.d.B_8sPU0w.js';
import '@vitest/expect';
import 'vitest/optional-types.js';
import './chunks/benchmark.d.DAaHLpsq.js';
import '@vitest/runner/utils';
import 'tinybench';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import 'vitest/browser';
import './chunks/coverage.d.BZtK59WP.js';
import '@vitest/snapshot/manager';
import 'node:console';
import 'node:fs';

type Threshold = "lines" | "functions" | "statements" | "branches";
interface ResolvedThreshold {
	coverageMap: CoverageMap;
	name: string;
	thresholds: Partial<Record<Threshold, number | undefined>>;
}
/**
* Holds info about raw coverage results that are stored on file system:
*
* ```json
* "project-a": {
*   "web": {
*     "tests/math.test.ts": "coverage-1.json",
*     "tests/utils.test.ts": "coverage-2.json",
* //                          ^^^^^^^^^^^^^^^ Raw coverage on file system
*   },
*   "ssr": { ... },
*   "browser": { ... },
* },
* "project-b": ...
* ```
*/
type CoverageFiles = Map<NonNullable<AfterSuiteRunMeta["projectName"]> | symbol, Record<AfterSuiteRunMeta["environment"], {
	[TestFilenames: string]: string;
}>>;
declare class BaseCoverageProvider {
	ctx: Vitest;
	readonly name: "v8" | "istanbul";
	version: string;
	options: ResolvedCoverageOptions;
	globCache: Map<string, boolean>;
	autoUpdateMarker: string;
	coverageFiles: CoverageFiles;
	pendingPromises: Promise<void>[];
	coverageFilesDirectory: string;
	roots: string[];
	changedFiles?: string[];
	_initialize(ctx: Vitest): void;
	/**
	* Check if file matches `coverage.include` but not `coverage.exclude`
	*/
	isIncluded(_filename: string, root?: string): boolean;
	private getUntestedFilesByRoot;
	getUntestedFiles(testedFiles: string[]): Promise<string[]>;
	createCoverageMap(): CoverageMap;
	generateReports(_: CoverageMap, __: boolean | undefined): Promise<void>;
	parseConfigModule(_: string): Promise<{
		generate: () => {
			code: string;
		};
	}>;
	resolveOptions(): ResolvedCoverageOptions;
	clean(clean?: boolean): Promise<void>;
	private normalizeCoverageFileError;
	onAfterSuiteRun({ coverage, environment, projectName, testFiles }: AfterSuiteRunMeta): void;
	readCoverageFiles<CoverageType>({ onFileRead, onFinished, onDebug }: {
		/** Callback invoked with a single coverage result */
		onFileRead: (data: CoverageType) => void;
		/** Callback invoked once all results of a project for specific transform mode are read */
		onFinished: (project: Vitest["projects"][number], environment: string) => Promise<void>;
		onDebug: ((...logs: any[]) => void) & {
			enabled: boolean;
		};
	}): Promise<void>;
	cleanAfterRun(): Promise<void>;
	onTestRunStart(): Promise<void>;
	onTestFailure(): Promise<void>;
	reportCoverage(coverageMap: unknown, { allTestsRun }: ReportContext): Promise<void>;
	reportThresholds(coverageMap: CoverageMap, allTestsRun: boolean | undefined): Promise<void>;
	/**
	* Constructs collected coverage and users' threshold options into separate sets
	* where each threshold set holds their own coverage maps. Threshold set is either
	* for specific files defined by glob pattern or global for all other files.
	*/
	private resolveThresholds;
	/**
	* Check collected coverage against configured thresholds. Sets exit code to 1 when thresholds not reached.
	*/
	private checkThresholds;
	/**
	* Check if current coverage is above configured thresholds and bump the thresholds if needed
	*/
	updateThresholds({ thresholds: allThresholds, onUpdate, configurationFile }: {
		thresholds: ResolvedThreshold[];
		configurationFile: unknown;
		onUpdate: () => void;
	}): Promise<void>;
	mergeReports(coverageMaps: unknown[]): Promise<void>;
	hasTerminalReporter(reporters: ResolvedCoverageOptions["reporter"]): boolean;
	toSlices<T>(array: T[], size: number): T[][];
	transformFile(url: string, project: TestProject, viteEnvironment: string): Promise<TransformResult | null | undefined>;
	createUncoveredFileTransformer(ctx: Vitest): (filename: string) => Promise<TransformResult | null | undefined>;
}

export { BaseCoverageProvider };
