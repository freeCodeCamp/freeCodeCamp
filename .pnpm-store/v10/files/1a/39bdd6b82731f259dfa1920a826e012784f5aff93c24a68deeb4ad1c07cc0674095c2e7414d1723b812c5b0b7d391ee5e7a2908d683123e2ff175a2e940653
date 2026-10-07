import { isPlainObject } from './validateTypes.mjs';

/**
 * Check whether the variable is an object and all its properties agree with the provided validator.
 *
 * @example
 * config = {
 *   value1: 1,
 *   value2: 2,
 *   value3: 3,
 * };
 * validateObjectWithProps(isNumber)(config);
 * //=> true
 *
 * @param {(value: unknown) => boolean} validator
 * @returns {(value: unknown) => boolean}
 */
export default function validateObjectWithProps(validator) {
	return (value) => {
		if (!isPlainObject(value)) {
			return false;
		}

		return Object.values(value).every((item) => {
			return validator(item);
		});
	};
}
