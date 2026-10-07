/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { isDate, isPlainObject, isRegExp } from '../common/util.js';
/**
 * @internal
 */
class UnserializableError extends Error {
}
/**
 * @internal
 */
export class BidiSerializer {
    static serialize(arg) {
        switch (typeof arg) {
            case 'symbol':
            case 'function':
                throw new UnserializableError(`Unable to serializable ${typeof arg}`);
            case 'object':
                return this.#serializeObject(arg);
            case 'undefined':
                return {
                    type: 'undefined',
                };
            case 'number':
                return this.#serializeNumber(arg);
            case 'bigint':
                return {
                    type: 'bigint',
                    value: arg.toString(),
                };
            case 'string':
                return {
                    type: 'string',
                    value: arg,
                };
            case 'boolean':
                return {
                    type: 'boolean',
                    value: arg,
                };
        }
    }
    static #serializeNumber(arg) {
        let value;
        if (Object.is(arg, -0)) {
            value = '-0';
        }
        else if (Object.is(arg, Infinity)) {
            value = 'Infinity';
        }
        else if (Object.is(arg, -Infinity)) {
            value = '-Infinity';
        }
        else if (Object.is(arg, NaN)) {
            value = 'NaN';
        }
        else {
            value = arg;
        }
        return {
            type: 'number',
            value,
        };
    }
    static #serializeObject(arg) {
        if (arg === null) {
            return {
                type: 'null',
            };
        }
        else if (Array.isArray(arg)) {
            const parsedArray = arg.map(subArg => {
                return this.serialize(subArg);
            });
            return {
                type: 'array',
                value: parsedArray,
            };
        }
        else if (isPlainObject(arg)) {
            try {
                JSON.stringify(arg);
            }
            catch (error) {
                if (error instanceof TypeError &&
                    error.message.startsWith('Converting circular structure to JSON')) {
                    error.message += ' Recursive objects are not allowed.';
                }
                throw error;
            }
            const parsedObject = [];
            for (const key in arg) {
                parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
            }
            return {
                type: 'object',
                value: parsedObject,
            };
        }
        else if (isRegExp(arg)) {
            return {
                type: 'regexp',
                value: {
                    pattern: arg.source,
                    flags: arg.flags,
                },
            };
        }
        else if (isDate(arg)) {
            return {
                type: 'date',
                value: arg.toISOString(),
            };
        }
        throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
    }
}
//# sourceMappingURL=Serializer.js.map