import { compareNodes, isSome } from '@graphql-tools/utils';
export function mergeArguments(args1, args2, config) {
    const result = deduplicateArguments([...args2, ...args1].filter(isSome), config);
    if (config && config.sort) {
        result.sort(compareNodes);
    }
    return result;
}
function deduplicateArguments(args, config) {
    return args.reduce((acc, current) => {
        const dupIndex = acc.findIndex(arg => arg.name.value === current.name.value);
        if (dupIndex === -1) {
            return acc.concat([current]);
        }
        else if (!(config === null || config === void 0 ? void 0 : config.reverseArguments)) {
            acc[dupIndex] = current;
        }
        return acc;
    }, []);
}
