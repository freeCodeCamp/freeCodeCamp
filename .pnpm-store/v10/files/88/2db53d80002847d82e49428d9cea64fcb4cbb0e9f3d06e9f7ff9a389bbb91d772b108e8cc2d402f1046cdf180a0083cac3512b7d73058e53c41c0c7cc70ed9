import { BSONError } from '../error';
import { tryReadBasicLatin } from './latin';
import { parseUtf8 } from '../parse_utf8';
import { isUint8Array } from '../parser/utils';

type TextDecoder = {
  readonly encoding: string;
  readonly fatal: boolean;
  readonly ignoreBOM: boolean;
  decode(input?: Uint8Array): string;
};
type TextDecoderConstructor = {
  new (label: 'utf8', options: { fatal: boolean; ignoreBOM?: boolean }): TextDecoder;
};

type TextEncoder = {
  readonly encoding: string;
  encode(input?: string): Uint8Array;
};
type TextEncoderConstructor = {
  new (): TextEncoder;
};

// Web global
declare const TextDecoder: TextDecoderConstructor;
declare const TextEncoder: TextEncoderConstructor;
declare const atob: (base64: string) => string;
declare const btoa: (binary: string) => string;

type ArrayBufferViewWithTag = ArrayBufferView & {
  [Symbol.toStringTag]?: string;
};

function isReactNative() {
  const { navigator } = globalThis as { navigator?: { product?: string } };
  return typeof navigator === 'object' && navigator.product === 'ReactNative';
}

/** @internal */
export function webMathRandomBytes(byteLength: number) {
  if (byteLength < 0) {
    throw new RangeError(`The argument 'byteLength' is invalid. Received ${byteLength}`);
  }
  return webByteUtils.fromNumberArray(
    Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256))
  );
}

/** @internal */
const webRandomBytes: (byteLength: number) => Uint8Array = (() => {
  const { crypto } = globalThis as {
    crypto?: { getRandomValues?: (space: Uint8Array) => Uint8Array };
  };
  if (crypto != null && typeof crypto.getRandomValues === 'function') {
    return (byteLength: number) => {
      // @ts-expect-error: crypto.getRandomValues cannot actually be null here
      // You cannot separate getRandomValues from crypto (need to have this === crypto)
      return crypto.getRandomValues(webByteUtils.allocate(byteLength));
    };
  } else {
    if (isReactNative()) {
      const { console } = globalThis as { console?: { warn?: (message: string) => void } };
      console?.warn?.(
        'BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.'
      );
    }
    return webMathRandomBytes;
  }
})();

const HEX_DIGIT = /(\d|[a-f])/i;

/**
 * @public
 * @experimental
 */
export const webByteUtils = {
  isUint8Array: isUint8Array,

  toLocalBufferType(
    potentialUint8array: Uint8Array | ArrayBufferViewWithTag | ArrayBuffer
  ): Uint8Array {
    const stringTag =
      potentialUint8array?.[Symbol.toStringTag] ??
      Object.prototype.toString.call(potentialUint8array);

    if (stringTag === 'Uint8Array') {
      return potentialUint8array as Uint8Array;
    }

    if (ArrayBuffer.isView(potentialUint8array)) {
      return new Uint8Array(
        potentialUint8array.buffer.slice(
          potentialUint8array.byteOffset,
          potentialUint8array.byteOffset + potentialUint8array.byteLength
        )
      );
    }

    if (
      stringTag === 'ArrayBuffer' ||
      stringTag === 'SharedArrayBuffer' ||
      stringTag === '[object ArrayBuffer]' ||
      stringTag === '[object SharedArrayBuffer]'
    ) {
      return new Uint8Array(potentialUint8array);
    }

    throw new BSONError(`Cannot make a Uint8Array from passed potentialBuffer.`);
  },

  allocate(size: number): Uint8Array {
    if (typeof size !== 'number') {
      throw new TypeError(`The "size" argument must be of type number. Received ${String(size)}`);
    }
    return new Uint8Array(size);
  },

  allocateUnsafe(size: number): Uint8Array {
    return webByteUtils.allocate(size);
  },

  compare(uint8Array: Uint8Array, otherUint8Array: Uint8Array): -1 | 0 | 1 {
    if (uint8Array === otherUint8Array) return 0;

    const len = Math.min(uint8Array.length, otherUint8Array.length);

    for (let i = 0; i < len; i++) {
      if (uint8Array[i] < otherUint8Array[i]) return -1;
      if (uint8Array[i] > otherUint8Array[i]) return 1;
    }

    if (uint8Array.length < otherUint8Array.length) return -1;
    if (uint8Array.length > otherUint8Array.length) return 1;

    return 0;
  },

  concat(uint8Arrays: Uint8Array[]): Uint8Array {
    if (uint8Arrays.length === 0) return webByteUtils.allocate(0);

    let totalLength = 0;
    for (const uint8Array of uint8Arrays) {
      totalLength += uint8Array.length;
    }

    const result = webByteUtils.allocate(totalLength);
    let offset = 0;

    for (const uint8Array of uint8Arrays) {
      result.set(uint8Array, offset);
      offset += uint8Array.length;
    }

    return result;
  },

  copy(
    source: Uint8Array,
    target: Uint8Array,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number {
    // validate and standardize passed-in sourceEnd
    if (sourceEnd !== undefined && sourceEnd < 0) {
      throw new RangeError(
        `The value of "sourceEnd" is out of range. It must be >= 0. Received ${sourceEnd}`
      );
    }
    sourceEnd = sourceEnd ?? source.length;

    // validate and standardize passed-in sourceStart
    if (sourceStart !== undefined && (sourceStart < 0 || sourceStart > sourceEnd)) {
      throw new RangeError(
        `The value of "sourceStart" is out of range. It must be >= 0 and <= ${sourceEnd}. Received ${sourceStart}`
      );
    }
    sourceStart = sourceStart ?? 0;

    // validate and standardize passed-in targetStart
    if (targetStart !== undefined && targetStart < 0) {
      throw new RangeError(
        `The value of "targetStart" is out of range. It must be >= 0. Received ${targetStart}`
      );
    }
    targetStart = targetStart ?? 0;

    // figure out how many bytes we can copy
    const srcSlice = source.subarray(sourceStart, sourceEnd);
    const maxLen = Math.min(srcSlice.length, target.length - targetStart);
    if (maxLen <= 0) {
      return 0;
    }

    // perform the copy
    target.set(srcSlice.subarray(0, maxLen), targetStart);
    return maxLen;
  },

  equals(uint8Array: Uint8Array, otherUint8Array: Uint8Array): boolean {
    if (uint8Array.byteLength !== otherUint8Array.byteLength) {
      return false;
    }
    for (let i = 0; i < uint8Array.byteLength; i++) {
      if (uint8Array[i] !== otherUint8Array[i]) {
        return false;
      }
    }
    return true;
  },

  fromNumberArray(array: number[]): Uint8Array {
    return Uint8Array.from(array);
  },

  fromBase64(base64: string): Uint8Array {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  },

  fromUTF8(utf8: string): Uint8Array {
    return new TextEncoder().encode(utf8);
  },

  toBase64(uint8array: Uint8Array): string {
    return btoa(webByteUtils.toISO88591(uint8array));
  },

  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  fromISO88591(codePoints: string): Uint8Array {
    return Uint8Array.from(codePoints, c => c.charCodeAt(0) & 0xff);
  },

  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  toISO88591(uint8array: Uint8Array): string {
    return Array.from(Uint16Array.from(uint8array), b => String.fromCharCode(b)).join('');
  },

  fromHex(hex: string): Uint8Array {
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

  toHex(uint8array: Uint8Array): string {
    return Array.from(uint8array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  toUTF8(uint8array: Uint8Array, start: number, end: number, fatal: boolean): string {
    const basicLatin = end - start <= 20 ? tryReadBasicLatin(uint8array, start, end) : null;
    if (basicLatin != null) {
      return basicLatin;
    }

    return parseUtf8(uint8array, start, end, fatal);
  },

  utf8ByteLength(input: string): number {
    return new TextEncoder().encode(input).byteLength;
  },

  encodeUTF8Into(uint8array: Uint8Array, source: string, byteOffset: number): number {
    const bytes = new TextEncoder().encode(source);
    uint8array.set(bytes, byteOffset);
    return bytes.byteLength;
  },

  randomBytes: webRandomBytes,

  swap32(buffer: Uint8Array): Uint8Array {
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
