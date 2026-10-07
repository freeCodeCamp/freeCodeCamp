import { NodeSnapshotEnvironment } from '@vitest/snapshot/environment';
import { g as getWorkerState } from './utils.BX5Fg8C4.js';
import '@vitest/utils/timers';

class VitestNodeSnapshotEnvironment extends NodeSnapshotEnvironment {
	getHeader() {
		return `// Vitest Snapshot v${this.getVersion()}, https://vitest.dev/guide/snapshot.html`;
	}
	resolvePath(filepath) {
		return getWorkerState().rpc.resolveSnapshotPath(filepath);
	}
}

export { VitestNodeSnapshotEnvironment };
