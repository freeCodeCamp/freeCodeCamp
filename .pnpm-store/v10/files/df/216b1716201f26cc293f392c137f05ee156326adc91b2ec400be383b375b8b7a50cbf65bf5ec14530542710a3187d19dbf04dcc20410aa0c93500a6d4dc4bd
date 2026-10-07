import { BSONError } from '../error';
import { parseUtf8 } from '../parse_utf8';
import { tryReadBasicLatin, tryWriteBasicLatin } from './latin';
import { isUint8Array } from '../parser/utils';

type NodeJsEncoding = 'base64' | 'hex' | 'utf8' | 'binary';
type NodeJsBuffer = ArrayBufferView &
  Uint8Array & {
    write(string: string, offset: number, length: undefined, encoding: 'utf8'): number;
    copy(target: Uint8Array, targetStart: number, sourceStart: number, sourceEnd: number): number;
    toString: (this: Uint8Array, encoding: NodeJsEncoding, start?: number, end?: number) => string;
    equals: (this: Uint8Array, other: Uint8Array) => boolean;
    swap32: (this: NodeJsBuffer) => NodeJsBuffer;
    compare: (this: Uint8Array, other: Uint8Array) => -1 | 0 | 1;
  };
type NodeJsBufferConstructor = Omit<Uint8ArrayConstructor, 'from'> & {
  alloc: (size: number) => NodeJsBuffer;
  allocUnsafe: (size: number) => NodeJsBuffer;
  from(array: number[]): NodeJsBuffer;
  from(array: Uint8Array): NodeJsBuffer;
  from(array: ArrayBuffer): NodeJsBuffer;
  from(array: ArrayBufferLike, byteOffset: number, byteLength: number): NodeJsBuffer;
  from(base64: string, encoding: NodeJsEncoding): NodeJsBuffer;
  byteLength(input: string, encoding: 'utf8'): number;
  isBuffer(value: unknown): value is NodeJsBuffer;
  concat(list: Uint8Array[]): NodeJsBuffer;
};

// This can be nullish, but we gate the nodejs functions on being exported whether or not this exists
// Node.js global
declare const Buffer: NodeJsBufferConstructor;

/** @internal */
function nodejsMathRandomBytes(byteLength: number): NodeJsBuffer {
  return nodeJsByteUtils.fromNumberArray(
    Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256))
  );
}

/** @internal */
function nodejsSecureRandomBytes(byteLength: number): NodeJsBuffer {
  // @ts-expect-error: crypto.getRandomValues cannot actually be null here
  return crypto.getRandomValues(nodeJsByteUtils.allocate(byteLength));
}

const nodejsRandomBytes = (() => {
  const { crypto } = globalThis as {
    crypto?: { getRandomValues?: (space: Uint8Array) => Uint8Array };
  };
  if (crypto != null && typeof crypto.getRandomValues === 'function') {
    return nodejsSecureRandomBytes;
  } else {
    return nodejsMathRandomBytes;
  }
})();

/**
 * @public
 * @experimental
 */
export const nodeJsByteUtils = {
  isUint8Array: isUint8Array,

  toLocalBufferType(potentialBuffer: Uint8Array | NodeJsBuffer | ArrayBuffer): NodeJsBuffer {
    if (Buffer.isBuffer(potentialBuffer)) {
      return potentialBuffer;
    }

    if (ArrayBuffer.isView(potentialBuffer)) {
      return Buffer.from(
        potentialBuffer.buffer,
        potentialBuffer.byteOffset,
        potentialBuffer.byteLength
      );
    }

    const stringTag =
      potentialBuffer?.[Symbol.toStringTag] ?? Object.prototype.toString.call(potentialBuffer);
    if (
      stringTag === 'ArrayBuffer' ||
      stringTag === 'SharedArrayBuffer' ||
      stringTag === '[object ArrayBuffer]' ||
      stringTag === '[object SharedArrayBuffer]'
    ) {
      return Buffer.from(potentialBuffer);
    }

    throw new BSONError(`Cannot create Buffer from the passed potentialBuffer.`);
  },

  allocate(size: number): NodeJsBuffer {
    return Buffer.alloc(size);
  },

  allocateUnsafe(size: number): NodeJsBuffer {
    return Buffer.allocUnsafe(size);
  },

  compare(a: Uint8Array, b: Uint8Array) {
    return nodeJsByteUtils.toLocalBufferType(a).compare(b);
  },

  concat(list: Uint8Array[]): NodeJsBuffer {
    return Buffer.concat(list);
  },

  copy(
    source: Uint8Array,
    target: Uint8Array,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number {
    return nodeJsByteUtils
      .toLocalBufferType(source)
      .copy(target, targetStart ?? 0, sourceStart ?? 0, sourceEnd ?? source.length);
  },

  equals(a: Uint8Array, b: Uint8Array): boolean {
    return nodeJsByteUtils.toLocalBufferType(a).equals(b);
  },

  fromNumberArray(array: number[]): NodeJsBuffer {
    return Buffer.from(array);
  },

  fromBase64(base64: string): NodeJsBuffer {
    return Buffer.from(base64, 'base64');
  },

  fromUTF8(utf8: string): NodeJsBuffer {
    return Buffer.from(utf8, 'utf8');
  },

  toBase64(buffer: Uint8Array): string {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString('base64');
  },

  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  fromISO88591(codePoints: string): NodeJsBuffer {
    return Buffer.from(codePoints, 'binary');
  },

  /** **Legacy** binary strings are an outdated method of data transfer. Do not add public API support for interpreting this format */
  toISO88591(buffer: Uint8Array): string {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString('binary');
  },

  fromHex(hex: string): NodeJsBuffer {
    return Buffer.from(hex, 'hex');
  },

  toHex(buffer: Uint8Array): string {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString('hex');
  },

  toUTF8(buffer: Uint8Array, start: number, end: number, fatal: boolean): string {
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

  utf8ByteLength(input: string): number {
    return Buffer.byteLength(input, 'utf8');
  },

  encodeUTF8Into(buffer: Uint8Array, source: string, byteOffset: number): number {
    const latinBytesWritten = tryWriteBasicLatin(buffer, source, byteOffset);
    if (latinBytesWritten != null) {
      return latinBytesWritten;
    }

    return nodeJsByteUtils.toLocalBufferType(buffer).write(source, byteOffset, undefined, 'utf8');
  },

  randomBytes: nodejsRandomBytes,

  swap32(buffer: Uint8Array): NodeJsBuffer {
    return nodeJsByteUtils.toLocalBufferType(buffer).swap32();
  }
};
