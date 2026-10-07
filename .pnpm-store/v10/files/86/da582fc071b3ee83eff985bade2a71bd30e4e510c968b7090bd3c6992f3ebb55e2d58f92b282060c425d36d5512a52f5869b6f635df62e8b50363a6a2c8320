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
exports.UnionTypeComposer = void 0;
const graphql_1 = require("./graphql");
const is_1 = require("./utils/is");
const misc_1 = require("./utils/misc");
const ObjectTypeComposer_1 = require("./ObjectTypeComposer");
const SchemaComposer_1 = require("./SchemaComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const ThunkComposer_1 = require("./ThunkComposer");
const configToDefine_1 = require("./utils/configToDefine");
const typeHelpers_1 = require("./utils/typeHelpers");
const graphqlVersion_1 = require("./utils/graphqlVersion");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const definitionNode_1 = require("./utils/definitionNode");
const schemaPrinterSortTypes_1 = require("./utils/schemaPrinterSortTypes");
class UnionTypeComposer {
    constructor(graphqlType, schemaComposer) {
        this._gqcFallbackResolveType = null;
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new UnionTypeComposer(GraphQLUnionType, SchemaComposer)`');
        }
        if (!(graphqlType instanceof graphql_1.GraphQLUnionType)) {
            throw new Error('UnionTypeComposer accept only GraphQLUnionType in constructor. Try to use more flexible method `UnionTypeComposer.create()`.');
        }
        this.schemaComposer = schemaComposer;
        this._gqType = graphqlType;
        this.schemaComposer.set(graphqlType, this);
        this.schemaComposer.set(graphqlType.name, this);
        let types = [];
        if (graphqlVersion_1.graphqlVersion >= 14) {
            types = this._gqType._types;
        }
        else {
            types = this._gqType._types || this._gqType._typeConfig.types;
        }
        types = (0, configToDefine_1.convertObjectTypeArrayAsThunk)(types, this.schemaComposer);
        this._gqcTypes = new Set();
        types.forEach((type) => {
            this._gqcTypes.add(type);
        });
        this._gqcTypeResolvers = new Map();
        if (!this._gqType.astNode) {
            this._gqType.astNode = (0, definitionNode_1.getUnionTypeDefinitionNode)(this);
        }
        this._gqcIsModified = false;
    }
    static create(typeDef, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `UnionTypeComposer.create(typeDef, schemaComposer)`');
        }
        if (schemaComposer.hasInstance(typeDef, UnionTypeComposer)) {
            return schemaComposer.getUTC(typeDef);
        }
        const utc = this.createTemp(typeDef, schemaComposer);
        schemaComposer.add(utc);
        return utc;
    }
    static createTemp(typeDef, schemaComposer) {
        const sc = schemaComposer || new SchemaComposer_1.SchemaComposer();
        let UTC;
        if ((0, is_1.isString)(typeDef)) {
            const typeName = typeDef;
            if ((0, typeHelpers_1.isTypeNameString)(typeName)) {
                UTC = new UnionTypeComposer(new graphql_1.GraphQLUnionType({
                    name: typeName,
                    types: () => [],
                }), sc);
            }
            else {
                UTC = sc.typeMapper.convertSDLTypeDefinition(typeName);
                if (!(UTC instanceof UnionTypeComposer)) {
                    throw new Error('You should provide correct GraphQLUnionType type definition. ' +
                        'Eg. `union MyType = Photo | Person`');
                }
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLUnionType) {
            UTC = new UnionTypeComposer(typeDef, sc);
        }
        else if ((0, is_1.isObject)(typeDef)) {
            const type = new graphql_1.GraphQLUnionType(Object.assign(Object.assign({}, typeDef), { types: () => [] }));
            UTC = new UnionTypeComposer(type, sc);
            const types = typeDef.types;
            if (Array.isArray(types))
                UTC.setTypes(types);
            else if ((0, is_1.isFunction)(types)) {
                UTC.setTypes((0, configToDefine_1.convertObjectTypeArrayAsThunk)(types, sc));
            }
            UTC.setExtensions(typeDef.extensions);
            if (Array.isArray(typeDef === null || typeDef === void 0 ? void 0 : typeDef.directives)) {
                UTC.setDirectives(typeDef.directives);
            }
        }
        else {
            throw new Error(`You should provide GraphQLUnionTypeConfig or string with union name or SDL definition. Provided:\n${(0, misc_1.inspect)(typeDef)}`);
        }
        return UTC;
    }
    hasType(name) {
        const typeName = (0, typeHelpers_1.getComposeTypeName)(name, this.schemaComposer);
        for (const type of this._gqcTypes) {
            if (type.getTypeName() === typeName) {
                return true;
            }
        }
        return false;
    }
    getTypes() {
        return Array.from(this._gqcTypes.values());
    }
    getTypeComposers() {
        return this.getTypes().map((t) => (0, typeHelpers_1.unwrapOutputTC)(t));
    }
    getTypeNames() {
        return this.getTypes().map((t) => t.getTypeName());
    }
    clearTypes() {
        this._gqcTypes.clear();
        this._gqcIsModified = true;
        return this;
    }
    setTypes(types) {
        const tcs = (0, configToDefine_1.convertObjectTypeArrayAsThunk)(types, this.schemaComposer);
        this._gqcTypes = new Set(tcs);
        this._gqcIsModified = true;
        return this;
    }
    addType(type) {
        const tc = this._convertObjectType(type);
        this.removeType(tc.getTypeName());
        this._gqcTypes.add(tc);
        this._gqcIsModified = true;
        return this;
    }
    addTypes(types) {
        if (!Array.isArray(types)) {
            throw new Error(`UnionTypeComposer[${this.getTypeName()}].addType() accepts only array`);
        }
        types.forEach((type) => this.addType(type));
        return this;
    }
    removeType(nameOrArray) {
        const typeNames = Array.isArray(nameOrArray) ? nameOrArray : [nameOrArray];
        typeNames.forEach((typeName) => {
            for (const type of this._gqcTypes) {
                if (type.getTypeName() === typeName) {
                    this._gqcTypes.delete(type);
                    this._gqcIsModified = true;
                }
            }
        });
        return this;
    }
    removeOtherTypes(nameOrArray) {
        const keepTypeNames = Array.isArray(nameOrArray) ? nameOrArray : [nameOrArray];
        for (const type of this._gqcTypes) {
            if (keepTypeNames.indexOf(type.getTypeName()) === -1) {
                this._gqcTypes.delete(type);
                this._gqcIsModified = true;
            }
        }
        return this;
    }
    getType() {
        if (this._gqcIsModified) {
            this._gqcIsModified = false;
            this._gqType.astNode = (0, definitionNode_1.getUnionTypeDefinitionNode)(this);
            const prepareTypes = () => {
                try {
                    return this.getTypes().map((tc) => tc.getType());
                }
                catch (e) {
                    e.message = `UnionError[${this.getTypeName()}]: ${e.message}`;
                    throw e;
                }
            };
            if (graphqlVersion_1.graphqlVersion >= 14) {
                this._gqType._types = prepareTypes;
            }
            else {
                this._gqType._types = null;
                this._gqType._typeConfig.types = prepareTypes;
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
            throw new Error('You should provide newTypeName:string for UnionTypeComposer.clone()');
        }
        const cloned = newTypeNameOrTC instanceof UnionTypeComposer
            ? newTypeNameOrTC
            : UnionTypeComposer.create(newTypeNameOrTC, this.schemaComposer);
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned._gqcTypes = new Set(this._gqcTypes);
        cloned._gqcTypeResolvers = new Map(this._gqcTypeResolvers);
        cloned._gqcFallbackResolveType = this._gqcFallbackResolveType;
        cloned.setDescription(this.getDescription());
        cloned.setDirectives(this.getDirectives());
        return cloned;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for ObjectTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return this;
        const cloned = UnionTypeComposer.create(this.getTypeName(), anotherSchemaComposer);
        cloneMap.set(this, cloned);
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
        const types = this.getTypes();
        if (types.length > 0) {
            cloned.setTypes(types.map((tc) => (0, typeHelpers_1.cloneTypeTo)(tc, anotherSchemaComposer, cloneMap)));
        }
        return cloned;
    }
    merge(type) {
        let tc;
        if (type instanceof graphql_1.GraphQLUnionType) {
            tc = UnionTypeComposer.createTemp(type, this.schemaComposer);
        }
        else if (type instanceof UnionTypeComposer) {
            tc = type;
        }
        else {
            throw new Error(`Cannot merge ${(0, misc_1.inspect)(type)} with UnionType(${this.getTypeName()}). Provided type should be GraphQLUnionType or UnionTypeComposer.`);
        }
        this.addTypes(tc.getTypes().map((t) => t.getTypeName()));
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
        const tc = this._convertObjectType(type);
        return typeResolversMap.has(tc);
    }
    getTypeResolvers() {
        return this._gqcTypeResolvers;
    }
    getTypeResolverCheckFn(type) {
        const typeResolversMap = this.getTypeResolvers();
        const tc = this._convertObjectType(type);
        if (!typeResolversMap.has(tc)) {
            throw new Error(`Type resolve function in union '${this.getTypeName()}' is not defined for type ${(0, misc_1.inspect)(type)}.`);
        }
        return typeResolversMap.get(tc);
    }
    getTypeResolverNames() {
        const typeResolversMap = this.getTypeResolvers();
        const names = [];
        typeResolversMap.forEach((_, tc) => {
            names.push(tc.getTypeName());
        });
        return names;
    }
    getTypeResolverTypes() {
        const typeResolversMap = this.getTypeResolvers();
        return Array.from(typeResolversMap.keys());
    }
    setTypeResolvers(typeResolversMap) {
        this._gqcTypeResolvers = this._convertTypeResolvers(typeResolversMap);
        this._gqcIsModified = true;
        this._initResolveTypeFn();
        return this;
    }
    _initResolveTypeFn() {
        const fallbackType = this._gqcFallbackResolveType
            ? (0, typeHelpers_1.getGraphQLType)(this._gqcFallbackResolveType)
            : undefined;
        const fastEntries = [];
        if (graphqlVersion_1.graphqlVersion >= 16) {
            for (const [composeType, checkFn] of this._gqcTypeResolvers.entries()) {
                fastEntries.push([(0, typeHelpers_1.getComposeTypeName)(composeType, this.schemaComposer), checkFn]);
                this.addType(composeType);
            }
        }
        else {
            for (const [composeType, checkFn] of this._gqcTypeResolvers.entries()) {
                fastEntries.push([(0, typeHelpers_1.getGraphQLType)(composeType), checkFn]);
                this.addType(composeType);
            }
        }
        let resolveType;
        const isAsyncRuntime = this._isTypeResolversAsync(this._gqcTypeResolvers);
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
    _convertObjectType(type) {
        const tc = this.schemaComposer.typeMapper.convertOutputTypeDefinition(type);
        if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer || tc instanceof ThunkComposer_1.ThunkComposer) {
            return tc;
        }
        throw new Error(`Should be provided ObjectType but received ${(0, misc_1.inspect)(type)}`);
    }
    _convertTypeResolvers(typeResolversMap) {
        if (!(typeResolversMap instanceof Map)) {
            throw new Error(`For union ${this.getTypeName()} you should provide Map object for type resolvers.`);
        }
        const result = new Map();
        for (const [composeType, checkFn] of typeResolversMap.entries()) {
            try {
                result.set(this._convertObjectType(composeType), checkFn);
            }
            catch (e) {
                throw new Error(`For union type resolver ${this.getTypeName()} you must provide GraphQLObjectType or ObjectTypeComposer, but provided ${(0, misc_1.inspect)(composeType)}`);
            }
            if (!(0, is_1.isFunction)(checkFn)) {
                throw new Error(`Union ${this.getTypeName()} has invalid check function for type ${(0, misc_1.inspect)(composeType)}`);
            }
        }
        return result;
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
        const tc = this._convertObjectType(type);
        typeResolversMap.set(tc, checkFn);
        this.schemaComposer.addSchemaMustHaveType(tc);
        this.setTypeResolvers(typeResolversMap);
        return this;
    }
    removeTypeResolver(type) {
        const typeResolversMap = this.getTypeResolvers();
        const tc = this._convertObjectType(type);
        typeResolversMap.delete(tc);
        this.setTypeResolvers(typeResolversMap);
        return this;
    }
    setTypeResolverFallback(type) {
        if (type) {
            this.addType(type);
            this.schemaComposer.addSchemaMustHaveType(type);
        }
        this._gqcFallbackResolveType = type;
        this._gqcIsModified = true;
        this._initResolveTypeFn();
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
    getNestedTCs(opts = {}, passedTypes = new Set()) {
        const exclude = Array.isArray(opts.exclude) ? opts.exclude : [];
        this.getTypeComposers().forEach((tc) => {
            if (!passedTypes.has(tc) && !exclude.includes(tc.getTypeName())) {
                passedTypes.add(tc);
                if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
                    tc.getNestedTCs(opts, passedTypes);
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
            r += (0, schemaPrinter_1.printUnion)(this.getType(), innerOpts);
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
        return (0, schemaPrinter_1.printUnion)(this.getType(), innerOpts);
    }
}
exports.UnionTypeComposer = UnionTypeComposer;
//# sourceMappingURL=UnionTypeComposer.js.map