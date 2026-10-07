import { performance as performance$1 } from 'node:perf_hooks';
import { getTestName, getFullName, hasFailed, getTests, getSuites, getTasks } from '@vitest/runner/utils';
import { slash, toArray, isPrimitive, inspect, positionToOffset, lineSplitRE } from '@vitest/utils';
import { parseStacktrace, parseErrorStacktrace } from '@vitest/utils/source-map';
import { isAbsolute, relative, dirname, basename, resolve, normalize } from 'pathe';
import c from 'tinyrainbow';
import { i as isTTY } from './env.D4Lgay0q.js';
import { h as hasFailedSnapshot, g as getOutputFile, T as TypeCheckError } from './typechecker.DRKU1-1g.js';
import { stripVTControlCharacters } from 'node:util';
import { existsSync, readFileSync, promises } from 'node:fs';
import { mkdir, writeFile, readdir, stat, readFile } from 'node:fs/promises';
import { Console } from 'node:console';
import { Writable } from 'node:stream';
import { createRequire } from 'node:module';
import { hostname } from 'node:os';

const F_RIGHT = "→";
const F_DOWN = "↓";
const F_DOWN_RIGHT = "↳";
const F_POINTER = "❯";
const F_DOT = "·";
const F_CHECK = "✓";
const F_CROSS = "×";
const F_LONG_DASH = "⎯";
const F_TREE_NODE_MIDDLE = "├──";
const F_TREE_NODE_END = "└──";

const pointer = c.yellow(F_POINTER);
const skipped = c.dim(c.gray(F_DOWN));
const benchmarkPass = c.green(F_DOT);
const testPass = c.green(F_CHECK);
const taskFail = c.red(F_CROSS);
const suiteFail = c.red(F_POINTER);
const pending$1 = c.gray("·");
const labelDefaultColors = [
	c.bgYellow,
	c.bgCyan,
	c.bgGreen,
	c.bgMagenta
];
function getCols(delta = 0) {
	let length = process.stdout?.columns;
	if (!length || Number.isNaN(length)) length = 30;
	return Math.max(length + delta, 0);
}
function errorBanner(message) {
	return divider(c.bold(c.bgRed(` ${message} `)), null, null, c.red);
}
function divider(text, left, right, color) {
	const cols = getCols();
	const c = color || ((text) => text);
	if (text) {
		const textLength = stripVTControlCharacters(text).length;
		if (left == null && right != null) left = cols - textLength - right;
		else {
			left = left ?? Math.floor((cols - textLength) / 2);
			right = cols - textLength - left;
		}
		left = Math.max(0, left);
		right = Math.max(0, right);
		return `${c(F_LONG_DASH.repeat(left))}${text}${c(F_LONG_DASH.repeat(right))}`;
	}
	return F_LONG_DASH.repeat(cols);
}
function formatTestPath(root, path) {
	if (isAbsolute(path)) path = relative(root, path);
	const dir = dirname(path);
	const ext = path.match(/(\.(spec|test)\.[cm]?[tj]sx?)$/)?.[0] || "";
	const base = basename(path, ext);
	return slash(c.dim(`${dir}/`) + c.bold(base)) + c.dim(ext);
}
function renderSnapshotSummary(rootDir, snapshots) {
	const summary = [];
	if (snapshots.added) summary.push(c.bold(c.green(`${snapshots.added} written`)));
	if (snapshots.unmatched) summary.push(c.bold(c.red(`${snapshots.unmatched} failed`)));
	if (snapshots.updated) summary.push(c.bold(c.green(`${snapshots.updated} updated `)));
	if (snapshots.filesRemoved) if (snapshots.didUpdate) summary.push(c.bold(c.green(`${snapshots.filesRemoved} files removed `)));
	else summary.push(c.bold(c.yellow(`${snapshots.filesRemoved} files obsolete `)));
	if (snapshots.filesRemovedList && snapshots.filesRemovedList.length) {
		const [head, ...tail] = snapshots.filesRemovedList;
		summary.push(`${c.gray(F_DOWN_RIGHT)} ${formatTestPath(rootDir, head)}`);
		tail.forEach((key) => {
			summary.push(`  ${c.gray(F_DOT)} ${formatTestPath(rootDir, key)}`);
		});
	}
	if (snapshots.unchecked) {
		if (snapshots.didUpdate) summary.push(c.bold(c.green(`${snapshots.unchecked} removed`)));
		else summary.push(c.bold(c.yellow(`${snapshots.unchecked} obsolete`)));
		snapshots.uncheckedKeysByFile.forEach((uncheckedFile) => {
			summary.push(`${c.gray(F_DOWN_RIGHT)} ${formatTestPath(rootDir, uncheckedFile.filePath)}`);
			uncheckedFile.keys.forEach((key) => summary.push(`  ${c.gray(F_DOT)} ${key}`));
		});
	}
	return summary;
}
function countTestErrors(tasks) {
	return tasks.reduce((c, i) => c + (i.result?.errors?.length || 0), 0);
}
function getStateString$1(tasks, name = "tests", showTotal = true) {
	if (tasks.length === 0) return c.dim(`no ${name}`);
	const passed = tasks.filter((i) => i.result?.state === "pass");
	const failed = tasks.filter((i) => i.result?.state === "fail");
	const skipped = tasks.filter((i) => i.mode === "skip");
	const todo = tasks.filter((i) => i.mode === "todo");
	return [
		failed.length ? c.bold(c.red(`${failed.length} failed`)) : null,
		passed.length ? c.bold(c.green(`${passed.length} passed`)) : null,
		skipped.length ? c.yellow(`${skipped.length} skipped`) : null,
		todo.length ? c.gray(`${todo.length} todo`) : null
	].filter(Boolean).join(c.dim(" | ")) + (showTotal ? c.gray(` (${tasks.length})`) : "");
}
function getStateSymbol(task) {
	if (task.mode === "skip" || task.mode === "todo") return skipped;
	if (!task.result) return pending$1;
	if (task.result.state === "run" || task.result.state === "queued") {
		if (task.type === "suite") return pointer;
	}
	if (task.result.state === "pass") return task.meta?.benchmark ? benchmarkPass : testPass;
	if (task.result.state === "fail") return task.type === "suite" ? suiteFail : taskFail;
	return " ";
}
function formatTimeString(date) {
	return date.toTimeString().split(" ")[0];
}
function formatTime(time) {
	if (time > 1e3) return `${(time / 1e3).toFixed(2)}s`;
	return `${Math.round(time)}ms`;
}
function formatProjectName(project, suffix = " ") {
	if (!project?.name) return "";
	if (!c.isColorSupported) return `|${project.name}|${suffix}`;
	let background = project.color && c[`bg${capitalize(project.color)}`];
	if (!background) {
		const index = project.name.split("").reduce((acc, v, idx) => acc + v.charCodeAt(0) + idx, 0);
		background = labelDefaultColors[index % labelDefaultColors.length];
	}
	return c.black(background(` ${project.name} `)) + suffix;
}
function withLabel(color, label, message) {
	const bgColor = `bg${color.charAt(0).toUpperCase()}${color.slice(1)}`;
	return `${c.bold(c[bgColor](` ${label} `))} ${message ? c[color](message) : ""}`;
}
function padSummaryTitle(str) {
	return c.dim(`${str.padStart(11)} `);
}
function truncateString(text, maxLength) {
	const plainText = stripVTControlCharacters(text);
	if (plainText.length <= maxLength) return text;
	return `${plainText.slice(0, maxLength - 1)}…`;
}
function capitalize(text) {
	return `${text[0].toUpperCase()}${text.slice(1)}`;
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  benchmarkPass: benchmarkPass,
  countTestErrors: countTestErrors,
  divider: divider,
  errorBanner: errorBanner,
  formatProjectName: formatProjectName,
  formatTestPath: formatTestPath,
  formatTime: formatTime,
  formatTimeString: formatTimeString,
  getStateString: getStateString$1,
  getStateSymbol: getStateSymbol,
  padSummaryTitle: padSummaryTitle,
  pending: pending$1,
  pointer: pointer,
  renderSnapshotSummary: renderSnapshotSummary,
  skipped: skipped,
  suiteFail: suiteFail,
  taskFail: taskFail,
  testPass: testPass,
  truncateString: truncateString,
  withLabel: withLabel
});

const BADGE_PADDING = "       ";
class BaseReporter {
	start = 0;
	end = 0;
	watchFilters;
	failedUnwatchedFiles = [];
	isTTY;
	ctx = void 0;
	renderSucceed = false;
	verbose = false;
	_filesInWatchMode = /* @__PURE__ */ new Map();
	_timeStart = formatTimeString(/* @__PURE__ */ new Date());
	constructor(options = {}) {
		this.isTTY = options.isTTY ?? isTTY;
	}
	onInit(ctx) {
		this.ctx = ctx;
		this.ctx.logger.printBanner();
		this.start = performance$1.now();
	}
	log(...messages) {
		this.ctx.logger.log(...messages);
	}
	error(...messages) {
		this.ctx.logger.error(...messages);
	}
	relative(path) {
		return relative(this.ctx.config.root, path);
	}
	onFinished(files = this.ctx.state.getFiles(), errors = this.ctx.state.getUnhandledErrors()) {
		this.end = performance$1.now();
		if (!files.length && !errors.length) this.ctx.logger.printNoTestFound(this.ctx.filenamePattern);
		else this.reportSummary(files, errors);
	}
	onTestCaseResult(testCase) {
		if (testCase.result().state === "failed") this.logFailedTask(testCase.task);
	}
	onTestSuiteResult(testSuite) {
		if (testSuite.state() === "failed") this.logFailedTask(testSuite.task);
	}
	onTestModuleEnd(testModule) {
		if (testModule.state() === "failed") this.logFailedTask(testModule.task);
		this.printTestModule(testModule);
	}
	logFailedTask(task) {
		if (this.ctx.config.silent === "passed-only") for (const log of task.logs || []) this.onUserConsoleLog(log, "failed");
	}
	printTestModule(testModule) {
		const moduleState = testModule.state();
		if (moduleState === "queued" || moduleState === "pending") return;
		let testsCount = 0;
		let failedCount = 0;
		let skippedCount = 0;
		// delaying logs to calculate the test stats first
		// which minimizes the amount of for loops
		const logs = [];
		const originalLog = this.log.bind(this);
		this.log = (msg) => logs.push(msg);
		const visit = (suiteState, children) => {
			for (const child of children) if (child.type === "suite") {
				const suiteState = child.state();
				// Skipped suites are hidden when --hideSkippedTests, print otherwise
				if (!this.ctx.config.hideSkippedTests || suiteState !== "skipped") this.printTestSuite(child);
				visit(suiteState, child.children);
			} else {
				const testResult = child.result();
				testsCount++;
				if (testResult.state === "failed") failedCount++;
				else if (testResult.state === "skipped") skippedCount++;
				if (this.ctx.config.hideSkippedTests && suiteState === "skipped")
 // Skipped suites are hidden when --hideSkippedTests
				continue;
				this.printTestCase(moduleState, child);
			}
		};
		try {
			visit(moduleState, testModule.children);
		} finally {
			this.log = originalLog;
		}
		this.log(this.getModuleLog(testModule, {
			tests: testsCount,
			failed: failedCount,
			skipped: skippedCount
		}));
		logs.forEach((log) => this.log(log));
	}
	printTestCase(moduleState, test) {
		const testResult = test.result();
		const { duration, retryCount, repeatCount } = test.diagnostic() || {};
		const padding = this.getTestIndentation(test.task);
		let suffix = this.getDurationPrefix(test.task);
		if (retryCount != null && retryCount > 0) suffix += c.yellow(` (retry x${retryCount})`);
		if (repeatCount != null && repeatCount > 0) suffix += c.yellow(` (repeat x${repeatCount})`);
		if (testResult.state === "failed") {
			this.log(c.red(` ${padding}${taskFail} ${this.getTestName(test.task, c.dim(" > "))}`) + suffix);
			// print short errors, full errors will be at the end in summary
			testResult.errors.forEach((error) => {
				const message = this.formatShortError(error);
				if (message) this.log(c.red(`   ${padding}${message}`));
			});
		} else if (duration && duration > this.ctx.config.slowTestThreshold) this.log(` ${padding}${c.yellow(c.dim(F_CHECK))} ${this.getTestName(test.task, c.dim(" > "))} ${suffix}`);
		else if (this.ctx.config.hideSkippedTests && testResult.state === "skipped") ; else if (testResult.state === "skipped" && testResult.note) this.log(` ${padding}${getStateSymbol(test.task)} ${this.getTestName(test.task, c.dim(" > "))}${c.dim(c.gray(` [${testResult.note}]`))}`);
		else if (this.renderSucceed || moduleState === "failed") this.log(` ${padding}${getStateSymbol(test.task)} ${this.getTestName(test.task, c.dim(" > "))}${suffix}`);
	}
	getModuleLog(testModule, counts) {
		let state = c.dim(`${counts.tests} test${counts.tests > 1 ? "s" : ""}`);
		if (counts.failed) state += c.dim(" | ") + c.red(`${counts.failed} failed`);
		if (counts.skipped) state += c.dim(" | ") + c.yellow(`${counts.skipped} skipped`);
		let suffix = c.dim("(") + state + c.dim(")") + this.getDurationPrefix(testModule.task);
		const diagnostic = testModule.diagnostic();
		if (diagnostic.heap != null) suffix += c.magenta(` ${Math.floor(diagnostic.heap / 1024 / 1024)} MB heap used`);
		let title = getStateSymbol(testModule.task);
		if (testModule.meta().typecheck) title += ` ${c.bgBlue(c.bold(" TS "))}`;
		if (testModule.project.name) title += ` ${formatProjectName(testModule.project, "")}`;
		return ` ${title} ${testModule.task.name} ${suffix}`;
	}
	printTestSuite(_suite) {
		// Suite name is included in getTestName by default
	}
	getTestName(test, separator) {
		return getTestName(test, separator);
	}
	getFullName(test, separator) {
		return getFullName(test, separator);
	}
	formatShortError(error) {
		return `${F_RIGHT} ${error.message}`;
	}
	getTestIndentation(_test) {
		return "  ";
	}
	printAnnotations(test, console, padding = 0) {
		const annotations = test.annotations();
		if (!annotations.length) return;
		const PADDING = " ".repeat(padding);
		annotations.forEach(({ location, type, message }) => {
			if (location) {
				const file = relative(test.project.config.root, location.file);
				this[console](`${PADDING}${c.blue(F_POINTER)} ${c.gray(`${file}:${location.line}:${location.column}`)} ${c.bold(type)}`);
			} else this[console](`${PADDING}${c.blue(F_POINTER)} ${c.bold(type)}`);
			this[console](`${PADDING}  ${c.blue(F_DOWN_RIGHT)} ${message}`);
		});
	}
	getDurationPrefix(task) {
		if (!task.result?.duration) return "";
		const color = task.result.duration > this.ctx.config.slowTestThreshold ? c.yellow : c.green;
		return color(` ${Math.round(task.result.duration)}${c.dim("ms")}`);
	}
	onWatcherStart(files = this.ctx.state.getFiles(), errors = this.ctx.state.getUnhandledErrors()) {
		const failed = errors.length > 0 || hasFailed(files);
		if (failed) this.log(withLabel("red", "FAIL", "Tests failed. Watching for file changes..."));
		else if (this.ctx.isCancelling) this.log(withLabel("red", "CANCELLED", "Test run cancelled. Watching for file changes..."));
		else this.log(withLabel("green", "PASS", "Waiting for file changes..."));
		const hints = [c.dim("press ") + c.bold("h") + c.dim(" to show help")];
		if (hasFailedSnapshot(files)) hints.unshift(c.dim("press ") + c.bold(c.yellow("u")) + c.dim(" to update snapshot"));
		else hints.push(c.dim("press ") + c.bold("q") + c.dim(" to quit"));
		this.log(BADGE_PADDING + hints.join(c.dim(", ")));
	}
	onWatcherRerun(files, trigger) {
		this.watchFilters = files;
		this.failedUnwatchedFiles = this.ctx.state.getTestModules().filter((testModule) => !files.includes(testModule.task.filepath) && testModule.state() === "failed");
		// Update re-run count for each file
		files.forEach((filepath) => {
			let reruns = this._filesInWatchMode.get(filepath) ?? 0;
			this._filesInWatchMode.set(filepath, ++reruns);
		});
		let banner = trigger ? c.dim(`${this.relative(trigger)} `) : "";
		if (files.length === 1) {
			const rerun = this._filesInWatchMode.get(files[0]) ?? 1;
			banner += c.blue(`x${rerun} `);
		}
		this.ctx.logger.clearFullScreen();
		this.log(withLabel("blue", "RERUN", banner));
		if (this.ctx.configOverride.project) this.log(BADGE_PADDING + c.dim(" Project name: ") + c.blue(toArray(this.ctx.configOverride.project).join(", ")));
		if (this.ctx.filenamePattern) this.log(BADGE_PADDING + c.dim(" Filename pattern: ") + c.blue(this.ctx.filenamePattern.join(", ")));
		if (this.ctx.configOverride.testNamePattern) this.log(BADGE_PADDING + c.dim(" Test name pattern: ") + c.blue(String(this.ctx.configOverride.testNamePattern)));
		this.log("");
		for (const testModule of this.failedUnwatchedFiles) this.printTestModule(testModule);
		this._timeStart = formatTimeString(/* @__PURE__ */ new Date());
		this.start = performance$1.now();
	}
	onUserConsoleLog(log, taskState) {
		if (!this.shouldLog(log, taskState)) return;
		const output = log.type === "stdout" ? this.ctx.logger.outputStream : this.ctx.logger.errorStream;
		const write = (msg) => output.write(msg);
		let headerText = "unknown test";
		const task = log.taskId ? this.ctx.state.idMap.get(log.taskId) : void 0;
		if (task) headerText = this.getFullName(task, c.dim(" > "));
		else if (log.taskId && log.taskId !== "__vitest__unknown_test__") headerText = log.taskId;
		write(c.gray(log.type + c.dim(` | ${headerText}\n`)) + log.content);
		if (log.origin) {
			// browser logs don't have an extra end of line at the end like Node.js does
			if (log.browser) write("\n");
			const project = task ? this.ctx.getProjectByName(task.file.projectName || "") : this.ctx.getRootProject();
			const stack = log.browser ? project.browser?.parseStacktrace(log.origin) || [] : parseStacktrace(log.origin);
			const highlight = task && stack.find((i) => i.file === task.file.filepath);
			for (const frame of stack) {
				const color = frame === highlight ? c.cyan : c.gray;
				const path = relative(project.config.root, frame.file);
				const positions = [frame.method, `${path}:${c.dim(`${frame.line}:${frame.column}`)}`].filter(Boolean).join(" ");
				write(color(` ${c.dim(F_POINTER)} ${positions}\n`));
			}
		}
		write("\n");
	}
	onTestRemoved(trigger) {
		this.log(c.yellow("Test removed...") + (trigger ? c.dim(` [ ${this.relative(trigger)} ]\n`) : ""));
	}
	shouldLog(log, taskState) {
		if (this.ctx.config.silent === true) return false;
		if (this.ctx.config.silent === "passed-only" && taskState !== "failed") return false;
		const shouldLog = this.ctx.config.onConsoleLog?.(log.content, log.type);
		if (shouldLog === false) return shouldLog;
		return true;
	}
	onServerRestart(reason) {
		this.log(c.bold(c.magenta(reason === "config" ? "\nRestarting due to config changes..." : "\nRestarting Vitest...")));
	}
	reportSummary(files, errors) {
		this.printErrorsSummary(files, errors);
		if (this.ctx.config.mode === "benchmark") this.reportBenchmarkSummary(files);
		else this.reportTestSummary(files, errors);
	}
	reportTestSummary(files, errors) {
		this.log();
		const affectedFiles = [...this.failedUnwatchedFiles.map((m) => m.task), ...files];
		const tests = getTests(affectedFiles);
		const snapshotOutput = renderSnapshotSummary(this.ctx.config.root, this.ctx.snapshot.summary);
		for (const [index, snapshot] of snapshotOutput.entries()) {
			const title = index === 0 ? "Snapshots" : "";
			this.log(`${padSummaryTitle(title)} ${snapshot}`);
		}
		if (snapshotOutput.length > 1) this.log();
		this.log(padSummaryTitle("Test Files"), getStateString$1(affectedFiles));
		this.log(padSummaryTitle("Tests"), getStateString$1(tests));
		if (this.ctx.projects.some((c) => c.config.typecheck.enabled)) {
			const failed = tests.filter((t) => t.meta?.typecheck && t.result?.errors?.length);
			this.log(padSummaryTitle("Type Errors"), failed.length ? c.bold(c.red(`${failed.length} failed`)) : c.dim("no errors"));
		}
		if (errors.length) this.log(padSummaryTitle("Errors"), c.bold(c.red(`${errors.length} error${errors.length > 1 ? "s" : ""}`)));
		this.log(padSummaryTitle("Start at"), this._timeStart);
		const collectTime = sum(files, (file) => file.collectDuration);
		const testsTime = sum(files, (file) => file.result?.duration);
		const setupTime = sum(files, (file) => file.setupDuration);
		if (this.watchFilters) this.log(padSummaryTitle("Duration"), formatTime(collectTime + testsTime + setupTime));
		else {
			const blobs = this.ctx.state.blobs;
			// Execution time is either sum of all runs of `--merge-reports` or the current run's time
			const executionTime = blobs?.executionTimes ? sum(blobs.executionTimes, (time) => time) : this.end - this.start;
			const environmentTime = sum(files, (file) => file.environmentLoad);
			const prepareTime = sum(files, (file) => file.prepareDuration);
			const transformTime = sum(this.ctx.projects, (project) => project.vitenode.getTotalDuration());
			const typecheck = sum(this.ctx.projects, (project) => project.typechecker?.getResult().time);
			const timers = [
				`transform ${formatTime(transformTime)}`,
				`setup ${formatTime(setupTime)}`,
				`collect ${formatTime(collectTime)}`,
				`tests ${formatTime(testsTime)}`,
				`environment ${formatTime(environmentTime)}`,
				`prepare ${formatTime(prepareTime)}`,
				typecheck && `typecheck ${formatTime(typecheck)}`
			].filter(Boolean).join(", ");
			this.log(padSummaryTitle("Duration"), formatTime(executionTime) + c.dim(` (${timers})`));
			if (blobs?.executionTimes) this.log(padSummaryTitle("Per blob") + blobs.executionTimes.map((time) => ` ${formatTime(time)}`).join(""));
		}
		this.log();
	}
	printErrorsSummary(files, errors) {
		const suites = getSuites(files);
		const tests = getTests(files);
		const failedSuites = suites.filter((i) => i.result?.errors);
		const failedTests = tests.filter((i) => i.result?.state === "fail");
		const failedTotal = countTestErrors(failedSuites) + countTestErrors(failedTests);
		let current = 1;
		const errorDivider = () => this.error(`${c.red(c.dim(divider(`[${current++}/${failedTotal}]`, void 0, 1)))}\n`);
		if (failedSuites.length) {
			this.error(`\n${errorBanner(`Failed Suites ${failedSuites.length}`)}\n`);
			this.printTaskErrors(failedSuites, errorDivider);
		}
		if (failedTests.length) {
			this.error(`\n${errorBanner(`Failed Tests ${failedTests.length}`)}\n`);
			this.printTaskErrors(failedTests, errorDivider);
		}
		if (errors.length) {
			this.ctx.logger.printUnhandledErrors(errors);
			this.error();
		}
	}
	reportBenchmarkSummary(files) {
		const benches = getTests(files);
		const topBenches = benches.filter((i) => i.result?.benchmark?.rank === 1);
		this.log(`\n${withLabel("cyan", "BENCH", "Summary\n")}`);
		for (const bench of topBenches) {
			const group = bench.suite || bench.file;
			if (!group) continue;
			const groupName = this.getFullName(group, c.dim(" > "));
			const project = this.ctx.projects.find((p) => p.name === bench.file.projectName);
			this.log(`  ${formatProjectName(project)}${bench.name}${c.dim(` - ${groupName}`)}`);
			const siblings = group.tasks.filter((i) => i.meta.benchmark && i.result?.benchmark && i !== bench).sort((a, b) => a.result.benchmark.rank - b.result.benchmark.rank);
			for (const sibling of siblings) {
				const number = (sibling.result.benchmark.mean / bench.result.benchmark.mean).toFixed(2);
				this.log(c.green(`    ${number}x `) + c.gray("faster than ") + sibling.name);
			}
			this.log("");
		}
	}
	printTaskErrors(tasks, errorDivider) {
		const errorsQueue = [];
		for (const task of tasks)
 // Merge identical errors
		task.result?.errors?.forEach((error) => {
			let previous;
			if (error?.stack) previous = errorsQueue.find((i) => {
				if (i[0]?.stack !== error.stack) return false;
				const currentProjectName = task?.projectName || task.file?.projectName || "";
				const projectName = i[1][0]?.projectName || i[1][0].file?.projectName || "";
				const currentAnnotations = task.type === "test" && task.annotations;
				const itemAnnotations = i[1][0].type === "test" && i[1][0].annotations;
				return projectName === currentProjectName && deepEqual(currentAnnotations, itemAnnotations);
			});
			if (previous) previous[1].push(task);
			else errorsQueue.push([error, [task]]);
		});
		for (const [error, tasks] of errorsQueue) {
			for (const task of tasks) {
				const filepath = task?.filepath || "";
				const projectName = task?.projectName || task.file?.projectName || "";
				const project = this.ctx.projects.find((p) => p.name === projectName);
				let name = this.getFullName(task, c.dim(" > "));
				if (filepath) name += c.dim(` [ ${this.relative(filepath)} ]`);
				this.ctx.logger.error(`${c.bgRed(c.bold(" FAIL "))} ${formatProjectName(project)}${name}`);
			}
			const screenshotPaths = tasks.map((t) => t.meta?.failScreenshotPath).filter((screenshot) => screenshot != null);
			this.ctx.logger.printError(error, {
				project: this.ctx.getProjectByName(tasks[0].file.projectName || ""),
				verbose: this.verbose,
				screenshotPaths,
				task: tasks[0]
			});
			if (tasks[0].type === "test" && tasks[0].annotations.length) {
				const test = this.ctx.state.getReportedEntity(tasks[0]);
				this.printAnnotations(test, "error", 1);
				this.error();
			}
			errorDivider();
		}
	}
}
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
	return true;
}
function sum(items, cb) {
	return items.reduce((total, next) => {
		return total + Math.max(cb(next) || 0, 0);
	}, 0);
}

class BasicReporter extends BaseReporter {
	constructor() {
		super();
		this.isTTY = false;
	}
	onInit(ctx) {
		super.onInit(ctx);
		ctx.logger.deprecate(`'basic' reporter is deprecated and will be removed in Vitest v3.\nRemove 'basic' from 'reporters' option. To match 'basic' reporter 100%, use configuration:\n${JSON.stringify({ test: { reporters: [["default", { summary: false }]] } }, null, 2)}`);
	}
	reportSummary(files, errors) {
		// non-tty mode doesn't add a new line
		this.ctx.logger.log();
		return super.reportSummary(files, errors);
	}
}

/// <reference types="../types/index.d.ts" />

// (c) 2020-present Andrea Giammarchi

const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

/**
 * Converts a specialized flatted string into a JS value.
 * @param {string} text
 * @param {(this: any, key: string, value: any) => any} [reviver]
 * @returns {any}
 */
const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

/**
 * Converts a JS value into a specialized flatted string.
 * @param {any} value
 * @param {((this: any, key: string, value: any) => any) | (string | number)[] | null | undefined} [replacer]
 * @param {string | number | undefined} [space]
 * @returns {string}
 */
const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

class BlobReporter {
	start = 0;
	ctx;
	options;
	constructor(options) {
		this.options = options;
	}
	onInit(ctx) {
		if (ctx.config.watch) throw new Error("Blob reporter is not supported in watch mode");
		this.ctx = ctx;
		this.start = performance.now();
	}
	async onFinished(files = [], errors = [], coverage) {
		const executionTime = performance.now() - this.start;
		let outputFile = this.options.outputFile ?? getOutputFile(this.ctx.config, "blob");
		if (!outputFile) {
			const shard = this.ctx.config.shard;
			outputFile = shard ? `.vitest-reports/blob-${shard.index}-${shard.count}.json` : ".vitest-reports/blob.json";
		}
		const modules = this.ctx.projects.map((project) => {
			return [project.name, [...project.vite.moduleGraph.idToModuleMap.entries()].map((mod) => {
				if (!mod[1].file) return null;
				return [
					mod[0],
					mod[1].file,
					mod[1].url
				];
			}).filter((x) => x != null)];
		});
		const report = [
			this.ctx.version,
			files,
			errors,
			modules,
			coverage,
			executionTime
		];
		const reportFile = resolve(this.ctx.config.root, outputFile);
		await writeBlob(report, reportFile);
		this.ctx.logger.log("blob report written to", reportFile);
	}
}
async function writeBlob(content, filename) {
	const report = stringify(content);
	const dir = dirname(filename);
	if (!existsSync(dir)) await mkdir(dir, { recursive: true });
	await writeFile(filename, report, "utf-8");
}
async function readBlobs(currentVersion, blobsDirectory, projectsArray) {
	// using process.cwd() because --merge-reports can only be used in CLI
	const resolvedDir = resolve(process.cwd(), blobsDirectory);
	const blobsFiles = await readdir(resolvedDir);
	const promises = blobsFiles.map(async (filename) => {
		const fullPath = resolve(resolvedDir, filename);
		const stats = await stat(fullPath);
		if (!stats.isFile()) throw new TypeError(`vitest.mergeReports() expects all paths in "${blobsDirectory}" to be files generated by the blob reporter, but "${filename}" is not a file`);
		const content = await readFile(fullPath, "utf-8");
		const [version, files, errors, moduleKeys, coverage, executionTime] = parse(content);
		if (!version) throw new TypeError(`vitest.mergeReports() expects all paths in "${blobsDirectory}" to be files generated by the blob reporter, but "${filename}" is not a valid blob file`);
		return {
			version,
			files,
			errors,
			moduleKeys,
			coverage,
			file: filename,
			executionTime
		};
	});
	const blobs = await Promise.all(promises);
	if (!blobs.length) throw new Error(`vitest.mergeReports() requires at least one blob file in "${blobsDirectory}" directory, but none were found`);
	const versions = new Set(blobs.map((blob) => blob.version));
	if (versions.size > 1) throw new Error(`vitest.mergeReports() requires all blob files to be generated by the same Vitest version, received\n\n${blobs.map((b) => `- "${b.file}" uses v${b.version}`).join("\n")}`);
	if (!versions.has(currentVersion)) throw new Error(`the blobs in "${blobsDirectory}" were generated by a different version of Vitest. Expected v${currentVersion}, but received v${blobs[0].version}`);
	// fake module graph - it is used to check if module is imported, but we don't use values inside
	const projects = Object.fromEntries(projectsArray.map((p) => [p.name, p]));
	blobs.forEach((blob) => {
		blob.moduleKeys.forEach(([projectName, moduleIds]) => {
			const project = projects[projectName];
			if (!project) return;
			moduleIds.forEach(([moduleId, file, url]) => {
				const moduleNode = project.vite.moduleGraph.createFileOnlyEntry(file);
				moduleNode.url = url;
				moduleNode.id = moduleId;
				project.vite.moduleGraph.idToModuleMap.set(moduleId, moduleNode);
			});
		});
	});
	const files = blobs.flatMap((blob) => blob.files).sort((f1, f2) => {
		const time1 = f1.result?.startTime || 0;
		const time2 = f2.result?.startTime || 0;
		return time1 - time2;
	});
	const errors = blobs.flatMap((blob) => blob.errors);
	const coverages = blobs.map((blob) => blob.coverage);
	const executionTimes = blobs.map((blob) => blob.executionTime);
	return {
		files,
		errors,
		coverages,
		executionTimes
	};
}

const DEFAULT_RENDER_INTERVAL_MS = 1e3;
const ESC = "\x1B[";
const CLEAR_LINE = `${ESC}K`;
const MOVE_CURSOR_ONE_ROW_UP = `${ESC}1A`;
const SYNC_START = `${ESC}?2026h`;
const SYNC_END = `${ESC}?2026l`;
/**
* Renders content of `getWindow` at the bottom of the terminal and
* forwards all other intercepted `stdout` and `stderr` logs above it.
*/
class WindowRenderer {
	options;
	streams;
	buffer = [];
	renderInterval = void 0;
	renderScheduled = false;
	windowHeight = 0;
	finished = false;
	cleanups = [];
	constructor(options) {
		this.options = {
			interval: DEFAULT_RENDER_INTERVAL_MS,
			...options
		};
		this.streams = {
			output: options.logger.outputStream.write.bind(options.logger.outputStream),
			error: options.logger.errorStream.write.bind(options.logger.errorStream)
		};
		this.cleanups.push(this.interceptStream(process.stdout, "output"), this.interceptStream(process.stderr, "error"));
		// Write buffered content on unexpected exits, e.g. direct `process.exit()` calls
		this.options.logger.onTerminalCleanup(() => {
			this.flushBuffer();
			this.stop();
		});
		this.start();
	}
	start() {
		this.finished = false;
		this.renderInterval = setInterval(() => this.schedule(), this.options.interval).unref();
	}
	stop() {
		this.cleanups.splice(0).map((fn) => fn());
		clearInterval(this.renderInterval);
	}
	/**
	* Write all buffered output and stop buffering.
	* All intercepted writes are forwarded to actual write after this.
	*/
	finish() {
		this.finished = true;
		this.flushBuffer();
		clearInterval(this.renderInterval);
	}
	/**
	* Queue new render update
	*/
	schedule() {
		if (!this.renderScheduled) {
			this.renderScheduled = true;
			this.flushBuffer();
			setTimeout(() => {
				this.renderScheduled = false;
			}, 100).unref();
		}
	}
	flushBuffer() {
		if (this.buffer.length === 0) return this.render();
		let current;
		// Concatenate same types into a single render
		for (const next of this.buffer.splice(0)) {
			if (!current) {
				current = next;
				continue;
			}
			if (current.type !== next.type) {
				this.render(current.message, current.type);
				current = next;
				continue;
			}
			current.message += next.message;
		}
		if (current) this.render(current?.message, current?.type);
	}
	render(message, type = "output") {
		if (this.finished) {
			this.clearWindow();
			return this.write(message || "", type);
		}
		const windowContent = this.options.getWindow();
		const rowCount = getRenderedRowCount(windowContent, this.options.logger.getColumns());
		let padding = this.windowHeight - rowCount;
		if (padding > 0 && message) padding -= getRenderedRowCount([message], this.options.logger.getColumns());
		this.write(SYNC_START);
		this.clearWindow();
		if (message) this.write(message, type);
		if (padding > 0) this.write("\n".repeat(padding));
		this.write(windowContent.join("\n"));
		this.write(SYNC_END);
		this.windowHeight = rowCount + Math.max(0, padding);
	}
	clearWindow() {
		if (this.windowHeight === 0) return;
		this.write(CLEAR_LINE);
		for (let i = 1; i < this.windowHeight; i++) this.write(`${MOVE_CURSOR_ONE_ROW_UP}${CLEAR_LINE}`);
		this.windowHeight = 0;
	}
	interceptStream(stream, type) {
		const original = stream.write;
		// @ts-expect-error -- not sure how 2 overloads should be typed
		stream.write = (chunk, _, callback) => {
			if (chunk) if (this.finished) this.write(chunk.toString(), type);
			else this.buffer.push({
				type,
				message: chunk.toString()
			});
			callback?.();
		};
		return function restore() {
			stream.write = original;
		};
	}
	write(message, type = "output") {
		this.streams[type](message);
	}
}
/** Calculate the actual row count needed to render `rows` into `stream` */
function getRenderedRowCount(rows, columns) {
	let count = 0;
	for (const row of rows) {
		const text = stripVTControlCharacters(row);
		count += Math.max(1, Math.ceil(text.length / columns));
	}
	return count;
}

const DURATION_UPDATE_INTERVAL_MS = 100;
const FINISHED_TEST_CLEANUP_TIME_MS = 1e3;
/**
* Reporter extension that renders summary and forwards all other logs above itself.
* Intended to be used by other reporters, not as a standalone reporter.
*/
class SummaryReporter {
	ctx;
	options;
	renderer;
	modules = emptyCounters();
	tests = emptyCounters();
	maxParallelTests = 0;
	/** Currently running test modules, may include finished test modules too */
	runningModules = /* @__PURE__ */ new Map();
	/** ID of finished `this.runningModules` that are currently being shown */
	finishedModules = /* @__PURE__ */ new Map();
	startTime = "";
	currentTime = 0;
	duration = 0;
	durationInterval = void 0;
	onInit(ctx, options = {}) {
		this.ctx = ctx;
		this.options = {
			verbose: false,
			...options
		};
		this.renderer = new WindowRenderer({
			logger: ctx.logger,
			getWindow: () => this.createSummary()
		});
		this.ctx.onClose(() => {
			clearInterval(this.durationInterval);
			this.renderer.stop();
		});
	}
	onTestRunStart(specifications) {
		this.runningModules.clear();
		this.finishedModules.clear();
		this.modules = emptyCounters();
		this.tests = emptyCounters();
		this.startTimers();
		this.renderer.start();
		this.modules.total = specifications.length;
	}
	onTestRunEnd() {
		this.runningModules.clear();
		this.finishedModules.clear();
		this.renderer.finish();
		clearInterval(this.durationInterval);
	}
	onTestModuleQueued(module) {
		// When new test module starts, take the place of previously finished test module, if any
		if (this.finishedModules.size) {
			const finished = this.finishedModules.keys().next().value;
			this.removeTestModule(finished);
		}
		this.runningModules.set(module.id, initializeStats(module));
		this.renderer.schedule();
	}
	onTestModuleCollected(module) {
		let stats = this.runningModules.get(module.id);
		if (!stats) {
			stats = initializeStats(module);
			this.runningModules.set(module.id, stats);
		}
		const total = Array.from(module.children.allTests()).length;
		this.tests.total += total;
		stats.total = total;
		this.maxParallelTests = Math.max(this.maxParallelTests, this.runningModules.size);
		this.renderer.schedule();
	}
	onHookStart(options) {
		const stats = this.getHookStats(options);
		if (!stats) return;
		const hook = {
			name: options.name,
			visible: false,
			startTime: performance.now(),
			onFinish: () => {}
		};
		stats.hook?.onFinish?.();
		stats.hook = hook;
		const timeout = setTimeout(() => {
			hook.visible = true;
		}, this.ctx.config.slowTestThreshold).unref();
		hook.onFinish = () => clearTimeout(timeout);
	}
	onHookEnd(options) {
		const stats = this.getHookStats(options);
		if (stats?.hook?.name !== options.name) return;
		stats.hook.onFinish();
		stats.hook.visible = false;
	}
	onTestCaseReady(test) {
		// Track slow running tests only on verbose mode
		if (!this.options.verbose) return;
		const stats = this.runningModules.get(test.module.id);
		if (!stats || stats.tests.has(test.id)) return;
		const slowTest = {
			name: test.name,
			visible: false,
			startTime: performance.now(),
			onFinish: () => {}
		};
		const timeout = setTimeout(() => {
			slowTest.visible = true;
		}, this.ctx.config.slowTestThreshold).unref();
		slowTest.onFinish = () => {
			slowTest.hook?.onFinish();
			clearTimeout(timeout);
		};
		stats.tests.set(test.id, slowTest);
	}
	onTestCaseResult(test) {
		const stats = this.runningModules.get(test.module.id);
		if (!stats) return;
		stats.tests.get(test.id)?.onFinish();
		stats.tests.delete(test.id);
		stats.completed++;
		const result = test.result();
		if (result?.state === "passed") this.tests.passed++;
		else if (result?.state === "failed") this.tests.failed++;
		else if (!result?.state || result?.state === "skipped") this.tests.skipped++;
		this.renderer.schedule();
	}
	onTestModuleEnd(module) {
		const state = module.state();
		this.modules.completed++;
		if (state === "passed") this.modules.passed++;
		else if (state === "failed") this.modules.failed++;
		else if (module.task.mode === "todo" && state === "skipped") this.modules.todo++;
		else if (state === "skipped") this.modules.skipped++;
		const left = this.modules.total - this.modules.completed;
		// Keep finished tests visible in summary for a while if there are more tests left.
		// When a new test starts in onTestModuleQueued it will take this ones place.
		// This reduces flickering by making summary more stable.
		if (left > this.maxParallelTests) this.finishedModules.set(module.id, setTimeout(() => {
			this.removeTestModule(module.id);
		}, FINISHED_TEST_CLEANUP_TIME_MS).unref());
		else
 // Run is about to end as there are less tests left than whole run had parallel at max.
		// Remove finished test immediately.
		this.removeTestModule(module.id);
		this.renderer.schedule();
	}
	getHookStats({ entity }) {
		// Track slow running hooks only on verbose mode
		if (!this.options.verbose) return;
		const module = entity.type === "module" ? entity : entity.module;
		const stats = this.runningModules.get(module.id);
		if (!stats) return;
		return entity.type === "test" ? stats.tests.get(entity.id) : stats;
	}
	createSummary() {
		const summary = [""];
		for (const testFile of Array.from(this.runningModules.values()).sort(sortRunningModules)) {
			const typecheck = testFile.typecheck ? `${c.bgBlue(c.bold(" TS "))} ` : "";
			summary.push(c.bold(c.yellow(` ${F_POINTER} `)) + formatProjectName({
				name: testFile.projectName,
				color: testFile.projectColor
			}) + typecheck + testFile.filename + c.dim(!testFile.completed && !testFile.total ? " [queued]" : ` ${testFile.completed}/${testFile.total}`));
			const slowTasks = [testFile.hook, ...Array.from(testFile.tests.values())].filter((t) => t != null && t.visible);
			for (const [index, task] of slowTasks.entries()) {
				const elapsed = this.currentTime - task.startTime;
				const icon = index === slowTasks.length - 1 ? F_TREE_NODE_END : F_TREE_NODE_MIDDLE;
				summary.push(c.bold(c.yellow(`   ${icon} `)) + task.name + c.bold(c.yellow(` ${formatTime(Math.max(0, elapsed))}`)));
				if (task.hook?.visible) summary.push(c.bold(c.yellow(`      ${F_TREE_NODE_END} `)) + task.hook.name);
			}
		}
		if (this.runningModules.size > 0) summary.push("");
		summary.push(padSummaryTitle("Test Files") + getStateString(this.modules));
		summary.push(padSummaryTitle("Tests") + getStateString(this.tests));
		summary.push(padSummaryTitle("Start at") + this.startTime);
		summary.push(padSummaryTitle("Duration") + formatTime(this.duration));
		summary.push("");
		return summary;
	}
	startTimers() {
		const start = performance.now();
		this.startTime = formatTimeString(/* @__PURE__ */ new Date());
		this.durationInterval = setInterval(() => {
			this.currentTime = performance.now();
			this.duration = this.currentTime - start;
		}, DURATION_UPDATE_INTERVAL_MS).unref();
	}
	removeTestModule(id) {
		if (!id) return;
		const testFile = this.runningModules.get(id);
		testFile?.hook?.onFinish();
		testFile?.tests?.forEach((test) => test.onFinish());
		this.runningModules.delete(id);
		clearTimeout(this.finishedModules.get(id));
		this.finishedModules.delete(id);
	}
}
function emptyCounters() {
	return {
		completed: 0,
		passed: 0,
		failed: 0,
		skipped: 0,
		todo: 0,
		total: 0
	};
}
function getStateString(entry) {
	return [
		entry.failed ? c.bold(c.red(`${entry.failed} failed`)) : null,
		c.bold(c.green(`${entry.passed} passed`)),
		entry.skipped ? c.yellow(`${entry.skipped} skipped`) : null,
		entry.todo ? c.gray(`${entry.todo} todo`) : null
	].filter(Boolean).join(c.dim(" | ")) + c.gray(` (${entry.total})`);
}
function sortRunningModules(a, b) {
	if ((a.projectName || "") > (b.projectName || "")) return 1;
	if ((a.projectName || "") < (b.projectName || "")) return -1;
	return a.filename.localeCompare(b.filename);
}
function initializeStats(module) {
	return {
		total: 0,
		completed: 0,
		filename: module.task.name,
		projectName: module.project.name,
		projectColor: module.project.color,
		tests: /* @__PURE__ */ new Map(),
		typecheck: !!module.task.meta.typecheck
	};
}

class DefaultReporter extends BaseReporter {
	options;
	summary;
	constructor(options = {}) {
		super(options);
		this.options = {
			summary: true,
			...options
		};
		if (!this.isTTY) this.options.summary = false;
		if (this.options.summary) this.summary = new SummaryReporter();
	}
	onTestRunStart(specifications) {
		if (this.isTTY) {
			if (this.renderSucceed === void 0) this.renderSucceed = !!this.renderSucceed;
			if (this.renderSucceed !== true) this.renderSucceed = specifications.length <= 1;
		}
		this.summary?.onTestRunStart(specifications);
	}
	onTestModuleQueued(file) {
		this.summary?.onTestModuleQueued(file);
	}
	onTestModuleCollected(module) {
		this.summary?.onTestModuleCollected(module);
	}
	onTestModuleEnd(module) {
		super.onTestModuleEnd(module);
		this.summary?.onTestModuleEnd(module);
	}
	onTestCaseReady(test) {
		this.summary?.onTestCaseReady(test);
	}
	onTestCaseResult(test) {
		super.onTestCaseResult(test);
		this.summary?.onTestCaseResult(test);
	}
	onHookStart(hook) {
		this.summary?.onHookStart(hook);
	}
	onHookEnd(hook) {
		this.summary?.onHookEnd(hook);
	}
	onInit(ctx) {
		super.onInit(ctx);
		this.summary?.onInit(ctx, { verbose: this.verbose });
	}
	onTestRunEnd() {
		this.summary?.onTestRunEnd();
	}
}

class DotReporter extends BaseReporter {
	renderer;
	tests = /* @__PURE__ */ new Map();
	finishedTests = /* @__PURE__ */ new Set();
	onInit(ctx) {
		super.onInit(ctx);
		if (this.isTTY) {
			this.renderer = new WindowRenderer({
				logger: ctx.logger,
				getWindow: () => this.createSummary()
			});
			this.ctx.onClose(() => this.renderer?.stop());
		}
	}
	// Ignore default logging of base reporter
	printTestModule() {}
	onWatcherRerun(files, trigger) {
		this.tests.clear();
		this.renderer?.start();
		super.onWatcherRerun(files, trigger);
	}
	onFinished(files, errors) {
		if (this.isTTY) {
			const finalLog = formatTests(Array.from(this.tests.values()));
			this.ctx.logger.log(finalLog);
		} else this.ctx.logger.log();
		this.tests.clear();
		this.renderer?.finish();
		super.onFinished(files, errors);
	}
	onTestModuleCollected(module) {
		for (const test of module.children.allTests())
 // Dot reporter marks pending tests as running
		this.onTestCaseReady(test);
	}
	onTestCaseReady(test) {
		if (this.finishedTests.has(test.id)) return;
		this.tests.set(test.id, test.result().state || "run");
		this.renderer?.schedule();
	}
	onTestCaseResult(test) {
		const result = test.result().state;
		// On non-TTY the finished tests are printed immediately
		if (!this.isTTY && result !== "pending") this.ctx.logger.outputStream.write(formatTests([result]));
		super.onTestCaseResult(test);
		this.finishedTests.add(test.id);
		this.tests.set(test.id, result || "skipped");
		this.renderer?.schedule();
	}
	onTestModuleEnd(testModule) {
		super.onTestModuleEnd(testModule);
		if (!this.isTTY) return;
		const columns = this.ctx.logger.getColumns();
		if (this.tests.size < columns) return;
		const finishedTests = Array.from(this.tests).filter((entry) => entry[1] !== "pending");
		if (finishedTests.length < columns) return;
		// Remove finished tests from state and render them in static output
		const states = [];
		let count = 0;
		for (const [id, state] of finishedTests) {
			if (count++ >= columns) break;
			this.tests.delete(id);
			states.push(state);
		}
		this.ctx.logger.log(formatTests(states));
		this.renderer?.schedule();
	}
	createSummary() {
		return [formatTests(Array.from(this.tests.values())), ""];
	}
}
// These are compared with reference equality in formatTests
const pass = {
	char: "·",
	color: c.green
};
const fail = {
	char: "x",
	color: c.red
};
const pending = {
	char: "*",
	color: c.yellow
};
const skip = {
	char: "-",
	color: (char) => c.dim(c.gray(char))
};
function getIcon(state) {
	switch (state) {
		case "passed": return pass;
		case "failed": return fail;
		case "skipped": return skip;
		default: return pending;
	}
}
/**
* Format test states into string while keeping ANSI escapes at minimal.
* Sibling icons with same color are merged into a single c.color() call.
*/
function formatTests(states) {
	let currentIcon = pending;
	let count = 0;
	let output = "";
	for (const state of states) {
		const icon = getIcon(state);
		if (currentIcon === icon) {
			count++;
			continue;
		}
		output += currentIcon.color(currentIcon.char.repeat(count));
		// Start tracking new group
		count = 1;
		currentIcon = icon;
	}
	output += currentIcon.color(currentIcon.char.repeat(count));
	return output;
}

// use Logger with custom Console to capture entire error printing
function capturePrintError(error, ctx, options) {
	let output = "";
	const writable = new Writable({ write(chunk, _encoding, callback) {
		output += String(chunk);
		callback();
	} });
	const console = new Console(writable);
	const logger = {
		error: console.error.bind(console),
		highlight: ctx.logger.highlight.bind(ctx.logger)
	};
	const result = printError(error, ctx, logger, {
		showCodeFrame: false,
		...options
	});
	return {
		nearest: result?.nearest,
		output
	};
}
function printError(error, ctx, logger, options) {
	const project = options.project ?? ctx.coreWorkspaceProject ?? ctx.projects[0];
	return printErrorInner(error, project, {
		logger,
		type: options.type,
		showCodeFrame: options.showCodeFrame,
		screenshotPaths: options.screenshotPaths,
		printProperties: options.verbose,
		parseErrorStacktrace(error) {
			// browser stack trace needs to be processed differently,
			// so there is a separate method for that
			if (options.task?.file.pool === "browser" && project.browser) return project.browser.parseErrorStacktrace(error, { ignoreStackEntries: options.fullStack ? [] : void 0 });
			// node.js stack trace already has correct source map locations
			return parseErrorStacktrace(error, {
				frameFilter: project.config.onStackTrace,
				ignoreStackEntries: options.fullStack ? [] : void 0
			});
		}
	});
}
function printErrorInner(error, project, options) {
	const { showCodeFrame = true, type, printProperties = true } = options;
	const logger = options.logger;
	let e = error;
	if (isPrimitive(e)) e = {
		message: String(error).split(/\n/g)[0],
		stack: String(error)
	};
	if (!e) {
		const error = new Error("unknown error");
		e = {
			message: e ?? error.message,
			stack: error.stack
		};
	}
	// Error may have occurred even before the configuration was resolved
	if (!project) {
		printErrorMessage(e, logger);
		return;
	}
	const stacks = options.parseErrorStacktrace(e);
	const nearest = error instanceof TypeCheckError ? error.stacks[0] : stacks.find((stack) => {
		try {
			return project._vite && project.getModuleById(stack.file) && existsSync(stack.file);
		} catch {
			return false;
		}
	});
	if (type) printErrorType(type, project.vitest);
	printErrorMessage(e, logger);
	if (options.screenshotPaths?.length) {
		const length = options.screenshotPaths.length;
		logger.error(`\nFailure screenshot${length > 1 ? "s" : ""}:`);
		logger.error(options.screenshotPaths.map((p) => `  - ${c.dim(relative(process.cwd(), p))}`).join("\n"));
		if (!e.diff) logger.error();
	}
	if (e.codeFrame) logger.error(`${e.codeFrame}\n`);
	if ("__vitest_rollup_error__" in e) {
		// https://github.com/vitejs/vite/blob/95020ab49e12d143262859e095025cf02423c1d9/packages/vite/src/node/server/middlewares/error.ts#L25-L36
		const err = e.__vitest_rollup_error__;
		logger.error([
			err.plugin && `  Plugin: ${c.magenta(err.plugin)}`,
			err.id && `  File: ${c.cyan(err.id)}${err.loc ? `:${err.loc.line}:${err.loc.column}` : ""}`,
			err.frame && c.yellow(err.frame.split(/\r?\n/g).map((l) => ` `.repeat(2) + l).join(`\n`))
		].filter(Boolean).join("\n"));
	}
	// E.g. AssertionError from assert does not set showDiff but has both actual and expected properties
	if (e.diff) logger.error(`\n${e.diff}\n`);
	// if the error provide the frame
	if (e.frame) logger.error(c.yellow(e.frame));
	else {
		const errorProperties = printProperties ? getErrorProperties(e) : {};
		printStack(logger, project, stacks, nearest, errorProperties, (s) => {
			if (showCodeFrame && s === nearest && nearest) {
				const sourceCode = readFileSync(nearest.file, "utf-8");
				logger.error(generateCodeFrame(sourceCode.length > 1e5 ? sourceCode : logger.highlight(nearest.file, sourceCode), 4, s));
			}
		});
	}
	const testPath = e.VITEST_TEST_PATH;
	const testName = e.VITEST_TEST_NAME;
	const afterEnvTeardown = e.VITEST_AFTER_ENV_TEARDOWN;
	// testName has testPath inside
	if (testPath) logger.error(c.red(`This error originated in "${c.bold(relative(project.config.root, testPath))}" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.`));
	if (testName) logger.error(c.red(`The latest test that might've caused the error is "${c.bold(testName)}". It might mean one of the following:
- The error was thrown, while Vitest was running this test.
- If the error occurred after the test had been completed, this was the last documented test before it was thrown.`));
	if (afterEnvTeardown) logger.error(c.red("This error was caught after test environment was torn down. Make sure to cancel any running tasks before test finishes:\n- cancel timeouts using clearTimeout and clearInterval\n- wait for promises to resolve using the await keyword"));
	if (typeof e.cause === "object" && e.cause && "name" in e.cause) {
		e.cause.name = `Caused by: ${e.cause.name}`;
		printErrorInner(e.cause, project, {
			showCodeFrame: false,
			logger: options.logger,
			parseErrorStacktrace: options.parseErrorStacktrace
		});
	}
	handleImportOutsideModuleError(e.stack || "", logger);
	return { nearest };
}
function printErrorType(type, ctx) {
	ctx.logger.error(`\n${errorBanner(type)}`);
}
const skipErrorProperties = new Set([
	"cause",
	"stacks",
	"type",
	"showDiff",
	"ok",
	"operator",
	"diff",
	"codeFrame",
	"actual",
	"expected",
	"diffOptions",
	"sourceURL",
	"column",
	"line",
	"fileName",
	"lineNumber",
	"columnNumber",
	"VITEST_TEST_NAME",
	"VITEST_TEST_PATH",
	"VITEST_AFTER_ENV_TEARDOWN",
	"__vitest_rollup_error__",
	...Object.getOwnPropertyNames(Error.prototype),
	...Object.getOwnPropertyNames(Object.prototype)
]);
function getErrorProperties(e) {
	const errorObject = Object.create(null);
	if (e.name === "AssertionError") return errorObject;
	for (const key of Object.getOwnPropertyNames(e))
 // print the original stack if it was ever changed manually by the user
	if (key === "stack" && e[key] != null && typeof e[key] !== "string") errorObject[key] = e[key];
	else if (key !== "stack" && !skipErrorProperties.has(key)) errorObject[key] = e[key];
	return errorObject;
}
const esmErrors = ["Cannot use import statement outside a module", "Unexpected token 'export'"];
function handleImportOutsideModuleError(stack, logger) {
	if (!esmErrors.some((e) => stack.includes(e))) return;
	const path = normalize(stack.split("\n")[0].trim());
	let name = path.split("/node_modules/").pop() || "";
	if (name?.startsWith("@")) name = name.split("/").slice(0, 2).join("/");
	else name = name.split("/")[0];
	if (name) printModuleWarningForPackage(logger, path, name);
	else printModuleWarningForSourceCode(logger, path);
}
function printModuleWarningForPackage(logger, path, name) {
	logger.error(c.yellow(`Module ${path} seems to be an ES Module but shipped in a CommonJS package. You might want to create an issue to the package ${c.bold(`"${name}"`)} asking them to ship the file in .mjs extension or add "type": "module" in their package.json.

As a temporary workaround you can try to inline the package by updating your config:

` + c.gray(c.dim("// vitest.config.js")) + "\n" + c.green(`export default {
  test: {
    server: {
      deps: {
        inline: [
          ${c.yellow(c.bold(`"${name}"`))}
        ]
      }
    }
  }
}\n`)));
}
function printModuleWarningForSourceCode(logger, path) {
	logger.error(c.yellow(`Module ${path} seems to be an ES Module but shipped in a CommonJS package. To fix this issue, change the file extension to .mjs or add "type": "module" in your package.json.`));
}
function printErrorMessage(error, logger) {
	const errorName = error.name || "Unknown Error";
	if (!error.message) {
		logger.error(error);
		return;
	}
	if (error.message.length > 5e3)
 // Protect against infinite stack trace in tinyrainbow
	logger.error(`${c.red(c.bold(errorName))}: ${error.message}`);
	else logger.error(c.red(`${c.bold(errorName)}: ${error.message}`));
}
function printStack(logger, project, stack, highlight, errorProperties, onStack) {
	for (const frame of stack) {
		const color = frame === highlight ? c.cyan : c.gray;
		const path = relative(project.config.root, frame.file);
		logger.error(color(` ${c.dim(F_POINTER)} ${[frame.method, `${path}:${c.dim(`${frame.line}:${frame.column}`)}`].filter(Boolean).join(" ")}`));
		onStack?.(frame);
	}
	if (stack.length) logger.error();
	if (hasProperties(errorProperties)) {
		logger.error(c.red(c.dim(divider())));
		const propertiesString = inspect(errorProperties);
		logger.error(c.red(c.bold("Serialized Error:")), c.gray(propertiesString));
	}
}
function hasProperties(obj) {
	// eslint-disable-next-line no-unreachable-loop
	for (const _key in obj) return true;
	return false;
}
function generateCodeFrame(source, indent = 0, loc, range = 2) {
	const start = typeof loc === "object" ? positionToOffset(source, loc.line, loc.column) : loc;
	const end = start;
	const lines = source.split(lineSplitRE);
	const nl = /\r\n/.test(source) ? 2 : 1;
	let count = 0;
	let res = [];
	const columns = process.stdout?.columns || 80;
	for (let i = 0; i < lines.length; i++) {
		count += lines[i].length + nl;
		if (count >= start) {
			for (let j = i - range; j <= i + range || end > count; j++) {
				if (j < 0 || j >= lines.length) continue;
				const lineLength = lines[j].length;
				// too long, maybe it's a minified file, skip for codeframe
				if (stripVTControlCharacters(lines[j]).length > 200) return "";
				res.push(lineNo(j + 1) + truncateString(lines[j].replace(/\t/g, " "), columns - 5 - indent));
				if (j === i) {
					// push underline
					const pad = start - (count - lineLength) + (nl - 1);
					const length = Math.max(1, end > count ? lineLength - pad : end - start);
					res.push(lineNo() + " ".repeat(pad) + c.red("^".repeat(length)));
				} else if (j > i) {
					if (end > count) {
						const length = Math.max(1, Math.min(end - count, lineLength));
						res.push(lineNo() + c.red("^".repeat(length)));
					}
					count += lineLength + 1;
				}
			}
			break;
		}
	}
	if (indent) res = res.map((line) => " ".repeat(indent) + line);
	return res.join("\n");
}
function lineNo(no = "") {
	return c.gray(`${String(no).padStart(3, " ")}| `);
}

class GithubActionsReporter {
	ctx = void 0;
	options;
	constructor(options = {}) {
		this.options = options;
	}
	onInit(ctx) {
		this.ctx = ctx;
	}
	onTestCaseAnnotate(testCase, annotation) {
		if (!annotation.location) return;
		const type = getTitle(annotation.type);
		const formatted = formatMessage({
			command: getType(annotation.type),
			properties: {
				file: annotation.location.file,
				line: String(annotation.location.line),
				column: String(annotation.location.column),
				...type && { title: type }
			},
			message: stripVTControlCharacters(annotation.message)
		});
		this.ctx.logger.log(`\n${formatted}`);
	}
	onFinished(files = [], errors = []) {
		// collect all errors and associate them with projects
		const projectErrors = new Array();
		for (const error of errors) projectErrors.push({
			project: this.ctx.getRootProject(),
			title: "Unhandled error",
			error
		});
		for (const file of files) {
			const tasks = getTasks(file);
			const project = this.ctx.getProjectByName(file.projectName || "");
			for (const task of tasks) {
				if (task.result?.state !== "fail") continue;
				const title = getFullName(task, " > ");
				for (const error of task.result?.errors ?? []) projectErrors.push({
					project,
					title,
					error,
					file
				});
			}
		}
		const onWritePath = this.options.onWritePath ?? defaultOnWritePath;
		// format errors via `printError`
		for (const { project, title, error, file } of projectErrors) {
			const result = capturePrintError(error, this.ctx, {
				project,
				task: file
			});
			const stack = result?.nearest;
			if (!stack) continue;
			const formatted = formatMessage({
				command: "error",
				properties: {
					file: onWritePath(stack.file),
					title,
					line: String(stack.line),
					column: String(stack.column)
				},
				message: stripVTControlCharacters(result.output)
			});
			this.ctx.logger.log(`\n${formatted}`);
		}
	}
}
const BUILT_IN_TYPES = [
	"notice",
	"error",
	"warning"
];
function getTitle(type) {
	if (BUILT_IN_TYPES.includes(type)) return void 0;
	return type;
}
function getType(type) {
	if (BUILT_IN_TYPES.includes(type)) return type;
	return "notice";
}
function defaultOnWritePath(path) {
	return path;
}
// workflow command formatting based on
// https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message
// https://github.com/actions/toolkit/blob/f1d9b4b985e6f0f728b4b766db73498403fd5ca3/packages/core/src/command.ts#L80-L85
function formatMessage({ command, properties, message }) {
	let result = `::${command}`;
	Object.entries(properties).forEach(([k, v], i) => {
		result += i === 0 ? " " : ",";
		result += `${k}=${escapeProperty(v)}`;
	});
	result += `::${escapeData(message)}`;
	return result;
}
function escapeData(s) {
	return s.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function escapeProperty(s) {
	return s.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}

class HangingProcessReporter {
	whyRunning;
	onInit() {
		const _require = createRequire(import.meta.url);
		this.whyRunning = _require("why-is-node-running");
	}
	onProcessTimeout() {
		this.whyRunning?.();
	}
}

const StatusMap = {
	fail: "failed",
	only: "pending",
	pass: "passed",
	run: "pending",
	skip: "skipped",
	todo: "todo",
	queued: "pending"
};
class JsonReporter {
	start = 0;
	ctx;
	options;
	constructor(options) {
		this.options = options;
	}
	onInit(ctx) {
		this.ctx = ctx;
		this.start = Date.now();
	}
	async logTasks(files, coverageMap) {
		const suites = getSuites(files);
		const numTotalTestSuites = suites.length;
		const tests = getTests(files);
		const numTotalTests = tests.length;
		const numFailedTestSuites = suites.filter((s) => s.result?.state === "fail").length;
		const numPendingTestSuites = suites.filter((s) => s.result?.state === "run" || s.result?.state === "queued" || s.mode === "todo").length;
		const numPassedTestSuites = numTotalTestSuites - numFailedTestSuites - numPendingTestSuites;
		const numFailedTests = tests.filter((t) => t.result?.state === "fail").length;
		const numPassedTests = tests.filter((t) => t.result?.state === "pass").length;
		const numPendingTests = tests.filter((t) => t.result?.state === "run" || t.result?.state === "queued" || t.mode === "skip" || t.result?.state === "skip").length;
		const numTodoTests = tests.filter((t) => t.mode === "todo").length;
		const testResults = [];
		const success = !!(files.length > 0 || this.ctx.config.passWithNoTests) && numFailedTestSuites === 0 && numFailedTests === 0;
		for (const file of files) {
			const tests = getTests([file]);
			let startTime = tests.reduce((prev, next) => Math.min(prev, next.result?.startTime ?? Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);
			if (startTime === Number.POSITIVE_INFINITY) startTime = this.start;
			const endTime = tests.reduce((prev, next) => Math.max(prev, (next.result?.startTime ?? 0) + (next.result?.duration ?? 0)), startTime);
			const assertionResults = tests.map((t) => {
				const ancestorTitles = [];
				let iter = t.suite;
				while (iter) {
					ancestorTitles.push(iter.name);
					iter = iter.suite;
				}
				ancestorTitles.reverse();
				return {
					ancestorTitles,
					fullName: t.name ? [...ancestorTitles, t.name].join(" ") : ancestorTitles.join(" "),
					status: StatusMap[t.result?.state || t.mode] || "skipped",
					title: t.name,
					duration: t.result?.duration,
					failureMessages: t.result?.errors?.map((e) => e.stack || e.message) || [],
					location: t.location,
					meta: t.meta
				};
			});
			if (tests.some((t) => t.result?.state === "run" || t.result?.state === "queued")) this.ctx.logger.warn("WARNING: Some tests are still running when generating the JSON report.This is likely an internal bug in Vitest.Please report it to https://github.com/vitest-dev/vitest/issues");
			const hasFailedTests = tests.some((t) => t.result?.state === "fail");
			testResults.push({
				assertionResults,
				startTime,
				endTime,
				status: file.result?.state === "fail" || hasFailedTests ? "failed" : "passed",
				message: file.result?.errors?.[0]?.message ?? "",
				name: file.filepath
			});
		}
		const result = {
			numTotalTestSuites,
			numPassedTestSuites,
			numFailedTestSuites,
			numPendingTestSuites,
			numTotalTests,
			numPassedTests,
			numFailedTests,
			numPendingTests,
			numTodoTests,
			snapshot: this.ctx.snapshot.summary,
			startTime: this.start,
			success,
			testResults,
			coverageMap
		};
		await this.writeReport(JSON.stringify(result));
	}
	async onFinished(files = this.ctx.state.getFiles(), _errors = [], coverageMap) {
		await this.logTasks(files, coverageMap);
	}
	/**
	* Writes the report to an output file if specified in the config,
	* or logs it to the console otherwise.
	* @param report
	*/
	async writeReport(report) {
		const outputFile = this.options.outputFile ?? getOutputFile(this.ctx.config, "json");
		if (outputFile) {
			const reportFile = resolve(this.ctx.config.root, outputFile);
			const outputDirectory = dirname(reportFile);
			if (!existsSync(outputDirectory)) await promises.mkdir(outputDirectory, { recursive: true });
			await promises.writeFile(reportFile, report, "utf-8");
			this.ctx.logger.log(`JSON report written to ${reportFile}`);
		} else this.ctx.logger.log(report);
	}
}

class IndentedLogger {
	currentIndent = "";
	constructor(baseLog) {
		this.baseLog = baseLog;
	}
	indent() {
		this.currentIndent += "    ";
	}
	unindent() {
		this.currentIndent = this.currentIndent.substring(0, this.currentIndent.length - 4);
	}
	log(text) {
		return this.baseLog(this.currentIndent + text);
	}
}

function flattenTasks$1(task, baseName = "") {
	const base = baseName ? `${baseName} > ` : "";
	if (task.type === "suite") return task.tasks.flatMap((child) => flattenTasks$1(child, `${base}${task.name}`));
	else return [{
		...task,
		name: `${base}${task.name}`
	}];
}
// https://gist.github.com/john-doherty/b9195065884cdbfd2017a4756e6409cc
function removeInvalidXMLCharacters(value, removeDiscouragedChars) {
	let regex = /([\0-\x08\v\f\x0E-\x1F\uFFFD\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
	value = String(value || "").replace(regex, "");
	{
		// remove everything discouraged by XML 1.0 specifications
		regex = new RegExp(
			/* eslint-disable regexp/prefer-character-class, regexp/no-obscure-range, regexp/no-useless-non-capturing-group */
			"([\\x7F-\\x84]|[\\x86-\\x9F]|[\\uFDD0-\\uFDEF]|\\uD83F[\\uDFFE\\uDFFF]|(?:\\uD87F[\\uDFFE\\uDFFF])|\\uD8BF[\\uDFFE\\uDFFF]|\\uD8FF[\\uDFFE\\uDFFF]|(?:\\uD93F[\\uDFFE\\uDFFF])|\\uD97F[\\uDFFE\\uDFFF]|\\uD9BF[\\uDFFE\\uDFFF]|\\uD9FF[\\uDFFE\\uDFFF]|\\uDA3F[\\uDFFE\\uDFFF]|\\uDA7F[\\uDFFE\\uDFFF]|\\uDABF[\\uDFFE\\uDFFF]|(?:\\uDAFF[\\uDFFE\\uDFFF])|\\uDB3F[\\uDFFE\\uDFFF]|\\uDB7F[\\uDFFE\\uDFFF]|(?:\\uDBBF[\\uDFFE\\uDFFF])|\\uDBFF[\\uDFFE\\uDFFF](?:[\\0-\\t\\v\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))",
			"g"
			/* eslint-enable */
		);
		value = value.replace(regex, "");
	}
	return value;
}
function escapeXML(value) {
	return removeInvalidXMLCharacters(String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
}
function executionTime(durationMS) {
	return (durationMS / 1e3).toLocaleString("en-US", {
		useGrouping: false,
		maximumFractionDigits: 10
	});
}
function getDuration(task) {
	const duration = task.result?.duration ?? 0;
	return executionTime(duration);
}
class JUnitReporter {
	ctx;
	reportFile;
	baseLog;
	logger;
	_timeStart = /* @__PURE__ */ new Date();
	fileFd;
	options;
	constructor(options) {
		this.options = { ...options };
		this.options.includeConsoleOutput ??= true;
	}
	async onInit(ctx) {
		this.ctx = ctx;
		const outputFile = this.options.outputFile ?? getOutputFile(this.ctx.config, "junit");
		if (outputFile) {
			this.reportFile = resolve(this.ctx.config.root, outputFile);
			const outputDirectory = dirname(this.reportFile);
			if (!existsSync(outputDirectory)) await promises.mkdir(outputDirectory, { recursive: true });
			const fileFd = await promises.open(this.reportFile, "w+");
			this.fileFd = fileFd;
			this.baseLog = async (text) => {
				if (!this.fileFd) this.fileFd = await promises.open(this.reportFile, "w+");
				await promises.writeFile(this.fileFd, `${text}\n`);
			};
		} else this.baseLog = async (text) => this.ctx.logger.log(text);
		this._timeStart = /* @__PURE__ */ new Date();
		this.logger = new IndentedLogger(this.baseLog);
	}
	async writeElement(name, attrs, children) {
		const pairs = [];
		for (const key in attrs) {
			const attr = attrs[key];
			if (attr === void 0) continue;
			pairs.push(`${key}="${escapeXML(attr)}"`);
		}
		await this.logger.log(`<${name}${pairs.length ? ` ${pairs.join(" ")}` : ""}>`);
		this.logger.indent();
		await children.call(this);
		this.logger.unindent();
		await this.logger.log(`</${name}>`);
	}
	async writeLogs(task, type) {
		if (task.logs == null || task.logs.length === 0) return;
		const logType = type === "err" ? "stderr" : "stdout";
		const logs = task.logs.filter((log) => log.type === logType);
		if (logs.length === 0) return;
		await this.writeElement(`system-${type}`, {}, async () => {
			for (const log of logs) await this.baseLog(escapeXML(log.content));
		});
	}
	async writeTasks(tasks, filename) {
		for (const task of tasks) {
			let classname = filename;
			const templateVars = {
				filename: task.file.name,
				filepath: task.file.filepath
			};
			if (typeof this.options.classnameTemplate === "function") classname = this.options.classnameTemplate(templateVars);
			else if (typeof this.options.classnameTemplate === "string") classname = this.options.classnameTemplate.replace(/\{filename\}/g, templateVars.filename).replace(/\{filepath\}/g, templateVars.filepath);
			else if (typeof this.options.classname === "string") classname = this.options.classname;
			await this.writeElement("testcase", {
				classname,
				file: this.options.addFileAttribute ? filename : void 0,
				name: task.name,
				time: getDuration(task)
			}, async () => {
				if (this.options.includeConsoleOutput) {
					await this.writeLogs(task, "out");
					await this.writeLogs(task, "err");
				}
				if (task.mode === "skip" || task.mode === "todo") await this.logger.log("<skipped/>");
				if (task.type === "test" && task.annotations.length) {
					await this.logger.log("<properties>");
					this.logger.indent();
					for (const annotation of task.annotations) {
						await this.logger.log(`<property name="${escapeXML(annotation.type)}" value="${escapeXML(annotation.message)}">`);
						await this.logger.log("</property>");
					}
					this.logger.unindent();
					await this.logger.log("</properties>");
				}
				if (task.result?.state === "fail") {
					const errors = task.result.errors || [];
					for (const error of errors) await this.writeElement("failure", {
						message: error?.message,
						type: error?.name
					}, async () => {
						if (!error) return;
						const result = capturePrintError(error, this.ctx, {
							project: this.ctx.getProjectByName(task.file.projectName || ""),
							task
						});
						await this.baseLog(escapeXML(stripVTControlCharacters(result.output.trim())));
					});
				}
			});
		}
	}
	async onFinished(files = this.ctx.state.getFiles()) {
		await this.logger.log("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>");
		const transformed = files.map((file) => {
			const tasks = file.tasks.flatMap((task) => flattenTasks$1(task));
			const stats = tasks.reduce((stats, task) => {
				return {
					passed: stats.passed + Number(task.result?.state === "pass"),
					failures: stats.failures + Number(task.result?.state === "fail"),
					skipped: stats.skipped + Number(task.mode === "skip" || task.mode === "todo")
				};
			}, {
				passed: 0,
				failures: 0,
				skipped: 0
			});
			// inject failed suites to surface errors during beforeAll/afterAll
			const suites = getSuites(file);
			for (const suite of suites) if (suite.result?.errors) {
				tasks.push(suite);
				stats.failures += 1;
			}
			// If there are no tests, but the file failed to load, we still want to report it as a failure
			if (tasks.length === 0 && file.result?.state === "fail") {
				stats.failures = 1;
				tasks.push({
					id: file.id,
					type: "test",
					name: file.name,
					mode: "run",
					result: file.result,
					meta: {},
					timeout: 0,
					context: null,
					suite: null,
					file: null,
					annotations: []
				});
			}
			return {
				...file,
				tasks,
				stats
			};
		});
		const stats = transformed.reduce((stats, file) => {
			stats.tests += file.tasks.length;
			stats.failures += file.stats.failures;
			stats.time += file.result?.duration || 0;
			return stats;
		}, {
			name: this.options.suiteName || "vitest tests",
			tests: 0,
			failures: 0,
			errors: 0,
			time: 0
		});
		await this.writeElement("testsuites", {
			...stats,
			time: executionTime(stats.time)
		}, async () => {
			for (const file of transformed) {
				const filename = relative(this.ctx.config.root, file.filepath);
				await this.writeElement("testsuite", {
					name: filename,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					hostname: hostname(),
					tests: file.tasks.length,
					failures: file.stats.failures,
					errors: 0,
					skipped: file.stats.skipped,
					time: getDuration(file)
				}, async () => {
					await this.writeTasks(file.tasks, filename);
				});
			}
		});
		if (this.reportFile) this.ctx.logger.log(`JUNIT report written to ${this.reportFile}`);
		await this.fileFd?.close();
		this.fileFd = void 0;
	}
}

function yamlString(str) {
	return `"${str.replace(/"/g, "\\\"")}"`;
}
function tapString(str) {
	return str.replace(/\\/g, "\\\\").replace(/#/g, "\\#").replace(/\n/g, " ");
}
class TapReporter {
	ctx;
	logger;
	onInit(ctx) {
		this.ctx = ctx;
		this.logger = new IndentedLogger(ctx.logger.log.bind(ctx.logger));
	}
	static getComment(task) {
		if (task.mode === "skip") return " # SKIP";
		else if (task.mode === "todo") return " # TODO";
		else if (task.result?.duration != null) return ` # time=${task.result.duration.toFixed(2)}ms`;
		else return "";
	}
	logErrorDetails(error, stack) {
		const errorName = error.name || "Unknown Error";
		this.logger.log(`name: ${yamlString(String(errorName))}`);
		this.logger.log(`message: ${yamlString(String(error.message))}`);
		if (stack)
 // For compatibility with tap-mocha-reporter
		this.logger.log(`stack: ${yamlString(`${stack.file}:${stack.line}:${stack.column}`)}`);
	}
	logTasks(tasks) {
		this.logger.log(`1..${tasks.length}`);
		for (const [i, task] of tasks.entries()) {
			const id = i + 1;
			const ok = task.result?.state === "pass" || task.mode === "skip" || task.mode === "todo" ? "ok" : "not ok";
			const comment = TapReporter.getComment(task);
			if (task.type === "suite" && task.tasks.length > 0) {
				this.logger.log(`${ok} ${id} - ${tapString(task.name)}${comment} {`);
				this.logger.indent();
				this.logTasks(task.tasks);
				this.logger.unindent();
				this.logger.log("}");
			} else {
				this.logger.log(`${ok} ${id} - ${tapString(task.name)}${comment}`);
				const project = this.ctx.getProjectByName(task.file.projectName || "");
				if (task.type === "test" && task.annotations) {
					this.logger.indent();
					task.annotations.forEach(({ type, message }) => {
						this.logger.log(`# ${type}: ${message}`);
					});
					this.logger.unindent();
				}
				if (task.result?.state === "fail" && task.result.errors) {
					this.logger.indent();
					task.result.errors.forEach((error) => {
						const stacks = task.file.pool === "browser" ? project.browser?.parseErrorStacktrace(error) || [] : parseErrorStacktrace(error, { frameFilter: this.ctx.config.onStackTrace });
						const stack = stacks[0];
						this.logger.log("---");
						this.logger.log("error:");
						this.logger.indent();
						this.logErrorDetails(error);
						this.logger.unindent();
						if (stack) this.logger.log(`at: ${yamlString(`${stack.file}:${stack.line}:${stack.column}`)}`);
						if (error.showDiff) {
							this.logger.log(`actual: ${yamlString(error.actual)}`);
							this.logger.log(`expected: ${yamlString(error.expected)}`);
						}
					});
					this.logger.log("...");
					this.logger.unindent();
				}
			}
		}
	}
	onFinished(files = this.ctx.state.getFiles()) {
		this.logger.log("TAP version 13");
		this.logTasks(files);
	}
}

function flattenTasks(task, baseName = "") {
	const base = baseName ? `${baseName} > ` : "";
	if (task.type === "suite" && task.tasks.length > 0) return task.tasks.flatMap((child) => flattenTasks(child, `${base}${task.name}`));
	else return [{
		...task,
		name: `${base}${task.name}`
	}];
}
class TapFlatReporter extends TapReporter {
	onInit(ctx) {
		super.onInit(ctx);
	}
	onFinished(files = this.ctx.state.getFiles()) {
		this.ctx.logger.log("TAP version 13");
		const flatTasks = files.flatMap((task) => flattenTasks(task));
		this.logTasks(flatTasks);
	}
}

class VerboseReporter extends DefaultReporter {
	verbose = true;
	renderSucceed = true;
	printTestModule(module) {
		// still print the test module in TTY,
		// but don't print it in the CLI because we
		// print all the tests when they finish
		// instead of printing them when the test file finishes
		if (this.isTTY) return super.printTestModule(module);
	}
	onTestCaseResult(test) {
		super.onTestCaseResult(test);
		// don't print tests in TTY as they go, only print them
		// in the CLI when they finish
		if (this.isTTY) return;
		const testResult = test.result();
		if (this.ctx.config.hideSkippedTests && testResult.state === "skipped") return;
		let title = ` ${getStateSymbol(test.task)} `;
		if (test.project.name) title += formatProjectName(test.project);
		title += getFullName(test.task, c.dim(" > "));
		title += this.getDurationPrefix(test.task);
		const diagnostic = test.diagnostic();
		if (diagnostic?.heap != null) title += c.magenta(` ${Math.floor(diagnostic.heap / 1024 / 1024)} MB heap used`);
		if (testResult.state === "skipped" && testResult.note) title += c.dim(c.gray(` [${testResult.note}]`));
		this.log(title);
		if (testResult.state === "failed") testResult.errors.forEach((error) => this.log(c.red(`   ${F_RIGHT} ${error?.message}`)));
		if (test.annotations().length) {
			this.log();
			this.printAnnotations(test, "log", 3);
			this.log();
		}
	}
	printTestSuite(testSuite) {
		const indentation = "  ".repeat(getIndentation(testSuite.task));
		const tests = Array.from(testSuite.children.allTests());
		const state = getStateSymbol(testSuite.task);
		this.log(` ${indentation}${state} ${testSuite.name} ${c.dim(`(${tests.length})`)}`);
	}
	getTestName(test) {
		return test.name;
	}
	getTestIndentation(test) {
		return "  ".repeat(getIndentation(test));
	}
	formatShortError() {
		// Short errors are not shown in tree-view
		return "";
	}
}
function getIndentation(suite, level = 1) {
	if (suite.suite && !("filepath" in suite.suite)) return getIndentation(suite.suite, level + 1);
	return level;
}

const ReportersMap = {
	"default": DefaultReporter,
	"basic": BasicReporter,
	"blob": BlobReporter,
	"verbose": VerboseReporter,
	"dot": DotReporter,
	"json": JsonReporter,
	"tap": TapReporter,
	"tap-flat": TapFlatReporter,
	"junit": JUnitReporter,
	"hanging-process": HangingProcessReporter,
	"github-actions": GithubActionsReporter
};

export { BasicReporter as B, DefaultReporter as D, F_RIGHT as F, GithubActionsReporter as G, HangingProcessReporter as H, JsonReporter as J, ReportersMap as R, TapFlatReporter as T, VerboseReporter as V, DotReporter as a, JUnitReporter as b, TapReporter as c, printError as d, errorBanner as e, formatProjectName as f, getStateSymbol as g, divider as h, generateCodeFrame as i, BlobReporter as j, parse as p, readBlobs as r, stringify as s, truncateString as t, utils as u, withLabel as w };
