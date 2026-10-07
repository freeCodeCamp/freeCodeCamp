import { S as SnapshotStateOptions, a as SnapshotMatchOptions, b as SnapshotResult, R as RawSnapshotInfo } from './rawSnapshot.d-lFsMJFUd.js';
export { c as SnapshotData, d as SnapshotSerializer, e as SnapshotSummary, f as SnapshotUpdateState, U as UncheckedSnapshot } from './rawSnapshot.d-lFsMJFUd.js';
import { S as SnapshotEnvironment, P as ParsedStack } from './environment.d-DHdQ1Csl.js';
import { Plugin, Plugins } from '@vitest/pretty-format';

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
	// compat for jest-image-snapshot https://github.com/vitest-dev/vitest/issues/7322
	// `valueOf` and `Snapshot.added` setter allows
	//   snapshotState.added = snapshotState.added + 1
	// to function as
	//   snapshotState.added.total_ = snapshotState.added.total() + 1
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
	// getter/setter for jest-image-snapshot compat
	// https://github.com/vitest-dev/vitest/issues/7322
	private _added;
	private _matched;
	private _unmatched;
	private _updated;
	get added(): CounterMap<string>;
	set added(value: CounterMap<string>);
	get matched(): CounterMap<string>;
	set matched(value: CounterMap<string>);
	get unmatched(): CounterMap<string>;
	set unmatched(value: CounterMap<string>);
	get updated(): CounterMap<string>;
	set updated(value: CounterMap<string>);
	private constructor();
	static create(testFilePath: string, options: SnapshotStateOptions): Promise<SnapshotState>;
	get environment(): SnapshotEnvironment;
	markSnapshotsAsCheckedForTest(testName: string): void;
	clearTest(testId: string): void;
	protected _inferInlineSnapshotStack(stacks: ParsedStack[]): ParsedStack | null;
	private _addSnapshot;
	save(): Promise<SaveStatus>;
	getUncheckedCount(): number;
	getUncheckedKeys(): Array<string>;
	removeUncheckedKeys(): void;
	match({ testId, testName, received, key, inlineSnapshot, isInline, error, rawSnapshot }: SnapshotMatchOptions): SnapshotReturnOptions;
	pack(): Promise<SnapshotResult>;
}

interface AssertOptions {
	received: unknown;
	filepath: string;
	name: string;
	/**
	* Not required but needed for `SnapshotClient.clearTest` to implement test-retry behavior.
	* @default name
	*/
	testId?: string;
	message?: string;
	isInline?: boolean;
	properties?: object;
	inlineSnapshot?: string;
	error?: Error;
	errorMessage?: string;
	rawSnapshot?: RawSnapshotInfo;
}
interface SnapshotClientOptions {
	isEqual?: (received: unknown, expected: unknown) => boolean;
}
declare class SnapshotClient {
	private options;
	snapshotStateMap: Map<string, SnapshotState>;
	constructor(options?: SnapshotClientOptions);
	setup(filepath: string, options: SnapshotStateOptions): Promise<void>;
	finish(filepath: string): Promise<SnapshotResult>;
	skipTest(filepath: string, testName: string): void;
	clearTest(filepath: string, testId: string): void;
	getSnapshotState(filepath: string): SnapshotState;
	assert(options: AssertOptions): void;
	assertRaw(options: AssertOptions): Promise<void>;
	clear(): void;
}

declare function stripSnapshotIndentation(inlineSnapshot: string): string;

/**
* Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare function addSerializer(plugin: Plugin): void;
declare function getSerializers(): Plugins;

export { SnapshotClient, SnapshotMatchOptions, SnapshotResult, SnapshotState, SnapshotStateOptions, addSerializer, getSerializers, stripSnapshotIndentation };
