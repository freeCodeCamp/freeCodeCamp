"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptDocumentsVisitor = void 0;
const tslib_1 = require("tslib");
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const auto_bind_1 = tslib_1.__importDefault(require("auto-bind"));
const graphql_1 = require("graphql");
const ts_operation_variables_to_object_js_1 = require("./ts-operation-variables-to-object.js");
const ts_selection_set_processor_js_1 = require("./ts-selection-set-processor.js");
class TypeScriptDocumentsVisitor extends visitor_plugin_common_1.BaseDocumentsVisitor {
    constructor(schema, config, allFragments) {
        super(config, {
            arrayInputCoercion: (0, visitor_plugin_common_1.getConfigValue)(config.arrayInputCoercion, true),
            noExport: (0, visitor_plugin_common_1.getConfigValue)(config.noExport, false),
            avoidOptionals: (0, visitor_plugin_common_1.normalizeAvoidOptionals)((0, visitor_plugin_common_1.getConfigValue)(config.avoidOptionals, false)),
            immutableTypes: (0, visitor_plugin_common_1.getConfigValue)(config.immutableTypes, false),
            nonOptionalTypename: (0, visitor_plugin_common_1.getConfigValue)(config.nonOptionalTypename, false),
            preResolveTypes: (0, visitor_plugin_common_1.getConfigValue)(config.preResolveTypes, true),
            mergeFragmentTypes: (0, visitor_plugin_common_1.getConfigValue)(config.mergeFragmentTypes, false),
        }, schema);
        (0, auto_bind_1.default)(this);
        const preResolveTypes = (0, visitor_plugin_common_1.getConfigValue)(config.preResolveTypes, true);
        const defaultMaybeValue = 'T | null';
        const maybeValue = (0, visitor_plugin_common_1.getConfigValue)(config.maybeValue, defaultMaybeValue);
        const wrapOptional = (type) => {
            if (preResolveTypes === true) {
                return maybeValue.replace('T', type);
            }
            const prefix = this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : '';
            return `${prefix}Maybe<${type}>`;
        };
        const wrapArray = (type) => {
            const listModifier = this.config.immutableTypes ? 'ReadonlyArray' : 'Array';
            return `${listModifier}<${type}>`;
        };
        const formatNamedField = (name, type, isConditional = false) => {
            const optional = isConditional || (!this.config.avoidOptionals.field && !!type && !(0, graphql_1.isNonNullType)(type));
            return (this.config.immutableTypes ? `readonly ${name}` : name) + (optional ? '?' : '');
        };
        const processorConfig = {
            namespacedImportName: this.config.namespacedImportName,
            convertName: this.convertName.bind(this),
            enumPrefix: this.config.enumPrefix,
            scalars: this.scalars,
            formatNamedField,
            wrapTypeWithModifiers(baseType, type) {
                return (0, visitor_plugin_common_1.wrapTypeWithModifiers)(baseType, type, { wrapOptional, wrapArray });
            },
            avoidOptionals: this.config.avoidOptionals,
        };
        const processor = new (preResolveTypes ? visitor_plugin_common_1.PreResolveTypesProcessor : ts_selection_set_processor_js_1.TypeScriptSelectionSetProcessor)(processorConfig);
        this.setSelectionSetHandler(new visitor_plugin_common_1.SelectionSetToObject(processor, this.scalars, this.schema, this.convertName.bind(this), this.getFragmentSuffix.bind(this), allFragments, this.config));
        const enumsNames = Object.keys(schema.getTypeMap()).filter(typeName => (0, graphql_1.isEnumType)(schema.getType(typeName)));
        this.setVariablesTransformer(new ts_operation_variables_to_object_js_1.TypeScriptOperationVariablesToObject(this.scalars, this.convertName.bind(this), this.config.avoidOptionals.object, this.config.immutableTypes, this.config.namespacedImportName, enumsNames, this.config.enumPrefix, this.config.enumValues, this.config.arrayInputCoercion, undefined, 'InputMaybe'));
        this._declarationBlockConfig = {
            ignoreExport: this.config.noExport,
        };
    }
    getImports() {
        return !this.config.globalNamespace &&
            (this.config.inlineFragmentTypes === 'combine' || this.config.inlineFragmentTypes === 'mask')
            ? this.config.fragmentImports.map(fragmentImport => (0, visitor_plugin_common_1.generateFragmentImportStatement)(fragmentImport, 'type'))
            : [];
    }
    getPunctuation(_declarationKind) {
        return ';';
    }
    applyVariablesWrapper(variablesBlock) {
        const prefix = this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : '';
        return `${prefix}Exact<${variablesBlock === '{}' ? `{ [key: string]: never; }` : variablesBlock}>`;
    }
}
exports.TypeScriptDocumentsVisitor = TypeScriptDocumentsVisitor;
