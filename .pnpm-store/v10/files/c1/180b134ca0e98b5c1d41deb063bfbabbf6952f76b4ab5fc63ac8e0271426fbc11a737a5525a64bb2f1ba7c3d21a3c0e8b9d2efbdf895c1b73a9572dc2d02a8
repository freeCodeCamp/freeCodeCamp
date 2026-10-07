import { BaseDocumentsVisitor, generateFragmentImportStatement, getConfigValue, normalizeAvoidOptionals, PreResolveTypesProcessor, SelectionSetToObject, wrapTypeWithModifiers, } from '@graphql-codegen/visitor-plugin-common';
import autoBind from 'auto-bind';
import { isEnumType, isNonNullType } from 'graphql';
import { TypeScriptOperationVariablesToObject } from './ts-operation-variables-to-object.js';
import { TypeScriptSelectionSetProcessor } from './ts-selection-set-processor.js';
export class TypeScriptDocumentsVisitor extends BaseDocumentsVisitor {
    constructor(schema, config, allFragments) {
        super(config, {
            arrayInputCoercion: getConfigValue(config.arrayInputCoercion, true),
            noExport: getConfigValue(config.noExport, false),
            avoidOptionals: normalizeAvoidOptionals(getConfigValue(config.avoidOptionals, false)),
            immutableTypes: getConfigValue(config.immutableTypes, false),
            nonOptionalTypename: getConfigValue(config.nonOptionalTypename, false),
            preResolveTypes: getConfigValue(config.preResolveTypes, true),
            mergeFragmentTypes: getConfigValue(config.mergeFragmentTypes, false),
        }, schema);
        autoBind(this);
        const preResolveTypes = getConfigValue(config.preResolveTypes, true);
        const defaultMaybeValue = 'T | null';
        const maybeValue = getConfigValue(config.maybeValue, defaultMaybeValue);
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
            const optional = isConditional || (!this.config.avoidOptionals.field && !!type && !isNonNullType(type));
            return (this.config.immutableTypes ? `readonly ${name}` : name) + (optional ? '?' : '');
        };
        const processorConfig = {
            namespacedImportName: this.config.namespacedImportName,
            convertName: this.convertName.bind(this),
            enumPrefix: this.config.enumPrefix,
            scalars: this.scalars,
            formatNamedField,
            wrapTypeWithModifiers(baseType, type) {
                return wrapTypeWithModifiers(baseType, type, { wrapOptional, wrapArray });
            },
            avoidOptionals: this.config.avoidOptionals,
        };
        const processor = new (preResolveTypes ? PreResolveTypesProcessor : TypeScriptSelectionSetProcessor)(processorConfig);
        this.setSelectionSetHandler(new SelectionSetToObject(processor, this.scalars, this.schema, this.convertName.bind(this), this.getFragmentSuffix.bind(this), allFragments, this.config));
        const enumsNames = Object.keys(schema.getTypeMap()).filter(typeName => isEnumType(schema.getType(typeName)));
        this.setVariablesTransformer(new TypeScriptOperationVariablesToObject(this.scalars, this.convertName.bind(this), this.config.avoidOptionals.object, this.config.immutableTypes, this.config.namespacedImportName, enumsNames, this.config.enumPrefix, this.config.enumValues, this.config.arrayInputCoercion, undefined, 'InputMaybe'));
        this._declarationBlockConfig = {
            ignoreExport: this.config.noExport,
        };
    }
    getImports() {
        return !this.config.globalNamespace &&
            (this.config.inlineFragmentTypes === 'combine' || this.config.inlineFragmentTypes === 'mask')
            ? this.config.fragmentImports.map(fragmentImport => generateFragmentImportStatement(fragmentImport, 'type'))
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
