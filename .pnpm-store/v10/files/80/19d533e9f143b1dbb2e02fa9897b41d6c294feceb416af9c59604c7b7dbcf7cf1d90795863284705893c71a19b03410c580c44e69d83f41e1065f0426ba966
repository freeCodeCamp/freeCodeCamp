import { promises, existsSync } from 'node:fs';
import { resolve, isAbsolute, dirname, join, basename } from 'pathe';

class NodeSnapshotEnvironment {
	constructor(options = {}) {
		this.options = options;
	}
	getVersion() {
		return "1";
	}
	getHeader() {
		return `// Snapshot v${this.getVersion()}`;
	}
	async resolveRawPath(testPath, rawPath) {
		return isAbsolute(rawPath) ? rawPath : resolve(dirname(testPath), rawPath);
	}
	async resolvePath(filepath) {
		return join(join(dirname(filepath), this.options.snapshotsDirName ?? "__snapshots__"), `${basename(filepath)}.snap`);
	}
	async prepareDirectory(dirPath) {
		await promises.mkdir(dirPath, { recursive: true });
	}
	async saveSnapshotFile(filepath, snapshot) {
		await promises.mkdir(dirname(filepath), { recursive: true });
		await promises.writeFile(filepath, snapshot, "utf-8");
	}
	async readSnapshotFile(filepath) {
		if (!existsSync(filepath)) {
			return null;
		}
		return promises.readFile(filepath, "utf-8");
	}
	async removeSnapshotFile(filepath) {
		if (existsSync(filepath)) {
			await promises.unlink(filepath);
		}
	}
}

export { NodeSnapshotEnvironment };
