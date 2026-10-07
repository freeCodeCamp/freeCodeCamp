// Type definitions for webidl-conversions 7.0
// Project: https://github.com/jsdom/webidl-conversions#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace WebIDLConversions {
    interface Globals {
        [key: string]: unknown;

        Number: (value?: unknown) => number;
        String: (value?: unknown) => string;
        TypeError: new(message?: string) => TypeError;
    }

    interface Options {
        context?: string | undefined;
        globals?: Globals | undefined;
    }

    interface IntegerOptions extends Options {
        enforceRange?: boolean | undefined;
        clamp?: boolean | undefined;
    }

    interface StringOptions extends Options {
        treatNullAsEmptyString?: boolean | undefined;
    }

    interface BufferSourceOptions extends Options {
        allowShared?: boolean | undefined;
    }

    type IntegerConversion = (V: unknown, opts?: IntegerOptions) => number;
    type StringConversion = (V: unknown, opts?: StringOptions) => string;
    type NumberConversion = (V: unknown, opts?: Options) => number;
}

declare const WebIDLConversions: {
    any<V>(V: V, opts?: WebIDLConversions.Options): V;
    undefined(V?: unknown, opts?: WebIDLConversions.Options): void;
    boolean(V: unknown, opts?: WebIDLConversions.Options): boolean;

    byte(V: unknown, opts?: WebIDLConversions.IntegerOptions): number;
    octet(V: unknown, opts?: WebIDLConversions.IntegerOptions): number;

    short(V: unknown, opts?: WebIDLConversions.IntegerOptions): number;
    ["unsigned short"](V: unknown, opts?: WebIDLConversions.IntegerOptions): number;

    long(V: unknown, opts?: WebIDLConversions.IntegerOptions): number;
    ["unsigned long"](V: unknown, opts?: WebIDLConversions.IntegerOptions): number;

    ["long long"](V: unknown, opts?: WebIDLConversions.IntegerOptions): number;
    ["unsigned long long"](V: unknown, opts?: WebIDLConversions.IntegerOptions): number;

    double(V: unknown, opts?: WebIDLConversions.Options): number;
    ["unrestricted double"](V: unknown, opts?: WebIDLConversions.Options): number;

    float(V: unknown, opts?: WebIDLConversions.Options): number;
    ["unrestricted float"](V: unknown, opts?: WebIDLConversions.Options): number;

    DOMString(V: unknown, opts?: WebIDLConversions.StringOptions): string;
    ByteString(V: unknown, opts?: WebIDLConversions.StringOptions): string;
    USVString(V: unknown, opts?: WebIDLConversions.StringOptions): string;

    object<V>(V: V, opts?: WebIDLConversions.Options): V extends object ? V : V & object;
    ArrayBuffer(
        V: unknown,
        opts?: WebIDLConversions.BufferSourceOptions & { allowShared?: false | undefined },
    ): ArrayBuffer;
    ArrayBuffer(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): ArrayBufferLike;
    DataView(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): DataView;

    Int8Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Int8Array;
    Int16Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Int16Array;
    Int32Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Int32Array;

    Uint8Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Uint8Array;
    Uint16Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Uint16Array;
    Uint32Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Uint32Array;
    Uint8ClampedArray(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Uint8ClampedArray;

    Float32Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Float32Array;
    Float64Array(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): Float64Array;

    ArrayBufferView(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): ArrayBufferView;
    BufferSource(
        V: unknown,
        opts?: WebIDLConversions.BufferSourceOptions & { allowShared?: false | undefined },
    ): ArrayBuffer | ArrayBufferView;
    BufferSource(V: unknown, opts?: WebIDLConversions.BufferSourceOptions): ArrayBufferLike | ArrayBufferView;

    DOMTimeStamp(V: unknown, opts?: WebIDLConversions.Options): number;
};

// This can't use ES6 style exports, as those can't have spaces in export names.
export = WebIDLConversions;
