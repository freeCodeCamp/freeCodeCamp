import { D as DiffOptions } from './types.d-BCElaP-c.js';
export { a as DiffOptionsColor, S as SerializedDiffOptions } from './types.d-BCElaP-c.js';
import '@vitest/pretty-format';

/**
* Diff Match and Patch
* Copyright 2018 The diff-match-patch Authors.
* https://github.com/google/diff-match-patch
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview Computes the difference between two texts to create a patch.
* Applies the patch onto another text, allowing for errors.
* @author fraser@google.com (Neil Fraser)
*/
/**
* CHANGES by pedrottimark to diff_match_patch_uncompressed.ts file:
*
* 1. Delete anything not needed to use diff_cleanupSemantic method
* 2. Convert from prototype properties to var declarations
* 3. Convert Diff to class from constructor and prototype
* 4. Add type annotations for arguments and return values
* 5. Add exports
*/
/**
* The data structure representing a diff is an array of tuples:
* [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
* which means: delete 'Hello', add 'Goodbye' and keep ' world.'
*/
declare const DIFF_DELETE = -1;
declare const DIFF_INSERT = 1;
declare const DIFF_EQUAL = 0;
/**
* Class representing one diff tuple.
* Attempts to look like a two-element array (which is what this used to be).
* @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
* @param {string} text Text to be deleted, inserted, or retained.
* @constructor
*/
declare class Diff {
	0: number;
	1: string;
	constructor(op: number, text: string);
}

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare function diffLinesUnified(aLines: Array<string>, bLines: Array<string>, options?: DiffOptions): string;
declare function diffLinesUnified2(aLinesDisplay: Array<string>, bLinesDisplay: Array<string>, aLinesCompare: Array<string>, bLinesCompare: Array<string>, options?: DiffOptions): string;
declare function diffLinesRaw(aLines: Array<string>, bLines: Array<string>, options?: DiffOptions): [Array<Diff>, boolean];

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

declare function diffStringsUnified(a: string, b: string, options?: DiffOptions): string;
declare function diffStringsRaw(a: string, b: string, cleanup: boolean, options?: DiffOptions): [Array<Diff>, boolean];

/**
* @param a Expected value
* @param b Received value
* @param options Diff options
* @returns {string | null} a string diff
*/
declare function diff(a: any, b: any, options?: DiffOptions): string | undefined;
declare function printDiffOrStringify(received: unknown, expected: unknown, options?: DiffOptions): string | undefined;
declare function replaceAsymmetricMatcher(actual: any, expected: any, actualReplaced?: WeakSet<WeakKey>, expectedReplaced?: WeakSet<WeakKey>): {
	replacedActual: any;
	replacedExpected: any;
};
type PrintLabel = (string: string) => string;
declare function getLabelPrinter(...strings: Array<string>): PrintLabel;

export { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT, Diff, DiffOptions, diff, diffLinesRaw, diffLinesUnified, diffLinesUnified2, diffStringsRaw, diffStringsUnified, getLabelPrinter, printDiffOrStringify, replaceAsymmetricMatcher };
