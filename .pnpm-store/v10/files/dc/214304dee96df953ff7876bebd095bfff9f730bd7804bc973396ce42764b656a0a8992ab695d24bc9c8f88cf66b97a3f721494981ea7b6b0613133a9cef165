"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArguments = void 0;
const utils_1 = require("@graphql-tools/utils");
function mergeArguments(args1, args2, config) {
    const result = deduplicateArguments([...args2, ...args1].filter(utils_1.isSome), config);
    if (config && config.sort) {
        result.sort(utils_1.compareNodes);
    }
    return result;
}
exports.mergeArguments = mergeArguments;
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
