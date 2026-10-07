import type * as core from "./core.js";
import type { $ZodType } from "./schemas.js";
export declare const $output: unique symbol;
export type $output = typeof $output;
export declare const $input: unique symbol;
export type $input = typeof $input;
export type $replace<Meta, S extends $ZodType> = Meta extends $output ? core.output<S> : Meta extends $input ? core.input<S> : Meta extends (infer M)[] ? $replace<M, S>[] : Meta extends (...args: infer P) => infer R ? (...args: {
    [K in keyof P]: $replace<P[K], S>;
}) => $replace<R, S> : Meta extends object ? {
    [K in keyof Meta]: $replace<Meta[K], S>;
} : Meta;
type MetadataType = Record<string, unknown> | undefined;
export declare class $ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> {
    _meta: Meta;
    _schema: Schema;
    _map: Map<Schema, $replace<Meta, Schema>>;
    _idmap: Map<string, Schema>;
    add<S extends Schema>(schema: S, ..._meta: undefined extends Meta ? [$replace<Meta, S>?] : [$replace<Meta, S>]): this;
    clear(): this;
    remove(schema: Schema): this;
    get<S extends Schema>(schema: S): $replace<Meta, S> | undefined;
    has(schema: Schema): boolean;
}
export interface JSONSchemaMeta {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    deprecated?: boolean | undefined;
    [k: string]: unknown;
}
export interface GlobalMeta extends JSONSchemaMeta {
}
export declare function registry<T extends MetadataType = MetadataType, S extends $ZodType = $ZodType>(): $ZodRegistry<T, S>;
export declare const globalRegistry: $ZodRegistry<GlobalMeta>;
export {};
