/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Array2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.array = [];
        this.array = new Array(width * height);
    }
    get(x, y) {
        return this.array[x + y * this.width];
    }
    set(x, y, value) {
        this.array[x + y * this.width] = value;
    }
}
function isSpace(charCode) {
    return charCode === 32 /* CharCode.Space */ || charCode === 9 /* CharCode.Tab */;
}
class LineRangeFragment {
    static { this.chrKeys = new Map(); }
    static getKey(chr) {
        let key = this.chrKeys.get(chr);
        if (key === undefined) {
            key = this.chrKeys.size;
            this.chrKeys.set(chr, key);
        }
        return key;
    }
    constructor(range, lines, source) {
        this.range = range;
        this.lines = lines;
        this.source = source;
        this.histogram = [];
        let counter = 0;
        for (let i = range.startLineNumber - 1; i < range.endLineNumberExclusive - 1; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                counter++;
                const chr = line[j];
                const key = LineRangeFragment.getKey(chr);
                this.histogram[key] = (this.histogram[key] || 0) + 1;
            }
            counter++;
            const key = LineRangeFragment.getKey('\n');
            this.histogram[key] = (this.histogram[key] || 0) + 1;
        }
        this.totalCount = counter;
    }
    computeSimilarity(other) {
        let sumDifferences = 0;
        const maxLength = Math.max(this.histogram.length, other.histogram.length);
        for (let i = 0; i < maxLength; i++) {
            sumDifferences += Math.abs((this.histogram[i] ?? 0) - (other.histogram[i] ?? 0));
        }
        return 1 - (sumDifferences / (this.totalCount + other.totalCount));
    }
}

export { Array2D, LineRangeFragment, isSpace };
