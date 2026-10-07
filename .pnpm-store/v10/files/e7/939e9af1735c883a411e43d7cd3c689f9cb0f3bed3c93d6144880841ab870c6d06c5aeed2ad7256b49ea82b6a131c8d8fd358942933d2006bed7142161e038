import { GlyphMarginLane } from '../model.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const MAX_LANE = GlyphMarginLane.Right;
class GlyphMarginLanesModel {
    constructor(maxLine) {
        this.persist = 0;
        this._requiredLanes = 1; // always render at least one lane
        this.lanes = new Uint8Array(Math.ceil(((maxLine + 1) * MAX_LANE) / 8));
    }
    reset(maxLine) {
        const bytes = Math.ceil(((maxLine + 1) * MAX_LANE) / 8);
        if (this.lanes.length < bytes) {
            this.lanes = new Uint8Array(bytes);
        }
        else {
            this.lanes.fill(0);
        }
        this._requiredLanes = 1;
    }
    get requiredLanes() {
        return this._requiredLanes;
    }
    push(lane, range, persist) {
        if (persist) {
            this.persist |= (1 << (lane - 1));
        }
        for (let i = range.startLineNumber; i <= range.endLineNumber; i++) {
            const bit = (MAX_LANE * i) + (lane - 1);
            this.lanes[bit >>> 3] |= (1 << (bit % 8));
            this._requiredLanes = Math.max(this._requiredLanes, this.countAtLine(i));
        }
    }
    getLanesAtLine(lineNumber) {
        const lanes = [];
        let bit = MAX_LANE * lineNumber;
        for (let i = 0; i < MAX_LANE; i++) {
            if (this.persist & (1 << i) || this.lanes[bit >>> 3] & (1 << (bit % 8))) {
                lanes.push(i + 1);
            }
            bit++;
        }
        return lanes.length ? lanes : [GlyphMarginLane.Center];
    }
    countAtLine(lineNumber) {
        let bit = MAX_LANE * lineNumber;
        let count = 0;
        for (let i = 0; i < MAX_LANE; i++) {
            if (this.persist & (1 << i) || this.lanes[bit >>> 3] & (1 << (bit % 8))) {
                count++;
            }
            bit++;
        }
        return count;
    }
}

export { GlyphMarginLanesModel };
