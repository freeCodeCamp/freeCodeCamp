"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDocumentsVisitor = void 0;
const tslib_1 = require("tslib");
const auto_bind_1 = tslib_1.__importDefault(require("auto-bind"));
const change_case_all_1 = require("change-case-all");
const base_visitor_js_1 = require("./base-visitor.js");
const scalars_js_1 = require("./scalars.js");
const utils_js_1 = require("./utils.js");
const variables_to_object_js_1 = require("./variables-to-object.js");
function getRootType(operation, schema) {
    switch (operation) {
        case 'query':
            return schema.getQueryType();
        case 'mutation':
            return schema.getMutationType();
        case 'subscription':
            return schema.getSubscriptionType();
    }
    throw new Error(`Unknown operation type: ${operation}`);
}
class BaseDocumentsVisitor extends base_visitor_js_1.BaseVisitor {
    constructor(rawConfig, additionalConfig, _schema, defaultScalars = scalars_js_1.DEFAULT_SCALARS) {
        super(rawConfig, {
            exportFragmentSpreadSubTypes: (0, utils_js_1.getConfigValue)(rawConfig.exportFragmentSpreadSubTypes, false),
            enumPrefix: (0, utils_js_1.getConfigValue)(rawConfig.enumPrefix, true),
            preResolveTypes: (0, utils_js_1.getConfigValue)(rawConfig.preResolveTypes, true),
            dedupeOperationSuffix: (0, utils_js_1.getConfigValue)(rawConfig.dedupeOperationSuffix, false),
            omitOperationSuffix: (0, utils_js_1.getConfigValue)(rawConfig.omitOperationSuffix, false),
            skipTypeNameForRoot: (0, utils_js_1.getConfigValue)(rawConfig.skipTypeNameForRoot, false),
            namespacedImportName: (0, utils_js_1.getConfigValue)(rawConfig.namespacedImportName, null),
            experimentalFragmentVariables: (0, utils_js_1.getConfigValue)(rawConfig.experimentalFragmentVariables, false),
            addTypename: !rawConfig.skipTypename,
            globalNamespace: !!rawConfig.globalNamespace,
            operationResultSuffix: (0, utils_js_1.getConfigValue)(rawConfig.operationResultSuffix, ''),
            scalars: (0, utils_js_1.buildScalarsFromConfig)(_schema, rawConfig, defaultScalars),
            ...(additionalConfig || {}),
        });
        this._schema = _schema;
        this._unnamedCounter = 1;
        this._globalDeclarations = new Set();
        (0, auto_bind_1.default)(this);
        this._variablesTransfomer = new variables_to_object_js_1.OperationVariablesToObject(this.scalars, this.convertName, this.config.namespacedImportName);
    }
    getGlobalDeclarations(noExport = false) {
        return Array.from(this._globalDeclarations).map(t => (noExport ? t : `export ${t}`));
    }
    setSelectionSetHandler(handler) {
        this._selectionSetToObject = handler;
    }
    setDeclarationBlockConfig(config) {
        this._declarationBlockConfig = config;
    }
    setVariablesTransformer(variablesTransfomer) {
        this._variablesTransfomer = variablesTransfomer;
    }
    get schema() {
        return this._schema;
    }
    get addTypename() {
        return this._parsedConfig.addTypename;
    }
    handleAnonymousOperation(node) {
        var _a;
        const name = (_a = node.name) === null || _a === void 0 ? void 0 : _a.value;
        if (name) {
            return this.convertName(name, {
                useTypesPrefix: false,
                useTypesSuffix: false,
            });
        }
        return this.convertName(String(this._unnamedCounter++), {
            prefix: 'Unnamed_',
            suffix: '_',
            useTypesPrefix: false,
            useTypesSuffix: false,
        });
    }
    FragmentDefinition(node) {
        const fragmentRootType = this._schema.getType(node.typeCondition.name.value);
        const selectionSet = this._selectionSetToObject.createNext(fragmentRootType, node.selectionSet);
        const fragmentSuffix = this.getFragmentSuffix(node);
        return [
            selectionSet.transformFragmentSelectionSetToTypes(node.name.value, fragmentSuffix, this._declarationBlockConfig),
            this.config.experimentalFragmentVariables
                ? new utils_js_1.DeclarationBlock({
                    ...this._declarationBlockConfig,
                    blockTransformer: t => this.applyVariablesWrapper(t),
                })
                    .export()
                    .asKind('type')
                    .withName(this.convertName(node.name.value, {
                    suffix: fragmentSuffix + 'Variables',
                }))
                    .withBlock(this._variablesTransfomer.transform(node.variableDefinitions)).string
                : undefined,
        ]
            .filter(r => r)
            .join('\n\n');
    }
    applyVariablesWrapper(variablesBlock) {
        return variablesBlock;
    }
    OperationDefinition(node) {
        const name = this.handleAnonymousOperation(node);
        const operationRootType = getRootType(node.operation, this._schema);
        if (!operationRootType) {
            throw new Error(`Unable to find root schema type for operation type "${node.operation}"!`);
        }
        const selectionSet = this._selectionSetToObject.createNext(operationRootType, node.selectionSet);
        const visitedOperationVariables = this._variablesTransfomer.transform(node.variableDefinitions);
        const operationType = (0, change_case_all_1.pascalCase)(node.operation);
        const operationTypeSuffix = this.getOperationSuffix(name, operationType);
        const operationResult = new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind('type')
            .withName(this.convertName(name, {
            suffix: operationTypeSuffix + this._parsedConfig.operationResultSuffix,
        }))
            .withContent(selectionSet.transformSelectionSet()).string;
        const operationVariables = new utils_js_1.DeclarationBlock({
            ...this._declarationBlockConfig,
            blockTransformer: t => this.applyVariablesWrapper(t),
        })
            .export()
            .asKind('type')
            .withName(this.convertName(name, {
            suffix: operationTypeSuffix + 'Variables',
        }))
            .withBlock(visitedOperationVariables).string;
        return [operationVariables, operationResult].filter(r => r).join('\n\n');
    }
}
exports.BaseDocumentsVisitor = BaseDocumentsVisitor;
