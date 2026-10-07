"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSideBaseVisitor = exports.DocumentMode = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const optimize_1 = require("@graphql-tools/optimize");
const auto_bind_1 = tslib_1.__importDefault(require("auto-bind"));
const change_case_all_1 = require("change-case-all");
const dependency_graph_1 = require("dependency-graph");
const graphql_1 = require("graphql");
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
const base_visitor_js_1 = require("./base-visitor.js");
const imports_js_1 = require("./imports.js");
const utils_js_1 = require("./utils.js");
graphql_tag_1.default.enableExperimentalFragmentVariables();
var DocumentMode;
(function (DocumentMode) {
    DocumentMode["graphQLTag"] = "graphQLTag";
    DocumentMode["documentNode"] = "documentNode";
    DocumentMode["documentNodeImportFragments"] = "documentNodeImportFragments";
    DocumentMode["external"] = "external";
    DocumentMode["string"] = "string";
})(DocumentMode = exports.DocumentMode || (exports.DocumentMode = {}));
const EXTENSIONS_TO_REMOVE = ['.ts', '.tsx', '.js', '.jsx'];
class ClientSideBaseVisitor extends base_visitor_js_1.BaseVisitor {
    constructor(_schema, fragments, rawConfig, additionalConfig, documents) {
        super(rawConfig, {
            scalars: (0, utils_js_1.buildScalarsFromConfig)(_schema, rawConfig),
            dedupeOperationSuffix: (0, utils_js_1.getConfigValue)(rawConfig.dedupeOperationSuffix, false),
            optimizeDocumentNode: (0, utils_js_1.getConfigValue)(rawConfig.optimizeDocumentNode, true),
            omitOperationSuffix: (0, utils_js_1.getConfigValue)(rawConfig.omitOperationSuffix, false),
            gqlImport: rawConfig.gqlImport || null,
            documentNodeImport: rawConfig.documentNodeImport || null,
            noExport: !!rawConfig.noExport,
            importOperationTypesFrom: (0, utils_js_1.getConfigValue)(rawConfig.importOperationTypesFrom, null),
            operationResultSuffix: (0, utils_js_1.getConfigValue)(rawConfig.operationResultSuffix, ''),
            documentVariablePrefix: (0, utils_js_1.getConfigValue)(rawConfig.documentVariablePrefix, ''),
            documentVariableSuffix: (0, utils_js_1.getConfigValue)(rawConfig.documentVariableSuffix, 'Document'),
            fragmentVariablePrefix: (0, utils_js_1.getConfigValue)(rawConfig.fragmentVariablePrefix, ''),
            fragmentVariableSuffix: (0, utils_js_1.getConfigValue)(rawConfig.fragmentVariableSuffix, 'FragmentDoc'),
            documentMode: ((rawConfig) => {
                if (typeof rawConfig.noGraphQLTag === 'boolean') {
                    return rawConfig.noGraphQLTag ? DocumentMode.documentNode : DocumentMode.graphQLTag;
                }
                return (0, utils_js_1.getConfigValue)(rawConfig.documentMode, DocumentMode.graphQLTag);
            })(rawConfig),
            importDocumentNodeExternallyFrom: (0, utils_js_1.getConfigValue)(rawConfig.importDocumentNodeExternallyFrom, ''),
            pureMagicComment: (0, utils_js_1.getConfigValue)(rawConfig.pureMagicComment, false),
            experimentalFragmentVariables: (0, utils_js_1.getConfigValue)(rawConfig.experimentalFragmentVariables, false),
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
        (0, auto_bind_1.default)(this);
    }
    _extractFragments(document, withNested = false) {
        if (!document) {
            return [];
        }
        const names = new Set();
        (0, plugin_helpers_1.oldVisit)(document, {
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
                    .map(fragment => (0, graphql_1.print)(fragment.node))
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
        if (definitions.every(def => def.kind !== graphql_1.Kind.OPERATION_DEFINITION)) {
            return undefined;
        }
        const allDefinitions = [...definitions];
        for (const fragment of fragmentNames) {
            const fragmentRecord = this._fragments.get(fragment);
            if (fragmentRecord) {
                allDefinitions.push(fragmentRecord.node);
            }
        }
        const documentNode = { kind: graphql_1.Kind.DOCUMENT, definitions: allDefinitions };
        return this._onExecutableDocumentNode(documentNode);
    }
    _gql(node) {
        const includeNestedFragments = this.config.documentMode === DocumentMode.documentNode ||
            (this.config.dedupeFragments && node.kind === 'OperationDefinition');
        const fragmentNames = this._extractFragments(node, includeNestedFragments);
        const fragments = this._transformFragments(fragmentNames);
        const doc = this._prepareDocument(`
    ${(0, graphql_1.print)(node).split('\\').join('\\\\') /* Re-escape escaped values in GraphQL syntax */}
    ${this._includeFragments(fragments, node.kind)}`);
        if (this.config.documentMode === DocumentMode.documentNode) {
            let gqlObj = (0, graphql_tag_1.default)([doc]);
            if (this.config.optimizeDocumentNode) {
                gqlObj = (0, optimize_1.optimizeDocumentNode)(gqlObj);
            }
            return JSON.stringify(gqlObj);
        }
        if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
            let gqlObj = (0, graphql_tag_1.default)([doc]);
            if (this.config.optimizeDocumentNode) {
                gqlObj = (0, optimize_1.optimizeDocumentNode)(gqlObj);
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
                return `{${hashPropertyStr}"kind":"${graphql_1.Kind.DOCUMENT}", "definitions":[${definitions}]}`;
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
        const graph = new dependency_graph_1.DepGraph({ circular: true });
        for (const fragment of this._fragments.values()) {
            if (graph.hasNode(fragment.name)) {
                const cachedAsString = (0, graphql_1.print)(graph.getNodeData(fragment.name).node);
                const asString = (0, graphql_1.print)(fragment.node);
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
        const extension = (0, path_1.extname)(path);
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
                        let documentPath = `./${this.clearExtension((0, path_1.basename)(this._documents[0].location))}`;
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
                        this._imports.add((0, imports_js_1.generateFragmentImportStatement)(fragmentImport, 'document'));
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
        return variables.some(variableDef => variableDef.type.kind === graphql_1.Kind.NON_NULL_TYPE && !variableDef.defaultValue);
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
        const operationType = (0, change_case_all_1.pascalCase)(node.operation);
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
exports.ClientSideBaseVisitor = ClientSideBaseVisitor;
