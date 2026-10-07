/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export function rot(index: number, modulo: number): number {
	return (modulo + (index % modulo)) % modulo;
}

export class Counter {
	private _next = 0;

	getNext(): number {
		return this._next++;
	}
}

export class MovingAverage {

	private _n = 1;
	private _val = 0;

	update(value: number): number {
		this._val = this._val + (value - this._val) / this._n;
		this._n += 1;
		return this._val;
	}

	get value(): number {
		return this._val;
	}
}

export class SlidingWindowAverage {

	private _n: number = 0;
	private _val = 0;

	private readonly _values: number[] = [];
	private _index: number = 0;
	private _sum = 0;

	constructor(size: number) {
		this._values = new Array(size);
		this._values.fill(0, 0, size);
	}

	update(value: number): number {
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

	get value(): number {
		return this._val;
	}
}

/** Returns whether the point is within the triangle formed by the following 6 x/y point pairs */
export function isPointWithinTriangle(
	x: number, y: number,
	ax: number, ay: number,
	bx: number, by: number,
	cx: number, cy: number
) {
	const v0x = cx - ax;
	const v0y = cy - ay;
	const v1x = bx - ax;
	const v1y = by - ay;
	const v2x = x - ax;
	const v2y = y - ay;

	const dot00 = v0x * v0x + v0y * v0y;
	const dot01 = v0x * v1x + v0y * v1y;
	const dot02 = v0x * v2x + v0y * v2y;
	const dot11 = v1x * v1x + v1y * v1y;
	const dot12 = v1x * v2x + v1y * v2y;

	const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

	return u >= 0 && v >= 0 && u + v < 1;
}
