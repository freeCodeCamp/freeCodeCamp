import { NodeSnapshotEnvironment } from '@vitest/snapshot/environment';
export { SnapshotEnvironment } from '@vitest/snapshot/environment';

declare class VitestNodeSnapshotEnvironment extends NodeSnapshotEnvironment {
	getHeader(): string;
	resolvePath(filepath: string): Promise<string>;
}

export { VitestNodeSnapshotEnvironment as VitestSnapshotEnvironment };
