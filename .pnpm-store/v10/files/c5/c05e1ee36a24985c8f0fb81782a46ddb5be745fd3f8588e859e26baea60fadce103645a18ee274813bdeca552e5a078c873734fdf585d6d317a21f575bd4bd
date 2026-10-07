// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// TypeName
// ------------------------------------------------------------------
function BuildTypeName(_stack, _context, type, value) {
    return (
    // jsonschema
    G.IsEqual(type, 'object') ? E.IsObjectNotArray(value) :
        G.IsEqual(type, 'array') ? E.IsArray(value) :
            G.IsEqual(type, 'boolean') ? E.IsBoolean(value) :
                G.IsEqual(type, 'integer') ? E.IsInteger(value) :
                    G.IsEqual(type, 'number') ? E.IsNumber(value) :
                        G.IsEqual(type, 'null') ? E.IsNull(value) :
                            G.IsEqual(type, 'string') ? E.IsString(value) :
                                // xschema
                                G.IsEqual(type, 'asyncIterator') ? E.IsAsyncIterator(value) :
                                    G.IsEqual(type, 'bigint') ? E.IsBigInt(value) :
                                        G.IsEqual(type, 'constructor') ? E.IsConstructor(value) :
                                            G.IsEqual(type, 'function') ? E.IsFunction(value) :
                                                G.IsEqual(type, 'iterator') ? E.IsIterator(value) :
                                                    G.IsEqual(type, 'symbol') ? E.IsSymbol(value) :
                                                        G.IsEqual(type, 'undefined') ? E.IsUndefined(value) :
                                                            G.IsEqual(type, 'void') ? E.IsUndefined(value) :
                                                                E.Constant(true));
}
function CheckTypeName(_stack, _context, type, _schema, value) {
    return (
    // jsonschema
    G.IsEqual(type, 'object') ? G.IsObjectNotArray(value) :
        G.IsEqual(type, 'array') ? G.IsArray(value) :
            G.IsEqual(type, 'boolean') ? G.IsBoolean(value) :
                G.IsEqual(type, 'integer') ? G.IsInteger(value) :
                    G.IsEqual(type, 'number') ? G.IsNumber(value) :
                        G.IsEqual(type, 'null') ? G.IsNull(value) :
                            G.IsEqual(type, 'string') ? G.IsString(value) :
                                // xschema
                                G.IsEqual(type, 'asyncIterator') ? G.IsAsyncIterator(value) :
                                    G.IsEqual(type, 'bigint') ? G.IsBigInt(value) :
                                        G.IsEqual(type, 'constructor') ? G.IsConstructor(value) :
                                            G.IsEqual(type, 'function') ? G.IsFunction(value) :
                                                G.IsEqual(type, 'iterator') ? G.IsIterator(value) :
                                                    G.IsEqual(type, 'symbol') ? G.IsSymbol(value) :
                                                        G.IsEqual(type, 'undefined') ? G.IsUndefined(value) :
                                                            G.IsEqual(type, 'void') ? G.IsUndefined(value) :
                                                                true);
}
// ------------------------------------------------------------------
// TypeNames
// ------------------------------------------------------------------
function BuildTypeNames(stack, context, typenames, value) {
    return E.ReduceOr(typenames.map(type => BuildTypeName(stack, context, type, value)));
}
function CheckTypeNames(stack, context, types, schema, value) {
    return types.some(type => CheckTypeName(stack, context, type, schema, value));
}
// ------------------------------------------------------------------
// Type
// ------------------------------------------------------------------
export function BuildType(stack, context, schema, value) {
    return G.IsArray(schema.type) ? BuildTypeNames(stack, context, schema.type, value) : BuildTypeName(stack, context, schema.type, value);
}
export function CheckType(stack, context, schema, value) {
    return G.IsArray(schema.type) ? CheckTypeNames(stack, context, schema.type, schema, value) : CheckTypeName(stack, context, schema.type, schema, value);
}
export function ErrorType(stack, context, schemaPath, instancePath, schema, value) {
    const isType = G.IsArray(schema.type) ? CheckTypeNames(stack, context, schema.type, schema, value) : CheckTypeName(stack, context, schema.type, schema, value);
    return isType || context.AddError({
        keyword: 'type',
        schemaPath,
        instancePath,
        params: { type: schema.type }
    });
}
