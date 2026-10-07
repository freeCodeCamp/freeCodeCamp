import { commonPrefixLength, commonSuffixLength } from '../../../../base/common/strings.js';
import { OffsetRange } from '../ranges/offsetRange.js';
import { BaseEdit, BaseReplacement } from './edit.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class BaseStringEdit extends BaseEdit {
    apply(base) {
        const resultText = [];
        let pos = 0;
        for (const edit of this.replacements) {
            resultText.push(base.substring(pos, edit.replaceRange.start));
            resultText.push(edit.newText);
            pos = edit.replaceRange.endExclusive;
        }
        resultText.push(base.substring(pos));
        return resultText.join('');
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class BaseStringReplacement extends BaseReplacement {
    constructor(range, newText) {
        super(range);
        this.newText = newText;
    }
    getNewLength() { return this.newText.length; }
    toString() {
        return `${this.replaceRange} -> ${JSON.stringify(this.newText)}`;
    }
    replace(str) {
        return str.substring(0, this.replaceRange.start) + this.newText + str.substring(this.replaceRange.endExclusive);
    }
    removeCommonSuffixPrefix(originalText) {
        const oldText = originalText.substring(this.replaceRange.start, this.replaceRange.endExclusive);
        const prefixLen = commonPrefixLength(oldText, this.newText);
        const suffixLen = Math.min(oldText.length - prefixLen, this.newText.length - prefixLen, commonSuffixLength(oldText, this.newText));
        const replaceRange = new OffsetRange(this.replaceRange.start + prefixLen, this.replaceRange.endExclusive - suffixLen);
        const newText = this.newText.substring(prefixLen, this.newText.length - suffixLen);
        return new StringReplacement(replaceRange, newText);
    }
    removeCommonSuffixAndPrefix(source) {
        return this.removeCommonSuffix(source).removeCommonPrefix(source);
    }
    removeCommonPrefix(source) {
        const oldText = this.replaceRange.substring(source);
        const prefixLen = commonPrefixLength(oldText, this.newText);
        if (prefixLen === 0) {
            return this;
        }
        return this.slice(this.replaceRange.deltaStart(prefixLen), new OffsetRange(prefixLen, this.newText.length));
    }
    removeCommonSuffix(source) {
        const oldText = this.replaceRange.substring(source);
        const suffixLen = commonSuffixLength(oldText, this.newText);
        if (suffixLen === 0) {
            return this;
        }
        return this.slice(this.replaceRange.deltaEnd(-suffixLen), new OffsetRange(0, this.newText.length - suffixLen));
    }
    toJson() {
        return ({
            txt: this.newText,
            pos: this.replaceRange.start,
            len: this.replaceRange.length,
        });
    }
}
/**
 * Represents a set of replacements to a string.
 * All these replacements are applied at once.
*/
class StringEdit extends BaseStringEdit {
    static { this.empty = new StringEdit([]); }
    static compose(edits) {
        if (edits.length === 0) {
            return StringEdit.empty;
        }
        let result = edits[0];
        for (let i = 1; i < edits.length; i++) {
            result = result.compose(edits[i]);
        }
        return result;
    }
    constructor(replacements) {
        super(replacements);
    }
    _createNew(replacements) {
        return new StringEdit(replacements);
    }
}
class StringReplacement extends BaseStringReplacement {
    static insert(offset, text) {
        return new StringReplacement(OffsetRange.emptyAt(offset), text);
    }
    static replace(range, text) {
        return new StringReplacement(range, text);
    }
    equals(other) {
        return this.replaceRange.equals(other.replaceRange) && this.newText === other.newText;
    }
    tryJoinTouching(other) {
        return new StringReplacement(this.replaceRange.joinRightTouching(other.replaceRange), this.newText + other.newText);
    }
    slice(range, rangeInReplacement) {
        return new StringReplacement(range, rangeInReplacement ? rangeInReplacement.substring(this.newText) : this.newText);
    }
}
function applyEditsToRanges(sortedRanges, edit) {
    sortedRanges = sortedRanges.slice();
    // treat edits as deletion of the replace range and then as insertion that extends the first range
    const result = [];
    let offset = 0;
    for (const e of edit.replacements) {
        while (true) {
            // ranges before the current edit
            const r = sortedRanges[0];
            if (!r || r.endExclusive >= e.replaceRange.start) {
                break;
            }
            sortedRanges.shift();
            result.push(r.delta(offset));
        }
        const intersecting = [];
        while (true) {
            const r = sortedRanges[0];
            if (!r || !r.intersectsOrTouches(e.replaceRange)) {
                break;
            }
            sortedRanges.shift();
            intersecting.push(r);
        }
        for (let i = intersecting.length - 1; i >= 0; i--) {
            let r = intersecting[i];
            const overlap = r.intersect(e.replaceRange).length;
            r = r.deltaEnd(-overlap + (i === 0 ? e.newText.length : 0));
            const rangeAheadOfReplaceRange = r.start - e.replaceRange.start;
            if (rangeAheadOfReplaceRange > 0) {
                r = r.delta(-rangeAheadOfReplaceRange);
            }
            if (i !== 0) {
                r = r.delta(e.newText.length);
            }
            // We already took our offset into account.
            // Because we add r back to the queue (which then adds offset again),
            // we have to remove it here.
            r = r.delta(-(e.newText.length - e.replaceRange.length));
            sortedRanges.unshift(r);
        }
        offset += e.newText.length - e.replaceRange.length;
    }
    while (true) {
        const r = sortedRanges[0];
        if (!r) {
            break;
        }
        sortedRanges.shift();
        result.push(r.delta(offset));
    }
    return result;
}

export { BaseStringEdit, BaseStringReplacement, StringEdit, StringReplacement, applyEditsToRanges };
