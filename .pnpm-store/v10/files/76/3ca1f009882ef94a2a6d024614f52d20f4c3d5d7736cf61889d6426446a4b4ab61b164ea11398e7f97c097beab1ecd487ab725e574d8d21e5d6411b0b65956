import { join, dirname, basename, resolve, isAbsolute } from 'pathe';

class SnapshotManager {
	summary;
	extension = ".snap";
	constructor(options) {
		this.options = options;
		this.clear();
	}
	clear() {
		this.summary = emptySummary(this.options);
	}
	add(result) {
		addSnapshotResult(this.summary, result);
	}
	resolvePath(testPath, context) {
		const resolver = this.options.resolveSnapshotPath || (() => {
			return join(join(dirname(testPath), "__snapshots__"), `${basename(testPath)}${this.extension}`);
		});
		const path = resolver(testPath, this.extension, context);
		return path;
	}
	resolveRawPath(testPath, rawPath) {
		return isAbsolute(rawPath) ? rawPath : resolve(dirname(testPath), rawPath);
	}
}
function emptySummary(options) {
	const summary = {
		added: 0,
		failure: false,
		filesAdded: 0,
		filesRemoved: 0,
		filesRemovedList: [],
		filesUnmatched: 0,
		filesUpdated: 0,
		matched: 0,
		total: 0,
		unchecked: 0,
		uncheckedKeysByFile: [],
		unmatched: 0,
		updated: 0,
		didUpdate: options.updateSnapshot === "all"
	};
	return summary;
}
function addSnapshotResult(summary, result) {
	if (result.added) {
		summary.filesAdded++;
	}
	if (result.fileDeleted) {
		summary.filesRemoved++;
	}
	if (result.unmatched) {
		summary.filesUnmatched++;
	}
	if (result.updated) {
		summary.filesUpdated++;
	}
	summary.added += result.added;
	summary.matched += result.matched;
	summary.unchecked += result.unchecked;
	if (result.uncheckedKeys && result.uncheckedKeys.length > 0) {
		summary.uncheckedKeysByFile.push({
			filePath: result.filepath,
			keys: result.uncheckedKeys
		});
	}
	summary.unmatched += result.unmatched;
	summary.updated += result.updated;
	summary.total += result.added + result.matched + result.unmatched + result.updated;
}

export { SnapshotManager, addSnapshotResult, emptySummary };
