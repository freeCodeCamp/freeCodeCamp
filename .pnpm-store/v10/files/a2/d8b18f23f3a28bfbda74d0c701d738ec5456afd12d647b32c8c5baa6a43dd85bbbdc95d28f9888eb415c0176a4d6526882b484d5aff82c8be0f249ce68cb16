/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Point {
    static equals(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }
    deltaX(delta) {
        return new Point(this.x + delta, this.y);
    }
    deltaY(delta) {
        return new Point(this.x, this.y + delta);
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
    subtract(other) {
        return new Point(this.x - other.x, this.y - other.y);
    }
    scale(factor) {
        return new Point(this.x * factor, this.y * factor);
    }
    mapComponents(map) {
        return new Point(map(this.x), map(this.y));
    }
    isZero() {
        return this.x === 0 && this.y === 0;
    }
    withThreshold(threshold) {
        return this.mapComponents(axisVal => {
            if (axisVal > threshold) {
                return axisVal - threshold;
            }
            else if (axisVal < -threshold) {
                return axisVal + threshold;
            }
            return 0;
        });
    }
}

export { Point };
