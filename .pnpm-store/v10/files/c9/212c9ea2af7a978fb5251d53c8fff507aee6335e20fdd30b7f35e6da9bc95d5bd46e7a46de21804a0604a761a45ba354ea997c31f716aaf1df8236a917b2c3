import { NodeSnapshotEnvironment } from '@vitest/snapshot/environment';
import { g as getWorkerState } from './utils.XdZDrNZV.js';
import '@vitest/utils';

class VitestNodeSnapshotEnvironment extends NodeSnapshotEnvironment {
	getHeader() {
		return `// Vitest Snapshot v${this.getVersion()}, https://vitest.dev/guide/snapshot.html`;
	}
	resolvePath(filepath) {
		const rpc = getWorkerState().rpc;
		return rpc.resolveSnapshotPath(filepath);
	}
}

export { VitestNodeSnapshotEnvironment };
