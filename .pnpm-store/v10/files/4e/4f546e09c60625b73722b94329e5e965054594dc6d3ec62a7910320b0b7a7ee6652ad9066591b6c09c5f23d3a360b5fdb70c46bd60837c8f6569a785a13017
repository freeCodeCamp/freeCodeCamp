'use strict';

const TypedArrayPrototypeGetSymbolToStringTag = (() => {
    const g = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;
    return (value) => g.call(value);
})();
function isUint8Array(value) {
    return TypedArrayPrototypeGetSymbolToStringTag(value) === 'Uint8Array';
}
function isAnyArrayBuffer(value) {
    return (typeof value === 'object' &&
        value != null &&
        Symbol.toStringTag in value &&
        (value[Symbol.toStringTag] === 'ArrayBuffer' ||
            value[Symbol.toStringTag] === 'SharedArrayBuffer'));
}
function isRegExp(regexp) {
    return regexp instanceof RegExp || Object.prototype.toString.call(regexp) === '[object RegExp]';
}
function isMap(value) {
    return (typeof value === 'object' &&
        value != null &&
        Symbol.toStringTag in value &&
        value[Symbol.toStringTag] === 'Map');
}
function isDate(date) {
    return date instanceof Date || Object.prototype.toString.call(date) === '[object Date]';
}
function defaultInspect(x, _options) {
    return JSON.stringify(x, (k, v) => {
        if (typeof v === 'bigint') {
            return { $numberLong: `${v}` };
        }
        else if (isMap(v)) {
            return Object.fromEntries(v);
        }
        return v;
    });
}
function getStylizeFunction(options) {
    const stylizeExists = options != null &&
        typeof options === 'object' &&
        'stylize' in options &&
        typeof options.stylize === 'function';
    if (stylizeExists) {
        return options.stylize;
    }
}

const BSON_MAJOR_VERSION = 6;
const BSON_VERSION_SYMBOL = Symbol.for('@@mdb.bson.version');
const BSON_INT32_MAX = 0x7fffffff;
const BSON_INT32_MIN = -2147483648;
const BSON_INT64_MAX = Math.pow(2, 63) - 1;
const BSON_INT64_MIN = -Math.pow(2, 63);
const JS_INT_MAX = Math.pow(2, 53);
const JS_INT_MIN = -Math.pow(2, 53);
const BSON_DATA_NUMBER = 1;
const BSON_DATA_STRING = 2;
const BSON_DATA_OBJECT = 3;
const BSON_DATA_ARRAY = 4;
const BSON_DATA_BINARY = 5;
const BSON_DATA_UNDEFINED = 6;
const BSON_DATA_OID = 7;
const BSON_DATA_BOOLEAN = 8;
const BSON_DATA_DATE = 9;
const BSON_DATA_NULL = 10;
const BSON_DATA_REGEXP = 11;
const BSON_DATA_DBPOINTER = 12;
const BSON_DATA_CODE = 13;
const BSON_DATA_SYMBOL = 14;
const BSON_DATA_CODE_W_SCOPE = 15;
const BSON_DATA_INT = 16;
const BSON_DATA_TIMESTAMP = 17;
const BSON_DATA_LONG = 18;
const BSON_DATA_DECIMAL128 = 19;
const BSON_DATA_MIN_KEY = 0xff;
const BSON_DATA_MAX_KEY = 0x7f;
const BSON_BINARY_SUBTYPE_DEFAULT = 0;
const BSON_BINARY_SUBTYPE_UUID_NEW = 4;
const BSONType = Object.freeze({
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: -1,
    maxKey: 127
});

class BSONError extends Error {
    get bsonError() {
        return true;
    }
    get name() {
        return 'BSONError';
    }
    constructor(message, options) {
        super(message, options);
    }
    static isBSONError(value) {
        return (value != null &&
            typeof value === 'object' &&
            'bsonError' in value &&
            value.bsonError === true &&
            'name' in value &&
            'message' in value &&
            'stack' in value);
    }
}
class BSONVersionError extends BSONError {
    get name() {
        return 'BSONVersionError';
    }
    constructor() {
        super(`Unsupported BSON version, bson types must be from bson ${BSON_MAJOR_VERSION}.x.x`);
    }
}
class BSONRuntimeError extends BSONError {
    get name() {
        return 'BSONRuntimeError';
    }
    constructor(message) {
        super(message);
    }
}
class BSONOffsetError extends BSONError {
    get name() {
        return 'BSONOffsetError';
    }
    constructor(message, offset, options) {
        super(`${message}. offset: ${offset}`, options);
        this.offset = offset;
    }
}

let TextDecoderFatal;
let TextDecoderNonFatal;
function parseUtf8(buffer, start, end, fatal) {
    if (fatal) {
        TextDecoderFatal ??= new TextDecoder('utf8', { fatal: true });
        try {
            return TextDecoderFatal.decode(buffer.subarray(start, end));
        }
        catch (cause) {
            throw new BSONError('Invalid UTF-8 string in BSON document', { cause });
        }
    }
    TextDecoderNonFatal ??= new TextDecoder('utf8', { fatal: false });
    return TextDecoderNonFatal.decode(buffer.subarray(start, end));
}

function tryReadBasicLatin(uint8array, start, end) {
    if (uint8array.length === 0) {
        return '';
    }
    const stringByteLength = end - start;
    if (stringByteLength === 0) {
        return '';
    }
    if (stringByteLength > 20) {
        return null;
    }
    if (stringByteLength === 1 && uint8array[start] < 128) {
        return String.fromCharCode(uint8array[start]);
    }
    if (stringByteLength === 2 && uint8array[start] < 128 && uint8array[start + 1] < 128) {
        return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]);
    }
    if (stringByteLength === 3 &&
        uint8array[start] < 128 &&
        uint8array[start + 1] < 128 &&
        uint8array[start + 2] < 128) {
        return (String.fromCharCode(uint8array[start]) +
            String.fromCharCode(uint8array[start + 1]) +
            String.fromCharCode(uint8array[start + 2]));
    }
    const latinBytes = [];
    for (let i = start; i < end; i++) {
        const byte = uint8array[i];
        if (byte > 127) {
            return null;
        }
        latinBytes.push(byte);
    }
    return String.fromCharCode(...latinBytes);
}
function tryWriteBasicLatin(destination, source, offset) {
    if (source.length === 0)
        return 0;
    if (source.length > 25)
        return null;
    if (destination.length - offset < source.length)
        return null;
    for (let charOffset = 0, destinationOffset = offset; charOffset < source.length; charOffset++, destinationOffset++) {
        const char = source.charCodeAt(charOffset);
        if (char > 127)
            return null;
        destination[destinationOffset] = char;
    }
    return source.length;
}

function nodejsMathRandomBytes(byteLength) {
    return nodeJsByteUtils.fromNumberArray(Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256)));
}
const nodejsRandomBytes = (() => {
    try {
        return require('crypto').randomBytes;
    }
    catch {
        return nodejsMathRandomBytes;
    }
})();
const nodeJsByteUtils = {
    toLocalBufferType(potentialBuffer) {
        if (Buffer.isBuffer(potentialBuffer)) {
            return potentialBuffer;
        }
        if (ArrayBuffer.isView(potentialBuffer)) {
            return Buffer.from(potentialBuffer.buffer, potentialBuffer.byteOffset, potentialBuffer.byteLength);
        }
        const stringTag = potentialBuffer?.[Symbol.toStringTag] ?? Object.prototype.toString.call(potentialBuffer);
        if (stringTag === 'ArrayBuffer' ||
            stringTag === 'SharedArrayBuffer' ||
            stringTag === '[object ArrayBuffer]' ||
            stringTag === '[object SharedArrayBuffer]') {
            return Buffer.from(potentialBuffer);
        }
        throw new BSONError(`Cannot create Buffer from the passed potentialBuffer.`);
    },
    allocate(size) {
        return Buffer.alloc(size);
    },
    allocateUnsafe(size) {
        return Buffer.allocUnsafe(size);
    },
    equals(a, b) {
        return nodeJsByteUtils.toLocalBufferType(a).equals(b);
    },
    fromNumberArray(array) {
        return Buffer.from(array);
    },
    fromBase64(base64) {
        return Buffer.from(base64, 'base64');
    },
    toBase64(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('base64');
    },
    fromISO88591(codePoints) {
        return Buffer.from(codePoints, 'binary');
    },
    toISO88591(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('binary');
    },
    fromHex(hex) {
        return Buffer.from(hex, 'hex');
    },
    toHex(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).toString('hex');
    },
    toUTF8(buffer, start, end, fatal) {
        const basicLatin = end - start <= 20 ? tryReadBasicLatin(buffer, start, end) : null;
        if (basicLatin != null) {
            return basicLatin;
        }
        const string = nodeJsByteUtils.toLocalBufferType(buffer).toString('utf8', start, end);
        if (fatal) {
            for (let i = 0; i < string.length; i++) {
                if (string.charCodeAt(i) === 0xfffd) {
                    parseUtf8(buffer, start, end, true);
                    break;
                }
            }
        }
        return string;
    },
    utf8ByteLength(input) {
        return Buffer.byteLength(input, 'utf8');
    },
    encodeUTF8Into(buffer, source, byteOffset) {
        const latinBytesWritten = tryWriteBasicLatin(buffer, source, byteOffset);
        if (latinBytesWritten != null) {
            return latinBytesWritten;
        }
        return nodeJsByteUtils.toLocalBufferType(buffer).write(source, byteOffset, undefined, 'utf8');
    },
    randomBytes: nodejsRandomBytes,
    swap32(buffer) {
        return nodeJsByteUtils.toLocalBufferType(buffer).swap32();
    }
};

function isReactNative() {
    const { navigator } = globalThis;
    return typeof navigator === 'object' && navigator.product === 'ReactNative';
}
function webMathRandomBytes(byteLength) {
    if (byteLength < 0) {
        throw new RangeError(`The argument 'byteLength' is invalid. Received ${byteLength}`);
    }
    return webByteUtils.fromNumberArray(Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256)));
}
const webRandomBytes = (() => {
    const { crypto } = globalThis;
    if (crypto != null && typeof crypto.getRandomValues === 'function') {
        return (byteLength) => {
            return crypto.getRandomValues(webByteUtils.allocate(byteLength));
        };
    }
    else {
        if (isReactNative()) {
            const { console } = globalThis;
            console?.warn?.('BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.');
        }
        return webMathRandomBytes;
    }
})();
const HEX_DIGIT = /(\d|[a-f])/i;
const webByteUtils = {
    toLocalBufferType(potentialUint8array) {
        const stringTag = potentialUint8array?.[Symbol.toStringTag] ??
            Object.prototype.toString.call(potentialUint8array);
        if (stringTag === 'Uint8Array') {
            return potentialUint8array;
        }
        if (ArrayBuffer.isView(potentialUint8array)) {
            return new Uint8Array(potentialUint8array.buffer.slice(potentialUint8array.byteOffset, potentialUint8array.byteOffset + potentialUint8array.byteLength));
        }
        if (stringTag === 'ArrayBuffer' ||
            stringTag === 'SharedArrayBuffer' ||
            stringTag === '[object ArrayBuffer]' ||
            stringTag === '[object SharedArrayBuffer]') {
            return new Uint8Array(potentialUint8array);
        }
        throw new BSONError(`Cannot make a Uint8Array from passed potentialBuffer.`);
    },
    allocate(size) {
        if (typeof size !== 'number') {
            throw new TypeError(`The "size" argument must be of type number. Received ${String(size)}`);
        }
        return new Uint8Array(size);
    },
    allocateUnsafe(size) {
        return webByteUtils.allocate(size);
    },
    equals(a, b) {
        if (a.byteLength !== b.byteLength) {
            return false;
        }
        for (let i = 0; i < a.byteLength; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    },
    fromNumberArray(array) {
        return Uint8Array.from(array);
    },
    fromBase64(base64) {
        return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    },
    toBase64(uint8array) {
        return btoa(webByteUtils.toISO88591(uint8array));
    },
    fromISO88591(codePoints) {
        return Uint8Array.from(codePoints, c => c.charCodeAt(0) & 0xff);
    },
    toISO88591(uint8array) {
        return Array.from(Uint16Array.from(uint8array), b => String.fromCharCode(b)).join('');
    },
    fromHex(hex) {
        const evenLengthHex = hex.length % 2 === 0 ? hex : hex.slice(0, hex.length - 1);
        const buffer = [];
        for (let i = 0; i < evenLengthHex.length; i += 2) {
            const firstDigit = evenLengthHex[i];
            const secondDigit = evenLengthHex[i + 1];
            if (!HEX_DIGIT.test(firstDigit)) {
                break;
            }
            if (!HEX_DIGIT.test(secondDigit)) {
                break;
            }
            const hexDigit = Number.parseInt(`${firstDigit}${secondDigit}`, 16);
            buffer.push(hexDigit);
        }
        return Uint8Array.from(buffer);
    },
    toHex(uint8array) {
        return Array.from(uint8array, byte => byte.toString(16).padStart(2, '0')).join('');
    },
    toUTF8(uint8array, start, end, fatal) {
        const basicLatin = end - start <= 20 ? tryReadBasicLatin(uint8array, start, end) : null;
        if (basicLatin != null) {
            return basicLatin;
        }
        return parseUtf8(uint8array, start, end, fatal);
    },
    utf8ByteLength(input) {
        return new TextEncoder().encode(input).byteLength;
    },
    encodeUTF8Into(uint8array, source, byteOffset) {
        const bytes = new TextEncoder().encode(source);
        uint8array.set(bytes, byteOffset);
        return bytes.byteLength;
    },
    randomBytes: webRandomBytes,
    swap32(buffer) {
        if (buffer.length % 4 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (let i = 0; i < buffer.length; i += 4) {
            const byte0 = buffer[i];
            const byte1 = buffer[i + 1];
            const byte2 = buffer[i + 2];
            const byte3 = buffer[i + 3];
            buffer[i] = byte3;
            buffer[i + 1] = byte2;
            buffer[i + 2] = byte1;
            buffer[i + 3] = byte0;
        }
        return buffer;
    }
};

const hasGlobalBuffer = typeof Buffer === 'function' && Buffer.prototype?._isBuffer !== true;
const ByteUtils = hasGlobalBuffer ? nodeJsByteUtils : webByteUtils;

class BSONValue {
    get [BSON_VERSION_SYMBOL]() {
        return BSON_MAJOR_VERSION;
    }
    [Symbol.for('nodejs.util.inspect.custom')](depth, options, inspect) {
        return this.inspect(depth, options, inspect);
    }
}

const FLOAT = new Float64Array(1);
const FLOAT_BYTES = new Uint8Array(FLOAT.buffer, 0, 8);
FLOAT[0] = -1;
const isBigEndian = FLOAT_BYTES[7] === 0;
const NumberUtils = {
    isBigEndian,
    getNonnegativeInt32LE(source, offset) {
        if (source[offset + 3] > 127) {
            throw new RangeError(`Size cannot be negative at offset: ${offset}`);
        }
        return (source[offset] |
            (source[offset + 1] << 8) |
            (source[offset + 2] << 16) |
            (source[offset + 3] << 24));
    },
    getInt32LE(source, offset) {
        return (source[offset] |
            (source[offset + 1] << 8) |
            (source[offset + 2] << 16) |
            (source[offset + 3] << 24));
    },
    getUint32LE(source, offset) {
        return (source[offset] +
            source[offset + 1] * 256 +
            source[offset + 2] * 65536 +
            source[offset + 3] * 16777216);
    },
    getUint32BE(source, offset) {
        return (source[offset + 3] +
            source[offset + 2] * 256 +
            source[offset + 1] * 65536 +
            source[offset] * 16777216);
    },
    getBigInt64LE(source, offset) {
        const hi = BigInt(source[offset + 4] +
            source[offset + 5] * 256 +
            source[offset + 6] * 65536 +
            (source[offset + 7] << 24));
        const lo = BigInt(source[offset] +
            source[offset + 1] * 256 +
            source[offset + 2] * 65536 +
            source[offset + 3] * 16777216);
        return (hi << BigInt(32)) + lo;
    },
    getFloat64LE: isBigEndian
        ? (source, offset) => {
            FLOAT_BYTES[7] = source[offset];
            FLOAT_BYTES[6] = source[offset + 1];
            FLOAT_BYTES[5] = source[offset + 2];
            FLOAT_BYTES[4] = source[offset + 3];
            FLOAT_BYTES[3] = source[offset + 4];
            FLOAT_BYTES[2] = source[offset + 5];
            FLOAT_BYTES[1] = source[offset + 6];
            FLOAT_BYTES[0] = source[offset + 7];
            return FLOAT[0];
        }
        : (source, offset) => {
            FLOAT_BYTES[0] = source[offset];
            FLOAT_BYTES[1] = source[offset + 1];
            FLOAT_BYTES[2] = source[offset + 2];
            FLOAT_BYTES[3] = source[offset + 3];
            FLOAT_BYTES[4] = source[offset + 4];
            FLOAT_BYTES[5] = source[offset + 5];
            FLOAT_BYTES[6] = source[offset + 6];
            FLOAT_BYTES[7] = source[offset + 7];
            return FLOAT[0];
        },
    setInt32BE(destination, offset, value) {
        destination[offset + 3] = value;
        value >>>= 8;
        destination[offset + 2] = value;
        value >>>= 8;
        destination[offset + 1] = value;
        value >>>= 8;
        destination[offset] = value;
        return 4;
    },
    setInt32LE(destination, offset, value) {
        destination[offset] = value;
        value >>>= 8;
        destination[offset + 1] = value;
        value >>>= 8;
        destination[offset + 2] = value;
        value >>>= 8;
        destination[offset + 3] = value;
        return 4;
    },
    setBigInt64LE(destination, offset, value) {
        const mask32bits = BigInt(0xffff_ffff);
        let lo = Number(value & mask32bits);
        destination[offset] = lo;
        lo >>= 8;
        destination[offset + 1] = lo;
        lo >>= 8;
        destination[offset + 2] = lo;
        lo >>= 8;
        destination[offset + 3] = lo;
        let hi = Number((value >> BigInt(32)) & mask32bits);
        destination[offset + 4] = hi;
        hi >>= 8;
        destination[offset + 5] = hi;
        hi >>= 8;
        destination[offset + 6] = hi;
        hi >>= 8;
        destination[offset + 7] = hi;
        return 8;
    },
    setFloat64LE: isBigEndian
        ? (destination, offset, value) => {
            FLOAT[0] = value;
            destination[offset] = FLOAT_BYTES[7];
            destination[offset + 1] = FLOAT_BYTES[6];
            destination[offset + 2] = FLOAT_BYTES[5];
            destination[offset + 3] = FLOAT_BYTES[4];
            destination[offset + 4] = FLOAT_BYTES[3];
            destination[offset + 5] = FLOAT_BYTES[2];
            destination[offset + 6] = FLOAT_BYTES[1];
            destination[offset + 7] = FLOAT_BYTES[0];
            return 8;
        }
        : (destination, offset, value) => {
            FLOAT[0] = value;
            destination[offset] = FLOAT_BYTES[0];
            destination[offset + 1] = FLOAT_BYTES[1];
            destination[offset + 2] = FLOAT_BYTES[2];
            destination[offset + 3] = FLOAT_BYTES[3];
            destination[offset + 4] = FLOAT_BYTES[4];
            destination[offset + 5] = FLOAT_BYTES[5];
            destination[offset + 6] = FLOAT_BYTES[6];
            destination[offset + 7] = FLOAT_BYTES[7];
            return 8;
        }
};

class Binary extends BSONValue {
    get _bsontype() {
        return 'Binary';
    }
    constructor(buffer, subType) {
        super();
        if (!(buffer == null) &&
            typeof buffer === 'string' &&
            !ArrayBuffer.isView(buffer) &&
            !isAnyArrayBuffer(buffer) &&
            !Array.isArray(buffer)) {
            throw new BSONError('Binary can only be constructed from Uint8Array or number[]');
        }
        this.sub_type = subType ?? Binary.BSON_BINARY_SUBTYPE_DEFAULT;
        if (buffer == null) {
            this.buffer = ByteUtils.allocate(Binary.BUFFER_SIZE);
            this.position = 0;
        }
        else {
            this.buffer = Array.isArray(buffer)
                ? ByteUtils.fromNumberArray(buffer)
                : ByteUtils.toLocalBufferType(buffer);
            this.position = this.buffer.byteLength;
        }
    }
    put(byteValue) {
        if (typeof byteValue === 'string' && byteValue.length !== 1) {
            throw new BSONError('only accepts single character String');
        }
        else if (typeof byteValue !== 'number' && byteValue.length !== 1)
            throw new BSONError('only accepts single character Uint8Array or Array');
        let decodedByte;
        if (typeof byteValue === 'string') {
            decodedByte = byteValue.charCodeAt(0);
        }
        else if (typeof byteValue === 'number') {
            decodedByte = byteValue;
        }
        else {
            decodedByte = byteValue[0];
        }
        if (decodedByte < 0 || decodedByte > 255) {
            throw new BSONError('only accepts number in a valid unsigned byte range 0-255');
        }
        if (this.buffer.byteLength > this.position) {
            this.buffer[this.position++] = decodedByte;
        }
        else {
            const newSpace = ByteUtils.allocate(Binary.BUFFER_SIZE + this.buffer.length);
            newSpace.set(this.buffer, 0);
            this.buffer = newSpace;
            this.buffer[this.position++] = decodedByte;
        }
    }
    write(sequence, offset) {
        offset = typeof offset === 'number' ? offset : this.position;
        if (this.buffer.byteLength < offset + sequence.length) {
            const newSpace = ByteUtils.allocate(this.buffer.byteLength + sequence.length);
            newSpace.set(this.buffer, 0);
            this.buffer = newSpace;
        }
        if (ArrayBuffer.isView(sequence)) {
            this.buffer.set(ByteUtils.toLocalBufferType(sequence), offset);
            this.position =
                offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
        }
        else if (typeof sequence === 'string') {
            throw new BSONError('input cannot be string');
        }
    }
    read(position, length) {
        length = length && length > 0 ? length : this.position;
        const end = position + length;
        return this.buffer.subarray(position, end > this.position ? this.position : end);
    }
    value() {
        return this.buffer.length === this.position
            ? this.buffer
            : this.buffer.subarray(0, this.position);
    }
    length() {
        return this.position;
    }
    toJSON() {
        return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
    }
    toString(encoding) {
        if (encoding === 'hex')
            return ByteUtils.toHex(this.buffer.subarray(0, this.position));
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
        if (encoding === 'utf8' || encoding === 'utf-8')
            return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
        return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
    }
    toExtendedJSON(options) {
        options = options || {};
        if (this.sub_type === Binary.SUBTYPE_VECTOR) {
            validateBinaryVector(this);
        }
        const base64String = ByteUtils.toBase64(this.buffer);
        const subType = Number(this.sub_type).toString(16);
        if (options.legacy) {
            return {
                $binary: base64String,
                $type: subType.length === 1 ? '0' + subType : subType
            };
        }
        return {
            $binary: {
                base64: base64String,
                subType: subType.length === 1 ? '0' + subType : subType
            }
        };
    }
    toUUID() {
        if (this.sub_type === Binary.SUBTYPE_UUID) {
            return new UUID(this.buffer.subarray(0, this.position));
        }
        throw new BSONError(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${Binary.SUBTYPE_UUID}" is currently supported.`);
    }
    static createFromHexString(hex, subType) {
        return new Binary(ByteUtils.fromHex(hex), subType);
    }
    static createFromBase64(base64, subType) {
        return new Binary(ByteUtils.fromBase64(base64), subType);
    }
    static fromExtendedJSON(doc, options) {
        options = options || {};
        let data;
        let type;
        if ('$binary' in doc) {
            if (options.legacy && typeof doc.$binary === 'string' && '$type' in doc) {
                type = doc.$type ? parseInt(doc.$type, 16) : 0;
                data = ByteUtils.fromBase64(doc.$binary);
            }
            else {
                if (typeof doc.$binary !== 'string') {
                    type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
                    data = ByteUtils.fromBase64(doc.$binary.base64);
                }
            }
        }
        else if ('$uuid' in doc) {
            type = 4;
            data = UUID.bytesFromString(doc.$uuid);
        }
        if (!data) {
            throw new BSONError(`Unexpected Binary Extended JSON format ${JSON.stringify(doc)}`);
        }
        return type === BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary(data, type);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const base64 = ByteUtils.toBase64(this.buffer.subarray(0, this.position));
        const base64Arg = inspect(base64, options);
        const subTypeArg = inspect(this.sub_type, options);
        return `Binary.createFromBase64(${base64Arg}, ${subTypeArg})`;
    }
    toInt8Array() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.Int8) {
            throw new BSONError('Binary datatype field is not Int8');
        }
        validateBinaryVector(this);
        return new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
    }
    toFloat32Array() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.Float32) {
            throw new BSONError('Binary datatype field is not Float32');
        }
        validateBinaryVector(this);
        const floatBytes = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
        if (NumberUtils.isBigEndian)
            ByteUtils.swap32(floatBytes);
        return new Float32Array(floatBytes.buffer);
    }
    toPackedBits() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
            throw new BSONError('Binary datatype field is not packed bit');
        }
        validateBinaryVector(this);
        return new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
    }
    toBits() {
        if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
            throw new BSONError('Binary sub_type is not Vector');
        }
        if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
            throw new BSONError('Binary datatype field is not packed bit');
        }
        validateBinaryVector(this);
        const byteCount = this.length() - 2;
        const bitCount = byteCount * 8 - this.buffer[1];
        const bits = new Int8Array(bitCount);
        for (let bitOffset = 0; bitOffset < bits.length; bitOffset++) {
            const byteOffset = (bitOffset / 8) | 0;
            const byte = this.buffer[byteOffset + 2];
            const shift = 7 - (bitOffset % 8);
            const bit = (byte >> shift) & 1;
            bits[bitOffset] = bit;
        }
        return bits;
    }
    static fromInt8Array(array) {
        const buffer = ByteUtils.allocate(array.byteLength + 2);
        buffer[0] = Binary.VECTOR_TYPE.Int8;
        buffer[1] = 0;
        const intBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
        buffer.set(intBytes, 2);
        const bin = new this(buffer, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromFloat32Array(array) {
        const binaryBytes = ByteUtils.allocate(array.byteLength + 2);
        binaryBytes[0] = Binary.VECTOR_TYPE.Float32;
        binaryBytes[1] = 0;
        const floatBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
        binaryBytes.set(floatBytes, 2);
        if (NumberUtils.isBigEndian)
            ByteUtils.swap32(new Uint8Array(binaryBytes.buffer, 2));
        const bin = new this(binaryBytes, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromPackedBits(array, padding = 0) {
        const buffer = ByteUtils.allocate(array.byteLength + 2);
        buffer[0] = Binary.VECTOR_TYPE.PackedBit;
        buffer[1] = padding;
        buffer.set(array, 2);
        const bin = new this(buffer, this.SUBTYPE_VECTOR);
        validateBinaryVector(bin);
        return bin;
    }
    static fromBits(bits) {
        const byteLength = (bits.length + 7) >>> 3;
        const bytes = new Uint8Array(byteLength + 2);
        bytes[0] = Binary.VECTOR_TYPE.PackedBit;
        const remainder = bits.length % 8;
        bytes[1] = remainder === 0 ? 0 : 8 - remainder;
        for (let bitOffset = 0; bitOffset < bits.length; bitOffset++) {
            const byteOffset = bitOffset >>> 3;
            const bit = bits[bitOffset];
            if (bit !== 0 && bit !== 1) {
                throw new BSONError(`Invalid bit value at ${bitOffset}: must be 0 or 1, found ${bits[bitOffset]}`);
            }
            if (bit === 0)
                continue;
            const shift = 7 - (bitOffset % 8);
            bytes[byteOffset + 2] |= bit << shift;
        }
        return new this(bytes, Binary.SUBTYPE_VECTOR);
    }
}
Binary.BSON_BINARY_SUBTYPE_DEFAULT = 0;
Binary.BUFFER_SIZE = 256;
Binary.SUBTYPE_DEFAULT = 0;
Binary.SUBTYPE_FUNCTION = 1;
Binary.SUBTYPE_BYTE_ARRAY = 2;
Binary.SUBTYPE_UUID_OLD = 3;
Binary.SUBTYPE_UUID = 4;
Binary.SUBTYPE_MD5 = 5;
Binary.SUBTYPE_ENCRYPTED = 6;
Binary.SUBTYPE_COLUMN = 7;
Binary.SUBTYPE_SENSITIVE = 8;
Binary.SUBTYPE_VECTOR = 9;
Binary.SUBTYPE_USER_DEFINED = 128;
Binary.VECTOR_TYPE = Object.freeze({
    Int8: 0x03,
    Float32: 0x27,
    PackedBit: 0x10
});
function validateBinaryVector(vector) {
    if (vector.sub_type !== Binary.SUBTYPE_VECTOR)
        return;
    const size = vector.position;
    const datatype = vector.buffer[0];
    const padding = vector.buffer[1];
    if ((datatype === Binary.VECTOR_TYPE.Float32 || datatype === Binary.VECTOR_TYPE.Int8) &&
        padding !== 0) {
        throw new BSONError('Invalid Vector: padding must be zero for int8 and float32 vectors');
    }
    if (datatype === Binary.VECTOR_TYPE.Float32) {
        if (size !== 0 && size - 2 !== 0 && (size - 2) % 4 !== 0) {
            throw new BSONError('Invalid Vector: Float32 vector must contain a multiple of 4 bytes');
        }
    }
    if (datatype === Binary.VECTOR_TYPE.PackedBit && padding !== 0 && size === 2) {
        throw new BSONError('Invalid Vector: padding must be zero for packed bit vectors that are empty');
    }
    if (datatype === Binary.VECTOR_TYPE.PackedBit && padding > 7) {
        throw new BSONError(`Invalid Vector: padding must be a value between 0 and 7. found: ${padding}`);
    }
}
const UUID_BYTE_LENGTH = 16;
const UUID_WITHOUT_DASHES = /^[0-9A-F]{32}$/i;
const UUID_WITH_DASHES = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
class UUID extends Binary {
    constructor(input) {
        let bytes;
        if (input == null) {
            bytes = UUID.generate();
        }
        else if (input instanceof UUID) {
            bytes = ByteUtils.toLocalBufferType(new Uint8Array(input.buffer));
        }
        else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
            bytes = ByteUtils.toLocalBufferType(input);
        }
        else if (typeof input === 'string') {
            bytes = UUID.bytesFromString(input);
        }
        else {
            throw new BSONError('Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).');
        }
        super(bytes, BSON_BINARY_SUBTYPE_UUID_NEW);
    }
    get id() {
        return this.buffer;
    }
    set id(value) {
        this.buffer = value;
    }
    toHexString(includeDashes = true) {
        if (includeDashes) {
            return [
                ByteUtils.toHex(this.buffer.subarray(0, 4)),
                ByteUtils.toHex(this.buffer.subarray(4, 6)),
                ByteUtils.toHex(this.buffer.subarray(6, 8)),
                ByteUtils.toHex(this.buffer.subarray(8, 10)),
                ByteUtils.toHex(this.buffer.subarray(10, 16))
            ].join('-');
        }
        return ByteUtils.toHex(this.buffer);
    }
    toString(encoding) {
        if (encoding === 'hex')
            return ByteUtils.toHex(this.id);
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.id);
        return this.toHexString();
    }
    toJSON() {
        return this.toHexString();
    }
    equals(otherId) {
        if (!otherId) {
            return false;
        }
        if (otherId instanceof UUID) {
            return ByteUtils.equals(otherId.id, this.id);
        }
        try {
            return ByteUtils.equals(new UUID(otherId).id, this.id);
        }
        catch {
            return false;
        }
    }
    toBinary() {
        return new Binary(this.id, Binary.SUBTYPE_UUID);
    }
    static generate() {
        const bytes = ByteUtils.randomBytes(UUID_BYTE_LENGTH);
        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;
        return bytes;
    }
    static isValid(input) {
        if (!input) {
            return false;
        }
        if (typeof input === 'string') {
            return UUID.isValidUUIDString(input);
        }
        if (isUint8Array(input)) {
            return input.byteLength === UUID_BYTE_LENGTH;
        }
        return (input._bsontype === 'Binary' &&
            input.sub_type === this.SUBTYPE_UUID &&
            input.buffer.byteLength === 16);
    }
    static createFromHexString(hexString) {
        const buffer = UUID.bytesFromString(hexString);
        return new UUID(buffer);
    }
    static createFromBase64(base64) {
        return new UUID(ByteUtils.fromBase64(base64));
    }
    static bytesFromString(representation) {
        if (!UUID.isValidUUIDString(representation)) {
            throw new BSONError('UUID string representation must be 32 hex digits or canonical hyphenated representation');
        }
        return ByteUtils.fromHex(representation.replace(/-/g, ''));
    }
    static isValidUUIDString(representation) {
        return UUID_WITHOUT_DASHES.test(representation) || UUID_WITH_DASHES.test(representation);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new UUID(${inspect(this.toHexString(), options)})`;
    }
}

class Code extends BSONValue {
    get _bsontype() {
        return 'Code';
    }
    constructor(code, scope) {
        super();
        this.code = code.toString();
        this.scope = scope ?? null;
    }
    toJSON() {
        if (this.scope != null) {
            return { code: this.code, scope: this.scope };
        }
        return { code: this.code };
    }
    toExtendedJSON() {
        if (this.scope) {
            return { $code: this.code, $scope: this.scope };
        }
        return { $code: this.code };
    }
    static fromExtendedJSON(doc) {
        return new Code(doc.$code, doc.$scope);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        let parametersString = inspect(this.code, options);
        const multiLineFn = parametersString.includes('\n');
        if (this.scope != null) {
            parametersString += `,${multiLineFn ? '\n' : ' '}${inspect(this.scope, options)}`;
        }
        const endingNewline = multiLineFn && this.scope === null;
        return `new Code(${multiLineFn ? '\n' : ''}${parametersString}${endingNewline ? '\n' : ''})`;
    }
}

function isDBRefLike(value) {
    return (value != null &&
        typeof value === 'object' &&
        '$id' in value &&
        value.$id != null &&
        '$ref' in value &&
        typeof value.$ref === 'string' &&
        (!('$db' in value) || ('$db' in value && typeof value.$db === 'string')));
}
class DBRef extends BSONValue {
    get _bsontype() {
        return 'DBRef';
    }
    constructor(collection, oid, db, fields) {
        super();
        const parts = collection.split('.');
        if (parts.length === 2) {
            db = parts.shift();
            collection = parts.shift();
        }
        this.collection = collection;
        this.oid = oid;
        this.db = db;
        this.fields = fields || {};
    }
    get namespace() {
        return this.collection;
    }
    set namespace(value) {
        this.collection = value;
    }
    toJSON() {
        const o = Object.assign({
            $ref: this.collection,
            $id: this.oid
        }, this.fields);
        if (this.db != null)
            o.$db = this.db;
        return o;
    }
    toExtendedJSON(options) {
        options = options || {};
        let o = {
            $ref: this.collection,
            $id: this.oid
        };
        if (options.legacy) {
            return o;
        }
        if (this.db)
            o.$db = this.db;
        o = Object.assign(o, this.fields);
        return o;
    }
    static fromExtendedJSON(doc) {
        const copy = Object.assign({}, doc);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const args = [
            inspect(this.namespace, options),
            inspect(this.oid, options),
            ...(this.db ? [inspect(this.db, options)] : []),
            ...(Object.keys(this.fields).length > 0 ? [inspect(this.fields, options)] : [])
        ];
        args[1] = inspect === defaultInspect ? `new ObjectId(${args[1]})` : args[1];
        return `new DBRef(${args.join(', ')})`;
    }
}

function removeLeadingZerosAndExplicitPlus(str) {
    if (str === '') {
        return str;
    }
    let startIndex = 0;
    const isNegative = str[startIndex] === '-';
    const isExplicitlyPositive = str[startIndex] === '+';
    if (isExplicitlyPositive || isNegative) {
        startIndex += 1;
    }
    let foundInsignificantZero = false;
    for (; startIndex < str.length && str[startIndex] === '0'; ++startIndex) {
        foundInsignificantZero = true;
    }
    if (!foundInsignificantZero) {
        return isExplicitlyPositive ? str.slice(1) : str;
    }
    return `${isNegative ? '-' : ''}${str.length === startIndex ? '0' : str.slice(startIndex)}`;
}
function validateStringCharacters(str, radix) {
    radix = radix ?? 10;
    const validCharacters = '0123456789abcdefghijklmnopqrstuvwxyz'.slice(0, radix);
    const regex = new RegExp(`[^-+${validCharacters}]`, 'i');
    return regex.test(str) ? false : str;
}

let wasm = undefined;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
}
catch {
}
const TWO_PWR_16_DBL = 1 << 16;
const TWO_PWR_24_DBL = 1 << 24;
const TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
const TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
const TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
const INT_CACHE = {};
const UINT_CACHE = {};
const MAX_INT64_STRING_LENGTH = 20;
const DECIMAL_REG_EX = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;
class Long extends BSONValue {
    get _bsontype() {
        return 'Long';
    }
    get __isLong__() {
        return true;
    }
    constructor(lowOrValue = 0, highOrUnsigned, unsigned) {
        super();
        const unsignedBool = typeof highOrUnsigned === 'boolean' ? highOrUnsigned : Boolean(unsigned);
        const high = typeof highOrUnsigned === 'number' ? highOrUnsigned : 0;
        const res = typeof lowOrValue === 'string'
            ? Long.fromString(lowOrValue, unsignedBool)
            : typeof lowOrValue === 'bigint'
                ? Long.fromBigInt(lowOrValue, unsignedBool)
                : { low: lowOrValue | 0, high: high | 0, unsigned: unsignedBool };
        this.low = res.low;
        this.high = res.high;
        this.unsigned = res.unsigned;
    }
    static fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    static fromInt(value, unsigned) {
        let obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if ((cache = 0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        }
        else {
            value |= 0;
            if ((cache = -128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }
    static fromNumber(value, unsigned) {
        if (isNaN(value))
            return unsigned ? Long.UZERO : Long.ZERO;
        if (unsigned) {
            if (value < 0)
                return Long.UZERO;
            if (value >= TWO_PWR_64_DBL)
                return Long.MAX_UNSIGNED_VALUE;
        }
        else {
            if (value <= -9223372036854776e3)
                return Long.MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return Long.MAX_VALUE;
        }
        if (value < 0)
            return Long.fromNumber(-value, unsigned).neg();
        return Long.fromBits(value % TWO_PWR_32_DBL | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }
    static fromBigInt(value, unsigned) {
        const FROM_BIGINT_BIT_MASK = BigInt(0xffffffff);
        const FROM_BIGINT_BIT_SHIFT = BigInt(32);
        return new Long(Number(value & FROM_BIGINT_BIT_MASK), Number((value >> FROM_BIGINT_BIT_SHIFT) & FROM_BIGINT_BIT_MASK), unsigned);
    }
    static _fromString(str, unsigned, radix) {
        if (str.length === 0)
            throw new BSONError('empty string');
        if (radix < 2 || 36 < radix)
            throw new BSONError('radix');
        let p;
        if ((p = str.indexOf('-')) > 0)
            throw new BSONError('interior hyphen');
        else if (p === 0) {
            return Long._fromString(str.substring(1), unsigned, radix).neg();
        }
        const radixToPower = Long.fromNumber(Math.pow(radix, 8));
        let result = Long.ZERO;
        for (let i = 0; i < str.length; i += 8) {
            const size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                const power = Long.fromNumber(Math.pow(radix, size));
                result = result.mul(power).add(Long.fromNumber(value));
            }
            else {
                result = result.mul(radixToPower);
                result = result.add(Long.fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    static fromStringStrict(str, unsignedOrRadix, radix) {
        let unsigned = false;
        if (typeof unsignedOrRadix === 'number') {
            (radix = unsignedOrRadix), (unsignedOrRadix = false);
        }
        else {
            unsigned = !!unsignedOrRadix;
        }
        radix ??= 10;
        if (str.trim() !== str) {
            throw new BSONError(`Input: '${str}' contains leading and/or trailing whitespace`);
        }
        if (!validateStringCharacters(str, radix)) {
            throw new BSONError(`Input: '${str}' contains invalid characters for radix: ${radix}`);
        }
        const cleanedStr = removeLeadingZerosAndExplicitPlus(str);
        const result = Long._fromString(cleanedStr, unsigned, radix);
        if (result.toString(radix).toLowerCase() !== cleanedStr.toLowerCase()) {
            throw new BSONError(`Input: ${str} is not representable as ${result.unsigned ? 'an unsigned' : 'a signed'} 64-bit Long ${radix != null ? `with radix: ${radix}` : ''}`);
        }
        return result;
    }
    static fromString(str, unsignedOrRadix, radix) {
        let unsigned = false;
        if (typeof unsignedOrRadix === 'number') {
            (radix = unsignedOrRadix), (unsignedOrRadix = false);
        }
        else {
            unsigned = !!unsignedOrRadix;
        }
        radix ??= 10;
        if (str === 'NaN' && radix < 24) {
            return Long.ZERO;
        }
        else if ((str === 'Infinity' || str === '+Infinity' || str === '-Infinity') && radix < 35) {
            return Long.ZERO;
        }
        return Long._fromString(str, unsigned, radix);
    }
    static fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    }
    static fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24), bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24), unsigned);
    }
    static fromBytesBE(bytes, unsigned) {
        return new Long((bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7], (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3], unsigned);
    }
    static isLong(value) {
        return (value != null &&
            typeof value === 'object' &&
            '__isLong__' in value &&
            value.__isLong__ === true);
    }
    static fromValue(val, unsigned) {
        if (typeof val === 'number')
            return Long.fromNumber(val, unsigned);
        if (typeof val === 'string')
            return Long.fromString(val, unsigned);
        return Long.fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }
    add(addend) {
        if (!Long.isLong(addend))
            addend = Long.fromValue(addend);
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = addend.high >>> 16;
        const b32 = addend.high & 0xffff;
        const b16 = addend.low >>> 16;
        const b00 = addend.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 + b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    and(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    }
    compare(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.eq(other))
            return 0;
        const thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 ||
            (other.high === this.high && other.low >>> 0 > this.low >>> 0)
            ? -1
            : 1;
    }
    comp(other) {
        return this.compare(other);
    }
    divide(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        if (divisor.isZero())
            throw new BSONError('division by zero');
        if (wasm) {
            if (!this.unsigned &&
                this.high === -2147483648 &&
                divisor.low === -1 &&
                divisor.high === -1) {
                return this;
            }
            const low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (this.isZero())
            return this.unsigned ? Long.UZERO : Long.ZERO;
        let approx, rem, res;
        if (!this.unsigned) {
            if (this.eq(Long.MIN_VALUE)) {
                if (divisor.eq(Long.ONE) || divisor.eq(Long.NEG_ONE))
                    return Long.MIN_VALUE;
                else if (divisor.eq(Long.MIN_VALUE))
                    return Long.ONE;
                else {
                    const halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(Long.ZERO)) {
                        return divisor.isNegative() ? Long.ONE : Long.NEG_ONE;
                    }
                    else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            }
            else if (divisor.eq(Long.MIN_VALUE))
                return this.unsigned ? Long.UZERO : Long.ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            }
            else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = Long.ZERO;
        }
        else {
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return Long.UZERO;
            if (divisor.gt(this.shru(1)))
                return Long.UONE;
            res = Long.UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            const log2 = Math.ceil(Math.log(approx) / Math.LN2);
            const delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            let approxRes = Long.fromNumber(approx);
            let approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = Long.fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero())
                approxRes = Long.ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    }
    div(divisor) {
        return this.divide(divisor);
    }
    equals(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    }
    eq(other) {
        return this.equals(other);
    }
    getHighBits() {
        return this.high;
    }
    getHighBitsUnsigned() {
        return this.high >>> 0;
    }
    getLowBits() {
        return this.low;
    }
    getLowBitsUnsigned() {
        return this.low >>> 0;
    }
    getNumBitsAbs() {
        if (this.isNegative()) {
            return this.eq(Long.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        const val = this.high !== 0 ? this.high : this.low;
        let bit;
        for (bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) !== 0)
                break;
        return this.high !== 0 ? bit + 33 : bit + 1;
    }
    greaterThan(other) {
        return this.comp(other) > 0;
    }
    gt(other) {
        return this.greaterThan(other);
    }
    greaterThanOrEqual(other) {
        return this.comp(other) >= 0;
    }
    gte(other) {
        return this.greaterThanOrEqual(other);
    }
    ge(other) {
        return this.greaterThanOrEqual(other);
    }
    isEven() {
        return (this.low & 1) === 0;
    }
    isNegative() {
        return !this.unsigned && this.high < 0;
    }
    isOdd() {
        return (this.low & 1) === 1;
    }
    isPositive() {
        return this.unsigned || this.high >= 0;
    }
    isZero() {
        return this.high === 0 && this.low === 0;
    }
    lessThan(other) {
        return this.comp(other) < 0;
    }
    lt(other) {
        return this.lessThan(other);
    }
    lessThanOrEqual(other) {
        return this.comp(other) <= 0;
    }
    lte(other) {
        return this.lessThanOrEqual(other);
    }
    modulo(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        if (wasm) {
            const low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    }
    mod(divisor) {
        return this.modulo(divisor);
    }
    rem(divisor) {
        return this.modulo(divisor);
    }
    multiply(multiplier) {
        if (this.isZero())
            return Long.ZERO;
        if (!Long.isLong(multiplier))
            multiplier = Long.fromValue(multiplier);
        if (wasm) {
            const low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (multiplier.isZero())
            return Long.ZERO;
        if (this.eq(Long.MIN_VALUE))
            return multiplier.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (multiplier.eq(Long.MIN_VALUE))
            return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        }
        else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
        if (this.lt(Long.TWO_PWR_24) && multiplier.lt(Long.TWO_PWR_24))
            return Long.fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = multiplier.high >>> 16;
        const b32 = multiplier.high & 0xffff;
        const b16 = multiplier.low >>> 16;
        const b00 = multiplier.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    mul(multiplier) {
        return this.multiply(multiplier);
    }
    negate() {
        if (!this.unsigned && this.eq(Long.MIN_VALUE))
            return Long.MIN_VALUE;
        return this.not().add(Long.ONE);
    }
    neg() {
        return this.negate();
    }
    not() {
        return Long.fromBits(~this.low, ~this.high, this.unsigned);
    }
    notEquals(other) {
        return !this.equals(other);
    }
    neq(other) {
        return this.notEquals(other);
    }
    ne(other) {
        return this.notEquals(other);
    }
    or(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    }
    shiftLeft(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return Long.fromBits(0, this.low << (numBits - 32), this.unsigned);
    }
    shl(numBits) {
        return this.shiftLeft(numBits);
    }
    shiftRight(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return Long.fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    }
    shr(numBits) {
        return this.shiftRight(numBits);
    }
    shiftRightUnsigned(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
            return this;
        else {
            const high = this.high;
            if (numBits < 32) {
                const low = this.low;
                return Long.fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            }
            else if (numBits === 32)
                return Long.fromBits(high, 0, this.unsigned);
            else
                return Long.fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    }
    shr_u(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    shru(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    subtract(subtrahend) {
        if (!Long.isLong(subtrahend))
            subtrahend = Long.fromValue(subtrahend);
        return this.add(subtrahend.neg());
    }
    sub(subtrahend) {
        return this.subtract(subtrahend);
    }
    toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    }
    toNumber() {
        if (this.unsigned)
            return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    }
    toBigInt() {
        return BigInt(this.toString());
    }
    toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    }
    toBytesLE() {
        const hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            (lo >>> 8) & 0xff,
            (lo >>> 16) & 0xff,
            lo >>> 24,
            hi & 0xff,
            (hi >>> 8) & 0xff,
            (hi >>> 16) & 0xff,
            hi >>> 24
        ];
    }
    toBytesBE() {
        const hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            (hi >>> 16) & 0xff,
            (hi >>> 8) & 0xff,
            hi & 0xff,
            lo >>> 24,
            (lo >>> 16) & 0xff,
            (lo >>> 8) & 0xff,
            lo & 0xff
        ];
    }
    toSigned() {
        if (!this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, false);
    }
    toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw new BSONError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) {
            if (this.eq(Long.MIN_VALUE)) {
                const radixLong = Long.fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            }
            else
                return '-' + this.neg().toString(radix);
        }
        const radixToPower = Long.fromNumber(Math.pow(radix, 6), this.unsigned);
        let rem = this;
        let result = '';
        while (true) {
            const remDiv = rem.div(radixToPower);
            const intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
            let digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) {
                return digits + result;
            }
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    }
    toUnsigned() {
        if (this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, true);
    }
    xor(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    }
    eqz() {
        return this.isZero();
    }
    le(other) {
        return this.lessThanOrEqual(other);
    }
    toExtendedJSON(options) {
        if (options && options.relaxed)
            return this.toNumber();
        return { $numberLong: this.toString() };
    }
    static fromExtendedJSON(doc, options) {
        const { useBigInt64 = false, relaxed = true } = { ...options };
        if (doc.$numberLong.length > MAX_INT64_STRING_LENGTH) {
            throw new BSONError('$numberLong string is too long');
        }
        if (!DECIMAL_REG_EX.test(doc.$numberLong)) {
            throw new BSONError(`$numberLong string "${doc.$numberLong}" is in an invalid format`);
        }
        if (useBigInt64) {
            const bigIntResult = BigInt(doc.$numberLong);
            return BigInt.asIntN(64, bigIntResult);
        }
        const longResult = Long.fromString(doc.$numberLong);
        if (relaxed) {
            return longResult.toNumber();
        }
        return longResult;
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const longVal = inspect(this.toString(), options);
        const unsignedVal = this.unsigned ? `, ${inspect(this.unsigned, options)}` : '';
        return `new Long(${longVal}${unsignedVal})`;
    }
}
Long.TWO_PWR_24 = Long.fromInt(TWO_PWR_24_DBL);
Long.MAX_UNSIGNED_VALUE = Long.fromBits(0xffffffff | 0, 0xffffffff | 0, true);
Long.ZERO = Long.fromInt(0);
Long.UZERO = Long.fromInt(0, true);
Long.ONE = Long.fromInt(1);
Long.UONE = Long.fromInt(1, true);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_VALUE = Long.fromBits(0xffffffff | 0, 0x7fffffff | 0, false);
Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0, false);

const PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
const PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
const PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
const EXPONENT_MAX = 6111;
const EXPONENT_MIN = -6176;
const EXPONENT_BIAS = 6176;
const MAX_DIGITS = 34;
const NAN_BUFFER = ByteUtils.fromNumberArray([
    0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const INF_NEGATIVE_BUFFER = ByteUtils.fromNumberArray([
    0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const INF_POSITIVE_BUFFER = ByteUtils.fromNumberArray([
    0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
].reverse());
const EXPONENT_REGEX = /^([-+])?(\d+)?$/;
const COMBINATION_MASK = 0x1f;
const EXPONENT_MASK = 0x3fff;
const COMBINATION_INFINITY = 30;
const COMBINATION_NAN = 31;
function isDigit(value) {
    return !isNaN(parseInt(value, 10));
}
function divideu128(value) {
    const DIVISOR = Long.fromNumber(1000 * 1000 * 1000);
    let _rem = Long.fromNumber(0);
    if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
        return { quotient: value, rem: _rem };
    }
    for (let i = 0; i <= 3; i++) {
        _rem = _rem.shiftLeft(32);
        _rem = _rem.add(new Long(value.parts[i], 0));
        value.parts[i] = _rem.div(DIVISOR).low;
        _rem = _rem.modulo(DIVISOR);
    }
    return { quotient: value, rem: _rem };
}
function multiply64x2(left, right) {
    if (!left && !right) {
        return { high: Long.fromNumber(0), low: Long.fromNumber(0) };
    }
    const leftHigh = left.shiftRightUnsigned(32);
    const leftLow = new Long(left.getLowBits(), 0);
    const rightHigh = right.shiftRightUnsigned(32);
    const rightLow = new Long(right.getLowBits(), 0);
    let productHigh = leftHigh.multiply(rightHigh);
    let productMid = leftHigh.multiply(rightLow);
    const productMid2 = leftLow.multiply(rightHigh);
    let productLow = leftLow.multiply(rightLow);
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productMid = new Long(productMid.getLowBits(), 0)
        .add(productMid2)
        .add(productLow.shiftRightUnsigned(32));
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productLow = productMid.shiftLeft(32).add(new Long(productLow.getLowBits(), 0));
    return { high: productHigh, low: productLow };
}
function lessThan(left, right) {
    const uhleft = left.high >>> 0;
    const uhright = right.high >>> 0;
    if (uhleft < uhright) {
        return true;
    }
    else if (uhleft === uhright) {
        const ulleft = left.low >>> 0;
        const ulright = right.low >>> 0;
        if (ulleft < ulright)
            return true;
    }
    return false;
}
function invalidErr(string, message) {
    throw new BSONError(`"${string}" is not a valid Decimal128 string - ${message}`);
}
class Decimal128 extends BSONValue {
    get _bsontype() {
        return 'Decimal128';
    }
    constructor(bytes) {
        super();
        if (typeof bytes === 'string') {
            this.bytes = Decimal128.fromString(bytes).bytes;
        }
        else if (bytes instanceof Uint8Array || isUint8Array(bytes)) {
            if (bytes.byteLength !== 16) {
                throw new BSONError('Decimal128 must take a Buffer of 16 bytes');
            }
            this.bytes = bytes;
        }
        else {
            throw new BSONError('Decimal128 must take a Buffer or string');
        }
    }
    static fromString(representation) {
        return Decimal128._fromString(representation, { allowRounding: false });
    }
    static fromStringWithRounding(representation) {
        return Decimal128._fromString(representation, { allowRounding: true });
    }
    static _fromString(representation, options) {
        let isNegative = false;
        let sawSign = false;
        let sawRadix = false;
        let foundNonZero = false;
        let significantDigits = 0;
        let nDigitsRead = 0;
        let nDigits = 0;
        let radixPosition = 0;
        let firstNonZero = 0;
        const digits = [0];
        let nDigitsStored = 0;
        let digitsInsert = 0;
        let lastDigit = 0;
        let exponent = 0;
        let significandHigh = new Long(0, 0);
        let significandLow = new Long(0, 0);
        let biasedExponent = 0;
        let index = 0;
        if (representation.length >= 7000) {
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        }
        const stringMatch = representation.match(PARSE_STRING_REGEXP);
        const infMatch = representation.match(PARSE_INF_REGEXP);
        const nanMatch = representation.match(PARSE_NAN_REGEXP);
        if ((!stringMatch && !infMatch && !nanMatch) || representation.length === 0) {
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        }
        if (stringMatch) {
            const unsignedNumber = stringMatch[2];
            const e = stringMatch[4];
            const expSign = stringMatch[5];
            const expNumber = stringMatch[6];
            if (e && expNumber === undefined)
                invalidErr(representation, 'missing exponent power');
            if (e && unsignedNumber === undefined)
                invalidErr(representation, 'missing exponent base');
            if (e === undefined && (expSign || expNumber)) {
                invalidErr(representation, 'missing e before exponent');
            }
        }
        if (representation[index] === '+' || representation[index] === '-') {
            sawSign = true;
            isNegative = representation[index++] === '-';
        }
        if (!isDigit(representation[index]) && representation[index] !== '.') {
            if (representation[index] === 'i' || representation[index] === 'I') {
                return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
            }
            else if (representation[index] === 'N') {
                return new Decimal128(NAN_BUFFER);
            }
        }
        while (isDigit(representation[index]) || representation[index] === '.') {
            if (representation[index] === '.') {
                if (sawRadix)
                    invalidErr(representation, 'contains multiple periods');
                sawRadix = true;
                index = index + 1;
                continue;
            }
            if (nDigitsStored < MAX_DIGITS) {
                if (representation[index] !== '0' || foundNonZero) {
                    if (!foundNonZero) {
                        firstNonZero = nDigitsRead;
                    }
                    foundNonZero = true;
                    digits[digitsInsert++] = parseInt(representation[index], 10);
                    nDigitsStored = nDigitsStored + 1;
                }
            }
            if (foundNonZero)
                nDigits = nDigits + 1;
            if (sawRadix)
                radixPosition = radixPosition + 1;
            nDigitsRead = nDigitsRead + 1;
            index = index + 1;
        }
        if (sawRadix && !nDigitsRead)
            throw new BSONError('' + representation + ' not a valid Decimal128 string');
        if (representation[index] === 'e' || representation[index] === 'E') {
            const match = representation.substr(++index).match(EXPONENT_REGEX);
            if (!match || !match[2])
                return new Decimal128(NAN_BUFFER);
            exponent = parseInt(match[0], 10);
            index = index + match[0].length;
        }
        if (representation[index])
            return new Decimal128(NAN_BUFFER);
        if (!nDigitsStored) {
            digits[0] = 0;
            nDigits = 1;
            nDigitsStored = 1;
            significantDigits = 0;
        }
        else {
            lastDigit = nDigitsStored - 1;
            significantDigits = nDigits;
            if (significantDigits !== 1) {
                while (representation[firstNonZero + significantDigits - 1 + Number(sawSign) + Number(sawRadix)] === '0') {
                    significantDigits = significantDigits - 1;
                }
            }
        }
        if (exponent <= radixPosition && radixPosition > exponent + (1 << 14)) {
            exponent = EXPONENT_MIN;
        }
        else {
            exponent = exponent - radixPosition;
        }
        while (exponent > EXPONENT_MAX) {
            lastDigit = lastDigit + 1;
            if (lastDigit >= MAX_DIGITS) {
                if (significantDigits === 0) {
                    exponent = EXPONENT_MAX;
                    break;
                }
                invalidErr(representation, 'overflow');
            }
            exponent = exponent - 1;
        }
        if (options.allowRounding) {
            while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
                if (lastDigit === 0 && significantDigits < nDigitsStored) {
                    exponent = EXPONENT_MIN;
                    significantDigits = 0;
                    break;
                }
                if (nDigitsStored < nDigits) {
                    nDigits = nDigits - 1;
                }
                else {
                    lastDigit = lastDigit - 1;
                }
                if (exponent < EXPONENT_MAX) {
                    exponent = exponent + 1;
                }
                else {
                    const digitsString = digits.join('');
                    if (digitsString.match(/^0+$/)) {
                        exponent = EXPONENT_MAX;
                        break;
                    }
                    invalidErr(representation, 'overflow');
                }
            }
            if (lastDigit + 1 < significantDigits) {
                let endOfString = nDigitsRead;
                if (sawRadix) {
                    firstNonZero = firstNonZero + 1;
                    endOfString = endOfString + 1;
                }
                if (sawSign) {
                    firstNonZero = firstNonZero + 1;
                    endOfString = endOfString + 1;
                }
                const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
                let roundBit = 0;
                if (roundDigit >= 5) {
                    roundBit = 1;
                    if (roundDigit === 5) {
                        roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
                        for (let i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
                            if (parseInt(representation[i], 10)) {
                                roundBit = 1;
                                break;
                            }
                        }
                    }
                }
                if (roundBit) {
                    let dIdx = lastDigit;
                    for (; dIdx >= 0; dIdx--) {
                        if (++digits[dIdx] > 9) {
                            digits[dIdx] = 0;
                            if (dIdx === 0) {
                                if (exponent < EXPONENT_MAX) {
                                    exponent = exponent + 1;
                                    digits[dIdx] = 1;
                                }
                                else {
                                    return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
                                }
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        else {
            while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
                if (lastDigit === 0) {
                    if (significantDigits === 0) {
                        exponent = EXPONENT_MIN;
                        break;
                    }
                    invalidErr(representation, 'exponent underflow');
                }
                if (nDigitsStored < nDigits) {
                    if (representation[nDigits - 1 + Number(sawSign) + Number(sawRadix)] !== '0' &&
                        significantDigits !== 0) {
                        invalidErr(representation, 'inexact rounding');
                    }
                    nDigits = nDigits - 1;
                }
                else {
                    if (digits[lastDigit] !== 0) {
                        invalidErr(representation, 'inexact rounding');
                    }
                    lastDigit = lastDigit - 1;
                }
                if (exponent < EXPONENT_MAX) {
                    exponent = exponent + 1;
                }
                else {
                    invalidErr(representation, 'overflow');
                }
            }
            if (lastDigit + 1 < significantDigits) {
                if (sawRadix) {
                    firstNonZero = firstNonZero + 1;
                }
                if (sawSign) {
                    firstNonZero = firstNonZero + 1;
                }
                const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
                if (roundDigit !== 0) {
                    invalidErr(representation, 'inexact rounding');
                }
            }
        }
        significandHigh = Long.fromNumber(0);
        significandLow = Long.fromNumber(0);
        if (significantDigits === 0) {
            significandHigh = Long.fromNumber(0);
            significandLow = Long.fromNumber(0);
        }
        else if (lastDigit < 17) {
            let dIdx = 0;
            significandLow = Long.fromNumber(digits[dIdx++]);
            significandHigh = new Long(0, 0);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(Long.fromNumber(10));
                significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
            }
        }
        else {
            let dIdx = 0;
            significandHigh = Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit - 17; dIdx++) {
                significandHigh = significandHigh.multiply(Long.fromNumber(10));
                significandHigh = significandHigh.add(Long.fromNumber(digits[dIdx]));
            }
            significandLow = Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(Long.fromNumber(10));
                significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
            }
        }
        const significand = multiply64x2(significandHigh, Long.fromString('100000000000000000'));
        significand.low = significand.low.add(significandLow);
        if (lessThan(significand.low, significandLow)) {
            significand.high = significand.high.add(Long.fromNumber(1));
        }
        biasedExponent = exponent + EXPONENT_BIAS;
        const dec = { low: Long.fromNumber(0), high: Long.fromNumber(0) };
        if (significand.high.shiftRightUnsigned(49).and(Long.fromNumber(1)).equals(Long.fromNumber(1))) {
            dec.high = dec.high.or(Long.fromNumber(0x3).shiftLeft(61));
            dec.high = dec.high.or(Long.fromNumber(biasedExponent).and(Long.fromNumber(0x3fff).shiftLeft(47)));
            dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x7fffffffffff)));
        }
        else {
            dec.high = dec.high.or(Long.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
            dec.high = dec.high.or(significand.high.and(Long.fromNumber(0x1ffffffffffff)));
        }
        dec.low = significand.low;
        if (isNegative) {
            dec.high = dec.high.or(Long.fromString('9223372036854775808'));
        }
        const buffer = ByteUtils.allocateUnsafe(16);
        index = 0;
        buffer[index++] = dec.low.low & 0xff;
        buffer[index++] = (dec.low.low >> 8) & 0xff;
        buffer[index++] = (dec.low.low >> 16) & 0xff;
        buffer[index++] = (dec.low.low >> 24) & 0xff;
        buffer[index++] = dec.low.high & 0xff;
        buffer[index++] = (dec.low.high >> 8) & 0xff;
        buffer[index++] = (dec.low.high >> 16) & 0xff;
        buffer[index++] = (dec.low.high >> 24) & 0xff;
        buffer[index++] = dec.high.low & 0xff;
        buffer[index++] = (dec.high.low >> 8) & 0xff;
        buffer[index++] = (dec.high.low >> 16) & 0xff;
        buffer[index++] = (dec.high.low >> 24) & 0xff;
        buffer[index++] = dec.high.high & 0xff;
        buffer[index++] = (dec.high.high >> 8) & 0xff;
        buffer[index++] = (dec.high.high >> 16) & 0xff;
        buffer[index++] = (dec.high.high >> 24) & 0xff;
        return new Decimal128(buffer);
    }
    toString() {
        let biased_exponent;
        let significand_digits = 0;
        const significand = new Array(36);
        for (let i = 0; i < significand.length; i++)
            significand[i] = 0;
        let index = 0;
        let is_zero = false;
        let significand_msb;
        let significand128 = { parts: [0, 0, 0, 0] };
        let j, k;
        const string = [];
        index = 0;
        const buffer = this.bytes;
        const low = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const midl = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const midh = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        const high = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        index = 0;
        const dec = {
            low: new Long(low, midl),
            high: new Long(midh, high)
        };
        if (dec.high.lessThan(Long.ZERO)) {
            string.push('-');
        }
        const combination = (high >> 26) & COMBINATION_MASK;
        if (combination >> 3 === 3) {
            if (combination === COMBINATION_INFINITY) {
                return string.join('') + 'Infinity';
            }
            else if (combination === COMBINATION_NAN) {
                return 'NaN';
            }
            else {
                biased_exponent = (high >> 15) & EXPONENT_MASK;
                significand_msb = 0x08 + ((high >> 14) & 0x01);
            }
        }
        else {
            significand_msb = (high >> 14) & 0x07;
            biased_exponent = (high >> 17) & EXPONENT_MASK;
        }
        const exponent = biased_exponent - EXPONENT_BIAS;
        significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
        significand128.parts[1] = midh;
        significand128.parts[2] = midl;
        significand128.parts[3] = low;
        if (significand128.parts[0] === 0 &&
            significand128.parts[1] === 0 &&
            significand128.parts[2] === 0 &&
            significand128.parts[3] === 0) {
            is_zero = true;
        }
        else {
            for (k = 3; k >= 0; k--) {
                let least_digits = 0;
                const result = divideu128(significand128);
                significand128 = result.quotient;
                least_digits = result.rem.low;
                if (!least_digits)
                    continue;
                for (j = 8; j >= 0; j--) {
                    significand[k * 9 + j] = least_digits % 10;
                    least_digits = Math.floor(least_digits / 10);
                }
            }
        }
        if (is_zero) {
            significand_digits = 1;
            significand[index] = 0;
        }
        else {
            significand_digits = 36;
            while (!significand[index]) {
                significand_digits = significand_digits - 1;
                index = index + 1;
            }
        }
        const scientific_exponent = significand_digits - 1 + exponent;
        if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
            if (significand_digits > 34) {
                string.push(`${0}`);
                if (exponent > 0)
                    string.push(`E+${exponent}`);
                else if (exponent < 0)
                    string.push(`E${exponent}`);
                return string.join('');
            }
            string.push(`${significand[index++]}`);
            significand_digits = significand_digits - 1;
            if (significand_digits) {
                string.push('.');
            }
            for (let i = 0; i < significand_digits; i++) {
                string.push(`${significand[index++]}`);
            }
            string.push('E');
            if (scientific_exponent > 0) {
                string.push(`+${scientific_exponent}`);
            }
            else {
                string.push(`${scientific_exponent}`);
            }
        }
        else {
            if (exponent >= 0) {
                for (let i = 0; i < significand_digits; i++) {
                    string.push(`${significand[index++]}`);
                }
            }
            else {
                let radix_position = significand_digits + exponent;
                if (radix_position > 0) {
                    for (let i = 0; i < radix_position; i++) {
                        string.push(`${significand[index++]}`);
                    }
                }
                else {
                    string.push('0');
                }
                string.push('.');
                while (radix_position++ < 0) {
                    string.push('0');
                }
                for (let i = 0; i < significand_digits - Math.max(radix_position - 1, 0); i++) {
                    string.push(`${significand[index++]}`);
                }
            }
        }
        return string.join('');
    }
    toJSON() {
        return { $numberDecimal: this.toString() };
    }
    toExtendedJSON() {
        return { $numberDecimal: this.toString() };
    }
    static fromExtendedJSON(doc) {
        return Decimal128.fromString(doc.$numberDecimal);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const d128string = inspect(this.toString(), options);
        return `new Decimal128(${d128string})`;
    }
}

class Double extends BSONValue {
    get _bsontype() {
        return 'Double';
    }
    constructor(value) {
        super();
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value;
    }
    static fromString(value) {
        const coercedValue = Number(value);
        if (value === 'NaN')
            return new Double(NaN);
        if (value === 'Infinity')
            return new Double(Infinity);
        if (value === '-Infinity')
            return new Double(-Infinity);
        if (!Number.isFinite(coercedValue)) {
            throw new BSONError(`Input: ${value} is not representable as a Double`);
        }
        if (value.trim() !== value) {
            throw new BSONError(`Input: '${value}' contains whitespace`);
        }
        if (value === '') {
            throw new BSONError(`Input is an empty string`);
        }
        if (/[^-0-9.+eE]/.test(value)) {
            throw new BSONError(`Input: '${value}' is not in decimal or exponential notation`);
        }
        return new Double(coercedValue);
    }
    valueOf() {
        return this.value;
    }
    toJSON() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
    toExtendedJSON(options) {
        if (options && (options.legacy || (options.relaxed && isFinite(this.value)))) {
            return this.value;
        }
        if (Object.is(Math.sign(this.value), -0)) {
            return { $numberDouble: '-0.0' };
        }
        return {
            $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
        };
    }
    static fromExtendedJSON(doc, options) {
        const doubleValue = parseFloat(doc.$numberDouble);
        return options && options.relaxed ? doubleValue : new Double(doubleValue);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new Double(${inspect(this.value, options)})`;
    }
}

class Int32 extends BSONValue {
    get _bsontype() {
        return 'Int32';
    }
    constructor(value) {
        super();
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value | 0;
    }
    static fromString(value) {
        const cleanedValue = removeLeadingZerosAndExplicitPlus(value);
        const coercedValue = Number(value);
        if (BSON_INT32_MAX < coercedValue) {
            throw new BSONError(`Input: '${value}' is larger than the maximum value for Int32`);
        }
        else if (BSON_INT32_MIN > coercedValue) {
            throw new BSONError(`Input: '${value}' is smaller than the minimum value for Int32`);
        }
        else if (!Number.isSafeInteger(coercedValue)) {
            throw new BSONError(`Input: '${value}' is not a safe integer`);
        }
        else if (coercedValue.toString() !== cleanedValue) {
            throw new BSONError(`Input: '${value}' is not a valid Int32 string`);
        }
        return new Int32(coercedValue);
    }
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
    toJSON() {
        return this.value;
    }
    toExtendedJSON(options) {
        if (options && (options.relaxed || options.legacy))
            return this.value;
        return { $numberInt: this.value.toString() };
    }
    static fromExtendedJSON(doc, options) {
        return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new Int32(${inspect(this.value, options)})`;
    }
}

class MaxKey extends BSONValue {
    get _bsontype() {
        return 'MaxKey';
    }
    toExtendedJSON() {
        return { $maxKey: 1 };
    }
    static fromExtendedJSON() {
        return new MaxKey();
    }
    inspect() {
        return 'new MaxKey()';
    }
}

class MinKey extends BSONValue {
    get _bsontype() {
        return 'MinKey';
    }
    toExtendedJSON() {
        return { $minKey: 1 };
    }
    static fromExtendedJSON() {
        return new MinKey();
    }
    inspect() {
        return 'new MinKey()';
    }
}

let PROCESS_UNIQUE = null;
const __idCache = new WeakMap();
class ObjectId extends BSONValue {
    get _bsontype() {
        return 'ObjectId';
    }
    constructor(inputId) {
        super();
        let workingId;
        if (typeof inputId === 'object' && inputId && 'id' in inputId) {
            if (typeof inputId.id !== 'string' && !ArrayBuffer.isView(inputId.id)) {
                throw new BSONError('Argument passed in must have an id that is of type string or Buffer');
            }
            if ('toHexString' in inputId && typeof inputId.toHexString === 'function') {
                workingId = ByteUtils.fromHex(inputId.toHexString());
            }
            else {
                workingId = inputId.id;
            }
        }
        else {
            workingId = inputId;
        }
        if (workingId == null || typeof workingId === 'number') {
            this.buffer = ObjectId.generate(typeof workingId === 'number' ? workingId : undefined);
        }
        else if (ArrayBuffer.isView(workingId) && workingId.byteLength === 12) {
            this.buffer = ByteUtils.toLocalBufferType(workingId);
        }
        else if (typeof workingId === 'string') {
            if (ObjectId.validateHexString(workingId)) {
                this.buffer = ByteUtils.fromHex(workingId);
                if (ObjectId.cacheHexString) {
                    __idCache.set(this, workingId);
                }
            }
            else {
                throw new BSONError('input must be a 24 character hex string, 12 byte Uint8Array, or an integer');
            }
        }
        else {
            throw new BSONError('Argument passed in does not match the accepted types');
        }
    }
    get id() {
        return this.buffer;
    }
    set id(value) {
        this.buffer = value;
        if (ObjectId.cacheHexString) {
            __idCache.set(this, ByteUtils.toHex(value));
        }
    }
    static validateHexString(string) {
        if (string?.length !== 24)
            return false;
        for (let i = 0; i < 24; i++) {
            const char = string.charCodeAt(i);
            if ((char >= 48 && char <= 57) ||
                (char >= 97 && char <= 102) ||
                (char >= 65 && char <= 70)) {
                continue;
            }
            return false;
        }
        return true;
    }
    toHexString() {
        if (ObjectId.cacheHexString) {
            const __id = __idCache.get(this);
            if (__id)
                return __id;
        }
        const hexString = ByteUtils.toHex(this.id);
        if (ObjectId.cacheHexString) {
            __idCache.set(this, hexString);
        }
        return hexString;
    }
    static getInc() {
        return (ObjectId.index = (ObjectId.index + 1) % 0xffffff);
    }
    static generate(time) {
        if ('number' !== typeof time) {
            time = Math.floor(Date.now() / 1000);
        }
        const inc = ObjectId.getInc();
        const buffer = ByteUtils.allocateUnsafe(12);
        NumberUtils.setInt32BE(buffer, 0, time);
        if (PROCESS_UNIQUE === null) {
            PROCESS_UNIQUE = ByteUtils.randomBytes(5);
        }
        buffer[4] = PROCESS_UNIQUE[0];
        buffer[5] = PROCESS_UNIQUE[1];
        buffer[6] = PROCESS_UNIQUE[2];
        buffer[7] = PROCESS_UNIQUE[3];
        buffer[8] = PROCESS_UNIQUE[4];
        buffer[11] = inc & 0xff;
        buffer[10] = (inc >> 8) & 0xff;
        buffer[9] = (inc >> 16) & 0xff;
        return buffer;
    }
    toString(encoding) {
        if (encoding === 'base64')
            return ByteUtils.toBase64(this.id);
        if (encoding === 'hex')
            return this.toHexString();
        return this.toHexString();
    }
    toJSON() {
        return this.toHexString();
    }
    static is(variable) {
        return (variable != null &&
            typeof variable === 'object' &&
            '_bsontype' in variable &&
            variable._bsontype === 'ObjectId');
    }
    equals(otherId) {
        if (otherId === undefined || otherId === null) {
            return false;
        }
        if (ObjectId.is(otherId)) {
            return (this.buffer[11] === otherId.buffer[11] && ByteUtils.equals(this.buffer, otherId.buffer));
        }
        if (typeof otherId === 'string') {
            return otherId.toLowerCase() === this.toHexString();
        }
        if (typeof otherId === 'object' && typeof otherId.toHexString === 'function') {
            const otherIdString = otherId.toHexString();
            const thisIdString = this.toHexString();
            return typeof otherIdString === 'string' && otherIdString.toLowerCase() === thisIdString;
        }
        return false;
    }
    getTimestamp() {
        const timestamp = new Date();
        const time = NumberUtils.getUint32BE(this.buffer, 0);
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    }
    static createPk() {
        return new ObjectId();
    }
    serializeInto(uint8array, index) {
        uint8array[index] = this.buffer[0];
        uint8array[index + 1] = this.buffer[1];
        uint8array[index + 2] = this.buffer[2];
        uint8array[index + 3] = this.buffer[3];
        uint8array[index + 4] = this.buffer[4];
        uint8array[index + 5] = this.buffer[5];
        uint8array[index + 6] = this.buffer[6];
        uint8array[index + 7] = this.buffer[7];
        uint8array[index + 8] = this.buffer[8];
        uint8array[index + 9] = this.buffer[9];
        uint8array[index + 10] = this.buffer[10];
        uint8array[index + 11] = this.buffer[11];
        return 12;
    }
    static createFromTime(time) {
        const buffer = ByteUtils.allocate(12);
        for (let i = 11; i >= 4; i--)
            buffer[i] = 0;
        NumberUtils.setInt32BE(buffer, 0, time);
        return new ObjectId(buffer);
    }
    static createFromHexString(hexString) {
        if (hexString?.length !== 24) {
            throw new BSONError('hex string must be 24 characters');
        }
        return new ObjectId(ByteUtils.fromHex(hexString));
    }
    static createFromBase64(base64) {
        if (base64?.length !== 16) {
            throw new BSONError('base64 string must be 16 characters');
        }
        return new ObjectId(ByteUtils.fromBase64(base64));
    }
    static isValid(id) {
        if (id == null)
            return false;
        if (typeof id === 'string')
            return ObjectId.validateHexString(id);
        try {
            new ObjectId(id);
            return true;
        }
        catch {
            return false;
        }
    }
    toExtendedJSON() {
        if (this.toHexString)
            return { $oid: this.toHexString() };
        return { $oid: this.toString('hex') };
    }
    static fromExtendedJSON(doc) {
        return new ObjectId(doc.$oid);
    }
    isCached() {
        return ObjectId.cacheHexString && __idCache.has(this);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new ObjectId(${inspect(this.toHexString(), options)})`;
    }
}
ObjectId.index = Math.floor(Math.random() * 0xffffff);

function internalCalculateObjectSize(object, serializeFunctions, ignoreUndefined) {
    let totalLength = 4 + 1;
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
        }
    }
    else {
        if (typeof object?.toBSON === 'function') {
            object = object.toBSON();
        }
        for (const key of Object.keys(object)) {
            totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
        }
    }
    return totalLength;
}
function calculateElement(name, value, serializeFunctions = false, isArray = false, ignoreUndefined = false) {
    if (typeof value?.toBSON === 'function') {
        value = value.toBSON();
    }
    switch (typeof value) {
        case 'string':
            return 1 + ByteUtils.utf8ByteLength(name) + 1 + 4 + ByteUtils.utf8ByteLength(value) + 1;
        case 'number':
            if (Math.floor(value) === value &&
                value >= JS_INT_MIN &&
                value <= JS_INT_MAX) {
                if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
                    return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (4 + 1);
                }
                else {
                    return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
                }
            }
            else {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
        case 'undefined':
            if (isArray || !ignoreUndefined)
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
            return 0;
        case 'boolean':
            return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 1);
        case 'object':
            if (value != null &&
                typeof value._bsontype === 'string' &&
                value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                throw new BSONVersionError();
            }
            else if (value == null || value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + 1;
            }
            else if (value._bsontype === 'ObjectId') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (12 + 1);
            }
            else if (value instanceof Date || isDate(value)) {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
            else if (ArrayBuffer.isView(value) ||
                value instanceof ArrayBuffer ||
                isAnyArrayBuffer(value)) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (1 + 4 + 1) + value.byteLength);
            }
            else if (value._bsontype === 'Long' ||
                value._bsontype === 'Double' ||
                value._bsontype === 'Timestamp') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
            }
            else if (value._bsontype === 'Decimal128') {
                return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (16 + 1);
            }
            else if (value._bsontype === 'Code') {
                if (value.scope != null && Object.keys(value.scope).length > 0) {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        1 +
                        4 +
                        4 +
                        ByteUtils.utf8ByteLength(value.code.toString()) +
                        1 +
                        internalCalculateObjectSize(value.scope, serializeFunctions, ignoreUndefined));
                }
                else {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        1 +
                        4 +
                        ByteUtils.utf8ByteLength(value.code.toString()) +
                        1);
                }
            }
            else if (value._bsontype === 'Binary') {
                const binary = value;
                if (binary.sub_type === Binary.SUBTYPE_BYTE_ARRAY) {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                        (binary.position + 1 + 4 + 1 + 4));
                }
                else {
                    return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (binary.position + 1 + 4 + 1));
                }
            }
            else if (value._bsontype === 'Symbol') {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    ByteUtils.utf8ByteLength(value.value) +
                    4 +
                    1 +
                    1);
            }
            else if (value._bsontype === 'DBRef') {
                const ordered_values = Object.assign({
                    $ref: value.collection,
                    $id: value.oid
                }, value.fields);
                if (value.db != null) {
                    ordered_values['$db'] = value.db;
                }
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    internalCalculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined));
            }
            else if (value instanceof RegExp || isRegExp(value)) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    ByteUtils.utf8ByteLength(value.source) +
                    1 +
                    (value.global ? 1 : 0) +
                    (value.ignoreCase ? 1 : 0) +
                    (value.multiline ? 1 : 0) +
                    1);
            }
            else if (value._bsontype === 'BSONRegExp') {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    ByteUtils.utf8ByteLength(value.pattern) +
                    1 +
                    ByteUtils.utf8ByteLength(value.options) +
                    1);
            }
            else {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    internalCalculateObjectSize(value, serializeFunctions, ignoreUndefined) +
                    1);
            }
        case 'function':
            if (serializeFunctions) {
                return ((name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) +
                    1 +
                    4 +
                    ByteUtils.utf8ByteLength(value.toString()) +
                    1);
            }
            return 0;
        case 'bigint':
            return (name != null ? ByteUtils.utf8ByteLength(name) + 1 : 0) + (8 + 1);
        case 'symbol':
            return 0;
        default:
            throw new BSONError(`Unrecognized JS type: ${typeof value}`);
    }
}

function alphabetize(str) {
    return str.split('').sort().join('');
}
class BSONRegExp extends BSONValue {
    get _bsontype() {
        return 'BSONRegExp';
    }
    constructor(pattern, options) {
        super();
        this.pattern = pattern;
        this.options = alphabetize(options ?? '');
        if (this.pattern.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);
        }
        if (this.options.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);
        }
        for (let i = 0; i < this.options.length; i++) {
            if (!(this.options[i] === 'i' ||
                this.options[i] === 'm' ||
                this.options[i] === 'x' ||
                this.options[i] === 'l' ||
                this.options[i] === 's' ||
                this.options[i] === 'u')) {
                throw new BSONError(`The regular expression option [${this.options[i]}] is not supported`);
            }
        }
    }
    static parseOptions(options) {
        return options ? options.split('').sort().join('') : '';
    }
    toExtendedJSON(options) {
        options = options || {};
        if (options.legacy) {
            return { $regex: this.pattern, $options: this.options };
        }
        return { $regularExpression: { pattern: this.pattern, options: this.options } };
    }
    static fromExtendedJSON(doc) {
        if ('$regex' in doc) {
            if (typeof doc.$regex !== 'string') {
                if (doc.$regex._bsontype === 'BSONRegExp') {
                    return doc;
                }
            }
            else {
                return new BSONRegExp(doc.$regex, BSONRegExp.parseOptions(doc.$options));
            }
        }
        if ('$regularExpression' in doc) {
            return new BSONRegExp(doc.$regularExpression.pattern, BSONRegExp.parseOptions(doc.$regularExpression.options));
        }
        throw new BSONError(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify(doc)}`);
    }
    inspect(depth, options, inspect) {
        const stylize = getStylizeFunction(options) ?? (v => v);
        inspect ??= defaultInspect;
        const pattern = stylize(inspect(this.pattern), 'regexp');
        const flags = stylize(inspect(this.options), 'regexp');
        return `new BSONRegExp(${pattern}, ${flags})`;
    }
}

class BSONSymbol extends BSONValue {
    get _bsontype() {
        return 'BSONSymbol';
    }
    constructor(value) {
        super();
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return this.value;
    }
    toJSON() {
        return this.value;
    }
    toExtendedJSON() {
        return { $symbol: this.value };
    }
    static fromExtendedJSON(doc) {
        return new BSONSymbol(doc.$symbol);
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        return `new BSONSymbol(${inspect(this.value, options)})`;
    }
}

const LongWithoutOverridesClass = Long;
class Timestamp extends LongWithoutOverridesClass {
    get _bsontype() {
        return 'Timestamp';
    }
    get i() {
        return this.low >>> 0;
    }
    get t() {
        return this.high >>> 0;
    }
    constructor(low) {
        if (low == null) {
            super(0, 0, true);
        }
        else if (typeof low === 'bigint') {
            super(low, true);
        }
        else if (Long.isLong(low)) {
            super(low.low, low.high, true);
        }
        else if (typeof low === 'object' && 't' in low && 'i' in low) {
            if (typeof low.t !== 'number' && (typeof low.t !== 'object' || low.t._bsontype !== 'Int32')) {
                throw new BSONError('Timestamp constructed from { t, i } must provide t as a number');
            }
            if (typeof low.i !== 'number' && (typeof low.i !== 'object' || low.i._bsontype !== 'Int32')) {
                throw new BSONError('Timestamp constructed from { t, i } must provide i as a number');
            }
            const t = Number(low.t);
            const i = Number(low.i);
            if (t < 0 || Number.isNaN(t)) {
                throw new BSONError('Timestamp constructed from { t, i } must provide a positive t');
            }
            if (i < 0 || Number.isNaN(i)) {
                throw new BSONError('Timestamp constructed from { t, i } must provide a positive i');
            }
            if (t > 0xffff_ffff) {
                throw new BSONError('Timestamp constructed from { t, i } must provide t equal or less than uint32 max');
            }
            if (i > 0xffff_ffff) {
                throw new BSONError('Timestamp constructed from { t, i } must provide i equal or less than uint32 max');
            }
            super(i, t, true);
        }
        else {
            throw new BSONError('A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }');
        }
    }
    toJSON() {
        return {
            $timestamp: this.toString()
        };
    }
    static fromInt(value) {
        return new Timestamp(Long.fromInt(value, true));
    }
    static fromNumber(value) {
        return new Timestamp(Long.fromNumber(value, true));
    }
    static fromBits(lowBits, highBits) {
        return new Timestamp({ i: lowBits, t: highBits });
    }
    static fromString(str, optRadix) {
        return new Timestamp(Long.fromString(str, true, optRadix));
    }
    toExtendedJSON() {
        return { $timestamp: { t: this.t, i: this.i } };
    }
    static fromExtendedJSON(doc) {
        const i = Long.isLong(doc.$timestamp.i)
            ? doc.$timestamp.i.getLowBitsUnsigned()
            : doc.$timestamp.i;
        const t = Long.isLong(doc.$timestamp.t)
            ? doc.$timestamp.t.getLowBitsUnsigned()
            : doc.$timestamp.t;
        return new Timestamp({ t, i });
    }
    inspect(depth, options, inspect) {
        inspect ??= defaultInspect;
        const t = inspect(this.t, options);
        const i = inspect(this.i, options);
        return `new Timestamp({ t: ${t}, i: ${i} })`;
    }
}
Timestamp.MAX_VALUE = Long.MAX_UNSIGNED_VALUE;

const JS_INT_MAX_LONG = Long.fromNumber(JS_INT_MAX);
const JS_INT_MIN_LONG = Long.fromNumber(JS_INT_MIN);
function internalDeserialize(buffer, options, isArray) {
    options = options == null ? {} : options;
    const index = options && options.index ? options.index : 0;
    const size = NumberUtils.getInt32LE(buffer, index);
    if (size < 5) {
        throw new BSONError(`bson size must be >= 5, is ${size}`);
    }
    if (options.allowObjectSmallerThanBufferSize && buffer.length < size) {
        throw new BSONError(`buffer length ${buffer.length} must be >= bson size ${size}`);
    }
    if (!options.allowObjectSmallerThanBufferSize && buffer.length !== size) {
        throw new BSONError(`buffer length ${buffer.length} must === bson size ${size}`);
    }
    if (size + index > buffer.byteLength) {
        throw new BSONError(`(bson size ${size} + options.index ${index} must be <= buffer length ${buffer.byteLength})`);
    }
    if (buffer[index + size - 1] !== 0) {
        throw new BSONError("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
    }
    return deserializeObject(buffer, index, options, isArray);
}
const allowedDBRefKeys = /^\$ref$|^\$id$|^\$db$/;
function deserializeObject(buffer, index, options, isArray = false) {
    const fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw'];
    const raw = options['raw'] == null ? false : options['raw'];
    const bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false;
    const promoteBuffers = options.promoteBuffers ?? false;
    const promoteLongs = options.promoteLongs ?? true;
    const promoteValues = options.promoteValues ?? true;
    const useBigInt64 = options.useBigInt64 ?? false;
    if (useBigInt64 && !promoteValues) {
        throw new BSONError('Must either request bigint or Long for int64 deserialization');
    }
    if (useBigInt64 && !promoteLongs) {
        throw new BSONError('Must either request bigint or Long for int64 deserialization');
    }
    const validation = options.validation == null ? { utf8: true } : options.validation;
    let globalUTFValidation = true;
    let validationSetting;
    let utf8KeysSet;
    const utf8ValidatedKeys = validation.utf8;
    if (typeof utf8ValidatedKeys === 'boolean') {
        validationSetting = utf8ValidatedKeys;
    }
    else {
        globalUTFValidation = false;
        const utf8ValidationValues = Object.keys(utf8ValidatedKeys).map(function (key) {
            return utf8ValidatedKeys[key];
        });
        if (utf8ValidationValues.length === 0) {
            throw new BSONError('UTF-8 validation setting cannot be empty');
        }
        if (typeof utf8ValidationValues[0] !== 'boolean') {
            throw new BSONError('Invalid UTF-8 validation option, must specify boolean values');
        }
        validationSetting = utf8ValidationValues[0];
        if (!utf8ValidationValues.every(item => item === validationSetting)) {
            throw new BSONError('Invalid UTF-8 validation option - keys must be all true or all false');
        }
    }
    if (!globalUTFValidation) {
        utf8KeysSet = new Set();
        for (const key of Object.keys(utf8ValidatedKeys)) {
            utf8KeysSet.add(key);
        }
    }
    const startIndex = index;
    if (buffer.length < 5)
        throw new BSONError('corrupt bson message < 5 bytes long');
    const size = NumberUtils.getInt32LE(buffer, index);
    index += 4;
    if (size < 5 || size > buffer.length)
        throw new BSONError('corrupt bson message');
    const object = isArray ? [] : {};
    let arrayIndex = 0;
    let isPossibleDBRef = isArray ? false : null;
    while (true) {
        const elementType = buffer[index++];
        if (elementType === 0)
            break;
        let i = index;
        while (buffer[i] !== 0x00 && i < buffer.length) {
            i++;
        }
        if (i >= buffer.byteLength)
            throw new BSONError('Bad BSON Document: illegal CString');
        const name = isArray ? arrayIndex++ : ByteUtils.toUTF8(buffer, index, i, false);
        let shouldValidateKey = true;
        if (globalUTFValidation || utf8KeysSet?.has(name)) {
            shouldValidateKey = validationSetting;
        }
        else {
            shouldValidateKey = !validationSetting;
        }
        if (isPossibleDBRef !== false && name[0] === '$') {
            isPossibleDBRef = allowedDBRefKeys.test(name);
        }
        let value;
        index = i + 1;
        if (elementType === BSON_DATA_STRING) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            value = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_OID) {
            const oid = ByteUtils.allocateUnsafe(12);
            for (let i = 0; i < 12; i++)
                oid[i] = buffer[index + i];
            value = new ObjectId(oid);
            index = index + 12;
        }
        else if (elementType === BSON_DATA_INT && promoteValues === false) {
            value = new Int32(NumberUtils.getInt32LE(buffer, index));
            index += 4;
        }
        else if (elementType === BSON_DATA_INT) {
            value = NumberUtils.getInt32LE(buffer, index);
            index += 4;
        }
        else if (elementType === BSON_DATA_NUMBER) {
            value = NumberUtils.getFloat64LE(buffer, index);
            index += 8;
            if (promoteValues === false)
                value = new Double(value);
        }
        else if (elementType === BSON_DATA_DATE) {
            const lowBits = NumberUtils.getInt32LE(buffer, index);
            const highBits = NumberUtils.getInt32LE(buffer, index + 4);
            index += 8;
            value = new Date(new Long(lowBits, highBits).toNumber());
        }
        else if (elementType === BSON_DATA_BOOLEAN) {
            if (buffer[index] !== 0 && buffer[index] !== 1)
                throw new BSONError('illegal boolean type value');
            value = buffer[index++] === 1;
        }
        else if (elementType === BSON_DATA_OBJECT) {
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            if (objectSize <= 0 || objectSize > buffer.length - index)
                throw new BSONError('bad embedded document length in bson');
            if (raw) {
                value = buffer.subarray(index, index + objectSize);
            }
            else {
                let objectOptions = options;
                if (!globalUTFValidation) {
                    objectOptions = { ...options, validation: { utf8: shouldValidateKey } };
                }
                value = deserializeObject(buffer, _index, objectOptions, false);
            }
            index = index + objectSize;
        }
        else if (elementType === BSON_DATA_ARRAY) {
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            let arrayOptions = options;
            const stopIndex = index + objectSize;
            if (fieldsAsRaw && fieldsAsRaw[name]) {
                arrayOptions = { ...options, raw: true };
            }
            if (!globalUTFValidation) {
                arrayOptions = { ...arrayOptions, validation: { utf8: shouldValidateKey } };
            }
            value = deserializeObject(buffer, _index, arrayOptions, true);
            index = index + objectSize;
            if (buffer[index - 1] !== 0)
                throw new BSONError('invalid array terminator byte');
            if (index !== stopIndex)
                throw new BSONError('corrupted array bson');
        }
        else if (elementType === BSON_DATA_UNDEFINED) {
            value = undefined;
        }
        else if (elementType === BSON_DATA_NULL) {
            value = null;
        }
        else if (elementType === BSON_DATA_LONG) {
            if (useBigInt64) {
                value = NumberUtils.getBigInt64LE(buffer, index);
                index += 8;
            }
            else {
                const lowBits = NumberUtils.getInt32LE(buffer, index);
                const highBits = NumberUtils.getInt32LE(buffer, index + 4);
                index += 8;
                const long = new Long(lowBits, highBits);
                if (promoteLongs && promoteValues === true) {
                    value =
                        long.lessThanOrEqual(JS_INT_MAX_LONG) && long.greaterThanOrEqual(JS_INT_MIN_LONG)
                            ? long.toNumber()
                            : long;
                }
                else {
                    value = long;
                }
            }
        }
        else if (elementType === BSON_DATA_DECIMAL128) {
            const bytes = ByteUtils.allocateUnsafe(16);
            for (let i = 0; i < 16; i++)
                bytes[i] = buffer[index + i];
            index = index + 16;
            value = new Decimal128(bytes);
        }
        else if (elementType === BSON_DATA_BINARY) {
            let binarySize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            const totalBinarySize = binarySize;
            const subType = buffer[index++];
            if (binarySize < 0)
                throw new BSONError('Negative binary type element size found');
            if (binarySize > buffer.byteLength)
                throw new BSONError('Binary type size larger than document size');
            if (subType === Binary.SUBTYPE_BYTE_ARRAY) {
                binarySize = NumberUtils.getInt32LE(buffer, index);
                index += 4;
                if (binarySize < 0)
                    throw new BSONError('Negative binary type element size found for subtype 0x02');
                if (binarySize > totalBinarySize - 4)
                    throw new BSONError('Binary type with subtype 0x02 contains too long binary size');
                if (binarySize < totalBinarySize - 4)
                    throw new BSONError('Binary type with subtype 0x02 contains too short binary size');
            }
            if (promoteBuffers && promoteValues) {
                value = ByteUtils.toLocalBufferType(buffer.subarray(index, index + binarySize));
            }
            else {
                value = new Binary(buffer.subarray(index, index + binarySize), subType);
                if (subType === BSON_BINARY_SUBTYPE_UUID_NEW && UUID.isValid(value)) {
                    value = value.toUUID();
                }
            }
            index = index + binarySize;
        }
        else if (elementType === BSON_DATA_REGEXP && bsonRegExp === false) {
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const source = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const regExpOptions = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            const optionsArray = new Array(regExpOptions.length);
            for (i = 0; i < regExpOptions.length; i++) {
                switch (regExpOptions[i]) {
                    case 'm':
                        optionsArray[i] = 'm';
                        break;
                    case 's':
                        optionsArray[i] = 'g';
                        break;
                    case 'i':
                        optionsArray[i] = 'i';
                        break;
                }
            }
            value = new RegExp(source, optionsArray.join(''));
        }
        else if (elementType === BSON_DATA_REGEXP && bsonRegExp === true) {
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const source = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            i = index;
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            if (i >= buffer.length)
                throw new BSONError('Bad BSON Document: illegal CString');
            const regExpOptions = ByteUtils.toUTF8(buffer, index, i, false);
            index = i + 1;
            value = new BSONRegExp(source, regExpOptions);
        }
        else if (elementType === BSON_DATA_SYMBOL) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const symbol = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            value = promoteValues ? symbol : new BSONSymbol(symbol);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_TIMESTAMP) {
            value = new Timestamp({
                i: NumberUtils.getUint32LE(buffer, index),
                t: NumberUtils.getUint32LE(buffer, index + 4)
            });
            index += 8;
        }
        else if (elementType === BSON_DATA_MIN_KEY) {
            value = new MinKey();
        }
        else if (elementType === BSON_DATA_MAX_KEY) {
            value = new MaxKey();
        }
        else if (elementType === BSON_DATA_CODE) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const functionString = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            value = new Code(functionString);
            index = index + stringSize;
        }
        else if (elementType === BSON_DATA_CODE_W_SCOPE) {
            const totalSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (totalSize < 4 + 4 + 4 + 1) {
                throw new BSONError('code_w_scope total size shorter minimum expected length');
            }
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0) {
                throw new BSONError('bad string length in bson');
            }
            const functionString = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
            const _index = index;
            const objectSize = NumberUtils.getInt32LE(buffer, index);
            const scopeObject = deserializeObject(buffer, _index, options, false);
            index = index + objectSize;
            if (totalSize < 4 + 4 + objectSize + stringSize) {
                throw new BSONError('code_w_scope total size is too short, truncating scope');
            }
            if (totalSize > 4 + 4 + objectSize + stringSize) {
                throw new BSONError('code_w_scope total size is too long, clips outer document');
            }
            value = new Code(functionString, scopeObject);
        }
        else if (elementType === BSON_DATA_DBPOINTER) {
            const stringSize = NumberUtils.getInt32LE(buffer, index);
            index += 4;
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new BSONError('bad string length in bson');
            const namespace = ByteUtils.toUTF8(buffer, index, index + stringSize - 1, shouldValidateKey);
            index = index + stringSize;
            const oidBuffer = ByteUtils.allocateUnsafe(12);
            for (let i = 0; i < 12; i++)
                oidBuffer[i] = buffer[index + i];
            const oid = new ObjectId(oidBuffer);
            index = index + 12;
            value = new DBRef(namespace, oid);
        }
        else {
            throw new BSONError(`Detected unknown BSON type ${elementType.toString(16)} for fieldname "${name}"`);
        }
        if (name === '__proto__') {
            Object.defineProperty(object, name, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        else {
            object[name] = value;
        }
    }
    if (size !== index - startIndex) {
        if (isArray)
            throw new BSONError('corrupt array bson');
        throw new BSONError('corrupt object bson');
    }
    if (!isPossibleDBRef)
        return object;
    if (isDBRefLike(object)) {
        const copy = Object.assign({}, object);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef(object.$ref, object.$id, object.$db, copy);
    }
    return object;
}

const regexp = /\x00/;
const ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']);
function serializeString(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_STRING;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes + 1;
    buffer[index - 1] = 0;
    const size = ByteUtils.encodeUTF8Into(buffer, value, index + 4);
    NumberUtils.setInt32LE(buffer, index, size + 1);
    index = index + 4 + size;
    buffer[index++] = 0;
    return index;
}
function serializeNumber(buffer, key, value, index) {
    const isNegativeZero = Object.is(value, -0);
    const type = !isNegativeZero &&
        Number.isSafeInteger(value) &&
        value <= BSON_INT32_MAX &&
        value >= BSON_INT32_MIN
        ? BSON_DATA_INT
        : BSON_DATA_NUMBER;
    buffer[index++] = type;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0x00;
    if (type === BSON_DATA_INT) {
        index += NumberUtils.setInt32LE(buffer, index, value);
    }
    else {
        index += NumberUtils.setFloat64LE(buffer, index, value);
    }
    return index;
}
function serializeBigInt(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_LONG;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index += numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setBigInt64LE(buffer, index, value);
    return index;
}
function serializeNull(buffer, key, _, index) {
    buffer[index++] = BSON_DATA_NULL;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeBoolean(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BOOLEAN;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    buffer[index++] = value ? 1 : 0;
    return index;
}
function serializeDate(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_DATE;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const dateInMilis = Long.fromNumber(value.getTime());
    const lowBits = dateInMilis.getLowBits();
    const highBits = dateInMilis.getHighBits();
    index += NumberUtils.setInt32LE(buffer, index, lowBits);
    index += NumberUtils.setInt32LE(buffer, index, highBits);
    return index;
}
function serializeRegExp(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_REGEXP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    if (value.source && value.source.match(regexp) != null) {
        throw new BSONError('value ' + value.source + ' must not contain null bytes');
    }
    index = index + ByteUtils.encodeUTF8Into(buffer, value.source, index);
    buffer[index++] = 0x00;
    if (value.ignoreCase)
        buffer[index++] = 0x69;
    if (value.global)
        buffer[index++] = 0x73;
    if (value.multiline)
        buffer[index++] = 0x6d;
    buffer[index++] = 0x00;
    return index;
}
function serializeBSONRegExp(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_REGEXP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    if (value.pattern.match(regexp) != null) {
        throw new BSONError('pattern ' + value.pattern + ' must not contain null bytes');
    }
    index = index + ByteUtils.encodeUTF8Into(buffer, value.pattern, index);
    buffer[index++] = 0x00;
    const sortedOptions = value.options.split('').sort().join('');
    index = index + ByteUtils.encodeUTF8Into(buffer, sortedOptions, index);
    buffer[index++] = 0x00;
    return index;
}
function serializeMinMax(buffer, key, value, index) {
    if (value === null) {
        buffer[index++] = BSON_DATA_NULL;
    }
    else if (value._bsontype === 'MinKey') {
        buffer[index++] = BSON_DATA_MIN_KEY;
    }
    else {
        buffer[index++] = BSON_DATA_MAX_KEY;
    }
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeObjectId(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_OID;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += value.serializeInto(buffer, index);
    return index;
}
function serializeBuffer(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BINARY;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const size = value.length;
    index += NumberUtils.setInt32LE(buffer, index, size);
    buffer[index++] = BSON_BINARY_SUBTYPE_DEFAULT;
    if (size <= 16) {
        for (let i = 0; i < size; i++)
            buffer[index + i] = value[i];
    }
    else {
        buffer.set(value, index);
    }
    index = index + size;
    return index;
}
function serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path) {
    if (path.has(value)) {
        throw new BSONError('Cannot convert circular structure to BSON');
    }
    path.add(value);
    buffer[index++] = Array.isArray(value) ? BSON_DATA_ARRAY : BSON_DATA_OBJECT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const endIndex = serializeInto(buffer, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
    path.delete(value);
    return endIndex;
}
function serializeDecimal128(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_DECIMAL128;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    for (let i = 0; i < 16; i++)
        buffer[index + i] = value.bytes[i];
    return index + 16;
}
function serializeLong(buffer, key, value, index) {
    buffer[index++] =
        value._bsontype === 'Long' ? BSON_DATA_LONG : BSON_DATA_TIMESTAMP;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const lowBits = value.getLowBits();
    const highBits = value.getHighBits();
    index += NumberUtils.setInt32LE(buffer, index, lowBits);
    index += NumberUtils.setInt32LE(buffer, index, highBits);
    return index;
}
function serializeInt32(buffer, key, value, index) {
    value = value.valueOf();
    buffer[index++] = BSON_DATA_INT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setInt32LE(buffer, index, value);
    return index;
}
function serializeDouble(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_NUMBER;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    index += NumberUtils.setFloat64LE(buffer, index, value.value);
    return index;
}
function serializeFunction(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_CODE;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const functionString = value.toString();
    const size = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
    NumberUtils.setInt32LE(buffer, index, size);
    index = index + 4 + size - 1;
    buffer[index++] = 0;
    return index;
}
function serializeCode(buffer, key, value, index, checkKeys = false, depth = 0, serializeFunctions = false, ignoreUndefined = true, path) {
    if (value.scope && typeof value.scope === 'object') {
        buffer[index++] = BSON_DATA_CODE_W_SCOPE;
        const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        let startIndex = index;
        const functionString = value.code;
        index = index + 4;
        const codeSize = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
        NumberUtils.setInt32LE(buffer, index, codeSize);
        buffer[index + 4 + codeSize - 1] = 0;
        index = index + codeSize + 4;
        const endIndex = serializeInto(buffer, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
        index = endIndex - 1;
        const totalSize = endIndex - startIndex;
        startIndex += NumberUtils.setInt32LE(buffer, startIndex, totalSize);
        buffer[index++] = 0;
    }
    else {
        buffer[index++] = BSON_DATA_CODE;
        const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        const functionString = value.code.toString();
        const size = ByteUtils.encodeUTF8Into(buffer, functionString, index + 4) + 1;
        NumberUtils.setInt32LE(buffer, index, size);
        index = index + 4 + size - 1;
        buffer[index++] = 0;
    }
    return index;
}
function serializeBinary(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_BINARY;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const data = value.buffer;
    let size = value.position;
    if (value.sub_type === Binary.SUBTYPE_BYTE_ARRAY)
        size = size + 4;
    index += NumberUtils.setInt32LE(buffer, index, size);
    buffer[index++] = value.sub_type;
    if (value.sub_type === Binary.SUBTYPE_BYTE_ARRAY) {
        size = size - 4;
        index += NumberUtils.setInt32LE(buffer, index, size);
    }
    if (value.sub_type === Binary.SUBTYPE_VECTOR) {
        validateBinaryVector(value);
    }
    if (size <= 16) {
        for (let i = 0; i < size; i++)
            buffer[index + i] = data[i];
    }
    else {
        buffer.set(data, index);
    }
    index = index + value.position;
    return index;
}
function serializeSymbol(buffer, key, value, index) {
    buffer[index++] = BSON_DATA_SYMBOL;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const size = ByteUtils.encodeUTF8Into(buffer, value.value, index + 4) + 1;
    NumberUtils.setInt32LE(buffer, index, size);
    index = index + 4 + size - 1;
    buffer[index++] = 0;
    return index;
}
function serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path) {
    buffer[index++] = BSON_DATA_OBJECT;
    const numberOfWrittenBytes = ByteUtils.encodeUTF8Into(buffer, key, index);
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    let startIndex = index;
    let output = {
        $ref: value.collection || value.namespace,
        $id: value.oid
    };
    if (value.db != null) {
        output.$db = value.db;
    }
    output = Object.assign(output, value.fields);
    const endIndex = serializeInto(buffer, output, false, index, depth + 1, serializeFunctions, true, path);
    const size = endIndex - startIndex;
    startIndex += NumberUtils.setInt32LE(buffer, index, size);
    return endIndex;
}
function serializeInto(buffer, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
    if (path == null) {
        if (object == null) {
            buffer[0] = 0x05;
            buffer[1] = 0x00;
            buffer[2] = 0x00;
            buffer[3] = 0x00;
            buffer[4] = 0x00;
            return 5;
        }
        if (Array.isArray(object)) {
            throw new BSONError('serialize does not support an array as the root input');
        }
        if (typeof object !== 'object') {
            throw new BSONError('serialize does not support non-object as the root input');
        }
        else if ('_bsontype' in object && typeof object._bsontype === 'string') {
            throw new BSONError(`BSON types cannot be serialized as a document`);
        }
        else if (isDate(object) ||
            isRegExp(object) ||
            isUint8Array(object) ||
            isAnyArrayBuffer(object)) {
            throw new BSONError(`date, regexp, typedarray, and arraybuffer cannot be BSON documents`);
        }
        path = new Set();
    }
    path.add(object);
    let index = startingIndex + 4;
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            const key = `${i}`;
            let value = object[i];
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (value === undefined) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    else if (object instanceof Map || isMap(object)) {
        const iterator = object.entries();
        let done = false;
        while (!done) {
            const entry = iterator.next();
            done = !!entry.done;
            if (done)
                continue;
            const key = entry.value ? entry.value[0] : undefined;
            let value = entry.value ? entry.value[1] : undefined;
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    throw new BSONError('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw new BSONError('key ' + key + " must not start with '$'");
                    }
                    else if (key.includes('.')) {
                        throw new BSONError('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (value === undefined) {
                if (ignoreUndefined === false)
                    index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    else {
        if (typeof object?.toBSON === 'function') {
            object = object.toBSON();
            if (object != null && typeof object !== 'object') {
                throw new BSONError('toBSON function did not return an object');
            }
        }
        for (const key of Object.keys(object)) {
            let value = object[key];
            if (typeof value?.toBSON === 'function') {
                value = value.toBSON();
            }
            const type = typeof value;
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    throw new BSONError('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw new BSONError('key ' + key + " must not start with '$'");
                    }
                    else if (key.includes('.')) {
                        throw new BSONError('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (value === undefined) {
                if (ignoreUndefined === false)
                    index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                index = serializeBigInt(buffer, key, value, index);
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (type === 'object' && value._bsontype == null) {
                if (value instanceof Date || isDate(value)) {
                    index = serializeDate(buffer, key, value, index);
                }
                else if (value instanceof Uint8Array || isUint8Array(value)) {
                    index = serializeBuffer(buffer, key, value, index);
                }
                else if (value instanceof RegExp || isRegExp(value)) {
                    index = serializeRegExp(buffer, key, value, index);
                }
                else {
                    index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
            }
            else if (type === 'object') {
                if (value[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
                    throw new BSONVersionError();
                }
                else if (value._bsontype === 'ObjectId') {
                    index = serializeObjectId(buffer, key, value, index);
                }
                else if (value._bsontype === 'Decimal128') {
                    index = serializeDecimal128(buffer, key, value, index);
                }
                else if (value._bsontype === 'Long' || value._bsontype === 'Timestamp') {
                    index = serializeLong(buffer, key, value, index);
                }
                else if (value._bsontype === 'Double') {
                    index = serializeDouble(buffer, key, value, index);
                }
                else if (value._bsontype === 'Code') {
                    index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, path);
                }
                else if (value._bsontype === 'Binary') {
                    index = serializeBinary(buffer, key, value, index);
                }
                else if (value._bsontype === 'BSONSymbol') {
                    index = serializeSymbol(buffer, key, value, index);
                }
                else if (value._bsontype === 'DBRef') {
                    index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, path);
                }
                else if (value._bsontype === 'BSONRegExp') {
                    index = serializeBSONRegExp(buffer, key, value, index);
                }
                else if (value._bsontype === 'Int32') {
                    index = serializeInt32(buffer, key, value, index);
                }
                else if (value._bsontype === 'MinKey' || value._bsontype === 'MaxKey') {
                    index = serializeMinMax(buffer, key, value, index);
                }
                else if (typeof value._bsontype !== 'undefined') {
                    throw new BSONError(`Unrecognized or invalid _bsontype: ${String(value._bsontype)}`);
                }
            }
            else if (type === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index);
            }
        }
    }
    path.delete(object);
    buffer[index++] = 0x00;
    const size = index - startingIndex;
    startingIndex += NumberUtils.setInt32LE(buffer, startingIndex, size);
    return index;
}

function isBSONType(value) {
    return (value != null &&
        typeof value === 'object' &&
        '_bsontype' in value &&
        typeof value._bsontype === 'string');
}
const keysToCodecs = {
    $oid: ObjectId,
    $binary: Binary,
    $uuid: Binary,
    $symbol: BSONSymbol,
    $numberInt: Int32,
    $numberDecimal: Decimal128,
    $numberDouble: Double,
    $numberLong: Long,
    $minKey: MinKey,
    $maxKey: MaxKey,
    $regex: BSONRegExp,
    $regularExpression: BSONRegExp,
    $timestamp: Timestamp
};
function deserializeValue(value, options = {}) {
    if (typeof value === 'number') {
        const in32BitRange = value <= BSON_INT32_MAX && value >= BSON_INT32_MIN;
        const in64BitRange = value <= BSON_INT64_MAX && value >= BSON_INT64_MIN;
        if (options.relaxed || options.legacy) {
            return value;
        }
        if (Number.isInteger(value) && !Object.is(value, -0)) {
            if (in32BitRange) {
                return new Int32(value);
            }
            if (in64BitRange) {
                if (options.useBigInt64) {
                    return BigInt(value);
                }
                return Long.fromNumber(value);
            }
        }
        return new Double(value);
    }
    if (value == null || typeof value !== 'object')
        return value;
    if (value.$undefined)
        return null;
    const keys = Object.keys(value).filter(k => k.startsWith('$') && value[k] != null);
    for (let i = 0; i < keys.length; i++) {
        const c = keysToCodecs[keys[i]];
        if (c)
            return c.fromExtendedJSON(value, options);
    }
    if (value.$date != null) {
        const d = value.$date;
        const date = new Date();
        if (options.legacy) {
            if (typeof d === 'number')
                date.setTime(d);
            else if (typeof d === 'string')
                date.setTime(Date.parse(d));
            else if (typeof d === 'bigint')
                date.setTime(Number(d));
            else
                throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
        }
        else {
            if (typeof d === 'string')
                date.setTime(Date.parse(d));
            else if (Long.isLong(d))
                date.setTime(d.toNumber());
            else if (typeof d === 'number' && options.relaxed)
                date.setTime(d);
            else if (typeof d === 'bigint')
                date.setTime(Number(d));
            else
                throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
        }
        return date;
    }
    if (value.$code != null) {
        const copy = Object.assign({}, value);
        if (value.$scope) {
            copy.$scope = deserializeValue(value.$scope);
        }
        return Code.fromExtendedJSON(value);
    }
    if (isDBRefLike(value) || value.$dbPointer) {
        const v = value.$ref ? value : value.$dbPointer;
        if (v instanceof DBRef)
            return v;
        const dollarKeys = Object.keys(v).filter(k => k.startsWith('$'));
        let valid = true;
        dollarKeys.forEach(k => {
            if (['$ref', '$id', '$db'].indexOf(k) === -1)
                valid = false;
        });
        if (valid)
            return DBRef.fromExtendedJSON(v);
    }
    return value;
}
function serializeArray(array, options) {
    return array.map((v, index) => {
        options.seenObjects.push({ propertyName: `index ${index}`, obj: null });
        try {
            return serializeValue(v, options);
        }
        finally {
            options.seenObjects.pop();
        }
    });
}
function getISOString(date) {
    const isoStr = date.toISOString();
    return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}
function serializeValue(value, options) {
    if (value instanceof Map || isMap(value)) {
        const obj = Object.create(null);
        for (const [k, v] of value) {
            if (typeof k !== 'string') {
                throw new BSONError('Can only serialize maps with string keys');
            }
            obj[k] = v;
        }
        return serializeValue(obj, options);
    }
    if ((typeof value === 'object' || typeof value === 'function') && value !== null) {
        const index = options.seenObjects.findIndex(entry => entry.obj === value);
        if (index !== -1) {
            const props = options.seenObjects.map(entry => entry.propertyName);
            const leadingPart = props
                .slice(0, index)
                .map(prop => `${prop} -> `)
                .join('');
            const alreadySeen = props[index];
            const circularPart = ' -> ' +
                props
                    .slice(index + 1, props.length - 1)
                    .map(prop => `${prop} -> `)
                    .join('');
            const current = props[props.length - 1];
            const leadingSpace = ' '.repeat(leadingPart.length + alreadySeen.length / 2);
            const dashes = '-'.repeat(circularPart.length + (alreadySeen.length + current.length) / 2 - 1);
            throw new BSONError('Converting circular structure to EJSON:\n' +
                `    ${leadingPart}${alreadySeen}${circularPart}${current}\n` +
                `    ${leadingSpace}\\${dashes}/`);
        }
        options.seenObjects[options.seenObjects.length - 1].obj = value;
    }
    if (Array.isArray(value))
        return serializeArray(value, options);
    if (value === undefined)
        return null;
    if (value instanceof Date || isDate(value)) {
        const dateNum = value.getTime(), inRange = dateNum > -1 && dateNum < 253402318800000;
        if (options.legacy) {
            return options.relaxed && inRange
                ? { $date: value.getTime() }
                : { $date: getISOString(value) };
        }
        return options.relaxed && inRange
            ? { $date: getISOString(value) }
            : { $date: { $numberLong: value.getTime().toString() } };
    }
    if (typeof value === 'number' && (!options.relaxed || !isFinite(value))) {
        if (Number.isInteger(value) && !Object.is(value, -0)) {
            if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
                return { $numberInt: value.toString() };
            }
            if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) {
                return { $numberLong: value.toString() };
            }
        }
        return { $numberDouble: Object.is(value, -0) ? '-0.0' : value.toString() };
    }
    if (typeof value === 'bigint') {
        if (!options.relaxed) {
            return { $numberLong: BigInt.asIntN(64, value).toString() };
        }
        return Number(BigInt.asIntN(64, value));
    }
    if (value instanceof RegExp || isRegExp(value)) {
        let flags = value.flags;
        if (flags === undefined) {
            const match = value.toString().match(/[gimuy]*$/);
            if (match) {
                flags = match[0];
            }
        }
        const rx = new BSONRegExp(value.source, flags);
        return rx.toExtendedJSON(options);
    }
    if (value != null && typeof value === 'object')
        return serializeDocument(value, options);
    return value;
}
const BSON_TYPE_MAPPINGS = {
    Binary: (o) => new Binary(o.value(), o.sub_type),
    Code: (o) => new Code(o.code, o.scope),
    DBRef: (o) => new DBRef(o.collection || o.namespace, o.oid, o.db, o.fields),
    Decimal128: (o) => new Decimal128(o.bytes),
    Double: (o) => new Double(o.value),
    Int32: (o) => new Int32(o.value),
    Long: (o) => Long.fromBits(o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_),
    MaxKey: () => new MaxKey(),
    MinKey: () => new MinKey(),
    ObjectId: (o) => new ObjectId(o),
    BSONRegExp: (o) => new BSONRegExp(o.pattern, o.options),
    BSONSymbol: (o) => new BSONSymbol(o.value),
    Timestamp: (o) => Timestamp.fromBits(o.low, o.high)
};
function serializeDocument(doc, options) {
    if (doc == null || typeof doc !== 'object')
        throw new BSONError('not an object instance');
    const bsontype = doc._bsontype;
    if (typeof bsontype === 'undefined') {
        const _doc = {};
        for (const name of Object.keys(doc)) {
            options.seenObjects.push({ propertyName: name, obj: null });
            try {
                const value = serializeValue(doc[name], options);
                if (name === '__proto__') {
                    Object.defineProperty(_doc, name, {
                        value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                else {
                    _doc[name] = value;
                }
            }
            finally {
                options.seenObjects.pop();
            }
        }
        return _doc;
    }
    else if (doc != null &&
        typeof doc === 'object' &&
        typeof doc._bsontype === 'string' &&
        doc[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
        throw new BSONVersionError();
    }
    else if (isBSONType(doc)) {
        let outDoc = doc;
        if (typeof outDoc.toExtendedJSON !== 'function') {
            const mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
            if (!mapper) {
                throw new BSONError('Unrecognized or invalid _bsontype: ' + doc._bsontype);
            }
            outDoc = mapper(outDoc);
        }
        if (bsontype === 'Code' && outDoc.scope) {
            outDoc = new Code(outDoc.code, serializeValue(outDoc.scope, options));
        }
        else if (bsontype === 'DBRef' && outDoc.oid) {
            outDoc = new DBRef(serializeValue(outDoc.collection, options), serializeValue(outDoc.oid, options), serializeValue(outDoc.db, options), serializeValue(outDoc.fields, options));
        }
        return outDoc.toExtendedJSON(options);
    }
    else {
        throw new BSONError('_bsontype must be a string, but was: ' + typeof bsontype);
    }
}
function parse(text, options) {
    const ejsonOptions = {
        useBigInt64: options?.useBigInt64 ?? false,
        relaxed: options?.relaxed ?? true,
        legacy: options?.legacy ?? false
    };
    return JSON.parse(text, (key, value) => {
        if (key.indexOf('\x00') !== -1) {
            throw new BSONError(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(key)}`);
        }
        return deserializeValue(value, ejsonOptions);
    });
}
function stringify(value, replacer, space, options) {
    if (space != null && typeof space === 'object') {
        options = space;
        space = 0;
    }
    if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
        options = replacer;
        replacer = undefined;
        space = 0;
    }
    const serializeOptions = Object.assign({ relaxed: true, legacy: false }, options, {
        seenObjects: [{ propertyName: '(root)', obj: null }]
    });
    const doc = serializeValue(value, serializeOptions);
    return JSON.stringify(doc, replacer, space);
}
function EJSONserialize(value, options) {
    options = options || {};
    return JSON.parse(stringify(value, options));
}
function EJSONdeserialize(ejson, options) {
    options = options || {};
    return parse(JSON.stringify(ejson), options);
}
const EJSON = Object.create(null);
EJSON.parse = parse;
EJSON.stringify = stringify;
EJSON.serialize = EJSONserialize;
EJSON.deserialize = EJSONdeserialize;
Object.freeze(EJSON);

const BSONElementType = {
    double: 1,
    string: 2,
    object: 3,
    array: 4,
    binData: 5,
    undefined: 6,
    objectId: 7,
    bool: 8,
    date: 9,
    null: 10,
    regex: 11,
    dbPointer: 12,
    javascript: 13,
    symbol: 14,
    javascriptWithScope: 15,
    int: 16,
    timestamp: 17,
    long: 18,
    decimal: 19,
    minKey: 255,
    maxKey: 127
};
function getSize(source, offset) {
    try {
        return NumberUtils.getNonnegativeInt32LE(source, offset);
    }
    catch (cause) {
        throw new BSONOffsetError('BSON size cannot be negative', offset, { cause });
    }
}
function findNull(bytes, offset) {
    let nullTerminatorOffset = offset;
    for (; bytes[nullTerminatorOffset] !== 0x00; nullTerminatorOffset++)
        ;
    if (nullTerminatorOffset === bytes.length - 1) {
        throw new BSONOffsetError('Null terminator not found', offset);
    }
    return nullTerminatorOffset;
}
function parseToElements(bytes, startOffset = 0) {
    startOffset ??= 0;
    if (bytes.length < 5) {
        throw new BSONOffsetError(`Input must be at least 5 bytes, got ${bytes.length} bytes`, startOffset);
    }
    const documentSize = getSize(bytes, startOffset);
    if (documentSize > bytes.length - startOffset) {
        throw new BSONOffsetError(`Parsed documentSize (${documentSize} bytes) does not match input length (${bytes.length} bytes)`, startOffset);
    }
    if (bytes[startOffset + documentSize - 1] !== 0x00) {
        throw new BSONOffsetError('BSON documents must end in 0x00', startOffset + documentSize);
    }
    const elements = [];
    let offset = startOffset + 4;
    while (offset <= documentSize + startOffset) {
        const type = bytes[offset];
        offset += 1;
        if (type === 0) {
            if (offset - startOffset !== documentSize) {
                throw new BSONOffsetError(`Invalid 0x00 type byte`, offset);
            }
            break;
        }
        const nameOffset = offset;
        const nameLength = findNull(bytes, offset) - nameOffset;
        offset += nameLength + 1;
        let length;
        if (type === BSONElementType.double ||
            type === BSONElementType.long ||
            type === BSONElementType.date ||
            type === BSONElementType.timestamp) {
            length = 8;
        }
        else if (type === BSONElementType.int) {
            length = 4;
        }
        else if (type === BSONElementType.objectId) {
            length = 12;
        }
        else if (type === BSONElementType.decimal) {
            length = 16;
        }
        else if (type === BSONElementType.bool) {
            length = 1;
        }
        else if (type === BSONElementType.null ||
            type === BSONElementType.undefined ||
            type === BSONElementType.maxKey ||
            type === BSONElementType.minKey) {
            length = 0;
        }
        else if (type === BSONElementType.regex) {
            length = findNull(bytes, findNull(bytes, offset) + 1) + 1 - offset;
        }
        else if (type === BSONElementType.object ||
            type === BSONElementType.array ||
            type === BSONElementType.javascriptWithScope) {
            length = getSize(bytes, offset);
        }
        else if (type === BSONElementType.string ||
            type === BSONElementType.binData ||
            type === BSONElementType.dbPointer ||
            type === BSONElementType.javascript ||
            type === BSONElementType.symbol) {
            length = getSize(bytes, offset) + 4;
            if (type === BSONElementType.binData) {
                length += 1;
            }
            if (type === BSONElementType.dbPointer) {
                length += 12;
            }
        }
        else {
            throw new BSONOffsetError(`Invalid 0x${type.toString(16).padStart(2, '0')} type byte`, offset);
        }
        if (length > documentSize) {
            throw new BSONOffsetError('value reports length larger than document', offset);
        }
        elements.push([type, nameOffset, nameLength, offset, length]);
        offset += length;
    }
    return elements;
}

const onDemand = Object.create(null);
onDemand.parseToElements = parseToElements;
onDemand.ByteUtils = ByteUtils;
onDemand.NumberUtils = NumberUtils;
Object.freeze(onDemand);

const MAXSIZE = 1024 * 1024 * 17;
let buffer = ByteUtils.allocate(MAXSIZE);
function setInternalBufferSize(size) {
    if (buffer.length < size) {
        buffer = ByteUtils.allocate(size);
    }
}
function serialize(object, options = {}) {
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE;
    if (buffer.length < minInternalBufferSize) {
        buffer = ByteUtils.allocate(minInternalBufferSize);
    }
    const serializationIndex = serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, null);
    const finishedBuffer = ByteUtils.allocateUnsafe(serializationIndex);
    finishedBuffer.set(buffer.subarray(0, serializationIndex), 0);
    return finishedBuffer;
}
function serializeWithBufferAndIndex(object, finalBuffer, options = {}) {
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const startIndex = typeof options.index === 'number' ? options.index : 0;
    const serializationIndex = serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, null);
    finalBuffer.set(buffer.subarray(0, serializationIndex), startIndex);
    return startIndex + serializationIndex - 1;
}
function deserialize(buffer, options = {}) {
    return internalDeserialize(ByteUtils.toLocalBufferType(buffer), options);
}
function calculateObjectSize(object, options = {}) {
    options = options || {};
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    return internalCalculateObjectSize(object, serializeFunctions, ignoreUndefined);
}
function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
    const internalOptions = Object.assign({ allowObjectSmallerThanBufferSize: true, index: 0 }, options);
    const bufferData = ByteUtils.toLocalBufferType(data);
    let index = startIndex;
    for (let i = 0; i < numberOfDocuments; i++) {
        const size = NumberUtils.getInt32LE(bufferData, index);
        internalOptions.index = index;
        documents[docStartIndex + i] = internalDeserialize(bufferData, internalOptions);
        index = index + size;
    }
    return index;
}

var bson = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BSONError: BSONError,
    BSONOffsetError: BSONOffsetError,
    BSONRegExp: BSONRegExp,
    BSONRuntimeError: BSONRuntimeError,
    BSONSymbol: BSONSymbol,
    BSONType: BSONType,
    BSONValue: BSONValue,
    BSONVersionError: BSONVersionError,
    Binary: Binary,
    Code: Code,
    DBRef: DBRef,
    Decimal128: Decimal128,
    Double: Double,
    EJSON: EJSON,
    Int32: Int32,
    Long: Long,
    MaxKey: MaxKey,
    MinKey: MinKey,
    ObjectId: ObjectId,
    Timestamp: Timestamp,
    UUID: UUID,
    calculateObjectSize: calculateObjectSize,
    deserialize: deserialize,
    deserializeStream: deserializeStream,
    onDemand: onDemand,
    serialize: serialize,
    serializeWithBufferAndIndex: serializeWithBufferAndIndex,
    setInternalBufferSize: setInternalBufferSize
});

exports.BSON = bson;
exports.BSONError = BSONError;
exports.BSONOffsetError = BSONOffsetError;
exports.BSONRegExp = BSONRegExp;
exports.BSONRuntimeError = BSONRuntimeError;
exports.BSONSymbol = BSONSymbol;
exports.BSONType = BSONType;
exports.BSONValue = BSONValue;
exports.BSONVersionError = BSONVersionError;
exports.Binary = Binary;
exports.Code = Code;
exports.DBRef = DBRef;
exports.Decimal128 = Decimal128;
exports.Double = Double;
exports.EJSON = EJSON;
exports.Int32 = Int32;
exports.Long = Long;
exports.MaxKey = MaxKey;
exports.MinKey = MinKey;
exports.ObjectId = ObjectId;
exports.Timestamp = Timestamp;
exports.UUID = UUID;
exports.calculateObjectSize = calculateObjectSize;
exports.deserialize = deserialize;
exports.deserializeStream = deserializeStream;
exports.onDemand = onDemand;
exports.serialize = serialize;
exports.serializeWithBufferAndIndex = serializeWithBufferAndIndex;
exports.setInternalBufferSize = setInternalBufferSize;
//# sourceMappingURL=bson.cjs.map
