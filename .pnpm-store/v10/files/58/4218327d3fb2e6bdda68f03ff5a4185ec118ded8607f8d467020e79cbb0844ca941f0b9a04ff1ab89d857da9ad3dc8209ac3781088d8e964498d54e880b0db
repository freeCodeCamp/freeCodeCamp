import type * as core from "./core.js";
import type { $ZodType } from "./schemas.js";

export const $output: unique symbol = Symbol("ZodOutput");
export type $output = typeof $output;
export const $input: unique symbol = Symbol("ZodInput");
export type $input = typeof $input;

export type $replace<Meta, S extends $ZodType> = Meta extends $output
  ? core.output<S>
  : Meta extends $input
    ? core.input<S>
    : Meta extends (infer M)[]
      ? $replace<M, S>[]
      : Meta extends (...args: infer P) => infer R
        ? (
            ...args: {
              [K in keyof P]: $replace<P[K], S>; // tuple
            }
          ) => $replace<R, S>
        : // handle objects
          Meta extends object
          ? { [K in keyof Meta]: $replace<Meta[K], S> }
          : Meta;

type MetadataType = Record<string, unknown> | undefined;
export class $ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> {
  _meta!: Meta;
  _schema!: Schema;
  _map: Map<Schema, $replace<Meta, Schema>> = new Map();
  _idmap: Map<string, Schema> = new Map();

  add<S extends Schema>(
    schema: S,
    ..._meta: undefined extends Meta ? [$replace<Meta, S>?] : [$replace<Meta, S>]
  ): this {
    const meta: any = _meta[0];
    this._map.set(schema, meta!);
    if (meta && typeof meta === "object" && "id" in meta) {
      if (this._idmap.has(meta.id!)) {
        throw new Error(`ID ${meta.id} already exists in the registry`);
      }
      this._idmap.set(meta.id!, schema);
    }
    return this as any;
  }

  clear(): this {
    this._map = new Map();
    this._idmap = new Map();
    return this;
  }

  remove(schema: Schema): this {
    const meta: any = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id!);
    }
    this._map.delete(schema);
    return this;
  }

  get<S extends Schema>(schema: S): $replace<Meta, S> | undefined {
    // return this._map.get(schema) as any;

    // inherit metadata
    const p = schema._zod.parent as Schema;
    if (p) {
      const pm: any = { ...(this.get(p) ?? {}) };
      delete pm.id; // do not inherit id
      return { ...pm, ...this._map.get(schema) } as any;
    }
    return this._map.get(schema) as any;
  }

  has(schema: Schema): boolean {
    return this._map.has(schema);
  }
}

export interface JSONSchemaMeta {
  id?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  deprecated?: boolean | undefined;
  [k: string]: unknown;
}

export interface GlobalMeta extends JSONSchemaMeta {}

// registries
export function registry<T extends MetadataType = MetadataType, S extends $ZodType = $ZodType>(): $ZodRegistry<T, S> {
  return new $ZodRegistry<T, S>();
}

export const globalRegistry: $ZodRegistry<GlobalMeta> = /*@__PURE__*/ registry<GlobalMeta>();
