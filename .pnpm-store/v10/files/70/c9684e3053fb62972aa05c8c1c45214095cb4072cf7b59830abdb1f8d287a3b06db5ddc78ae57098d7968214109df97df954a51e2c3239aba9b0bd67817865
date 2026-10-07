import { Range } from '../../../common/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Returns the intersection between a ranged group and a range.
 * Returns `[]` if the intersection is empty.
 */
function groupIntersect(range, groups) {
    const result = [];
    for (const r of groups) {
        if (range.start >= r.range.end) {
            continue;
        }
        if (range.end < r.range.start) {
            break;
        }
        const intersection = Range.intersect(range, r.range);
        if (Range.isEmpty(intersection)) {
            continue;
        }
        result.push({
            range: intersection,
            size: r.size
        });
    }
    return result;
}
/**
 * Shifts a range by that `much`.
 */
function shift({ start, end }, much) {
    return { start: start + much, end: end + much };
}
/**
 * Consolidates a collection of ranged groups.
 *
 * Consolidation is the process of merging consecutive ranged groups
 * that share the same `size`.
 */
function consolidate(groups) {
    const result = [];
    let previousGroup = null;
    for (const group of groups) {
        const start = group.range.start;
        const end = group.range.end;
        const size = group.size;
        if (previousGroup && size === previousGroup.size) {
            previousGroup.range.end = end;
            continue;
        }
        previousGroup = { range: { start, end }, size };
        result.push(previousGroup);
    }
    return result;
}
/**
 * Concatenates several collections of ranged groups into a single
 * collection.
 */
function concat(...groups) {
    return consolidate(groups.reduce((r, g) => r.concat(g), []));
}
class RangeMap {
    get paddingTop() {
        return this._paddingTop;
    }
    set paddingTop(paddingTop) {
        this._size = this._size + paddingTop - this._paddingTop;
        this._paddingTop = paddingTop;
    }
    constructor(topPadding) {
        this.groups = [];
        this._size = 0;
        this._paddingTop = 0;
        this._paddingTop = topPadding ?? 0;
        this._size = this._paddingTop;
    }
    splice(index, deleteCount, items = []) {
        const diff = items.length - deleteCount;
        const before = groupIntersect({ start: 0, end: index }, this.groups);
        const after = groupIntersect({ start: index + deleteCount, end: Number.POSITIVE_INFINITY }, this.groups)
            .map(g => ({ range: shift(g.range, diff), size: g.size }));
        const middle = items.map((item, i) => ({
            range: { start: index + i, end: index + i + 1 },
            size: item.size
        }));
        this.groups = concat(before, middle, after);
        this._size = this._paddingTop + this.groups.reduce((t, g) => t + (g.size * (g.range.end - g.range.start)), 0);
    }
    /**
     * Returns the number of items in the range map.
     */
    get count() {
        const len = this.groups.length;
        if (!len) {
            return 0;
        }
        return this.groups[len - 1].range.end;
    }
    /**
     * Returns the sum of the sizes of all items in the range map.
     */
    get size() {
        return this._size;
    }
    /**
     * Returns the index of the item at the given position.
     */
    indexAt(position) {
        if (position < 0) {
            return -1;
        }
        if (position < this._paddingTop) {
            return 0;
        }
        let index = 0;
        let size = this._paddingTop;
        for (const group of this.groups) {
            const count = group.range.end - group.range.start;
            const newSize = size + (count * group.size);
            if (position < newSize) {
                return index + Math.floor((position - size) / group.size);
            }
            index += count;
            size = newSize;
        }
        return index;
    }
    /**
     * Returns the index of the item right after the item at the
     * index of the given position.
     */
    indexAfter(position) {
        return Math.min(this.indexAt(position) + 1, this.count);
    }
    /**
     * Returns the start position of the item at the given index.
     */
    positionAt(index) {
        if (index < 0) {
            return -1;
        }
        let position = 0;
        let count = 0;
        for (const group of this.groups) {
            const groupCount = group.range.end - group.range.start;
            const newCount = count + groupCount;
            if (index < newCount) {
                return this._paddingTop + position + ((index - count) * group.size);
            }
            position += groupCount * group.size;
            count = newCount;
        }
        return -1;
    }
}

export { RangeMap, consolidate, groupIntersect, shift };
