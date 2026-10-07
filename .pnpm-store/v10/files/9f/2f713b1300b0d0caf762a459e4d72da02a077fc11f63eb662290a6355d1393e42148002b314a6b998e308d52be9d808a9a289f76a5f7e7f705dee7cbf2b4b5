import { BugIndicatingError } from '../../../../base/common/errors.js';
import { Point } from './point.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Rect {
    static fromPoints(topLeft, bottomRight) {
        return new Rect(topLeft.x, topLeft.y, bottomRight.x, bottomRight.y);
    }
    static fromPointSize(point, size) {
        return new Rect(point.x, point.y, point.x + size.x, point.y + size.y);
    }
    static fromLeftTopRightBottom(left, top, right, bottom) {
        return new Rect(left, top, right, bottom);
    }
    static fromLeftTopWidthHeight(left, top, width, height) {
        return new Rect(left, top, left + width, top + height);
    }
    static fromRanges(leftRight, topBottom) {
        return new Rect(leftRight.start, topBottom.start, leftRight.endExclusive, topBottom.endExclusive);
    }
    static hull(rects) {
        let left = Number.MAX_SAFE_INTEGER;
        let top = Number.MAX_SAFE_INTEGER;
        let right = Number.MIN_SAFE_INTEGER;
        let bottom = Number.MIN_SAFE_INTEGER;
        for (const rect of rects) {
            left = Math.min(left, rect.left);
            top = Math.min(top, rect.top);
            right = Math.max(right, rect.right);
            bottom = Math.max(bottom, rect.bottom);
        }
        return new Rect(left, top, right, bottom);
    }
    get width() { return this.right - this.left; }
    get height() { return this.bottom - this.top; }
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        if (left > right) {
            throw new BugIndicatingError('Invalid arguments: Horizontally offset by ' + (left - right));
        }
        if (top > bottom) {
            throw new BugIndicatingError('Invalid arguments: Vertically offset by ' + (top - bottom));
        }
    }
    withMargin(marginOrVerticalOrTop, rightOrHorizontal, bottom, left) {
        let marginLeft, marginRight, marginTop, marginBottom;
        // Single margin value
        if (rightOrHorizontal === undefined && bottom === undefined && left === undefined) {
            marginLeft = marginRight = marginTop = marginBottom = marginOrVerticalOrTop;
        }
        // Vertical and horizontal margins
        else if (bottom === undefined && left === undefined) {
            marginLeft = marginRight = rightOrHorizontal;
            marginTop = marginBottom = marginOrVerticalOrTop;
        }
        // Individual margins for all sides
        else {
            marginLeft = left;
            marginRight = rightOrHorizontal;
            marginTop = marginOrVerticalOrTop;
            marginBottom = bottom;
        }
        return new Rect(this.left - marginLeft, this.top - marginTop, this.right + marginRight, this.bottom + marginBottom);
    }
    intersectVertical(range) {
        const newTop = Math.max(this.top, range.start);
        const newBottom = Math.min(this.bottom, range.endExclusive);
        return new Rect(this.left, newTop, this.right, Math.max(newTop, newBottom));
    }
    intersectHorizontal(range) {
        const newLeft = Math.max(this.left, range.start);
        const newRight = Math.min(this.right, range.endExclusive);
        return new Rect(newLeft, this.top, Math.max(newLeft, newRight), this.bottom);
    }
    toString() {
        return `Rect{(${this.left},${this.top}), (${this.right},${this.bottom})}`;
    }
    intersect(parent) {
        const left = Math.max(this.left, parent.left);
        const right = Math.min(this.right, parent.right);
        const top = Math.max(this.top, parent.top);
        const bottom = Math.min(this.bottom, parent.bottom);
        if (left > right || top > bottom) {
            return undefined;
        }
        return new Rect(left, top, right, bottom);
    }
    containsRect(other) {
        return this.left <= other.left
            && this.top <= other.top
            && this.right >= other.right
            && this.bottom >= other.bottom;
    }
    containsPoint(point) {
        return this.left <= point.x
            && this.top <= point.y
            && this.right >= point.x
            && this.bottom >= point.y;
    }
    moveToBeContainedIn(parent) {
        const width = this.width;
        const height = this.height;
        let left = this.left;
        let top = this.top;
        if (left < parent.left) {
            left = parent.left;
        }
        else if (left + width > parent.right) {
            left = parent.right - width;
        }
        if (top < parent.top) {
            top = parent.top;
        }
        else if (top + height > parent.bottom) {
            top = parent.bottom - height;
        }
        return new Rect(left, top, left + width, top + height);
    }
    withWidth(width) {
        return new Rect(this.left, this.top, this.left + width, this.bottom);
    }
    withHeight(height) {
        return new Rect(this.left, this.top, this.right, this.top + height);
    }
    withTop(top) {
        return new Rect(this.left, top, this.right, this.bottom);
    }
    withLeft(left) {
        return new Rect(left, this.top, this.right, this.bottom);
    }
    translateX(delta) {
        return new Rect(this.left + delta, this.top, this.right + delta, this.bottom);
    }
    translateY(delta) {
        return new Rect(this.left, this.top + delta, this.right, this.bottom + delta);
    }
    getLeftBottom() {
        return new Point(this.left, this.bottom);
    }
    getRightBottom() {
        return new Point(this.right, this.bottom);
    }
    getRightTop() {
        return new Point(this.right, this.top);
    }
    toStyles() {
        return {
            position: 'absolute',
            left: `${this.left}px`,
            top: `${this.top}px`,
            width: `${this.width}px`,
            height: `${this.height}px`,
        };
    }
}

export { Rect };
