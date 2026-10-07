export {}; // Make this a module

declare global {
    namespace NodeJS {
        type TypedArray =
            | Uint8Array
            | Uint8ClampedArray
            | Uint16Array
            | Uint32Array
            | Int8Array
            | Int16Array
            | Int32Array
            | BigUint64Array
            | BigInt64Array
            | Float16Array
            | Float32Array
            | Float64Array;
        type ArrayBufferView = TypedArray | DataView;

        type NonSharedUint8Array = Uint8Array;
        type NonSharedUint8ClampedArray = Uint8ClampedArray;
        type NonSharedUint16Array = Uint16Array;
        type NonSharedUint32Array = Uint32Array;
        type NonSharedInt8Array = Int8Array;
        type NonSharedInt16Array = Int16Array;
        type NonSharedInt32Array = Int32Array;
        type NonSharedBigUint64Array = BigUint64Array;
        type NonSharedBigInt64Array = BigInt64Array;
        type NonSharedFloat16Array = Float16Array;
        type NonSharedFloat32Array = Float32Array;
        type NonSharedFloat64Array = Float64Array;
        type NonSharedDataView = DataView;
        type NonSharedTypedArray = TypedArray;
        type NonSharedArrayBufferView = ArrayBufferView;
    }
}
