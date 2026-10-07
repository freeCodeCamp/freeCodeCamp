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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolver = void 0;
const ObjectTypeComposer_1 = require("./ObjectTypeComposer");
const InputTypeComposer_1 = require("./InputTypeComposer");
const EnumTypeComposer_1 = require("./EnumTypeComposer");
const SchemaComposer_1 = require("./SchemaComposer");
const deepmerge_1 = require("./utils/deepmerge");
const misc_1 = require("./utils/misc");
const is_1 = require("./utils/is");
const filterByDotPaths_1 = require("./utils/filterByDotPaths");
const projection_1 = require("./utils/projection");
const typeByPath_1 = require("./utils/typeByPath");
const typeHelpers_1 = require("./utils/typeHelpers");
const type_1 = require("./type");
const NonNullComposer_1 = require("./NonNullComposer");
const ListComposer_1 = require("./ListComposer");
class Resolver {
    constructor(opts, schemaComposer) {
        this.resolve = () => Promise.resolve();
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new Resolver(opts, SchemaComposer)`');
        }
        this.schemaComposer = schemaComposer;
        if (!opts.name) {
            throw new Error('For Resolver constructor the `opts.name` is required option.');
        }
        this.name = opts.name;
        this.displayName = opts.displayName;
        this.parent = opts.parent;
        this.kind = opts.kind;
        this.description = opts.description;
        this.deprecationReason = opts.deprecationReason;
        this.projection = opts.projection || {};
        this.extensions = opts.extensions;
        if (opts.type) {
            this.setType(opts.type);
        }
        this.setArgs(opts.args || {});
        if (opts.resolve) {
            this.resolve = opts.resolve;
        }
        if (opts.directives) {
            this.directives = opts.directives;
        }
    }
    getType() {
        if (!this.type) {
            return type_1.GraphQLJSON;
        }
        return this.type.getType();
    }
    getTypeName() {
        return this.type.getTypeName();
    }
    getTypeComposer() {
        const anyTC = this.type;
        return (0, typeHelpers_1.unwrapOutputTC)(anyTC);
    }
    getOTC() {
        const anyTC = this.getTypeComposer();
        if (!(anyTC instanceof ObjectTypeComposer_1.ObjectTypeComposer)) {
            throw new Error(`Resolver ${this.name} cannot return its output type as ObjectTypeComposer instance. ` +
                `Cause '${this.type.toString()}' does not instance of ${anyTC.constructor.name}.`);
        }
        return anyTC;
    }
    setType(typeDef) {
        const tc = this.schemaComposer.typeMapper.convertOutputTypeDefinition(typeDef, 'setType', 'Resolver');
        if (!tc) {
            throw new Error(`Cannot convert to ObjectType following value: ${(0, misc_1.inspect)(typeDef)}`);
        }
        this.type = tc;
        return this;
    }
    hasArg(argName) {
        return !!this.args[argName];
    }
    getArg(argName) {
        if (!this.hasArg(argName)) {
            throw new Error(`Cannot get arg '${argName}' for resolver ${this.name}. Argument does not exist.`);
        }
        let arg = this.args[argName];
        if ((0, is_1.isFunction)(arg))
            arg = arg(this.schemaComposer);
        if (typeof arg === 'string' || (0, typeHelpers_1.isComposeInputType)(arg) || Array.isArray(arg)) {
            return { type: arg };
        }
        return arg;
    }
    getArgConfig(argName) {
        const ac = this.getArg(argName);
        return Object.assign(Object.assign({}, ac), { type: ac.type.getType() });
    }
    getArgType(argName) {
        const ac = this.getArgConfig(argName);
        return ac.type;
    }
    getArgTypeName(fieldName) {
        return this.getArg(fieldName).type.getTypeName();
    }
    getArgs() {
        return this.args;
    }
    getArgNames() {
        return Object.keys(this.args);
    }
    setArgs(args) {
        this.args = this.schemaComposer.typeMapper.convertArgConfigMap(args, this.name, 'Resolver');
        return this;
    }
    setArg(argName, argConfig) {
        this.args[argName] = this.schemaComposer.typeMapper.convertArgConfig(argConfig, argName, this.name, 'Resolver');
        return this;
    }
    setArgType(argName, typeDef) {
        const ac = this.getArg(argName);
        const tc = this.schemaComposer.typeMapper.convertInputTypeDefinition(typeDef, argName, 'Resolver.args');
        if (!tc) {
            throw new Error(`Cannot create InputType from ${(0, misc_1.inspect)(typeDef)}`);
        }
        ac.type = tc;
        return this;
    }
    extendArg(argName, partialArgConfig) {
        let prevArgConfig;
        try {
            prevArgConfig = this.getArgConfig(argName);
        }
        catch (e) {
            throw new Error(`Cannot extend arg '${argName}' in Resolver '${this.name}'. Argument does not exist.`);
        }
        this.setArg(argName, Object.assign(Object.assign({}, prevArgConfig), partialArgConfig));
        return this;
    }
    addArgs(newArgs) {
        this.setArgs(Object.assign(Object.assign({}, this.getArgs()), newArgs));
        return this;
    }
    removeArg(argNameOrArray) {
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            delete this.args[argName];
        });
        return this;
    }
    removeOtherArgs(argNameOrArray) {
        const keepArgNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        Object.keys(this.args).forEach((argName) => {
            if (keepArgNames.indexOf(argName) === -1) {
                delete this.args[argName];
            }
        });
        return this;
    }
    reorderArgs(names) {
        const orderedArgs = {};
        names.forEach((name) => {
            if (this.args[name]) {
                orderedArgs[name] = this.args[name];
                delete this.args[name];
            }
        });
        this.args = Object.assign(Object.assign({}, orderedArgs), this.args);
        return this;
    }
    getArgTC(argName) {
        const argType = this.getArg(argName).type;
        return (0, typeHelpers_1.unwrapInputTC)(argType);
    }
    getArgITC(argName) {
        const tc = this.getArgTC(argName);
        if (!(tc instanceof InputTypeComposer_1.InputTypeComposer)) {
            throw new Error(`Resolver(${this.name}).getArgITC('${argName}') must be InputTypeComposer, but received ${tc.constructor.name}. Maybe you need to use 'getArgTC()' method which returns any type composer?`);
        }
        return tc;
    }
    isArgNonNull(argName) {
        return this.getArg(argName).type instanceof NonNullComposer_1.NonNullComposer;
    }
    makeArgNonNull(argNameOrArray) {
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            if (this.hasArg(argName)) {
                const argTC = this.getArg(argName).type;
                if (!(argTC instanceof NonNullComposer_1.NonNullComposer)) {
                    this.setArgType(argName, new NonNullComposer_1.NonNullComposer(argTC));
                }
            }
        });
        return this;
    }
    makeRequired(argNameOrArray) {
        return this.makeArgNonNull(argNameOrArray);
    }
    makeArgNullable(argNameOrArray) {
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            if (this.hasArg(argName)) {
                const argTC = this.getArg(argName).type;
                if (argTC instanceof NonNullComposer_1.NonNullComposer) {
                    this.setArgType(argName, argTC.ofType);
                }
            }
        });
        return this;
    }
    makeOptional(argNameOrArray) {
        return this.makeArgNullable(argNameOrArray);
    }
    isArgPlural(argName) {
        const type = this.getArg(argName).type;
        return (type instanceof ListComposer_1.ListComposer ||
            (type instanceof NonNullComposer_1.NonNullComposer && type.ofType instanceof ListComposer_1.ListComposer));
    }
    makeArgPlural(argNameOrArray) {
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = this.args[argName];
            if (ac && !(ac.type instanceof ListComposer_1.ListComposer)) {
                ac.type = new ListComposer_1.ListComposer(ac.type);
            }
        });
        return this;
    }
    makeArgNonPlural(argNameOrArray) {
        const argNames = Array.isArray(argNameOrArray) ? argNameOrArray : [argNameOrArray];
        argNames.forEach((argName) => {
            const ac = this.args[argName];
            if (ac) {
                if (ac.type instanceof ListComposer_1.ListComposer) {
                    ac.type = ac.type.ofType;
                }
                else if (ac.type instanceof NonNullComposer_1.NonNullComposer && ac.type.ofType instanceof ListComposer_1.ListComposer) {
                    ac.type =
                        ac.type.ofType.ofType instanceof NonNullComposer_1.NonNullComposer
                            ? ac.type.ofType.ofType
                            : new NonNullComposer_1.NonNullComposer(ac.type.ofType.ofType);
                }
            }
        });
        return this;
    }
    cloneArg(argName, newTypeName) {
        if (!{}.hasOwnProperty.call(this.args, argName)) {
            throw new Error(`Can not clone arg ${(0, misc_1.inspect)(argName)} for resolver ${this.name}. Argument does not exist.`);
        }
        const argTC = this.getArg(argName).type;
        const clonedTC = (0, typeHelpers_1.replaceTC)(argTC, (unwrappedTC) => {
            if (!(unwrappedTC instanceof InputTypeComposer_1.InputTypeComposer)) {
                throw new Error(`Cannot clone arg ${(0, misc_1.inspect)(argName)} for resolver ${(0, misc_1.inspect)(this.name)}. ` +
                    `Argument should be InputObjectType, but received: ${(0, misc_1.inspect)(unwrappedTC)}.`);
            }
            if (!newTypeName || newTypeName !== (0, misc_1.clearName)(newTypeName)) {
                throw new Error('You should provide new type name as second argument');
            }
            if (newTypeName === unwrappedTC.getTypeName()) {
                throw new Error(`You should provide new type name. It is equal to current name: ${(0, misc_1.inspect)(newTypeName)}.`);
            }
            return unwrappedTC.clone(newTypeName);
        });
        if (clonedTC)
            this.setArgType(argName, clonedTC);
        return this;
    }
    addFilterArg(opts) {
        if (!opts.name) {
            throw new Error('For Resolver.addFilterArg the arg name `opts.name` is required.');
        }
        if (!opts.type) {
            throw new Error('For Resolver.addFilterArg the arg type `opts.type` is required.');
        }
        const resolver = this.wrap(null, { name: 'addFilterArg' });
        let filterITC;
        if (resolver.hasArg('filter')) {
            filterITC = resolver.getArgTC('filter');
        }
        if (!(filterITC instanceof InputTypeComposer_1.InputTypeComposer)) {
            if (!opts.filterTypeNameFallback || !(0, is_1.isString)(opts.filterTypeNameFallback)) {
                throw new Error('For Resolver.addFilterArg needs to provide `opts.filterTypeNameFallback: string`. ' +
                    'This string will be used as unique name for `filter` type of input argument. ' +
                    'Eg. FilterXXXXXInput');
            }
            filterITC = InputTypeComposer_1.InputTypeComposer.create(opts.filterTypeNameFallback, this.schemaComposer);
            resolver.args.filter = {
                type: filterITC,
            };
        }
        const { name, type, defaultValue, description } = opts;
        filterITC.setField(name, { type, description });
        if (defaultValue !== undefined) {
            resolver.args.filter.defaultValue = resolver.args.filter.defaultValue || {};
            resolver.args.filter.defaultValue[name] = defaultValue;
        }
        const resolveNext = resolver.getResolve();
        const query = opts.query;
        if (query && (0, is_1.isFunction)(query)) {
            resolver.setResolve((resolveParams) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                const value = (_b = (_a = resolveParams === null || resolveParams === void 0 ? void 0 : resolveParams.args) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b[name];
                if (value !== null && value !== undefined) {
                    if (!resolveParams.rawQuery) {
                        resolveParams.rawQuery = {};
                    }
                    yield query(resolveParams.rawQuery, value, resolveParams);
                }
                return resolveNext(resolveParams);
            }));
        }
        return resolver;
    }
    addSortArg(opts) {
        if (!opts.name) {
            throw new Error('For Resolver.addSortArg the `opts.name` is required.');
        }
        if (!opts.value) {
            throw new Error('For Resolver.addSortArg the `opts.value` is required.');
        }
        const resolver = this.wrap(null, { name: 'addSortArg' });
        let sortETC;
        if (resolver.hasArg('sort')) {
            sortETC = resolver.getArgTC('sort');
        }
        if (!sortETC) {
            if (!opts.sortTypeNameFallback || !(0, is_1.isString)(opts.sortTypeNameFallback)) {
                throw new Error('For Resolver.addSortArg needs to provide `opts.sortTypeNameFallback: string`. ' +
                    'This string will be used as unique name for `sort` type of input argument. ' +
                    'Eg. SortXXXXXEnum');
            }
            sortETC = EnumTypeComposer_1.EnumTypeComposer.create(opts.sortTypeNameFallback, this.schemaComposer);
            resolver.args.sort = {
                type: sortETC,
            };
        }
        if (!(sortETC instanceof EnumTypeComposer_1.EnumTypeComposer)) {
            throw new Error(`Resolver must have 'sort' arg with EnumType, but got: ${(0, misc_1.inspect)(sortETC)} `);
        }
        const { name, description, deprecationReason, value } = opts;
        sortETC.setField(name, {
            description,
            deprecationReason,
            value,
        });
        const resolveNext = resolver.getResolve();
        if ((0, is_1.isFunction)(value)) {
            sortETC.extendField(name, { value: name });
            const getValue = value;
            resolver.setResolve((resolveParams) => {
                var _a;
                const v = (_a = resolveParams === null || resolveParams === void 0 ? void 0 : resolveParams.args) === null || _a === void 0 ? void 0 : _a.sort;
                if (v === name) {
                    const newSortValue = getValue(resolveParams);
                    resolveParams.args.sort = newSortValue;
                }
                return resolveNext(resolveParams);
            });
        }
        return resolver;
    }
    getResolve() {
        return this.resolve;
    }
    setResolve(resolve) {
        this.resolve = resolve;
        return this;
    }
    withMiddlewares(middlewares) {
        if (!Array.isArray(middlewares)) {
            throw new Error(`You should provide array of middlewares '(resolve, source, args, context, info) => any', but provided ${(0, misc_1.inspect)(middlewares)}.`);
        }
        let resolver = this;
        middlewares.reverse().forEach((mw) => {
            let name;
            if (mw.name) {
                name = mw.name;
            }
            else if (mw.constructor && mw.constructor.name) {
                name = mw.constructor.name;
            }
            else {
                name = 'middleware';
            }
            const newResolver = this.clone({ name, parent: resolver });
            const resolve = resolver.getResolve();
            newResolver.setResolve((rp) => mw((source, args, context, info) => {
                return resolve(Object.assign(Object.assign({}, rp), { source, args, context, info }));
            }, rp.source, rp.args, rp.context, rp.info));
            resolver = newResolver;
        });
        return resolver;
    }
    wrap(cb, newResolverOpts = {}) {
        const prevResolver = this;
        const newResolver = this.clone(Object.assign({ name: 'wrap', parent: prevResolver }, newResolverOpts));
        if ((0, is_1.isFunction)(cb)) {
            const resolver = cb(newResolver, prevResolver);
            if (resolver)
                return resolver;
        }
        return newResolver;
    }
    wrapResolve(cb, wrapperName = 'wrapResolve') {
        return this.wrap((newResolver, prevResolver) => {
            const newResolve = cb(prevResolver.getResolve());
            newResolver.setResolve(newResolve);
            return newResolver;
        }, { name: wrapperName });
    }
    wrapArgs(cb, wrapperName = 'wrapArgs') {
        return this.wrap((newResolver, prevResolver) => {
            const prevArgs = Object.assign({}, prevResolver.getArgs());
            const newArgs = cb(prevArgs) || prevArgs;
            newResolver.setArgs(newArgs);
            return newResolver;
        }, { name: wrapperName });
    }
    wrapCloneArg(argName, newTypeName) {
        return this.wrap((newResolver) => newResolver.cloneArg(argName, newTypeName), {
            name: 'cloneFilterArg',
        });
    }
    wrapType(cb, wrapperName = 'wrapType') {
        return this.wrap((newResolver, prevResolver) => {
            const prevType = prevResolver.type;
            const newType = cb(prevType) || prevType;
            newResolver.setType(newType);
            return newResolver;
        }, { name: wrapperName });
    }
    getFieldConfig(opts = {}) {
        const fc = {
            type: this.getType(),
            args: (0, misc_1.mapEachKey)(this.getArgs(), (ac) => (Object.assign(Object.assign({}, ac), { type: ac.type.getType() }))),
            resolve: this.getFieldResolver(opts),
        };
        if (this.description)
            fc.description = this.description;
        if (this.deprecationReason)
            fc.deprecationReason = this.deprecationReason;
        return fc;
    }
    getFieldResolver(opts = {}) {
        const resolve = this.getResolve();
        return (source, args, context, info) => {
            let projection = (0, projection_1.getProjectionFromAST)(info);
            if (this.projection) {
                projection = (0, deepmerge_1.deepmerge)(projection, this.projection);
            }
            if (opts.projection) {
                projection = (0, deepmerge_1.deepmerge)(projection, opts.projection);
            }
            return resolve({ source, args, context, info, projection });
        };
    }
    getKind() {
        return this.kind;
    }
    setKind(kind) {
        if (kind !== 'query' && kind !== 'mutation' && kind !== 'subscription') {
            throw new Error(`You provide incorrect value '${kind}' for Resolver.setKind method. ` +
                'Valid values are: query | mutation | subscription');
        }
        this.kind = kind;
        return this;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    getDeprecationReason() {
        return this.deprecationReason;
    }
    setDeprecationReason(reason) {
        this.deprecationReason = reason;
        return this;
    }
    get(path) {
        return (0, typeByPath_1.typeByPath)(this, path);
    }
    clone(opts = {}) {
        const oldOpts = {};
        const self = this;
        for (const key in self) {
            if (self.hasOwnProperty(key)) {
                oldOpts[key] = self[key];
            }
        }
        oldOpts.displayName = undefined;
        oldOpts.args = Object.assign({}, this.args);
        if (this.projection) {
            oldOpts.projection = Object.assign({}, this.projection);
        }
        return new Resolver(Object.assign(Object.assign({}, oldOpts), opts), this.schemaComposer);
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for InterfaceTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return cloneMap.get(this);
        const cloned = new Resolver({
            name: this.name,
            displayName: this.displayName,
            kind: this.kind,
            description: this.description,
            deprecationReason: this.deprecationReason,
            projection: Object.assign({}, this.projection),
            extensions: Object.assign({}, this.extensions),
            resolve: this.resolve,
        }, anotherSchemaComposer);
        cloneMap.set(this, cloned);
        if (this.type) {
            cloned.type = this.type.cloneTo(anotherSchemaComposer, cloneMap);
        }
        if (this.parent) {
            cloned.parent = this.parent.cloneTo(anotherSchemaComposer, cloneMap);
        }
        cloned.args = (0, misc_1.mapEachKey)(this.args, (argConfig) => (Object.assign(Object.assign({}, argConfig), { type: (0, typeHelpers_1.cloneTypeTo)(argConfig.type, anotherSchemaComposer, cloneMap), extensions: Object.assign({}, argConfig.extensions) })));
        return cloned;
    }
    getExtensions() {
        if (!this.extensions) {
            return {};
        }
        else {
            return this.extensions;
        }
    }
    setExtensions(extensions) {
        this.extensions = extensions;
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
    getNestedName() {
        const name = this.displayName || this.name;
        if (this.parent) {
            return `${name}(${this.parent.getNestedName()})`;
        }
        return name;
    }
    toString() {
        return (0, misc_1.inspect)(this.toDebugStructure()).replace(/\\n/g, '\n');
    }
    setDisplayName(name) {
        this.displayName = name;
        return this;
    }
    toDebugStructure() {
        const info = {
            name: this.name,
            displayName: this.displayName,
            type: (0, misc_1.inspect)(this.type),
            args: this.args,
            resolve: this.resolve ? this.resolve.toString() : this.resolve,
        };
        if (this.parent) {
            info.resolve = [info.resolve, { 'Parent resolver': this.parent.toDebugStructure() }];
        }
        return info;
    }
    debugExecTime() {
        return this.wrapResolve((next) => (rp) => __awaiter(this, void 0, void 0, function* () {
            const name = `Execution time for ${this.getNestedName()}`;
            console.time(name);
            const res = yield next(rp);
            console.timeEnd(name);
            return res;
        }), 'debugExecTime');
    }
    debugParams(filterPaths, opts = { colors: true, depth: 5 }) {
        return this.wrapResolve((next) => (rp) => {
            var _a, _b, _c;
            console.log(`ResolverResolveParams for ${this.getNestedName()}:`);
            const data = (0, filterByDotPaths_1.filterByDotPaths)(rp, filterPaths, {
                hideFields: (rp === null || rp === void 0 ? void 0 : rp.context) && ((_a = rp.context) === null || _a === void 0 ? void 0 : _a.res) && ((_b = rp.context) === null || _b === void 0 ? void 0 : _b.params) && ((_c = rp.context) === null || _c === void 0 ? void 0 : _c.headers)
                    ? {
                        info: '[[hidden]]',
                        context: '[[hidden]]',
                    }
                    : {
                        info: '[[hidden]]',
                        'context.*': '[[hidden]]',
                    },
                hideFieldsNote: 'Some data was [[hidden]] to display this fields use debugParams("%fieldNames%")',
            });
            console.dir(data, opts);
            return next(rp);
        }, 'debugParams');
    }
    debugPayload(filterPaths, opts = { colors: true, depth: 5 }) {
        return this.wrapResolve((next) => (rp) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield next(rp);
                console.log(`Resolved Payload for ${this.getNestedName()}:`);
                if (Array.isArray(res) && res.length > 3 && !filterPaths) {
                    console.dir([
                        filterPaths ? (0, filterByDotPaths_1.filterByDotPaths)(res[0], filterPaths) : res[0],
                        `[debug note]: Other ${res.length - 1} records was [[hidden]]. ` +
                            'Use debugPayload("0 1 2 3 4") or debug({ payload: "0 1 2 3 4" }) for display this records',
                    ], opts);
                }
                else {
                    console.dir(filterPaths ? (0, filterByDotPaths_1.filterByDotPaths)(res, filterPaths) : res, opts);
                }
                return res;
            }
            catch (e) {
                console.log(`Rejected Payload for ${this.getNestedName()}:`);
                console.log(e);
                throw e;
            }
        }), 'debugPayload');
    }
    debug(filterDotPaths, opts = { colors: true, depth: 2 }) {
        return this.debugExecTime()
            .debugParams(filterDotPaths ? filterDotPaths.params : null, opts)
            .debugPayload(filterDotPaths ? filterDotPaths.payload : null, opts);
    }
}
exports.Resolver = Resolver;
//# sourceMappingURL=Resolver.js.map