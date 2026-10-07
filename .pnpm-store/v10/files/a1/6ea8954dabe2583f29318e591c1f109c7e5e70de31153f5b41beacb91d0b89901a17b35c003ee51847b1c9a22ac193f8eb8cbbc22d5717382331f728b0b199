import { memoize2 } from './memoize.js';
async function defaultAsyncIteratorReturn(value) {
    return { value, done: true };
}
const proxyMethodFactory = memoize2(function proxyMethodFactory(target, targetMethod) {
    return function proxyMethod(...args) {
        return Reflect.apply(targetMethod, target, args);
    };
});
export function getAsyncIteratorWithCancel(asyncIterator, onCancel) {
    return new Proxy(asyncIterator, {
        has(asyncIterator, prop) {
            if (prop === 'return') {
                return true;
            }
            return Reflect.has(asyncIterator, prop);
        },
        get(asyncIterator, prop, receiver) {
            const existingPropValue = Reflect.get(asyncIterator, prop, receiver);
            if (prop === 'return') {
                const existingReturn = existingPropValue || defaultAsyncIteratorReturn;
                return async function returnWithCancel(value) {
                    const returnValue = await onCancel(value);
                    return Reflect.apply(existingReturn, asyncIterator, [returnValue]);
                };
            }
            else if (typeof existingPropValue === 'function') {
                return proxyMethodFactory(asyncIterator, existingPropValue);
            }
            return existingPropValue;
        },
    });
}
export function getAsyncIterableWithCancel(asyncIterable, onCancel) {
    return new Proxy(asyncIterable, {
        get(asyncIterable, prop, receiver) {
            const existingPropValue = Reflect.get(asyncIterable, prop, receiver);
            if (Symbol.asyncIterator === prop) {
                return function asyncIteratorFactory() {
                    const asyncIterator = Reflect.apply(existingPropValue, asyncIterable, []);
                    return getAsyncIteratorWithCancel(asyncIterator, onCancel);
                };
            }
            else if (typeof existingPropValue === 'function') {
                return proxyMethodFactory(asyncIterable, existingPropValue);
            }
            return existingPropValue;
        },
    });
}
export { getAsyncIterableWithCancel as withCancel };
