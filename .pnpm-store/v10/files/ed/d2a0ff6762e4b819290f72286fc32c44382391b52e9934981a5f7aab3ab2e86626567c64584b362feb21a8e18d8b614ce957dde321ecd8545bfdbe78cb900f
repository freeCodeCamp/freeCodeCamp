type AllPossibleTypedArrays = typeof import('possible-typed-array-names');

declare function availableTypedArrays():
    | []
    | AllPossibleTypedArrays
    | Omit<AllPossibleTypedArrays, 'BigInt64Array' | 'BigUint64Array'>;

export = availableTypedArrays;
