import { ApolloFederation, getBaseType } from '@graphql-codegen/plugin-helpers';
import { getRootTypeNames } from '@graphql-tools/utils';
import autoBind from 'auto-bind';
import { GraphQLObjectType, isEnumType, isInterfaceType, isNonNullType, isObjectType, isUnionType, } from 'graphql';
import { BaseVisitor } from './base-visitor.js';
import { parseEnumValues } from './enum-values.js';
import { buildMapperImport, parseMapper, transformMappers } from './mappers.js';
import { DEFAULT_SCALARS } from './scalars.js';
import { buildScalarsFromConfig, DeclarationBlock, getBaseTypeNode, getConfigValue, indent, OMIT_TYPE, REQUIRE_FIELDS_TYPE, stripMapperTypeInterpolation, wrapTypeWithModifiers, } from './utils.js';
import { OperationVariablesToObject } from './variables-to-object.js';
export class BaseResolversVisitor extends BaseVisitor {
    constructor(rawConfig, additionalConfig, _schema, defaultScalars = DEFAULT_SCALARS) {
        var _a;
        super(rawConfig, {
            immutableTypes: getConfigValue(rawConfig.immutableTypes, false),
            optionalResolveType: getConfigValue(rawConfig.optionalResolveType, false),
            enumPrefix: getConfigValue(rawConfig.enumPrefix, true),
            federation: getConfigValue(rawConfig.federation, false),
            resolverTypeWrapperSignature: getConfigValue(rawConfig.resolverTypeWrapperSignature, 'Promise<T> | T'),
            enumValues: parseEnumValues({
                schema: _schema,
                mapOrStr: rawConfig.enumValues,
            }),
            addUnderscoreToArgsType: getConfigValue(rawConfig.addUnderscoreToArgsType, false),
            onlyResolveTypeForInterfaces: getConfigValue(rawConfig.onlyResolveTypeForInterfaces, false),
            contextType: parseMapper(rawConfig.contextType || 'any', 'ContextType'),
            fieldContextTypes: getConfigValue(rawConfig.fieldContextTypes, []),
            directiveContextTypes: getConfigValue(rawConfig.directiveContextTypes, []),
            resolverTypeSuffix: getConfigValue(rawConfig.resolverTypeSuffix, 'Resolvers'),
            allResolversTypeName: getConfigValue(rawConfig.allResolversTypeName, 'Resolvers'),
            rootValueType: parseMapper(rawConfig.rootValueType || '{}', 'RootValueType'),
            namespacedImportName: getConfigValue(rawConfig.namespacedImportName, ''),
            avoidOptionals: getConfigValue(rawConfig.avoidOptionals, false),
            defaultMapper: rawConfig.defaultMapper
                ? parseMapper(rawConfig.defaultMapper || 'any', 'DefaultMapperType')
                : null,
            mappers: transformMappers(rawConfig.mappers || {}, rawConfig.mapperTypeSuffix),
            scalars: buildScalarsFromConfig(_schema, rawConfig, defaultScalars),
            internalResolversPrefix: getConfigValue(rawConfig.internalResolversPrefix, '__'),
            ...additionalConfig,
        });
        this._schema = _schema;
        this._declarationBlockConfig = {};
        this._collectedResolvers = {};
        this._collectedDirectiveResolvers = {};
        this._usedMappers = {};
        this._resolversTypes = {};
        this._resolversParentTypes = {};
        this._rootTypeNames = new Set();
        this._globalDeclarations = new Set();
        this._hasScalars = false;
        this._hasFederation = false;
        this._shouldMapType = {};
        autoBind(this);
        this._federation = new ApolloFederation({ enabled: this.config.federation, schema: this.schema });
        this._rootTypeNames = getRootTypeNames(_schema);
        this._variablesTransformer = new OperationVariablesToObject(this.scalars, this.convertName, this.config.namespacedImportName);
        this._resolversTypes = this.createResolversFields(type => this.applyResolverTypeWrapper(type), type => this.clearResolverTypeWrapper(type), name => this.getTypeToUse(name));
        this._resolversParentTypes = this.createResolversFields(type => type, type => type, name => this.getParentTypeToUse(name), namedType => !isEnumType(namedType));
        this._fieldContextTypeMap = this.createFieldContextTypeMap();
        this._directiveContextTypesMap = this.createDirectivedContextType();
        this._directiveResolverMappings = (_a = rawConfig.directiveResolverMappings) !== null && _a !== void 0 ? _a : {};
    }
    getResolverTypeWrapperSignature() {
        return `export type ResolverTypeWrapper<T> = ${this.config.resolverTypeWrapperSignature};`;
    }
    shouldMapType(type, duringCheck = []) {
        if (type.name.startsWith('__') || this.config.scalars[type.name]) {
            return false;
        }
        if (this.config.mappers[type.name]) {
            return true;
        }
        if (isObjectType(type) || isInterfaceType(type)) {
            const fields = type.getFields();
            return Object.keys(fields)
                .filter(fieldName => {
                const field = fields[fieldName];
                const fieldType = getBaseType(field.type);
                return !duringCheck.includes(fieldType.name);
            })
                .some(fieldName => {
                const field = fields[fieldName];
                const fieldType = getBaseType(field.type);
                if (this._shouldMapType[fieldType.name] !== undefined) {
                    return this._shouldMapType[fieldType.name];
                }
                if (this.config.mappers[type.name]) {
                    return true;
                }
                duringCheck.push(type.name);
                const innerResult = this.shouldMapType(fieldType, duringCheck);
                return innerResult;
            });
        }
        return false;
    }
    convertName(node, options, applyNamespacedImport = false) {
        const sourceType = super.convertName(node, options);
        return `${applyNamespacedImport && this.config.namespacedImportName ? this.config.namespacedImportName + '.' : ''}${sourceType}`;
    }
    // Kamil: this one is heeeeavvyyyy
    createResolversFields(applyWrapper, clearWrapper, getTypeToUse, shouldInclude) {
        const allSchemaTypes = this._schema.getTypeMap();
        const typeNames = this._federation.filterTypeNames(Object.keys(allSchemaTypes));
        // avoid checking all types recursively if we have no `mappers` defined
        if (Object.keys(this.config.mappers).length > 0) {
            typeNames.forEach(typeName => {
                if (this._shouldMapType[typeName] === undefined) {
                    const schemaType = allSchemaTypes[typeName];
                    this._shouldMapType[typeName] = this.shouldMapType(schemaType);
                }
            });
        }
        return typeNames.reduce((prev, typeName) => {
            var _a;
            const schemaType = allSchemaTypes[typeName];
            if (typeName.startsWith('__') || (shouldInclude && !shouldInclude(schemaType))) {
                return prev;
            }
            let shouldApplyOmit = false;
            const isRootType = this._rootTypeNames.has(typeName);
            const isMapped = this.config.mappers[typeName];
            const isScalar = this.config.scalars[typeName];
            const hasDefaultMapper = !!((_a = this.config.defaultMapper) === null || _a === void 0 ? void 0 : _a.type);
            if (isRootType) {
                prev[typeName] = applyWrapper(this.config.rootValueType.type);
                return prev;
            }
            if (isMapped && this.config.mappers[typeName].type) {
                this.markMapperAsUsed(typeName);
                prev[typeName] = applyWrapper(this.config.mappers[typeName].type);
            }
            else if (isInterfaceType(schemaType)) {
                const allTypesMap = this._schema.getTypeMap();
                const implementingTypes = [];
                for (const graphqlType of Object.values(allTypesMap)) {
                    if (graphqlType instanceof GraphQLObjectType) {
                        const allInterfaces = graphqlType.getInterfaces();
                        if (allInterfaces.some(int => int.name === schemaType.name)) {
                            implementingTypes.push(graphqlType.name);
                        }
                    }
                }
                const possibleTypes = implementingTypes.map(name => getTypeToUse(name)).join(' | ') || 'never';
                prev[typeName] = possibleTypes;
                return prev;
            }
            else if (isEnumType(schemaType) && this.config.enumValues[typeName]) {
                prev[typeName] =
                    this.config.enumValues[typeName].sourceIdentifier ||
                        this.convertName(this.config.enumValues[typeName].typeIdentifier);
            }
            else if (hasDefaultMapper && !hasPlaceholder(this.config.defaultMapper.type)) {
                prev[typeName] = applyWrapper(this.config.defaultMapper.type);
            }
            else if (isScalar) {
                prev[typeName] = applyWrapper(this._getScalar(typeName));
            }
            else if (isUnionType(schemaType)) {
                prev[typeName] = schemaType
                    .getTypes()
                    .map(type => getTypeToUse(type.name))
                    .join(' | ');
            }
            else if (isEnumType(schemaType)) {
                prev[typeName] = this.convertName(typeName, { useTypesPrefix: this.config.enumPrefix }, true);
            }
            else {
                shouldApplyOmit = true;
                prev[typeName] = this.convertName(typeName, {}, true);
            }
            if (shouldApplyOmit && prev[typeName] !== 'any' && isObjectType(schemaType)) {
                const fields = schemaType.getFields();
                const relevantFields = this._federation
                    .filterFieldNames(Object.keys(fields))
                    .filter(fieldName => {
                    const field = fields[fieldName];
                    const baseType = getBaseType(field.type);
                    // Filter out fields of types that are not included
                    if (shouldInclude && !shouldInclude(baseType)) {
                        return false;
                    }
                    return true;
                })
                    .map(fieldName => {
                    const field = fields[fieldName];
                    const baseType = getBaseType(field.type);
                    const isUnion = isUnionType(baseType);
                    if (!this.config.mappers[baseType.name] && !isUnion && !this._shouldMapType[baseType.name]) {
                        return null;
                    }
                    const addOptionalSign = !this.config.avoidOptionals && !isNonNullType(field.type);
                    return {
                        addOptionalSign,
                        fieldName,
                        replaceWithType: wrapTypeWithModifiers(getTypeToUse(baseType.name), field.type, {
                            wrapOptional: this.applyMaybe,
                            wrapArray: this.wrapWithArray,
                        }),
                    };
                })
                    .filter(a => a);
                if (relevantFields.length > 0) {
                    // Puts ResolverTypeWrapper on top of an entire type
                    prev[typeName] = applyWrapper(this.replaceFieldsInType(prev[typeName], relevantFields));
                }
                else {
                    // We still want to use ResolverTypeWrapper, even if we don't touch any fields
                    prev[typeName] = applyWrapper(prev[typeName]);
                }
            }
            if (isMapped && hasPlaceholder(prev[typeName])) {
                prev[typeName] = replacePlaceholder(prev[typeName], typeName);
            }
            if (!isMapped && hasDefaultMapper && hasPlaceholder(this.config.defaultMapper.type)) {
                // Make sure the inner type has no ResolverTypeWrapper
                const name = clearWrapper(isScalar ? this._getScalar(typeName) : prev[typeName]);
                const replaced = replacePlaceholder(this.config.defaultMapper.type, name);
                // Don't wrap Union with ResolverTypeWrapper, each inner type already has it
                if (isUnionType(schemaType)) {
                    prev[typeName] = replaced;
                }
                else {
                    prev[typeName] = applyWrapper(replacePlaceholder(this.config.defaultMapper.type, name));
                }
            }
            return prev;
        }, {});
    }
    replaceFieldsInType(typeName, relevantFields) {
        this._globalDeclarations.add(OMIT_TYPE);
        return `Omit<${typeName}, ${relevantFields.map(f => `'${f.fieldName}'`).join(' | ')}> & { ${relevantFields
            .map(f => `${f.fieldName}${f.addOptionalSign ? '?' : ''}: ${f.replaceWithType}`)
            .join(', ')} }`;
    }
    applyMaybe(str) {
        const namespacedImportPrefix = this.config.namespacedImportName ? this.config.namespacedImportName + '.' : '';
        return `${namespacedImportPrefix}Maybe<${str}>`;
    }
    applyResolverTypeWrapper(str) {
        return `ResolverTypeWrapper<${this.clearResolverTypeWrapper(str)}>`;
    }
    clearMaybe(str) {
        const namespacedImportPrefix = this.config.namespacedImportName ? this.config.namespacedImportName + '.' : '';
        if (str.startsWith(`${namespacedImportPrefix}Maybe<`)) {
            const maybeRe = new RegExp(`${namespacedImportPrefix.replace('.', '\\.')}Maybe<(.*?)>$`);
            return str.replace(maybeRe, '$1');
        }
        return str;
    }
    clearResolverTypeWrapper(str) {
        if (str.startsWith('ResolverTypeWrapper<')) {
            return str.replace(/ResolverTypeWrapper<(.*?)>$/, '$1');
        }
        return str;
    }
    wrapWithArray(t) {
        if (this.config.immutableTypes) {
            return `ReadonlyArray<${t}>`;
        }
        return `Array<${t}>`;
    }
    createFieldContextTypeMap() {
        return this.config.fieldContextTypes.reduce((prev, fieldContextType) => {
            const items = fieldContextType.split('#');
            if (items.length === 3) {
                const [path, source, contextTypeName] = items;
                return { ...prev, [path]: parseMapper(`${source}#${contextTypeName}`) };
            }
            const [path, contextType] = items;
            return { ...prev, [path]: parseMapper(contextType) };
        }, {});
    }
    createDirectivedContextType() {
        return this.config.directiveContextTypes.reduce((prev, fieldContextType) => {
            const items = fieldContextType.split('#');
            if (items.length === 3) {
                const [path, source, contextTypeName] = items;
                return { ...prev, [path]: parseMapper(`${source}#${contextTypeName}`) };
            }
            const [path, contextType] = items;
            return { ...prev, [path]: parseMapper(contextType) };
        }, {});
    }
    buildResolversTypes() {
        const declarationKind = 'type';
        return new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(this.convertName('ResolversTypes'))
            .withComment('Mapping between all available schema types and the resolvers types')
            .withBlock(Object.keys(this._resolversTypes)
            .map(typeName => indent(`${typeName}: ${this._resolversTypes[typeName]}${this.getPunctuation(declarationKind)}`))
            .join('\n')).string;
    }
    buildResolversParentTypes() {
        const declarationKind = 'type';
        return new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(this.convertName('ResolversParentTypes'))
            .withComment('Mapping between all available schema types and the resolvers parents')
            .withBlock(Object.keys(this._resolversParentTypes)
            .map(typeName => indent(`${typeName}: ${this._resolversParentTypes[typeName]}${this.getPunctuation(declarationKind)}`))
            .join('\n')).string;
    }
    get schema() {
        return this._schema;
    }
    get defaultMapperType() {
        return this.config.defaultMapper.type;
    }
    get unusedMappers() {
        return Object.keys(this.config.mappers).filter(name => !this._usedMappers[name]);
    }
    get globalDeclarations() {
        return Array.from(this._globalDeclarations);
    }
    isMapperImported(groupedMappers, identifier, source) {
        const exists = !groupedMappers[source] ? false : !!groupedMappers[source].find(m => m.identifier === identifier);
        const existsFromEnums = !!Object.keys(this.config.enumValues)
            .map(key => this.config.enumValues[key])
            .find(o => o.sourceFile === source && o.typeIdentifier === identifier);
        return exists || existsFromEnums;
    }
    get mappersImports() {
        var _a;
        const groupedMappers = {};
        const addMapper = (source, identifier, asDefault) => {
            if (!this.isMapperImported(groupedMappers, identifier, source)) {
                groupedMappers[source] || (groupedMappers[source] = []);
                groupedMappers[source].push({ identifier, asDefault });
            }
        };
        Object.keys(this.config.mappers)
            .map(gqlTypeName => ({ gqlType: gqlTypeName, mapper: this.config.mappers[gqlTypeName] }))
            .filter(({ mapper }) => mapper.isExternal)
            .forEach(({ mapper }) => {
            const externalMapper = mapper;
            const identifier = stripMapperTypeInterpolation(externalMapper.import);
            addMapper(externalMapper.source, identifier, externalMapper.default);
        });
        if (this.config.contextType.isExternal) {
            addMapper(this.config.contextType.source, this.config.contextType.import, this.config.contextType.default);
        }
        if (this.config.rootValueType.isExternal) {
            addMapper(this.config.rootValueType.source, this.config.rootValueType.import, this.config.rootValueType.default);
        }
        if ((_a = this.config.defaultMapper) === null || _a === void 0 ? void 0 : _a.isExternal) {
            const identifier = stripMapperTypeInterpolation(this.config.defaultMapper.import);
            addMapper(this.config.defaultMapper.source, identifier, this.config.defaultMapper.default);
        }
        Object.values(this._fieldContextTypeMap).forEach(parsedMapper => {
            if (parsedMapper.isExternal) {
                addMapper(parsedMapper.source, parsedMapper.import, parsedMapper.default);
            }
        });
        Object.values(this._directiveContextTypesMap).forEach(parsedMapper => {
            if (parsedMapper.isExternal) {
                addMapper(parsedMapper.source, parsedMapper.import, parsedMapper.default);
            }
        });
        return Object.keys(groupedMappers)
            .map(source => buildMapperImport(source, groupedMappers[source], this.config.useTypeImports))
            .filter(Boolean);
    }
    setDeclarationBlockConfig(config) {
        this._declarationBlockConfig = config;
    }
    setVariablesTransformer(variablesTransfomer) {
        this._variablesTransformer = variablesTransfomer;
    }
    hasScalars() {
        return this._hasScalars;
    }
    hasFederation() {
        return this._hasFederation;
    }
    getRootResolver() {
        const name = this.convertName(this.config.allResolversTypeName);
        const declarationKind = 'type';
        const contextType = `<ContextType = ${this.config.contextType.type}>`;
        return [
            new DeclarationBlock(this._declarationBlockConfig)
                .export()
                .asKind(declarationKind)
                .withName(name, contextType)
                .withBlock(Object.keys(this._collectedResolvers)
                .map(schemaTypeName => {
                const resolverType = this._collectedResolvers[schemaTypeName];
                return indent(this.formatRootResolver(schemaTypeName, resolverType, declarationKind));
            })
                .join('\n')).string,
        ].join('\n');
    }
    formatRootResolver(schemaTypeName, resolverType, declarationKind) {
        return `${schemaTypeName}${this.config.avoidOptionals ? '' : '?'}: ${resolverType}${this.getPunctuation(declarationKind)}`;
    }
    getAllDirectiveResolvers() {
        if (Object.keys(this._collectedDirectiveResolvers).length) {
            const declarationKind = 'type';
            const name = this.convertName('DirectiveResolvers');
            const contextType = `<ContextType = ${this.config.contextType.type}>`;
            return [
                new DeclarationBlock(this._declarationBlockConfig)
                    .export()
                    .asKind(declarationKind)
                    .withName(name, contextType)
                    .withBlock(Object.keys(this._collectedDirectiveResolvers)
                    .map(schemaTypeName => {
                    const resolverType = this._collectedDirectiveResolvers[schemaTypeName];
                    return indent(this.formatRootResolver(schemaTypeName, resolverType, declarationKind));
                })
                    .join('\n')).string,
            ].join('\n');
        }
        return '';
    }
    Name(node) {
        return node.value;
    }
    ListType(node) {
        const asString = node.type;
        return this.wrapWithArray(asString);
    }
    _getScalar(name) {
        return `${this.config.namespacedImportName ? this.config.namespacedImportName + '.' : ''}Scalars['${name}']`;
    }
    NamedType(node) {
        const nameStr = node.name;
        if (this.config.scalars[nameStr]) {
            return this._getScalar(nameStr);
        }
        return this.convertName(node, null, true);
    }
    NonNullType(node) {
        const asString = node.type;
        return asString;
    }
    markMapperAsUsed(name) {
        this._usedMappers[name] = true;
    }
    getTypeToUse(name) {
        const resolversType = this.convertName('ResolversTypes');
        return `${resolversType}['${name}']`;
    }
    getParentTypeToUse(name) {
        const resolversType = this.convertName('ResolversParentTypes');
        return `${resolversType}['${name}']`;
    }
    getParentTypeForSignature(_node) {
        return 'ParentType';
    }
    transformParentGenericType(parentType) {
        return `ParentType extends ${parentType} = ${parentType}`;
    }
    FieldDefinition(node, key, parent) {
        const hasArguments = node.arguments && node.arguments.length > 0;
        const declarationKind = 'type';
        return (parentName) => {
            var _a, _b, _c, _d, _e;
            const original = parent[key];
            const baseType = getBaseTypeNode(original.type);
            const realType = baseType.name.value;
            const parentType = this.schema.getType(parentName);
            if (this._federation.skipField({ fieldNode: original, parentType })) {
                return null;
            }
            const contextType = this.getContextType(parentName, node);
            const typeToUse = this.getTypeToUse(realType);
            const mappedType = this._variablesTransformer.wrapAstTypeWithModifiers(typeToUse, original.type);
            const subscriptionType = this._schema.getSubscriptionType();
            const isSubscriptionType = subscriptionType && subscriptionType.name === parentName;
            let argsType = hasArguments
                ? this.convertName(parentName +
                    (this.config.addUnderscoreToArgsType ? '_' : '') +
                    this.convertName(node.name, {
                        useTypesPrefix: false,
                        useTypesSuffix: false,
                    }) +
                    'Args', {
                    useTypesPrefix: true,
                }, true)
                : null;
            if (argsType !== null) {
                const argsToForceRequire = original.arguments.filter(arg => !!arg.defaultValue || arg.type.kind === 'NonNullType');
                if (argsToForceRequire.length > 0) {
                    argsType = this.applyRequireFields(argsType, argsToForceRequire);
                }
                else if (original.arguments.length > 0) {
                    argsType = this.applyOptionalFields(argsType, original.arguments);
                }
            }
            const parentTypeSignature = this._federation.transformParentType({
                fieldNode: original,
                parentType,
                parentTypeSignature: this.getParentTypeForSignature(node),
            });
            const mappedTypeKey = isSubscriptionType ? `${mappedType}, "${node.name}"` : mappedType;
            const directiveMappings = (_b = (_a = node.directives) === null || _a === void 0 ? void 0 : _a.map(directive => this._directiveResolverMappings[directive.name]).filter(Boolean).reverse()) !== null && _b !== void 0 ? _b : [];
            const resolverType = isSubscriptionType ? 'SubscriptionResolver' : (_c = directiveMappings[0]) !== null && _c !== void 0 ? _c : 'Resolver';
            const avoidOptionals = (_e = (_d = this.config.avoidOptionals) === null || _d === void 0 ? void 0 : _d.resolvers) !== null && _e !== void 0 ? _e : this.config.avoidOptionals === true;
            const signature = {
                name: node.name,
                modifier: avoidOptionals ? '' : '?',
                type: resolverType,
                genericTypes: [mappedTypeKey, parentTypeSignature, contextType, argsType].filter(f => f),
            };
            if (this._federation.isResolveReferenceField(node)) {
                this._hasFederation = true;
                signature.type = 'ReferenceResolver';
                if (signature.genericTypes.length >= 3) {
                    signature.genericTypes = signature.genericTypes.slice(0, 3);
                }
            }
            return indent(`${signature.name}${signature.modifier}: ${signature.type}<${signature.genericTypes.join(', ')}>${this.getPunctuation(declarationKind)}`);
        };
    }
    getFieldContextType(parentName, node) {
        if (this._fieldContextTypeMap[`${parentName}.${node.name}`]) {
            return this._fieldContextTypeMap[`${parentName}.${node.name}`].type;
        }
        return 'ContextType';
    }
    getContextType(parentName, node) {
        let contextType = this.getFieldContextType(parentName, node);
        for (const directive of node.directives) {
            const name = directive.name;
            const directiveMap = this._directiveContextTypesMap[name];
            if (directiveMap) {
                contextType = `${directiveMap.type}<${contextType}>`;
            }
        }
        return contextType;
    }
    applyRequireFields(argsType, fields) {
        this._globalDeclarations.add(REQUIRE_FIELDS_TYPE);
        return `RequireFields<${argsType}, ${fields.map(f => `'${f.name.value}'`).join(' | ')}>`;
    }
    applyOptionalFields(argsType, _fields) {
        return `Partial<${argsType}>`;
    }
    ObjectTypeDefinition(node) {
        var _a, _b, _c;
        const declarationKind = 'type';
        const name = this.convertName(node, {
            suffix: this.config.resolverTypeSuffix,
        });
        const typeName = node.name;
        const parentType = this.getParentTypeToUse(typeName);
        const isRootType = [
            (_a = this.schema.getQueryType()) === null || _a === void 0 ? void 0 : _a.name,
            (_b = this.schema.getMutationType()) === null || _b === void 0 ? void 0 : _b.name,
            (_c = this.schema.getSubscriptionType()) === null || _c === void 0 ? void 0 : _c.name,
        ].includes(typeName);
        const fieldsContent = node.fields.map((f) => f(node.name));
        if (!isRootType) {
            fieldsContent.push(indent(`${this.config.internalResolversPrefix}isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>${this.getPunctuation(declarationKind)}`));
        }
        const block = new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(name, `<ContextType = ${this.config.contextType.type}, ${this.transformParentGenericType(parentType)}>`)
            .withBlock(fieldsContent.join('\n'));
        this._collectedResolvers[node.name] = name + '<ContextType>';
        return block.string;
    }
    UnionTypeDefinition(node, key, parent) {
        const declarationKind = 'type';
        const name = this.convertName(node, {
            suffix: this.config.resolverTypeSuffix,
        });
        const originalNode = parent[key];
        const possibleTypes = originalNode.types
            .map(node => node.name.value)
            .map(f => `'${f}'`)
            .join(' | ');
        this._collectedResolvers[node.name] = name + '<ContextType>';
        const parentType = this.getParentTypeToUse(node.name);
        return new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(name, `<ContextType = ${this.config.contextType.type}, ${this.transformParentGenericType(parentType)}>`)
            .withBlock(indent(`${this.config.internalResolversPrefix}resolveType${this.config.optionalResolveType ? '?' : ''}: TypeResolveFn<${possibleTypes}, ParentType, ContextType>${this.getPunctuation(declarationKind)}`)).string;
    }
    ScalarTypeDefinition(node) {
        const nameAsString = node.name;
        const baseName = this.getTypeToUse(nameAsString);
        if (this._federation.skipScalar(nameAsString)) {
            return null;
        }
        this._hasScalars = true;
        this._collectedResolvers[node.name] = 'GraphQLScalarType';
        return new DeclarationBlock({
            ...this._declarationBlockConfig,
            blockTransformer(block) {
                return block;
            },
        })
            .export()
            .asKind('interface')
            .withName(this.convertName(node, {
            suffix: 'ScalarConfig',
        }), ` extends GraphQLScalarTypeConfig<${baseName}, any>`)
            .withBlock(indent(`name: '${node.name}'${this.getPunctuation('interface')}`)).string;
    }
    DirectiveDefinition(node, key, parent) {
        if (this._federation.skipDirective(node.name)) {
            return null;
        }
        const directiveName = this.convertName(node, {
            suffix: 'DirectiveResolver',
        });
        const sourceNode = parent[key];
        const hasArguments = sourceNode.arguments && sourceNode.arguments.length > 0;
        this._collectedDirectiveResolvers[node.name] = directiveName + '<any, any, ContextType>';
        const directiveArgsTypeName = this.convertName(node, {
            suffix: 'DirectiveArgs',
        });
        return [
            new DeclarationBlock({
                ...this._declarationBlockConfig,
                blockTransformer(block) {
                    return block;
                },
            })
                .export()
                .asKind('type')
                .withName(directiveArgsTypeName)
                .withContent(hasArguments
                ? `{\n${this._variablesTransformer.transform(sourceNode.arguments)}\n}`
                : '{ }').string,
            new DeclarationBlock({
                ...this._declarationBlockConfig,
                blockTransformer(block) {
                    return block;
                },
            })
                .export()
                .asKind('type')
                .withName(directiveName, `<Result, Parent, ContextType = ${this.config.contextType.type}, Args = ${directiveArgsTypeName}>`)
                .withContent(`DirectiveResolverFn<Result, Parent, ContextType, Args>`).string,
        ].join('\n');
    }
    buildEnumResolverContentBlock(_node, _mappedEnumType) {
        throw new Error(`buildEnumResolverContentBlock is not implemented!`);
    }
    buildEnumResolversExplicitMappedValues(_node, _valuesMapping) {
        throw new Error(`buildEnumResolversExplicitMappedValues is not implemented!`);
    }
    EnumTypeDefinition(node) {
        var _a;
        const rawTypeName = node.name;
        // If we have enumValues set, and it's point to an external enum - we need to allow internal values resolvers
        // In case we have enumValues set but as explicit values, no need to to do mapping since it's already
        // have type validation (the original enum has been modified by base types plugin).
        // If we have mapper for that type - we can skip
        if (!this.config.mappers[rawTypeName] && !this.config.enumValues[rawTypeName]) {
            return null;
        }
        const name = this.convertName(node, { suffix: this.config.resolverTypeSuffix });
        this._collectedResolvers[rawTypeName] = name;
        const hasExplicitValues = (_a = this.config.enumValues[rawTypeName]) === null || _a === void 0 ? void 0 : _a.mappedValues;
        return new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind('type')
            .withName(name)
            .withContent(hasExplicitValues
            ? this.buildEnumResolversExplicitMappedValues(node, this.config.enumValues[rawTypeName].mappedValues)
            : this.buildEnumResolverContentBlock(node, this.getTypeToUse(rawTypeName))).string;
    }
    InterfaceTypeDefinition(node) {
        const name = this.convertName(node, {
            suffix: this.config.resolverTypeSuffix,
        });
        const declarationKind = 'type';
        const allTypesMap = this._schema.getTypeMap();
        const implementingTypes = [];
        this._collectedResolvers[node.name] = name + '<ContextType>';
        for (const graphqlType of Object.values(allTypesMap)) {
            if (graphqlType instanceof GraphQLObjectType) {
                const allInterfaces = graphqlType.getInterfaces();
                if (allInterfaces.find(int => int.name === node.name)) {
                    implementingTypes.push(graphqlType.name);
                }
            }
        }
        const parentType = this.getParentTypeToUse(node.name);
        const possibleTypes = implementingTypes.map(name => `'${name}'`).join(' | ') || 'null';
        const fields = this.config.onlyResolveTypeForInterfaces ? [] : node.fields || [];
        return new DeclarationBlock(this._declarationBlockConfig)
            .export()
            .asKind(declarationKind)
            .withName(name, `<ContextType = ${this.config.contextType.type}, ${this.transformParentGenericType(parentType)}>`)
            .withBlock([
            indent(`${this.config.internalResolversPrefix}resolveType${this.config.optionalResolveType ? '?' : ''}: TypeResolveFn<${possibleTypes}, ParentType, ContextType>${this.getPunctuation(declarationKind)}`),
            ...fields.map((f) => f(node.name)),
        ].join('\n')).string;
    }
    SchemaDefinition() {
        return null;
    }
}
function replacePlaceholder(pattern, typename) {
    return pattern.replace(/\{T\}/g, typename);
}
function hasPlaceholder(pattern) {
    return pattern.includes('{T}');
}
