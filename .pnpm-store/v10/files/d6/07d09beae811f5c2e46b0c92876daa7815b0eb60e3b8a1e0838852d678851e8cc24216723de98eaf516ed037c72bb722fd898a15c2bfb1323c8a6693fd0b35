import { basename, extname } from 'path';
import { oldVisit } from '@graphql-codegen/plugin-helpers';
import { optimizeDocumentNode } from '@graphql-tools/optimize';
import autoBind from 'auto-bind';
import { pascalCase } from 'change-case-all';
import { DepGraph } from 'dependency-graph';
import { Kind, print, } from 'graphql';
import gqlTag from 'graphql-tag';
import { BaseVisitor } from './base-visitor.js';
import { generateFragmentImportStatement } from './imports.js';
import { buildScalarsFromConfig, getConfigValue } from './utils.js';
gqlTag.enableExperimentalFragmentVariables();
export var DocumentMode;
(function (DocumentMode) {
    DocumentMode["graphQLTag"] = "graphQLTag";
    DocumentMode["documentNode"] = "documentNode";
    DocumentMode["documentNodeImportFragments"] = "documentNodeImportFragments";
    DocumentMode["external"] = "external";
    DocumentMode["string"] = "string";
})(DocumentMode || (DocumentMode = {}));
const EXTENSIONS_TO_REMOVE = ['.ts', '.tsx', '.js', '.jsx'];
export class ClientSideBaseVisitor extends BaseVisitor {
    constructor(_schema, fragments, rawConfig, additionalConfig, documents) {
        super(rawConfig, {
            scalars: buildScalarsFromConfig(_schema, rawConfig),
            dedupeOperationSuffix: getConfigValue(rawConfig.dedupeOperationSuffix, false),
            optimizeDocumentNode: getConfigValue(rawConfig.optimizeDocumentNode, true),
            omitOperationSuffix: getConfigValue(rawConfig.omitOperationSuffix, false),
            gqlImport: rawConfig.gqlImport || null,
            documentNodeImport: rawConfig.documentNodeImport || null,
            noExport: !!rawConfig.noExport,
            importOperationTypesFrom: getConfigValue(rawConfig.importOperationTypesFrom, null),
            operationResultSuffix: getConfigValue(rawConfig.operationResultSuffix, ''),
            documentVariablePrefix: getConfigValue(rawConfig.documentVariablePrefix, ''),
            documentVariableSuffix: getConfigValue(rawConfig.documentVariableSuffix, 'Document'),
            fragmentVariablePrefix: getConfigValue(rawConfig.fragmentVariablePrefix, ''),
            fragmentVariableSuffix: getConfigValue(rawConfig.fragmentVariableSuffix, 'FragmentDoc'),
            documentMode: ((rawConfig) => {
                if (typeof rawConfig.noGraphQLTag === 'boolean') {
                    return rawConfig.noGraphQLTag ? DocumentMode.documentNode : DocumentMode.graphQLTag;
                }
                return getConfigValue(rawConfig.documentMode, DocumentMode.graphQLTag);
            })(rawConfig),
            importDocumentNodeExternallyFrom: getConfigValue(rawConfig.importDocumentNodeExternallyFrom, ''),
            pureMagicComment: getConfigValue(rawConfig.pureMagicComment, false),
            experimentalFragmentVariables: getConfigValue(rawConfig.experimentalFragmentVariables, false),
            ...additionalConfig,
        });
        this._schema = _schema;
        this._collectedOperations = [];
        this._documents = [];
        this._additionalImports = [];
        this._imports = new Set();
        this._documents = documents;
        this._onExecutableDocumentNode = rawConfig.unstable_onExecutableDocumentNode;
        this._omitDefinitions = rawConfig.unstable_omitDefinitions;
        this._fragments = new Map(fragments.map(fragment => [fragment.name, fragment]));
        autoBind(this);
    }
    _extractFragments(document, withNested = false) {
        if (!document) {
            return [];
        }
        const names = new Set();
        oldVisit(document, {
            enter: {
                FragmentSpread: (node) => {
                    names.add(node.name.value);
                    if (withNested) {
                        const foundFragment = this._fragments.get(node.name.value);
                        if (foundFragment) {
                            const childItems = this._extractFragments(foundFragment.node, true);
                            if (childItems && childItems.length > 0) {
                                for (const item of childItems) {
                                    names.add(item);
                                }
                            }
                        }
                    }
                },
            },
        });
        return Array.from(names);
    }
    _transformFragments(fragmentNames) {
        return fragmentNames.map(document => this.getFragmentVariableName(document));
    }
    _includeFragments(fragments, nodeKind) {
        if (fragments && fragments.length > 0) {
            if (this.config.documentMode === DocumentMode.documentNode) {
                return Array.from(this._fragments.values())
                    .filter(f => fragments.includes(this.getFragmentVariableName(f.name)))
                    .map(fragment => print(fragment.node))
                    .join('\n');
            }
            if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
                return '';
            }
            if (this.config.dedupeFragments && nodeKind !== 'OperationDefinition') {
                return '';
            }
            return String(fragments.map(name => '${' + name + '}').join('\n'));
        }
        return '';
    }
    _prepareDocument(documentStr) {
        return documentStr;
    }
    _generateDocumentNodeMeta(definitions, fragmentNames) {
        // If the document does not contain any executable operation, we don't need to hash it
        if (definitions.every(def => def.kind !== Kind.OPERATION_DEFINITION)) {
            return undefined;
        }
        const allDefinitions = [...definitions];
        for (const fragment of fragmentNames) {
            const fragmentRecord = this._fragments.get(fragment);
            if (fragmentRecord) {
                allDefinitions.push(fragmentRecord.node);
            }
        }
        const documentNode = { kind: Kind.DOCUMENT, definitions: allDefinitions };
        return this._onExecutableDocumentNode(documentNode);
    }
    _gql(node) {
        const includeNestedFragments = this.config.documentMode === DocumentMode.documentNode ||
            (this.config.dedupeFragments && node.kind === 'OperationDefinition');
        const fragmentNames = this._extractFragments(node, includeNestedFragments);
        const fragments = this._transformFragments(fragmentNames);
        const doc = this._prepareDocument(`
    ${print(node).split('\\').join('\\\\') /* Re-escape escaped values in GraphQL syntax */}
    ${this._includeFragments(fragments, node.kind)}`);
        if (this.config.documentMode === DocumentMode.documentNode) {
            let gqlObj = gqlTag([doc]);
            if (this.config.optimizeDocumentNode) {
                gqlObj = optimizeDocumentNode(gqlObj);
            }
            return JSON.stringify(gqlObj);
        }
        if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
            let gqlObj = gqlTag([doc]);
            if (this.config.optimizeDocumentNode) {
                gqlObj = optimizeDocumentNode(gqlObj);
            }
            if (fragments.length > 0 && (!this.config.dedupeFragments || node.kind === 'OperationDefinition')) {
                const definitions = [
                    ...gqlObj.definitions.map(t => JSON.stringify(t)),
                    ...fragments.map(name => `...${name}.definitions`),
                ].join();
                let hashPropertyStr = '';
                if (this._onExecutableDocumentNode) {
                    const meta = this._generateDocumentNodeMeta(gqlObj.definitions, fragmentNames);
                    if (meta) {
                        hashPropertyStr = `"__meta__": ${JSON.stringify(meta)}, `;
                        if (this._omitDefinitions === true) {
                            return `{${hashPropertyStr}}`;
                        }
                    }
                }
                return `{${hashPropertyStr}"kind":"${Kind.DOCUMENT}", "definitions":[${definitions}]}`;
            }
            let meta;
            if (this._onExecutableDocumentNode) {
                meta = this._generateDocumentNodeMeta(gqlObj.definitions, fragmentNames);
                const metaNodePartial = { ['__meta__']: meta };
                if (this._omitDefinitions === true) {
                    return JSON.stringify(metaNodePartial);
                }
                if (meta) {
                    return JSON.stringify({ ...metaNodePartial, ...gqlObj });
                }
            }
            return JSON.stringify(gqlObj);
        }
        if (this.config.documentMode === DocumentMode.string) {
            return '`' + doc + '`';
        }
        const gqlImport = this._parseImport(this.config.gqlImport || 'graphql-tag');
        return (gqlImport.propName || 'gql') + '`' + doc + '`';
    }
    _generateFragment(fragmentDocument) {
        const name = this.getFragmentVariableName(fragmentDocument);
        const fragmentTypeSuffix = this.getFragmentSuffix(fragmentDocument);
        return `export const ${name} =${this.config.pureMagicComment ? ' /*#__PURE__*/' : ''} ${this._gql(fragmentDocument)}${this.getDocumentNodeSignature(this.convertName(fragmentDocument.name.value, {
            useTypesPrefix: true,
            suffix: fragmentTypeSuffix,
        }), this.config.experimentalFragmentVariables
            ? this.convertName(fragmentDocument.name.value, {
                suffix: fragmentTypeSuffix + 'Variables',
            })
            : 'unknown', fragmentDocument)};`;
    }
    get fragmentsGraph() {
        const graph = new DepGraph({ circular: true });
        for (const fragment of this._fragments.values()) {
            if (graph.hasNode(fragment.name)) {
                const cachedAsString = print(graph.getNodeData(fragment.name).node);
                const asString = print(fragment.node);
                if (cachedAsString !== asString) {
                    throw new Error(`Duplicated fragment called '${fragment.name}'!`);
                }
            }
            graph.addNode(fragment.name, fragment);
        }
        this._fragments.forEach(fragment => {
            const depends = this._extractFragments(fragment.node);
            if (depends && depends.length > 0) {
                depends.forEach(name => {
                    graph.addDependency(fragment.name, name);
                });
            }
        });
        return graph;
    }
    get fragments() {
        if (this._fragments.size === 0 || this.config.documentMode === DocumentMode.external) {
            return '';
        }
        const graph = this.fragmentsGraph;
        const orderedDeps = graph.overallOrder();
        const localFragments = orderedDeps
            .filter(name => !graph.getNodeData(name).isExternal)
            .map(name => this._generateFragment(graph.getNodeData(name).node));
        return localFragments.join('\n');
    }
    _parseImport(importStr) {
        // This is a special case when we want to ignore importing, and just use `gql` provided from somewhere else
        // Plugins that uses that will need to ensure to add import/declaration for the gql identifier
        if (importStr === 'gql') {
            return {
                moduleName: null,
                propName: 'gql',
            };
        }
        // This is a special use case, when we don't want this plugin to manage the import statement
        // of the gql tag. In this case, we provide something like `Namespace.gql` and it will be used instead.
        if (importStr.includes('.gql')) {
            return {
                moduleName: null,
                propName: importStr,
            };
        }
        const [moduleName, propName] = importStr.split('#');
        return {
            moduleName,
            propName,
        };
    }
    _generateImport({ moduleName, propName }, varName, isTypeImport) {
        const typeImport = isTypeImport && this.config.useTypeImports ? 'import type' : 'import';
        const propAlias = propName === varName ? '' : ` as ${varName}`;
        if (moduleName) {
            return `${typeImport} ${propName ? `{ ${propName}${propAlias} }` : varName} from '${moduleName}';`;
        }
        return null;
    }
    clearExtension(path) {
        const extension = extname(path);
        if (EXTENSIONS_TO_REMOVE.includes(extension)) {
            return path.replace(/\.[^/.]+$/, '');
        }
        return path;
    }
    getImports(options = {}) {
        (this._additionalImports || []).forEach(i => this._imports.add(i));
        switch (this.config.documentMode) {
            case DocumentMode.documentNode:
            case DocumentMode.documentNodeImportFragments: {
                const documentNodeImport = this._parseImport(this.config.documentNodeImport || 'graphql#DocumentNode');
                const tagImport = this._generateImport(documentNodeImport, 'DocumentNode', true);
                if (tagImport) {
                    this._imports.add(tagImport);
                }
                break;
            }
            case DocumentMode.graphQLTag: {
                const gqlImport = this._parseImport(this.config.gqlImport || 'graphql-tag');
                const tagImport = this._generateImport(gqlImport, 'gql', false);
                if (tagImport) {
                    this._imports.add(tagImport);
                }
                break;
            }
            case DocumentMode.external: {
                if (this._collectedOperations.length > 0) {
                    if (this.config.importDocumentNodeExternallyFrom === 'near-operation-file' && this._documents.length === 1) {
                        let documentPath = `./${this.clearExtension(basename(this._documents[0].location))}`;
                        if (!this.config.emitLegacyCommonJSImports) {
                            documentPath += '.js';
                        }
                        this._imports.add(`import * as Operations from '${documentPath}';`);
                    }
                    else {
                        if (!this.config.importDocumentNodeExternallyFrom) {
                            // eslint-disable-next-line no-console
                            console.warn('importDocumentNodeExternallyFrom must be provided if documentMode=external');
                        }
                        this._imports.add(`import * as Operations from '${this.clearExtension(this.config.importDocumentNodeExternallyFrom)}';`);
                    }
                }
                break;
            }
            default:
                break;
        }
        if (!options.excludeFragments && !this.config.globalNamespace) {
            const { documentMode, fragmentImports } = this.config;
            if (documentMode === DocumentMode.graphQLTag ||
                documentMode === DocumentMode.string ||
                documentMode === DocumentMode.documentNodeImportFragments) {
                // keep track of what imports we've already generated so we don't try
                // to import the same identifier twice
                const alreadyImported = new Map();
                const deduplicatedImports = fragmentImports
                    .map(fragmentImport => {
                    const { path, identifiers } = fragmentImport.importSource;
                    if (!alreadyImported.has(path)) {
                        alreadyImported.set(path, new Set());
                    }
                    const alreadyImportedForPath = alreadyImported.get(path);
                    const newIdentifiers = identifiers.filter(identifier => !alreadyImportedForPath.has(identifier.name));
                    newIdentifiers.forEach(newIdentifier => alreadyImportedForPath.add(newIdentifier.name));
                    // filter the set of identifiers in this fragment import to only
                    // the ones we haven't already imported from this path
                    return {
                        ...fragmentImport,
                        importSource: {
                            ...fragmentImport.importSource,
                            identifiers: newIdentifiers,
                        },
                        emitLegacyCommonJSImports: this.config.emitLegacyCommonJSImports,
                    };
                })
                    // remove any imports that now have no identifiers in them
                    .filter(fragmentImport => fragmentImport.importSource.identifiers.length > 0);
                deduplicatedImports.forEach(fragmentImport => {
                    if (fragmentImport.outputPath !== fragmentImport.importSource.path) {
                        this._imports.add(generateFragmentImportStatement(fragmentImport, 'document'));
                    }
                });
            }
        }
        return Array.from(this._imports);
    }
    buildOperation(_node, _documentVariableName, _operationType, _operationResultType, _operationVariablesTypes, _hasRequiredVariables) {
        return null;
    }
    getDocumentNodeSignature(_resultType, _variablesTypes, _node) {
        if (this.config.documentMode === DocumentMode.documentNode ||
            this.config.documentMode === DocumentMode.documentNodeImportFragments) {
            return ` as unknown as DocumentNode`;
        }
        return '';
    }
    /**
     * Checks if the specific operation has variables that are non-null (required), and also doesn't have default.
     * This is useful for deciding of `variables` should be optional or not.
     * @param node
     */
    checkVariablesRequirements(node) {
        const variables = node.variableDefinitions || [];
        if (variables.length === 0) {
            return false;
        }
        return variables.some(variableDef => variableDef.type.kind === Kind.NON_NULL_TYPE && !variableDef.defaultValue);
    }
    getOperationVariableName(node) {
        return this.convertName(node, {
            suffix: this.config.documentVariableSuffix,
            prefix: this.config.documentVariablePrefix,
            useTypesPrefix: false,
        });
    }
    OperationDefinition(node) {
        this._collectedOperations.push(node);
        const documentVariableName = this.getOperationVariableName(node);
        const operationType = pascalCase(node.operation);
        const operationTypeSuffix = this.getOperationSuffix(node, operationType);
        const operationResultType = this.convertName(node, {
            suffix: operationTypeSuffix + this._parsedConfig.operationResultSuffix,
        });
        const operationVariablesTypes = this.convertName(node, {
            suffix: operationTypeSuffix + 'Variables',
        });
        let documentString = '';
        if (this.config.documentMode !== DocumentMode.external &&
            documentVariableName !== '' // only generate exports for named queries
        ) {
            documentString = `${this.config.noExport ? '' : 'export'} const ${documentVariableName} =${this.config.pureMagicComment ? ' /*#__PURE__*/' : ''} ${this._gql(node)}${this.getDocumentNodeSignature(operationResultType, operationVariablesTypes, node)};`;
        }
        const hasRequiredVariables = this.checkVariablesRequirements(node);
        const additional = this.buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables);
        return [documentString, additional].filter(a => a).join('\n');
    }
}
