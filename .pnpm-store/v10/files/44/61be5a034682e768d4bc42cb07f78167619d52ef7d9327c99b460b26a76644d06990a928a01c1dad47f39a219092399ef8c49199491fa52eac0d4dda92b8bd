import { dictionary } from './dictionary.js';
import { anyArbitraryBuilder } from './_internals/builders/AnyArbitraryBuilder.js';
import { toQualifiedObjectConstraints } from './_internals/helpers/QualifiedObjectConstraints.js';
function objectInternal(constraints) {
    return dictionary(constraints.key, anyArbitraryBuilder(constraints), {
        maxKeys: constraints.maxKeys,
        noNullPrototype: !constraints.withNullPrototype,
        size: constraints.size,
    });
}
function object(constraints) {
    return objectInternal(toQualifiedObjectConstraints(constraints));
}
export { object };
