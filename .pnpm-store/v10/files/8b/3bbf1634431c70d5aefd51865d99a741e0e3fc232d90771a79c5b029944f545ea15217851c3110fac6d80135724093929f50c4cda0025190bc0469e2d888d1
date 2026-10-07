"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickExportFromModuleSync = exports.pickExportFromModule = void 0;
const graphql_1 = require("graphql");
const helpers_js_1 = require("./helpers.js");
const identifiersToLookFor = ['default', 'schema', 'typeDefs', 'data'];
// Pick exports
/**
 * @internal
 */
function pickExportFromModule({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModule(ensureExports({ module, filepath }));
}
exports.pickExportFromModule = pickExportFromModule;
/**
 * @internal
 */
function pickExportFromModuleSync({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModuleSync(ensureExports({ module, filepath }));
}
exports.pickExportFromModuleSync = pickExportFromModuleSync;
// module
async function resolveModule(identifiers) {
    const exportValue = await (0, helpers_js_1.pick)(await identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
function resolveModuleSync(identifiers) {
    const exportValue = (0, helpers_js_1.pick)(identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
// validate
function ensureModule({ module, filepath }) {
    if (!module) {
        throw new Error(`Invalid export from export file ${filepath}: empty export!`);
    }
}
function ensureExports({ module, filepath }) {
    const identifiers = (0, helpers_js_1.pick)(module, identifiersToLookFor);
    if (!identifiers) {
        throw new Error(`Invalid export from export file ${filepath}: missing default export or 'schema' export!`);
    }
    return identifiers;
}
// Decide what to do with an exported value
function resolveExport(fileExport) {
    try {
        if ((0, graphql_1.isSchema)(fileExport)) {
            return fileExport;
        }
        if ((0, helpers_js_1.isSchemaText)(fileExport)) {
            return (0, graphql_1.parse)(fileExport);
        }
        if ((0, helpers_js_1.isWrappedSchemaJson)(fileExport)) {
            return (0, graphql_1.buildClientSchema)(fileExport.data);
        }
        if ((0, helpers_js_1.isSchemaJson)(fileExport)) {
            return (0, graphql_1.buildClientSchema)(fileExport);
        }
        if ((0, helpers_js_1.isSchemaAst)(fileExport)) {
            return fileExport;
        }
        return null;
    }
    catch (e) {
        throw new Error('Exported schema must be of type GraphQLSchema, text, AST, or introspection JSON.');
    }
}
