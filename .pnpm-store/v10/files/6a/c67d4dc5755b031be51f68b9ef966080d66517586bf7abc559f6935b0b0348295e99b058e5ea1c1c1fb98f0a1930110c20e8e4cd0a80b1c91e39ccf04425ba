import { mergeDeep } from '@graphql-tools/utils';
/**
 * Deep merges multiple resolver definition objects into a single definition.
 * @param resolversDefinitions Resolver definitions to be merged
 * @param options Additional options
 *
 * ```js
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const clientResolver = require('./clientResolver');
 * const productResolver = require('./productResolver');
 *
 * const resolvers = mergeResolvers([
 *  clientResolver,
 *  productResolver,
 * ]);
 * ```
 *
 * If you don't want to manually create the array of resolver objects, you can
 * also use this function along with loadFiles:
 *
 * ```js
 * const path = require('path');
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const { loadFilesSync } = require('@graphql-tools/load-files');
 *
 * const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));
 *
 * const resolvers = mergeResolvers(resolversArray)
 * ```
 */
export function mergeResolvers(resolversDefinitions, options) {
    if (!resolversDefinitions || (Array.isArray(resolversDefinitions) && resolversDefinitions.length === 0)) {
        return {};
    }
    if (!Array.isArray(resolversDefinitions)) {
        return resolversDefinitions;
    }
    if (resolversDefinitions.length === 1) {
        return resolversDefinitions[0] || {};
    }
    const resolvers = new Array();
    for (let resolversDefinition of resolversDefinitions) {
        if (Array.isArray(resolversDefinition)) {
            resolversDefinition = mergeResolvers(resolversDefinition);
        }
        if (typeof resolversDefinition === 'object' && resolversDefinition) {
            resolvers.push(resolversDefinition);
        }
    }
    const result = mergeDeep(resolvers, true);
    if (options === null || options === void 0 ? void 0 : options.exclusions) {
        for (const exclusion of options.exclusions) {
            const [typeName, fieldName] = exclusion.split('.');
            if (!fieldName || fieldName === '*') {
                delete result[typeName];
            }
            else if (result[typeName]) {
                delete result[typeName][fieldName];
            }
        }
    }
    return result;
}
