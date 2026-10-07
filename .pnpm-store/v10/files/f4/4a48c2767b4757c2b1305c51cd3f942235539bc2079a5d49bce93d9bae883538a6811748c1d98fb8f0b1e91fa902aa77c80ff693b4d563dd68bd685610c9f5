const PrimitiveType = 1;
const ObjectType = 2;
const ArrayType = 3;
const PromiseType = 4;
const ReadableStringType = 5;
const ReadableObjectType = 6;
// https://tc39.es/ecma262/#table-json-single-character-escapes
const escapableCharCodeSubstitution = { // JSON Single Character Escape Sequences
    0x08: '\\b',
    0x09: '\\t',
    0x0a: '\\n',
    0x0c: '\\f',
    0x0d: '\\r',
    0x22: '\\\"',
    0x5c: '\\\\'
};

function isLeadingSurrogate(code) {
    return code >= 0xD800 && code <= 0xDBFF;
}

function isTrailingSurrogate(code) {
    return code >= 0xDC00 && code <= 0xDFFF;
}

function isReadableStream(value) {
    return (
        typeof value.pipe === 'function' &&
        typeof value._read === 'function' &&
        typeof value._readableState === 'object' && value._readableState !== null
    );
}

function replaceValue(holder, key, value, replacer) {
    if (value && typeof value.toJSON === 'function') {
        value = value.toJSON();
    }

    if (replacer !== null) {
        value = replacer.call(holder, String(key), value);
    }

    switch (typeof value) {
        case 'function':
        case 'symbol':
            value = undefined;
            break;

        case 'object':
            if (value !== null) {
                const cls = value.constructor;
                if (cls === String || cls === Number || cls === Boolean) {
                    value = value.valueOf();
                }
            }
            break;
    }

    return value;
}

function getTypeNative(value) {
    if (value === null || typeof value !== 'object') {
        return PrimitiveType;
    }

    if (Array.isArray(value)) {
        return ArrayType;
    }

    return ObjectType;
}

function getTypeAsync(value) {
    if (value === null || typeof value !== 'object') {
        return PrimitiveType;
    }

    if (typeof value.then === 'function') {
        return PromiseType;
    }

    if (isReadableStream(value)) {
        return value._readableState.objectMode ? ReadableObjectType : ReadableStringType;
    }

    if (Array.isArray(value)) {
        return ArrayType;
    }

    return ObjectType;
}

function normalizeReplacer(replacer) {
    if (typeof replacer === 'function') {
        return replacer;
    }

    if (Array.isArray(replacer)) {
        const allowlist = new Set(replacer
            .map(item => {
                const cls = item && item.constructor;
                return cls === String || cls === Number ? String(item) : null;
            })
            .filter(item => typeof item === 'string')
        );

        return [...allowlist];
    }

    return null;
}

function normalizeSpace(space) {
    if (typeof space === 'number') {
        if (!Number.isFinite(space) || space < 1) {
            return false;
        }

        return ' '.repeat(Math.min(space, 10));
    }

    if (typeof space === 'string') {
        return space.slice(0, 10) || false;
    }

    return false;
}

module.exports = {
    escapableCharCodeSubstitution,
    isLeadingSurrogate,
    isTrailingSurrogate,
    type: {
        PRIMITIVE: PrimitiveType,
        PROMISE: PromiseType,
        ARRAY: ArrayType,
        OBJECT: ObjectType,
        STRING_STREAM: ReadableStringType,
        OBJECT_STREAM: ReadableObjectType
    },

    isReadableStream,
    replaceValue,
    getTypeNative,
    getTypeAsync,
    normalizeReplacer,
    normalizeSpace
};
