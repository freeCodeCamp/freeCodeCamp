"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTypesVisitor = void 0;
const graphql_1 = require("graphql");
const base_visitor_js_1 = require("./base-visitor.js");
const declaration_kinds_js_1 = require("./declaration-kinds.js");
const enum_values_js_1 = require("./enum-values.js");
const mappers_js_1 = require("./mappers.js");
const scalars_js_1 = require("./scalars.js");
const utils_js_1 = require("./utils.js");
const variables_to_object_js_1 = require("./variables-to-object.js");
class BaseTypesVisitor extends base_visitor_js_1.BaseVisitor {
    constructor(_schema, rawConfig, additionalConfig, defaultScalars = scalars_js_1.DEFAULT_SCALARS) {
        var _a;
        super(rawConfig, {
            enumPrefix: (0, utils_js_1.getConfigValue)(rawConfig.enumPrefix, true),
            onlyEnums: (0, utils_js_1.getConfigValue)(rawConfig.onlyEnums, false),
            onlyOperationTypes: (0, utils_js_1.getConfigValue)(rawConfig.onlyOperationTypes, false),
            addUnderscoreToArgsType: (0, utils_js_1.getConfigValue)(rawConfig.addUnderscoreToArgsType, false),
            enumValues: (0, enum_values_js_1.parseEnumValues)({
                schema: _schema,
                mapOrStr: rawConfig.enumValues,
                ignoreEnumValuesFromSchema: rawConfig.ignoreEnumValuesFromSchema,
            }),
            declarationKind: (0, declaration_kinds_js_1.normalizeDeclarationKind)(rawConfig.declarationKind),
            scalars: (0, utils_js_1.buildScalarsFromConfig)(_schema, rawConfig, defaultScalars),
            fieldWrapperValue: (0, utils_js_1.getConfigValue)(rawConfig.fieldWrapperValue, 'T'),
            wrapFieldDefinitions: (0, utils_js_1.getConfigValue)(rawConfig.wrapFieldDefinitions, false),
            entireFieldWrapperValue: (0, utils_js_1.getConfigValue)(rawConfig.entireFieldWrapperValue, 'T'),
            wrapEntireDefinitions: (0, utils_js_1.getConfigValue)(rawConfig.wrapEntireFieldDefinitions, false),
            ignoreEnumValuesFromSchema: (0, utils_js_1.getConfigValue)(rawConfig.ignoreEnumValuesFromSchema, false),
            directiveArgumentAndInputFieldMappings: (0, mappers_js_1.transformDirectiveArgumentAndInputFieldMappings)((_a = rawConfig.directiveArgumentAndInputFieldMappings) !== null && _a !== void 0 ? _a : {}, rawConfig.directiveArgumentAndInputFieldMappingTypeSuffix),
            ...additionalConfig,
        });
        this._schema = _schema;
        // Note: Missing directive mappers but not a problem since always overriden by implementors
        this._argumentsTransformer = new variables_to_object_js_1.OperationVariablesToObject(this.scalars, this.convertName);
    }
    getExportPrefix() {
        return 'export ';
    }
    getFieldWrapperValue() {
        if (this.config.fieldWrapperValue) {
            return `${this.getExportPrefix()}type FieldWrapper<T> = ${this.config.fieldWrapperValue};`;
        }
        return '';
    }
    getEntireFieldWrapperValue() {
        if (this.config.entireFieldWrapperValue) {
            return `${this.getExportPrefix()}type EntireFieldWrapper<T> = ${this.config.entireFieldWrapperValue};`;
        }
        return '';
    }
    getScalarsImports() {
        return Object.keys(this.config.scalars)
            .map(enumName => {
            const mappedValue = this.config.scalars[enumName];
            if (mappedValue.isExternal) {
                return this._buildTypeImport(mappedValue.import, mappedValue.source, mappedValue.default);
            }
            return null;
        })
            .filter(a => a);
    }
    getDirectiveArgumentAndInputFieldMappingsImports() {
        return Object.keys(this.config.directiveArgumentAndInputFieldMappings)
            .map(directive => {
            const mappedValue = this.config.directiveArgumentAndInputFieldMappings[directive];
            if (mappedValue.isExternal) {
                return this._buildTypeImport(mappedValue.import, mappedValue.source, mappedValue.default);
            }
            return null;
        })
            .filter(a => a);
    }
    get scalarsDefinition() {
        if (this.config.onlyEnums)
            return '';
        const allScalars = Object.keys(this.config.scalars).map(scalarName => {
            const scalarValue = this.config.scalars[scalarName].type;
            const scalarType = this._schema.getType(scalarName);
            const comment = (scalarType === null || scalarType === void 0 ? void 0 : scalarType.astNode) && scalarType.description ? (0, utils_js_1.transformComment)(scalarType.description, 1) : '';
            const { scalar } = this._parsedConfig.declarationKind;
            return comment + (0, utils_js_1.indent)(`${scalarName}: ${scalarValue}${this.getPunctuation(scalar)}`);
        });
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(this._parsedConfig.declarationKind.scalar)
            .withName('Scalars')
            .withComment('All built-in and custom scalars, mapped to their actual values')
            .withBlock(allScalars.join('\n')).string;
    }
    get directiveArgumentAndInputFieldMappingsDefinition() {
        const directiveEntries = Object.entries(this.config.directiveArgumentAndInputFieldMappings);
        if (directiveEntries.length === 0) {
            return '';
        }
        const allDirectives = [];
        for (const [directiveName, parsedMapper] of directiveEntries) {
            const directiveType = this._schema.getDirective(directiveName);
            const comment = (directiveType === null || directiveType === void 0 ? void 0 : directiveType.astNode) && directiveType.description ? (0, utils_js_1.transformComment)(directiveType.description, 1) : '';
            const { directive } = this._parsedConfig.declarationKind;
            allDirectives.push(comment + (0, utils_js_1.indent)(`${directiveName}: ${parsedMapper.type}${this.getPunctuation(directive)}`));
        }
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(this._parsedConfig.declarationKind.directive)
            .withName('DirectiveArgumentAndInputFieldMappings')
            .withComment('Type overrides using directives')
            .withBlock(allDirectives.join('\n')).string;
    }
    setDeclarationBlockConfig(config) {
        this._declarationBlockConfig = config;
    }
    setArgumentsTransformer(argumentsTransfomer) {
        this._argumentsTransformer = argumentsTransfomer;
    }
    NonNullType(node) {
        const asString = node.type;
        return asString;
    }
    getInputObjectDeclarationBlock(node) {
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(this._parsedConfig.declarationKind.input)
            .withName(this.convertName(node))
            .withComment(node.description)
            .withBlock(node.fields.join('\n'));
    }
    getInputObjectOneOfDeclarationBlock(node) {
        // As multiple fields always result in a union, we have
        // to force a declaration kind of `type` in this case
        const declarationKind = node.fields.length === 1 ? this._parsedConfig.declarationKind.input : 'type';
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(this.convertName(node))
            .withComment(node.description)
            .withContent(`\n` + node.fields.join('\n  |'));
    }
    InputObjectTypeDefinition(node) {
        if (this.config.onlyEnums)
            return '';
        // Why the heck is node.name a string and not { value: string } at runtime ?!
        if ((0, utils_js_1.isOneOfInputObjectType)(this._schema.getType(node.name))) {
            return this.getInputObjectOneOfDeclarationBlock(node).string;
        }
        return this.getInputObjectDeclarationBlock(node).string;
    }
    InputValueDefinition(node) {
        if (this.config.onlyEnums)
            return '';
        const comment = (0, utils_js_1.transformComment)(node.description, 1);
        const { input } = this._parsedConfig.declarationKind;
        let type = node.type;
        if (node.directives && this.config.directiveArgumentAndInputFieldMappings) {
            type = this._getDirectiveOverrideType(node.directives) || type;
        }
        return comment + (0, utils_js_1.indent)(`${node.name}: ${type}${this.getPunctuation(input)}`);
    }
    Name(node) {
        return node.value;
    }
    FieldDefinition(node) {
        if (this.config.onlyEnums)
            return '';
        const typeString = node.type;
        const { type } = this._parsedConfig.declarationKind;
        const comment = this.getNodeComment(node);
        return comment + (0, utils_js_1.indent)(`${node.name}: ${typeString}${this.getPunctuation(type)}`);
    }
    UnionTypeDefinition(node, key, parent) {
        if (this.config.onlyOperationTypes || this.config.onlyEnums)
            return '';
        const originalNode = parent[key];
        const possibleTypes = originalNode.types
            .map(t => (this.scalars[t.name.value] ? this._getScalar(t.name.value) : this.convertName(t)))
            .join(' | ');
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind('type')
            .withName(this.convertName(node))
            .withComment(node.description)
            .withContent(possibleTypes).string;
    }
    mergeInterfaces(interfaces, hasOtherFields) {
        return interfaces.join(' & ') + (interfaces.length && hasOtherFields ? ' & ' : '');
    }
    appendInterfacesAndFieldsToBlock(block, interfaces, fields) {
        block.withContent(this.mergeInterfaces(interfaces, fields.length > 0));
        block.withBlock(this.mergeAllFields(fields, interfaces.length > 0));
    }
    getObjectTypeDeclarationBlock(node, originalNode) {
        const optionalTypename = this.config.nonOptionalTypename ? '__typename' : '__typename?';
        const { type, interface: interfacesType } = this._parsedConfig.declarationKind;
        const allFields = [
            ...(this.config.addTypename
                ? [
                    (0, utils_js_1.indent)(`${this.config.immutableTypes ? 'readonly ' : ''}${optionalTypename}: '${node.name}'${this.getPunctuation(type)}`),
                ]
                : []),
            ...node.fields,
        ];
        const interfacesNames = originalNode.interfaces ? originalNode.interfaces.map(i => this.convertName(i)) : [];
        const declarationBlock = new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(type)
            .withName(this.convertName(node))
            .withComment(node.description);
        if (type === 'interface' || type === 'class') {
            if (interfacesNames.length > 0) {
                const keyword = interfacesType === 'interface' && type === 'class' ? 'implements' : 'extends';
                declarationBlock.withContent(`${keyword} ` + interfacesNames.join(', ') + (allFields.length > 0 ? ' ' : ' {}'));
            }
            declarationBlock.withBlock(this.mergeAllFields(allFields, false));
        }
        else {
            this.appendInterfacesAndFieldsToBlock(declarationBlock, interfacesNames, allFields);
        }
        return declarationBlock;
    }
    mergeAllFields(allFields, _hasInterfaces) {
        return allFields.join('\n');
    }
    ObjectTypeDefinition(node, key, parent) {
        if (this.config.onlyOperationTypes || this.config.onlyEnums)
            return '';
        const originalNode = parent[key];
        return [this.getObjectTypeDeclarationBlock(node, originalNode).string, this.buildArgumentsBlock(originalNode)]
            .filter(f => f)
            .join('\n\n');
    }
    getInterfaceTypeDeclarationBlock(node, _originalNode) {
        const declarationBlock = new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(this._parsedConfig.declarationKind.interface)
            .withName(this.convertName(node))
            .withComment(node.description);
        return declarationBlock.withBlock(node.fields.join('\n'));
    }
    InterfaceTypeDefinition(node, key, parent) {
        if (this.config.onlyOperationTypes || this.config.onlyEnums)
            return '';
        const originalNode = parent[key];
        return [this.getInterfaceTypeDeclarationBlock(node, originalNode).string, this.buildArgumentsBlock(originalNode)]
            .filter(f => f)
            .join('\n\n');
    }
    ScalarTypeDefinition(_node) {
        // We empty this because we handle scalars in a different way, see constructor.
        return '';
    }
    _buildTypeImport(identifier, source, asDefault = false) {
        const { useTypeImports } = this.config;
        if (asDefault) {
            if (useTypeImports) {
                return `import type { default as ${identifier} } from '${source}';`;
            }
            return `import ${identifier} from '${source}';`;
        }
        return `import${useTypeImports ? ' type' : ''} { ${identifier} } from '${source}';`;
    }
    handleEnumValueMapper(typeIdentifier, importIdentifier, sourceIdentifier, sourceFile) {
        if (importIdentifier !== sourceIdentifier) {
            // use namespace import to dereference nested enum
            // { enumValues: { MyEnum: './my-file#NS.NestedEnum' } }
            return [
                this._buildTypeImport(importIdentifier || sourceIdentifier, sourceFile),
                `import ${typeIdentifier} = ${sourceIdentifier};`,
            ];
        }
        if (sourceIdentifier !== typeIdentifier) {
            return [this._buildTypeImport(`${sourceIdentifier} as ${typeIdentifier}`, sourceFile)];
        }
        return [this._buildTypeImport(importIdentifier || sourceIdentifier, sourceFile)];
    }
    getEnumsImports() {
        return Object.keys(this.config.enumValues)
            .flatMap(enumName => {
            const mappedValue = this.config.enumValues[enumName];
            if (mappedValue.sourceFile) {
                if (mappedValue.isDefault) {
                    return [this._buildTypeImport(mappedValue.typeIdentifier, mappedValue.sourceFile, true)];
                }
                return this.handleEnumValueMapper(mappedValue.typeIdentifier, mappedValue.importIdentifier, mappedValue.sourceIdentifier, mappedValue.sourceFile);
            }
            return [];
        })
            .filter(Boolean);
    }
    EnumTypeDefinition(node) {
        var _a;
        const enumName = node.name;
        // In case of mapped external enum string
        if ((_a = this.config.enumValues[enumName]) === null || _a === void 0 ? void 0 : _a.sourceFile) {
            return null;
        }
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind('enum')
            .withName(this.convertName(node, { useTypesPrefix: this.config.enumPrefix }))
            .withComment(node.description)
            .withBlock(this.buildEnumValuesBlock(enumName, node.values)).string;
    }
    // We are using it in order to transform "description" field
    StringValue(node) {
        return node.value;
    }
    makeValidEnumIdentifier(identifier) {
        if (/^[0-9]/.exec(identifier)) {
            return (0, utils_js_1.wrapWithSingleQuotes)(identifier, true);
        }
        return identifier;
    }
    buildEnumValuesBlock(typeName, values) {
        const schemaEnumType = this._schema
            ? this._schema.getType(typeName)
            : undefined;
        return values
            .map(enumOption => {
            var _a;
            const optionName = this.makeValidEnumIdentifier(this.convertName(enumOption, {
                useTypesPrefix: false,
                transformUnderscore: true,
            }));
            const comment = this.getNodeComment(enumOption);
            const schemaEnumValue = schemaEnumType && !this.config.ignoreEnumValuesFromSchema
                ? schemaEnumType.getValue(enumOption.name).value
                : undefined;
            let enumValue = typeof schemaEnumValue !== 'undefined' ? schemaEnumValue : enumOption.name;
            if (((_a = this.config.enumValues[typeName]) === null || _a === void 0 ? void 0 : _a.mappedValues) &&
                typeof this.config.enumValues[typeName].mappedValues[enumValue] !== 'undefined') {
                enumValue = this.config.enumValues[typeName].mappedValues[enumValue];
            }
            return (comment +
                (0, utils_js_1.indent)(`${optionName}${this._declarationBlockConfig.enumNameValueSeparator} ${(0, utils_js_1.wrapWithSingleQuotes)(enumValue, typeof schemaEnumValue !== 'undefined')}`));
        })
            .join(',\n');
    }
    DirectiveDefinition(_node) {
        return '';
    }
    getArgumentsObjectDeclarationBlock(node, name, field) {
        return new utils_js_1.DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(this._parsedConfig.declarationKind.arguments)
            .withName(this.convertName(name))
            .withComment(node.description)
            .withBlock(this._argumentsTransformer.transform(field.arguments));
    }
    getArgumentsObjectTypeDefinition(node, name, field) {
        if (this.config.onlyEnums)
            return '';
        return this.getArgumentsObjectDeclarationBlock(node, name, field).string;
    }
    buildArgumentsBlock(node) {
        const fieldsWithArguments = node.fields.filter(field => field.arguments && field.arguments.length > 0) || [];
        return fieldsWithArguments
            .map(field => {
            const name = node.name.value +
                (this.config.addUnderscoreToArgsType ? '_' : '') +
                this.convertName(field, {
                    useTypesPrefix: false,
                    useTypesSuffix: false,
                }) +
                'Args';
            return this.getArgumentsObjectTypeDefinition(node, name, field);
        })
            .join('\n\n');
    }
    _getScalar(name) {
        return `Scalars['${name}']`;
    }
    _getDirectiveArgumentNadInputFieldMapping(name) {
        return `DirectiveArgumentAndInputFieldMappings['${name}']`;
    }
    _getDirectiveOverrideType(directives) {
        const type = directives
            .map(directive => {
            const directiveName = directive.name;
            if (this.config.directiveArgumentAndInputFieldMappings[directiveName]) {
                return this._getDirectiveArgumentNadInputFieldMapping(directiveName);
            }
            return null;
        })
            .reverse()
            .find(a => !!a);
        return type || null;
    }
    _getTypeForNode(node) {
        const typeAsString = node.name;
        if (this.scalars[typeAsString]) {
            return this._getScalar(typeAsString);
        }
        if (this.config.enumValues[typeAsString]) {
            return this.config.enumValues[typeAsString].typeIdentifier;
        }
        const schemaType = this._schema.getType(node.name);
        if (schemaType && (0, graphql_1.isEnumType)(schemaType)) {
            return this.convertName(node, { useTypesPrefix: this.config.enumPrefix });
        }
        return this.convertName(node);
    }
    NamedType(node, key, parent, path, ancestors) {
        const currentVisitContext = this.getVisitorKindContextFromAncestors(ancestors);
        const isVisitingInputType = currentVisitContext.includes(graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION);
        const typeToUse = this._getTypeForNode(node);
        if (!isVisitingInputType && this.config.fieldWrapperValue && this.config.wrapFieldDefinitions) {
            return `FieldWrapper<${typeToUse}>`;
        }
        return typeToUse;
    }
    ListType(node, _key, _parent, _path, _ancestors) {
        const asString = node.type;
        return this.wrapWithListType(asString);
    }
    SchemaDefinition() {
        return null;
    }
    getNodeComment(node) {
        let commentText = node.description;
        const deprecationDirective = node.directives.find((v) => v.name === 'deprecated');
        if (deprecationDirective) {
            const deprecationReason = this.getDeprecationReason(deprecationDirective);
            commentText = `${commentText ? `${commentText}\n` : ''}@deprecated ${deprecationReason}`;
        }
        const comment = (0, utils_js_1.transformComment)(commentText, 1);
        return comment;
    }
    getDeprecationReason(directive) {
        if (directive.name === 'deprecated') {
            const hasArguments = directive.arguments.length > 0;
            let reason = 'Field no longer supported';
            if (hasArguments) {
                reason = directive.arguments[0].value;
            }
            return reason;
        }
    }
    wrapWithListType(str) {
        return `Array<${str}>`;
    }
}
exports.BaseTypesVisitor = BaseTypesVisitor;
