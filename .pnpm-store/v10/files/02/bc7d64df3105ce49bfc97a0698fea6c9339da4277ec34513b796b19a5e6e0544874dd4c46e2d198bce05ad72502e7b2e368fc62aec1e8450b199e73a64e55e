import { createHash } from 'crypto';
import { getBaseType } from '@graphql-codegen/plugin-helpers';
import { getRootTypes } from '@graphql-tools/utils';
import autoBind from 'auto-bind';
import { isInterfaceType, isListType, isNonNullType, isObjectType, isTypeSubTypeOf, isUnionType, Kind, SchemaMetaFieldDef, TypeMetaFieldDef, } from 'graphql';
import { DeclarationBlock, getFieldNodeNameValue, getPossibleTypes, hasConditionalDirectives, mergeSelectionSets, separateSelectionSet, } from './utils.js';
function isMetadataFieldName(name) {
    return ['__schema', '__type'].includes(name);
}
const metadataFieldMap = {
    __schema: SchemaMetaFieldDef,
    __type: TypeMetaFieldDef,
};
export class SelectionSetToObject {
    constructor(_processor, _scalars, _schema, _convertName, _getFragmentSuffix, _loadedFragments, _config, _parentSchemaType, _selectionSet) {
        this._processor = _processor;
        this._scalars = _scalars;
        this._schema = _schema;
        this._convertName = _convertName;
        this._getFragmentSuffix = _getFragmentSuffix;
        this._loadedFragments = _loadedFragments;
        this._config = _config;
        this._parentSchemaType = _parentSchemaType;
        this._selectionSet = _selectionSet;
        this._primitiveFields = [];
        this._primitiveAliasedFields = [];
        this._linksFields = [];
        this._queriedForTypename = false;
        autoBind(this);
    }
    createNext(parentSchemaType, selectionSet) {
        return new SelectionSetToObject(this._processor, this._scalars, this._schema, this._convertName.bind(this), this._getFragmentSuffix.bind(this), this._loadedFragments, this._config, parentSchemaType, selectionSet);
    }
    /**
     * traverse the inline fragment nodes recursively for collecting the selectionSets on each type
     */
    _collectInlineFragments(parentType, nodes, types) {
        if (isListType(parentType) || isNonNullType(parentType)) {
            return this._collectInlineFragments(parentType.ofType, nodes, types);
        }
        if (isObjectType(parentType)) {
            for (const node of nodes) {
                const typeOnSchema = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
                const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
                const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
                const directives = node.directives || undefined;
                if (isObjectType(typeOnSchema)) {
                    this._appendToTypeMap(types, typeOnSchema.name, fields);
                    this._appendToTypeMap(types, typeOnSchema.name, spreadsUsage[typeOnSchema.name]);
                    this._appendToTypeMap(types, typeOnSchema.name, directives);
                    this._collectInlineFragments(typeOnSchema, inlines, types);
                }
                else if (isInterfaceType(typeOnSchema) && parentType.getInterfaces().includes(typeOnSchema)) {
                    this._appendToTypeMap(types, parentType.name, fields);
                    this._appendToTypeMap(types, parentType.name, spreadsUsage[parentType.name]);
                    this._collectInlineFragments(typeOnSchema, inlines, types);
                }
            }
        }
        else if (isInterfaceType(parentType)) {
            const possibleTypes = getPossibleTypes(this._schema, parentType);
            for (const node of nodes) {
                const schemaType = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
                const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
                const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
                if (isObjectType(schemaType) && possibleTypes.find(possibleType => possibleType.name === schemaType.name)) {
                    this._appendToTypeMap(types, schemaType.name, fields);
                    this._appendToTypeMap(types, schemaType.name, spreadsUsage[schemaType.name]);
                    this._collectInlineFragments(schemaType, inlines, types);
                }
                else if (isInterfaceType(schemaType) && schemaType.name === parentType.name) {
                    for (const possibleType of possibleTypes) {
                        this._appendToTypeMap(types, possibleType.name, fields);
                        this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
                        this._collectInlineFragments(schemaType, inlines, types);
                    }
                }
                else {
                    // it must be an interface type that is spread on an interface field
                    for (const possibleType of possibleTypes) {
                        if (!node.typeCondition) {
                            throw new Error('Invalid state. Expected type condition for interface spread on a interface field.');
                        }
                        const fragmentSpreadType = this._schema.getType(node.typeCondition.name.value);
                        // the field should only be added to the valid selections
                        // in case the possible type actually implements the given interface
                        if (isTypeSubTypeOf(this._schema, possibleType, fragmentSpreadType)) {
                            this._appendToTypeMap(types, possibleType.name, fields);
                            this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
                        }
                    }
                }
            }
        }
        else if (isUnionType(parentType)) {
            const possibleTypes = parentType.getTypes();
            for (const node of nodes) {
                const schemaType = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
                const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
                const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
                if (isObjectType(schemaType) && possibleTypes.find(possibleType => possibleType.name === schemaType.name)) {
                    this._appendToTypeMap(types, schemaType.name, fields);
                    this._appendToTypeMap(types, schemaType.name, spreadsUsage[schemaType.name]);
                    this._collectInlineFragments(schemaType, inlines, types);
                }
                else if (isInterfaceType(schemaType)) {
                    const possibleInterfaceTypes = getPossibleTypes(this._schema, schemaType);
                    for (const possibleType of possibleTypes) {
                        if (possibleInterfaceTypes.find(possibleInterfaceType => possibleInterfaceType.name === possibleType.name)) {
                            this._appendToTypeMap(types, possibleType.name, fields);
                            this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
                            this._collectInlineFragments(schemaType, inlines, types);
                        }
                    }
                }
                else {
                    for (const possibleType of possibleTypes) {
                        this._appendToTypeMap(types, possibleType.name, fields);
                        this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
                    }
                }
            }
        }
    }
    _createInlineFragmentForFieldNodes(parentType, fieldNodes) {
        return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: {
                kind: Kind.NAMED_TYPE,
                name: {
                    kind: Kind.NAME,
                    value: parentType.name,
                },
            },
            directives: [],
            selectionSet: {
                kind: Kind.SELECTION_SET,
                selections: fieldNodes,
            },
        };
    }
    buildFragmentSpreadsUsage(spreads) {
        var _a;
        const selectionNodesByTypeName = {};
        for (const spread of spreads) {
            const fragmentSpreadObject = this._loadedFragments.find(lf => lf.name === spread.name.value);
            if (fragmentSpreadObject) {
                const schemaType = this._schema.getType(fragmentSpreadObject.onType);
                const possibleTypesForFragment = getPossibleTypes(this._schema, schemaType);
                for (const possibleType of possibleTypesForFragment) {
                    const fragmentSuffix = this._getFragmentSuffix(spread.name.value);
                    const usage = this.buildFragmentTypeName(spread.name.value, fragmentSuffix, possibleTypesForFragment.length === 1 ? null : possibleType.name);
                    selectionNodesByTypeName[_a = possibleType.name] || (selectionNodesByTypeName[_a] = []);
                    selectionNodesByTypeName[possibleType.name].push({
                        fragmentName: spread.name.value,
                        typeName: usage,
                        onType: fragmentSpreadObject.onType,
                        selectionNodes: [...fragmentSpreadObject.node.selectionSet.selections],
                    });
                }
            }
        }
        return selectionNodesByTypeName;
    }
    flattenSelectionSet(selections, parentSchemaType) {
        const selectionNodesByTypeName = new Map();
        const inlineFragmentSelections = [];
        const fieldNodes = [];
        const fragmentSpreads = [];
        for (const selection of selections) {
            switch (selection.kind) {
                case Kind.FIELD:
                    fieldNodes.push(selection);
                    break;
                case Kind.INLINE_FRAGMENT:
                    inlineFragmentSelections.push(selection);
                    break;
                case Kind.FRAGMENT_SPREAD:
                    fragmentSpreads.push(selection);
                    break;
            }
        }
        if (fieldNodes.length) {
            inlineFragmentSelections.push(this._createInlineFragmentForFieldNodes(parentSchemaType !== null && parentSchemaType !== void 0 ? parentSchemaType : this._parentSchemaType, fieldNodes));
        }
        this._collectInlineFragments(parentSchemaType !== null && parentSchemaType !== void 0 ? parentSchemaType : this._parentSchemaType, inlineFragmentSelections, selectionNodesByTypeName);
        const fragmentsUsage = this.buildFragmentSpreadsUsage(fragmentSpreads);
        for (const [typeName, records] of Object.entries(fragmentsUsage)) {
            this._appendToTypeMap(selectionNodesByTypeName, typeName, records);
        }
        return selectionNodesByTypeName;
    }
    _appendToTypeMap(types, typeName, nodes) {
        if (!types.has(typeName)) {
            types.set(typeName, []);
        }
        if (nodes && nodes.length > 0) {
            types.get(typeName).push(...nodes);
        }
    }
    /**
     * mustAddEmptyObject indicates that not all possible types on a union or interface field are covered.
     */
    _buildGroupedSelections() {
        var _a;
        if (!((_a = this._selectionSet) === null || _a === void 0 ? void 0 : _a.selections) || this._selectionSet.selections.length === 0) {
            return { grouped: {}, mustAddEmptyObject: true };
        }
        const selectionNodesByTypeName = this.flattenSelectionSet(this._selectionSet.selections);
        // in case there is not a selection for each type, we need to add a empty type.
        let mustAddEmptyObject = false;
        const possibleTypes = getPossibleTypes(this._schema, this._parentSchemaType);
        if (!this._config.mergeFragmentTypes || this._config.inlineFragmentTypes === 'mask') {
            const grouped = possibleTypes.reduce((prev, type) => {
                const typeName = type.name;
                const schemaType = this._schema.getType(typeName);
                if (!isObjectType(schemaType)) {
                    throw new TypeError(`Invalid state! Schema type ${typeName} is not a valid GraphQL object!`);
                }
                const selectionNodes = selectionNodesByTypeName.get(typeName) || [];
                prev[typeName] || (prev[typeName] = []);
                const { fields } = this.buildSelectionSet(schemaType, selectionNodes);
                const transformedSet = this.selectionSetStringFromFields(fields);
                if (transformedSet) {
                    prev[typeName].push(transformedSet);
                }
                else {
                    mustAddEmptyObject = true;
                }
                return prev;
            }, {});
            return { grouped, mustAddEmptyObject };
        }
        // Accumulate a map of selected fields to the typenames that
        // share the exact same selected fields. When we find multiple
        // typenames with the same set of fields, we can collapse the
        // generated type to the selected fields and a string literal
        // union of the typenames.
        //
        // E.g. {
        //        __typename: "foo" | "bar";
        //        shared: string;
        //      }
        const grouped = possibleTypes.reduce((prev, type) => {
            var _a, _b;
            const typeName = type.name;
            const schemaType = this._schema.getType(typeName);
            if (!isObjectType(schemaType)) {
                throw new TypeError(`Invalid state! Schema type ${typeName} is not a valid GraphQL object!`);
            }
            const selectionNodes = selectionNodesByTypeName.get(typeName) || [];
            const { typeInfo, fields } = this.buildSelectionSet(schemaType, selectionNodes);
            const key = this.selectionSetStringFromFields(fields);
            prev[key] = {
                fields,
                types: [...((_b = (_a = prev[key]) === null || _a === void 0 ? void 0 : _a.types) !== null && _b !== void 0 ? _b : []), typeInfo || { name: '', type: type.name }].filter(Boolean),
            };
            return prev;
        }, {});
        // For every distinct set of fields, create the corresponding
        // string literal union of typenames.
        const compacted = Object.keys(grouped).reduce((acc, key) => {
            const typeNames = grouped[key].types.map(t => t.type);
            // Don't create very large string literal unions. TypeScript
            // will stop comparing some nested union types types when
            // they contain props with more than some number of string
            // literal union members (testing with TS 4.5 stops working
            // at 25 for a naive test case:
            // https://www.typescriptlang.org/play?ts=4.5.4&ssl=29&ssc=10&pln=29&pc=1#code/C4TwDgpgBAKg9nAMgQwE4HNoF4BQV9QA+UA3ngRQJYB21EqAXDsQEQCMLzULATJ6wGZ+3ACzCWAVnEA2cQHZxADnEBOcWwAM6jl3Z9dbIQbEGpB2QYUHlBtbp5b7O1j30ujLky7Os4wABb0nAC+ODigkFAAQlBYUOT4xGQUVLT0TKzO3G7cHqLiPtwWrFasNqx2mY6ZWXrqeexe3GyF7MXNpc3lzZXZ1dm1ruI8DTxNvGahFEkJKTR0jLMpRNx+gaicy6E4APQ7AALAAM4AtJTo1HCoEDgANhDAUMgMsAgoGNikwQDcdw9QACMXjE4shfmEItAAGI0bCzGbLfDzdIGYbiBrjVrtFidFjdFi9dj9di1Ng5dgNNjjFrqbFsXFsfFsQkOYaDckjYbjNZBHDbPaHU7nS7XP6PZBsF4wuixL6-e6PAGS6KyiXfIA
            const max_types = 20;
            for (let i = 0; i < typeNames.length; i += max_types) {
                const selectedTypes = typeNames.slice(i, i + max_types);
                const typenameUnion = grouped[key].types[0].name
                    ? this._processor.transformTypenameField(selectedTypes.join(' | '), grouped[key].types[0].name)
                    : [];
                const transformedSet = this.selectionSetStringFromFields([...typenameUnion, ...grouped[key].fields]);
                // The keys here will be used to generate intermediary
                // fragment names. To avoid blowing up the type name on large
                // unions, calculate a stable hash here instead.
                //
                // Also use fragment hashing if skipTypename is true, since we
                // then don't have a typename for naming the fragment.
                acc[selectedTypes.length <= 3
                    ? selectedTypes.join('_')
                    : createHash('sha256')
                        .update(selectedTypes.join() || transformedSet || '')
                        .digest('base64')] = [transformedSet];
            }
            return acc;
        }, {});
        return { grouped: compacted, mustAddEmptyObject };
    }
    selectionSetStringFromFields(fields) {
        const allStrings = fields.filter((f) => typeof f === 'string');
        const allObjects = fields
            .filter((f) => typeof f !== 'string')
            .map(t => `${t.name}: ${t.type}`);
        const mergedObjects = allObjects.length ? this._processor.buildFieldsIntoObject(allObjects) : null;
        const transformedSet = this._processor.buildSelectionSetFromStrings([...allStrings, mergedObjects].filter(Boolean));
        return transformedSet;
    }
    buildSelectionSet(parentSchemaType, selectionNodes) {
        var _a, _b, _c;
        const primitiveFields = new Map();
        const primitiveAliasFields = new Map();
        const linkFieldSelectionSets = new Map();
        let requireTypename = false;
        // usages via fragment typescript type
        const fragmentsSpreadUsages = [];
        // ensure we mutate no function params
        selectionNodes = [...selectionNodes];
        let inlineFragmentConditional = false;
        for (const selectionNode of selectionNodes) {
            if ('kind' in selectionNode) {
                if (selectionNode.kind === 'Field') {
                    if (!selectionNode.selectionSet) {
                        if (selectionNode.alias) {
                            primitiveAliasFields.set(selectionNode.alias.value, selectionNode);
                        }
                        else if (selectionNode.name.value === '__typename') {
                            requireTypename = true;
                        }
                        else {
                            primitiveFields.set(selectionNode.name.value, selectionNode);
                        }
                    }
                    else {
                        let selectedField = null;
                        const fields = parentSchemaType.getFields();
                        selectedField = fields[selectionNode.name.value];
                        if (isMetadataFieldName(selectionNode.name.value)) {
                            selectedField = metadataFieldMap[selectionNode.name.value];
                        }
                        if (!selectedField) {
                            continue;
                        }
                        const fieldName = getFieldNodeNameValue(selectionNode);
                        let linkFieldNode = linkFieldSelectionSets.get(fieldName);
                        if (!linkFieldNode) {
                            linkFieldNode = {
                                selectedFieldType: selectedField.type,
                                field: selectionNode,
                            };
                        }
                        else {
                            linkFieldNode = {
                                ...linkFieldNode,
                                field: {
                                    ...linkFieldNode.field,
                                    selectionSet: mergeSelectionSets(linkFieldNode.field.selectionSet, selectionNode.selectionSet),
                                },
                            };
                        }
                        linkFieldSelectionSets.set(fieldName, linkFieldNode);
                    }
                }
                else if (selectionNode.kind === 'Directive') {
                    if (['skip', 'include'].includes((_a = selectionNode === null || selectionNode === void 0 ? void 0 : selectionNode.name) === null || _a === void 0 ? void 0 : _a.value)) {
                        inlineFragmentConditional = true;
                    }
                }
                else {
                    throw new TypeError('Unexpected type.');
                }
                continue;
            }
            if (this._config.inlineFragmentTypes === 'combine' || this._config.inlineFragmentTypes === 'mask') {
                fragmentsSpreadUsages.push(selectionNode.typeName);
                continue;
            }
            // Handle Fragment Spreads by generating inline types.
            const fragmentType = this._schema.getType(selectionNode.onType);
            if (fragmentType == null) {
                throw new TypeError(`Unexpected error: Type ${selectionNode.onType} does not exist within schema.`);
            }
            if (parentSchemaType.name === selectionNode.onType ||
                parentSchemaType.getInterfaces().find(iinterface => iinterface.name === selectionNode.onType) != null ||
                (isUnionType(fragmentType) &&
                    fragmentType.getTypes().find(objectType => objectType.name === parentSchemaType.name))) {
                // also process fields from fragment that apply for this parentType
                const flatten = this.flattenSelectionSet(selectionNode.selectionNodes, parentSchemaType);
                const typeNodes = (_b = flatten.get(parentSchemaType.name)) !== null && _b !== void 0 ? _b : [];
                selectionNodes.push(...typeNodes);
                for (const iinterface of parentSchemaType.getInterfaces()) {
                    const typeNodes = (_c = flatten.get(iinterface.name)) !== null && _c !== void 0 ? _c : [];
                    selectionNodes.push(...typeNodes);
                }
            }
        }
        const linkFields = [];
        for (const { field, selectedFieldType } of linkFieldSelectionSets.values()) {
            const realSelectedFieldType = getBaseType(selectedFieldType);
            const selectionSet = this.createNext(realSelectedFieldType, field.selectionSet);
            const isConditional = hasConditionalDirectives(field) || inlineFragmentConditional;
            linkFields.push({
                alias: field.alias ? this._processor.config.formatNamedField(field.alias.value, selectedFieldType) : undefined,
                name: this._processor.config.formatNamedField(field.name.value, selectedFieldType, isConditional),
                type: realSelectedFieldType.name,
                selectionSet: this._processor.config.wrapTypeWithModifiers(selectionSet.transformSelectionSet().split(`\n`).join(`\n  `), selectedFieldType),
            });
        }
        const typeInfoField = this.buildTypeNameField(parentSchemaType, this._config.nonOptionalTypename, this._config.addTypename, requireTypename, this._config.skipTypeNameForRoot);
        const transformed = [
            // Only add the typename field if we're not merging fragment
            // types. If we are merging, we need to wait until we know all
            // the involved typenames.
            ...(typeInfoField && (!this._config.mergeFragmentTypes || this._config.inlineFragmentTypes === 'mask')
                ? this._processor.transformTypenameField(typeInfoField.type, typeInfoField.name)
                : []),
            ...this._processor.transformPrimitiveFields(parentSchemaType, Array.from(primitiveFields.values()).map(field => ({
                isConditional: hasConditionalDirectives(field),
                fieldName: field.name.value,
            }))),
            ...this._processor.transformAliasesPrimitiveFields(parentSchemaType, Array.from(primitiveAliasFields.values()).map(field => ({
                alias: field.alias.value,
                fieldName: field.name.value,
            }))),
            ...this._processor.transformLinkFields(linkFields),
        ].filter(Boolean);
        const allStrings = transformed.filter(t => typeof t === 'string');
        const allObjectsMerged = transformed
            .filter(t => typeof t !== 'string')
            .map((t) => `${t.name}: ${t.type}`);
        let mergedObjectsAsString = null;
        if (allObjectsMerged.length > 0) {
            mergedObjectsAsString = this._processor.buildFieldsIntoObject(allObjectsMerged);
        }
        const fields = [...allStrings, mergedObjectsAsString].filter(Boolean);
        if (fragmentsSpreadUsages.length) {
            if (this._config.inlineFragmentTypes === 'combine') {
                fields.push(...fragmentsSpreadUsages);
            }
            else if (this._config.inlineFragmentTypes === 'mask') {
                fields.push(`{ ' $fragmentRefs'?: { ${fragmentsSpreadUsages.map(name => `'${name}': ${name}`).join(`;`)} } }`);
            }
        }
        return { typeInfo: typeInfoField, fields };
    }
    buildTypeNameField(type, nonOptionalTypename = this._config.nonOptionalTypename, addTypename = this._config.addTypename, queriedForTypename = this._queriedForTypename, skipTypeNameForRoot = this._config.skipTypeNameForRoot) {
        const rootTypes = getRootTypes(this._schema);
        if (rootTypes.has(type) && skipTypeNameForRoot && !queriedForTypename) {
            return null;
        }
        if (nonOptionalTypename || addTypename || queriedForTypename) {
            const optionalTypename = !queriedForTypename && !nonOptionalTypename;
            return {
                name: `${this._processor.config.formatNamedField('__typename')}${optionalTypename ? '?' : ''}`,
                type: `'${type.name}'`,
            };
        }
        return null;
    }
    getUnknownType() {
        return 'never';
    }
    getEmptyObjectType() {
        return `{}`;
    }
    getEmptyObjectTypeString(mustAddEmptyObject) {
        return mustAddEmptyObject ? ' | ' + this.getEmptyObjectType() : ``;
    }
    transformSelectionSet() {
        const { grouped, mustAddEmptyObject } = this._buildGroupedSelections();
        // This might happen in case we have an interface, that is being queries, without any GraphQL
        // "type" that implements it. It will lead to a runtime error, but we aim to try to reflect that in
        // build time as well.
        if (Object.keys(grouped).length === 0) {
            return this.getUnknownType();
        }
        return (Object.keys(grouped)
            .map(typeName => {
            const relevant = grouped[typeName].filter(Boolean);
            if (relevant.length === 0) {
                return null;
            }
            if (relevant.length === 1) {
                return relevant[0];
            }
            return `( ${relevant.join(' & ')} )`;
        })
            .filter(Boolean)
            .join(' | ') + this.getEmptyObjectTypeString(mustAddEmptyObject));
    }
    transformFragmentSelectionSetToTypes(fragmentName, fragmentSuffix, declarationBlockConfig) {
        const { grouped } = this._buildGroupedSelections();
        const subTypes = Object.keys(grouped)
            .map(typeName => {
            const possibleFields = grouped[typeName].filter(Boolean);
            const declarationName = this.buildFragmentTypeName(fragmentName, fragmentSuffix, typeName);
            if (possibleFields.length === 0) {
                if (!this._config.addTypename) {
                    return { name: declarationName, content: this.getEmptyObjectType() };
                }
                return null;
            }
            return { name: declarationName, content: possibleFields.join(' & ') };
        })
            .filter(Boolean);
        const fragmentTypeName = this.buildFragmentTypeName(fragmentName, fragmentSuffix);
        const fragmentMaskPartial = this._config.inlineFragmentTypes === 'mask' ? ` & { ' $fragmentName'?: '${fragmentTypeName}' }` : '';
        if (subTypes.length === 1) {
            return new DeclarationBlock(declarationBlockConfig)
                .export()
                .asKind('type')
                .withName(fragmentTypeName)
                .withContent(subTypes[0].content + fragmentMaskPartial).string;
        }
        return [
            ...subTypes.map(t => new DeclarationBlock(declarationBlockConfig)
                .export(this._config.exportFragmentSpreadSubTypes)
                .asKind('type')
                .withName(t.name)
                .withContent(`${t.content}${this._config.inlineFragmentTypes === 'mask' ? ` & { ' $fragmentName'?: '${t.name}' }` : ''}`).string),
            new DeclarationBlock(declarationBlockConfig)
                .export()
                .asKind('type')
                .withName(fragmentTypeName)
                .withContent(subTypes.map(t => t.name).join(' | ')).string,
        ].join('\n');
    }
    buildFragmentTypeName(name, suffix, typeName = '') {
        return this._convertName(name, {
            useTypesPrefix: true,
            suffix: typeName ? `_${typeName}_${suffix}` : suffix,
        });
    }
}
