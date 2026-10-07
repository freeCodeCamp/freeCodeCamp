export {}; // Make this a module

declare global {
    namespace NodeJS {
        type TypedArray<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
            | Uint8Array<TArrayBuffer>
            | Uint8ClampedArray<TArrayBuffer>
            | Uint16Array<TArrayBuffer>
            | Uint32Array<TArrayBuffer>
            | Int8Array<TArrayBuffer>
            | Int16Array<TArrayBuffer>
            | Int32Array<TArrayBuffer>
            | BigUint64Array<TArrayBuffer>
            | BigInt64Array<TArrayBuffer>
            | Float16Array<TArrayBuffer>
            | Float32Array<TArrayBuffer>
            | Float64Array<TArrayBuffer>;
        type ArrayBufferView<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> =
            | TypedArray<TArrayBuffer>
            | DataView<TArrayBuffer>;

        // The following aliases are required to allow use of non-shared ArrayBufferViews in @types/node
        // while maintaining compatibility with TS <=5.6.
        // TODO: remove once @types/node no longer supports TS 5.6, and replace with native types.
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedUint8Array = Uint8Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedUint8ClampedArray = Uint8ClampedArray<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedUint16Array = Uint16Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedUint32Array = Uint32Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedInt8Array = Int8Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedInt16Array = Int16Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedInt32Array = Int32Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedBigUint64Array = BigUint64Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedBigInt64Array = BigInt64Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedFloat16Array = Float16Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedFloat32Array = Float32Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedFloat64Array = Float64Array<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedDataView = DataView<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedTypedArray = TypedArray<ArrayBuffer>;
        /**
         * @deprecated This is intended for internal use, and will be removed once `@types/node` no longer supports
         * TypeScript versions earlier than 5.7.
         */
        type NonSharedArrayBufferView = ArrayBufferView<ArrayBuffer>;
    }
}
