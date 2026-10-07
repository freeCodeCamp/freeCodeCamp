declare function unboxPrimitive<T extends unboxPrimitive.Boxed>(value: T): unboxPrimitive.Unbox<T>;

declare namespace unboxPrimitive {
    type Boxed = String | Number | Boolean | Symbol | BigInt;
    type Unbox<T extends Boxed> = T extends String ? string
        : T extends Number ? number
        : T extends Boolean ? boolean
        : T extends Symbol ? symbol
        : T extends BigInt ? bigint
        : never;
}

export = unboxPrimitive;
