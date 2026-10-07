const hasOwnProperty = Object.prototype.hasOwnProperty;
const shape = {
    generic: true,
    types: appendOrAssign,
    atrules: {
        prelude: appendOrAssignOrNull,
        descriptors: appendOrAssignOrNull
    },
    properties: appendOrAssign,
    parseContext: assign,
    scope: deepAssign,
    atrule: ['parse'],
    pseudo: ['parse'],
    node: ['name', 'structure', 'parse', 'generate', 'walkContext']
};

function isObject(value) {
    return value && value.constructor === Object;
}

function copy(value) {
    return isObject(value)
        ? Object.assign({}, value)
        : value;
}

function assign(dest, src) {
    return Object.assign(dest, src);
}

function deepAssign(dest, src) {
    for (const key in src) {
        if (hasOwnProperty.call(src, key)) {
            if (isObject(dest[key])) {
                deepAssign(dest[key], copy(src[key]));
            } else {
                dest[key] = copy(src[key]);
            }
        }
    }

    return dest;
}

function append(a, b) {
    if (typeof b === 'string' && /^\s*\|/.test(b)) {
        return typeof a === 'string'
            ? a + b
            : b.replace(/^\s*\|\s*/, '');
    }

    return b || null;
}

function appendOrAssign(a, b) {
    if (typeof b === 'string') {
        return append(a, b);
    }

    const result = Object.assign({}, a);
    for (let key in b) {
        if (hasOwnProperty.call(b, key)) {
            result[key] = append(hasOwnProperty.call(a, key) ? a[key] : undefined, b[key]);
        }
    }

    return result;
}

function appendOrAssignOrNull(a, b) {
    const result = appendOrAssign(a, b);

    return !isObject(result) || Object.keys(result).length
        ? result
        : null;
}

function mix(dest, src, shape) {
    for (const key in shape) {
        if (hasOwnProperty.call(shape, key) === false) {
            continue;
        }

        if (shape[key] === true) {
            if (key in src) {
                if (hasOwnProperty.call(src, key)) {
                    dest[key] = copy(src[key]);
                }
            }
        } else if (shape[key]) {
            if (typeof shape[key] === 'function') {
                const fn = shape[key];
                dest[key] = fn({}, dest[key]);
                dest[key] = fn(dest[key] || {}, src[key]);
            } else if (isObject(shape[key])) {
                const result = {};

                for (let name in dest[key]) {
                    result[name] = mix({}, dest[key][name], shape[key]);
                }

                for (let name in src[key]) {
                    result[name] = mix(result[name] || {}, src[key][name], shape[key]);
                }

                dest[key] = result;
            } else if (Array.isArray(shape[key])) {
                const res = {};
                const innerShape = shape[key].reduce(function(s, k) {
                    s[k] = true;
                    return s;
                }, {});

                for (const [name, value] of Object.entries(dest[key] || {})) {
                    res[name] = {};
                    if (value) {
                        mix(res[name], value, innerShape);
                    }
                }

                for (const name in src[key]) {
                    if (hasOwnProperty.call(src[key], name)) {
                        if (!res[name]) {
                            res[name] = {};
                        }

                        if (src[key] && src[key][name]) {
                            mix(res[name], src[key][name], innerShape);
                        }
                    }
                }

                dest[key] = res;
            }
        }
    }
    return dest;
}

module.exports = (dest, src) => mix(dest, src, shape);
