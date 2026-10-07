import { resolve } from 'pathe';
import { x } from 'tinyexec';

class VitestGit {
	root;
	constructor(cwd) {
		this.cwd = cwd;
	}
	async resolveFilesWithGitCommand(args) {
		let result;
		try {
			result = await x("git", args, { nodeOptions: { cwd: this.root } });
		} catch (e) {
			e.message = e.stderr;
			throw e;
		}
		return result.stdout.split("\n").filter((s) => s !== "").map((changedPath) => resolve(this.root, changedPath));
	}
	async findChangedFiles(options) {
		const root = await this.getRoot(this.cwd);
		if (!root) return null;
		this.root = root;
		const changedSince = options.changedSince;
		if (typeof changedSince === "string") {
			const [committed, staged, unstaged] = await Promise.all([
				this.getFilesSince(changedSince),
				this.getStagedFiles(),
				this.getUnstagedFiles()
			]);
			return [
				...committed,
				...staged,
				...unstaged
			];
		}
		const [staged, unstaged] = await Promise.all([this.getStagedFiles(), this.getUnstagedFiles()]);
		return [...staged, ...unstaged];
	}
	getFilesSince(hash) {
		return this.resolveFilesWithGitCommand([
			"diff",
			"--name-only",
			`${hash}...HEAD`
		]);
	}
	getStagedFiles() {
		return this.resolveFilesWithGitCommand([
			"diff",
			"--cached",
			"--name-only"
		]);
	}
	getUnstagedFiles() {
		return this.resolveFilesWithGitCommand([
			"ls-files",
			"--other",
			"--modified",
			"--exclude-standard"
		]);
	}
	async getRoot(cwd) {
		const args = ["rev-parse", "--show-cdup"];
		try {
			const result = await x("git", args, { nodeOptions: { cwd } });
			return resolve(cwd, result.stdout.trim());
		} catch {
			return null;
		}
	}
}

export { VitestGit };
