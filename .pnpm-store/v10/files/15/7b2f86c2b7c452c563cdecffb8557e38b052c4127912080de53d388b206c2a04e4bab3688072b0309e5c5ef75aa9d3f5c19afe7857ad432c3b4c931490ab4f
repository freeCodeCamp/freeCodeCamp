const {
    normalizeReplacer,
    normalizeSpace,
    replaceValue,
    getTypeNative,
    getTypeAsync,
    isLeadingSurrogate,
    isTrailingSurrogate,
    escapableCharCodeSubstitution,
    type: {
        PRIMITIVE,
        OBJECT,
        ARRAY,
        PROMISE,
        STRING_STREAM,
        OBJECT_STREAM
    }
} = require('./utils');
const charLength2048 = Array.from({ length: 2048 }).map((_, code) => {
    if (escapableCharCodeSubstitution.hasOwnProperty(code)) {
        return 2; // \X
    }

    if (code < 0x20) {
        return 6; // \uXXXX
    }

    return code < 128 ? 1 : 2; // UTF8 bytes
});

function stringLength(str) {
    let len = 0;
    let prevLeadingSurrogate = false;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        if (code < 2048) {
            len += charLength2048[code];
        } else if (isLeadingSurrogate(code)) {
            len += 6; // \uXXXX since no pair with trailing surrogate yet
            prevLeadingSurrogate = true;
            continue;
        } else if (isTrailingSurrogate(code)) {
            len = prevLeadingSurrogate
                ? len - 2  // surrogate pair (4 bytes), since we calculate prev leading surrogate as 6 bytes, substruct 2 bytes
                : len + 6; // \uXXXX
        } else {
            len += 3; // code >= 2048 is 3 bytes length for UTF8
        }

        prevLeadingSurrogate = false;
    }

    return len + 2; // +2 for quotes
}

function primitiveLength(value) {
    switch (typeof value) {
        case 'string':
            return stringLength(value);

        case 'number':
            return Number.isFinite(value) ? String(value).length : 4 /* null */;

        case 'boolean':
            return value ? 4 /* true */ : 5 /* false */;

        case 'undefined':
        case 'object':
            return 4; /* null */

        default:
            return 0;
    }
}

function spaceLength(space) {
    space = normalizeSpace(space);
    return typeof space === 'string' ? space.length : 0;
}

module.exports = function jsonStringifyInfo(value, replacer, space, options) {
    function walk(holder, key, value) {
        if (stop) {
            return;
        }

        value = replaceValue(holder, key, value, replacer);

        let type = getType(value);

        // check for circular structure
        if (type !== PRIMITIVE && stack.has(value)) {
            circular.add(value);
            length += 4; // treat as null

            if (!options.continueOnCircular) {
                stop = true;
            }

            return;
        }

        switch (type) {
            case PRIMITIVE:
                if (value !== undefined || Array.isArray(holder)) {
                    length += primitiveLength(value);
                } else if (holder === root) {
                    length += 9; // FIXME: that's the length of undefined, should we normalize behaviour to convert it to null?
                }
                break;

            case OBJECT: {
                if (visited.has(value)) {
                    duplicate.add(value);
                    length += visited.get(value);
                    break;
                }

                const valueLength = length;
                let entries = 0;

                length += 2; // {}

                stack.add(value);

                for (const key in value) {
                    if (hasOwnProperty.call(value, key) && (allowlist === null || allowlist.has(key))) {
                        const prevLength = length;
                        walk(value, key, value[key]);

                        if (prevLength !== length) {
                            // value is printed
                            length += stringLength(key) + 1; // "key":
                            entries++;
                        }
                    }
                }

                if (entries > 1) {
                    length += entries - 1; // commas
                }

                stack.delete(value);

                if (space > 0 && entries > 0) {
                    length += (1 + (stack.size + 1) * space + 1) * entries; // for each key-value: \n{space}
                    length += 1 + stack.size * space; // for }
                }

                visited.set(value, length - valueLength);

                break;
            }

            case ARRAY: {
                if (visited.has(value)) {
                    duplicate.add(value);
                    length += visited.get(value);
                    break;
                }

                const valueLength = length;

                length += 2; // []

                stack.add(value);

                for (let i = 0; i < value.length; i++) {
                    walk(value, i, value[i]);
                }

                if (value.length > 1) {
                    length += value.length - 1; // commas
                }

                stack.delete(value);

                if (space > 0 && value.length > 0) {
                    length += (1 + (stack.size + 1) * space) * value.length; // for each element: \n{space}
                    length += 1 + stack.size * space; // for ]
                }

                visited.set(value, length - valueLength);

                break;
            }

            case PROMISE:
            case STRING_STREAM:
                async.add(value);
                break;

            case OBJECT_STREAM:
                length += 2; // []
                async.add(value);
                break;
        }
    }

    let allowlist = null;
    replacer = normalizeReplacer(replacer);

    if (Array.isArray(replacer)) {
        allowlist = new Set(replacer);
        replacer = null;
    }

    space = spaceLength(space);
    options = options || {};

    const visited = new Map();
    const stack = new Set();
    const duplicate = new Set();
    const circular = new Set();
    const async = new Set();
    const getType = options.async ? getTypeAsync : getTypeNative;
    const root = { '': value };
    let stop = false;
    let length = 0;

    walk(root, '', value);

    return {
        minLength: isNaN(length) ? Infinity : length,
        circular: [...circular],
        duplicate: [...duplicate],
        async: [...async]
    };
};
