(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jsonExt = factory());
})(this, (function () { 'use strict';

    var version = "0.5.7";

    const PrimitiveType = 1;
    const ObjectType = 2;
    const ArrayType = 3;
    const PromiseType = 4;
    const ReadableStringType = 5;
    const ReadableObjectType = 6;
    // https://tc39.es/ecma262/#table-json-single-character-escapes
    const escapableCharCodeSubstitution$1 = { // JSON Single Character Escape Sequences
        0x08: '\\b',
        0x09: '\\t',
        0x0a: '\\n',
        0x0c: '\\f',
        0x0d: '\\r',
        0x22: '\\\"',
        0x5c: '\\\\'
    };

    function isLeadingSurrogate$1(code) {
        return code >= 0xD800 && code <= 0xDBFF;
    }

    function isTrailingSurrogate$1(code) {
        return code >= 0xDC00 && code <= 0xDFFF;
    }

    function isReadableStream$1(value) {
        return (
            typeof value.pipe === 'function' &&
            typeof value._read === 'function' &&
            typeof value._readableState === 'object' && value._readableState !== null
        );
    }

    function replaceValue$1(holder, key, value, replacer) {
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

    function getTypeNative$1(value) {
        if (value === null || typeof value !== 'object') {
            return PrimitiveType;
        }

        if (Array.isArray(value)) {
            return ArrayType;
        }

        return ObjectType;
    }

    function getTypeAsync$1(value) {
        if (value === null || typeof value !== 'object') {
            return PrimitiveType;
        }

        if (typeof value.then === 'function') {
            return PromiseType;
        }

        if (isReadableStream$1(value)) {
            return value._readableState.objectMode ? ReadableObjectType : ReadableStringType;
        }

        if (Array.isArray(value)) {
            return ArrayType;
        }

        return ObjectType;
    }

    function normalizeReplacer$1(replacer) {
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

    function normalizeSpace$1(space) {
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

    var utils = {
        escapableCharCodeSubstitution: escapableCharCodeSubstitution$1,
        isLeadingSurrogate: isLeadingSurrogate$1,
        isTrailingSurrogate: isTrailingSurrogate$1,
        type: {
            PRIMITIVE: PrimitiveType,
            PROMISE: PromiseType,
            ARRAY: ArrayType,
            OBJECT: ObjectType,
            STRING_STREAM: ReadableStringType,
            OBJECT_STREAM: ReadableObjectType
        },

        isReadableStream: isReadableStream$1,
        replaceValue: replaceValue$1,
        getTypeNative: getTypeNative$1,
        getTypeAsync: getTypeAsync$1,
        normalizeReplacer: normalizeReplacer$1,
        normalizeSpace: normalizeSpace$1
    };

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
    } = utils;
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

    var stringifyInfo = function jsonStringifyInfo(value, replacer, space, options) {
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

    var stringifyStreamBrowser = () => {
        throw new Error('Method is not supported');
    };

    var textDecoderBrowser = TextDecoder;

    const { isReadableStream } = utils;


    const STACK_OBJECT = 1;
    const STACK_ARRAY = 2;
    const decoder = new textDecoderBrowser();

    function isObject(value) {
        return value !== null && typeof value === 'object';
    }

    function adjustPosition(error, parser) {
        if (error.name === 'SyntaxError' && parser.jsonParseOffset) {
            error.message = error.message.replace(/at position (\d+)/, (_, pos) =>
                'at position ' + (Number(pos) + parser.jsonParseOffset)
            );
        }

        return error;
    }

    function append(array, elements) {
        // Note: Avoid to use array.push(...elements) since it may lead to
        // "RangeError: Maximum call stack size exceeded" for a long arrays
        const initialLength = array.length;
        array.length += elements.length;

        for (let i = 0; i < elements.length; i++) {
            array[initialLength + i] = elements[i];
        }
    }

    var parseChunked = function(chunkEmitter) {
        let parser = new ChunkParser();

        if (isObject(chunkEmitter) && isReadableStream(chunkEmitter)) {
            return new Promise((resolve, reject) => {
                chunkEmitter
                    .on('data', chunk => {
                        try {
                            parser.push(chunk);
                        } catch (e) {
                            reject(adjustPosition(e, parser));
                            parser = null;
                        }
                    })
                    .on('error', (e) => {
                        parser = null;
                        reject(e);
                    })
                    .on('end', () => {
                        try {
                            resolve(parser.finish());
                        } catch (e) {
                            reject(adjustPosition(e, parser));
                        } finally {
                            parser = null;
                        }
                    });
            });
        }

        if (typeof chunkEmitter === 'function') {
            const iterator = chunkEmitter();

            if (isObject(iterator) && (Symbol.iterator in iterator || Symbol.asyncIterator in iterator)) {
                return new Promise(async (resolve, reject) => {
                    try {
                        for await (const chunk of iterator) {
                            parser.push(chunk);
                        }

                        resolve(parser.finish());
                    } catch (e) {
                        reject(adjustPosition(e, parser));
                    } finally {
                        parser = null;
                    }
                });
            }
        }

        throw new Error(
            'Chunk emitter should be readable stream, generator, ' +
            'async generator or function returning an iterable object'
        );
    };

    class ChunkParser {
        constructor() {
            this.value = undefined;
            this.valueStack = null;

            this.stack = new Array(100);
            this.lastFlushDepth = 0;
            this.flushDepth = 0;
            this.stateString = false;
            this.stateStringEscape = false;
            this.pendingByteSeq = null;
            this.pendingChunk = null;
            this.chunkOffset = 0;
            this.jsonParseOffset = 0;
        }

        parseAndAppend(fragment, wrap) {
            // Append new entries or elements
            if (this.stack[this.lastFlushDepth - 1] === STACK_OBJECT) {
                if (wrap) {
                    this.jsonParseOffset--;
                    fragment = '{' + fragment + '}';
                }

                Object.assign(this.valueStack.value, JSON.parse(fragment));
            } else {
                if (wrap) {
                    this.jsonParseOffset--;
                    fragment = '[' + fragment + ']';
                }

                append(this.valueStack.value, JSON.parse(fragment));
            }
        }

        prepareAddition(fragment) {
            const { value } = this.valueStack;
            const expectComma = Array.isArray(value)
                ? value.length !== 0
                : Object.keys(value).length !== 0;

            if (expectComma) {
                // Skip a comma at the beginning of fragment, otherwise it would
                // fail to parse
                if (fragment[0] === ',') {
                    this.jsonParseOffset++;
                    return fragment.slice(1);
                }

                // When value (an object or array) is not empty and a fragment
                // doesn't start with a comma, a single valid fragment starting
                // is a closing bracket. If it's not, a prefix is adding to fail
                // parsing. Otherwise, the sequence of chunks can be successfully
                // parsed, although it should not, e.g. ["[{}", "{}]"]
                if (fragment[0] !== '}' && fragment[0] !== ']') {
                    this.jsonParseOffset -= 3;
                    return '[[]' + fragment;
                }
            }

            return fragment;
        }

        flush(chunk, start, end) {
            let fragment = chunk.slice(start, end);

            // Save position correction an error in JSON.parse() if any
            this.jsonParseOffset = this.chunkOffset + start;

            // Prepend pending chunk if any
            if (this.pendingChunk !== null) {
                fragment = this.pendingChunk + fragment;
                this.jsonParseOffset -= this.pendingChunk.length;
                this.pendingChunk = null;
            }

            if (this.flushDepth === this.lastFlushDepth) {
                // Depth didn't changed, so it's a root value or entry/element set
                if (this.flushDepth > 0) {
                    this.parseAndAppend(this.prepareAddition(fragment), true);
                } else {
                    // That's an entire value on a top level
                    this.value = JSON.parse(fragment);
                    this.valueStack = {
                        value: this.value,
                        prev: null
                    };
                }
            } else if (this.flushDepth > this.lastFlushDepth) {
                // Add missed closing brackets/parentheses
                for (let i = this.flushDepth - 1; i >= this.lastFlushDepth; i--) {
                    fragment += this.stack[i] === STACK_OBJECT ? '}' : ']';
                }

                if (this.lastFlushDepth === 0) {
                    // That's a root value
                    this.value = JSON.parse(fragment);
                    this.valueStack = {
                        value: this.value,
                        prev: null
                    };
                } else {
                    this.parseAndAppend(this.prepareAddition(fragment), true);
                }

                // Move down to the depths to the last object/array, which is current now
                for (let i = this.lastFlushDepth || 1; i < this.flushDepth; i++) {
                    let value = this.valueStack.value;

                    if (this.stack[i - 1] === STACK_OBJECT) {
                        // find last entry
                        let key;
                        // eslint-disable-next-line curly
                        for (key in value);
                        value = value[key];
                    } else {
                        // last element
                        value = value[value.length - 1];
                    }

                    this.valueStack = {
                        value,
                        prev: this.valueStack
                    };
                }
            } else /* this.flushDepth < this.lastFlushDepth */ {
                fragment = this.prepareAddition(fragment);

                // Add missed opening brackets/parentheses
                for (let i = this.lastFlushDepth - 1; i >= this.flushDepth; i--) {
                    this.jsonParseOffset--;
                    fragment = (this.stack[i] === STACK_OBJECT ? '{' : '[') + fragment;
                }

                this.parseAndAppend(fragment, false);

                for (let i = this.lastFlushDepth - 1; i >= this.flushDepth; i--) {
                    this.valueStack = this.valueStack.prev;
                }
            }

            this.lastFlushDepth = this.flushDepth;
        }

        push(chunk) {
            if (typeof chunk !== 'string') {
                // Suppose chunk is Buffer or Uint8Array

                // Prepend uncompleted byte sequence if any
                if (this.pendingByteSeq !== null) {
                    const origRawChunk = chunk;
                    chunk = new Uint8Array(this.pendingByteSeq.length + origRawChunk.length);
                    chunk.set(this.pendingByteSeq);
                    chunk.set(origRawChunk, this.pendingByteSeq.length);
                    this.pendingByteSeq = null;
                }

                // In case Buffer/Uint8Array, an input is encoded in UTF8
                // Seek for parts of uncompleted UTF8 symbol on the ending
                // This makes sense only if we expect more chunks and last char is not multi-bytes
                if (chunk[chunk.length - 1] > 127) {
                    for (let seqLength = 0; seqLength < chunk.length; seqLength++) {
                        const byte = chunk[chunk.length - 1 - seqLength];

                        // 10xxxxxx - 2nd, 3rd or 4th byte
                        // 110xxxxx – first byte of 2-byte sequence
                        // 1110xxxx - first byte of 3-byte sequence
                        // 11110xxx - first byte of 4-byte sequence
                        if (byte >> 6 === 3) {
                            seqLength++;

                            // If the sequence is really incomplete, then preserve it
                            // for the future chunk and cut off it from the current chunk
                            if ((seqLength !== 4 && byte >> 3 === 0b11110) ||
                                (seqLength !== 3 && byte >> 4 === 0b1110) ||
                                (seqLength !== 2 && byte >> 5 === 0b110)) {
                                this.pendingByteSeq = chunk.slice(chunk.length - seqLength);
                                chunk = chunk.slice(0, -seqLength);
                            }

                            break;
                        }
                    }
                }

                // Convert chunk to a string, since single decode per chunk
                // is much effective than decode multiple small substrings
                chunk = decoder.decode(chunk);
            }

            const chunkLength = chunk.length;
            let lastFlushPoint = 0;
            let flushPoint = 0;

            // Main scan loop
            scan: for (let i = 0; i < chunkLength; i++) {
                if (this.stateString) {
                    for (; i < chunkLength; i++) {
                        if (this.stateStringEscape) {
                            this.stateStringEscape = false;
                        } else {
                            switch (chunk.charCodeAt(i)) {
                                case 0x22: /* " */
                                    this.stateString = false;
                                    continue scan;

                                case 0x5C: /* \ */
                                    this.stateStringEscape = true;
                            }
                        }
                    }

                    break;
                }

                switch (chunk.charCodeAt(i)) {
                    case 0x22: /* " */
                        this.stateString = true;
                        this.stateStringEscape = false;
                        break;

                    case 0x2C: /* , */
                        flushPoint = i;
                        break;

                    case 0x7B: /* { */
                        // Open an object
                        flushPoint = i + 1;
                        this.stack[this.flushDepth++] = STACK_OBJECT;
                        break;

                    case 0x5B: /* [ */
                        // Open an array
                        flushPoint = i + 1;
                        this.stack[this.flushDepth++] = STACK_ARRAY;
                        break;

                    case 0x5D: /* ] */
                    case 0x7D: /* } */
                        // Close an object or array
                        flushPoint = i + 1;
                        this.flushDepth--;

                        if (this.flushDepth < this.lastFlushDepth) {
                            this.flush(chunk, lastFlushPoint, flushPoint);
                            lastFlushPoint = flushPoint;
                        }

                        break;

                    case 0x09: /* \t */
                    case 0x0A: /* \n */
                    case 0x0D: /* \r */
                    case 0x20: /* space */
                        // Move points forward when they points on current position and it's a whitespace
                        if (lastFlushPoint === i) {
                            lastFlushPoint++;
                        }

                        if (flushPoint === i) {
                            flushPoint++;
                        }

                        break;
                }
            }

            if (flushPoint > lastFlushPoint) {
                this.flush(chunk, lastFlushPoint, flushPoint);
            }

            // Produce pendingChunk if something left
            if (flushPoint < chunkLength) {
                if (this.pendingChunk !== null) {
                    // When there is already a pending chunk then no flush happened,
                    // appending entire chunk to pending one
                    this.pendingChunk += chunk;
                } else {
                    // Create a pending chunk, it will start with non-whitespace since
                    // flushPoint was moved forward away from whitespaces on scan
                    this.pendingChunk = chunk.slice(flushPoint, chunkLength);
                }
            }

            this.chunkOffset += chunkLength;
        }

        finish() {
            if (this.pendingChunk !== null) {
                this.flush('', 0, 0);
                this.pendingChunk = null;
            }

            return this.value;
        }
    }

    var src = {
        version: version,
        stringifyInfo: stringifyInfo,
        stringifyStream: stringifyStreamBrowser,
        parseChunked: parseChunked
    };

    return src;

}));
