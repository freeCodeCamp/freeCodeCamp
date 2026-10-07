// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { TemplateLiteralDeferred } from '../../types/template_literal.mjs';
import { TemplateLiteralEncode } from './encode.mjs';
import { InstantiateTypes, CanInstantiate } from '../instantiate.mjs';
export function TemplateLiteralAction(types, options) {
    const result = CanInstantiate(types)
        ? Memory.Update(TemplateLiteralEncode(types), {}, options)
        : TemplateLiteralDeferred(types, options);
    return result;
}
export function TemplateLiteralInstantiate(context, state, types, options) {
    const instantiatedTypes = InstantiateTypes(context, state, types);
    return TemplateLiteralAction(instantiatedTypes, options);
}
