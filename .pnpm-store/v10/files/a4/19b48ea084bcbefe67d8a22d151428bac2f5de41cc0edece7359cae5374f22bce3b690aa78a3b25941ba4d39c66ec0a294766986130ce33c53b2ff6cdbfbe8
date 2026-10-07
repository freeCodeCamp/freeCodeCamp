"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeComposer = void 0;
const graphql_1 = require("./graphql");
const is_1 = require("./utils/is");
const misc_1 = require("./utils/misc");
const configToDefine_1 = require("./utils/configToDefine");
const graphqlVersion_1 = require("./utils/graphqlVersion");
const SchemaComposer_1 = require("./SchemaComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const typeHelpers_1 = require("./utils/typeHelpers");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const definitionNode_1 = require("./utils/definitionNode");
class EnumTypeComposer {
    constructor(graphqlType, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new EnumTypeComposer(GraphQLEnumType, SchemaComposer)`');
        }
        if (!(graphqlType instanceof graphql_1.GraphQLEnumType)) {
            throw new Error('EnumTypeComposer accept only GraphQLEnumType in constructor');
        }
        this.schemaComposer = schemaComposer;
        this._gqType = graphqlType;
        this.schemaComposer.set(graphqlType, this);
        this.schemaComposer.set(graphqlType.name, this);
        this._gqcFields = (0, configToDefine_1.convertEnumValuesToConfig)(this._gqType.getValues(), this.schemaComposer);
        if (!this._gqType.astNode) {
            this._gqType.astNode = (0, definitionNode_1.getEnumTypeDefinitionNode)(this);
        }
        this._gqcIsModified = false;
    }
    static create(typeDef, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `EnumTypeComposer.create(typeDef, schemaComposer)`');
        }
        if (schemaComposer.hasInstance(typeDef, EnumTypeComposer)) {
            return schemaComposer.getETC(typeDef);
        }
        const etc = this.createTemp(typeDef, schemaComposer);
        if (schemaComposer)
            schemaComposer.add(etc);
        return etc;
    }
    static createTemp(typeDef, schemaComposer) {
        const sc = schemaComposer || new SchemaComposer_1.SchemaComposer();
        let ETC;
        if ((0, is_1.isString)(typeDef)) {
            const typeName = typeDef;
            if ((0, typeHelpers_1.isTypeNameString)(typeName)) {
                ETC = new EnumTypeComposer(new graphql_1.GraphQLEnumType({
                    name: typeName,
                    values: graphqlVersion_1.graphqlVersion < 13 ? { _OldGraphqlStubValue_: {} } : {},
                }), sc);
            }
            else {
                ETC = sc.typeMapper.convertSDLTypeDefinition(typeName);
                if (!(ETC instanceof EnumTypeComposer)) {
                    throw new Error('You should provide correct GraphQLEnumType type definition. ' +
                        'Eg. `enum MyType { KEY1 KEY2 KEY3 }`');
                }
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLEnumType) {
            ETC = new EnumTypeComposer(typeDef, sc);
        }
        else if ((0, is_1.isObject)(typeDef)) {
            const type = new graphql_1.GraphQLEnumType(Object.assign({}, typeDef));
            ETC = new EnumTypeComposer(type, sc);
            ETC.setFields(typeDef.values || {});
            ETC.setExtensions(typeDef.extensions);
            if (Array.isArray(typeDef === null || typeDef === void 0 ? void 0 : typeDef.directives)) {
                ETC.setDirectives(typeDef.directives);
            }
        }
        else {
            throw new Error(`You should provide GraphQLEnumTypeConfig or string with enum name or SDL. Provided:\n${(0, misc_1.inspect)(typeDef)}`);
        }
        return ETC;
    }
    hasField(name) {
        const values = this.getFields();
        return !!values[name];
    }
    getFields() {
        return this._gqcFields;
    }
    getField(name) {
        const values = this.getFields();
        if (!values[name]) {
            throw new Error(`Cannot get value '${name}' from enum type '${this.getTypeName()}'. Value with such name does not exist.`);
        }
        return values[name];
    }
    getFieldNames() {
        return Object.keys(this._gqcFields);
    }
    setFields(values) {
        this._gqcFields = {};
        Object.keys(values).forEach((valueName) => {
            this.setField(valueName, values[valueName]);
        });
        return this;
    }
    setField(name, valueConfig) {
        this._gqcFields[name] = {
            value: valueConfig.hasOwnProperty('value') ? valueConfig.value : name,
            description: valueConfig.description,
            deprecationReason: valueConfig.deprecationReason,
            extensions: valueConfig.extensions || {},
            directives: valueConfig.directives || [],
        };
        this._gqcIsModified = true;
        return this;
    }
    addFields(newValues) {
        Object.keys(newValues).forEach((valueName) => {
            this.setField(valueName, newValues[valueName]);
        });
        return this;
    }
    removeField(nameOrArray) {
        const valueNames = Array.isArray(nameOrArray) ? nameOrArray : [nameOrArray];
        valueNames.forEach((valueName) => {
            delete this._gqcFields[valueName];
            this._gqcIsModified = true;
        });
        return this;
    }
    removeOtherFields(fieldNameOrArray) {
        const keepFieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        Object.keys(this._gqcFields).forEach((fieldName) => {
            if (keepFieldNames.indexOf(fieldName) === -1) {
                delete this._gqcFields[fieldName];
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    reorderFields(names) {
        const orderedFields = {};
        const fields = this._gqcFields;
        names.forEach((name) => {
            if (fields[name]) {
                orderedFields[name] = fields[name];
                delete fields[name];
            }
        });
        this._gqcFields = Object.assign(Object.assign({}, orderedFields), fields);
        this._gqcIsModified = true;
        return this;
    }
    extendField(name, partialValueConfig) {
        let prevValueConfig;
        try {
            prevValueConfig = this.getField(name);
        }
        catch (e) {
            throw new Error(`Cannot extend value '${name}' from enum '${this.getTypeName()}'. Value does not exist.`);
        }
        this.setField(name, Object.assign(Object.assign(Object.assign({}, prevValueConfig), partialValueConfig), { extensions: Object.assign(Object.assign({}, (prevValueConfig.extensions || {})), (partialValueConfig.extensions || {})), directives: [...(prevValueConfig.directives || []), ...(partialValueConfig.directives || [])] }));
        return this;
    }
    deprecateFields(fields) {
        const existedFieldNames = this.getFieldNames();
        if (typeof fields === 'string') {
            if (existedFieldNames.indexOf(fields) === -1) {
                throw new Error(`Cannot deprecate non-existent value '${fields}' from enum '${this.getTypeName()}'`);
            }
            this.extendField(fields, { deprecationReason: 'deprecated' });
        }
        else if (Array.isArray(fields)) {
            fields.forEach((field) => {
                if (existedFieldNames.indexOf(field) === -1) {
                    throw new Error(`Cannot deprecate non-existent value '${field}' from enum '${this.getTypeName()}'`);
                }
                this.extendField(field, { deprecationReason: 'deprecated' });
            });
        }
        else {
            const fieldMap = fields;
            Object.keys(fieldMap).forEach((field) => {
                if (existedFieldNames.indexOf(field) === -1) {
                    throw new Error(`Cannot deprecate non-existent value '${field}' from enum '${this.getTypeName()}'`);
                }
                const deprecationReason = fieldMap[field];
                this.extendField(field, { deprecationReason });
            });
        }
        return this;
    }
    getType() {
        const gqType = this._gqType;
        if (this._gqcIsModified) {
            this._gqcIsModified = false;
            gqType.astNode = (0, definitionNode_1.getEnumTypeDefinitionNode)(this);
            if (graphqlVersion_1.graphqlVersion >= 14) {
                gqType._values = (0, configToDefine_1.defineEnumValues)(gqType, this._gqcFields, gqType.astNode);
                gqType._valueLookup = new Map(gqType._values.map((enumValue) => [enumValue.value, enumValue]));
                gqType._nameLookup = (0, misc_1.keyMap)(gqType._values, (value) => value.name);
            }
            else {
                delete gqType._valueLookup;
                delete gqType._nameLookup;
                gqType._values = (0, configToDefine_1.defineEnumValues)(gqType, this._gqcFields, gqType.astNode);
            }
        }
        return gqType;
    }
    getTypePlural() {
        return new ListComposer_1.ListComposer(this);
    }
    getTypeNonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    get List() {
        return new ListComposer_1.ListComposer(this);
    }
    get NonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    getTypeName() {
        return this._gqType.name;
    }
    setTypeName(name) {
        this._gqType.name = name;
        this._gqcIsModified = true;
        this.schemaComposer.add(this);
        return this;
    }
    getDescription() {
        return this._gqType.description || '';
    }
    setDescription(description) {
        this._gqType.description = description;
        this._gqcIsModified = true;
        return this;
    }
    clone(newTypeNameOrTC) {
        if (!newTypeNameOrTC) {
            throw new Error('You should provide newTypeName:string for EnumTypeComposer.clone()');
        }
        const cloned = newTypeNameOrTC instanceof EnumTypeComposer
            ? newTypeNameOrTC
            : EnumTypeComposer.create(newTypeNameOrTC, this.schemaComposer);
        cloned._gqcFields = (0, misc_1.mapEachKey)(this._gqcFields, (fieldConfig) => (Object.assign(Object.assign({}, fieldConfig), { extensions: Object.assign({}, fieldConfig.extensions), directives: fieldConfig.directives && [...(fieldConfig.directives || [])] })));
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        cloned.setDirectives(this.getDirectives());
        return cloned;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for EnumTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return cloneMap.get(this);
        const cloned = EnumTypeComposer.create(this.getTypeName(), anotherSchemaComposer);
        cloneMap.set(this, cloned);
        return this.clone(cloned);
    }
    merge(type) {
        let tc;
        if (type instanceof graphql_1.GraphQLEnumType) {
            tc = EnumTypeComposer.createTemp(type, this.schemaComposer);
        }
        else if (type instanceof EnumTypeComposer) {
            tc = type;
        }
        else {
            throw new Error(`Cannot merge ${(0, misc_1.inspect)(type)} with EnumType(${this.getTypeName()}). Provided type should be GraphQLEnumType or EnumTypeComposer.`);
        }
        this.addFields(tc.getFields());
        return this;
    }
    getExtensions() {
        if (!this._gqcExtensions) {
            return {};
        }
        else {
            return this._gqcExtensions;
        }
    }
    setExtensions(extensions) {
        this._gqcExtensions = extensions;
        this._gqcIsModified = true;
        return this;
    }
    extendExtensions(extensions) {
        const current = this.getExtensions();
        this.setExtensions(Object.assign(Object.assign({}, current), extensions));
        return this;
    }
    clearExtensions() {
        this.setExtensions({});
        return this;
    }
    getExtension(extensionName) {
        const extensions = this.getExtensions();
        return extensions[extensionName];
    }
    hasExtension(extensionName) {
        const extensions = this.getExtensions();
        return extensionName in extensions;
    }
    setExtension(extensionName, value) {
        this.extendExtensions({
            [extensionName]: value,
        });
        return this;
    }
    removeExtension(extensionName) {
        const extensions = Object.assign({}, this.getExtensions());
        delete extensions[extensionName];
        this.setExtensions(extensions);
        return this;
    }
    getFieldExtensions(fieldName) {
        const field = this.getField(fieldName);
        return field.extensions || {};
    }
    setFieldExtensions(fieldName, extensions) {
        const field = this.getField(fieldName);
        this.setField(fieldName, Object.assign(Object.assign({}, field), { extensions }));
        return this;
    }
    extendFieldExtensions(fieldName, extensions) {
        const current = this.getFieldExtensions(fieldName);
        this.setFieldExtensions(fieldName, Object.assign(Object.assign({}, current), extensions));
        return this;
    }
    clearFieldExtensions(fieldName) {
        this.setFieldExtensions(fieldName, {});
        return this;
    }
    getFieldExtension(fieldName, extensionName) {
        const extensions = this.getFieldExtensions(fieldName);
        return extensions[extensionName];
    }
    hasFieldExtension(fieldName, extensionName) {
        const extensions = this.getFieldExtensions(fieldName);
        return extensionName in extensions;
    }
    setFieldExtension(fieldName, extensionName, value) {
        this.extendFieldExtensions(fieldName, {
            [extensionName]: value,
        });
        return this;
    }
    removeFieldExtension(fieldName, extensionName) {
        const extensions = Object.assign({}, this.getFieldExtensions(fieldName));
        delete extensions[extensionName];
        this.setFieldExtensions(fieldName, extensions);
        return this;
    }
    getDirectives() {
        return this._gqcDirectives || [];
    }
    setDirectives(directives) {
        this._gqcDirectives = directives;
        this._gqcIsModified = true;
        return this;
    }
    getDirectiveNames() {
        return this.getDirectives().map((d) => d.name);
    }
    getDirectiveByName(directiveName) {
        const directive = this.getDirectives().find((d) => d.name === directiveName);
        if (!directive)
            return undefined;
        return directive.args;
    }
    setDirectiveByName(directiveName, args) {
        const directives = this.getDirectives();
        const idx = directives.findIndex((d) => d.name === directiveName);
        if (idx >= 0) {
            directives[idx].args = args;
        }
        else {
            directives.push({ name: directiveName, args });
        }
        this.setDirectives(directives);
        return this;
    }
    getDirectiveById(idx) {
        const directive = this.getDirectives()[idx];
        if (!directive)
            return undefined;
        return directive.args;
    }
    getFieldDirectives(fieldName) {
        return this.getField(fieldName).directives || [];
    }
    setFieldDirectives(fieldName, directives) {
        const fc = this.getField(fieldName);
        fc.directives = directives;
        this._gqcIsModified = true;
        return this;
    }
    getFieldDirectiveNames(fieldName) {
        return this.getFieldDirectives(fieldName).map((d) => d.name);
    }
    getFieldDirectiveByName(fieldName, directiveName) {
        const directive = this.getFieldDirectives(fieldName).find((d) => d.name === directiveName);
        if (!directive)
            return undefined;
        return directive.args;
    }
    setFieldDirectiveByName(fieldName, directiveName, args) {
        const directives = this.getFieldDirectives(fieldName);
        const idx = directives.findIndex((d) => d.name === directiveName);
        if (idx >= 0) {
            directives[idx].args = args;
        }
        else {
            directives.push({ name: directiveName, args });
        }
        this.setFieldDirectives(fieldName, directives);
        return this;
    }
    getFieldDirectiveById(fieldName, idx) {
        const directive = this.getFieldDirectives(fieldName)[idx];
        if (!directive)
            return undefined;
        return directive.args;
    }
    toSDL(opts) {
        return (0, schemaPrinter_1.printEnum)(this.getType(), opts);
    }
}
exports.EnumTypeComposer = EnumTypeComposer;
//# sourceMappingURL=EnumTypeComposer.js.map