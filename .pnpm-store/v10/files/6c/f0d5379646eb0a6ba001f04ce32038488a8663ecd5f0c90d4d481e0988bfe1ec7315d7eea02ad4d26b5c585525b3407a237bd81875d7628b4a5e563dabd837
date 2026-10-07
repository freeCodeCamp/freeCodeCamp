import TypedArrayNames from 'possible-typed-array-names';

declare namespace typedArrayByteOffset {
    export type TypedArrayName = typeof TypedArrayNames[number];

	export type TypedArrayConstructor = typeof globalThis[TypedArrayName];

	export type TypedArray = TypedArrayConstructor['prototype'];
}

declare function typedArrayByteOffset(value: typedArrayByteOffset.TypedArray): number;
declare function typedArrayByteOffset(value: unknown): false;

export = typedArrayByteOffset;
