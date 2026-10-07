import { parseErrorStacktrace } from '@vitest/utils/source-map';
import { isObject, getCallLastIndex } from '@vitest/utils/helpers';
import { positionToOffset, offsetToLineNumber, lineSplitRE } from '@vitest/utils/offset';
import { plugins, format } from '@vitest/pretty-format';

function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

var naturalCompare$1 = {exports: {}};

var hasRequiredNaturalCompare;

function requireNaturalCompare () {
	if (hasRequiredNaturalCompare) return naturalCompare$1.exports;
	hasRequiredNaturalCompare = 1;
	/*
	 * @version    1.4.0
	 * @date       2015-10-26
	 * @stability  3 - Stable
	 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
	 * @license    MIT License
	 */


	var naturalCompare = function(a, b) {
		var i, codeA
		, codeB = 1
		, posA = 0
		, posB = 0
		, alphabet = String.alphabet;

		function getCode(str, pos, code) {
			if (code) {
				for (i = pos; code = getCode(str, i), code < 76 && code > 65;) ++i;
				return +str.slice(pos - 1, i)
			}
			code = alphabet && alphabet.indexOf(str.charAt(pos));
			return code > -1 ? code + 76 : ((code = str.charCodeAt(pos) || 0), code < 45 || code > 127) ? code
				: code < 46 ? 65               // -
				: code < 48 ? code - 1
				: code < 58 ? code + 18        // 0-9
				: code < 65 ? code - 11
				: code < 91 ? code + 11        // A-Z
				: code < 97 ? code - 37
				: code < 123 ? code + 5        // a-z
				: code - 63
		}


		if ((a+="") != (b+="")) for (;codeB;) {
			codeA = getCode(a, posA++);
			codeB = getCode(b, posB++);

			if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
				codeA = getCode(a, posA, posA);
				codeB = getCode(b, posB, posA = i);
				posB = i;
			}

			if (codeA != codeB) return (codeA < codeB) ? -1 : 1
		}
		return 0
	};

	try {
		naturalCompare$1.exports = naturalCompare;
	} catch (e) {
		String.naturalCompare = naturalCompare;
	}
	return naturalCompare$1.exports;
}

var naturalCompareExports = requireNaturalCompare();
var naturalCompare = /*@__PURE__*/getDefaultExportFromCjs(naturalCompareExports);

const serialize$1 = (val, config, indentation, depth, refs, printer) => {
	// Serialize a non-default name, even if config.printFunctionName is false.
	const name = val.getMockName();
	const nameString = name === "vi.fn()" ? "" : ` ${name}`;
	let callsString = "";
	if (val.mock.calls.length !== 0) {
		const indentationNext = indentation + config.indent;
		callsString = ` {${config.spacingOuter}${indentationNext}"calls": ${printer(val.mock.calls, config, indentationNext, depth, refs)}${config.min ? ", " : ","}${config.spacingOuter}${indentationNext}"results": ${printer(val.mock.results, config, indentationNext, depth, refs)}${config.min ? "" : ","}${config.spacingOuter}${indentation}}`;
	}
	return `[MockFunction${nameString}]${callsString}`;
};
const test = (val) => val && !!val._isMockFunction;
const plugin = {
	serialize: serialize$1,
	test
};

const { DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent, AsymmetricMatcher } = plugins;
let PLUGINS = [
	ReactTestComponent,
	ReactElement,
	DOMElement,
	DOMCollection,
	Immutable,
	AsymmetricMatcher,
	plugin
];
function addSerializer(plugin) {
	PLUGINS = [plugin].concat(PLUGINS);
}
function getSerializers() {
	return PLUGINS;
}

// TODO: rewrite and clean up
function testNameToKey(testName, count) {
	return `${testName} ${count}`;
}
function keyToTestName(key) {
	if (!/ \d+$/.test(key)) {
		throw new Error("Snapshot keys must end with a number.");
	}
	return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
	const update = options.updateSnapshot;
	const data = Object.create(null);
	let snapshotContents = "";
	let dirty = false;
	if (content != null) {
		try {
			snapshotContents = content;
			// eslint-disable-next-line no-new-func
			const populate = new Function("exports", snapshotContents);
			populate(data);
		} catch {}
	}
	// const validationResult = validateSnapshotVersion(snapshotContents)
	const isInvalid = snapshotContents;
	// if (update === 'none' && isInvalid)
	//   throw validationResult
	if ((update === "all" || update === "new") && isInvalid) {
		dirty = true;
	}
	return {
		data,
		dirty
	};
}
// Add extra line breaks at beginning and end of multiline snapshot
// to make the content easier to read.
function addExtraLineBreaks(string) {
	return string.includes("\n") ? `\n${string}\n` : string;
}
// Remove extra line breaks at beginning and end of multiline snapshot.
// Instead of trim, which can remove additional newlines or spaces
// at beginning or end of the content from a custom serializer.
function removeExtraLineBreaks(string) {
	return string.length > 2 && string[0] === "\n" && string.endsWith("\n") ? string.slice(1, -1) : string;
}
// export const removeLinesBeforeExternalMatcherTrap = (stack: string): string => {
//   const lines = stack.split('\n')
//   for (let i = 0; i < lines.length; i += 1) {
//     // It's a function name specified in `packages/expect/src/index.ts`
//     // for external custom matchers.
//     if (lines[i].includes('__EXTERNAL_MATCHER_TRAP__'))
//       return lines.slice(i + 1).join('\n')
//   }
//   return stack
// }
const escapeRegex = true;
const printFunctionName = false;
function serialize(val, indent = 2, formatOverrides = {}) {
	return normalizeNewlines(format(val, {
		escapeRegex,
		indent,
		plugins: getSerializers(),
		printFunctionName,
		...formatOverrides
	}));
}
function escapeBacktickString(str) {
	return str.replace(/`|\\|\$\{/g, "\\$&");
}
function printBacktickString(str) {
	return `\`${escapeBacktickString(str)}\``;
}
function normalizeNewlines(string) {
	return string.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(environment, snapshotData, snapshotPath) {
	const snapshots = Object.keys(snapshotData).sort(naturalCompare).map((key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`);
	const content = `${environment.getHeader()}\n\n${snapshots.join("\n\n")}\n`;
	const oldContent = await environment.readSnapshotFile(snapshotPath);
	const skipWriting = oldContent != null && oldContent === content;
	if (skipWriting) {
		return;
	}
	await environment.saveSnapshotFile(snapshotPath, content);
}
function deepMergeArray(target = [], source = []) {
	const mergedOutput = Array.from(target);
	source.forEach((sourceElement, index) => {
		const targetElement = mergedOutput[index];
		if (Array.isArray(target[index])) {
			mergedOutput[index] = deepMergeArray(target[index], sourceElement);
		} else if (isObject(targetElement)) {
			mergedOutput[index] = deepMergeSnapshot(target[index], sourceElement);
		} else {
			// Source does not exist in target or target is primitive and cannot be deep merged
			mergedOutput[index] = sourceElement;
		}
	});
	return mergedOutput;
}
/**
* Deep merge, but considers asymmetric matchers. Unlike base util's deep merge,
* will merge any object-like instance.
* Compatible with Jest's snapshot matcher. Should not be used outside of snapshot.
*
* @example
* ```ts
* toMatchSnapshot({
*   name: expect.stringContaining('text')
* })
* ```
*/
function deepMergeSnapshot(target, source) {
	if (isObject(target) && isObject(source)) {
		const mergedOutput = { ...target };
		Object.keys(source).forEach((key) => {
			if (isObject(source[key]) && !source[key].$$typeof) {
				if (!(key in target)) {
					Object.assign(mergedOutput, { [key]: source[key] });
				} else {
					mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
				}
			} else if (Array.isArray(source[key])) {
				mergedOutput[key] = deepMergeArray(target[key], source[key]);
			} else {
				Object.assign(mergedOutput, { [key]: source[key] });
			}
		});
		return mergedOutput;
	} else if (Array.isArray(target) && Array.isArray(source)) {
		return deepMergeArray(target, source);
	}
	return target;
}
class DefaultMap extends Map {
	constructor(defaultFn, entries) {
		super(entries);
		this.defaultFn = defaultFn;
	}
	get(key) {
		if (!this.has(key)) {
			this.set(key, this.defaultFn(key));
		}
		return super.get(key);
	}
}
class CounterMap extends DefaultMap {
	constructor() {
		super(() => 0);
	}
	// compat for jest-image-snapshot https://github.com/vitest-dev/vitest/issues/7322
	// `valueOf` and `Snapshot.added` setter allows
	//   snapshotState.added = snapshotState.added + 1
	// to function as
	//   snapshotState.added.total_ = snapshotState.added.total() + 1
	_total;
	valueOf() {
		return this._total = this.total();
	}
	increment(key) {
		if (typeof this._total !== "undefined") {
			this._total++;
		}
		this.set(key, this.get(key) + 1);
	}
	total() {
		if (typeof this._total !== "undefined") {
			return this._total;
		}
		let total = 0;
		for (const x of this.values()) {
			total += x;
		}
		return total;
	}
}
/* @__NO_SIDE_EFFECTS__ */
function memo(fn) {
	const cache = new Map();
	return (arg) => {
		if (!cache.has(arg)) {
			cache.set(arg, fn(arg));
		}
		return cache.get(arg);
	};
}

async function saveInlineSnapshots(environment, snapshots) {
	const MagicString = (await import('magic-string')).default;
	const files = new Set(snapshots.map((i) => i.file));
	await Promise.all(Array.from(files).map(async (file) => {
		const snaps = snapshots.filter((i) => i.file === file);
		const code = await environment.readSnapshotFile(file);
		if (code == null) {
			throw new Error(`cannot read ${file} when saving inline snapshot`);
		}
		const s = new MagicString(code);
		for (const snap of snaps) {
			const index = positionToOffset(code, snap.line, snap.column);
			replaceInlineSnap(code, s, index, snap.snapshot, snap.assertionName);
		}
		const transformed = s.toString();
		if (transformed !== code) {
			await environment.saveSnapshotFile(file, transformed);
		}
	}));
}
const defaultStartObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*\{/;
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const buildStartObjectRegex = memo((assertionName) => {
	const replaced = defaultStartObjectRegex.source.replace("toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot", escapeRegExp(assertionName));
	return new RegExp(replaced);
});
function replaceObjectSnap(code, s, index, newSnap, assertionName) {
	let _code = code.slice(index);
	const regex = assertionName ? buildStartObjectRegex(assertionName) : defaultStartObjectRegex;
	const startMatch = regex.exec(_code);
	if (!startMatch) {
		return false;
	}
	_code = _code.slice(startMatch.index);
	let callEnd = getCallLastIndex(_code);
	if (callEnd === null) {
		return false;
	}
	callEnd += index + startMatch.index;
	const shapeStart = index + startMatch.index + startMatch[0].length;
	const shapeEnd = getObjectShapeEndIndex(code, shapeStart);
	const snap = `, ${prepareSnapString(newSnap, code, index)}`;
	if (shapeEnd === callEnd) {
		// toMatchInlineSnapshot({ foo: expect.any(String) })
		s.appendLeft(callEnd, snap);
	} else {
		// toMatchInlineSnapshot({ foo: expect.any(String) }, ``)
		s.overwrite(shapeEnd, callEnd, snap);
	}
	return true;
}
function getObjectShapeEndIndex(code, index) {
	let startBraces = 1;
	let endBraces = 0;
	while (startBraces !== endBraces && index < code.length) {
		const s = code[index++];
		if (s === "{") {
			startBraces++;
		} else if (s === "}") {
			endBraces++;
		}
	}
	return index;
}
function prepareSnapString(snap, source, index) {
	const lineNumber = offsetToLineNumber(source, index);
	const line = source.split(lineSplitRE)[lineNumber - 1];
	const indent = line.match(/^\s*/)[0] || "";
	const indentNext = indent.includes("	") ? `${indent}\t` : `${indent}  `;
	const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
	const isOneline = lines.length <= 1;
	const quote = "`";
	if (isOneline) {
		return `${quote}${lines.join("\n").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}${quote}`;
	}
	return `${quote}\n${lines.map((i) => i ? indentNext + i : "").join("\n").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\n${indent}${quote}`;
}
const defaultMethodNames = ["toMatchInlineSnapshot", "toThrowErrorMatchingInlineSnapshot"];
// on webkit, the line number is at the end of the method, not at the start
function getCodeStartingAtIndex(code, index, methodNames) {
	for (const name of methodNames) {
		const adjusted = index - name.length;
		if (adjusted >= 0 && code.slice(adjusted, index) === name) {
			return {
				code: code.slice(adjusted),
				index: adjusted
			};
		}
	}
	return {
		code: code.slice(index),
		index
	};
}
const defaultStartRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*[\w$]*(['"`)])/;
const buildStartRegex = memo((assertionName) => {
	const replaced = defaultStartRegex.source.replace("toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot", escapeRegExp(assertionName));
	return new RegExp(replaced);
});
function replaceInlineSnap(code, s, currentIndex, newSnap, assertionName) {
	const methodNames = assertionName ? [assertionName] : defaultMethodNames;
	const { code: codeStartingAtIndex, index } = getCodeStartingAtIndex(code, currentIndex, methodNames);
	const startRegex = assertionName ? buildStartRegex(assertionName) : defaultStartRegex;
	const startMatch = startRegex.exec(codeStartingAtIndex);
	const keywordRegex = assertionName ? new RegExp(escapeRegExp(assertionName)) : /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/;
	const firstKeywordMatch = keywordRegex.exec(codeStartingAtIndex);
	if (!startMatch || startMatch.index !== firstKeywordMatch?.index) {
		return replaceObjectSnap(code, s, index, newSnap, assertionName);
	}
	const quote = startMatch[1];
	const startIndex = index + startMatch.index + startMatch[0].length;
	const snapString = prepareSnapString(newSnap, code, index);
	if (quote === ")") {
		s.appendRight(startIndex - 1, snapString);
		return true;
	}
	const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
	const endMatch = quoteEndRE.exec(code.slice(startIndex));
	if (!endMatch) {
		return false;
	}
	const endIndex = startIndex + endMatch.index + endMatch[0].length;
	s.overwrite(startIndex - 1, endIndex, snapString);
	return true;
}
const INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
	// Find indentation if exists.
	const match = inlineSnapshot.match(INDENTATION_REGEX);
	if (!match || !match[1]) {
		// No indentation.
		return inlineSnapshot;
	}
	const indentation = match[1];
	const lines = inlineSnapshot.split(/\n/g);
	if (lines.length <= 2) {
		// Must be at least 3 lines.
		return inlineSnapshot;
	}
	if (lines[0].trim() !== "" || lines.at(-1)?.trim() !== "") {
		// If not blank first and last lines, abort.
		return inlineSnapshot;
	}
	for (let i = 1; i < lines.length - 1; i++) {
		if (lines[i] !== "") {
			if (lines[i].indexOf(indentation) !== 0) {
				// All lines except first and last should either be blank or have the same
				// indent as the first line (or more). If this isn't the case we don't
				// want to touch the snapshot at all.
				return inlineSnapshot;
			}
			lines[i] = lines[i].substring(indentation.length);
		}
	}
	// Last line is a special case because it won't have the same indent as others
	// but may still have been given some indent to line up.
	lines[lines.length - 1] = "";
	// Return inline snapshot, now at indent 0.
	inlineSnapshot = lines.join("\n");
	return inlineSnapshot;
}

async function saveRawSnapshots(environment, snapshots) {
	await Promise.all(snapshots.map(async (snap) => {
		if (!snap.readonly) {
			await environment.saveSnapshotFile(snap.file, snap.snapshot);
		}
	}));
}

function isSameStackPosition(x, y) {
	return x.file === y.file && x.column === y.column && x.line === y.line;
}
class SnapshotState {
	_counters = new CounterMap();
	_dirty;
	_updateSnapshot;
	_snapshotData;
	_initialData;
	_inlineSnapshots;
	_inlineSnapshotStacks;
	_testIdToKeys = new DefaultMap(() => []);
	_rawSnapshots;
	_uncheckedKeys;
	_snapshotFormat;
	_environment;
	_fileExists;
	expand;
	// getter/setter for jest-image-snapshot compat
	// https://github.com/vitest-dev/vitest/issues/7322
	_added = new CounterMap();
	_matched = new CounterMap();
	_unmatched = new CounterMap();
	_updated = new CounterMap();
	get added() {
		return this._added;
	}
	set added(value) {
		this._added._total = value;
	}
	get matched() {
		return this._matched;
	}
	set matched(value) {
		this._matched._total = value;
	}
	get unmatched() {
		return this._unmatched;
	}
	set unmatched(value) {
		this._unmatched._total = value;
	}
	get updated() {
		return this._updated;
	}
	set updated(value) {
		this._updated._total = value;
	}
	constructor(testFilePath, snapshotPath, snapshotContent, options) {
		this.testFilePath = testFilePath;
		this.snapshotPath = snapshotPath;
		const { data, dirty } = getSnapshotData(snapshotContent, options);
		this._fileExists = snapshotContent != null;
		this._initialData = { ...data };
		this._snapshotData = { ...data };
		this._dirty = dirty;
		this._inlineSnapshots = [];
		this._inlineSnapshotStacks = [];
		this._rawSnapshots = [];
		this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
		this.expand = options.expand || false;
		this._updateSnapshot = options.updateSnapshot;
		this._snapshotFormat = {
			printBasicPrototype: false,
			escapeString: false,
			maxOutputLength: 2 ** 27,
			...options.snapshotFormat
		};
		this._environment = options.snapshotEnvironment;
	}
	static async create(testFilePath, options) {
		const snapshotPath = await options.snapshotEnvironment.resolvePath(testFilePath);
		const content = await options.snapshotEnvironment.readSnapshotFile(snapshotPath);
		return new SnapshotState(testFilePath, snapshotPath, content, options);
	}
	get snapshotUpdateState() {
		return this._updateSnapshot;
	}
	get environment() {
		return this._environment;
	}
	markSnapshotsAsCheckedForTest(testName) {
		this._uncheckedKeys.forEach((uncheckedKey) => {
			// skip snapshots with following keys
			//   testName n
			//   testName > xxx n (this is for toMatchSnapshot("xxx") API)
			if (/ \d+$| > /.test(uncheckedKey.slice(testName.length))) {
				this._uncheckedKeys.delete(uncheckedKey);
			}
		});
	}
	clearTest(testId) {
		// clear inline
		this._inlineSnapshots = this._inlineSnapshots.filter((s) => s.testId !== testId);
		this._inlineSnapshotStacks = this._inlineSnapshotStacks.filter((s) => s.testId !== testId);
		// clear file
		for (const key of this._testIdToKeys.get(testId)) {
			const name = keyToTestName(key);
			const count = this._counters.get(name);
			if (count > 0) {
				if (key in this._snapshotData || key in this._initialData) {
					this._snapshotData[key] = this._initialData[key];
				}
				this._counters.set(name, count - 1);
			}
		}
		this._testIdToKeys.delete(testId);
		// clear stats
		this.added.delete(testId);
		this.updated.delete(testId);
		this.matched.delete(testId);
		this.unmatched.delete(testId);
	}
	_inferInlineSnapshotStack(stacks) {
		// if called inside resolves/rejects, stacktrace is different
		const promiseIndex = stacks.findIndex((i) => i.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
		if (promiseIndex !== -1) {
			return stacks[promiseIndex + 3];
		}
		// support poll + inline snapshot
		const pollChainIndex = stacks.findIndex((i) => i.method.match(/__VITEST_POLL_CHAIN__/));
		if (pollChainIndex !== -1) {
			return stacks[pollChainIndex + 1];
		}
		// inline snapshot function can be named __INLINE_SNAPSHOT_OFFSET_<n>__
		// to specify a custom stack offset
		for (let i = 0; i < stacks.length; i++) {
			const match = stacks[i].method.match(/__INLINE_SNAPSHOT_OFFSET_(\d+)__/);
			if (match) {
				return stacks[i + Number(match[1])] ?? null;
			}
		}
		// custom matcher registered via expect.extend() — the wrapper function
		// in jest-extend.ts is named __VITEST_EXTEND_ASSERTION__
		const customMatcherIndex = stacks.findIndex((i) => i.method.includes("__VITEST_EXTEND_ASSERTION__"));
		if (customMatcherIndex !== -1) {
			return stacks[customMatcherIndex + 3] ?? null;
		}
		// inline snapshot function is called __INLINE_SNAPSHOT__
		// in integrations/snapshot/chai.ts
		const stackIndex = stacks.findIndex((i) => i.method.includes("__INLINE_SNAPSHOT__"));
		return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
	}
	_addSnapshot(key, receivedSerialized, options) {
		this._dirty = true;
		if (options.stack) {
			this._inlineSnapshots.push({
				...options.stack,
				snapshot: receivedSerialized,
				testId: options.testId,
				assertionName: options.assertionName
			});
		} else if (options.rawSnapshot) {
			this._rawSnapshots.push({
				...options.rawSnapshot,
				snapshot: receivedSerialized
			});
		} else {
			this._snapshotData[key] = receivedSerialized;
		}
	}
	_resolveKey(testId, testName, key) {
		this._counters.increment(testName);
		const count = this._counters.get(testName);
		if (!key) {
			key = testNameToKey(testName, count);
		}
		this._testIdToKeys.get(testId).push(key);
		return {
			key,
			count
		};
	}
	_resolveInlineStack(options) {
		const { testId, snapshot, assertionName, error } = options;
		const stacks = parseErrorStacktrace(error, { ignoreStackEntries: [] });
		const _stack = this._inferInlineSnapshotStack(stacks);
		if (!_stack) {
			const message = stacks.map((s) => `  ${s.file}:${s.line}:${s.column}${s.method ? ` (${s.method})` : ""}`).join("\n");
			throw new Error(`@vitest/snapshot: Couldn't infer stack frame for inline snapshot.\n${message}`);
		}
		const stack = this.environment.processStackTrace?.(_stack) || _stack;
		// removing 1 column, because source map points to the wrong
		// location for js files, but `column-1` points to the same in both js/ts
		// https://github.com/vitejs/vite/issues/8657
		stack.column--;
		// reject multiple inline snapshots at the same location if snapshot is different
		const snapshotsWithSameStack = this._inlineSnapshotStacks.filter((s) => isSameStackPosition(s, stack));
		if (snapshotsWithSameStack.length > 0) {
			// ensure only one snapshot will be written at the same location
			this._inlineSnapshots = this._inlineSnapshots.filter((s) => !isSameStackPosition(s, stack));
			const differentSnapshot = snapshotsWithSameStack.find((s) => s.snapshot !== snapshot);
			if (differentSnapshot) {
				throw Object.assign(new Error(`${assertionName} with different snapshots cannot be called at the same location`), {
					actual: snapshot,
					expected: differentSnapshot.snapshot
				});
			}
		}
		this._inlineSnapshotStacks.push({
			...stack,
			testId,
			snapshot
		});
		return stack;
	}
	_reconcile(opts) {
		// These are the conditions on when to write snapshots:
		//  * There's no snapshot file in a non-CI environment.
		//  * There is a snapshot file and we decided to update the snapshot.
		//  * There is a snapshot file, but it doesn't have this snapshot.
		// These are the conditions on when not to write snapshots:
		//  * The update flag is set to 'none'.
		//  * There's no snapshot file or a file without this snapshot on a CI environment.
		if (opts.hasSnapshot && this._updateSnapshot === "all" || (!opts.hasSnapshot || !opts.snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
			if (this._updateSnapshot === "all") {
				if (!opts.pass) {
					if (opts.hasSnapshot) {
						this.updated.increment(opts.testId);
					} else {
						this.added.increment(opts.testId);
					}
					this._addSnapshot(opts.key, opts.addValue, {
						stack: opts.stack,
						testId: opts.testId,
						rawSnapshot: opts.rawSnapshot,
						assertionName: opts.assertionName
					});
				} else {
					this.matched.increment(opts.testId);
				}
			} else {
				this._addSnapshot(opts.key, opts.addValue, {
					stack: opts.stack,
					testId: opts.testId,
					rawSnapshot: opts.rawSnapshot,
					assertionName: opts.assertionName
				});
				this.added.increment(opts.testId);
			}
			return {
				actual: "",
				count: opts.count,
				expected: "",
				key: opts.key,
				pass: true
			};
		} else {
			if (!opts.pass) {
				this.unmatched.increment(opts.testId);
				return {
					actual: opts.actualDisplay,
					count: opts.count,
					expected: opts.expectedDisplay,
					key: opts.key,
					pass: false
				};
			} else {
				this.matched.increment(opts.testId);
				return {
					actual: "",
					count: opts.count,
					expected: "",
					key: opts.key,
					pass: true
				};
			}
		}
	}
	async save() {
		const hasExternalSnapshots = Object.keys(this._snapshotData).length;
		const hasInlineSnapshots = this._inlineSnapshots.length;
		const hasRawSnapshots = this._rawSnapshots.length;
		const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
		const status = {
			deleted: false,
			saved: false
		};
		if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
			if (hasExternalSnapshots) {
				await saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
				this._fileExists = true;
			}
			if (hasInlineSnapshots) {
				await saveInlineSnapshots(this._environment, this._inlineSnapshots);
			}
			if (hasRawSnapshots) {
				await saveRawSnapshots(this._environment, this._rawSnapshots);
			}
			status.saved = true;
		} else if (!hasExternalSnapshots && this._fileExists) {
			if (this._updateSnapshot === "all") {
				await this._environment.removeSnapshotFile(this.snapshotPath);
				this._fileExists = false;
			}
			status.deleted = true;
		}
		return status;
	}
	getUncheckedCount() {
		return this._uncheckedKeys.size || 0;
	}
	getUncheckedKeys() {
		return Array.from(this._uncheckedKeys);
	}
	removeUncheckedKeys() {
		if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
			this._dirty = true;
			this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
			this._uncheckedKeys.clear();
		}
	}
	probeExpectedSnapshot(options) {
		const count = this._counters.get(options.testName) + 1;
		const key = testNameToKey(options.testName, count);
		return {
			key,
			count,
			data: options?.isInline ? options.inlineSnapshot : this._snapshotData[key],
			markAsChecked: () => {
				this._counters.increment(options.testName);
				this._testIdToKeys.get(options.testId).push(key);
				this._uncheckedKeys.delete(key);
			}
		};
	}
	match({ testId, testName, received, key, inlineSnapshot, isInline, error, rawSnapshot, assertionName }) {
		const resolved = this._resolveKey(testId, testName, key);
		key = resolved.key;
		const count = resolved.count;
		// Do not mark the snapshot as "checked" if the snapshot is inline and
		// there's an external snapshot. This way the external snapshot can be
		// removed with `--updateSnapshot`.
		if (!(isInline && this._snapshotData[key] !== undefined)) {
			this._uncheckedKeys.delete(key);
		}
		let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize(received, undefined, this._snapshotFormat);
		if (!rawSnapshot) {
			receivedSerialized = addExtraLineBreaks(receivedSerialized);
		}
		if (rawSnapshot) {
			// normalize EOL when snapshot contains CRLF but received is LF
			if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/)) {
				rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
			}
		}
		const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
		const expectedTrimmed = rawSnapshot ? expected : expected?.trim();
		const pass = expectedTrimmed === (rawSnapshot ? receivedSerialized : receivedSerialized.trim());
		const hasSnapshot = expected !== undefined;
		const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
		if (pass && !isInline && !rawSnapshot) {
			// When the file is re-saved (because other snapshots changed), the JS
			// round-trip can lose proper escaping. Refresh in-memory data with the
			// freshly serialized string so the file is written correctly.
			// _reconcile does not write _snapshotData on pass, so this is the only
			// place it gets refreshed. Domain snapshots skip this because the stored
			// value may contain match patterns that differ from the received output.
			this._snapshotData[key] = receivedSerialized;
		}
		const stack = isInline ? this._resolveInlineStack({
			testId,
			snapshot: receivedSerialized,
			assertionName: assertionName || "toMatchInlineSnapshot",
			error: error || new Error("snapshot")
		}) : undefined;
		return this._reconcile({
			testId,
			key,
			count,
			pass,
			hasSnapshot,
			snapshotIsPersisted: !!snapshotIsPersisted,
			addValue: receivedSerialized,
			actualDisplay: rawSnapshot ? receivedSerialized : removeExtraLineBreaks(receivedSerialized),
			expectedDisplay: expectedTrimmed !== undefined ? rawSnapshot ? expectedTrimmed : removeExtraLineBreaks(expectedTrimmed) : undefined,
			stack,
			rawSnapshot,
			assertionName
		});
	}
	processDomainSnapshot({ testId, received, expectedSnapshot, matchResult, isInline, error, assertionName }) {
		const stack = isInline ? this._resolveInlineStack({
			testId,
			snapshot: received,
			assertionName,
			error: error || new Error("STACK_TRACE_ERROR")
		}) : undefined;
		const actualResolved = matchResult?.resolved ?? received;
		const expectedResolved = matchResult?.expected ?? expectedSnapshot.data;
		return this._reconcile({
			testId,
			key: expectedSnapshot.key,
			count: expectedSnapshot.count,
			pass: matchResult?.pass ?? false,
			hasSnapshot: !!expectedSnapshot.data,
			snapshotIsPersisted: isInline ? true : this._fileExists,
			addValue: actualResolved,
			actualDisplay: removeExtraLineBreaks(actualResolved),
			expectedDisplay: expectedResolved !== undefined ? removeExtraLineBreaks(expectedResolved) : undefined,
			stack,
			assertionName
		});
	}
	async pack() {
		const snapshot = {
			filepath: this.testFilePath,
			added: 0,
			fileDeleted: false,
			matched: 0,
			unchecked: 0,
			uncheckedKeys: [],
			unmatched: 0,
			updated: 0
		};
		const uncheckedCount = this.getUncheckedCount();
		const uncheckedKeys = this.getUncheckedKeys();
		if (uncheckedCount) {
			this.removeUncheckedKeys();
		}
		const status = await this.save();
		snapshot.fileDeleted = status.deleted;
		snapshot.added = this.added.total();
		snapshot.matched = this.matched.total();
		snapshot.unmatched = this.unmatched.total();
		snapshot.updated = this.updated.total();
		snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
		snapshot.uncheckedKeys = Array.from(uncheckedKeys);
		return snapshot;
	}
}

function createMismatchError(message, expand, actual, expected) {
	const error = new Error(message);
	Object.defineProperty(error, "actual", {
		value: actual,
		enumerable: true,
		configurable: true,
		writable: true
	});
	Object.defineProperty(error, "expected", {
		value: expected,
		enumerable: true,
		configurable: true,
		writable: true
	});
	Object.defineProperty(error, "diffOptions", { value: { expand } });
	return error;
}
class SnapshotClient {
	snapshotStateMap = new Map();
	constructor(options = {}) {
		this.options = options;
	}
	async setup(filepath, options) {
		if (this.snapshotStateMap.has(filepath)) {
			return;
		}
		this.snapshotStateMap.set(filepath, await SnapshotState.create(filepath, options));
	}
	async finish(filepath) {
		const state = this.getSnapshotState(filepath);
		const result = await state.pack();
		this.snapshotStateMap.delete(filepath);
		return result;
	}
	skipTest(filepath, testName) {
		const state = this.getSnapshotState(filepath);
		state.markSnapshotsAsCheckedForTest(testName);
	}
	clearTest(filepath, testId) {
		const state = this.getSnapshotState(filepath);
		state.clearTest(testId);
	}
	getSnapshotState(filepath) {
		const state = this.snapshotStateMap.get(filepath);
		if (!state) {
			throw new Error(`The snapshot state for '${filepath}' is not found. Did you call 'SnapshotClient.setup()'?`);
		}
		return state;
	}
	match(options) {
		const { filepath, name, testId = name, message, isInline = false, properties, inlineSnapshot, error, errorMessage, rawSnapshot, assertionName } = options;
		let { received } = options;
		if (!filepath) {
			throw new Error("Snapshot cannot be used outside of test");
		}
		const snapshotState = this.getSnapshotState(filepath);
		const testName = [name, ...message ? [message] : []].join(" > ");
		// Probe first so we can mark as checked even on early return
		const expectedSnapshot = snapshotState.probeExpectedSnapshot({
			testName,
			testId,
			isInline,
			inlineSnapshot
		});
		if (typeof properties === "object") {
			if (typeof received !== "object" || !received) {
				expectedSnapshot.markAsChecked();
				throw new Error("Received value must be an object when the matcher has properties");
			}
			let propertiesPass;
			try {
				propertiesPass = this.options.isEqual?.(received, properties) ?? false;
			} catch (err) {
				expectedSnapshot.markAsChecked();
				throw err;
			}
			if (!propertiesPass) {
				expectedSnapshot.markAsChecked();
				return {
					pass: false,
					message: () => errorMessage || "Snapshot properties mismatched",
					actual: received,
					expected: properties
				};
			}
			received = deepMergeSnapshot(received, properties);
		}
		const { actual, expected, key, pass } = snapshotState.match({
			testId,
			testName,
			received,
			isInline,
			error,
			inlineSnapshot,
			rawSnapshot,
			assertionName
		});
		return {
			pass,
			message: () => `Snapshot \`${key || "unknown"}\` mismatched`,
			actual: rawSnapshot ? actual : actual?.trim(),
			expected: rawSnapshot ? expected : expected?.trim()
		};
	}
	assert(options) {
		const result = this.match(options);
		if (!result.pass) {
			const snapshotState = this.getSnapshotState(options.filepath);
			throw createMismatchError(result.message(), snapshotState.expand, result.actual, result.expected);
		}
	}
	matchDomain(options) {
		const { received, filepath, name, testId = name, message, adapter, isInline = false, inlineSnapshot, error } = options;
		if (!filepath) {
			throw new Error("Snapshot cannot be used outside of test");
		}
		const captured = adapter.capture(received);
		const rendered = adapter.render(captured);
		const snapshotState = this.getSnapshotState(filepath);
		const testName = [name, ...message ? [message] : []].join(" > ");
		const expectedSnapshot = snapshotState.probeExpectedSnapshot({
			testName,
			testId,
			isInline,
			inlineSnapshot
		});
		expectedSnapshot.markAsChecked();
		const matchResult = expectedSnapshot.data ? adapter.match(captured, adapter.parseExpected(expectedSnapshot.data)) : undefined;
		const { actual, expected, key, pass } = snapshotState.processDomainSnapshot({
			testId,
			received: rendered,
			expectedSnapshot,
			matchResult,
			isInline,
			error,
			assertionName: options.assertionName
		});
		return {
			pass,
			message: () => `Snapshot \`${key}\` mismatched`,
			actual: actual?.trim(),
			expected: expected?.trim()
		};
	}
	async pollMatchDomain(options) {
		const { poll, filepath, name, testId = name, message, adapter, isInline = false, inlineSnapshot, error, timeout = 1e3, interval = 50 } = options;
		if (!filepath) {
			throw new Error("Snapshot cannot be used outside of test");
		}
		const snapshotState = this.getSnapshotState(filepath);
		const testName = [name, ...message ? [message] : []].join(" > ");
		const expectedSnapshot = snapshotState.probeExpectedSnapshot({
			testName,
			testId,
			isInline,
			inlineSnapshot
		});
		const reference = expectedSnapshot.data && snapshotState.snapshotUpdateState !== "all" ? adapter.parseExpected(expectedSnapshot.data) : undefined;
		const timedOut = timeout > 0 ? new Promise((r) => setTimeout(r, timeout)) : undefined;
		const stableResult = await getStableSnapshot({
			adapter,
			poll,
			interval,
			timedOut,
			match: reference ? (captured) => adapter.match(captured, reference).pass : undefined
		});
		expectedSnapshot.markAsChecked();
		if (!stableResult?.rendered) {
			// the original caller `expect.poll` later manipulates error via `throwWithCause`,
			// so here we can directly throw `lastPollError` if exists.
			if (stableResult?.lastPollError) {
				throw stableResult.lastPollError;
			}
			return {
				pass: false,
				message: () => `poll() did not produce a stable snapshot within the timeout`
			};
		}
		// TODO: should `all` mode ignore parse error?
		// Sielently hiding the error and creating snaphsot full scratch isn't good either.
		// Users can fix or purge the broken snapshot manually and that decision affects how domain snapshot gets updated.
		const matchResult = expectedSnapshot.data ? adapter.match(stableResult.captured, adapter.parseExpected(expectedSnapshot.data)) : undefined;
		const { actual, expected, key, pass } = snapshotState.processDomainSnapshot({
			testId,
			received: stableResult.rendered,
			expectedSnapshot,
			matchResult,
			isInline,
			error,
			assertionName: options.assertionName
		});
		return {
			pass,
			message: () => `Snapshot \`${key}\` mismatched`,
			actual: actual?.trim(),
			expected: expected?.trim()
		};
	}
	async assertRaw(options) {
		if (!options.rawSnapshot) {
			throw new Error("Raw snapshot is required");
		}
		const { filepath, rawSnapshot } = options;
		if (rawSnapshot.content == null) {
			if (!filepath) {
				throw new Error("Snapshot cannot be used outside of test");
			}
			const snapshotState = this.getSnapshotState(filepath);
			// save the filepath, so it don't lose even if the await make it out-of-context
			options.filepath ||= filepath;
			// resolve and read the raw snapshot file
			rawSnapshot.file = await snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
			rawSnapshot.content = await snapshotState.environment.readSnapshotFile(rawSnapshot.file) ?? undefined;
		}
		return this.assert(options);
	}
	clear() {
		this.snapshotStateMap.clear();
	}
}
/**
* Polls repeatedly until the value reaches a stable state.
*
* Compares consecutive rendered outputs from the current session —
* when two consecutive polls produce the same rendered string,
* the value is considered stable.
*
* Every `await` (poll call, interval delay) races against `timedOut`
* so that hanging polls and delays are interrupted.
*/
async function getStableSnapshot({ adapter, poll, interval, timedOut, match }) {
	let lastRendered;
	let lastPollError;
	let lastStable;
	while (true) {
		try {
			const pollResult = await raceWith(Promise.resolve(poll()), timedOut);
			if (!pollResult.ok) {
				break;
			}
			const captured = adapter.capture(pollResult.value);
			const rendered = adapter.render(captured);
			if (lastRendered !== undefined && rendered === lastRendered) {
				lastStable = {
					captured,
					rendered
				};
				if (!match || match(captured)) {
					break;
				}
			} else {
				lastRendered = rendered;
				lastStable = undefined;
			}
		} catch (pollError) {
			// poll() threw — reset stability baseline and retry
			lastRendered = undefined;
			lastStable = undefined;
			lastPollError = pollError;
		}
		const delayed = await raceWith(new Promise((r) => setTimeout(r, interval)), timedOut);
		if (!delayed.ok) {
			break;
		}
	}
	return {
		...lastStable,
		lastPollError
	};
}
/** Type-safe `Promise.race` — tells you which promise won. */
function raceWith(promise, other) {
	const left = promise.then((value) => ({
		ok: true,
		value
	}));
	if (!other) {
		return left;
	}
	return Promise.race([left, other.then((value) => ({
		ok: false,
		value
	}))]);
}

export { SnapshotClient, SnapshotState, addSerializer, getSerializers, stripSnapshotIndentation };
