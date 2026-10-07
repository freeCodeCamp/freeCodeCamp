"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreResolveTypesProcessor = void 0;
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const graphql_1 = require("graphql");
const base_js_1 = require("./base.js");
class PreResolveTypesProcessor extends base_js_1.BaseSelectionSetProcessor {
    transformTypenameField(type, name) {
        return [
            {
                type,
                name,
            },
        ];
    }
    transformPrimitiveFields(schemaType, fields) {
        if (fields.length === 0) {
            return [];
        }
        return fields.map(field => {
            const fieldObj = schemaType.getFields()[field.fieldName];
            const baseType = (0, plugin_helpers_1.getBaseType)(fieldObj.type);
            let typeToUse = baseType.name;
            const useInnerType = field.isConditional && (0, graphql_1.isNonNullType)(fieldObj.type);
            const innerType = useInnerType ? (0, plugin_helpers_1.removeNonNullWrapper)(fieldObj.type) : undefined;
            if ((0, graphql_1.isEnumType)(baseType)) {
                typeToUse =
                    (this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : '') +
                        this.config.convertName(baseType.name, { useTypesPrefix: this.config.enumPrefix });
            }
            else if (this.config.scalars[baseType.name]) {
                typeToUse = this.config.scalars[baseType.name];
            }
            const name = this.config.formatNamedField(field.fieldName, useInnerType ? innerType : fieldObj.type, field.isConditional);
            const wrappedType = this.config.wrapTypeWithModifiers(typeToUse, fieldObj.type);
            return {
                name,
                type: wrappedType,
            };
        });
    }
    transformAliasesPrimitiveFields(schemaType, fields) {
        if (fields.length === 0) {
            return [];
        }
        return fields.map(aliasedField => {
            if (aliasedField.fieldName === '__typename') {
                const name = this.config.formatNamedField(aliasedField.alias, null);
                return {
                    name,
                    type: `'${schemaType.name}'`,
                };
            }
            const fieldObj = schemaType.getFields()[aliasedField.fieldName];
            const baseType = (0, plugin_helpers_1.getBaseType)(fieldObj.type);
            let typeToUse = this.config.scalars[baseType.name] || baseType.name;
            if ((0, graphql_1.isEnumType)(baseType)) {
                typeToUse =
                    (this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : '') +
                        this.config.convertName(baseType.name, { useTypesPrefix: this.config.enumPrefix });
            }
            const name = this.config.formatNamedField(aliasedField.alias, fieldObj.type);
            const wrappedType = this.config.wrapTypeWithModifiers(typeToUse, fieldObj.type);
            return {
                name,
                type: wrappedType,
            };
        });
    }
    transformLinkFields(fields) {
        if (fields.length === 0) {
            return [];
        }
        return fields.map(field => ({
            name: field.alias || field.name,
            type: field.selectionSet,
        }));
    }
}
exports.PreResolveTypesProcessor = PreResolveTypesProcessor;
