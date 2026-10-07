// deno-fmt-ignore-file
import { IsDefault } from '../../schema/types/index.mjs';
import { Union } from '../../type/index.mjs';
import { Flatten } from '../../type/engine/evaluate/index.mjs';
import { Check } from '../check/index.mjs';
import { Clone } from '../clone/index.mjs';
import { Create } from '../create/index.mjs';
import { FromType } from './from_type.mjs';
import { UnionScoreSelect } from '../shared/union_score_select.mjs';
// ------------------------------------------------------------------
// RepairUnion
// ------------------------------------------------------------------
function RepairUnion(context, type, value) {
    const union = Union(Flatten(type.anyOf));
    const schema = UnionScoreSelect(context, union, value);
    return FromType(context, schema, value);
}
export function FromUnion(context, type, value) {
    if (Check(context, type, value))
        return Clone(value);
    if (IsDefault(type))
        return Create(context, type);
    return RepairUnion(context, type, value);
}
