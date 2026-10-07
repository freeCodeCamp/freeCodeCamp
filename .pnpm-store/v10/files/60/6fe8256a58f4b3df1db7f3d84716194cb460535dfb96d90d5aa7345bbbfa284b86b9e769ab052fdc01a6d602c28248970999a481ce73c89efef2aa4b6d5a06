import { OptionsReceived, Plugin } from '@vitest/pretty-format';
import { ParsedStack } from '@vitest/utils';
import { S as SnapshotEnvironment } from './environment.d-DOJxxZV9.js';

interface DomainMatchResult {
	pass: boolean;
	message?: string;
	/**
	* The captured value viewed through the template's lens.
	*
	* Where the template uses patterns (e.g. regexes) or omits details,
	* the resolved string adopts those patterns. Where the template doesn't
	* match, the resolved string uses literal captured values instead.
	*
	* Used for two purposes:
	* - **Diff display** (actual side): compared against `expected`
	*   so the diff highlights only genuine mismatches, not pattern-vs-literal noise.
	* - **Snapshot update** (`--update`): written as the new snapshot content,
	*   preserving user-edited patterns from matched regions while incorporating
	*   actual values for mismatched regions.
	*
	* When omitted, falls back to `render(capture(received))` (the raw rendered value).
	*/
	resolved?: string;
	/**
	* The stored template re-rendered as a string, representing what the user
	* originally wrote or last saved.
	*
	* Used as the expected side in diff display.
	*
	* When omitted, falls back to the raw snapshot string from the snap file
	* or inline snapshot.
	*/
	expected?: string;
}
interface DomainSnapshotAdapter<
	Captured = unknown,
	Expected = unknown
> {
	name: string;
	capture: (received: unknown) => Captured;
	render: (captured: Captured) => string;
	parseExpected: (input: string) => Expected;
	match: (captured: Captured, expected: Expected) => DomainMatchResult;
}

/**
* Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare class DefaultMap<
	K,
	V
> extends Map<K, V> {
	private defaultFn;
	constructor(defaultFn: (key: K) => V, entries?: Iterable<readonly [K, V]>);
	get(key: K): V;
}
declare class CounterMap<K> extends DefaultMap<K, number> {
	constructor();
	_total: number | undefined;
	valueOf(): number;
	increment(key: K): void;
	total(): number;
}

interface SnapshotReturnOptions {
	actual: string;
	count: number;
	expected?: string;
	key: string;
	pass: boolean;
}
interface SaveStatus {
	deleted: boolean;
	saved: boolean;
}
interface ExpectedSnapshot {
	key: string;
	count: number;
	data?: string;
	markAsChecked: () => void;
}
declare class SnapshotState {
	testFilePath: string;
	snapshotPath: string;
	private _counters;
	private _dirty;
	private _updateSnapshot;
	private _snapshotData;
	private _initialData;
	private _inlineSnapshots;
	private _inlineSnapshotStacks;
	private _testIdToKeys;
	private _rawSnapshots;
	private _uncheckedKeys;
	private _snapshotFormat;
	private _environment;
	private _fileExists;
	expand: boolean;
	private _added;
	private _matched;
	private _unmatched;
	private _updated;
	get added(): CounterMap<string>;
	set added(value: number);
	get matched(): CounterMap<string>;
	set matched(value: number);
	get unmatched(): CounterMap<string>;
	set unmatched(value: number);
	get updated(): CounterMap<string>;
	set updated(value: number);
	private constructor();
	static create(testFilePath: string, options: SnapshotStateOptions): Promise<SnapshotState>;
	get snapshotUpdateState(): SnapshotUpdateState;
	get environment(): SnapshotEnvironment;
	markSnapshotsAsCheckedForTest(testName: string): void;
	clearTest(testId: string): void;
	protected _inferInlineSnapshotStack(stacks: ParsedStack[]): ParsedStack | null;
	private _addSnapshot;
	private _resolveKey;
	private _resolveInlineStack;
	private _reconcile;
	save(): Promise<SaveStatus>;
	getUncheckedCount(): number;
	getUncheckedKeys(): Array<string>;
	removeUncheckedKeys(): void;
	probeExpectedSnapshot(options: Pick<SnapshotMatchOptions, "testName" | "testId" | "isInline" | "inlineSnapshot">): ExpectedSnapshot;
	match({ testId, testName, received, key, inlineSnapshot, isInline, error, rawSnapshot, assertionName }: SnapshotMatchOptions): SnapshotReturnOptions;
	processDomainSnapshot({ testId, received, expectedSnapshot, matchResult, isInline, error, assertionName }: ProcessDomainSnapshotOptions): SnapshotReturnOptions;
	pack(): Promise<SnapshotResult>;
}

type SnapshotData = Record<string, string>;
type SnapshotUpdateState = "all" | "new" | "none";
type SnapshotSerializer = Plugin;
interface SnapshotStateOptions {
	updateSnapshot: SnapshotUpdateState;
	snapshotEnvironment: SnapshotEnvironment;
	expand?: boolean;
	snapshotFormat?: OptionsReceived;
	resolveSnapshotPath?: (path: string, extension: string, context?: any) => string;
}
interface SnapshotMatchOptions {
	testId: string;
	testName: string;
	received: unknown;
	key?: string;
	inlineSnapshot?: string;
	isInline: boolean;
	error?: Error;
	rawSnapshot?: RawSnapshotInfo;
	assertionName?: string;
}
interface ProcessDomainSnapshotOptions {
	testId: string;
	received: string;
	expectedSnapshot: ExpectedSnapshot;
	matchResult?: DomainMatchResult;
	isInline?: boolean;
	assertionName?: string;
	error?: Error;
}
interface SnapshotResult {
	filepath: string;
	added: number;
	fileDeleted: boolean;
	matched: number;
	unchecked: number;
	uncheckedKeys: Array<string>;
	unmatched: number;
	updated: number;
}
interface UncheckedSnapshot {
	filePath: string;
	keys: Array<string>;
}
interface SnapshotSummary {
	added: number;
	didUpdate: boolean;
	failure: boolean;
	filesAdded: number;
	filesRemoved: number;
	filesRemovedList: Array<string>;
	filesUnmatched: number;
	filesUpdated: number;
	matched: number;
	total: number;
	unchecked: number;
	uncheckedKeysByFile: Array<UncheckedSnapshot>;
	unmatched: number;
	updated: number;
}

interface RawSnapshotInfo {
	file: string;
	readonly?: boolean;
	content?: string;
}

export { SnapshotState as S };
export type { DomainSnapshotAdapter as D, RawSnapshotInfo as R, UncheckedSnapshot as U, SnapshotStateOptions as a, SnapshotResult as b, DomainMatchResult as c, SnapshotData as d, SnapshotMatchOptions as e, SnapshotSerializer as f, SnapshotSummary as g, SnapshotUpdateState as h };
