"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTypeComposer = void 0;
const graphql_1 = require("./graphql");
const misc_1 = require("./utils/misc");
const is_1 = require("./utils/is");
const typeByPath_1 = require("./utils/typeByPath");
const SchemaComposer_1 = require("./SchemaComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const graphqlVersion_1 = require("./utils/graphqlVersion");
const configToDefine_1 = require("./utils/configToDefine");
const typeHelpers_1 = require("./utils/typeHelpers");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const definitionNode_1 = require("./utils/definitionNode");
const schemaPrinterSortTypes_1 = require("./utils/schemaPrinterSortTypes");
class InputTypeComposer {
    constructor(graphqlType, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new InputTypeComposer(GraphQLInputType, SchemaComposer)`');
        }
        if (!(graphqlType instanceof graphql_1.GraphQLInputObjectType)) {
            throw new Error('InputTypeComposer accept only GraphQLInputObjectType in constructor');
        }
        this.schemaComposer = schemaComposer;
        this._gqType = graphqlType;
        this.schemaComposer.set(graphqlType, this);
        this.schemaComposer.set(graphqlType.name, this);
        if (graphqlVersion_1.graphqlVersion >= 14) {
            this._gqcFields = (0, configToDefine_1.convertInputFieldMapToConfig)(this._gqType._fields, this.schemaComposer);
        }
        else {
            const fields = this._gqType._typeConfig.fields;
            this._gqcFields = this.schemaComposer.typeMapper.convertInputFieldConfigMap((0, misc_1.resolveMaybeThunk)(fields) || {}, this.getTypeName());
        }
        if (!this._gqType.astNode) {
            this._gqType.astNode = (0, definitionNode_1.getInputObjectTypeDefinitionNode)(this);
        }
        this._gqcIsModified = false;
    }
    static create(typeDef, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `InputTypeComposer.create(typeDef, schemaComposer)`');
        }
        if (schemaComposer.hasInstance(typeDef, InputTypeComposer)) {
            return schemaComposer.getITC(typeDef);
        }
        const itc = this.createTemp(typeDef, schemaComposer);
        schemaComposer.add(itc);
        return itc;
    }
    static createTemp(typeDef, schemaComposer) {
        const sc = schemaComposer || new SchemaComposer_1.SchemaComposer();
        let ITC;
        if ((0, is_1.isString)(typeDef)) {
            const typeName = typeDef;
            if ((0, typeHelpers_1.isTypeNameString)(typeName)) {
                ITC = new InputTypeComposer(new graphql_1.GraphQLInputObjectType({
                    name: typeName,
                    fields: () => ({}),
                }), sc);
            }
            else {
                ITC = sc.typeMapper.convertSDLTypeDefinition(typeName);
                if (!(ITC instanceof InputTypeComposer)) {
                    throw new Error('You should provide correct GraphQLInputObjectType type definition. ' +
                        'Eg. `input MyInputType { name: String! }`');
                }
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLInputObjectType) {
            ITC = new InputTypeComposer(typeDef, sc);
        }
        else if ((0, is_1.isObject)(typeDef)) {
            const type = new graphql_1.GraphQLInputObjectType({
                name: typeDef.name,
                description: typeDef.description,
                fields: () => ({}),
            });
            ITC = new InputTypeComposer(type, sc);
            const fields = typeDef.fields;
            if ((0, is_1.isFunction)(fields)) {
                ITC.addFields((0, configToDefine_1.convertInputFieldMapToConfig)(fields, sc));
            }
            if ((0, is_1.isObject)(fields))
                ITC.addFields(fields);
            ITC.setExtensions(typeDef.extensions || undefined);
            if (Array.isArray(typeDef === null || typeDef === void 0 ? void 0 : typeDef.directives)) {
                ITC.setDirectives(typeDef.directives);
            }
        }
        else {
            throw new Error(`You should provide InputObjectConfig or string with type name to InputTypeComposer.create(typeDef). Provided:\n${(0, misc_1.inspect)(typeDef)}`);
        }
        return ITC;
    }
    getFields() {
        return this._gqcFields;
    }
    getFieldNames() {
        return Object.keys(this._gqcFields);
    }
    hasField(fieldName) {
        return !!this._gqcFields[fieldName];
    }
    setFields(fields) {
        this._gqcFields = {};
        Object.keys(fields).forEach((name) => {
            this.setField(name, fields[name]);
        });
        return this;
    }
    setField(fieldName, fieldConfig) {
        this._gqcFields[fieldName] = (0, is_1.isFunction)(fieldConfig)
            ? fieldConfig
            : this.schemaComposer.typeMapper.convertInputFieldConfig(fieldConfig, fieldName, this.getTypeName());
        this._gqcIsModified = true;
        return this;
    }
    addFields(newFields) {
        Object.keys(newFields).forEach((name) => {
            this.setField(name, newFields[name]);
        });
        return this;
    }
    addNestedFields(newFields) {
        Object.keys(newFields).forEach((fieldName) => {
            const fc = newFields[fieldName];
            const names = fieldName.split('.');
            const name = names.shift();
            if (!name) {
                throw new Error(`Type ${this.getTypeName()} has invalid field name: ${fieldName}`);
            }
            if (names.length === 0) {
                this.setField(name, fc);
            }
            else {
                let childTC;
                if (!this.hasField(name)) {
                    childTC = InputTypeComposer.create(`${this.getTypeName()}${(0, misc_1.upperFirst)(name)}`, this.schemaComposer);
                    this.setField(name, childTC);
                }
                else {
                    childTC = this.getFieldTC(name);
                }
                if (childTC instanceof InputTypeComposer) {
                    childTC.addNestedFields({ [names.join('.')]: fc });
                }
            }
        });
        return this;
    }
    getField(fieldName) {
        if ((0, is_1.isFunction)(this._gqcFields[fieldName])) {
            const unwrappedFieldConfig = this._gqcFields[fieldName](this.schemaComposer);
            this.setField(fieldName, unwrappedFieldConfig);
        }
        const field = this._gqcFields[fieldName];
        if (!field) {
            throw new Error(`Cannot get field '${fieldName}' from input type '${this.getTypeName()}'. Field does not exist.`);
        }
        return field;
    }
    removeField(fieldNameOrArray) {
        const fieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        fieldNames.forEach((fieldName) => {
            const names = fieldName.split('.');
            const name = names.shift();
            if (!name)
                return;
            if (names.length === 0) {
                delete this._gqcFields[name];
                this._gqcIsModified = true;
            }
            else {
                if (this.hasField(name)) {
                    const subTC = this.getFieldTC(name);
                    if (subTC instanceof InputTypeComposer) {
                        subTC.removeField(names.join('.'));
                    }
                }
            }
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
    extendField(fieldName, partialFieldConfig) {
        let prevFieldConfig;
        try {
            prevFieldConfig = this.getField(fieldName);
        }
        catch (e) {
            throw new Error(`Cannot extend field '${fieldName}' from input type '${this.getTypeName()}'. Field does not exist.`);
        }
        this.setField(fieldName, Object.assign(Object.assign(Object.assign({}, prevFieldConfig), partialFieldConfig), { extensions: Object.assign(Object.assign({}, (prevFieldConfig.extensions || {})), (partialFieldConfig.extensions || {})), directives: [...(prevFieldConfig.directives || []), ...(partialFieldConfig.directives || [])] }));
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
    getFieldConfig(fieldName) {
        const _a = this.getField(fieldName), { type } = _a, rest = __rest(_a, ["type"]);
        return Object.assign({ type: type.getType() }, rest);
    }
    getFieldType(fieldName) {
        return this.getField(fieldName).type.getType();
    }
    getFieldTypeName(fieldName) {
        return this.getField(fieldName).type.getTypeName();
    }
    getFieldTC(fieldName) {
        const anyTC = this.getField(fieldName).type;
        return (0, typeHelpers_1.unwrapInputTC)(anyTC);
    }
    getFieldITC(fieldName) {
        const tc = this.getFieldTC(fieldName);
        if (!(tc instanceof InputTypeComposer)) {
            throw new Error(`${this.getTypeName()}.getFieldITC('${fieldName}') must be InputTypeComposer, but received ${tc.constructor.name}. Maybe you need to use 'getFieldTC()' method which returns any type composer?`);
        }
        return tc;
    }
    isRequired(fieldName) {
        return this.isFieldNonNull(fieldName);
    }
    isFieldNonNull(fieldName) {
        return this.getField(fieldName).type instanceof NonNullComposer_1.NonNullComposer;
    }
    makeFieldNonNull(fieldNameOrArray) {
        const fieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        fieldNames.forEach((fieldName) => {
            const fc = this._gqcFields[fieldName];
            if (fc && !(fc.type instanceof NonNullComposer_1.NonNullComposer)) {
                fc.type = new NonNullComposer_1.NonNullComposer(fc.type);
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    makeRequired(fieldNameOrArray) {
        return this.makeFieldNonNull(fieldNameOrArray);
    }
    makeFieldNullable(fieldNameOrArray) {
        const fieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        fieldNames.forEach((fieldName) => {
            const fc = this._gqcFields[fieldName];
            if (fc && fc.type instanceof NonNullComposer_1.NonNullComposer) {
                fc.type = fc.type.ofType;
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    makeOptional(fieldNameOrArray) {
        return this.makeFieldNullable(fieldNameOrArray);
    }
    isFieldPlural(fieldName) {
        const type = this.getField(fieldName).type;
        return (type instanceof ListComposer_1.ListComposer ||
            (type instanceof NonNullComposer_1.NonNullComposer && type.ofType instanceof ListComposer_1.ListComposer));
    }
    makeFieldPlural(fieldNameOrArray) {
        const fieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        fieldNames.forEach((fieldName) => {
            const fc = this._gqcFields[fieldName];
            if (fc && !(fc.type instanceof ListComposer_1.ListComposer)) {
                fc.type = new ListComposer_1.ListComposer(fc.type);
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    makeFieldNonPlural(fieldNameOrArray) {
        const fieldNames = Array.isArray(fieldNameOrArray) ? fieldNameOrArray : [fieldNameOrArray];
        fieldNames.forEach((fieldName) => {
            const fc = this._gqcFields[fieldName];
            if (fc) {
                if (fc.type instanceof ListComposer_1.ListComposer) {
                    fc.type = fc.type.ofType;
                    this._gqcIsModified = true;
                }
                else if (fc.type instanceof NonNullComposer_1.NonNullComposer && fc.type.ofType instanceof ListComposer_1.ListComposer) {
                    fc.type =
                        fc.type.ofType.ofType instanceof NonNullComposer_1.NonNullComposer
                            ? fc.type.ofType.ofType
                            : new NonNullComposer_1.NonNullComposer(fc.type.ofType.ofType);
                    this._gqcIsModified = true;
                }
            }
        });
        return this;
    }
    getType() {
        if (this._gqcIsModified) {
            this._gqcIsModified = false;
            this._gqType.astNode = (0, definitionNode_1.getInputObjectTypeDefinitionNode)(this);
            if (graphqlVersion_1.graphqlVersion >= 14) {
                this._gqType._fields = () => {
                    return (0, configToDefine_1.defineInputFieldMap)(this._gqType, (0, misc_1.mapEachKey)(this._gqcFields, (_, name) => this.getFieldConfig(name)), this._gqType.astNode);
                };
            }
            else {
                this._gqType._typeConfig.fields = () => {
                    return (0, misc_1.mapEachKey)(this._gqcFields, (_, name) => this.getFieldConfig(name));
                };
                delete this._gqType._fields;
            }
        }
        return this._gqType;
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
        this.schemaComposer.set(name, this);
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
            throw new Error('You should provide new type name for clone() method');
        }
        const cloned = newTypeNameOrTC instanceof InputTypeComposer
            ? newTypeNameOrTC
            : InputTypeComposer.create(newTypeNameOrTC, this.schemaComposer);
        cloned._gqcFields = (0, misc_1.mapEachKey)(this._gqcFields, (fieldConfig) => (Object.assign(Object.assign({}, fieldConfig), { extensions: Object.assign({}, fieldConfig.extensions), directives: fieldConfig.directives && [...(fieldConfig.directives || [])] })));
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        cloned.setDirectives(this.getDirectives());
        return cloned;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for InputTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return cloneMap.get(this);
        const cloned = InputTypeComposer.create(this.getTypeName(), anotherSchemaComposer);
        cloneMap.set(this, cloned);
        cloned._gqcFields = (0, misc_1.mapEachKey)(this._gqcFields, (fieldConfig) => (Object.assign(Object.assign({}, fieldConfig), { type: (0, typeHelpers_1.cloneTypeTo)(fieldConfig.type, anotherSchemaComposer, cloneMap), extensions: Object.assign({}, fieldConfig.extensions) })));
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        return cloned;
    }
    merge(type) {
        let tc;
        if (type instanceof graphql_1.GraphQLInputObjectType) {
            tc = InputTypeComposer.createTemp(type, this.schemaComposer);
        }
        else if (type instanceof InputTypeComposer) {
            tc = type;
        }
        else {
            throw new Error(`Cannot merge ${(0, misc_1.inspect)(type)} with InputObjectType(${this.getTypeName()}). Provided type should be GraphQLInputObjectType or InputTypeComposer.`);
        }
        const fields = Object.assign({}, tc.getFields());
        Object.keys(fields).forEach((fieldName) => {
            fields[fieldName] = Object.assign(Object.assign({}, fields[fieldName]), { type: tc.getFieldTypeName(fieldName) });
        });
        this.addFields(fields);
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
        this._gqcExtensions = extensions || undefined;
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
    get(path) {
        return (0, typeByPath_1.typeByPath)(this, path);
    }
    getNestedTCs(opts = {}, passedTypes = new Set()) {
        const exclude = Array.isArray(opts.exclude) ? opts.exclude : [];
        this.getFieldNames().forEach((fieldName) => {
            const itc = this.getFieldTC(fieldName);
            if (!passedTypes.has(itc) && !exclude.includes(itc.getTypeName())) {
                passedTypes.add(itc);
                if (itc instanceof InputTypeComposer) {
                    itc.getNestedTCs(opts, passedTypes);
                }
            }
        });
        return passedTypes;
    }
    toSDL(opts) {
        const _a = opts || {}, { deep } = _a, innerOpts = __rest(_a, ["deep"]);
        innerOpts.sortTypes = innerOpts.sortTypes || false;
        const exclude = Array.isArray(innerOpts.exclude) ? innerOpts.exclude : [];
        if (deep) {
            let r = '';
            r += (0, schemaPrinter_1.printInputObject)(this.getType(), innerOpts);
            const nestedTypes = Array.from(this.getNestedTCs({ exclude }));
            const sortMethod = (0, schemaPrinterSortTypes_1.getSortMethodFromOption)(innerOpts.sortAll || innerOpts.sortTypes);
            if (sortMethod) {
                nestedTypes.sort(sortMethod);
            }
            nestedTypes.forEach((t) => {
                if (t !== this && !exclude.includes(t.getTypeName())) {
                    const sdl = t.toSDL(innerOpts);
                    if (sdl)
                        r += `\n\n${sdl}`;
                }
            });
            return r;
        }
        return (0, schemaPrinter_1.printInputObject)(this.getType(), innerOpts);
    }
}
exports.InputTypeComposer = InputTypeComposer;
//# sourceMappingURL=InputTypeComposer.js.map