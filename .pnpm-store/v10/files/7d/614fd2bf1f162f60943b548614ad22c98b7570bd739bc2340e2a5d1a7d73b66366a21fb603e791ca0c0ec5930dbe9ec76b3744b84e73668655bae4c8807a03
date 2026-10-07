// deno-fmt-ignore-file
import { Settings } from '../system/settings/index.mjs';
import { Arguments } from '../system/arguments/index.mjs';
import { Environment } from '../system/environment/index.mjs';
import { Base } from '../type/index.mjs';
import { Errors, Clean, Convert, Create, Default, Decode, Encode, HasCodec, Parser, ParseError } from '../value/index.mjs';
import { Build } from '../schema/index.mjs';
// ------------------------------------------------------------------
// Validator<...>
// ------------------------------------------------------------------
export class Validator extends Base {
    /** Constructs a Validator. */
    constructor(...args) {
        super();
        const matched = Arguments.Match(args, {
            6: (context, type, isEvalulated, hasCodec, code, check) => [context, type, isEvalulated, hasCodec, code, check],
            2: (context, type) => [context, type]
        });
        if (matched.length === 6) {
            const [context, type, isEvaluated, hasCodec, code, check] = matched;
            this.context = context;
            this.type = type;
            this.isAccelerated = isEvaluated;
            this.hasCodec = hasCodec;
            this.code = code;
            this.check = check;
        }
        else {
            const [context, type] = matched;
            const result = Build(context, type).Evaluate();
            this.hasCodec = HasCodec(context, type);
            this.context = context;
            this.type = type;
            this.isAccelerated = result.IsAccelerated;
            this.code = result.Code;
            this.check = result.Check;
        }
    }
    // ----------------------------------------------------------------
    // IsAccelerated
    // ----------------------------------------------------------------
    /** Returns true if this Validator is using JIT acceleration. */
    IsAccelerated() {
        return this.isAccelerated;
    }
    // ----------------------------------------------------------------
    // Context | Type
    // ----------------------------------------------------------------
    /** Returns the Context for this validator. */
    Context() {
        return this.context;
    }
    /** Returns the underlying Type used to construct this Validator. */
    Type() {
        return this.type;
    }
    // ----------------------------------------------------------------
    // Code
    // ----------------------------------------------------------------
    /** Returns the generated code for this validator. */
    Code() {
        return this.code;
    }
    // ----------------------------------------------------------------
    // Base<...>
    // ----------------------------------------------------------------
    /** Performs a type-guard check on the provided value. */
    Check(value) {
        return this.check(value);
    }
    /** Inspects a value and returns a detailed list of validation errors. */
    Errors(value) {
        if (Environment.CanEvaluate() && this.check(value))
            return [];
        return Errors(this.context, this.type, value);
    }
    /** Cleans a value using the Validator type. */
    Clean(value) {
        return Clean(this.context, this.type, value);
    }
    /** Converts a value using the Validator type. */
    Convert(value) {
        return Convert(this.context, this.type, value);
    }
    /** Creates a value using the Validator type. */
    Create() {
        return Create(this.context, this.type);
    }
    /** Creates defaults using the Validator type. */
    Default(value) {
        return Default(this.context, this.type, value);
    }
    /** Clones this validator. */
    Clone() {
        return new Validator(this.context, this.type, this.isAccelerated, this.hasCodec, this.code, this.check);
    }
    /** Validates a value and returns it. Will throw if invalid. */
    Parse(value) {
        const checked = this.Check(value);
        if (checked)
            return value;
        if (Settings.Get().correctiveParse)
            return Parser(this.context, this.type, value);
        throw new ParseError(value, this.Errors(value));
    }
    /** Decodes a value */
    Decode(value) {
        const result = this.hasCodec ? Decode(this.context, this.type, value) : this.Parse(value);
        return result;
    }
    /** Encodes a value */
    Encode(value) {
        const result = this.hasCodec ? Encode(this.context, this.type, value) : this.Parse(value);
        return result;
    }
}
