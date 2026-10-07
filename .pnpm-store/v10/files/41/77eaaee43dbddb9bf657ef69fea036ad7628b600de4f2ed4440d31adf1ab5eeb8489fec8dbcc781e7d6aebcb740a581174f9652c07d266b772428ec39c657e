import { a as SerializedCoverageConfig, S as SerializedConfig } from './chunks/config.d.A1h_Y6Jt.js';
import { R as RuntimeCoverageModuleLoader } from './chunks/coverage.d.BZtK59WP.js';
import { SerializedDiffOptions } from '@vitest/utils/diff';
export { O as OTELCarrier, T as Traces } from './chunks/traces.d.D2T_R8rx.js';
export { collectTests, startTests } from '@vitest/runner';
import * as _vitest_spy from '@vitest/spy';
export { _vitest_spy as SpyModule };
export { LoupeOptions, ParsedStack, StringifyOptions } from '@vitest/utils';
export { browserFormat, format, inspect, stringify } from '@vitest/utils/display';
export { processError } from '@vitest/utils/error';
export { getType } from '@vitest/utils/helpers';
export { DecodedMap, getOriginalPosition } from '@vitest/utils/source-map';
export { getSafeTimers, setSafeTimers } from '@vitest/utils/timers';
import '@vitest/pretty-format';
import '@vitest/snapshot';

declare function startCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: RuntimeCoverageModuleLoader, runtimeOptions: {
	isolate: boolean;
}): Promise<unknown>;
declare function takeCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: RuntimeCoverageModuleLoader): Promise<unknown>;
declare function stopCoverageInsideWorker(options: SerializedCoverageConfig | undefined, loader: RuntimeCoverageModuleLoader, runtimeOptions: {
	isolate: boolean;
}): Promise<unknown>;

interface PublicModuleRunner {
	import: (id: string) => Promise<any>;
}

declare function setupCommonEnv(config: SerializedConfig): Promise<void>;
declare function loadDiffConfig(config: SerializedConfig, moduleRunner: PublicModuleRunner): Promise<SerializedDiffOptions | undefined>;
declare function loadSnapshotSerializers(config: SerializedConfig, moduleRunner: PublicModuleRunner): Promise<void>;

interface FsOptions {
	encoding?: BufferEncoding;
	flag?: string | number;
}
interface BrowserCommands {
	readFile: (path: string, options?: BufferEncoding | FsOptions) => Promise<string>;
	writeFile: (path: string, content: string, options?: BufferEncoding | (FsOptions & {
		mode?: number | string;
	})) => Promise<void>;
	removeFile: (path: string) => Promise<void>;
}
interface CDPSession {}

export { loadDiffConfig, loadSnapshotSerializers, setupCommonEnv, startCoverageInsideWorker, stopCoverageInsideWorker, takeCoverageInsideWorker };
export type { BrowserCommands, CDPSession, FsOptions };
