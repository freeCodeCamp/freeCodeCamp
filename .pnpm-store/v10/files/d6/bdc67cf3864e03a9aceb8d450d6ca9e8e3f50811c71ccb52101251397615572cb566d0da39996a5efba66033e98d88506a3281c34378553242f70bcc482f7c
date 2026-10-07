"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForResolveTypeResolver = void 0;
const utils_1 = require("@graphql-tools/utils");
// If we have any union or interface types throw if no there is no resolveType resolver
function checkForResolveTypeResolver(schema, requireResolversForResolveType) {
    (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.ABSTRACT_TYPE]: type => {
            if (!type.resolveType) {
                const message = `Type "${type.name}" is missing a "__resolveType" resolver. Pass 'ignore' into ` +
                    '"resolverValidationOptions.requireResolversForResolveType" to disable this error.';
                if (requireResolversForResolveType === 'error') {
                    throw new Error(message);
                }
                if (requireResolversForResolveType === 'warn') {
                    console.warn(message);
                }
            }
            return undefined;
        },
    });
}
exports.checkForResolveTypeResolver = checkForResolveTypeResolver;
