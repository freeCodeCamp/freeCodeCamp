interface ParsedStack {
	method: string;
	file: string;
	line: number;
	column: number;
}

interface SnapshotEnvironment {
	getVersion: () => string;
	getHeader: () => string;
	resolvePath: (filepath: string) => Promise<string>;
	resolveRawPath: (testPath: string, rawPath: string) => Promise<string>;
	saveSnapshotFile: (filepath: string, snapshot: string) => Promise<void>;
	readSnapshotFile: (filepath: string) => Promise<string | null>;
	removeSnapshotFile: (filepath: string) => Promise<void>;
	processStackTrace?: (stack: ParsedStack) => ParsedStack;
}
interface SnapshotEnvironmentOptions {
	snapshotsDirName?: string;
}

export type { ParsedStack as P, SnapshotEnvironment as S, SnapshotEnvironmentOptions as a };
