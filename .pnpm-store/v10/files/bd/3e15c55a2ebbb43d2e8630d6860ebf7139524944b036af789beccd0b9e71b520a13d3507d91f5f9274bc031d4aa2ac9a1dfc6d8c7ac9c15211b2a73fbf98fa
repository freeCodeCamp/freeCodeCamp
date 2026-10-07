function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
class MovingAverage {
    constructor() {
        this._n = 1;
        this._val = 0;
    }
    update(value) {
        this._val = this._val + (value - this._val) / this._n;
        this._n += 1;
        return this._val;
    }
    get value() {
        return this._val;
    }
}
class SlidingWindowAverage {
    constructor(size) {
        this._n = 0;
        this._val = 0;
        this._values = [];
        this._index = 0;
        this._sum = 0;
        this._values = new Array(size);
        this._values.fill(0, 0, size);
    }
    update(value) {
        const oldValue = this._values[this._index];
        this._values[this._index] = value;
        this._index = (this._index + 1) % this._values.length;
        this._sum -= oldValue;
        this._sum += value;
        if (this._n < this._values.length) {
            this._n += 1;
        }
        this._val = this._sum / this._n;
        return this._val;
    }
    get value() {
        return this._val;
    }
}

export { MovingAverage, SlidingWindowAverage, clamp };
