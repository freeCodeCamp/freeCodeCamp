import { S as SnapshotEnvironment, a as SnapshotEnvironmentOptions } from './environment.d-DOJxxZV9.js';
import '@vitest/utils';

declare class NodeSnapshotEnvironment implements SnapshotEnvironment {
	private options;
	constructor(options?: SnapshotEnvironmentOptions);
	getVersion(): string;
	getHeader(): string;
	resolveRawPath(testPath: string, rawPath: string): Promise<string>;
	resolvePath(filepath: string): Promise<string>;
	prepareDirectory(dirPath: string): Promise<void>;
	saveSnapshotFile(filepath: string, snapshot: string): Promise<void>;
	readSnapshotFile(filepath: string): Promise<string | null>;
	removeSnapshotFile(filepath: string): Promise<void>;
}

export { NodeSnapshotEnvironment, SnapshotEnvironment };
