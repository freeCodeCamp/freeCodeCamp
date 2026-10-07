import type { ZodArray, ZodNullable, ZodObject, ZodOptional, ZodRawShape, ZodTuple, ZodTupleItems, ZodTypeAny } from "../types.cjs";
export declare namespace partialUtil {
    type DeepPartial<T extends ZodTypeAny> = T extends ZodObject<ZodRawShape> ? ZodObject<{
        [k in keyof T["shape"]]: ZodOptional<DeepPartial<T["shape"][k]>>;
    }, T["_def"]["unknownKeys"], T["_def"]["catchall"]> : T extends ZodArray<infer Type, infer Card> ? ZodArray<DeepPartial<Type>, Card> : T extends ZodOptional<infer Type> ? ZodOptional<DeepPartial<Type>> : T extends ZodNullable<infer Type> ? ZodNullable<DeepPartial<Type>> : T extends ZodTuple<infer Items> ? {
        [k in keyof Items]: Items[k] extends ZodTypeAny ? DeepPartial<Items[k]> : never;
    } extends infer PI ? PI extends ZodTupleItems ? ZodTuple<PI> : never : never : T;
}
