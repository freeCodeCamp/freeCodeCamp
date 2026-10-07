import { S as SnapshotState, a as SnapshotStateOptions, b as SnapshotResult, R as RawSnapshotInfo, D as DomainSnapshotAdapter } from './rawSnapshot.d-D_X3-62x.js';
export { c as DomainMatchResult, d as SnapshotData, e as SnapshotMatchOptions, f as SnapshotSerializer, g as SnapshotSummary, h as SnapshotUpdateState, U as UncheckedSnapshot } from './rawSnapshot.d-D_X3-62x.js';
import { Plugin, Plugins } from '@vitest/pretty-format';
export { S as SnapshotEnvironment } from './environment.d-DOJxxZV9.js';
import '@vitest/utils';

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
	assertionName?: string;
}
interface AssertDomainOptions extends Omit<AssertOptions, "received"> {
	received: unknown;
	adapter: DomainSnapshotAdapter<any, any>;
}
interface AssertDomainPollOptions extends Omit<AssertDomainOptions, "received"> {
	poll: () => Promise<unknown> | unknown;
	timeout?: number;
	interval?: number;
}
/** Same shape as expect.extend custom matcher result (SyncExpectationResult from @vitest/expect) */
interface MatchResult {
	pass: boolean;
	message: () => string;
	actual?: unknown;
	expected?: unknown;
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
	match(options: AssertOptions): MatchResult;
	assert(options: AssertOptions): void;
	matchDomain(options: AssertDomainOptions): MatchResult;
	pollMatchDomain(options: AssertDomainPollOptions): Promise<MatchResult>;
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

export { DomainSnapshotAdapter, SnapshotClient, SnapshotResult, SnapshotState, SnapshotStateOptions, addSerializer, getSerializers, stripSnapshotIndentation };
export type { MatchResult };
