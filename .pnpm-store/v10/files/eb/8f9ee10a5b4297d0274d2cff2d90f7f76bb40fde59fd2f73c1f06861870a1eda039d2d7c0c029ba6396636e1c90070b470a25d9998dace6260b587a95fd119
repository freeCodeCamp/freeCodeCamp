import { plugins, format } from '@vitest/pretty-format';
import c from 'tinyrainbow';
import { g as getDefaultExportFromCjs, s as stringify } from './chunk-_commonjsHelpers.js';
import { deepClone, getOwnProperties, getType as getType$1 } from './helpers.js';
import 'loupe';

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
const DIFF_DELETE = -1;
const DIFF_INSERT = 1;
const DIFF_EQUAL = 0;
/**
* Class representing one diff tuple.
* Attempts to look like a two-element array (which is what this used to be).
* @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
* @param {string} text Text to be deleted, inserted, or retained.
* @constructor
*/
class Diff {
	0;
	1;
	constructor(op, text) {
		this[0] = op;
		this[1] = text;
	}
}
/**
* Determine the common prefix of two strings.
* @param {string} text1 First string.
* @param {string} text2 Second string.
* @return {number} The number of characters common to the start of each
*     string.
*/
function diff_commonPrefix(text1, text2) {
	// Quick check for common null cases.
	if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
		return 0;
	}
	// Binary search.
	// Performance analysis: https://neil.fraser.name/news/2007/10/09/
	let pointermin = 0;
	let pointermax = Math.min(text1.length, text2.length);
	let pointermid = pointermax;
	let pointerstart = 0;
	while (pointermin < pointermid) {
		if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
			pointermin = pointermid;
			pointerstart = pointermin;
		} else {
			pointermax = pointermid;
		}
		pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	}
	return pointermid;
}
/**
* Determine the common suffix of two strings.
* @param {string} text1 First string.
* @param {string} text2 Second string.
* @return {number} The number of characters common to the end of each string.
*/
function diff_commonSuffix(text1, text2) {
	// Quick check for common null cases.
	if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
		return 0;
	}
	// Binary search.
	// Performance analysis: https://neil.fraser.name/news/2007/10/09/
	let pointermin = 0;
	let pointermax = Math.min(text1.length, text2.length);
	let pointermid = pointermax;
	let pointerend = 0;
	while (pointermin < pointermid) {
		if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
			pointermin = pointermid;
			pointerend = pointermin;
		} else {
			pointermax = pointermid;
		}
		pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	}
	return pointermid;
}
/**
* Determine if the suffix of one string is the prefix of another.
* @param {string} text1 First string.
* @param {string} text2 Second string.
* @return {number} The number of characters common to the end of the first
*     string and the start of the second string.
* @private
*/
function diff_commonOverlap_(text1, text2) {
	// Cache the text lengths to prevent multiple calls.
	const text1_length = text1.length;
	const text2_length = text2.length;
	// Eliminate the null case.
	if (text1_length === 0 || text2_length === 0) {
		return 0;
	}
	// Truncate the longer string.
	if (text1_length > text2_length) {
		text1 = text1.substring(text1_length - text2_length);
	} else if (text1_length < text2_length) {
		text2 = text2.substring(0, text1_length);
	}
	const text_length = Math.min(text1_length, text2_length);
	// Quick check for the worst case.
	if (text1 === text2) {
		return text_length;
	}
	// Start by looking for a single character match
	// and increase length until no match is found.
	// Performance analysis: https://neil.fraser.name/news/2010/11/04/
	let best = 0;
	let length = 1;
	while (true) {
		const pattern = text1.substring(text_length - length);
		const found = text2.indexOf(pattern);
		if (found === -1) {
			return best;
		}
		length += found;
		if (found === 0 || text1.substring(text_length - length) === text2.substring(0, length)) {
			best = length;
			length++;
		}
	}
}
/**
* Reduce the number of edits by eliminating semantically trivial equalities.
* @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
*/
function diff_cleanupSemantic(diffs) {
	let changes = false;
	const equalities = [];
	let equalitiesLength = 0;
	/** @type {?string} */
	let lastEquality = null;
	// Always equal to diffs[equalities[equalitiesLength - 1]][1]
	let pointer = 0;
	// Number of characters that changed prior to the equality.
	let length_insertions1 = 0;
	let length_deletions1 = 0;
	// Number of characters that changed after the equality.
	let length_insertions2 = 0;
	let length_deletions2 = 0;
	while (pointer < diffs.length) {
		if (diffs[pointer][0] === DIFF_EQUAL) {
			// Equality found.
			equalities[equalitiesLength++] = pointer;
			length_insertions1 = length_insertions2;
			length_deletions1 = length_deletions2;
			length_insertions2 = 0;
			length_deletions2 = 0;
			lastEquality = diffs[pointer][1];
		} else {
			// An insertion or deletion.
			if (diffs[pointer][0] === DIFF_INSERT) {
				length_insertions2 += diffs[pointer][1].length;
			} else {
				length_deletions2 += diffs[pointer][1].length;
			}
			// Eliminate an equality that is smaller or equal to the edits on both
			// sides of it.
			if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(length_insertions2, length_deletions2)) {
				// Duplicate record.
				diffs.splice(equalities[equalitiesLength - 1], 0, new Diff(DIFF_DELETE, lastEquality));
				// Change second copy to insert.
				diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
				// Throw away the equality we just deleted.
				equalitiesLength--;
				// Throw away the previous equality (it needs to be reevaluated).
				equalitiesLength--;
				pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
				length_insertions1 = 0;
				length_deletions1 = 0;
				length_insertions2 = 0;
				length_deletions2 = 0;
				lastEquality = null;
				changes = true;
			}
		}
		pointer++;
	}
	// Normalize the diff.
	if (changes) {
		diff_cleanupMerge(diffs);
	}
	diff_cleanupSemanticLossless(diffs);
	// Find any overlaps between deletions and insertions.
	// e.g: <del>abcxxx</del><ins>xxxdef</ins>
	//   -> <del>abc</del>xxx<ins>def</ins>
	// e.g: <del>xxxabc</del><ins>defxxx</ins>
	//   -> <ins>def</ins>xxx<del>abc</del>
	// Only extract an overlap if it is as big as the edit ahead or behind it.
	pointer = 1;
	while (pointer < diffs.length) {
		if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
			const deletion = diffs[pointer - 1][1];
			const insertion = diffs[pointer][1];
			const overlap_length1 = diff_commonOverlap_(deletion, insertion);
			const overlap_length2 = diff_commonOverlap_(insertion, deletion);
			if (overlap_length1 >= overlap_length2) {
				if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
					// Overlap found.  Insert an equality and trim the surrounding edits.
					diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, insertion.substring(0, overlap_length1)));
					diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
					diffs[pointer + 1][1] = insertion.substring(overlap_length1);
					pointer++;
				}
			} else {
				if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
					// Reverse overlap found.
					// Insert an equality and swap and trim the surrounding edits.
					diffs.splice(pointer, 0, new Diff(DIFF_EQUAL, deletion.substring(0, overlap_length2)));
					diffs[pointer - 1][0] = DIFF_INSERT;
					diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
					diffs[pointer + 1][0] = DIFF_DELETE;
					diffs[pointer + 1][1] = deletion.substring(overlap_length2);
					pointer++;
				}
			}
			pointer++;
		}
		pointer++;
	}
}
// Define some regex patterns for matching boundaries.
const nonAlphaNumericRegex_ = /[^a-z0-9]/i;
const whitespaceRegex_ = /\s/;
const linebreakRegex_ = /[\r\n]/;
const blanklineEndRegex_ = /\n\r?\n$/;
const blanklineStartRegex_ = /^\r?\n\r?\n/;
/**
* Look for single edits surrounded on both sides by equalities
* which can be shifted sideways to align the edit to a word boundary.
* e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
* @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
*/
function diff_cleanupSemanticLossless(diffs) {
	let pointer = 1;
	// Intentionally ignore the first and last element (don't need checking).
	while (pointer < diffs.length - 1) {
		if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
			// This is a single edit surrounded by equalities.
			let equality1 = diffs[pointer - 1][1];
			let edit = diffs[pointer][1];
			let equality2 = diffs[pointer + 1][1];
			// First, shift the edit as far left as possible.
			const commonOffset = diff_commonSuffix(equality1, edit);
			if (commonOffset) {
				const commonString = edit.substring(edit.length - commonOffset);
				equality1 = equality1.substring(0, equality1.length - commonOffset);
				edit = commonString + edit.substring(0, edit.length - commonOffset);
				equality2 = commonString + equality2;
			}
			// Second, step character by character right, looking for the best fit.
			let bestEquality1 = equality1;
			let bestEdit = edit;
			let bestEquality2 = equality2;
			let bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
			while (edit.charAt(0) === equality2.charAt(0)) {
				equality1 += edit.charAt(0);
				edit = edit.substring(1) + equality2.charAt(0);
				equality2 = equality2.substring(1);
				const score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
				// The >= encourages trailing rather than leading whitespace on edits.
				if (score >= bestScore) {
					bestScore = score;
					bestEquality1 = equality1;
					bestEdit = edit;
					bestEquality2 = equality2;
				}
			}
			if (diffs[pointer - 1][1] !== bestEquality1) {
				// We have an improvement, save it back to the diff.
				if (bestEquality1) {
					diffs[pointer - 1][1] = bestEquality1;
				} else {
					diffs.splice(pointer - 1, 1);
					pointer--;
				}
				diffs[pointer][1] = bestEdit;
				if (bestEquality2) {
					diffs[pointer + 1][1] = bestEquality2;
				} else {
					diffs.splice(pointer + 1, 1);
					pointer--;
				}
			}
		}
		pointer++;
	}
}
/**
* Reorder and merge like edit sections.  Merge equalities.
* Any edit section can move as long as it doesn't cross an equality.
* @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
*/
function diff_cleanupMerge(diffs) {
	// Add a dummy entry at the end.
	diffs.push(new Diff(DIFF_EQUAL, ""));
	let pointer = 0;
	let count_delete = 0;
	let count_insert = 0;
	let text_delete = "";
	let text_insert = "";
	let commonlength;
	while (pointer < diffs.length) {
		switch (diffs[pointer][0]) {
			case DIFF_INSERT:
				count_insert++;
				text_insert += diffs[pointer][1];
				pointer++;
				break;
			case DIFF_DELETE:
				count_delete++;
				text_delete += diffs[pointer][1];
				pointer++;
				break;
			case DIFF_EQUAL:
				// Upon reaching an equality, check for prior redundancies.
				if (count_delete + count_insert > 1) {
					if (count_delete !== 0 && count_insert !== 0) {
						// Factor out any common prefixes.
						commonlength = diff_commonPrefix(text_insert, text_delete);
						if (commonlength !== 0) {
							if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] === DIFF_EQUAL) {
								diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
							} else {
								diffs.splice(0, 0, new Diff(DIFF_EQUAL, text_insert.substring(0, commonlength)));
								pointer++;
							}
							text_insert = text_insert.substring(commonlength);
							text_delete = text_delete.substring(commonlength);
						}
						// Factor out any common suffixes.
						commonlength = diff_commonSuffix(text_insert, text_delete);
						if (commonlength !== 0) {
							diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
							text_insert = text_insert.substring(0, text_insert.length - commonlength);
							text_delete = text_delete.substring(0, text_delete.length - commonlength);
						}
					}
					// Delete the offending records and add the merged ones.
					pointer -= count_delete + count_insert;
					diffs.splice(pointer, count_delete + count_insert);
					if (text_delete.length) {
						diffs.splice(pointer, 0, new Diff(DIFF_DELETE, text_delete));
						pointer++;
					}
					if (text_insert.length) {
						diffs.splice(pointer, 0, new Diff(DIFF_INSERT, text_insert));
						pointer++;
					}
					pointer++;
				} else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
					// Merge this equality with the previous one.
					diffs[pointer - 1][1] += diffs[pointer][1];
					diffs.splice(pointer, 1);
				} else {
					pointer++;
				}
				count_insert = 0;
				count_delete = 0;
				text_delete = "";
				text_insert = "";
				break;
		}
	}
	if (diffs[diffs.length - 1][1] === "") {
		diffs.pop();
	}
	// Second pass: look for single edits surrounded on both sides by equalities
	// which can be shifted sideways to eliminate an equality.
	// e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	let changes = false;
	pointer = 1;
	// Intentionally ignore the first and last element (don't need checking).
	while (pointer < diffs.length - 1) {
		if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
			// This is a single edit surrounded by equalities.
			if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
				// Shift the edit over the previous equality.
				diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
				diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
				diffs.splice(pointer - 1, 1);
				changes = true;
			} else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {
				// Shift the edit over the next equality.
				diffs[pointer - 1][1] += diffs[pointer + 1][1];
				diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
				diffs.splice(pointer + 1, 1);
				changes = true;
			}
		}
		pointer++;
	}
	// If shifts were made, the diff needs reordering and another shift sweep.
	if (changes) {
		diff_cleanupMerge(diffs);
	}
}
/**
* Given two strings, compute a score representing whether the internal
* boundary falls on logical boundaries.
* Scores range from 6 (best) to 0 (worst).
* Closure, but does not reference any external variables.
* @param {string} one First string.
* @param {string} two Second string.
* @return {number} The score.
* @private
*/
function diff_cleanupSemanticScore_(one, two) {
	if (!one || !two) {
		// Edges are the best.
		return 6;
	}
	// Each port of this function behaves slightly differently due to
	// subtle differences in each language's definition of things like
	// 'whitespace'.  Since this function's purpose is largely cosmetic,
	// the choice has been made to use each language's native features
	// rather than force total conformity.
	const char1 = one.charAt(one.length - 1);
	const char2 = two.charAt(0);
	const nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
	const nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
	const whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
	const whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
	const lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
	const lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
	const blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
	const blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);
	if (blankLine1 || blankLine2) {
		// Five points for blank lines.
		return 5;
	} else if (lineBreak1 || lineBreak2) {
		// Four points for line breaks.
		return 4;
	} else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
		// Three points for end of sentences.
		return 3;
	} else if (whitespace1 || whitespace2) {
		// Two points for whitespace.
		return 2;
	} else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
		// One point for non-alphanumeric.
		return 1;
	}
	return 0;
}

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const NO_DIFF_MESSAGE = "Compared values have no visual difference.";
const SIMILAR_MESSAGE = "Compared values serialize to the same structure.\n" + "Printing internal object structure without calling `toJSON` instead.";

var build = {};

var hasRequiredBuild;

function requireBuild () {
	if (hasRequiredBuild) return build;
	hasRequiredBuild = 1;

	Object.defineProperty(build, '__esModule', {
	  value: true
	});
	build.default = diffSequence;
	/**
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	// This diff-sequences package implements the linear space variation in
	// An O(ND) Difference Algorithm and Its Variations by Eugene W. Myers

	// Relationship in notation between Myers paper and this package:
	// A is a
	// N is aLength, aEnd - aStart, and so on
	// x is aIndex, aFirst, aLast, and so on
	// B is b
	// M is bLength, bEnd - bStart, and so on
	// y is bIndex, bFirst, bLast, and so on
	// Δ = N - M is negative of baDeltaLength = bLength - aLength
	// D is d
	// k is kF
	// k + Δ is kF = kR - baDeltaLength
	// V is aIndexesF or aIndexesR (see comment below about Indexes type)
	// index intervals [1, N] and [1, M] are [0, aLength) and [0, bLength)
	// starting point in forward direction (0, 0) is (-1, -1)
	// starting point in reverse direction (N + 1, M + 1) is (aLength, bLength)

	// The “edit graph” for sequences a and b corresponds to items:
	// in a on the horizontal axis
	// in b on the vertical axis
	//
	// Given a-coordinate of a point in a diagonal, you can compute b-coordinate.
	//
	// Forward diagonals kF:
	// zero diagonal intersects top left corner
	// positive diagonals intersect top edge
	// negative diagonals insersect left edge
	//
	// Reverse diagonals kR:
	// zero diagonal intersects bottom right corner
	// positive diagonals intersect right edge
	// negative diagonals intersect bottom edge

	// The graph contains a directed acyclic graph of edges:
	// horizontal: delete an item from a
	// vertical: insert an item from b
	// diagonal: common item in a and b
	//
	// The algorithm solves dual problems in the graph analogy:
	// Find longest common subsequence: path with maximum number of diagonal edges
	// Find shortest edit script: path with minimum number of non-diagonal edges

	// Input callback function compares items at indexes in the sequences.

	// Output callback function receives the number of adjacent items
	// and starting indexes of each common subsequence.
	// Either original functions or wrapped to swap indexes if graph is transposed.
	// Indexes in sequence a of last point of forward or reverse paths in graph.
	// Myers algorithm indexes by diagonal k which for negative is bad deopt in V8.
	// This package indexes by iF and iR which are greater than or equal to zero.
	// and also updates the index arrays in place to cut memory in half.
	// kF = 2 * iF - d
	// kR = d - 2 * iR
	// Division of index intervals in sequences a and b at the middle change.
	// Invariant: intervals do not have common items at the start or end.
	const pkg = 'diff-sequences'; // for error messages
	const NOT_YET_SET = 0; // small int instead of undefined to avoid deopt in V8

	// Return the number of common items that follow in forward direction.
	// The length of what Myers paper calls a “snake” in a forward path.
	const countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
	  let nCommon = 0;
	  while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
	    aIndex += 1;
	    bIndex += 1;
	    nCommon += 1;
	  }
	  return nCommon;
	};

	// Return the number of common items that precede in reverse direction.
	// The length of what Myers paper calls a “snake” in a reverse path.
	const countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
	  let nCommon = 0;
	  while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
	    aIndex -= 1;
	    bIndex -= 1;
	    nCommon += 1;
	  }
	  return nCommon;
	};

	// A simple function to extend forward paths from (d - 1) to d changes
	// when forward and reverse paths cannot yet overlap.
	const extendPathsF = (
	  d,
	  aEnd,
	  bEnd,
	  bF,
	  isCommon,
	  aIndexesF,
	  iMaxF // return the value because optimization might decrease it
	) => {
	  // Unroll the first iteration.
	  let iF = 0;
	  let kF = -d; // kF = 2 * iF - d
	  let aFirst = aIndexesF[iF]; // in first iteration always insert
	  let aIndexPrev1 = aFirst; // prev value of [iF - 1] in next iteration
	  aIndexesF[iF] += countCommonItemsF(
	    aFirst + 1,
	    aEnd,
	    bF + aFirst - kF + 1,
	    bEnd,
	    isCommon
	  );

	  // Optimization: skip diagonals in which paths cannot ever overlap.
	  const nF = d < iMaxF ? d : iMaxF;

	  // The diagonals kF are odd when d is odd and even when d is even.
	  for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
	    // To get first point of path segment, move one change in forward direction
	    // from last point of previous path segment in an adjacent diagonal.
	    // In last possible iteration when iF === d and kF === d always delete.
	    if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
	      aFirst = aIndexesF[iF]; // vertical to insert from b
	    } else {
	      aFirst = aIndexPrev1 + 1; // horizontal to delete from a

	      if (aEnd <= aFirst) {
	        // Optimization: delete moved past right of graph.
	        return iF - 1;
	      }
	    }

	    // To get last point of path segment, move along diagonal of common items.
	    aIndexPrev1 = aIndexesF[iF];
	    aIndexesF[iF] =
	      aFirst +
	      countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
	  }
	  return iMaxF;
	};

	// A simple function to extend reverse paths from (d - 1) to d changes
	// when reverse and forward paths cannot yet overlap.
	const extendPathsR = (
	  d,
	  aStart,
	  bStart,
	  bR,
	  isCommon,
	  aIndexesR,
	  iMaxR // return the value because optimization might decrease it
	) => {
	  // Unroll the first iteration.
	  let iR = 0;
	  let kR = d; // kR = d - 2 * iR
	  let aFirst = aIndexesR[iR]; // in first iteration always insert
	  let aIndexPrev1 = aFirst; // prev value of [iR - 1] in next iteration
	  aIndexesR[iR] -= countCommonItemsR(
	    aStart,
	    aFirst - 1,
	    bStart,
	    bR + aFirst - kR - 1,
	    isCommon
	  );

	  // Optimization: skip diagonals in which paths cannot ever overlap.
	  const nR = d < iMaxR ? d : iMaxR;

	  // The diagonals kR are odd when d is odd and even when d is even.
	  for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
	    // To get first point of path segment, move one change in reverse direction
	    // from last point of previous path segment in an adjacent diagonal.
	    // In last possible iteration when iR === d and kR === -d always delete.
	    if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
	      aFirst = aIndexesR[iR]; // vertical to insert from b
	    } else {
	      aFirst = aIndexPrev1 - 1; // horizontal to delete from a

	      if (aFirst < aStart) {
	        // Optimization: delete moved past left of graph.
	        return iR - 1;
	      }
	    }

	    // To get last point of path segment, move along diagonal of common items.
	    aIndexPrev1 = aIndexesR[iR];
	    aIndexesR[iR] =
	      aFirst -
	      countCommonItemsR(
	        aStart,
	        aFirst - 1,
	        bStart,
	        bR + aFirst - kR - 1,
	        isCommon
	      );
	  }
	  return iMaxR;
	};

	// A complete function to extend forward paths from (d - 1) to d changes.
	// Return true if a path overlaps reverse path of (d - 1) changes in its diagonal.
	const extendOverlappablePathsF = (
	  d,
	  aStart,
	  aEnd,
	  bStart,
	  bEnd,
	  isCommon,
	  aIndexesF,
	  iMaxF,
	  aIndexesR,
	  iMaxR,
	  division // update prop values if return true
	) => {
	  const bF = bStart - aStart; // bIndex = bF + aIndex - kF
	  const aLength = aEnd - aStart;
	  const bLength = bEnd - bStart;
	  const baDeltaLength = bLength - aLength; // kF = kR - baDeltaLength

	  // Range of diagonals in which forward and reverse paths might overlap.
	  const kMinOverlapF = -baDeltaLength - (d - 1); // -(d - 1) <= kR
	  const kMaxOverlapF = -baDeltaLength + (d - 1); // kR <= (d - 1)

	  let aIndexPrev1 = NOT_YET_SET; // prev value of [iF - 1] in next iteration

	  // Optimization: skip diagonals in which paths cannot ever overlap.
	  const nF = d < iMaxF ? d : iMaxF;

	  // The diagonals kF = 2 * iF - d are odd when d is odd and even when d is even.
	  for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
	    // To get first point of path segment, move one change in forward direction
	    // from last point of previous path segment in an adjacent diagonal.
	    // In first iteration when iF === 0 and kF === -d always insert.
	    // In last possible iteration when iF === d and kF === d always delete.
	    const insert = iF === 0 || (iF !== d && aIndexPrev1 < aIndexesF[iF]);
	    const aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1;
	    const aFirst = insert
	      ? aLastPrev // vertical to insert from b
	      : aLastPrev + 1; // horizontal to delete from a

	    // To get last point of path segment, move along diagonal of common items.
	    const bFirst = bF + aFirst - kF;
	    const nCommonF = countCommonItemsF(
	      aFirst + 1,
	      aEnd,
	      bFirst + 1,
	      bEnd,
	      isCommon
	    );
	    const aLast = aFirst + nCommonF;
	    aIndexPrev1 = aIndexesF[iF];
	    aIndexesF[iF] = aLast;
	    if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
	      // Solve for iR of reverse path with (d - 1) changes in diagonal kF:
	      // kR = kF + baDeltaLength
	      // kR = (d - 1) - 2 * iR
	      const iR = (d - 1 - (kF + baDeltaLength)) / 2;

	      // If this forward path overlaps the reverse path in this diagonal,
	      // then this is the middle change of the index intervals.
	      if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
	        // Unlike the Myers algorithm which finds only the middle “snake”
	        // this package can find two common subsequences per division.
	        // Last point of previous path segment is on an adjacent diagonal.
	        const bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1);

	        // Because of invariant that intervals preceding the middle change
	        // cannot have common items at the end,
	        // move in reverse direction along a diagonal of common items.
	        const nCommonR = countCommonItemsR(
	          aStart,
	          aLastPrev,
	          bStart,
	          bLastPrev,
	          isCommon
	        );
	        const aIndexPrevFirst = aLastPrev - nCommonR;
	        const bIndexPrevFirst = bLastPrev - nCommonR;
	        const aEndPreceding = aIndexPrevFirst + 1;
	        const bEndPreceding = bIndexPrevFirst + 1;
	        division.nChangePreceding = d - 1;
	        if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
	          // Optimization: number of preceding changes in forward direction
	          // is equal to number of items in preceding interval,
	          // therefore it cannot contain any common items.
	          division.aEndPreceding = aStart;
	          division.bEndPreceding = bStart;
	        } else {
	          division.aEndPreceding = aEndPreceding;
	          division.bEndPreceding = bEndPreceding;
	        }
	        division.nCommonPreceding = nCommonR;
	        if (nCommonR !== 0) {
	          division.aCommonPreceding = aEndPreceding;
	          division.bCommonPreceding = bEndPreceding;
	        }
	        division.nCommonFollowing = nCommonF;
	        if (nCommonF !== 0) {
	          division.aCommonFollowing = aFirst + 1;
	          division.bCommonFollowing = bFirst + 1;
	        }
	        const aStartFollowing = aLast + 1;
	        const bStartFollowing = bFirst + nCommonF + 1;
	        division.nChangeFollowing = d - 1;
	        if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
	          // Optimization: number of changes in reverse direction
	          // is equal to number of items in following interval,
	          // therefore it cannot contain any common items.
	          division.aStartFollowing = aEnd;
	          division.bStartFollowing = bEnd;
	        } else {
	          division.aStartFollowing = aStartFollowing;
	          division.bStartFollowing = bStartFollowing;
	        }
	        return true;
	      }
	    }
	  }
	  return false;
	};

	// A complete function to extend reverse paths from (d - 1) to d changes.
	// Return true if a path overlaps forward path of d changes in its diagonal.
	const extendOverlappablePathsR = (
	  d,
	  aStart,
	  aEnd,
	  bStart,
	  bEnd,
	  isCommon,
	  aIndexesF,
	  iMaxF,
	  aIndexesR,
	  iMaxR,
	  division // update prop values if return true
	) => {
	  const bR = bEnd - aEnd; // bIndex = bR + aIndex - kR
	  const aLength = aEnd - aStart;
	  const bLength = bEnd - bStart;
	  const baDeltaLength = bLength - aLength; // kR = kF + baDeltaLength

	  // Range of diagonals in which forward and reverse paths might overlap.
	  const kMinOverlapR = baDeltaLength - d; // -d <= kF
	  const kMaxOverlapR = baDeltaLength + d; // kF <= d

	  let aIndexPrev1 = NOT_YET_SET; // prev value of [iR - 1] in next iteration

	  // Optimization: skip diagonals in which paths cannot ever overlap.
	  const nR = d < iMaxR ? d : iMaxR;

	  // The diagonals kR = d - 2 * iR are odd when d is odd and even when d is even.
	  for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
	    // To get first point of path segment, move one change in reverse direction
	    // from last point of previous path segment in an adjacent diagonal.
	    // In first iteration when iR === 0 and kR === d always insert.
	    // In last possible iteration when iR === d and kR === -d always delete.
	    const insert = iR === 0 || (iR !== d && aIndexesR[iR] < aIndexPrev1);
	    const aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1;
	    const aFirst = insert
	      ? aLastPrev // vertical to insert from b
	      : aLastPrev - 1; // horizontal to delete from a

	    // To get last point of path segment, move along diagonal of common items.
	    const bFirst = bR + aFirst - kR;
	    const nCommonR = countCommonItemsR(
	      aStart,
	      aFirst - 1,
	      bStart,
	      bFirst - 1,
	      isCommon
	    );
	    const aLast = aFirst - nCommonR;
	    aIndexPrev1 = aIndexesR[iR];
	    aIndexesR[iR] = aLast;
	    if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
	      // Solve for iF of forward path with d changes in diagonal kR:
	      // kF = kR - baDeltaLength
	      // kF = 2 * iF - d
	      const iF = (d + (kR - baDeltaLength)) / 2;

	      // If this reverse path overlaps the forward path in this diagonal,
	      // then this is a middle change of the index intervals.
	      if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
	        const bLast = bFirst - nCommonR;
	        division.nChangePreceding = d;
	        if (d === aLast + bLast - aStart - bStart) {
	          // Optimization: number of changes in reverse direction
	          // is equal to number of items in preceding interval,
	          // therefore it cannot contain any common items.
	          division.aEndPreceding = aStart;
	          division.bEndPreceding = bStart;
	        } else {
	          division.aEndPreceding = aLast;
	          division.bEndPreceding = bLast;
	        }
	        division.nCommonPreceding = nCommonR;
	        if (nCommonR !== 0) {
	          // The last point of reverse path segment is start of common subsequence.
	          division.aCommonPreceding = aLast;
	          division.bCommonPreceding = bLast;
	        }
	        division.nChangeFollowing = d - 1;
	        if (d === 1) {
	          // There is no previous path segment.
	          division.nCommonFollowing = 0;
	          division.aStartFollowing = aEnd;
	          division.bStartFollowing = bEnd;
	        } else {
	          // Unlike the Myers algorithm which finds only the middle “snake”
	          // this package can find two common subsequences per division.
	          // Last point of previous path segment is on an adjacent diagonal.
	          const bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1);

	          // Because of invariant that intervals following the middle change
	          // cannot have common items at the start,
	          // move in forward direction along a diagonal of common items.
	          const nCommonF = countCommonItemsF(
	            aLastPrev,
	            aEnd,
	            bLastPrev,
	            bEnd,
	            isCommon
	          );
	          division.nCommonFollowing = nCommonF;
	          if (nCommonF !== 0) {
	            // The last point of reverse path segment is start of common subsequence.
	            division.aCommonFollowing = aLastPrev;
	            division.bCommonFollowing = bLastPrev;
	          }
	          const aStartFollowing = aLastPrev + nCommonF; // aFirstPrev
	          const bStartFollowing = bLastPrev + nCommonF; // bFirstPrev

	          if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
	            // Optimization: number of changes in forward direction
	            // is equal to number of items in following interval,
	            // therefore it cannot contain any common items.
	            division.aStartFollowing = aEnd;
	            division.bStartFollowing = bEnd;
	          } else {
	            division.aStartFollowing = aStartFollowing;
	            division.bStartFollowing = bStartFollowing;
	          }
	        }
	        return true;
	      }
	    }
	  }
	  return false;
	};

	// Given index intervals and input function to compare items at indexes,
	// divide at the middle change.
	//
	// DO NOT CALL if start === end, because interval cannot contain common items
	// and because this function will throw the “no overlap” error.
	const divide = (
	  nChange,
	  aStart,
	  aEnd,
	  bStart,
	  bEnd,
	  isCommon,
	  aIndexesF,
	  aIndexesR,
	  division // output
	) => {
	  const bF = bStart - aStart; // bIndex = bF + aIndex - kF
	  const bR = bEnd - aEnd; // bIndex = bR + aIndex - kR
	  const aLength = aEnd - aStart;
	  const bLength = bEnd - bStart;

	  // Because graph has square or portrait orientation,
	  // length difference is minimum number of items to insert from b.
	  // Corresponding forward and reverse diagonals in graph
	  // depend on length difference of the sequences:
	  // kF = kR - baDeltaLength
	  // kR = kF + baDeltaLength
	  const baDeltaLength = bLength - aLength;

	  // Optimization: max diagonal in graph intersects corner of shorter side.
	  let iMaxF = aLength;
	  let iMaxR = aLength;

	  // Initialize no changes yet in forward or reverse direction:
	  aIndexesF[0] = aStart - 1; // at open start of interval, outside closed start
	  aIndexesR[0] = aEnd; // at open end of interval

	  if (baDeltaLength % 2 === 0) {
	    // The number of changes in paths is 2 * d if length difference is even.
	    const dMin = (nChange || baDeltaLength) / 2;
	    const dMax = (aLength + bLength) / 2;
	    for (let d = 1; d <= dMax; d += 1) {
	      iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
	      if (d < dMin) {
	        iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
	      } else if (
	        // If a reverse path overlaps a forward path in the same diagonal,
	        // return a division of the index intervals at the middle change.
	        extendOverlappablePathsR(
	          d,
	          aStart,
	          aEnd,
	          bStart,
	          bEnd,
	          isCommon,
	          aIndexesF,
	          iMaxF,
	          aIndexesR,
	          iMaxR,
	          division
	        )
	      ) {
	        return;
	      }
	    }
	  } else {
	    // The number of changes in paths is 2 * d - 1 if length difference is odd.
	    const dMin = ((nChange || baDeltaLength) + 1) / 2;
	    const dMax = (aLength + bLength + 1) / 2;

	    // Unroll first half iteration so loop extends the relevant pairs of paths.
	    // Because of invariant that intervals have no common items at start or end,
	    // and limitation not to call divide with empty intervals,
	    // therefore it cannot be called if a forward path with one change
	    // would overlap a reverse path with no changes, even if dMin === 1.
	    let d = 1;
	    iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
	    for (d += 1; d <= dMax; d += 1) {
	      iMaxR = extendPathsR(
	        d - 1,
	        aStart,
	        bStart,
	        bR,
	        isCommon,
	        aIndexesR,
	        iMaxR
	      );
	      if (d < dMin) {
	        iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
	      } else if (
	        // If a forward path overlaps a reverse path in the same diagonal,
	        // return a division of the index intervals at the middle change.
	        extendOverlappablePathsF(
	          d,
	          aStart,
	          aEnd,
	          bStart,
	          bEnd,
	          isCommon,
	          aIndexesF,
	          iMaxF,
	          aIndexesR,
	          iMaxR,
	          division
	        )
	      ) {
	        return;
	      }
	    }
	  }

	  /* istanbul ignore next */
	  throw new Error(
	    `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
	  );
	};

	// Given index intervals and input function to compare items at indexes,
	// return by output function the number of adjacent items and starting indexes
	// of each common subsequence. Divide and conquer with only linear space.
	//
	// The index intervals are half open [start, end) like array slice method.
	// DO NOT CALL if start === end, because interval cannot contain common items
	// and because divide function will throw the “no overlap” error.
	const findSubsequences = (
	  nChange,
	  aStart,
	  aEnd,
	  bStart,
	  bEnd,
	  transposed,
	  callbacks,
	  aIndexesF,
	  aIndexesR,
	  division // temporary memory, not input nor output
	) => {
	  if (bEnd - bStart < aEnd - aStart) {
	    // Transpose graph so it has portrait instead of landscape orientation.
	    // Always compare shorter to longer sequence for consistency and optimization.
	    transposed = !transposed;
	    if (transposed && callbacks.length === 1) {
	      // Lazily wrap callback functions to swap args if graph is transposed.
	      const {foundSubsequence, isCommon} = callbacks[0];
	      callbacks[1] = {
	        foundSubsequence: (nCommon, bCommon, aCommon) => {
	          foundSubsequence(nCommon, aCommon, bCommon);
	        },
	        isCommon: (bIndex, aIndex) => isCommon(aIndex, bIndex)
	      };
	    }
	    const tStart = aStart;
	    const tEnd = aEnd;
	    aStart = bStart;
	    aEnd = bEnd;
	    bStart = tStart;
	    bEnd = tEnd;
	  }
	  const {foundSubsequence, isCommon} = callbacks[transposed ? 1 : 0];

	  // Divide the index intervals at the middle change.
	  divide(
	    nChange,
	    aStart,
	    aEnd,
	    bStart,
	    bEnd,
	    isCommon,
	    aIndexesF,
	    aIndexesR,
	    division
	  );
	  const {
	    nChangePreceding,
	    aEndPreceding,
	    bEndPreceding,
	    nCommonPreceding,
	    aCommonPreceding,
	    bCommonPreceding,
	    nCommonFollowing,
	    aCommonFollowing,
	    bCommonFollowing,
	    nChangeFollowing,
	    aStartFollowing,
	    bStartFollowing
	  } = division;

	  // Unless either index interval is empty, they might contain common items.
	  if (aStart < aEndPreceding && bStart < bEndPreceding) {
	    // Recursely find and return common subsequences preceding the division.
	    findSubsequences(
	      nChangePreceding,
	      aStart,
	      aEndPreceding,
	      bStart,
	      bEndPreceding,
	      transposed,
	      callbacks,
	      aIndexesF,
	      aIndexesR,
	      division
	    );
	  }

	  // Return common subsequences that are adjacent to the middle change.
	  if (nCommonPreceding !== 0) {
	    foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
	  }
	  if (nCommonFollowing !== 0) {
	    foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
	  }

	  // Unless either index interval is empty, they might contain common items.
	  if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
	    // Recursely find and return common subsequences following the division.
	    findSubsequences(
	      nChangeFollowing,
	      aStartFollowing,
	      aEnd,
	      bStartFollowing,
	      bEnd,
	      transposed,
	      callbacks,
	      aIndexesF,
	      aIndexesR,
	      division
	    );
	  }
	};
	const validateLength = (name, arg) => {
	  if (typeof arg !== 'number') {
	    throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
	  }
	  if (!Number.isSafeInteger(arg)) {
	    throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
	  }
	  if (arg < 0) {
	    throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
	  }
	};
	const validateCallback = (name, arg) => {
	  const type = typeof arg;
	  if (type !== 'function') {
	    throw new TypeError(`${pkg}: ${name} typeof ${type} is not a function`);
	  }
	};

	// Compare items in two sequences to find a longest common subsequence.
	// Given lengths of sequences and input function to compare items at indexes,
	// return by output function the number of adjacent items and starting indexes
	// of each common subsequence.
	function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
	  validateLength('aLength', aLength);
	  validateLength('bLength', bLength);
	  validateCallback('isCommon', isCommon);
	  validateCallback('foundSubsequence', foundSubsequence);

	  // Count common items from the start in the forward direction.
	  const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
	  if (nCommonF !== 0) {
	    foundSubsequence(nCommonF, 0, 0);
	  }

	  // Unless both sequences consist of common items only,
	  // find common items in the half-trimmed index intervals.
	  if (aLength !== nCommonF || bLength !== nCommonF) {
	    // Invariant: intervals do not have common items at the start.
	    // The start of an index interval is closed like array slice method.
	    const aStart = nCommonF;
	    const bStart = nCommonF;

	    // Count common items from the end in the reverse direction.
	    const nCommonR = countCommonItemsR(
	      aStart,
	      aLength - 1,
	      bStart,
	      bLength - 1,
	      isCommon
	    );

	    // Invariant: intervals do not have common items at the end.
	    // The end of an index interval is open like array slice method.
	    const aEnd = aLength - nCommonR;
	    const bEnd = bLength - nCommonR;

	    // Unless one sequence consists of common items only,
	    // therefore the other trimmed index interval consists of changes only,
	    // find common items in the trimmed index intervals.
	    const nCommonFR = nCommonF + nCommonR;
	    if (aLength !== nCommonFR && bLength !== nCommonFR) {
	      const nChange = 0; // number of change items is not yet known
	      const transposed = false; // call the original unwrapped functions
	      const callbacks = [
	        {
	          foundSubsequence,
	          isCommon
	        }
	      ];

	      // Indexes in sequence a of last points in furthest reaching paths
	      // from outside the start at top left in the forward direction:
	      const aIndexesF = [NOT_YET_SET];
	      // from the end at bottom right in the reverse direction:
	      const aIndexesR = [NOT_YET_SET];

	      // Initialize one object as output of all calls to divide function.
	      const division = {
	        aCommonFollowing: NOT_YET_SET,
	        aCommonPreceding: NOT_YET_SET,
	        aEndPreceding: NOT_YET_SET,
	        aStartFollowing: NOT_YET_SET,
	        bCommonFollowing: NOT_YET_SET,
	        bCommonPreceding: NOT_YET_SET,
	        bEndPreceding: NOT_YET_SET,
	        bStartFollowing: NOT_YET_SET,
	        nChangeFollowing: NOT_YET_SET,
	        nChangePreceding: NOT_YET_SET,
	        nCommonFollowing: NOT_YET_SET,
	        nCommonPreceding: NOT_YET_SET
	      };

	      // Find and return common subsequences in the trimmed index intervals.
	      findSubsequences(
	        nChange,
	        aStart,
	        aEnd,
	        bStart,
	        bEnd,
	        transposed,
	        callbacks,
	        aIndexesF,
	        aIndexesR,
	        division
	      );
	    }
	    if (nCommonR !== 0) {
	      foundSubsequence(nCommonR, aEnd, bEnd);
	    }
	  }
	}
	return build;
}

var buildExports = requireBuild();
var diffSequences = /*@__PURE__*/getDefaultExportFromCjs(buildExports);

function formatTrailingSpaces(line, trailingSpaceFormatter) {
	return line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
}
function printDiffLine(line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) {
	return line.length !== 0 ? color(`${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
}
function printDeleteLine(line, isFirstOrLast, { aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
	return printDiffLine(line, isFirstOrLast, aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printInsertLine(line, isFirstOrLast, { bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
	return printDiffLine(line, isFirstOrLast, bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printCommonLine(line, isFirstOrLast, { commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
	return printDiffLine(line, isFirstOrLast, commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
// In GNU diff format, indexes are one-based instead of zero-based.
function createPatchMark(aStart, aEnd, bStart, bEnd, { patchColor }) {
	return patchColor(`@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`);
}
// jest --no-expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting (and patch marks, if needed).
function joinAlignedDiffsNoExpand(diffs, options) {
	const iLength = diffs.length;
	const nContextLines = options.contextLines;
	const nContextLines2 = nContextLines + nContextLines;
	// First pass: count output lines and see if it has patches.
	let jLength = iLength;
	let hasExcessAtStartOrEnd = false;
	let nExcessesBetweenChanges = 0;
	let i = 0;
	while (i !== iLength) {
		const iStart = i;
		while (i !== iLength && diffs[i][0] === DIFF_EQUAL) {
			i += 1;
		}
		if (iStart !== i) {
			if (iStart === 0) {
				// at start
				if (i > nContextLines) {
					jLength -= i - nContextLines;
					hasExcessAtStartOrEnd = true;
				}
			} else if (i === iLength) {
				// at end
				const n = i - iStart;
				if (n > nContextLines) {
					jLength -= n - nContextLines;
					hasExcessAtStartOrEnd = true;
				}
			} else {
				// between changes
				const n = i - iStart;
				if (n > nContextLines2) {
					jLength -= n - nContextLines2;
					nExcessesBetweenChanges += 1;
				}
			}
		}
		while (i !== iLength && diffs[i][0] !== DIFF_EQUAL) {
			i += 1;
		}
	}
	const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
	if (nExcessesBetweenChanges !== 0) {
		jLength += nExcessesBetweenChanges + 1;
	} else if (hasExcessAtStartOrEnd) {
		jLength += 1;
	}
	const jLast = jLength - 1;
	const lines = [];
	let jPatchMark = 0;
	if (hasPatch) {
		lines.push("");
	}
	// Indexes of expected or received lines in current patch:
	let aStart = 0;
	let bStart = 0;
	let aEnd = 0;
	let bEnd = 0;
	const pushCommonLine = (line) => {
		const j = lines.length;
		lines.push(printCommonLine(line, j === 0 || j === jLast, options));
		aEnd += 1;
		bEnd += 1;
	};
	const pushDeleteLine = (line) => {
		const j = lines.length;
		lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
		aEnd += 1;
	};
	const pushInsertLine = (line) => {
		const j = lines.length;
		lines.push(printInsertLine(line, j === 0 || j === jLast, options));
		bEnd += 1;
	};
	// Second pass: push lines with diff formatting (and patch marks, if needed).
	i = 0;
	while (i !== iLength) {
		let iStart = i;
		while (i !== iLength && diffs[i][0] === DIFF_EQUAL) {
			i += 1;
		}
		if (iStart !== i) {
			if (iStart === 0) {
				// at beginning
				if (i > nContextLines) {
					iStart = i - nContextLines;
					aStart = iStart;
					bStart = iStart;
					aEnd = aStart;
					bEnd = bStart;
				}
				for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
					pushCommonLine(diffs[iCommon][1]);
				}
			} else if (i === iLength) {
				// at end
				const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
				for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
					pushCommonLine(diffs[iCommon][1]);
				}
			} else {
				// between changes
				const nCommon = i - iStart;
				if (nCommon > nContextLines2) {
					const iEnd = iStart + nContextLines;
					for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) {
						pushCommonLine(diffs[iCommon][1]);
					}
					lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
					jPatchMark = lines.length;
					lines.push("");
					const nOmit = nCommon - nContextLines2;
					aStart = aEnd + nOmit;
					bStart = bEnd + nOmit;
					aEnd = aStart;
					bEnd = bStart;
					for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) {
						pushCommonLine(diffs[iCommon][1]);
					}
				} else {
					for (let iCommon = iStart; iCommon !== i; iCommon += 1) {
						pushCommonLine(diffs[iCommon][1]);
					}
				}
			}
		}
		while (i !== iLength && diffs[i][0] === DIFF_DELETE) {
			pushDeleteLine(diffs[i][1]);
			i += 1;
		}
		while (i !== iLength && diffs[i][0] === DIFF_INSERT) {
			pushInsertLine(diffs[i][1]);
			i += 1;
		}
	}
	if (hasPatch) {
		lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
	}
	return lines.join("\n");
}
// jest --expand
//
// Given array of aligned strings with inverse highlight formatting,
// return joined lines with diff formatting.
function joinAlignedDiffsExpand(diffs, options) {
	return diffs.map((diff, i, diffs) => {
		const line = diff[1];
		const isFirstOrLast = i === 0 || i === diffs.length - 1;
		switch (diff[0]) {
			case DIFF_DELETE: return printDeleteLine(line, isFirstOrLast, options);
			case DIFF_INSERT: return printInsertLine(line, isFirstOrLast, options);
			default: return printCommonLine(line, isFirstOrLast, options);
		}
	}).join("\n");
}

const noColor = (string) => string;
const DIFF_CONTEXT_DEFAULT = 5;
const DIFF_TRUNCATE_THRESHOLD_DEFAULT = 0;
function getDefaultOptions() {
	return {
		aAnnotation: "Expected",
		aColor: c.green,
		aIndicator: "-",
		bAnnotation: "Received",
		bColor: c.red,
		bIndicator: "+",
		changeColor: c.inverse,
		changeLineTrailingSpaceColor: noColor,
		commonColor: c.dim,
		commonIndicator: " ",
		commonLineTrailingSpaceColor: noColor,
		compareKeys: undefined,
		contextLines: DIFF_CONTEXT_DEFAULT,
		emptyFirstOrLastLinePlaceholder: "",
		expand: false,
		includeChangeCounts: false,
		omitAnnotationLines: false,
		patchColor: c.yellow,
		printBasicPrototype: false,
		truncateThreshold: DIFF_TRUNCATE_THRESHOLD_DEFAULT,
		truncateAnnotation: "... Diff result is truncated",
		truncateAnnotationColor: noColor
	};
}
function getCompareKeys(compareKeys) {
	return compareKeys && typeof compareKeys === "function" ? compareKeys : undefined;
}
function getContextLines(contextLines) {
	return typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
}
// Pure function returns options with all properties.
function normalizeDiffOptions(options = {}) {
	return {
		...getDefaultOptions(),
		...options,
		compareKeys: getCompareKeys(options.compareKeys),
		contextLines: getContextLines(options.contextLines)
	};
}

function isEmptyString(lines) {
	return lines.length === 1 && lines[0].length === 0;
}
function countChanges(diffs) {
	let a = 0;
	let b = 0;
	diffs.forEach((diff) => {
		switch (diff[0]) {
			case DIFF_DELETE:
				a += 1;
				break;
			case DIFF_INSERT:
				b += 1;
				break;
		}
	});
	return {
		a,
		b
	};
}
function printAnnotation({ aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator, includeChangeCounts, omitAnnotationLines }, changeCounts) {
	if (omitAnnotationLines) {
		return "";
	}
	let aRest = "";
	let bRest = "";
	if (includeChangeCounts) {
		const aCount = String(changeCounts.a);
		const bCount = String(changeCounts.b);
		// Padding right aligns the ends of the annotations.
		const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
		const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
		const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
		// Padding left aligns the ends of the counts.
		const baCountLengthDiff = bCount.length - aCount.length;
		const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
		const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
		aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
		bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
	}
	const a = `${aIndicator} ${aAnnotation}${aRest}`;
	const b = `${bIndicator} ${bAnnotation}${bRest}`;
	return `${aColor(a)}\n${bColor(b)}\n\n`;
}
function printDiffLines(diffs, truncated, options) {
	return printAnnotation(options, countChanges(diffs)) + (options.expand ? joinAlignedDiffsExpand(diffs, options) : joinAlignedDiffsNoExpand(diffs, options)) + (truncated ? options.truncateAnnotationColor(`\n${options.truncateAnnotation}`) : "");
}
// Compare two arrays of strings line-by-line. Format as comparison lines.
function diffLinesUnified(aLines, bLines, options) {
	const normalizedOptions = normalizeDiffOptions(options);
	const [diffs, truncated] = diffLinesRaw(isEmptyString(aLines) ? [] : aLines, isEmptyString(bLines) ? [] : bLines, normalizedOptions);
	return printDiffLines(diffs, truncated, normalizedOptions);
}
// Given two pairs of arrays of strings:
// Compare the pair of comparison arrays line-by-line.
// Format the corresponding lines in the pair of displayable arrays.
function diffLinesUnified2(aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) {
	if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
		aLinesDisplay = [];
		aLinesCompare = [];
	}
	if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
		bLinesDisplay = [];
		bLinesCompare = [];
	}
	if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
		// Fall back to diff of display lines.
		return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
	}
	const [diffs, truncated] = diffLinesRaw(aLinesCompare, bLinesCompare, options);
	// Replace comparison lines with displayable lines.
	let aIndex = 0;
	let bIndex = 0;
	diffs.forEach((diff) => {
		switch (diff[0]) {
			case DIFF_DELETE:
				diff[1] = aLinesDisplay[aIndex];
				aIndex += 1;
				break;
			case DIFF_INSERT:
				diff[1] = bLinesDisplay[bIndex];
				bIndex += 1;
				break;
			default:
				diff[1] = bLinesDisplay[bIndex];
				aIndex += 1;
				bIndex += 1;
		}
	});
	return printDiffLines(diffs, truncated, normalizeDiffOptions(options));
}
// Compare two arrays of strings line-by-line.
function diffLinesRaw(aLines, bLines, options) {
	const truncate = (options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? false;
	const truncateThreshold = Math.max(Math.floor((options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? 0), 0);
	const aLength = truncate ? Math.min(aLines.length, truncateThreshold) : aLines.length;
	const bLength = truncate ? Math.min(bLines.length, truncateThreshold) : bLines.length;
	const truncated = aLength !== aLines.length || bLength !== bLines.length;
	const isCommon = (aIndex, bIndex) => aLines[aIndex] === bLines[bIndex];
	const diffs = [];
	let aIndex = 0;
	let bIndex = 0;
	const foundSubsequence = (nCommon, aCommon, bCommon) => {
		for (; aIndex !== aCommon; aIndex += 1) {
			diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
		}
		for (; bIndex !== bCommon; bIndex += 1) {
			diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
		}
		for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1) {
			diffs.push(new Diff(DIFF_EQUAL, bLines[bIndex]));
		}
	};
	diffSequences(aLength, bLength, isCommon, foundSubsequence);
	// After the last common subsequence, push remaining change items.
	for (; aIndex !== aLength; aIndex += 1) {
		diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
	}
	for (; bIndex !== bLength; bIndex += 1) {
		diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
	}
	return [diffs, truncated];
}

// get the type of a value with handling the edge cases like `typeof []`
// and `typeof null`
function getType(value) {
	if (value === undefined) {
		return "undefined";
	} else if (value === null) {
		return "null";
	} else if (Array.isArray(value)) {
		return "array";
	} else if (typeof value === "boolean") {
		return "boolean";
	} else if (typeof value === "function") {
		return "function";
	} else if (typeof value === "number") {
		return "number";
	} else if (typeof value === "string") {
		return "string";
	} else if (typeof value === "bigint") {
		return "bigint";
	} else if (typeof value === "object") {
		if (value != null) {
			if (value.constructor === RegExp) {
				return "regexp";
			} else if (value.constructor === Map) {
				return "map";
			} else if (value.constructor === Set) {
				return "set";
			} else if (value.constructor === Date) {
				return "date";
			}
		}
		return "object";
	} else if (typeof value === "symbol") {
		return "symbol";
	}
	throw new Error(`value of unknown type: ${value}`);
}

// platforms compatible
function getNewLineSymbol(string) {
	return string.includes("\r\n") ? "\r\n" : "\n";
}
function diffStrings(a, b, options) {
	const truncate = (options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? false;
	const truncateThreshold = Math.max(Math.floor((options === null || options === void 0 ? void 0 : options.truncateThreshold) ?? 0), 0);
	let aLength = a.length;
	let bLength = b.length;
	if (truncate) {
		const aMultipleLines = a.includes("\n");
		const bMultipleLines = b.includes("\n");
		const aNewLineSymbol = getNewLineSymbol(a);
		const bNewLineSymbol = getNewLineSymbol(b);
		// multiple-lines string expects a newline to be appended at the end
		const _a = aMultipleLines ? `${a.split(aNewLineSymbol, truncateThreshold).join(aNewLineSymbol)}\n` : a;
		const _b = bMultipleLines ? `${b.split(bNewLineSymbol, truncateThreshold).join(bNewLineSymbol)}\n` : b;
		aLength = _a.length;
		bLength = _b.length;
	}
	const truncated = aLength !== a.length || bLength !== b.length;
	const isCommon = (aIndex, bIndex) => a[aIndex] === b[bIndex];
	let aIndex = 0;
	let bIndex = 0;
	const diffs = [];
	const foundSubsequence = (nCommon, aCommon, bCommon) => {
		if (aIndex !== aCommon) {
			diffs.push(new Diff(DIFF_DELETE, a.slice(aIndex, aCommon)));
		}
		if (bIndex !== bCommon) {
			diffs.push(new Diff(DIFF_INSERT, b.slice(bIndex, bCommon)));
		}
		aIndex = aCommon + nCommon;
		bIndex = bCommon + nCommon;
		diffs.push(new Diff(DIFF_EQUAL, b.slice(bCommon, bIndex)));
	};
	diffSequences(aLength, bLength, isCommon, foundSubsequence);
	// After the last common subsequence, push remaining change items.
	if (aIndex !== aLength) {
		diffs.push(new Diff(DIFF_DELETE, a.slice(aIndex)));
	}
	if (bIndex !== bLength) {
		diffs.push(new Diff(DIFF_INSERT, b.slice(bIndex)));
	}
	return [diffs, truncated];
}

// Given change op and array of diffs, return concatenated string:
// * include common strings
// * include change strings which have argument op with changeColor
// * exclude change strings which have opposite op
function concatenateRelevantDiffs(op, diffs, changeColor) {
	return diffs.reduce((reduced, diff) => reduced + (diff[0] === DIFF_EQUAL ? diff[1] : diff[0] === op && diff[1].length !== 0 ? changeColor(diff[1]) : ""), "");
}
// Encapsulate change lines until either a common newline or the end.
class ChangeBuffer {
	op;
	line;
	lines;
	changeColor;
	constructor(op, changeColor) {
		this.op = op;
		this.line = [];
		this.lines = [];
		this.changeColor = changeColor;
	}
	pushSubstring(substring) {
		this.pushDiff(new Diff(this.op, substring));
	}
	pushLine() {
		// Assume call only if line has at least one diff,
		// therefore an empty line must have a diff which has an empty string.
		// If line has multiple diffs, then assume it has a common diff,
		// therefore change diffs have change color;
		// otherwise then it has line color only.
		this.lines.push(this.line.length !== 1 ? new Diff(this.op, concatenateRelevantDiffs(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new Diff(this.op, this.line[0][1]));
		this.line.length = 0;
	}
	isLineEmpty() {
		return this.line.length === 0;
	}
	// Minor input to buffer.
	pushDiff(diff) {
		this.line.push(diff);
	}
	// Main input to buffer.
	align(diff) {
		const string = diff[1];
		if (string.includes("\n")) {
			const substrings = string.split("\n");
			const iLast = substrings.length - 1;
			substrings.forEach((substring, i) => {
				if (i < iLast) {
					// The first substring completes the current change line.
					// A middle substring is a change line.
					this.pushSubstring(substring);
					this.pushLine();
				} else if (substring.length !== 0) {
					// The last substring starts a change line, if it is not empty.
					// Important: This non-empty condition also automatically omits
					// the newline appended to the end of expected and received strings.
					this.pushSubstring(substring);
				}
			});
		} else {
			// Append non-multiline string to current change line.
			this.pushDiff(diff);
		}
	}
	// Output from buffer.
	moveLinesTo(lines) {
		if (!this.isLineEmpty()) {
			this.pushLine();
		}
		lines.push(...this.lines);
		this.lines.length = 0;
	}
}
// Encapsulate common and change lines.
class CommonBuffer {
	deleteBuffer;
	insertBuffer;
	lines;
	constructor(deleteBuffer, insertBuffer) {
		this.deleteBuffer = deleteBuffer;
		this.insertBuffer = insertBuffer;
		this.lines = [];
	}
	pushDiffCommonLine(diff) {
		this.lines.push(diff);
	}
	pushDiffChangeLines(diff) {
		const isDiffEmpty = diff[1].length === 0;
		// An empty diff string is redundant, unless a change line is empty.
		if (!isDiffEmpty || this.deleteBuffer.isLineEmpty()) {
			this.deleteBuffer.pushDiff(diff);
		}
		if (!isDiffEmpty || this.insertBuffer.isLineEmpty()) {
			this.insertBuffer.pushDiff(diff);
		}
	}
	flushChangeLines() {
		this.deleteBuffer.moveLinesTo(this.lines);
		this.insertBuffer.moveLinesTo(this.lines);
	}
	// Input to buffer.
	align(diff) {
		const op = diff[0];
		const string = diff[1];
		if (string.includes("\n")) {
			const substrings = string.split("\n");
			const iLast = substrings.length - 1;
			substrings.forEach((substring, i) => {
				if (i === 0) {
					const subdiff = new Diff(op, substring);
					if (this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty()) {
						// If both current change lines are empty,
						// then the first substring is a common line.
						this.flushChangeLines();
						this.pushDiffCommonLine(subdiff);
					} else {
						// If either current change line is non-empty,
						// then the first substring completes the change lines.
						this.pushDiffChangeLines(subdiff);
						this.flushChangeLines();
					}
				} else if (i < iLast) {
					// A middle substring is a common line.
					this.pushDiffCommonLine(new Diff(op, substring));
				} else if (substring.length !== 0) {
					// The last substring starts a change line, if it is not empty.
					// Important: This non-empty condition also automatically omits
					// the newline appended to the end of expected and received strings.
					this.pushDiffChangeLines(new Diff(op, substring));
				}
			});
		} else {
			// Append non-multiline string to current change lines.
			// Important: It cannot be at the end following empty change lines,
			// because newline appended to the end of expected and received strings.
			this.pushDiffChangeLines(diff);
		}
	}
	// Output from buffer.
	getLines() {
		this.flushChangeLines();
		return this.lines;
	}
}
// Given diffs from expected and received strings,
// return new array of diffs split or joined into lines.
//
// To correctly align a change line at the end, the algorithm:
// * assumes that a newline was appended to the strings
// * omits the last newline from the output array
//
// Assume the function is not called:
// * if either expected or received is empty string
// * if neither expected nor received is multiline string
function getAlignedDiffs(diffs, changeColor) {
	const deleteBuffer = new ChangeBuffer(DIFF_DELETE, changeColor);
	const insertBuffer = new ChangeBuffer(DIFF_INSERT, changeColor);
	const commonBuffer = new CommonBuffer(deleteBuffer, insertBuffer);
	diffs.forEach((diff) => {
		switch (diff[0]) {
			case DIFF_DELETE:
				deleteBuffer.align(diff);
				break;
			case DIFF_INSERT:
				insertBuffer.align(diff);
				break;
			default: commonBuffer.align(diff);
		}
	});
	return commonBuffer.getLines();
}

function hasCommonDiff(diffs, isMultiline) {
	if (isMultiline) {
		// Important: Ignore common newline that was appended to multiline strings!
		const iLast = diffs.length - 1;
		return diffs.some((diff, i) => diff[0] === DIFF_EQUAL && (i !== iLast || diff[1] !== "\n"));
	}
	return diffs.some((diff) => diff[0] === DIFF_EQUAL);
}
// Compare two strings character-by-character.
// Format as comparison lines in which changed substrings have inverse colors.
function diffStringsUnified(a, b, options) {
	if (a !== b && a.length !== 0 && b.length !== 0) {
		const isMultiline = a.includes("\n") || b.includes("\n");
		// getAlignedDiffs assumes that a newline was appended to the strings.
		const [diffs, truncated] = diffStringsRaw(isMultiline ? `${a}\n` : a, isMultiline ? `${b}\n` : b, true, options);
		if (hasCommonDiff(diffs, isMultiline)) {
			const optionsNormalized = normalizeDiffOptions(options);
			const lines = getAlignedDiffs(diffs, optionsNormalized.changeColor);
			return printDiffLines(lines, truncated, optionsNormalized);
		}
	}
	// Fall back to line-by-line diff.
	return diffLinesUnified(a.split("\n"), b.split("\n"), options);
}
// Compare two strings character-by-character.
// Optionally clean up small common substrings, also known as chaff.
function diffStringsRaw(a, b, cleanup, options) {
	const [diffs, truncated] = diffStrings(a, b, options);
	if (cleanup) {
		diff_cleanupSemantic(diffs);
	}
	return [diffs, truncated];
}

function getCommonMessage(message, options) {
	const { commonColor } = normalizeDiffOptions(options);
	return commonColor(message);
}
const { AsymmetricMatcher, DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent } = plugins;
const PLUGINS = [
	ReactTestComponent,
	ReactElement,
	DOMElement,
	DOMCollection,
	Immutable,
	AsymmetricMatcher,
	plugins.Error
];
const FORMAT_OPTIONS = {
	maxDepth: 20,
	plugins: PLUGINS
};
const FALLBACK_FORMAT_OPTIONS = {
	callToJSON: false,
	maxDepth: 8,
	plugins: PLUGINS
};
// Generate a string that will highlight the difference between two values
// with green and red. (similar to how github does code diffing)
/**
* @param a Expected value
* @param b Received value
* @param options Diff options
* @returns {string | null} a string diff
*/
function diff(a, b, options) {
	if (Object.is(a, b)) {
		return "";
	}
	const aType = getType(a);
	let expectedType = aType;
	let omitDifference = false;
	if (aType === "object" && typeof a.asymmetricMatch === "function") {
		if (a.$$typeof !== Symbol.for("jest.asymmetricMatcher")) {
			// Do not know expected type of user-defined asymmetric matcher.
			return undefined;
		}
		if (typeof a.getExpectedType !== "function") {
			// For example, expect.anything() matches either null or undefined
			return undefined;
		}
		expectedType = a.getExpectedType();
		// Primitive types boolean and number omit difference below.
		// For example, omit difference for expect.stringMatching(regexp)
		omitDifference = expectedType === "string";
	}
	if (expectedType !== getType(b)) {
		const { aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator } = normalizeDiffOptions(options);
		const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
		let aDisplay = format(a, formatOptions);
		let bDisplay = format(b, formatOptions);
		// even if prettyFormat prints successfully big objects,
		// large string can choke later on (concatenation? RPC?),
		// so truncate it to a reasonable length here.
		// (For example, playwright's ElementHandle can become about 200_000_000 length string)
		const MAX_LENGTH = 1e5;
		function truncate(s) {
			return s.length <= MAX_LENGTH ? s : `${s.slice(0, MAX_LENGTH)}...`;
		}
		aDisplay = truncate(aDisplay);
		bDisplay = truncate(bDisplay);
		const aDiff = `${aColor(`${aIndicator} ${aAnnotation}:`)} \n${aDisplay}`;
		const bDiff = `${bColor(`${bIndicator} ${bAnnotation}:`)} \n${bDisplay}`;
		return `${aDiff}\n\n${bDiff}`;
	}
	if (omitDifference) {
		return undefined;
	}
	switch (aType) {
		case "string": return diffLinesUnified(a.split("\n"), b.split("\n"), options);
		case "boolean":
		case "number": return comparePrimitive(a, b, options);
		case "map": return compareObjects(sortMap(a), sortMap(b), options);
		case "set": return compareObjects(sortSet(a), sortSet(b), options);
		default: return compareObjects(a, b, options);
	}
}
function comparePrimitive(a, b, options) {
	const aFormat = format(a, FORMAT_OPTIONS);
	const bFormat = format(b, FORMAT_OPTIONS);
	return aFormat === bFormat ? "" : diffLinesUnified(aFormat.split("\n"), bFormat.split("\n"), options);
}
function sortMap(map) {
	return new Map(Array.from(map.entries()).sort());
}
function sortSet(set) {
	return new Set(Array.from(set.values()).sort());
}
function compareObjects(a, b, options) {
	let difference;
	let hasThrown = false;
	try {
		const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
		difference = getObjectsDifference(a, b, formatOptions, options);
	} catch {
		hasThrown = true;
	}
	const noDiffMessage = getCommonMessage(NO_DIFF_MESSAGE, options);
	// If the comparison yields no results, compare again but this time
	// without calling `toJSON`. It's also possible that toJSON might throw.
	if (difference === undefined || difference === noDiffMessage) {
		const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
		difference = getObjectsDifference(a, b, formatOptions, options);
		if (difference !== noDiffMessage && !hasThrown) {
			difference = `${getCommonMessage(SIMILAR_MESSAGE, options)}\n\n${difference}`;
		}
	}
	return difference;
}
function getFormatOptions(formatOptions, options) {
	const { compareKeys, printBasicPrototype, maxDepth } = normalizeDiffOptions(options);
	return {
		...formatOptions,
		compareKeys,
		printBasicPrototype,
		maxDepth: maxDepth ?? formatOptions.maxDepth
	};
}
function getObjectsDifference(a, b, formatOptions, options) {
	const formatOptionsZeroIndent = {
		...formatOptions,
		indent: 0
	};
	const aCompare = format(a, formatOptionsZeroIndent);
	const bCompare = format(b, formatOptionsZeroIndent);
	if (aCompare === bCompare) {
		return getCommonMessage(NO_DIFF_MESSAGE, options);
	} else {
		const aDisplay = format(a, formatOptions);
		const bDisplay = format(b, formatOptions);
		return diffLinesUnified2(aDisplay.split("\n"), bDisplay.split("\n"), aCompare.split("\n"), bCompare.split("\n"), options);
	}
}
const MAX_DIFF_STRING_LENGTH = 2e4;
function isAsymmetricMatcher(data) {
	const type = getType$1(data);
	return type === "Object" && typeof data.asymmetricMatch === "function";
}
function isReplaceable(obj1, obj2) {
	const obj1Type = getType$1(obj1);
	const obj2Type = getType$1(obj2);
	return obj1Type === obj2Type && (obj1Type === "Object" || obj1Type === "Array");
}
function printDiffOrStringify(received, expected, options) {
	const { aAnnotation, bAnnotation } = normalizeDiffOptions(options);
	if (typeof expected === "string" && typeof received === "string" && expected.length > 0 && received.length > 0 && expected.length <= MAX_DIFF_STRING_LENGTH && received.length <= MAX_DIFF_STRING_LENGTH && expected !== received) {
		if (expected.includes("\n") || received.includes("\n")) {
			return diffStringsUnified(expected, received, options);
		}
		const [diffs] = diffStringsRaw(expected, received, true);
		const hasCommonDiff = diffs.some((diff) => diff[0] === DIFF_EQUAL);
		const printLabel = getLabelPrinter(aAnnotation, bAnnotation);
		const expectedLine = printLabel(aAnnotation) + printExpected(getCommonAndChangedSubstrings(diffs, DIFF_DELETE, hasCommonDiff));
		const receivedLine = printLabel(bAnnotation) + printReceived(getCommonAndChangedSubstrings(diffs, DIFF_INSERT, hasCommonDiff));
		return `${expectedLine}\n${receivedLine}`;
	}
	// if (isLineDiffable(expected, received)) {
	const clonedExpected = deepClone(expected, { forceWritable: true });
	const clonedReceived = deepClone(received, { forceWritable: true });
	const { replacedExpected, replacedActual } = replaceAsymmetricMatcher(clonedReceived, clonedExpected);
	const difference = diff(replacedExpected, replacedActual, options);
	return difference;
	// }
	// const printLabel = getLabelPrinter(aAnnotation, bAnnotation)
	// const expectedLine = printLabel(aAnnotation) + printExpected(expected)
	// const receivedLine
	//   = printLabel(bAnnotation)
	//   + (stringify(expected) === stringify(received)
	//     ? 'serializes to the same string'
	//     : printReceived(received))
	// return `${expectedLine}\n${receivedLine}`
}
function replaceAsymmetricMatcher(actual, expected, actualReplaced = new WeakSet(), expectedReplaced = new WeakSet()) {
	// handle asymmetric Error.cause diff
	if (actual instanceof Error && expected instanceof Error && typeof actual.cause !== "undefined" && typeof expected.cause === "undefined") {
		delete actual.cause;
		return {
			replacedActual: actual,
			replacedExpected: expected
		};
	}
	if (!isReplaceable(actual, expected)) {
		return {
			replacedActual: actual,
			replacedExpected: expected
		};
	}
	if (actualReplaced.has(actual) || expectedReplaced.has(expected)) {
		return {
			replacedActual: actual,
			replacedExpected: expected
		};
	}
	actualReplaced.add(actual);
	expectedReplaced.add(expected);
	getOwnProperties(expected).forEach((key) => {
		const expectedValue = expected[key];
		const actualValue = actual[key];
		if (isAsymmetricMatcher(expectedValue)) {
			if (expectedValue.asymmetricMatch(actualValue)) {
				actual[key] = expectedValue;
			}
		} else if (isAsymmetricMatcher(actualValue)) {
			if (actualValue.asymmetricMatch(expectedValue)) {
				expected[key] = actualValue;
			}
		} else if (isReplaceable(actualValue, expectedValue)) {
			const replaced = replaceAsymmetricMatcher(actualValue, expectedValue, actualReplaced, expectedReplaced);
			actual[key] = replaced.replacedActual;
			expected[key] = replaced.replacedExpected;
		}
	});
	return {
		replacedActual: actual,
		replacedExpected: expected
	};
}
function getLabelPrinter(...strings) {
	const maxLength = strings.reduce((max, string) => string.length > max ? string.length : max, 0);
	return (string) => `${string}: ${" ".repeat(maxLength - string.length)}`;
}
const SPACE_SYMBOL = "·";
function replaceTrailingSpaces(text) {
	return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
}
function printReceived(object) {
	return c.red(replaceTrailingSpaces(stringify(object)));
}
function printExpected(value) {
	return c.green(replaceTrailingSpaces(stringify(value)));
}
function getCommonAndChangedSubstrings(diffs, op, hasCommonDiff) {
	return diffs.reduce((reduced, diff) => reduced + (diff[0] === DIFF_EQUAL ? diff[1] : diff[0] === op ? hasCommonDiff ? c.inverse(diff[1]) : diff[1] : ""), "");
}

export { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT, Diff, diff, diffLinesRaw, diffLinesUnified, diffLinesUnified2, diffStringsRaw, diffStringsUnified, getLabelPrinter, printDiffOrStringify, replaceAsymmetricMatcher };
