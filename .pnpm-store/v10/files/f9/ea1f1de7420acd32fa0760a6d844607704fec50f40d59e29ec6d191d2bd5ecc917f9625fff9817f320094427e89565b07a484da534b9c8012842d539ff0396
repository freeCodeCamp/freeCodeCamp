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
exports.getDescription = exports.TypeMapper = void 0;
const parser_1 = require("graphql/language/parser");
const language_1 = require("graphql/language");
const misc_1 = require("./utils/misc");
const values_1 = require("graphql/execution/values");
const deprecate_1 = __importDefault(require("./utils/deprecate"));
const misc_2 = require("./utils/misc");
const graphql_1 = require("./graphql");
const type_1 = require("./type");
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
const TypeStorage_1 = require("./TypeStorage");
const is_1 = require("./utils/is");
const typeHelpers_1 = require("./utils/typeHelpers");
const definitionNode_1 = require("./utils/definitionNode");
const blockString_1 = require("graphql/language/blockString");
class TypeMapper {
    constructor(schemaComposer) {
        if (!schemaComposer) {
            throw new Error('TypeMapper must have SchemaComposer instance.');
        }
        this.schemaComposer = schemaComposer;
    }
    static isOutputType(type) {
        (0, deprecate_1.default)("Use `import { isSomeOutputTypeComposer } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isSomeOutputTypeComposer)(type);
    }
    static isInputType(type) {
        (0, deprecate_1.default)("Use `import { isSomeInputTypeComposer } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isSomeInputTypeComposer)(type);
    }
    static isTypeNameString(str) {
        (0, deprecate_1.default)("Use `import { isTypeNameString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isTypeNameString)(str);
    }
    static isTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isTypeDefinitionString)(str);
    }
    static isOutputTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isOutputTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isOutputTypeDefinitionString)(str);
    }
    static isInputTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isInputTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isInputTypeDefinitionString)(str);
    }
    static isEnumTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isEnumTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isEnumTypeDefinitionString)(str);
    }
    static isScalarTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isScalarTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isScalarTypeDefinitionString)(str);
    }
    static isInterfaceTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isInterfaceTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isInterfaceTypeDefinitionString)(str);
    }
    static isUnionTypeDefinitionString(str) {
        (0, deprecate_1.default)("Use `import { isUnionTypeDefinitionString } from './utils/typeHelpers'` instead.");
        return (0, typeHelpers_1.isUnionTypeDefinitionString)(str);
    }
    convertGraphQLTypeToComposer(type) {
        if (type instanceof graphql_1.GraphQLObjectType) {
            return ObjectTypeComposer_1.ObjectTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLInputObjectType) {
            return InputTypeComposer_1.InputTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLScalarType) {
            return ScalarTypeComposer_1.ScalarTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLEnumType) {
            return EnumTypeComposer_1.EnumTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLInterfaceType) {
            return InterfaceTypeComposer_1.InterfaceTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLUnionType) {
            return UnionTypeComposer_1.UnionTypeComposer.create(type, this.schemaComposer);
        }
        else if (type instanceof graphql_1.GraphQLNonNull) {
            return new NonNullComposer_1.NonNullComposer(this.convertGraphQLTypeToComposer(type.ofType));
        }
        else if (type instanceof graphql_1.GraphQLList) {
            return new ListComposer_1.ListComposer(this.convertGraphQLTypeToComposer(type.ofType));
        }
        throw new Error(`Cannot convert to Composer the following value: ${(0, misc_2.inspect)(type)}`);
    }
    convertSDLWrappedTypeName(str) {
        const typeAST = (0, parser_1.parseType)(str);
        return this.typeFromAST(typeAST);
    }
    convertSDLTypeDefinition(str) {
        if (this.schemaComposer.has(str)) {
            return this.schemaComposer.getAnyTC(str);
        }
        const astDocument = (0, parser_1.parse)(str);
        if (!astDocument || astDocument.kind !== language_1.Kind.DOCUMENT) {
            throw new Error('You should provide correct type syntax. ' +
                "Eg. convertSDLTypeDefinition('type IntRange { min: Int, max: Int }')");
        }
        const types = this.parseTypes(astDocument);
        const type = types[0];
        if (type) {
            this.schemaComposer.set(type.getTypeName(), type);
            this.schemaComposer.set(str, type);
            return type;
        }
        return undefined;
    }
    convertOutputTypeDefinition(typeDef, fieldName = '', typeName = '') {
        if (typeof typeDef === 'string') {
            if ((0, typeHelpers_1.isInputTypeDefinitionString)(typeDef)) {
                throw new Error(`Should be OutputType, but got input type definition: ${(0, misc_2.inspect)(typeDef)}'`);
            }
            let tc;
            if (this.schemaComposer.has(typeDef)) {
                tc = this.schemaComposer.getAnyTC(typeDef);
            }
            else {
                tc = (0, typeHelpers_1.isTypeDefinitionString)(typeDef)
                    ? this.convertSDLTypeDefinition(typeDef)
                    : this.convertSDLWrappedTypeName(typeDef);
                if (!tc) {
                    throw new Error(`Cannot convert to OutputType the following string: ${(0, misc_2.inspect)(typeDef)}`);
                }
            }
            if (!(0, typeHelpers_1.isSomeOutputTypeComposer)(tc)) {
                throw new Error(`Provided incorrect OutputType: ${(0, misc_2.inspect)(typeDef)}`);
            }
            return tc;
        }
        else if ((0, typeHelpers_1.isSomeOutputTypeComposer)(typeDef)) {
            return typeDef;
        }
        else if (Array.isArray(typeDef)) {
            if (typeDef.length !== 1) {
                throw new Error(`Array must have exact one output type definition, but has ${typeDef.length}: ${(0, misc_2.inspect)(typeDef)}`);
            }
            const tc = this.convertOutputTypeDefinition(typeDef[0], fieldName, typeName);
            if (!tc) {
                throw new Error(`Cannot construct TypeComposer from ${(0, misc_2.inspect)(typeDef)}`);
            }
            return new ListComposer_1.ListComposer(tc);
        }
        else if ((0, is_1.isFunction)(typeDef)) {
            return new ThunkComposer_1.ThunkComposer(() => {
                const def = typeDef(this.schemaComposer);
                const tc = this.convertOutputFieldConfig(def, fieldName, typeName).type;
                if (!(0, typeHelpers_1.isSomeOutputTypeComposer)(tc)) {
                    throw new Error(`Provided incorrect OutputType: Function[${(0, misc_2.inspect)(def)}]`);
                }
                return tc;
            });
        }
        else if (typeDef instanceof Resolver_1.Resolver) {
            return typeDef.getTypeComposer();
        }
        else if (typeDef instanceof graphql_1.GraphQLList || typeDef instanceof graphql_1.GraphQLNonNull) {
            const type = this.convertGraphQLTypeToComposer(typeDef);
            if ((0, typeHelpers_1.isSomeOutputTypeComposer)(type)) {
                return type;
            }
            else {
                throw new Error(`Provided incorrect OutputType: ${(0, misc_2.inspect)(type)}`);
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLObjectType ||
            typeDef instanceof graphql_1.GraphQLEnumType ||
            typeDef instanceof graphql_1.GraphQLInterfaceType ||
            typeDef instanceof graphql_1.GraphQLUnionType ||
            typeDef instanceof graphql_1.GraphQLScalarType) {
            return this.convertGraphQLTypeToComposer(typeDef);
        }
        if (typeDef instanceof InputTypeComposer_1.InputTypeComposer) {
            throw new Error(`Should be OutputType, but provided InputTypeComposer ${(0, misc_2.inspect)(typeDef)}`);
        }
        return undefined;
    }
    convertOutputFieldConfig(composeFC, fieldName = '', typeName = '') {
        var _a, _b, _c, _d, _e;
        try {
            if (!composeFC) {
                throw new Error(`You provide empty output field definition: ${(0, misc_2.inspect)(composeFC)}`);
            }
            if (composeFC instanceof Resolver_1.Resolver) {
                return {
                    type: composeFC.type,
                    args: composeFC.getArgs(),
                    resolve: composeFC.getFieldResolver(),
                    description: composeFC.getDescription(),
                    extensions: composeFC.extensions,
                    directives: composeFC.directives || [],
                    projection: composeFC.projection,
                };
            }
            const tcFromFC = this.convertOutputTypeDefinition(composeFC, fieldName, typeName);
            if (tcFromFC) {
                return { type: tcFromFC };
            }
            if ((0, is_1.isObject)(composeFC)) {
                const _f = composeFC, { type, args } = _f, rest = __rest(_f, ["type", "args"]);
                if (!type) {
                    throw new Error(`Definition object should contain 'type' property: ${(0, misc_2.inspect)(composeFC)}`);
                }
                const tc = this.convertOutputTypeDefinition(type, fieldName, typeName);
                if (tc) {
                    const fc = Object.assign({ type: tc, args: this.convertArgConfigMap(args || {}, fieldName, typeName) }, rest);
                    const deprecatedDirectiveIdx = (_b = (_a = fc === null || fc === void 0 ? void 0 : fc.directives) === null || _a === void 0 ? void 0 : _a.findIndex((d) => d.name === 'deprecated')) !== null && _b !== void 0 ? _b : -1;
                    if (fc.deprecationReason) {
                        if (!fc.directives)
                            fc.directives = [];
                        if (deprecatedDirectiveIdx >= 0) {
                            fc.directives[deprecatedDirectiveIdx].args = { reason: fc.deprecationReason };
                        }
                        else {
                            fc.directives.push({ name: 'deprecated', args: { reason: fc.deprecationReason } });
                        }
                    }
                    else if (deprecatedDirectiveIdx >= 0) {
                        fc.deprecationReason = (_e = (_d = (_c = fc === null || fc === void 0 ? void 0 : fc.directives) === null || _c === void 0 ? void 0 : _c[deprecatedDirectiveIdx]) === null || _d === void 0 ? void 0 : _d.args) === null || _e === void 0 ? void 0 : _e.reason;
                    }
                    return fc;
                }
            }
            throw new Error(`Cannot convert to OutputType the following value: ${(0, misc_2.inspect)(composeFC)}`);
        }
        catch (e) {
            e.message = `TypeError[${typeName}.${fieldName}]: ${e.message}`;
            throw e;
        }
    }
    convertOutputFieldConfigMap(composeFields, typeName = '') {
        const fields = {};
        Object.keys(composeFields).forEach((name) => {
            fields[name] = this.convertOutputFieldConfig(composeFields[name], name, typeName);
        });
        return fields;
    }
    convertArgConfig(composeAC, argName = '', fieldName = '', typeName = '') {
        var _a, _b, _c, _d, _e;
        try {
            if (!composeAC) {
                throw new Error(`You provide empty argument config ${(0, misc_2.inspect)(composeAC)}`);
            }
            const tcFromAC = this.convertInputTypeDefinition(composeAC);
            if (tcFromAC) {
                return { type: tcFromAC };
            }
            if ((0, is_1.isObject)(composeAC)) {
                const _f = composeAC, { type } = _f, rest = __rest(_f, ["type"]);
                if (!type) {
                    throw new Error(`Definition object should contain 'type' property: ${(0, misc_2.inspect)(composeAC)}'`);
                }
                const tc = this.convertInputTypeDefinition(type);
                if (tc) {
                    const ac = Object.assign({ type: tc }, rest);
                    const deprecatedDirectiveIdx = (_b = (_a = ac === null || ac === void 0 ? void 0 : ac.directives) === null || _a === void 0 ? void 0 : _a.findIndex((d) => d.name === 'deprecated')) !== null && _b !== void 0 ? _b : -1;
                    if (ac.deprecationReason) {
                        if (!ac.directives)
                            ac.directives = [];
                        if (deprecatedDirectiveIdx >= 0) {
                            ac.directives[deprecatedDirectiveIdx].args = { reason: ac.deprecationReason };
                        }
                        else {
                            ac.directives.push({ name: 'deprecated', args: { reason: ac.deprecationReason } });
                        }
                    }
                    else if (deprecatedDirectiveIdx >= 0) {
                        ac.deprecationReason = (_e = (_d = (_c = ac === null || ac === void 0 ? void 0 : ac.directives) === null || _c === void 0 ? void 0 : _c[deprecatedDirectiveIdx]) === null || _d === void 0 ? void 0 : _d.args) === null || _e === void 0 ? void 0 : _e.reason;
                    }
                    return ac;
                }
            }
            throw new Error(`Cannot convert to InputType the following value: ${(0, misc_2.inspect)(tcFromAC)}`);
        }
        catch (e) {
            e.message = `TypeError[${typeName}.${fieldName}.${argName}]: ${e.message}`;
            throw e;
        }
    }
    convertArgConfigMap(composeArgsConfigMap, fieldName = '', typeName = '') {
        const argsConfigMap = {};
        if (composeArgsConfigMap) {
            Object.keys(composeArgsConfigMap).forEach((argName) => {
                argsConfigMap[argName] = this.convertArgConfig(composeArgsConfigMap[argName], argName, fieldName, typeName);
            });
        }
        return argsConfigMap;
    }
    convertInputTypeDefinition(typeDef, fieldName = '', typeName = '') {
        if (typeof typeDef === 'string') {
            if ((0, typeHelpers_1.isOutputTypeDefinitionString)(typeDef)) {
                throw new Error(`Should be InputType, but got output type definition: ${(0, misc_2.inspect)(typeDef)}`);
            }
            let tc;
            if (this.schemaComposer.has(typeDef)) {
                tc = this.schemaComposer.getAnyTC(typeDef);
            }
            else {
                tc = (0, typeHelpers_1.isTypeDefinitionString)(typeDef)
                    ? this.convertSDLTypeDefinition(typeDef)
                    : this.convertSDLWrappedTypeName(typeDef);
                if (!tc) {
                    throw new Error(`Cannot convert to InputType the following string: ${(0, misc_2.inspect)(typeDef)}`);
                }
            }
            if (!(0, typeHelpers_1.isSomeInputTypeComposer)(tc)) {
                throw new Error(`Provided incorrect InputType: ${(0, misc_2.inspect)(typeDef)}`);
            }
            return tc;
        }
        else if ((0, typeHelpers_1.isSomeInputTypeComposer)(typeDef)) {
            return typeDef;
        }
        else if (Array.isArray(typeDef)) {
            if (typeDef.length !== 1) {
                throw new Error(`Array must have exact one input type definition, but has ${typeDef.length}: ${(0, misc_2.inspect)(typeDef)}`);
            }
            const tc = this.convertInputTypeDefinition(typeDef[0], fieldName, typeName);
            if (!tc) {
                throw new Error(`Cannot construct TypeComposer from ${(0, misc_2.inspect)(typeDef)}`);
            }
            return new ListComposer_1.ListComposer(tc);
        }
        else if ((0, is_1.isFunction)(typeDef)) {
            return new ThunkComposer_1.ThunkComposer(() => {
                const def = typeDef(this.schemaComposer);
                const tc = this.convertInputFieldConfig(def, fieldName, typeName).type;
                if (!(0, typeHelpers_1.isSomeInputTypeComposer)(tc)) {
                    throw new Error(`Provided incorrect InputType: Function[${(0, misc_2.inspect)(def)}]`);
                }
                return tc;
            });
        }
        else if (typeDef instanceof graphql_1.GraphQLList || typeDef instanceof graphql_1.GraphQLNonNull) {
            const type = this.convertGraphQLTypeToComposer(typeDef);
            if ((0, typeHelpers_1.isSomeInputTypeComposer)(type)) {
                return type;
            }
            else {
                throw new Error(`Provided incorrect InputType: ${(0, misc_2.inspect)(type)}`);
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLInputObjectType ||
            typeDef instanceof graphql_1.GraphQLScalarType ||
            typeDef instanceof graphql_1.GraphQLEnumType) {
            return this.convertGraphQLTypeToComposer(typeDef);
        }
        if (typeDef instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
            throw new Error(`Should be InputType, but provided ObjectTypeComposer ${(0, misc_2.inspect)(typeDef)}`);
        }
        return undefined;
    }
    convertInputFieldConfig(composeIFC, fieldName = '', typeName = '') {
        var _a, _b, _c, _d, _e;
        try {
            if (!composeIFC) {
                throw new Error(`You provide empty input field definition: ${(0, misc_2.inspect)(composeIFC)}`);
            }
            const tcFromIFC = this.convertInputTypeDefinition(composeIFC, fieldName, typeName);
            if (tcFromIFC) {
                return { type: tcFromIFC };
            }
            if ((0, is_1.isObject)(composeIFC)) {
                const _f = composeIFC, { type } = _f, rest = __rest(_f, ["type"]);
                if (!type) {
                    throw new Error(`Definition object should contain 'type' property: ${(0, misc_2.inspect)(composeIFC)}`);
                }
                const tc = this.convertInputTypeDefinition(type, fieldName, typeName);
                if (tc) {
                    const fc = Object.assign({ type: tc }, rest);
                    const deprecatedDirectiveIdx = (_b = (_a = fc === null || fc === void 0 ? void 0 : fc.directives) === null || _a === void 0 ? void 0 : _a.findIndex((d) => d.name === 'deprecated')) !== null && _b !== void 0 ? _b : -1;
                    if (fc.deprecationReason) {
                        if (!fc.directives)
                            fc.directives = [];
                        if (deprecatedDirectiveIdx >= 0) {
                            fc.directives[deprecatedDirectiveIdx].args = { reason: fc.deprecationReason };
                        }
                        else {
                            fc.directives.push({ name: 'deprecated', args: { reason: fc.deprecationReason } });
                        }
                    }
                    else if (deprecatedDirectiveIdx >= 0) {
                        fc.deprecationReason = (_e = (_d = (_c = fc === null || fc === void 0 ? void 0 : fc.directives) === null || _c === void 0 ? void 0 : _c[deprecatedDirectiveIdx]) === null || _d === void 0 ? void 0 : _d.args) === null || _e === void 0 ? void 0 : _e.reason;
                    }
                    return fc;
                }
            }
            throw new Error(`Cannot convert to InputType the following value: ${(0, misc_2.inspect)(composeIFC)}`);
        }
        catch (e) {
            e.message = `TypeError[${typeName}.${fieldName}]: ${e.message}`;
            throw e;
        }
    }
    convertInputFieldConfigMap(composeFields, typeName = '') {
        const fields = {};
        Object.keys(composeFields).forEach((name) => {
            fields[name] = this.convertInputFieldConfig(composeFields[name], name, typeName);
        });
        return fields;
    }
    convertInterfaceTypeDefinition(typeDef) {
        if (this.schemaComposer.hasInstance(typeDef, InterfaceTypeComposer_1.InterfaceTypeComposer)) {
            return this.schemaComposer.getIFTC(typeDef);
        }
        else if (typeof typeDef === 'string') {
            const tc = (0, typeHelpers_1.isInterfaceTypeDefinitionString)(typeDef)
                ? this.convertSDLTypeDefinition(typeDef)
                : this.convertSDLWrappedTypeName(typeDef);
            if (!(tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer) && !(tc instanceof ThunkComposer_1.ThunkComposer)) {
                throw new Error(`Cannot convert to InterfaceType the following definition: ${(0, misc_2.inspect)(typeDef)}`);
            }
            return tc;
        }
        else if (typeDef instanceof graphql_1.GraphQLInterfaceType) {
            return new InterfaceTypeComposer_1.InterfaceTypeComposer(typeDef, this.schemaComposer);
        }
        else if (typeDef instanceof InterfaceTypeComposer_1.InterfaceTypeComposer || typeDef instanceof ThunkComposer_1.ThunkComposer) {
            return typeDef;
        }
        else if ((0, is_1.isFunction)(typeDef)) {
            return new ThunkComposer_1.ThunkComposer(() => this.convertInterfaceTypeDefinition(typeDef(this.schemaComposer)));
        }
        throw new Error(`Cannot convert to InterfaceType the following definition: ${(0, misc_2.inspect)(typeDef)}`);
    }
    parseTypesFromString(str) {
        const source = new language_1.Source(str);
        source.name = 'GraphQL SDL';
        const astDocument = (0, parser_1.parse)(source);
        if (!astDocument || astDocument.kind !== 'Document') {
            throw new Error('You should provide correct SDL syntax.');
        }
        const types = this.parseTypes(astDocument);
        const typeStorage = new TypeStorage_1.TypeStorage();
        types.forEach((type) => {
            typeStorage.set(type.getTypeName(), type);
        });
        return typeStorage;
    }
    parseTypes(astDocument) {
        const types = [];
        for (let i = 0; i < astDocument.definitions.length; i++) {
            const def = astDocument.definitions[i];
            const type = this.makeSchemaDef(def);
            if (type) {
                types[i] = type;
            }
        }
        return types;
    }
    typeFromAST(typeNode) {
        if (typeNode.kind === language_1.Kind.LIST_TYPE) {
            return new ListComposer_1.ListComposer(this.typeFromAST(typeNode.type));
        }
        else if (typeNode.kind === language_1.Kind.NON_NULL_TYPE) {
            return new NonNullComposer_1.NonNullComposer(this.typeFromAST(typeNode.type));
        }
        (0, misc_1.invariant)(typeNode.kind === language_1.Kind.NAMED_TYPE, `Must be a named type for ${(0, misc_2.inspect)(typeNode)}.`);
        const typeName = typeNode.name.value;
        if (this.schemaComposer.has(typeName)) {
            return this.schemaComposer.get(typeName);
        }
        const st = this.getBuiltInType(typeName);
        if (st)
            return st;
        return new ThunkComposer_1.ThunkComposer(() => {
            return this.schemaComposer.get(typeName);
        }, typeName);
    }
    typeFromASTInput(typeNode) {
        const tc = this.typeFromAST(typeNode);
        if (!(0, typeHelpers_1.isSomeInputTypeComposer)(tc)) {
            throw new Error(`TypeAST should be for Input types. But received ${(0, misc_2.inspect)(typeNode)}`);
        }
        return tc;
    }
    typeFromASTOutput(typeNode) {
        const tc = this.typeFromAST(typeNode);
        if (!(0, typeHelpers_1.isSomeOutputTypeComposer)(tc)) {
            throw new Error(`TypeAST should be for Output types. But received ${(0, misc_2.inspect)(typeNode)}`);
        }
        return tc;
    }
    makeSchemaDef(def) {
        if (!def) {
            throw new Error('def must be defined');
        }
        switch (def.kind) {
            case language_1.Kind.OBJECT_TYPE_DEFINITION:
                return this.makeTypeDef(def);
            case language_1.Kind.INTERFACE_TYPE_DEFINITION:
                return this.makeInterfaceDef(def);
            case language_1.Kind.ENUM_TYPE_DEFINITION:
                return this.makeEnumDef(def);
            case language_1.Kind.UNION_TYPE_DEFINITION:
                return this.makeUnionDef(def);
            case language_1.Kind.SCALAR_TYPE_DEFINITION:
                return this.makeScalarDef(def);
            case language_1.Kind.SCHEMA_DEFINITION:
                this.checkSchemaDef(def);
                return null;
            case language_1.Kind.DIRECTIVE_DEFINITION: {
                const directive = this.makeDirectiveDef(def);
                if (directive)
                    this.schemaComposer.addDirective(directive);
                return null;
            }
            case language_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
                return this.makeInputObjectDef(def);
            case language_1.Kind.OBJECT_TYPE_EXTENSION:
                return this.makeExtendTypeDef(def);
            case language_1.Kind.INPUT_OBJECT_TYPE_EXTENSION:
                return this.makeExtendInputObjectDef(def);
            case language_1.Kind.INTERFACE_TYPE_EXTENSION:
                return this.makeExtendInterfaceDef(def);
            case language_1.Kind.UNION_TYPE_EXTENSION:
                return this.makeExtendUnionDef(def);
            case language_1.Kind.ENUM_TYPE_EXTENSION:
                return this.makeExtendEnumDef(def);
            case language_1.Kind.SCALAR_TYPE_EXTENSION:
                return this.makeExtendScalarDef(def);
            default:
                throw new Error(`Type kind "${def.kind}" not supported.`);
        }
    }
    makeArguments(values) {
        if (!values) {
            return {};
        }
        const result = {};
        values.forEach((value) => {
            var _a;
            const key = value.name.value;
            const typeName = this.getNamedTypeAST(value.type).name.value;
            const type = this.typeFromASTInput(value.type);
            const ac = {
                type,
                description: getDescription(value),
                directives: this.parseDirectives(value.directives),
                deprecationReason: this.getDeprecationReason(value.directives),
                astNode: value,
            };
            if (value.defaultValue) {
                if (!this.schemaComposer.has(typeName) && ((_a = value === null || value === void 0 ? void 0 : value.defaultValue) === null || _a === void 0 ? void 0 : _a.value)) {
                    ac.defaultValue = value.defaultValue.value;
                }
                else {
                    const typeDef = this.schemaComposer.get(typeName);
                    const wrappedType = this.buildWrappedTypeDef(typeDef, value.type);
                    if ((0, typeHelpers_1.isSomeInputTypeComposer)(wrappedType)) {
                        ac.defaultValue = (0, graphql_1.valueFromAST)(value.defaultValue, wrappedType.getType());
                    }
                    else {
                        throw new Error('Non-input type as an argument.');
                    }
                }
            }
            result[key] = ac;
        });
        return result;
    }
    makeFieldDefMap(def) {
        if (!def.fields)
            return {};
        return (0, misc_2.keyValMap)(def.fields, (field) => field.name.value, (field) => {
            const fc = {
                type: this.typeFromASTOutput(field.type),
                description: getDescription(field),
                args: this.makeArguments(field.arguments),
                deprecationReason: this.getDeprecationReason(field.directives),
                astNode: field,
                directives: this.parseDirectives(field.directives),
            };
            return fc;
        });
    }
    makeInputFieldDef(def) {
        if (!def.fields)
            return {};
        return (0, misc_2.keyValMap)(def.fields, (field) => field.name.value, (field) => {
            const fc = {
                type: this.typeFromASTInput(field.type),
                description: getDescription(field),
                deprecationReason: this.getDeprecationReason(field.directives),
                astNode: field,
                directives: this.parseDirectives(field.directives),
            };
            if (field.defaultValue) {
                fc.defaultValue = (0, graphql_1.valueFromAST)(field.defaultValue, fc.type.getType());
            }
            return fc;
        });
    }
    makeEnumDef(def) {
        const tc = this.schemaComposer.createEnumTC({
            name: def.name.value,
            description: getDescription(def),
            values: this.makeEnumValuesDef(def),
            directives: this.parseDirectives(def.directives),
            astNode: def,
        });
        return tc;
    }
    makeEnumValuesDef(def) {
        if (!def.values)
            return {};
        return (0, misc_2.keyValMap)(def.values, (enumValue) => enumValue.name.value, (enumValue) => {
            const ec = {
                description: getDescription(enumValue),
                deprecationReason: this.getDeprecationReason(enumValue.directives),
                directives: this.parseDirectives(enumValue.directives),
            };
            return ec;
        });
    }
    makeInputObjectDef(def) {
        const tc = this.schemaComposer.createInputTC({
            name: def.name.value,
            description: getDescription(def),
            fields: this.makeInputFieldDef(def),
            astNode: def,
            directives: this.parseDirectives(def.directives),
        });
        return tc;
    }
    makeDirectiveDef(def) {
        const locations = def.locations.map(({ value }) => value);
        const args = {};
        (def.arguments || []).forEach((value) => {
            const key = value.name.value;
            let val;
            const wrappedType = this.typeFromAST(value.type);
            if ((0, typeHelpers_1.isSomeInputTypeComposer)(wrappedType)) {
                val = {
                    type: wrappedType.getType(),
                    description: getDescription(value),
                    defaultValue: (0, graphql_1.valueFromAST)(value.defaultValue, wrappedType.getType()),
                };
            }
            else {
                throw new Error('Non-input type as an argument.');
            }
            args[key] = val;
        });
        return new graphql_1.GraphQLDirective({
            name: def.name.value,
            description: getDescription(def),
            locations,
            args,
            astNode: def,
        });
    }
    getBuiltInType(name) {
        let type;
        switch (name) {
            case 'String':
                type = graphql_1.GraphQLString;
                break;
            case 'Float':
                type = graphql_1.GraphQLFloat;
                break;
            case 'Int':
                type = graphql_1.GraphQLInt;
                break;
            case 'Boolean':
                type = graphql_1.GraphQLBoolean;
                break;
            case 'ID':
                type = graphql_1.GraphQLID;
                break;
            case 'JSON':
                type = type_1.GraphQLJSON;
                break;
            case 'JSONObject':
                type = type_1.GraphQLJSONObject;
                break;
            case 'Date':
                type = type_1.GraphQLDate;
                break;
            case 'Buffer':
                type = type_1.GraphQLBuffer;
                break;
            default:
                type = undefined;
                break;
        }
        if (type) {
            return this.schemaComposer.createScalarTC(type);
        }
        return undefined;
    }
    makeScalarDef(def) {
        let tc;
        const stc = this.getBuiltInType(def.name.value);
        if (stc) {
            tc = stc;
        }
        if (!tc) {
            tc = this.schemaComposer.createScalarTC({
                name: def.name.value,
                description: getDescription(def),
                serialize: (v) => v,
                astNode: def,
            });
        }
        if (def.directives) {
            tc.setDirectives(this.parseDirectives(def.directives));
        }
        return tc;
    }
    makeImplementedInterfaces(def) {
        return (def.interfaces || []).map((iface) => {
            const name = this.getNamedTypeAST(iface).name.value;
            if (this.schemaComposer.hasInstance(name, InterfaceTypeComposer_1.InterfaceTypeComposer)) {
                return this.schemaComposer.getIFTC(name);
            }
            else {
                return new ThunkComposer_1.ThunkComposer(() => this.schemaComposer.getIFTC(name), name);
            }
        });
    }
    makeTypeDef(def) {
        const name = def.name.value;
        const tc = this.schemaComposer.createObjectTC({
            name,
            description: getDescription(def),
            fields: this.makeFieldDefMap(def),
            interfaces: this.makeImplementedInterfaces(def),
            astNode: def,
            directives: this.parseDirectives(def.directives),
        });
        return tc;
    }
    makeInterfaceDef(def) {
        const tc = this.schemaComposer.createInterfaceTC({
            name: def.name.value,
            description: getDescription(def),
            fields: this.makeFieldDefMap(def),
            interfaces: this.makeImplementedInterfaces(def),
            astNode: def,
            directives: this.parseDirectives(def.directives),
        });
        return tc;
    }
    makeUnionDef(def) {
        const types = def.types;
        const tc = this.schemaComposer.createUnionTC({
            name: def.name.value,
            description: getDescription(def),
            types: (types || []).map((ref) => this.getNamedTypeAST(ref).name.value),
            astNode: def,
        });
        if (def.directives) {
            tc.setDirectives(this.parseDirectives(def.directives));
        }
        return tc;
    }
    checkSchemaDef(def) {
        const validNames = {
            query: 'Query',
            mutation: 'Mutation',
            subscription: 'Subscription',
        };
        def.operationTypes.forEach((d) => {
            if (d.operation) {
                const validTypeName = validNames[d.operation];
                const actualTypeName = d.type.name.value;
                if (actualTypeName !== validTypeName) {
                    throw new Error(`Incorrect type name '${actualTypeName}' for '${d.operation}'. The valid definition is "schema { ${d.operation}: ${validTypeName} }"`);
                }
            }
        });
    }
    getNamedTypeAST(typeAST) {
        let namedType = typeAST;
        while (namedType.kind === language_1.Kind.LIST_TYPE || namedType.kind === language_1.Kind.NON_NULL_TYPE) {
            namedType = namedType.type;
        }
        return namedType;
    }
    buildWrappedTypeDef(innerType, inputTypeAST) {
        if (inputTypeAST.kind === language_1.Kind.LIST_TYPE) {
            return new ListComposer_1.ListComposer(this.buildWrappedTypeDef(innerType, inputTypeAST.type));
        }
        if (inputTypeAST.kind === language_1.Kind.NON_NULL_TYPE) {
            const wrappedType = this.buildWrappedTypeDef(innerType, inputTypeAST.type);
            return new NonNullComposer_1.NonNullComposer(wrappedType);
        }
        return innerType;
    }
    getDeprecationReason(directives) {
        const deprecatedAST = directives === null || directives === void 0 ? void 0 : directives.find((directive) => directive.name.value === graphql_1.GraphQLDeprecatedDirective.name);
        if (!deprecatedAST) {
            return;
        }
        const { reason } = (0, values_1.getArgumentValues)(graphql_1.GraphQLDeprecatedDirective, deprecatedAST);
        return reason;
    }
    parseDirectives(directives) {
        const result = [];
        if (!directives)
            return result;
        directives.forEach((directive) => {
            const name = directive.name.value;
            const directiveDef = this.schemaComposer._getDirective(name);
            const args = directiveDef
                ? (0, values_1.getArgumentValues)(directiveDef, directive)
                : (0, misc_2.keyValMap)(directive.arguments || [], (arg) => arg.name.value, (arg) => (0, definitionNode_1.parseValueNode)(arg.value));
            result.push({ name, args });
        });
        return result;
    }
    makeExtendTypeDef(def) {
        const tc = this.schemaComposer.getOrCreateOTC(def.name.value);
        tc.addInterfaces(this.makeImplementedInterfaces(def));
        tc.addFields(this.makeFieldDefMap(def));
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
    makeExtendInputObjectDef(def) {
        const tc = this.schemaComposer.getOrCreateITC(def.name.value);
        tc.addFields(this.makeInputFieldDef(def));
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
    makeExtendInterfaceDef(def) {
        const tc = this.schemaComposer.getOrCreateIFTC(def.name.value);
        tc.addFields(this.makeFieldDefMap(def));
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
    makeExtendUnionDef(def) {
        const types = def.types;
        const tc = this.schemaComposer.getOrCreateUTC(def.name.value);
        tc.addTypes((types || []).map((ref) => this.getNamedTypeAST(ref).name.value));
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
    makeExtendEnumDef(def) {
        const tc = this.schemaComposer.getOrCreateETC(def.name.value);
        tc.addFields(this.makeEnumValuesDef(def));
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
    makeExtendScalarDef(def) {
        const tc = this.schemaComposer.getSTC(def.name.value);
        if (def.directives) {
            tc.setDirectives([...tc.getDirectives(), ...this.parseDirectives(def.directives)]);
        }
        return tc;
    }
}
exports.TypeMapper = TypeMapper;
function getDescription(node, options) {
    if (node.description) {
        return node.description.value;
    }
    if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
        const rawValue = getLeadingCommentBlock(node);
        if (rawValue !== undefined) {
            if (!blockString_1.dedentBlockStringValue) {
                return undefined;
            }
            else {
                return (0, blockString_1.dedentBlockStringValue)('\n' + rawValue);
            }
        }
    }
    return undefined;
}
exports.getDescription = getDescription;
function getLeadingCommentBlock(node) {
    const loc = node.loc;
    if (!loc) {
        return;
    }
    const comments = [];
    let token = loc.startToken.prev;
    while (token != null &&
        token.kind === language_1.TokenKind.COMMENT &&
        token.next &&
        token.prev &&
        token.line + 1 === token.next.line &&
        token.line !== token.prev.line) {
        const value = String(token.value);
        comments.push(value);
        token = token.prev;
    }
    return comments.length > 0 ? comments.reverse().join('\n') : undefined;
}
//# sourceMappingURL=TypeMapper.js.map