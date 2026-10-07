/**
 * The threshold for correctness for operators. Less than one sample even
 * at very high sampling rates (e.g. `1e-6 < 1 / 192000`).
 */
const EPSILON = 1e-6;

/**
 * Test if A is greater than B
 */
export function GT(a: number, b: number): boolean {
	return a > b + EPSILON;
}

/**
 * Test if A is greater than or equal to B
 */
export function GTE(a: number, b: number): boolean {
	return GT(a, b) || EQ(a, b);
}

/**
 * Test if A is less than B
 */
export function LT(a: number, b: number): boolean {
	return a + EPSILON < b;
}

/**
 * Test if A is less than B
 */
export function EQ(a: number, b: number): boolean {
	return Math.abs(a - b) < EPSILON;
}

/**
 * Clamp the value within the given range
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.max(Math.min(value, max), min);
}
