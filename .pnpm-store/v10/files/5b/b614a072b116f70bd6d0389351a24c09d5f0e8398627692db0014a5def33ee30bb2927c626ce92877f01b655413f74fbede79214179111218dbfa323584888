import { type StaticDirection, type StaticType } from './static.mjs';
import { type TSchema } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticCodec<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Type extends TSchema, Decoded extends unknown> = (Direction extends 'Decode' ? Decoded : StaticType<Stack, Direction, Context, This, Omit<Type, '~codec'>>);
export type TDecodeCallback<Type extends TSchema, Decoded = unknown> = (input: StaticType<[], 'Decode', {}, {}, Type>) => Decoded;
export type TEncodeCallback<Type extends TSchema, Decoded = unknown> = (input: Decoded) => StaticType<[], 'Decode', {}, {}, Type>;
export type TCodec<Type extends TSchema = TSchema, Decoded extends unknown = unknown> = Type & {
    '~codec': {
        encode: TDecodeCallback<Type, Decoded>;
        decode: TEncodeCallback<Type, Decoded>;
    };
};
export declare class EncodeBuilder<Type extends TSchema, Decoded extends unknown> {
    private readonly type;
    private readonly decode;
    constructor(type: Type, decode: globalThis.Function);
    Encode<Callback extends TEncodeCallback<Type, Decoded>>(callback: Callback): TCodec<Type, Decoded>;
}
export declare class DecodeBuilder<Type extends TSchema> {
    private readonly type;
    constructor(type: Type);
    Decode<Callback extends TDecodeCallback<Type>>(callback: Callback): EncodeBuilder<Type, ReturnType<Callback>>;
}
/** Creates a bi-directional Codec. Codec functions are called on Value.Decode and Value.Encode. */
export declare function Codec<Type extends TSchema>(type: Type): DecodeBuilder<Type>;
/** Createsa  uni-directional Codec with Decode only. The Decode function is called on Value.Decode */
export declare function Decode<Type extends TSchema, Callback extends TDecodeCallback<Type>>(type: Type, callback: Callback): TCodec<Type, ReturnType<Callback>>;
/** Creates a uni-directional Codec with Encode only. The Encode function is called on Value.Encode */
export declare function Encode<Type extends TSchema, Callback extends TEncodeCallback<Type, unknown>>(type: Type, callback: Callback): TCodec<Type, unknown>;
export declare function IsCodec(value: unknown): value is TCodec;
