import type names from 'possible-typed-array-names';

declare function typedArrayLength(value: typedArrayLength.TypedArray): number;
declare function typedArrayLength(value: unknown): false;

declare namespace typedArrayLength {
	type TypedArray =
		| Int8Array
		| Uint8Array
		| Uint8ClampedArray
		| Int16Array
		| Uint16Array
		| Int32Array
		| Uint32Array
		| Float32Array
		| Float64Array
		| BigInt64Array
		| BigUint64Array;

	type TypedArrayName = typeof names[number];
}

export = typedArrayLength;
