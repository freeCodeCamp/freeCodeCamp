import { R as ResolvedCoverageOptions, V as Vitest, C as CoverageMap, a as ReportContext } from './chunks/reporters.d.BFLkQcL6.js';
import { TransformResult } from 'vite';
import { A as AfterSuiteRunMeta } from './chunks/environment.d.cL3nLXbE.js';
import '@vitest/runner';
import '@vitest/utils';
import 'node:stream';
import 'node:console';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import './chunks/worker.d.1GmBbd7G.js';
import 'vite-node';
import './chunks/config.d.D2ROskhv.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/snapshot/environment';
import '@vitest/utils/diff';
import 'chai';
import './chunks/benchmark.d.BwvBVTda.js';
import '@vitest/runner/utils';
import 'tinybench';
import './chunks/coverage.d.S9RMNXIe.js';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'node:fs';
import 'vitest/optional-types.js';

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
type CoverageFiles = Map<NonNullable<AfterSuiteRunMeta["projectName"]> | symbol, Record<AfterSuiteRunMeta["transformMode"], {
	[TestFilenames: string]: string
}>>;
declare class BaseCoverageProvider<Options extends ResolvedCoverageOptions<"istanbul" | "v8">> {
	ctx: Vitest;
	readonly name: "v8" | "istanbul";
	version: string;
	options: Options;
	coverageFiles: CoverageFiles;
	pendingPromises: Promise<void>[];
	coverageFilesDirectory: string;
	_initialize(ctx: Vitest): void;
	createCoverageMap(): CoverageMap;
	generateReports(_: CoverageMap, __: boolean | undefined): Promise<void>;
	parseConfigModule(_: string): Promise<{
		generate: () => {
			code: string
		}
	}>;
	resolveOptions(): Options;
	clean(clean?: boolean): Promise<void>;
	onAfterSuiteRun({ coverage, transformMode, projectName, testFiles }: AfterSuiteRunMeta): void;
	readCoverageFiles<CoverageType>({ onFileRead, onFinished, onDebug }: {
		/** Callback invoked with a single coverage result */
		onFileRead: (data: CoverageType) => void
		/** Callback invoked once all results of a project for specific transform mode are read */
		onFinished: (project: Vitest["projects"][number], transformMode: AfterSuiteRunMeta["transformMode"]) => Promise<void>
		onDebug: ((...logs: any[]) => void) & {
			enabled: boolean
		}
	}): Promise<void>;
	cleanAfterRun(): Promise<void>;
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
		thresholds: ResolvedThreshold[]
		configurationFile: unknown
		onUpdate: () => void
	}): Promise<void>;
	mergeReports(coverageMaps: unknown[]): Promise<void>;
	hasTerminalReporter(reporters: ResolvedCoverageOptions["reporter"]): boolean;
	toSlices<T>(array: T[], size: number): T[][];
	createUncoveredFileTransformer(ctx: Vitest): (filename: string) => Promise<TransformResult | null | undefined>;
}

export { BaseCoverageProvider };
