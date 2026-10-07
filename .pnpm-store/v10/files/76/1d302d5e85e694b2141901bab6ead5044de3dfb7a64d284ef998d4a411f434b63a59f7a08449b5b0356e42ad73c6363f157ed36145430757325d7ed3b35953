/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
// Default to complaining loudly when things don't go according to plan.
// eslint-disable-next-line no-console
let logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    const enumerable = !!obj[name] &&
        Object.prototype.propertyIsEnumerable.call(obj, name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable,
        writable: true,
        value,
    });
}
export const wrap = (nodule, name, wrapper) => {
    if (!nodule || !nodule[name]) {
        logger('no original function ' + String(name) + ' to wrap');
        return;
    }
    if (!wrapper) {
        logger('no wrapper function');
        logger(new Error().stack);
        return;
    }
    const original = nodule[name];
    if (typeof original !== 'function' || typeof wrapper !== 'function') {
        logger('original object and wrapper must be functions');
        return;
    }
    const wrapped = wrapper(original, name);
    defineProperty(wrapped, '__original', original);
    defineProperty(wrapped, '__unwrap', () => {
        if (nodule[name] === wrapped) {
            defineProperty(nodule, name, original);
        }
    });
    defineProperty(wrapped, '__wrapped', true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
};
export const massWrap = (nodules, names, wrapper) => {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    }
    else if (!Array.isArray(nodules)) {
        nodules = [nodules];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to wrap on modules');
        return;
    }
    nodules.forEach(nodule => {
        names.forEach(name => {
            wrap(nodule, name, wrapper);
        });
    });
};
export const unwrap = (nodule, name) => {
    if (!nodule || !nodule[name]) {
        logger('no function to unwrap.');
        logger(new Error().stack);
        return;
    }
    const wrapped = nodule[name];
    if (!wrapped.__unwrap) {
        logger('no original to unwrap to -- has ' +
            String(name) +
            ' already been unwrapped?');
    }
    else {
        wrapped.__unwrap();
        return;
    }
};
export const massUnwrap = (nodules, names) => {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    }
    else if (!Array.isArray(nodules)) {
        nodules = [nodules];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to unwrap on modules');
        return;
    }
    nodules.forEach(nodule => {
        names.forEach(name => {
            unwrap(nodule, name);
        });
    });
};
export default function shimmer(options) {
    if (options && options.logger) {
        if (typeof options.logger !== 'function') {
            logger("new logger isn't a function, not replacing");
        }
        else {
            logger = options.logger;
        }
    }
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
//# sourceMappingURL=shimmer.js.map