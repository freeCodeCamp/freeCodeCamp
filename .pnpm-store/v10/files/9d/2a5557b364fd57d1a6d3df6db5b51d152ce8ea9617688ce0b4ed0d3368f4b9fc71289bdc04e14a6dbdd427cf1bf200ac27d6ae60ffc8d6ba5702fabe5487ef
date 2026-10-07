import { isComplexPluginOutput, federationSpec, getCachedDocumentNodeFromSchema, createNoopProfiler, } from '@graphql-codegen/plugin-helpers';
import { visit, Kind, print, specifiedRules } from 'graphql';
import { executePlugin } from './execute-plugin.js';
import { validateGraphQlDocuments, asArray } from '@graphql-tools/utils';
import { mergeSchemas } from '@graphql-tools/schema';
import { extractHashFromSchema, getSkipDocumentsValidationOption, hasFederationSpec, pickFlag, prioritize, shouldValidateDocumentsAgainstSchema, shouldValidateDuplicateDocuments, } from './utils.js';
export async function codegen(options) {
    var _a;
    const documents = options.documents || [];
    const profiler = (_a = options.profiler) !== null && _a !== void 0 ? _a : createNoopProfiler();
    const skipDocumentsValidation = getSkipDocumentsValidationOption(options);
    if (documents.length > 0 && shouldValidateDuplicateDocuments(skipDocumentsValidation)) {
        await profiler.run(async () => validateDuplicateDocuments(documents), 'validateDuplicateDocuments');
    }
    const pluginPackages = Object.keys(options.pluginMap).map(key => options.pluginMap[key]);
    // merged schema with parts added by plugins
    const additionalTypeDefs = [];
    for (const plugin of pluginPackages) {
        const addToSchema = typeof plugin.addToSchema === 'function' ? plugin.addToSchema(options.config) : plugin.addToSchema;
        if (addToSchema) {
            additionalTypeDefs.push(addToSchema);
        }
    }
    const federationInConfig = pickFlag('federation', options.config);
    const isFederation = prioritize(federationInConfig, false);
    if (isFederation && !hasFederationSpec(options.schemaAst || options.schema)) {
        additionalTypeDefs.push(federationSpec);
    }
    // Use mergeSchemas, only if there is no GraphQLSchema provided or the schema should be extended
    const mergeNeeded = !options.schemaAst || additionalTypeDefs.length > 0;
    const schemaInstance = await profiler.run(async () => {
        return mergeNeeded
            ? mergeSchemas({
                // If GraphQLSchema provided, use it
                schemas: options.schemaAst ? [options.schemaAst] : [],
                // If GraphQLSchema isn't provided but DocumentNode is, use it to get the final GraphQLSchema
                typeDefs: options.schemaAst ? additionalTypeDefs : [options.schema, ...additionalTypeDefs],
                convertExtensions: true,
                assumeValid: true,
                assumeValidSDL: true,
                ...options.config,
            })
            : options.schemaAst;
    }, 'Create schema instance');
    const schemaDocumentNode = mergeNeeded || !options.schema ? getCachedDocumentNodeFromSchema(schemaInstance) : options.schema;
    if (schemaInstance && documents.length > 0 && shouldValidateDocumentsAgainstSchema(skipDocumentsValidation)) {
        const ignored = ['NoUnusedFragments', 'NoUnusedVariables', 'KnownDirectives'];
        if (typeof skipDocumentsValidation === 'object' && skipDocumentsValidation.ignoreRules) {
            ignored.push(...asArray(skipDocumentsValidation.ignoreRules));
        }
        const extraFragments = pickFlag('externalFragments', options.config) || [];
        const errors = await profiler.run(() => {
            const fragments = extraFragments.map(f => ({
                location: f.importFrom,
                document: { kind: Kind.DOCUMENT, definitions: [f.node] },
            }));
            const rules = specifiedRules.filter(rule => !ignored.some(ignoredRule => rule.name.startsWith(ignoredRule)));
            const schemaHash = extractHashFromSchema(schemaInstance);
            if (!schemaHash || !options.cache || documents.some(d => typeof d.hash !== 'string')) {
                return Promise.resolve(validateGraphQlDocuments(schemaInstance, [...documents.flatMap(d => d.document), ...fragments.flatMap(f => f.document)], rules));
            }
            const cacheKey = [schemaHash]
                .concat(documents.map(doc => doc.hash))
                .concat(JSON.stringify(fragments))
                .join(',');
            return options.cache('documents-validation', cacheKey, () => Promise.resolve(validateGraphQlDocuments(schemaInstance, [...documents.flatMap(d => d.document), ...fragments.flatMap(f => f.document)], rules)));
        }, 'Validate documents against schema');
        if (errors.length > 0) {
            throw new Error(`GraphQL Document Validation failed with ${errors.length} errors;
  ${errors.map((error, index) => `Error ${index}: ${error.stack}`).join('\n\n')}`);
        }
    }
    const prepend = new Set();
    const append = new Set();
    const output = await Promise.all(options.plugins.map(async (plugin) => {
        const name = Object.keys(plugin)[0];
        const pluginPackage = options.pluginMap[name];
        const pluginConfig = plugin[name] || {};
        const execConfig = typeof pluginConfig !== 'object'
            ? pluginConfig
            : {
                ...options.config,
                ...pluginConfig,
            };
        const result = await profiler.run(() => executePlugin({
            name,
            config: execConfig,
            parentConfig: options.config,
            schema: schemaDocumentNode,
            schemaAst: schemaInstance,
            documents: options.documents,
            outputFilename: options.filename,
            allPlugins: options.plugins,
            skipDocumentsValidation: options.skipDocumentsValidation,
            pluginContext: options.pluginContext,
            profiler,
        }, pluginPackage), `Plugin ${name}`);
        if (typeof result === 'string') {
            return result || '';
        }
        if (isComplexPluginOutput(result)) {
            if (result.append && result.append.length > 0) {
                for (const item of result.append) {
                    if (item) {
                        append.add(item);
                    }
                }
            }
            if (result.prepend && result.prepend.length > 0) {
                for (const item of result.prepend) {
                    if (item) {
                        prepend.add(item);
                    }
                }
            }
            return result.content || '';
        }
        return '';
    }));
    return [...sortPrependValues(Array.from(prepend.values())), ...output, ...Array.from(append.values())]
        .filter(Boolean)
        .join('\n');
}
function resolveCompareValue(a) {
    if (a.startsWith('/*') || a.startsWith('//') || a.startsWith(' *') || a.startsWith(' */') || a.startsWith('*/')) {
        return 0;
    }
    if (a.startsWith('package')) {
        return 1;
    }
    if (a.startsWith('import')) {
        return 2;
    }
    return 3;
}
export function sortPrependValues(values) {
    return values.sort((a, b) => {
        const aV = resolveCompareValue(a);
        const bV = resolveCompareValue(b);
        if (aV < bV) {
            return -1;
        }
        if (aV > bV) {
            return 1;
        }
        return 0;
    });
}
function validateDuplicateDocuments(files) {
    // duplicated names
    const definitionMap = {};
    function addDefinition(file, node, deduplicatedDefinitions) {
        if (typeof node.name !== 'undefined') {
            if (!definitionMap[node.kind]) {
                definitionMap[node.kind] = {};
            }
            if (!definitionMap[node.kind][node.name.value]) {
                definitionMap[node.kind][node.name.value] = {
                    paths: new Set(),
                    contents: new Set(),
                };
            }
            const definitionKindMap = definitionMap[node.kind];
            const length = definitionKindMap[node.name.value].contents.size;
            definitionKindMap[node.name.value].paths.add(file.location);
            definitionKindMap[node.name.value].contents.add(print(node));
            if (length === definitionKindMap[node.name.value].contents.size) {
                return null;
            }
        }
        return deduplicatedDefinitions.add(node);
    }
    files.forEach(file => {
        const deduplicatedDefinitions = new Set();
        visit(file.document, {
            OperationDefinition(node) {
                addDefinition(file, node, deduplicatedDefinitions);
            },
            FragmentDefinition(node) {
                addDefinition(file, node, deduplicatedDefinitions);
            },
        });
        file.document.definitions = Array.from(deduplicatedDefinitions);
    });
    const kinds = Object.keys(definitionMap);
    kinds.forEach(kind => {
        const definitionKindMap = definitionMap[kind];
        const names = Object.keys(definitionKindMap);
        if (names.length) {
            const duplicated = names.filter(name => definitionKindMap[name].contents.size > 1);
            if (!duplicated.length) {
                return;
            }
            const list = duplicated
                .map(name => `
        * ${name} found in:
          ${[...definitionKindMap[name].paths]
                .map(filepath => {
                return `
              - ${filepath}
            `.trimRight();
            })
                .join('')}
    `.trimRight())
                .join('');
            const definitionKindName = kind.replace('Definition', '').toLowerCase();
            throw new Error(`Not all ${definitionKindName}s have an unique name: ${duplicated.join(', ')}: \n
          ${list}
        `);
        }
    });
}
