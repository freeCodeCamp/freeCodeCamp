type primitive = string | number | bigint | boolean | symbol | null | undefined;

declare function whichBoxedPrimitive(value: primitive): null;
declare function whichBoxedPrimitive(value: BigInt): 'BigInt';
declare function whichBoxedPrimitive(value: Boolean): 'Boolean';
declare function whichBoxedPrimitive(value: Number): 'Number';
declare function whichBoxedPrimitive(value: String): 'String';
declare function whichBoxedPrimitive(value: Symbol): 'Symbol';
declare function whichBoxedPrimitive(value: unknown): undefined;

export = whichBoxedPrimitive;
