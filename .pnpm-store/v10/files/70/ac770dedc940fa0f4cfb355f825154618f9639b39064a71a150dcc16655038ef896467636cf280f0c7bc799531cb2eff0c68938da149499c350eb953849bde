// deno-fmt-ignore-file
import { IsMaxItems, IsMinItems, IsUniqueItems } from '../../schema/types/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { Check } from '../check/index.mjs';
import { Create } from '../create/index.mjs';
import { Hash } from '../hash/index.mjs';
import { FromType } from './from_type.mjs';
import { RepairError } from './error.mjs';
// ------------------------------------------------------------------
// MakeUnique
// ------------------------------------------------------------------
function MakeUnique(values) {
    const [hashes, result] = [new Set(), []];
    for (const value of values) {
        const hash = Hash(value);
        if (hashes.has(hash))
            continue;
        hashes.add(hash);
        result.push(value);
    }
    return result;
}
// ------------------------------------------------------------------
// FromArray
// ------------------------------------------------------------------
export function FromArray(context, type, value) {
    if (Check(context, type, value))
        return value;
    const created = Guard.IsArray(value) ? value : Create(context, type);
    const minimum = IsMinItems(type) && created.length < type.minItems ? [...created, ...Array.from({ length: type.minItems - created.length }, () => Create(context, type))] : created;
    const maximum = IsMaxItems(type) && minimum.length > type.maxItems ? minimum.slice(0, type.maxItems) : minimum;
    const repaired = maximum.map((value) => FromType(context, type.items, value));
    if (!IsUniqueItems(type) || (IsUniqueItems(type) && !Guard.IsEqual(type.uniqueItems, true)))
        return repaired;
    const unique = MakeUnique(repaired);
    if (!Check(context, type, unique))
        throw new RepairError(context, type, value, 'Failed to repair Array due to uniqueItems constraint');
    return unique;
}
