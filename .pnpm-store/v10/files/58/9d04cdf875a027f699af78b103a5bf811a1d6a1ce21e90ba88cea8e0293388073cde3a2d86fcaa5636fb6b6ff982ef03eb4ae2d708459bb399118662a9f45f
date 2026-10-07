import { stripVTControlCharacters } from 'node:util';
import { slash } from '@vitest/utils/helpers';
import { isAbsolute, relative, dirname, basename } from 'pathe';
import c from 'tinyrainbow';

const F_RIGHT = "→";
const F_DOWN = "↓";
const F_DOWN_RIGHT = "↳";
const F_POINTER = "❯";
const F_DOT = "·";
const F_CHECK = "✓";
const F_CROSS = "×";
const F_LONG_DASH = "⎯";
const F_TODO = "□";
const F_TREE_NODE_MIDDLE = "├──";
const F_TREE_NODE_END = "└──";

const pointer = c.yellow(F_POINTER);
const skipped = c.dim(c.gray(F_DOWN));
const todo = c.dim(c.gray(F_TODO));
const benchmarkPass = c.green(F_DOT);
const testPass = c.green(F_CHECK);
const taskFail = c.red(F_CROSS);
const suiteFail = c.red(F_POINTER);
const pending = c.gray("·");
const separator = c.dim(" > ");
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
function getStateString(tasks, name = "tests", showTotal = true) {
	if (tasks.length === 0) return c.dim(`no ${name}`);
	const passed = tasks.reduce((acc, i) => {
		// Exclude expected failures from passed count
		if (i.result?.state === "pass" && i.type === "test" && i.fails) return acc;
		return i.result?.state === "pass" ? acc + 1 : acc;
	}, 0);
	const failed = tasks.reduce((acc, i) => i.result?.state === "fail" ? acc + 1 : acc, 0);
	const skipped = tasks.reduce((acc, i) => i.mode === "skip" ? acc + 1 : acc, 0);
	const todo = tasks.reduce((acc, i) => i.mode === "todo" ? acc + 1 : acc, 0);
	const expectedFail = tasks.reduce((acc, i) => {
		// Count tests that are marked as .fails and passed (which means they failed as expected)
		if (i.result?.state === "pass" && i.type === "test" && i.fails) return acc + 1;
		return acc;
	}, 0);
	return [
		failed ? c.bold(c.red(`${failed} failed`)) : null,
		passed ? c.bold(c.green(`${passed} passed`)) : null,
		expectedFail ? c.cyan(`${expectedFail} expected fail`) : null,
		skipped ? c.yellow(`${skipped} skipped`) : null,
		todo ? c.gray(`${todo} todo`) : null
	].filter(Boolean).join(c.dim(" | ")) + (showTotal ? c.gray(` (${tasks.length})`) : "");
}
function getStateSymbol(task) {
	if (task.mode === "todo") return todo;
	if (task.mode === "skip") return skipped;
	if (!task.result) return pending;
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
	if (!background) background = labelDefaultColors[project.name.split("").reduce((acc, v, idx) => acc + v.charCodeAt(0) + idx, 0) % labelDefaultColors.length];
	return c.black(background(` ${project.name} `)) + suffix;
}
function withLabel(color, label, message) {
	const bgColor = `bg${color.charAt(0).toUpperCase()}${color.slice(1)}`;
	return `${c.bold(c.black(c[bgColor](` ${label} `)))} ${message ? c[color](message) : ""}`;
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
/**
* Returns the singular or plural form of a word based on the count.
*/
function noun(count, singular, plural) {
	if (count === 1) return singular;
	return plural;
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
  getStateString: getStateString,
  getStateSymbol: getStateSymbol,
  noun: noun,
  padSummaryTitle: padSummaryTitle,
  pending: pending,
  pointer: pointer,
  renderSnapshotSummary: renderSnapshotSummary,
  separator: separator,
  skipped: skipped,
  suiteFail: suiteFail,
  taskFail: taskFail,
  testPass: testPass,
  todo: todo,
  truncateString: truncateString,
  withLabel: withLabel
});

export { F_POINTER as F, taskFail as a, F_CHECK as b, F_DOWN_RIGHT as c, divider as d, errorBanner as e, formatTimeString as f, formatProjectName as g, getStateSymbol as h, getStateString as i, formatTime as j, countTestErrors as k, F_TREE_NODE_END as l, F_TREE_NODE_MIDDLE as m, noun as n, F_RIGHT as o, padSummaryTitle as p, renderSnapshotSummary as r, separator as s, truncateString as t, utils as u, withLabel as w };
