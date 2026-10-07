// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchemaPushStack, CheckSchemaPushStack, ErrorSchemaPushStack } from './schema.mjs';
import { InexactOptionalCheck, InexactOptionalBuild, IsExactOptional } from './_exact_optional.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildProperties(stack, context, schema, value) {
    const required = Schema.IsRequired(schema) ? schema.required : [];
    const everyKey = G.Entries(schema.properties).map(([key, schema]) => {
        const notKey = E.Not(E.HasPropertyKey(value, E.Constant(key)));
        const isSchema = BuildSchemaPushStack(stack, context, schema, E.Member(value, key));
        const addKey = context.AddKey(E.Constant(key));
        const guarded = context.UseUnevaluated() ? E.And(isSchema, addKey) : isSchema;
        // --------------------------------------------------------------
        // Optimization
        //
        // If a key is required, we can skip the `notKey` check since this
        // condition is already enforced by Required. This optimization is
        // only valid when Required is evaluated before Properties.
        //
        // --------------------------------------------------------------
        const isProperty = required.includes(key) ? guarded : E.Or(notKey, guarded);
        // --------------------------------------------------------------
        // ExactOptionalProperties
        //
        // By default, TypeScript allows optional properties to be assigned
        // undefined. This is a bit misleading, since 'optional' is usually
        // understood to mean 'the key may be absent', not 'the key may be
        // present with an undefined value'.
        //
        // The 'IsExactOptional' check returns false by default, matching
        // TypeScript's behavior. When exactOptionalPropertyTypes is enabled
        // in tsconfig.json, TypeBox can be configured to use the stricter 
        // semantics via System settings:
        //
        //   Settings.Set({ exactOptionalPropertyTypes: true })
        //
        // --------------------------------------------------------------
        return IsExactOptional(required, key)
            ? isProperty
            : E.Or(InexactOptionalBuild(value, key), isProperty);
    });
    return E.ReduceAnd(everyKey);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckProperties(stack, context, schema, value) {
    const required = Schema.IsRequired(schema) ? schema.required : [];
    const isProperties = G.Every(G.Entries(schema.properties), 0, ([key, schema]) => {
        const isProperty = !G.HasPropertyKey(value, key) || (CheckSchemaPushStack(stack, context, schema, value[key]) && context.AddKey(key));
        return IsExactOptional(required, key)
            ? isProperty
            : InexactOptionalCheck(value, key) || isProperty;
    });
    return isProperties;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorProperties(stack, context, schemaPath, instancePath, schema, value) {
    const required = Schema.IsRequired(schema) ? schema.required : [];
    const isProperties = G.EveryAll(G.Entries(schema.properties), 0, ([key, schema]) => {
        const nextSchemaPath = `${schemaPath}/properties/${key}`;
        const nextInstancePath = `${instancePath}/${key}`;
        // Defer error generation for IsExactOptional
        const isProperty = () => (!G.HasPropertyKey(value, key) || (ErrorSchemaPushStack(stack, context, nextSchemaPath, nextInstancePath, schema, value[key]) && context.AddKey(key)));
        return IsExactOptional(required, key)
            ? isProperty()
            : InexactOptionalCheck(value, key) || isProperty();
    });
    return isProperties;
}
