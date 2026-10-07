import { S as SnapshotStateOptions, e as SnapshotSummary, b as SnapshotResult } from './rawSnapshot.d-lFsMJFUd.js';
import '@vitest/pretty-format';
import './environment.d-DHdQ1Csl.js';

declare class SnapshotManager {
	options: Omit<SnapshotStateOptions, "snapshotEnvironment">;
	summary: SnapshotSummary;
	extension: string;
	constructor(options: Omit<SnapshotStateOptions, "snapshotEnvironment">);
	clear(): void;
	add(result: SnapshotResult): void;
	resolvePath<T = any>(testPath: string, context?: T): string;
	resolveRawPath(testPath: string, rawPath: string): string;
}
declare function emptySummary(options: Omit<SnapshotStateOptions, "snapshotEnvironment">): SnapshotSummary;
declare function addSnapshotResult(summary: SnapshotSummary, result: SnapshotResult): void;

export { SnapshotManager, addSnapshotResult, emptySummary };
