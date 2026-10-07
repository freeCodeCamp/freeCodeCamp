import { assertRange } from "./Debug.js";
import { Time } from "../type/Units.js";

/**
 * Assert that the number is in the given range.
 */
export function range(min: number, max = Infinity) {
	const valueMap: WeakMap<any, number> = new WeakMap();
	return function (target: any, propertyKey: string | symbol) {
		Reflect.defineProperty(target, propertyKey, {
			configurable: true,
			enumerable: true,
			get: function () {
				return valueMap.get(this);
			},
			set: function (newValue: number) {
				assertRange(newValue, min, max);
				valueMap.set(this, newValue);
			},
		});
	};
}

/**
 * Convert the time to seconds and assert that the time is in between the two
 * values when being set.
 */
export function timeRange(min: number, max = Infinity) {
	const valueMap: WeakMap<any, Time> = new WeakMap();
	return function (target: any, propertyKey: string) {
		Reflect.defineProperty(target, propertyKey, {
			configurable: true,
			enumerable: true,
			get: function () {
				return valueMap.get(this);
			},
			set: function (newValue: Time) {
				assertRange(this.toSeconds(newValue), min, max);
				valueMap.set(this, newValue);
			},
		});
	};
}
