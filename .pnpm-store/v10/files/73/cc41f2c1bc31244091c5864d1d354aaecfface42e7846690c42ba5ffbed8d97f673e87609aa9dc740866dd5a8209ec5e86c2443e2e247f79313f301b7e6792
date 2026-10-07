import * as Engine from './engine/index.mjs';
import * as Schema from './types/index.mjs';
export type CheckFunction = (value: unknown) => boolean;
export interface EvaluateResult {
    IsAccelerated: boolean;
    Code: string;
    Check: CheckFunction;
}
export declare class BuildResult {
    private readonly context;
    private readonly schema;
    private readonly external;
    private readonly functions;
    private readonly call;
    private readonly useUnevaluated;
    constructor(context: Record<PropertyKey, Schema.XSchema>, schema: Schema.XSchema, external: Engine.TExternal, functions: string[], call: string, useUnevaluated: boolean);
    /** Returns the Context used for this build */
    Context(): Record<PropertyKey, Schema.XSchema>;
    /** Returns the Schema used for this build */
    Schema(): Schema.XSchema;
    /** Returns true if this build requires a Unevaluated context */
    UseUnevaluated(): boolean;
    /** Returns external variables */
    External(): Engine.TExternal;
    /** Returns check functions */
    Functions(): string[];
    /** Return entry function call. */
    Call(): string;
    /** Evaluates the build into a validation function */
    Evaluate(): EvaluateResult;
}
/** Builds a schema into a optimized runtime validator */
export declare function Build(schema: Schema.XSchema): BuildResult;
/** Builds a schema into a optimized runtime validator */
export declare function Build(context: Record<PropertyKey, Schema.XSchema>, schema: Schema.XSchema): BuildResult;
