// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Memory } from '../../../system/memory/index.mjs';
// ------------------------------------------------------------------
// Module: Instantiation Infrastructure
// ------------------------------------------------------------------
import { CyclicCandidates } from '../cyclic/candidates.mjs';
import { InstantiateCyclic } from '../cyclic/instantiate.mjs';
import { InstantiateType } from '../instantiate.mjs';
function InstantiateCyclics(context, cyclicKeys) {
    const keys = Guard.Keys(context).filter(key => cyclicKeys.includes(key));
    return keys.reduce((result, key) => {
        return { ...result, [key]: InstantiateCyclic(context, key, context[key]) };
    }, {});
}
function InstantiateNonCyclics(context, cyclicKeys) {
    const keys = Guard.Keys(context).filter(key => !cyclicKeys.includes(key));
    return keys.reduce((result, key) => {
        return { ...result, [key]: InstantiateType(context, { callstack: [] }, context[key]) };
    }, {});
}
function InstantiateModule(context, options) {
    const cyclicCandidates = CyclicCandidates(context);
    const instantiatedCyclics = InstantiateCyclics(context, cyclicCandidates);
    const instantiatedNonCyclics = InstantiateNonCyclics(context, cyclicCandidates);
    const instantiatedModule = { ...instantiatedCyclics, ...instantiatedNonCyclics };
    return Memory.Update(instantiatedModule, {}, options);
}
export function ModuleInstantiate(context, _state, properties, options) {
    const moduleContext = Memory.Assign(context, properties);
    const instantiatedModule = InstantiateModule(moduleContext, options);
    return instantiatedModule;
}
