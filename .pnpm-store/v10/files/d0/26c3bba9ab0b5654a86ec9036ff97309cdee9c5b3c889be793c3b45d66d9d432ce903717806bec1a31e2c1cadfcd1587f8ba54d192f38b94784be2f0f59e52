import { type TLocalizedValidationError } from '../error/index.mjs';
import { type StaticDecode, type StaticEncode, type TProperties, type TSchema, Base } from '../type/index.mjs';
export declare class Validator<Context extends TProperties = TProperties, Type extends TSchema = TSchema, Encode extends unknown = StaticEncode<Type, Context>, Decode extends unknown = StaticDecode<Type, Context>> extends Base<Encode> {
    private readonly context;
    private readonly type;
    private readonly isAccelerated;
    private readonly hasCodec;
    private readonly code;
    private readonly check;
    /** Constructs a Validator with the given Context and Type. */
    constructor(context: Context, type: Type);
    /** Constructs a Validator with the given arguments. */
    constructor(context: Context, type: Type, isEvaluated: boolean, hasCodec: boolean, code: string, check: (value: unknown) => boolean);
    /** Returns true if this Validator is using JIT acceleration. */
    IsAccelerated(): boolean;
    /** Returns the Context for this validator. */
    Context(): Context;
    /** Returns the underlying Type used to construct this Validator. */
    Type(): Type;
    /** Returns the generated code for this validator. */
    Code(): string;
    /** Performs a type-guard check on the provided value. */
    Check(value: unknown): value is Encode;
    /** Inspects a value and returns a detailed list of validation errors. */
    Errors(value: unknown): TLocalizedValidationError[];
    /** Cleans a value using the Validator type. */
    Clean(value: unknown): unknown;
    /** Converts a value using the Validator type. */
    Convert(value: unknown): unknown;
    /** Creates a value using the Validator type. */
    Create(): Encode;
    /** Creates defaults using the Validator type. */
    Default(value: unknown): unknown;
    /** Clones this validator. */
    Clone(): Validator<Context, Type>;
    /** Validates a value and returns it. Will throw if invalid. */
    Parse(value: unknown): Encode;
    /** Decodes a value */
    Decode(value: unknown): Decode;
    /** Encodes a value */
    Encode(value: unknown): Encode;
}
