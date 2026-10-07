import whichBoxedPrimitive from 'which-boxed-primitive';
import whichCollection from 'which-collection';
import whichTypedArray from 'which-typed-array';

type AsyncFunction<T = unknown> = (...args: unknown[]) => Promise<T>;

declare function whichBuiltinType<T>(value: Parameters<typeof whichCollection>[0]): ReturnType<typeof whichCollection>;
declare function whichBuiltinType<T>(value: Parameters<typeof whichTypedArray>[0]): ReturnType<typeof whichTypedArray>;
declare function whichBuiltinType<T>(value: ReadonlyArray<T>): 'Array';
declare function whichBuiltinType<T>(value: Date): 'Date';
declare function whichBuiltinType<T>(value: RegExp): 'RegExp';
declare function whichBuiltinType<T>(value: T extends object ? WeakRef<T> : never): 'WeakRef';
declare function whichBuiltinType<T>(value: FinalizationRegistry<T>): 'FinalizationRegistry';
declare function whichBuiltinType<T>(value: GeneratorFunction): 'GeneratorFunction';
declare function whichBuiltinType<T>(value: AsyncFunction<T>): 'AsyncFunction';
declare function whichBuiltinType<T>(value: Function): 'Function';
declare function whichBuiltinType<T>(value: Promise<T>): 'Promise';

declare function whichBuiltinType<T>(value: T): 'Object' | Exclude<ReturnType<typeof whichBoxedPrimitive>, null | undefined> | string;

export = whichBuiltinType;
