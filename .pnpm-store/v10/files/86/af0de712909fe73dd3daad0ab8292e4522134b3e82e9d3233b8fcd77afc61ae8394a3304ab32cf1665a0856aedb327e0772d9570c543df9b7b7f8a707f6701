// deno-fmt-ignore-file
import { IsLiteral, IsObject, IsRef } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { Check } from '../check/index.mjs';
// ------------------------------------------------------------------
// Deref
// ------------------------------------------------------------------
function Deref(context, type, value) {
    return IsRef(type)
        ? Guard.HasPropertyKey(context, type.$ref)
            ? Deref(context, context[type.$ref], value)
            : (() => { throw new Error('Unable to Deref target'); })()
        : type;
}
// ------------------------------------------------------------------
// The following will score a schema against a value. For objects,
// the score is the tally of points awarded for each property of
// the value. Property points are (1.0 / propertyCount) to prevent
// large property counts biasing results. Properties that match
// literal values are maximally awarded as literals are typically
// used as union discriminator fields.
// ------------------------------------------------------------------
function ScoreVariant(context, type, value) {
    // scoring is only possible for object types.
    if (!(IsObject(type) && Guard.IsObject(value)))
        return 0;
    const keys = Guard.Keys(value);
    const entries = Guard.Entries(type.properties);
    return entries.reduce((result, [key, schema]) => {
        const literal = IsLiteral(schema) && Guard.IsEqual(schema.const, value[key]) ? 100 : 0;
        const checks = Check(context, schema, value[key]) ? 10 : 0;
        const exists = keys.includes(key) ? 1 : 0;
        return result + (literal + checks + exists);
    }, 0);
}
// ------------------------------------------------------------------
// UnionScoreSelect
// ------------------------------------------------------------------
/** Scores Union variants and returns the best match for the given value */
export function UnionScoreSelect(context, type, value) {
    const schemas = type.anyOf.map((schema) => Deref(context, schema, value));
    let [select, best] = [schemas[0], 0];
    for (const schema of schemas) {
        const score = ScoreVariant(context, schema, value);
        if (score > best) {
            select = schema;
            best = score;
        }
    }
    return select;
}
