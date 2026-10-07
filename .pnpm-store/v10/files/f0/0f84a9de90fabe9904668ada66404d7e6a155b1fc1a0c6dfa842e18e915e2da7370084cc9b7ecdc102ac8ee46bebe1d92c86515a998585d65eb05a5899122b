import { assertRange } from "./Debug.js";
/**
 * Assert that the number is in the given range.
 */
export function range(min, max = Infinity) {
    const valueMap = new WeakMap();
    return function (target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                return valueMap.get(this);
            },
            set: function (newValue) {
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
export function timeRange(min, max = Infinity) {
    const valueMap = new WeakMap();
    return function (target, propertyKey) {
        Reflect.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                return valueMap.get(this);
            },
            set: function (newValue) {
                assertRange(this.toSeconds(newValue), min, max);
                valueMap.set(this, newValue);
            },
        });
    };
}
//# sourceMappingURL=Decorator.js.map