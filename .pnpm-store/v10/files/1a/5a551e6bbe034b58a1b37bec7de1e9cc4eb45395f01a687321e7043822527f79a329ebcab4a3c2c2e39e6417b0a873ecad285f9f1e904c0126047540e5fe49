import autoBind from 'auto-bind';
import { Kind } from 'graphql';
import { getBaseTypeNode, indent } from './utils.js';
export class OperationVariablesToObject {
    constructor(_scalars, _convertName, _namespacedImportName = null, _enumNames = [], _enumPrefix = true, _enumValues = {}, _applyCoercion = false, _directiveArgumentAndInputFieldMappings = {}) {
        this._scalars = _scalars;
        this._convertName = _convertName;
        this._namespacedImportName = _namespacedImportName;
        this._enumNames = _enumNames;
        this._enumPrefix = _enumPrefix;
        this._enumValues = _enumValues;
        this._applyCoercion = _applyCoercion;
        this._directiveArgumentAndInputFieldMappings = _directiveArgumentAndInputFieldMappings;
        autoBind(this);
    }
    getName(node) {
        if (node.name) {
            if (typeof node.name === 'string') {
                return node.name;
            }
            return node.name.value;
        }
        if (node.variable) {
            return node.variable.name.value;
        }
        return null;
    }
    transform(variablesNode) {
        if (!variablesNode || variablesNode.length === 0) {
            return null;
        }
        return (variablesNode.map(variable => indent(this.transformVariable(variable))).join(`${this.getPunctuation()}\n`) +
            this.getPunctuation());
    }
    getScalar(name) {
        const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : '';
        return `${prefix}Scalars['${name}']`;
    }
    getDirectiveMapping(name) {
        return `DirectiveArgumentAndInputFieldMappings['${name}']`;
    }
    getDirectiveOverrideType(directives) {
        if (!this._directiveArgumentAndInputFieldMappings)
            return null;
        const type = directives
            .map(directive => {
            const directiveName = directive.name.value;
            if (this._directiveArgumentAndInputFieldMappings[directiveName]) {
                return this.getDirectiveMapping(directiveName);
            }
            return null;
        })
            .reverse()
            .find(a => !!a);
        return type || null;
    }
    transformVariable(variable) {
        var _a;
        let typeValue = null;
        const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : '';
        if (typeof variable.type === 'string') {
            typeValue = variable.type;
        }
        else {
            const baseType = getBaseTypeNode(variable.type);
            const overrideType = variable.directives ? this.getDirectiveOverrideType(variable.directives) : null;
            const typeName = baseType.name.value;
            if (overrideType) {
                typeValue = overrideType;
            }
            else if (this._scalars[typeName]) {
                typeValue = this.getScalar(typeName);
            }
            else if ((_a = this._enumValues[typeName]) === null || _a === void 0 ? void 0 : _a.sourceFile) {
                typeValue = this._enumValues[typeName].typeIdentifier || this._enumValues[typeName].sourceIdentifier;
            }
            else {
                typeValue = `${prefix}${this._convertName(baseType, {
                    useTypesPrefix: this._enumNames.includes(typeName) ? this._enumPrefix : true,
                })}`;
            }
        }
        const fieldName = this.getName(variable);
        const fieldType = this.wrapAstTypeWithModifiers(typeValue, variable.type, this._applyCoercion);
        const hasDefaultValue = variable.defaultValue != null && typeof variable.defaultValue !== 'undefined';
        const isNonNullType = variable.type.kind === Kind.NON_NULL_TYPE;
        const formattedFieldString = this.formatFieldString(fieldName, isNonNullType, hasDefaultValue);
        const formattedTypeString = this.formatTypeString(fieldType, isNonNullType, hasDefaultValue);
        return `${formattedFieldString}: ${formattedTypeString}`;
    }
    wrapAstTypeWithModifiers(_baseType, _typeNode, _applyCoercion) {
        throw new Error(`You must override "wrapAstTypeWithModifiers" of OperationVariablesToObject!`);
    }
    formatFieldString(fieldName, _isNonNullType, _hasDefaultValue) {
        return fieldName;
    }
    formatTypeString(fieldType, isNonNullType, hasDefaultValue) {
        const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : '';
        if (hasDefaultValue) {
            return `${prefix}Maybe<${fieldType}>`;
        }
        return fieldType;
    }
    getPunctuation() {
        return ',';
    }
}
