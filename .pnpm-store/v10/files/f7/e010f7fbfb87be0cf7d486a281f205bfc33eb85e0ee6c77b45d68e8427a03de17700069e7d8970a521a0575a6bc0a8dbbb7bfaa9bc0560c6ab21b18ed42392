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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaComposer = exports.BUILT_IN_DIRECTIVES = void 0;
const deprecate_1 = __importDefault(require("./utils/deprecate"));
const TypeStorage_1 = require("./TypeStorage");
const TypeMapper_1 = require("./TypeMapper");
const ObjectTypeComposer_1 = require("./ObjectTypeComposer");
const InputTypeComposer_1 = require("./InputTypeComposer");
const ScalarTypeComposer_1 = require("./ScalarTypeComposer");
const EnumTypeComposer_1 = require("./EnumTypeComposer");
const InterfaceTypeComposer_1 = require("./InterfaceTypeComposer");
const UnionTypeComposer_1 = require("./UnionTypeComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const ThunkComposer_1 = require("./ThunkComposer");
const Resolver_1 = require("./Resolver");
const is_1 = require("./utils/is");
const misc_1 = require("./utils/misc");
const dedent_1 = require("./utils/dedent");
const typeHelpers_1 = require("./utils/typeHelpers");
const graphql_1 = require("./graphql");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const schemaVisitor_1 = require("./utils/schemaVisitor");
exports.BUILT_IN_DIRECTIVES = [
    graphql_1.GraphQLSkipDirective,
    graphql_1.GraphQLIncludeDirective,
    graphql_1.GraphQLDeprecatedDirective,
];
class SchemaComposer extends TypeStorage_1.TypeStorage {
    constructor(schemaOrSDL) {
        super();
        this._schemaMustHaveTypes = [];
        this._directives = [...exports.BUILT_IN_DIRECTIVES];
        this.typeMapper = new TypeMapper_1.TypeMapper(this);
        let schema;
        if (typeof schemaOrSDL === 'string') {
            schema = (0, graphql_1.buildSchema)(schemaOrSDL);
        }
        else {
            schema = schemaOrSDL;
        }
        if (schema instanceof graphql_1.GraphQLSchema) {
            schema.getDirectives().forEach((directive) => {
                this.addDirective(directive);
            });
            (0, misc_1.forEachKey)(schema.getTypeMap(), (v, k) => {
                if (k.startsWith('__'))
                    return;
                this.typeMapper.convertGraphQLTypeToComposer(v);
            });
            const q = schema.getQueryType();
            if (q)
                this.set('Query', this.get(q));
            const m = schema.getMutationType();
            if (m)
                this.set('Mutation', this.get(m));
            const s = schema.getSubscriptionType();
            if (s)
                this.set('Subscription', this.get(s));
            if (schema.description)
                this.setDescription(schema.description);
        }
    }
    get Query() {
        return this.getOrCreateOTC('Query');
    }
    get Mutation() {
        return this.getOrCreateOTC('Mutation');
    }
    get Subscription() {
        return this.getOrCreateOTC('Subscription');
    }
    buildSchema(extraConfig) {
        const roots = {};
        if (this.has('Query')) {
            const tc = this.getOTC('Query');
            this.removeEmptyTypes(tc, new Set());
            roots.query = tc.getType();
        }
        if (this.has('Mutation')) {
            const tc = this.getOTC('Mutation');
            this.removeEmptyTypes(tc, new Set());
            if (tc.getFieldNames().length) {
                roots.mutation = tc.getType();
            }
        }
        if (this.has('Subscription')) {
            const tc = this.getOTC('Subscription');
            this.removeEmptyTypes(tc, new Set());
            if (tc.getFieldNames().length) {
                roots.subscription = tc.getType();
            }
        }
        const _a = extraConfig || {}, { keepUnusedTypes } = _a, reducedConfig = __rest(_a, ["keepUnusedTypes"]);
        const typesSet = new Set();
        if (keepUnusedTypes) {
            this.types.forEach((type) => {
                typesSet.add((0, graphql_1.getNamedType)((0, typeHelpers_1.getGraphQLType)(type)));
            });
        }
        this._schemaMustHaveTypes.forEach((type) => {
            typesSet.add((0, graphql_1.getNamedType)((0, typeHelpers_1.getGraphQLType)(type)));
        });
        if (Array.isArray(extraConfig === null || extraConfig === void 0 ? void 0 : extraConfig.types)) {
            extraConfig === null || extraConfig === void 0 ? void 0 : extraConfig.types.forEach((type) => {
                typesSet.add((0, graphql_1.getNamedType)((0, typeHelpers_1.getGraphQLType)(type)));
            });
        }
        const directives = [
            ...this._directives,
            ...(Array.isArray(extraConfig === null || extraConfig === void 0 ? void 0 : extraConfig.directives) ? [...extraConfig.directives] : []),
        ];
        const description = this.getDescription() || reducedConfig.description || undefined;
        return new graphql_1.GraphQLSchema(Object.assign(Object.assign(Object.assign({}, reducedConfig), roots), { types: Array.from(typesSet), directives,
            description }));
    }
    addSchemaMustHaveType(type) {
        this._schemaMustHaveTypes.push(type);
        return this;
    }
    removeEmptyTypes(tc, passedTypes = new Set()) {
        tc.getFieldNames().forEach((fieldName) => {
            const fieldTC = tc.getFieldTC(fieldName);
            if (!fieldTC) {
                throw new Error(`fieldTC "${fieldName}" is not defined.`);
            }
            const typeName = fieldTC.getTypeName();
            if (!passedTypes.has(typeName)) {
                passedTypes.add(typeName);
                if (fieldTC instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
                    if (fieldTC.getFieldNames().length > 0) {
                        this.removeEmptyTypes(fieldTC, passedTypes);
                    }
                    else {
                        console.log(`graphql-compose: Delete field '${tc.getTypeName()}.${fieldName}' ` +
                            `with type '${fieldTC.getTypeName()}', cause it does not have fields.`);
                        tc.removeField(fieldName);
                    }
                }
            }
        });
    }
    clone() {
        const sc = new SchemaComposer();
        const cloneMap = new Map();
        this.forEach((type, key) => {
            sc.set(key, (0, typeHelpers_1.cloneTypeTo)(type, sc, cloneMap));
        });
        sc._schemaMustHaveTypes = this._schemaMustHaveTypes.map((t) => (0, typeHelpers_1.cloneTypeTo)(t, sc, cloneMap));
        sc._directives = [...this._directives];
        return sc;
    }
    merge(schema) {
        let sc;
        if (schema instanceof SchemaComposer) {
            sc = schema;
        }
        else if (schema instanceof graphql_1.GraphQLSchema) {
            sc = new SchemaComposer(schema);
        }
        else {
            throw new Error('SchemaComposer.merge() accepts only GraphQLSchema or SchemaComposer instances.');
        }
        this.Query.merge(sc.Query);
        this.Mutation.merge(sc.Mutation);
        this.Subscription.merge(sc.Subscription);
        sc.types.forEach((type, key) => {
            if ((typeof key === 'string' && key.startsWith('__')) ||
                type === sc.Query ||
                type === sc.Mutation ||
                type === sc.Subscription) {
                return;
            }
            let typeName;
            if ((0, typeHelpers_1.isComposeNamedType)(type)) {
                typeName = (0, typeHelpers_1.getComposeTypeName)(type, this);
            }
            if (this.has(key)) {
                this.getAnyTC(key).merge(type);
            }
            else if (typeName && this.has(typeName)) {
                this.getAnyTC(typeName).merge(type);
            }
            else {
                const tc = type.cloneTo(this);
                this.set(key, tc);
                if (typeName && typeName !== key) {
                    this.set(typeName, tc);
                }
            }
        });
        sc.getDirectives().forEach((directive) => {
            this.addDirective(directive);
        });
        return this;
    }
    getDescription() {
        return this._description;
    }
    setDescription(description) {
        this._description = description;
        return this;
    }
    addTypeDefs(typeDefs) {
        let types;
        try {
            types = this.typeMapper.parseTypesFromString(typeDefs);
        }
        catch (e) {
            throw new Error(e.toString());
        }
        types.forEach((type) => {
            const name = type.getTypeName();
            if (name !== 'Query' && name !== 'Mutation' && name !== 'Subscription') {
                this.add(type);
            }
        });
        if (types.has('Query')) {
            const tc = types.get('Query');
            if (!(tc instanceof ObjectTypeComposer_1.ObjectTypeComposer)) {
                throw new Error(`Type Query in typedefs isn't an Object Type.`);
            }
            this.Query.addFields(tc.getFields());
        }
        if (types.has('Mutation')) {
            const tc = types.get('Mutation');
            if (!(tc instanceof ObjectTypeComposer_1.ObjectTypeComposer)) {
                throw new Error(`Type Mutation in typedefs isn't an Object Type.`);
            }
            this.Mutation.addFields(tc.getFields());
        }
        if (types.has('Subscription')) {
            const tc = types.get('Subscription');
            if (!(tc instanceof ObjectTypeComposer_1.ObjectTypeComposer)) {
                throw new Error(`Type Subscription in typedefs isn't an Object Type.`);
            }
            this.Subscription.addFields(tc.getFields());
        }
        return types;
    }
    addResolveMethods(typesFieldsResolve) {
        const typeNames = Object.keys(typesFieldsResolve);
        typeNames.forEach((typeName) => {
            const tc = this.get(typeName);
            if (tc instanceof ScalarTypeComposer_1.ScalarTypeComposer) {
                const maybeScalar = typesFieldsResolve[typeName];
                if (maybeScalar instanceof graphql_1.GraphQLScalarType) {
                    tc.merge(maybeScalar);
                    if (maybeScalar.name !== typeName)
                        this.set(typeName, tc);
                    return;
                }
                else if (typeof maybeScalar.name === 'string' &&
                    typeof maybeScalar.serialize === 'function') {
                    tc.merge(new graphql_1.GraphQLScalarType(maybeScalar));
                    if (maybeScalar.name !== typeName)
                        this.set(typeName, tc);
                    return;
                }
            }
            else if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
                const fieldsResolve = typesFieldsResolve[typeName];
                const fieldNames = Object.keys(fieldsResolve);
                fieldNames.forEach((fieldName) => {
                    tc.extendField(fieldName, {
                        resolve: fieldsResolve[fieldName],
                    });
                });
                return;
            }
            else if (tc instanceof EnumTypeComposer_1.EnumTypeComposer) {
                const enumValuesMap = typesFieldsResolve[typeName];
                const fieldNames = Object.keys(enumValuesMap);
                fieldNames.forEach((fieldName) => {
                    tc.extendField(fieldName, {
                        value: enumValuesMap[fieldName],
                    });
                });
                return;
            }
            throw new Error((0, dedent_1.dedent) `
        Cannot add resolver to the following type: 
          ${(0, misc_1.inspect)(tc)}
      `);
        });
    }
    createObjectTC(typeDef) {
        return ObjectTypeComposer_1.ObjectTypeComposer.create(typeDef, this);
    }
    createInputTC(typeDef) {
        return InputTypeComposer_1.InputTypeComposer.create(typeDef, this);
    }
    createEnumTC(typeDef) {
        return EnumTypeComposer_1.EnumTypeComposer.create(typeDef, this);
    }
    createInterfaceTC(typeDef) {
        return InterfaceTypeComposer_1.InterfaceTypeComposer.create(typeDef, this);
    }
    createUnionTC(typeDef) {
        return UnionTypeComposer_1.UnionTypeComposer.create(typeDef, this);
    }
    createScalarTC(typeDef) {
        return ScalarTypeComposer_1.ScalarTypeComposer.create(typeDef, this);
    }
    createResolver(opts) {
        return new Resolver_1.Resolver(opts, this);
    }
    createTC(typeOrSDL) {
        if (this.has(typeOrSDL)) {
            return this.get(typeOrSDL);
        }
        const tc = (0, typeHelpers_1.isNamedTypeComposer)(typeOrSDL) ? typeOrSDL : this.createTempTC(typeOrSDL);
        const typeName = tc.getTypeName();
        this.set(typeName, tc);
        this.set(typeOrSDL, tc);
        return tc;
    }
    createTempTC(typeOrSDL) {
        let type;
        if (typeof typeOrSDL === 'string') {
            type = this.typeMapper.convertSDLTypeDefinition(typeOrSDL);
        }
        else {
            type = typeOrSDL;
        }
        if ((0, typeHelpers_1.isTypeComposer)(type)) {
            if (type instanceof NonNullComposer_1.NonNullComposer ||
                type instanceof ListComposer_1.ListComposer ||
                type instanceof ThunkComposer_1.ThunkComposer) {
                const unwrappedTC = type.getUnwrappedTC();
                return unwrappedTC;
            }
            return type;
        }
        else if (type instanceof graphql_1.GraphQLObjectType) {
            return ObjectTypeComposer_1.ObjectTypeComposer.createTemp(type, this);
        }
        else if (type instanceof graphql_1.GraphQLInputObjectType) {
            return InputTypeComposer_1.InputTypeComposer.createTemp(type, this);
        }
        else if (type instanceof graphql_1.GraphQLScalarType) {
            return ScalarTypeComposer_1.ScalarTypeComposer.createTemp(type, this);
        }
        else if (type instanceof graphql_1.GraphQLEnumType) {
            return EnumTypeComposer_1.EnumTypeComposer.createTemp(type, this);
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            return InterfaceTypeComposer_1.InterfaceTypeComposer.createTemp(type, this);
        }
        else if (type instanceof graphql_1.GraphQLUnionType) {
            return UnionTypeComposer_1.UnionTypeComposer.createTemp(type, this);
        }
        throw new Error((0, dedent_1.dedent) `
      Cannot create as TypeComposer the following value: 
        ${(0, misc_1.inspect)(type)}.
    `);
    }
    getOrCreateTC(typeName, onCreate) {
        (0, deprecate_1.default)(`Use SchemaComposer.getOrCreateOTC() method instead`);
        return this.getOrCreateOTC(typeName, onCreate);
    }
    getOrCreateOTC(typeName, onCreate) {
        try {
            return this.getOTC(typeName);
        }
        catch (e) {
            const tc = ObjectTypeComposer_1.ObjectTypeComposer.create(typeName, this);
            this.set(typeName, tc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(tc);
            return tc;
        }
    }
    getOrCreateITC(typeName, onCreate) {
        try {
            return this.getITC(typeName);
        }
        catch (e) {
            const itc = InputTypeComposer_1.InputTypeComposer.create(typeName, this);
            this.set(typeName, itc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(itc);
            return itc;
        }
    }
    getOrCreateETC(typeName, onCreate) {
        try {
            return this.getETC(typeName);
        }
        catch (e) {
            const etc = EnumTypeComposer_1.EnumTypeComposer.create(typeName, this);
            this.set(typeName, etc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(etc);
            return etc;
        }
    }
    getOrCreateIFTC(typeName, onCreate) {
        try {
            return this.getIFTC(typeName);
        }
        catch (e) {
            const iftc = InterfaceTypeComposer_1.InterfaceTypeComposer.create(typeName, this);
            this.set(typeName, iftc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(iftc);
            return iftc;
        }
    }
    getOrCreateUTC(typeName, onCreate) {
        try {
            return this.getUTC(typeName);
        }
        catch (e) {
            const utc = UnionTypeComposer_1.UnionTypeComposer.create(typeName, this);
            this.set(typeName, utc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(utc);
            return utc;
        }
    }
    getOrCreateSTC(typeName, onCreate) {
        try {
            return this.getSTC(typeName);
        }
        catch (e) {
            const stc = ScalarTypeComposer_1.ScalarTypeComposer.create(typeName, this);
            this.set(typeName, stc);
            if (onCreate && (0, is_1.isFunction)(onCreate))
                onCreate(stc);
            return stc;
        }
    }
    getOTC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLObjectType)) {
            return ObjectTypeComposer_1.ObjectTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, ObjectTypeComposer_1.ObjectTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find ObjectTypeComposer with name ${typeName}`);
    }
    getITC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLInputObjectType)) {
            return InputTypeComposer_1.InputTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, InputTypeComposer_1.InputTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find InputTypeComposer with name ${typeName}`);
    }
    getETC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLEnumType)) {
            return EnumTypeComposer_1.EnumTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, EnumTypeComposer_1.EnumTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find EnumTypeComposer with name ${typeName}`);
    }
    getIFTC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLInterfaceType)) {
            return InterfaceTypeComposer_1.InterfaceTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, InterfaceTypeComposer_1.InterfaceTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find InterfaceTypeComposer with name ${typeName}`);
    }
    getUTC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLUnionType)) {
            return UnionTypeComposer_1.UnionTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, UnionTypeComposer_1.UnionTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find UnionTypeComposer with name ${typeName}`);
    }
    getSTC(typeName) {
        if (this.hasInstance(typeName, graphql_1.GraphQLScalarType)) {
            return ScalarTypeComposer_1.ScalarTypeComposer.create(this.get(typeName), this);
        }
        if (this.hasInstance(typeName, ScalarTypeComposer_1.ScalarTypeComposer)) {
            return this.get(typeName);
        }
        throw new Error(`Cannot find ScalarTypeComposer with name ${typeName}`);
    }
    getAnyTC(typeOrName) {
        let type;
        if (typeof typeOrName === 'string') {
            type = this.get(typeOrName);
        }
        else {
            type = typeOrName;
        }
        if (type == null) {
            throw new Error(`Cannot find type with name ${typeOrName}`);
        }
        else if ((0, typeHelpers_1.isNamedTypeComposer)(type)) {
            return type;
        }
        while (type instanceof graphql_1.GraphQLList || type instanceof graphql_1.GraphQLNonNull) {
            type = type.ofType;
        }
        if (type instanceof graphql_1.GraphQLObjectType) {
            return ObjectTypeComposer_1.ObjectTypeComposer.create(type, this);
        }
        else if (type instanceof graphql_1.GraphQLInputObjectType) {
            return InputTypeComposer_1.InputTypeComposer.create(type, this);
        }
        else if (type instanceof graphql_1.GraphQLScalarType) {
            return ScalarTypeComposer_1.ScalarTypeComposer.create(type, this);
        }
        else if (type instanceof graphql_1.GraphQLEnumType) {
            return EnumTypeComposer_1.EnumTypeComposer.create(type, this);
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            return InterfaceTypeComposer_1.InterfaceTypeComposer.create(type, this);
        }
        else if (type instanceof graphql_1.GraphQLUnionType) {
            return UnionTypeComposer_1.UnionTypeComposer.create(type, this);
        }
        throw new Error((0, dedent_1.dedent) `
      Type with name ${(0, misc_1.inspect)(typeOrName)} cannot be obtained as any Composer helper.
      Put something strange?
    `);
    }
    addAsComposer(typeOrSDL) {
        (0, deprecate_1.default)('Use schemaComposer.add() method instead. From v7 all types in storage saved as TypeComposers.');
        return this.add(typeOrSDL);
    }
    isObjectType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isOutputTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof ObjectTypeComposer_1.ObjectTypeComposer;
    }
    isInputObjectType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isInputTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof InputTypeComposer_1.InputTypeComposer;
    }
    isScalarType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isScalarTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof ScalarTypeComposer_1.ScalarTypeComposer;
    }
    isEnumType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isEnumTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof EnumTypeComposer_1.EnumTypeComposer;
    }
    isInterfaceType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isInterfaceTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof InterfaceTypeComposer_1.InterfaceTypeComposer;
    }
    isUnionType(type) {
        if (typeof type === 'string' && (0, typeHelpers_1.isUnionTypeDefinitionString)(type))
            return true;
        if (!this.has(type))
            return false;
        return this.getAnyTC(type) instanceof UnionTypeComposer_1.UnionTypeComposer;
    }
    clear() {
        super.clear();
        this._schemaMustHaveTypes = [];
        this._directives = exports.BUILT_IN_DIRECTIVES;
    }
    add(typeOrSDL) {
        const tc = this.createTC(typeOrSDL);
        return tc.getTypeName();
    }
    set(key, value) {
        if (!(0, typeHelpers_1.isNamedTypeComposer)(value)) {
            (0, deprecate_1.default)(`SchemaComposer.set() accept only TypeComposers. ` +
                `You provide with key ${(0, misc_1.inspect)(key)} the following wrong value ${(0, misc_1.inspect)(value)}.`);
        }
        super.set(key, value);
        return this;
    }
    addDirective(directive) {
        if (!(directive instanceof graphql_1.GraphQLDirective)) {
            throw new Error((0, dedent_1.dedent) `
        You should provide GraphQLDirective to schemaComposer.addDirective(), but received: 
          ${(0, misc_1.inspect)(directive)}
      `);
        }
        if (!this.hasDirective(directive)) {
            this._directives.push(directive);
        }
        return this;
    }
    removeDirective(directive) {
        this._directives = this._directives.filter((o) => o !== directive);
        return this;
    }
    getDirectives() {
        return this._directives;
    }
    _getDirective(name) {
        const directives = this.getDirectives();
        return directives.find((d) => d.name === name);
    }
    getDirective(name) {
        const directive = this._getDirective(name);
        if (!directive) {
            throw new Error(`Directive instance with name ${name} does not exists.`);
        }
        return directive;
    }
    hasDirective(directive) {
        if (!directive)
            return false;
        if (typeof directive === 'string') {
            const name = directive.startsWith('@') ? directive.slice(1) : directive;
            return !!this._directives.find((o) => o.name === name);
        }
        else if (directive instanceof graphql_1.GraphQLDirective) {
            return !!this._directives.find((o) => o === directive);
        }
        return false;
    }
    toString() {
        return 'SchemaComposer';
    }
    toJSON() {
        return 'SchemaComposer';
    }
    inspect() {
        return 'SchemaComposer';
    }
    getTypeSDL(typeName, opts) {
        return this.getAnyTC(typeName).toSDL(opts);
    }
    toSDL(options) {
        const opts = Object.assign({ sortTypes: 'GROUP_BY_TYPE' }, options);
        return (0, schemaPrinter_1.printSchemaComposer)(this, opts);
    }
    getResolveMethods(opts) {
        const resolveMethods = {};
        const exclude = (opts === null || opts === void 0 ? void 0 : opts.exclude) || [];
        (0, schemaVisitor_1.visitSchema)(this, {
            OBJECT_TYPE: (tc) => {
                const typename = tc.getTypeName();
                if (exclude.includes(typename))
                    return;
                (0, misc_1.forEachKey)(tc.getFields(), (fc, fieldName) => {
                    if (!fc.resolve || fc.resolve === graphql_1.defaultFieldResolver)
                        return;
                    if (!resolveMethods[typename])
                        resolveMethods[typename] = {};
                    resolveMethods[typename][fieldName] = fc.resolve;
                });
            },
            ENUM_TYPE: (tc) => {
                const typename = tc.getTypeName();
                if (exclude.includes(typename))
                    return;
                let hasDifferentIntervalValues = false;
                const internalValues = {};
                (0, misc_1.forEachKey)(tc.getFields(), (fc, fieldName) => {
                    if (fc.value !== fieldName)
                        hasDifferentIntervalValues = true;
                    internalValues[fieldName] = fc.value;
                });
                if (hasDifferentIntervalValues) {
                    resolveMethods[typename] = internalValues;
                }
            },
        });
        return resolveMethods;
    }
}
exports.SchemaComposer = SchemaComposer;
//# sourceMappingURL=SchemaComposer.js.map