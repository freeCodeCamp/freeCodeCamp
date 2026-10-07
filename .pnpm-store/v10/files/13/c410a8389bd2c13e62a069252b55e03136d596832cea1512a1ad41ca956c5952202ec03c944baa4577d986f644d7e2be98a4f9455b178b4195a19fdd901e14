// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Check } from '../check/index.mjs';
import { Clone } from '../clone/index.mjs';
import { FromType } from './from_type.mjs';
export function FromUnion(context, type, value) {
    const matched = type.anyOf.some(type => Check(context, type, value));
    if (matched)
        return value;
    const candidates = type.anyOf.map(type => FromType(context, type, Clone(value)));
    const selected = candidates.find(value => Check(context, type, value));
    return Guard.IsUndefined(selected) ? value : selected;
}
