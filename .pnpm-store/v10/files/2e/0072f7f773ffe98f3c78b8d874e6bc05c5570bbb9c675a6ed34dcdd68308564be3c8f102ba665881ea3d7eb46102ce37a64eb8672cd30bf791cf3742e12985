"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.massUnwrap = exports.unwrap = exports.massWrap = exports.wrap = void 0;
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
const wrap = (nodule, name, wrapper) => {
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
exports.wrap = wrap;
const massWrap = (nodules, names, wrapper) => {
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
            (0, exports.wrap)(nodule, name, wrapper);
        });
    });
};
exports.massWrap = massWrap;
const unwrap = (nodule, name) => {
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
exports.unwrap = unwrap;
const massUnwrap = (nodules, names) => {
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
            (0, exports.unwrap)(nodule, name);
        });
    });
};
exports.massUnwrap = massUnwrap;
function shimmer(options) {
    if (options && options.logger) {
        if (typeof options.logger !== 'function') {
            logger("new logger isn't a function, not replacing");
        }
        else {
            logger = options.logger;
        }
    }
}
exports.default = shimmer;
shimmer.wrap = exports.wrap;
shimmer.massWrap = exports.massWrap;
shimmer.unwrap = exports.unwrap;
shimmer.massUnwrap = exports.massUnwrap;
//# sourceMappingURL=shimmer.js.map