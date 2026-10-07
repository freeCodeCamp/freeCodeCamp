import type * as JSONSchema from "./json-schema.cjs";
import { $ZodRegistry } from "./registries.cjs";
import type * as schemas from "./schemas.cjs";
interface JSONSchemaGeneratorParams {
    /** A registry used to look up metadata for each schema. Any schema with an `id` property will be extracted as a $def.
     *  @default globalRegistry */
    metadata?: $ZodRegistry<Record<string, any>>;
    /** The JSON Schema version to target.
     * - `"draft-2020-12"` — Default. JSON Schema Draft 2020-12
     * - `"draft-7"` — JSON Schema Draft 7 */
    target?: "draft-7" | "draft-2020-12";
    /** How to handle unrepresentable types.
     * - `"throw"` — Default. Unrepresentable types throw an error
     * - `"any"` — Unrepresentable types become `{}` */
    unrepresentable?: "throw" | "any";
    /** Arbitrary custom logic that can be used to modify the generated JSON Schema. */
    override?: (ctx: {
        zodSchema: schemas.$ZodTypes;
        jsonSchema: JSONSchema.BaseSchema;
        path: (string | number)[];
    }) => void;
    /** Whether to extract the `"input"` or `"output"` type. Relevant to transforms, Error converting schema to JSONz, defaults, coerced primitives, etc.
     * - `"output"` — Default. Convert the output schema.
     * - `"input"` — Convert the input schema. */
    io?: "input" | "output";
}
interface ProcessParams {
    schemaPath: schemas.$ZodType[];
    path: (string | number)[];
}
interface EmitParams {
    /** How to handle cycles.
     * - `"ref"` — Default. Cycles will be broken using $defs
     * - `"throw"` — Cycles will throw an error if encountered */
    cycles?: "ref" | "throw";
    reused?: "ref" | "inline";
    external?: {
        /**  */
        registry: $ZodRegistry<{
            id?: string | undefined;
        }>;
        uri?: ((id: string) => string) | undefined;
        defs: Record<string, JSONSchema.BaseSchema>;
    } | undefined;
}
interface Seen {
    /** JSON Schema result for this Zod schema */
    schema: JSONSchema.BaseSchema;
    /** A cached version of the schema that doesn't get overwritten during ref resolution */
    def?: JSONSchema.BaseSchema;
    defId?: string | undefined;
    /** Number of times this schema was encountered during traversal */
    count: number;
    /** Cycle path */
    cycle?: (string | number)[] | undefined;
    isParent?: boolean | undefined;
    ref?: schemas.$ZodType | undefined | null;
    /** JSON Schema property path for this schema */
    path?: (string | number)[] | undefined;
}
export declare class JSONSchemaGenerator {
    metadataRegistry: $ZodRegistry<Record<string, any>>;
    target: "draft-7" | "draft-2020-12";
    unrepresentable: "throw" | "any";
    override: (ctx: {
        zodSchema: schemas.$ZodTypes;
        jsonSchema: JSONSchema.BaseSchema;
        path: (string | number)[];
    }) => void;
    io: "input" | "output";
    counter: number;
    seen: Map<schemas.$ZodType, Seen>;
    constructor(params?: JSONSchemaGeneratorParams);
    process(schema: schemas.$ZodType, _params?: ProcessParams): JSONSchema.BaseSchema;
    emit(schema: schemas.$ZodType, _params?: EmitParams): JSONSchema.BaseSchema;
}
interface ToJSONSchemaParams extends Omit<JSONSchemaGeneratorParams & EmitParams, "external"> {
}
interface RegistryToJSONSchemaParams extends Omit<JSONSchemaGeneratorParams & EmitParams, "external"> {
    uri?: (id: string) => string;
}
export declare function toJSONSchema(schema: schemas.$ZodType, _params?: ToJSONSchemaParams): JSONSchema.BaseSchema;
export declare function toJSONSchema(registry: $ZodRegistry<{
    id?: string | undefined;
}>, _params?: RegistryToJSONSchemaParams): {
    schemas: Record<string, JSONSchema.BaseSchema>;
};
export {};
