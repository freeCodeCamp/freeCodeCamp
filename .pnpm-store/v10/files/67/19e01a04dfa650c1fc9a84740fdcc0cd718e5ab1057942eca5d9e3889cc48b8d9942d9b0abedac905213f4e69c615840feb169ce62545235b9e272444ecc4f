// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import { Environment } from '../system/environment/index.mjs';
import { Hashing } from '../system/hashing/index.mjs';
import { Guard } from '../guard/index.mjs';
import { Format } from '../format/index.mjs';
import * as Engine from './engine/index.mjs';
// ------------------------------------------------------------------
// CreateCode
// ------------------------------------------------------------------
function CreateCode(build) {
    const functions = build.Functions().join(';\n');
    const statements = build.UseUnevaluated()
        ? ['const context = new CheckContext({}, {})', `return ${build.Call()}`]
        : [`return ${build.Call()}`];
    return `${functions}; return (value) => { ${statements.join('; ')} }`;
}
// ------------------------------------------------------------------
// CreateEvaluatedCheck
// ------------------------------------------------------------------
function CreateEvaluatedCheck(build, code) {
    const factory = Environment.Evaluate('CheckContext', 'Guard', 'Format', 'Hashing', build.External().identifier, code);
    return factory(Engine.CheckContext, Guard, Format, Hashing, build.External().variables);
}
// ------------------------------------------------------------------
// CreateDynamicCheck
// ------------------------------------------------------------------
function CreateDynamicCheck(build) {
    const stack = new Engine.Stack(build.Context(), build.Schema());
    const context = new Engine.CheckContext();
    return (value) => Engine.CheckSchema(stack, context, build.Schema(), value);
}
// ------------------------------------------------------------------
// CreateCheck
// ------------------------------------------------------------------
function CreateCheck(build, code) {
    return Environment.CanEvaluate()
        ? CreateEvaluatedCheck(build, code)
        : CreateDynamicCheck(build);
}
// ------------------------------------------------------------------
// BuildResult
// ------------------------------------------------------------------
export class BuildResult {
    constructor(context, schema, external, functions, call, useUnevaluated) {
        this.context = context;
        this.schema = schema;
        this.external = external;
        this.functions = functions;
        this.call = call;
        this.useUnevaluated = useUnevaluated;
    }
    /** Returns the Context used for this build */
    Context() {
        return this.context;
    }
    /** Returns the Schema used for this build */
    Schema() {
        return this.schema;
    }
    /** Returns true if this build requires a Unevaluated context */
    UseUnevaluated() {
        return this.useUnevaluated;
    }
    /** Returns external variables */
    External() {
        return this.external;
    }
    /** Returns check functions */
    Functions() {
        return this.functions;
    }
    /** Return entry function call. */
    Call() {
        return this.call;
    }
    /** Evaluates the build into a validation function */
    Evaluate() {
        const Code = CreateCode(this);
        const Check = CreateCheck(this, Code);
        return { IsAccelerated: Environment.CanEvaluate(), Code, Check };
    }
}
/** Builds a schema into a optimized runtime validator */
export function Build(...args) {
    const [context, schema] = Arguments.Match(args, {
        2: (context, schema) => [context, schema],
        1: (schema) => [{}, schema]
    });
    Engine.ResetExternal();
    Engine.ResetFunctions();
    const stack = new Engine.Stack(context, schema);
    const build = new Engine.BuildContext(Engine.HasUnevaluated(context, schema));
    const call = Engine.CreateFunction(stack, build, schema, 'value');
    const functions = Engine.GetFunctions();
    const externals = Engine.GetExternal();
    return new BuildResult(context, schema, externals, functions, call, build.UseUnevaluated());
}
