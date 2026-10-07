import { parse, buildClientSchema, isSchema } from 'graphql';
import { isSchemaAst, isSchemaJson, isSchemaText, isWrappedSchemaJson, pick } from './helpers.js';
const identifiersToLookFor = ['default', 'schema', 'typeDefs', 'data'];
// Pick exports
/**
 * @internal
 */
export function pickExportFromModule({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModule(ensureExports({ module, filepath }));
}
/**
 * @internal
 */
export function pickExportFromModuleSync({ module, filepath }) {
    ensureModule({ module, filepath });
    return resolveModuleSync(ensureExports({ module, filepath }));
}
// module
async function resolveModule(identifiers) {
    const exportValue = await pick(await identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
function resolveModuleSync(identifiers) {
    const exportValue = pick(identifiers, identifiersToLookFor);
    return resolveExport(exportValue);
}
// validate
function ensureModule({ module, filepath }) {
    if (!module) {
        throw new Error(`Invalid export from export file ${filepath}: empty export!`);
    }
}
function ensureExports({ module, filepath }) {
    const identifiers = pick(module, identifiersToLookFor);
    if (!identifiers) {
        throw new Error(`Invalid export from export file ${filepath}: missing default export or 'schema' export!`);
    }
    return identifiers;
}
// Decide what to do with an exported value
function resolveExport(fileExport) {
    try {
        if (isSchema(fileExport)) {
            return fileExport;
        }
        if (isSchemaText(fileExport)) {
            return parse(fileExport);
        }
        if (isWrappedSchemaJson(fileExport)) {
            return buildClientSchema(fileExport.data);
        }
        if (isSchemaJson(fileExport)) {
            return buildClientSchema(fileExport);
        }
        if (isSchemaAst(fileExport)) {
            return fileExport;
        }
        return null;
    }
    catch (e) {
        throw new Error('Exported schema must be of type GraphQLSchema, text, AST, or introspection JSON.');
    }
}
