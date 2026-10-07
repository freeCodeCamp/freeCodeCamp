"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.InterfaceTypeComposer = void 0;
const graphql_1 = require("./graphql");
const is_1 = require("./utils/is");
const misc_1 = require("./utils/misc");
const ObjectTypeComposer_1 = require("./ObjectTypeComposer");
const InputTypeComposer_1 = require("./InputTypeComposer");
const UnionTypeComposer_1 = require("./UnionTypeComposer");
const EnumTypeComposer_1 = require("./EnumTypeComposer");
const SchemaComposer_1 = require("./SchemaComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const ThunkComposer_1 = require("./ThunkComposer");
const toInputType_1 = require("./utils/toInputType");
const typeByPath_1 = require("./utils/typeByPath");
const typeHelpers_1 = require("./utils/typeHelpers");
const configToDefine_1 = require("./utils/configToDefine");
const graphqlVersion_1 = require("./utils/graphqlVersion");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const definitionNode_1 = require("./utils/definitionNode");
const schemaPrinterSortTypes_1 = require("./utils/schemaPrinterSortTypes");
class InterfaceTypeComposer {
    constructor(graphqlType, schemaComposer) {
        this._gqcInterfaces = [];
        this._gqcFallbackResolveType = null;
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new InterfaceTypeComposer(GraphQLInterfaceType, SchemaComposer)`');
        }
        if (!(graphqlType instanceof graphql_1.GraphQLInterfaceType)) {
            throw new Error('InterfaceTypeComposer accept only GraphQLInterfaceType in constructor');
        }
        this.schemaComposer = schemaComposer;
        this._gqType = graphqlType;
        this.schemaComposer.set(graphqlType, this);
        this.schemaComposer.set(graphqlType.name, this);
        if (graphqlVersion_1.graphqlVersion >= 15) {
            this._gqcFields = (0, configToDefine_1.convertObjectFieldMapToConfig)(this._gqType._fields, this.schemaComposer);
            this._gqcInterfaces = (0, configToDefine_1.convertInterfaceArrayAsThunk)(this._gqType._interfaces, this.schemaComposer);
        }
        else if (graphqlVersion_1.graphqlVersion >= 14) {
            this._gqcFields = (0, configToDefine_1.convertObjectFieldMapToConfig)(this._gqType._fields, this.schemaComposer);
        }
        else {
            const fields = this._gqType._typeConfig
                .fields;
            this._gqcFields = this.schemaComposer.typeMapper.convertOutputFieldConfigMap((0, misc_1.resolveMaybeThunk)(fields) || {}, this.getTypeName());
        }
        if (!this._gqType.astNode) {
            this._gqType.astNode = (0, definitionNode_1.getInterfaceTypeDefinitionNode)(this);
        }
        this._gqcIsModified = false;
    }
    static create(typeDef, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `InterfaceTypeComposer.create(typeDef, schemaComposer)`');
        }
        if (schemaComposer.hasInstance(typeDef, InterfaceTypeComposer)) {
            return schemaComposer.getIFTC(typeDef);
        }
        const iftc = this.createTemp(typeDef, schemaComposer);
        schemaComposer.add(iftc);
        return iftc;
    }
    static createTemp(typeDef, schemaComposer) {
        const sc = schemaComposer || new SchemaComposer_1.SchemaComposer();
        let IFTC;
        if ((0, is_1.isString)(typeDef)) {
            const typeName = typeDef;
            if ((0, typeHelpers_1.isTypeNameString)(typeName)) {
                IFTC = new InterfaceTypeComposer(new graphql_1.GraphQLInterfaceType({
                    name: typeName,
                    fields: () => ({}),
                }), sc);
            }
            else {
                IFTC = sc.typeMapper.convertSDLTypeDefinition(typeName);
                if (!(IFTC instanceof InterfaceTypeComposer)) {
                    throw new Error('You should provide correct GraphQLInterfaceType type definition. ' +
                        'Eg. `interface MyType { id: ID!, name: String! }`');
                }
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLInterfaceType) {
            IFTC = new InterfaceTypeComposer(typeDef, sc);
        }
        else if (typeDef instanceof InterfaceTypeComposer) {
            IFTC = typeDef;
        }
        else if ((0, is_1.isObject)(typeDef) && !(typeDef instanceof InterfaceTypeComposer)) {
            const type = new graphql_1.GraphQLInterfaceType(Object.assign(Object.assign({}, typeDef), { fields: () => ({}) }));
            IFTC = new InterfaceTypeComposer(type, sc);
            const fields = typeDef.fields;
            if ((0, is_1.isFunction)(fields)) {
                IFTC.addFields((0, configToDefine_1.convertObjectFieldMapToConfig)(fields, sc));
            }
            else if ((0, is_1.isObject)(fields)) {
                IFTC.addFields(fields);
            }
            const interfaces = typeDef.interfaces;
            if (Array.isArray(interfaces))
                IFTC.setInterfaces(interfaces);
            else if ((0, is_1.isFunction)(interfaces)) {
                IFTC.setInterfaces((0, configToDefine_1.convertInterfaceArrayAsThunk)(interfaces, sc));
            }
            IFTC.setExtensions(typeDef.extensions);
            if (Array.isArray(typeDef === null || typeDef === void 0 ? void 0 : typeDef.directives)) {
                IFTC.setDirectives(typeDef.directives);
            }
        }
        else {
            throw new Error(`You should provide GraphQLInterfaceTypeConfig or string with interface name or SDL definition. Provided:\n${(0, misc_1.inspect)(typeDef)}`);
        }
        return IFTC;
    }
    getFields() {
        return this._gqcFields;
    }
    getFieldNames() {
        return Object.keys(this._gqcFields);
    }
    getField(fieldName) {
        if ((0, is_1.isFunction)(this._gqcFields[fieldName])) {
            const unwrappedFieldConfig = this._gqcFields[fieldName](this.schemaComposer);
            this.setField(fieldName, unwrappedFieldConfig);
        }
        const field = this._gqcFields[fieldName];
        if (!field) {
            throw new Error(`Cannot get field '${fieldName}' from type '${this.getTypeName()}'. Field does not exist.`);
        }
        return field;
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
            : this.schemaComposer.typeMapper.convertOutputFieldConfig(fieldConfig, fieldName, this.getTypeName());
        this._gqcIsModified = true;
        return this;
    }
    addFields(newFields) {
        Object.keys(newFields).forEach((name) => {
            this.setField(name, newFields[name]);
        });
        return this;
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
                    if (subTC instanceof ObjectTypeComposer_1.ObjectTypeComposer || subTC instanceof EnumTypeComposer_1.EnumTypeComposer) {
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
    extendField(fieldName, partialFieldConfig) {
        let prevFieldConfig;
        try {
            prevFieldConfig = this.getField(fieldName);
        }
        catch (e) {
            throw new Error(`Cannot extend field '${fieldName}' from type '${this.getTypeName()}'. Field does not exist.`);
        }
        this.setField(fieldName, Object.assign(Object.assign(Object.assign({}, prevFieldConfig), partialFieldConfig), { extensions: Object.assign(Object.assign({}, (prevFieldConfig.extensions || {})), (partialFieldConfig.extensions || {})), directives: [...(prevFieldConfig.directives || []), ...(partialFieldConfig.directives || [])] }));
        return this;
    }
    getFieldConfig(fieldName) {
        const _a = this.getField(fieldName), { type, args } = _a, rest = __rest(_a, ["type", "args"]);
        return Object.assign({ type: type.getType(), args: args &&
                (0, misc_1.mapEachKey)(args, (ac) => (Object.assign(Object.assign({}, ac), { type: ac.type.getType() }))) }, rest);
    }
    getFieldType(fieldName) {
        return this.getField(fieldName).type.getType();
    }
    getFieldTypeName(fieldName) {
        return this.getField(fieldName).type.getTypeName();
    }
    getFieldTC(fieldName) {
        const anyTC = this.getField(fieldName).type;
        return (0, typeHelpers_1.unwrapOutputTC)(anyTC);
    }
    getFieldOTC(fieldName) {
        const tc = this.getFieldTC(fieldName);
        if (!(tc instanceof ObjectTypeComposer_1.ObjectTypeComposer)) {
            throw new Error(`${this.getTypeName()}.getFieldOTC('${fieldName}') must be ObjectTypeComposer, but received ${tc.constructor.name}. Maybe you need to use 'getFieldTC()' method which returns any type composer?`);
        }
        return tc;
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
    deprecateFields(fields) {
        const existedFieldNames = this.getFieldNames();
        if (typeof fields === 'string') {
            if (existedFieldNames.indexOf(fields) === -1) {
                throw new Error(`Cannot deprecate non-existent field '${fields}' from interface type '${this.getTypeName()}'`);
            }
            this.extendField(fields, { deprecationReason: 'deprecated' });
        }
        else if (Array.isArray(fields)) {
            fields.forEach((field) => {
                if (existedFieldNames.indexOf(field) === -1) {
                    throw new Error(`Cannot deprecate non-existent field '${field}' from interface type '${this.getTypeName()}'`);
                }
                this.extendField(field, { deprecationReason: 'deprecated' });
            });
        }
        else {
            const fieldMap = fields;
            Object.keys(fieldMap).forEach((field) => {
                if (existedFieldNames.indexOf(field) === -1) {
                    throw new Error(`Cannot deprecate non-existent field '${field}' from interface type '${this.getTypeName()}'`);
                }
                const deprecationReason = fieldMap[field];
                this.extendField(field, { deprecationReason });
            });
        }
        return this;
    }
    getFieldArgs(fieldName) {
        try {
            const fc = this.getField(fieldName);
            return fc.args || {};
        }
        catch (e) {
            throw new Error(`Cannot get field args. Field '${fieldName}' from type '${this.getTypeName()}' does not exist.`);
        }
    }
    getFieldArgNames(fieldName) {
        return Object.keys(this.getFieldArgs(fieldName));
    }
    hasFieldArg(fieldName, argName) {
        try {
            const fieldArgs = this.getFieldArgs(fieldName);
            return !!fieldArgs[argName];
        }
        catch (e) {
            return false;
        }
    }
    getFieldArg(fieldName, argName) {
        const fieldArgs = this.getFieldArgs(fieldName);
        const arg = fieldArgs[argName];
        if (!arg) {
            throw new Error(`Cannot get '${this.getTypeName()}.${fieldName}@${argName}'. Argument does not exist.`);
        }
        return arg;
    }
    getFieldArgType(fieldName, argName) {
        const ac = this.getFieldArg(fieldName, argName);
        return ac.type.getType();
    }
    getFieldArgTypeName(fieldName, argName) {
        const ac = this.getFieldArg(fieldName, argName);
        return ac.type.getTypeName();
    }
    getFieldArgTC(fieldName, argName) {
        const anyTC = this.getFieldArg(fieldName, argName).type;
        return (0, typeHelpers_1.unwrapInputTC)(anyTC);
    }
    getFieldArgITC(fieldName, argName) {
        const tc = this.getFieldArgTC(fieldName, argName);
        if (!(tc instanceof InputTypeComposer_1.InputTypeComposer)) {
            throw new Error(`${this.getTypeName()}.getFieldArgITC('${fieldName}', '${argName}') must be InputTypeComposer, but received ${tc.constructor.name}. Maybe you need to use 'getFieldArgTC()' method which returns any type composer?`);
        }
        return tc;
    }
    setFieldArgs(fieldName, args) {
        const fc = this.getField(fieldName);
        fc.args = this.schemaComposer.typeMapper.convertArgConfigMap(args, fieldName, this.getTypeName());
        this._gqcIsModified = true;
        return this;
    }
    addFieldArgs(fieldName, newArgs) {
        const fc = this.getField(fieldName);
        fc.args = Object.assign(Object.assign({}, fc.args), this.schemaComposer.typeMapper.convertArgConfigMap(newArgs, fieldName, this.getTypeName()));
        this._gqcIsModified = true;
        return this;
    }
    setFieldArg(fieldName, argName, argConfig) {
        const fc = this.getField(fieldName);
        fc.args = fc.args || {};
        fc.args[argName] = this.schemaComposer.typeMapper.convertArgConfig(argConfig, argName, fieldName, this.getTypeName());
        this._gqcIsModified = true;
        return this;
    }
    isFieldArgPlural(fieldName, argName) {
        const type = this.getFieldArg(fieldName, argName).type;
        return (type instanceof ListComposer_1.ListComposer ||
            (type instanceof NonNullComposer_1.NonNullComposer && type.ofType instanceof ListComposer_1.ListComposer));
    }
    makeFieldArgPlural(fieldName, argNameOrArray) {
        const args = this.getField(fieldName).args;
        if (!args)
            return this;
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = args[argName];
            if (ac && !(ac.type instanceof ListComposer_1.ListComposer)) {
                ac.type = new ListComposer_1.ListComposer(ac.type);
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    makeFieldArgNonPlural(fieldName, argNameOrArray) {
        const args = this.getField(fieldName).args;
        if (!args)
            return this;
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = args[argName];
            if (ac) {
                if (ac.type instanceof ListComposer_1.ListComposer) {
                    ac.type = ac.type.ofType;
                    this._gqcIsModified = true;
                }
                else if (ac.type instanceof NonNullComposer_1.NonNullComposer && ac.type.ofType instanceof ListComposer_1.ListComposer) {
                    ac.type =
                        ac.type.ofType.ofType instanceof NonNullComposer_1.NonNullComposer
                            ? ac.type.ofType.ofType
                            : new NonNullComposer_1.NonNullComposer(ac.type.ofType.ofType);
                    this._gqcIsModified = true;
                }
            }
        });
        return this;
    }
    isFieldArgNonNull(fieldName, argName) {
        const type = this.getFieldArg(fieldName, argName).type;
        return type instanceof NonNullComposer_1.NonNullComposer;
    }
    makeFieldArgNonNull(fieldName, argNameOrArray) {
        const args = this.getField(fieldName).args;
        if (!args)
            return this;
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = args[argName];
            if (ac && !(ac.type instanceof NonNullComposer_1.NonNullComposer)) {
                ac.type = new NonNullComposer_1.NonNullComposer(ac.type);
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    makeFieldArgNullable(fieldName, argNameOrArray) {
        const args = this.getField(fieldName).args;
        if (!args)
            return this;
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = args[argName];
            if (ac && ac.type instanceof NonNullComposer_1.NonNullComposer) {
                ac.type = ac.type.ofType;
                this._gqcIsModified = true;
            }
        });
        return this;
    }
    getType() {
        if (this._gqcIsModified) {
            this._gqcIsModified = false;
            this._gqType.astNode = (0, definitionNode_1.getInterfaceTypeDefinitionNode)(this);
            if (graphqlVersion_1.graphqlVersion >= 15) {
                this._gqType._fields = () => (0, configToDefine_1.defineFieldMap)(this._gqType, (0, misc_1.mapEachKey)(this._gqcFields, (_, name) => this.getFieldConfig(name)), this._gqType.astNode);
                this._gqType._interfaces = () => this.getInterfacesTypes();
            }
            else if (graphqlVersion_1.graphqlVersion >= 14) {
                this._gqType._fields = () => (0, configToDefine_1.defineFieldMap)(this._gqType, (0, misc_1.mapEachKey)(this._gqcFields, (_, name) => this.getFieldConfig(name)), this._gqType.astNode);
            }
            else {
                this._gqType._typeConfig.fields = () => {
                    return (0, misc_1.mapEachKey)(this._gqcFields, (_, name) => this.getFieldConfig(name));
                };
                this._gqType._fields = {};
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
            throw new Error('You should provide newTypeName:string for InterfaceTypeComposer.clone()');
        }
        const cloned = newTypeNameOrTC instanceof InterfaceTypeComposer
            ? newTypeNameOrTC
            : InterfaceTypeComposer.create(newTypeNameOrTC, this.schemaComposer);
        cloned._gqcFields = (0, misc_1.mapEachKey)(this._gqcFields, (fieldConfig) => (Object.assign(Object.assign({}, fieldConfig), { args: (0, misc_1.mapEachKey)(fieldConfig.args, (argConfig) => (Object.assign(Object.assign({}, argConfig), { extensions: Object.assign({}, argConfig.extensions), directives: [...(argConfig.directives || [])] }))), extensions: Object.assign({}, fieldConfig.extensions), directives: [...(fieldConfig.directives || [])] })));
        cloned._gqcInterfaces = [...this._gqcInterfaces];
        if (this._gqcTypeResolvers) {
            cloned._gqcTypeResolvers = new Map(this._gqcTypeResolvers);
        }
        cloned._gqcFallbackResolveType = this._gqcFallbackResolveType;
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        cloned.setDirectives(this.getDirectives());
        return cloned;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for InterfaceTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return cloneMap.get(this);
        const cloned = InterfaceTypeComposer.create(this.getTypeName(), anotherSchemaComposer);
        cloneMap.set(this, cloned);
        cloned._gqcFields = (0, misc_1.mapEachKey)(this._gqcFields, (fieldConfig) => (Object.assign(Object.assign({}, fieldConfig), { type: (0, typeHelpers_1.cloneTypeTo)(fieldConfig.type, anotherSchemaComposer, cloneMap), args: (0, misc_1.mapEachKey)(fieldConfig.args, (argConfig) => (Object.assign(Object.assign({}, argConfig), { type: (0, typeHelpers_1.cloneTypeTo)(argConfig.type, anotherSchemaComposer, cloneMap), extensions: Object.assign({}, argConfig.extensions), directives: [...(argConfig.directives || [])] }))), extensions: Object.assign({}, fieldConfig.extensions), directives: [...(fieldConfig.directives || [])] })));
        cloned._gqcInterfaces = this._gqcInterfaces.map((i) => i.cloneTo(anotherSchemaComposer, cloneMap));
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        const typeResolversMap = this.getTypeResolvers();
        if (typeResolversMap.size > 0) {
            const clonedTypeResolvers = new Map();
            typeResolversMap.forEach((fn, tc) => {
                const clonedTC = (0, typeHelpers_1.cloneTypeTo)(tc, anotherSchemaComposer, cloneMap);
                clonedTypeResolvers.set(clonedTC, fn);
            });
            cloned.setTypeResolvers(clonedTypeResolvers);
        }
        if (this._gqcFallbackResolveType) {
            cloned._gqcFallbackResolveType = (0, typeHelpers_1.cloneTypeTo)(this._gqcFallbackResolveType, anotherSchemaComposer, cloneMap);
        }
        return cloned;
    }
    merge(type) {
        let tc;
        if (type instanceof ObjectTypeComposer_1.ObjectTypeComposer || type instanceof InterfaceTypeComposer) {
            tc = type;
        }
        else if (type instanceof graphql_1.GraphQLObjectType) {
            tc = ObjectTypeComposer_1.ObjectTypeComposer.createTemp(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            tc = InterfaceTypeComposer.createTemp(type, this.schemaComposer);
        }
        else {
            throw new Error(`Cannot merge ${(0, misc_1.inspect)(type)} with InterfaceType(${this.getTypeName()}). Provided type should be GraphQLInterfaceType, GraphQLObjectType, InterfaceTypeComposer or ObjectTypeComposer.`);
        }
        const fields = Object.assign({}, tc.getFields());
        Object.keys(fields).forEach((fieldName) => {
            fields[fieldName] = Object.assign(Object.assign({}, fields[fieldName]), { args: Object.assign({}, fields[fieldName].args), type: tc.getFieldTypeName(fieldName) });
            tc.getFieldArgNames(fieldName).forEach((argName) => {
                fields[fieldName].args[argName] = Object.assign(Object.assign({}, fields[fieldName].args[argName]), { type: tc.getFieldArgTypeName(fieldName, argName) });
            });
        });
        this.addFields(fields);
        this.addInterfaces(tc.getInterfaces().map((i) => i.getTypeName()));
        return this;
    }
    getInputType() {
        return this.getInputTypeComposer().getType();
    }
    hasInputTypeComposer() {
        return !!this._gqcInputTypeComposer;
    }
    setInputTypeComposer(itc) {
        this._gqcInputTypeComposer = itc;
        return this;
    }
    getInputTypeComposer(opts) {
        if (!this._gqcInputTypeComposer) {
            this._gqcInputTypeComposer = (0, toInputType_1.toInputObjectType)(this, opts);
        }
        return this._gqcInputTypeComposer;
    }
    getITC(opts) {
        return this.getInputTypeComposer(opts);
    }
    removeInputTypeComposer() {
        this._gqcInputTypeComposer = undefined;
        return this;
    }
    getResolveType() {
        return this._gqType.resolveType;
    }
    setResolveType(fn) {
        this._gqType.resolveType = fn;
        this._gqcIsModified = true;
        return this;
    }
    hasTypeResolver(type) {
        const typeResolversMap = this.getTypeResolvers();
        return typeResolversMap.has(type);
    }
    getTypeResolvers() {
        if (!this._gqcTypeResolvers) {
            this._gqcTypeResolvers = new Map();
        }
        return this._gqcTypeResolvers;
    }
    getTypeResolverCheckFn(type) {
        const typeResolversMap = this.getTypeResolvers();
        if (!typeResolversMap.has(type)) {
            throw new Error(`Type resolve function in interface '${this.getTypeName()}' is not defined for type ${(0, misc_1.inspect)(type)}.`);
        }
        return typeResolversMap.get(type);
    }
    getTypeResolverNames() {
        const typeResolversMap = this.getTypeResolvers();
        const names = [];
        typeResolversMap.forEach((_, composeType) => {
            if (composeType instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
                names.push(composeType.getTypeName());
            }
            else if (composeType && composeType.name) {
                names.push(composeType.name);
            }
        });
        return names;
    }
    getTypeResolverTypes() {
        const typeResolversMap = this.getTypeResolvers();
        const types = [];
        typeResolversMap.forEach((_, composeType) => {
            types.push((0, typeHelpers_1.getGraphQLType)(composeType));
        });
        return types;
    }
    setTypeResolvers(typeResolversMap) {
        this._isTypeResolversValid(typeResolversMap);
        this._gqcTypeResolvers = typeResolversMap;
        this._initResolveTypeFn();
        return this;
    }
    _initResolveTypeFn() {
        const typeResolversMap = this._gqcTypeResolvers || new Map();
        const fallbackType = this._gqcFallbackResolveType
            ? (0, typeHelpers_1.getGraphQLType)(this._gqcFallbackResolveType)
            : null;
        const fastEntries = [];
        if (graphqlVersion_1.graphqlVersion >= 16) {
            for (const [composeType, checkFn] of typeResolversMap.entries()) {
                fastEntries.push([(0, typeHelpers_1.getComposeTypeName)(composeType, this.schemaComposer), checkFn]);
            }
        }
        else {
            for (const [composeType, checkFn] of typeResolversMap.entries()) {
                fastEntries.push([(0, typeHelpers_1.getGraphQLType)(composeType), checkFn]);
            }
        }
        let resolveType;
        const isAsyncRuntime = this._isTypeResolversAsync(typeResolversMap);
        if (isAsyncRuntime) {
            resolveType = (value, context, info) => __awaiter(this, void 0, void 0, function* () {
                for (const [_gqType, checkFn] of fastEntries) {
                    if (yield checkFn(value, context, info))
                        return _gqType;
                }
                return fallbackType;
            });
        }
        else {
            resolveType = (value, context, info) => {
                for (const [_gqType, checkFn] of fastEntries) {
                    if (checkFn(value, context, info))
                        return _gqType;
                }
                return fallbackType;
            };
        }
        this.setResolveType(resolveType);
        return this;
    }
    _isTypeResolversValid(typeResolversMap) {
        if (!(typeResolversMap instanceof Map)) {
            throw new Error(`For interface ${this.getTypeName()} you should provide Map object for type resolvers.`);
        }
        for (const [composeType, checkFn] of typeResolversMap.entries()) {
            this._isTypeResolverValid(composeType, checkFn);
        }
        return true;
    }
    _isTypeResolverValid(composeType, checkFn) {
        try {
            const type = (0, typeHelpers_1.getGraphQLType)(composeType);
            if (!(type instanceof graphql_1.GraphQLObjectType))
                throw new Error('Must be GraphQLObjectType');
        }
        catch (e) {
            throw new Error(`For interface type resolver ${this.getTypeName()} you must provide GraphQLObjectType or ObjectTypeComposer, but provided ${(0, misc_1.inspect)(composeType)}`);
        }
        if (!(0, is_1.isFunction)(checkFn)) {
            throw new Error(`Interface ${this.getTypeName()} has invalid check function for type ${(0, misc_1.inspect)(composeType)}`);
        }
        return true;
    }
    _isTypeResolversAsync(typeResolversMap) {
        let res = false;
        for (const [, checkFn] of typeResolversMap.entries()) {
            try {
                const r = checkFn({}, {}, {});
                if (r instanceof Promise) {
                    r.catch(() => { });
                    res = true;
                }
            }
            catch (e) {
            }
        }
        return res;
    }
    addTypeResolver(type, checkFn) {
        const typeResolversMap = this.getTypeResolvers();
        this._isTypeResolverValid(type, checkFn);
        typeResolversMap.set(type, checkFn);
        this._initResolveTypeFn();
        if (type instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
            type.addInterface(this);
        }
        this.schemaComposer.addSchemaMustHaveType(type);
        return this;
    }
    removeTypeResolver(type) {
        const typeResolversMap = this.getTypeResolvers();
        typeResolversMap.delete(type);
        this._initResolveTypeFn();
        return this;
    }
    setTypeResolverFallback(type) {
        if (type) {
            if (type instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
                type.addInterface(this);
            }
            this.schemaComposer.addSchemaMustHaveType(type);
        }
        this._gqcFallbackResolveType = type;
        this._initResolveTypeFn();
        return this;
    }
    getInterfaces() {
        return this._gqcInterfaces;
    }
    getInterfacesTypes() {
        return this._gqcInterfaces.map((i) => i.getType());
    }
    setInterfaces(interfaces) {
        this._gqcInterfaces = (0, configToDefine_1.convertInterfaceArrayAsThunk)(interfaces, this.schemaComposer);
        this._gqcIsModified = true;
        return this;
    }
    hasInterface(iface) {
        const typeName = (0, typeHelpers_1.getComposeTypeName)(iface, this.schemaComposer);
        return !!this._gqcInterfaces.find((i) => i.getTypeName() === typeName);
    }
    addInterface(iface) {
        if (!this.hasInterface(iface)) {
            this._gqcInterfaces.push(this.schemaComposer.typeMapper.convertInterfaceTypeDefinition(iface));
            this._gqcIsModified = true;
        }
        return this;
    }
    addInterfaces(ifaces) {
        if (!Array.isArray(ifaces)) {
            throw new Error(`InterfaceTypeComposer[${this.getTypeName()}].addInterfaces() accepts only array`);
        }
        ifaces.forEach((iface) => this.addInterface(iface));
        return this;
    }
    removeInterface(iface) {
        const typeName = (0, typeHelpers_1.getComposeTypeName)(iface, this.schemaComposer);
        this._gqcInterfaces = this._gqcInterfaces.filter((i) => i.getTypeName() !== typeName);
        this._gqcIsModified = true;
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
    getFieldArgExtensions(fieldName, argName) {
        const ac = this.getFieldArg(fieldName, argName);
        return ac.extensions || {};
    }
    setFieldArgExtensions(fieldName, argName, extensions) {
        const ac = this.getFieldArg(fieldName, argName);
        this.setFieldArg(fieldName, argName, Object.assign(Object.assign({}, ac), { extensions }));
        return this;
    }
    extendFieldArgExtensions(fieldName, argName, extensions) {
        const current = this.getFieldArgExtensions(fieldName, argName);
        this.setFieldArgExtensions(fieldName, argName, Object.assign(Object.assign({}, current), extensions));
        return this;
    }
    clearFieldArgExtensions(fieldName, argName) {
        this.setFieldArgExtensions(fieldName, argName, {});
        return this;
    }
    getFieldArgExtension(fieldName, argName, extensionName) {
        const extensions = this.getFieldArgExtensions(fieldName, argName);
        return extensions[extensionName];
    }
    hasFieldArgExtension(fieldName, argName, extensionName) {
        const extensions = this.getFieldArgExtensions(fieldName, argName);
        return extensionName in extensions;
    }
    setFieldArgExtension(fieldName, argName, extensionName, value) {
        this.extendFieldArgExtensions(fieldName, argName, {
            [extensionName]: value,
        });
        return this;
    }
    removeFieldArgExtension(fieldName, argName, extensionName) {
        const extensions = Object.assign({}, this.getFieldArgExtensions(fieldName, argName));
        delete extensions[extensionName];
        this.setFieldArgExtensions(fieldName, argName, extensions);
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
    getFieldArgDirectives(fieldName, argName) {
        return this.getFieldArg(fieldName, argName).directives || [];
    }
    setFieldArgDirectives(fieldName, argName, directives) {
        const ac = this.getFieldArg(fieldName, argName);
        ac.directives = directives;
        this._gqcIsModified = true;
        return this;
    }
    getFieldArgDirectiveNames(fieldName, argName) {
        return this.getFieldArgDirectives(fieldName, argName).map((d) => d.name);
    }
    getFieldArgDirectiveByName(fieldName, argName, directiveName) {
        const directive = this.getFieldArgDirectives(fieldName, argName).find((d) => d.name === directiveName);
        if (!directive)
            return undefined;
        return directive.args;
    }
    setFieldArgDirectiveByName(fieldName, argName, directiveName, args) {
        const directives = this.getFieldArgDirectives(fieldName, argName);
        const idx = directives.findIndex((d) => d.name === directiveName);
        if (idx >= 0) {
            directives[idx].args = args;
        }
        else {
            directives.push({ name: directiveName, args });
        }
        this.setFieldArgDirectives(fieldName, argName, directives);
        return this;
    }
    getFieldArgDirectiveById(fieldName, argName, idx) {
        const directive = this.getFieldArgDirectives(fieldName, argName)[idx];
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
            const tc = this.getFieldTC(fieldName);
            if (!passedTypes.has(tc) && !exclude.includes(tc.getTypeName())) {
                passedTypes.add(tc);
                if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer || tc instanceof UnionTypeComposer_1.UnionTypeComposer) {
                    tc.getNestedTCs(opts, passedTypes);
                }
            }
            this.getFieldArgNames(fieldName).forEach((argName) => {
                const itc = this.getFieldArgTC(fieldName, argName);
                if (!passedTypes.has(itc) && !exclude.includes(itc.getTypeName())) {
                    passedTypes.add(itc);
                    if (itc instanceof InputTypeComposer_1.InputTypeComposer) {
                        itc.getNestedTCs(opts, passedTypes);
                    }
                }
            });
            this.getInterfaces().forEach((t) => {
                const iftc = t instanceof ThunkComposer_1.ThunkComposer ? t.ofType : t;
                if (!passedTypes.has(iftc) && !exclude.includes(iftc.getTypeName())) {
                    passedTypes.add(iftc);
                    iftc.getNestedTCs(opts, passedTypes);
                }
            });
        });
        return passedTypes;
    }
    toSDL(opts) {
        const _a = opts || {}, { deep } = _a, innerOpts = __rest(_a, ["deep"]);
        innerOpts.sortTypes = innerOpts.sortTypes || false;
        const exclude = Array.isArray(innerOpts.exclude) ? innerOpts.exclude : [];
        if (deep) {
            let r = '';
            r += (0, schemaPrinter_1.printInterface)(this.getType(), innerOpts);
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
        return (0, schemaPrinter_1.printInterface)(this.getType(), innerOpts);
    }
}
exports.InterfaceTypeComposer = InterfaceTypeComposer;
//# sourceMappingURL=InterfaceTypeComposer.js.map