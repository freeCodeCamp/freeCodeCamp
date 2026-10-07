import { compareNodes } from '@graphql-tools/utils';
function alreadyExists(arr, other) {
    return !!arr.find(i => i.name.value === other.name.value);
}
export function mergeNamedTypeArray(first = [], second = [], config = {}) {
    const result = [...second, ...first.filter(d => !alreadyExists(second, d))];
    if (config && config.sort) {
        result.sort(compareNodes);
    }
    return result;
}
