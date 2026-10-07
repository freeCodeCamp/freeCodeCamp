import { Value } from '../../../check/arbitrary/definition/Value.js';
export const UndefinedContextPlaceholder = Symbol('UndefinedContextPlaceholder');
export function noUndefinedAsContext(value) {
    if (value.context !== undefined) {
        return value;
    }
    if (value.hasToBeCloned) {
        return new Value(value.value_, UndefinedContextPlaceholder, () => value.value);
    }
    return new Value(value.value_, UndefinedContextPlaceholder);
}
