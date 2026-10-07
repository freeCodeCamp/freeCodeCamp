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
exports.convertInterfaceArrayAsThunk = exports.convertObjectTypeArrayAsThunk = exports.convertInputFieldMapToConfig = exports.defineInputFieldMap = exports.convertEnumValuesToConfig = exports.defineEnumValues = exports.convertObjectFieldMapToConfig = exports.defineFieldMap = void 0;
const misc_1 = require("./misc");
const is_1 = require("./is");
const ThunkComposer_1 = require("../ThunkComposer");
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const typeHelpers_1 = require("./typeHelpers");
function isPlainObj(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
function defineFieldMap(config, fieldMap, parentAstNode) {
    var _a, _b, _c;
    (0, misc_1.invariant)(isPlainObj(fieldMap), `${config.name} fields must be an object with field names as keys or a ` +
        'function which returns such an object.');
    const fieldAstNodeMap = Object.create(null);
    const argAstNodeMap = Object.create(null);
    for (const fieldNode of (_a = parentAstNode === null || parentAstNode === void 0 ? void 0 : parentAstNode.fields) !== null && _a !== void 0 ? _a : []) {
        if (!fieldAstNodeMap[fieldNode.name.value]) {
            fieldAstNodeMap[fieldNode.name.value] = fieldNode;
            argAstNodeMap[fieldNode.name.value] = Object.create(null);
        }
        for (const argAstNode of (_b = fieldNode === null || fieldNode === void 0 ? void 0 : fieldNode.arguments) !== null && _b !== void 0 ? _b : []) {
            if (!argAstNodeMap[fieldNode.name.value][argAstNode.name.value]) {
                argAstNodeMap[fieldNode.name.value][argAstNode.name.value] = argAstNode;
            }
        }
    }
    const resultFieldMap = Object.create(null);
    for (const fieldName of Object.keys(fieldMap)) {
        const fieldConfig = fieldMap[fieldName];
        const fieldNodeAst = fieldAstNodeMap[fieldName];
        (0, misc_1.invariant)(isPlainObj(fieldConfig), `${config.name}.${fieldName} field config must be an object`);
        const field = Object.assign(Object.assign({}, fieldConfig), { isDeprecated: Boolean(fieldConfig.deprecationReason), name: fieldName, astNode: fieldNodeAst });
        (0, misc_1.invariant)(field.resolve == null || typeof field.resolve === 'function', `${config.name}.${fieldName} field resolver must be a function if ` +
            `provided, but got: ${(0, misc_1.inspect)(field.resolve)}.`);
        const argsConfig = fieldConfig.args;
        if (!argsConfig) {
            field.args = [];
        }
        else {
            (0, misc_1.invariant)(isPlainObj(argsConfig), `${config.name}.${fieldName} args must be an object with argument names as keys.`);
            const fieldArgNodeMap = (_c = argAstNodeMap[fieldName]) !== null && _c !== void 0 ? _c : {};
            field.args = Object.keys(argsConfig).map((argName) => {
                const arg = argsConfig[argName];
                return {
                    name: argName,
                    description: arg.description === undefined ? null : arg.description,
                    type: arg.type,
                    isDeprecated: Boolean(fieldConfig.deprecationReason),
                    deprecationReason: arg === null || arg === void 0 ? void 0 : arg.deprecationReason,
                    defaultValue: arg.defaultValue,
                    astNode: fieldArgNodeMap[argName],
                };
            });
        }
        resultFieldMap[fieldName] = field;
    }
    return resultFieldMap;
}
exports.defineFieldMap = defineFieldMap;
function convertObjectFieldMapToConfig(fieldMap, sc) {
    const fields = {};
    const isThunk = (0, is_1.isFunction)(fieldMap);
    const _fields = isThunk ? fieldMap(sc) : fieldMap;
    if (!(0, is_1.isObject)(_fields))
        return {};
    Object.keys(_fields).forEach((n) => {
        var _a;
        const _b = _fields[n], { name, isDeprecated } = _b, fc = __rest(_b, ["name", "isDeprecated"]);
        const args = {};
        if (Array.isArray(fc.args)) {
            fc.args.forEach((arg) => {
                var _a;
                const { name: argName } = arg, ac = __rest(arg, ["name"]);
                args[argName] = Object.assign(Object.assign({}, ac), { type: isThunk
                        ? new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertInputTypeDefinition(ac.type || arg))
                        : sc.typeMapper.convertInputTypeDefinition(ac.type || arg), directives: sc.typeMapper.parseDirectives((_a = ac === null || ac === void 0 ? void 0 : ac.astNode) === null || _a === void 0 ? void 0 : _a.directives) });
            });
            fc.args = args;
        }
        else if ((0, is_1.isObject)(fc.args)) {
            Object.keys(fc.args).forEach((argName) => {
                const sourceArgs = fc.args;
                args[argName] = Object.assign(Object.assign({}, ((0, is_1.isObject)(sourceArgs[argName]) ? sourceArgs[argName] : null)), { type: isThunk
                        ? new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertInputTypeDefinition(sourceArgs[argName].type || sourceArgs[argName]))
                        : sc.typeMapper.convertInputTypeDefinition(sourceArgs[argName].type || sourceArgs[argName]) });
            });
            fc.args = args;
        }
        fields[n] = Object.assign(Object.assign({}, fc), { type: isThunk
                ? new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertOutputTypeDefinition(fc.type || _fields[n]))
                : sc.typeMapper.convertOutputTypeDefinition(fc.type || _fields[n]), directives: sc.typeMapper.parseDirectives((_a = fc === null || fc === void 0 ? void 0 : fc.astNode) === null || _a === void 0 ? void 0 : _a.directives) });
    });
    return fields;
}
exports.convertObjectFieldMapToConfig = convertObjectFieldMapToConfig;
function defineEnumValues(type, valueMap, parentAstNode) {
    var _a;
    (0, misc_1.invariant)(isPlainObj(valueMap), `${type.name} values must be an object with value names as keys.`);
    const astNodeMap = Object.create(null);
    for (const valueNode of (_a = parentAstNode === null || parentAstNode === void 0 ? void 0 : parentAstNode.values) !== null && _a !== void 0 ? _a : []) {
        astNodeMap[valueNode.name.value] = valueNode;
    }
    return Object.keys(valueMap).map((valueName) => {
        const value = valueMap[valueName];
        (0, misc_1.invariant)(isPlainObj(value), `${type.name}.${valueName} must refer to an object with a "value" key ` +
            `representing an internal value but got: ${(0, misc_1.inspect)(value)}.`);
        (0, misc_1.invariant)(!value.hasOwnProperty('isDeprecated'), `${type.name}.${valueName} should provide "deprecationReason" instead of "isDeprecated".`);
        return {
            name: valueName,
            description: value.description,
            isDeprecated: Boolean(value.deprecationReason),
            deprecationReason: value.deprecationReason,
            astNode: astNodeMap[valueName],
            value: value.hasOwnProperty('value') ? value.value : valueName,
            extensions: {},
        };
    });
}
exports.defineEnumValues = defineEnumValues;
function convertEnumValuesToConfig(values, schemaComposer) {
    const fields = {};
    values.forEach((_a) => {
        var _b;
        var { name, isDeprecated } = _a, fc = __rest(_a, ["name", "isDeprecated"]);
        fields[name] = fc;
        if ((_b = fc === null || fc === void 0 ? void 0 : fc.astNode) === null || _b === void 0 ? void 0 : _b.directives) {
            const directives = schemaComposer.typeMapper.parseDirectives(fc.astNode.directives);
            if (directives) {
                fields[name].directives = directives;
            }
        }
    });
    return fields;
}
exports.convertEnumValuesToConfig = convertEnumValuesToConfig;
function defineInputFieldMap(config, fieldMap, parentAstNode) {
    var _a;
    (0, misc_1.invariant)(isPlainObj(fieldMap), `${config.name} fields must be an object with field names as keys or a ` +
        'function which returns such an object.');
    const astNodeMap = Object.create(null);
    for (const fieldNode of (_a = parentAstNode === null || parentAstNode === void 0 ? void 0 : parentAstNode.fields) !== null && _a !== void 0 ? _a : []) {
        astNodeMap[fieldNode.name.value] = fieldNode;
    }
    const resultFieldMap = Object.create(null);
    for (const fieldName of Object.keys(fieldMap)) {
        const field = Object.assign(Object.assign({}, fieldMap[fieldName]), { name: fieldName, astNode: astNodeMap[fieldName] });
        (0, misc_1.invariant)(!field.hasOwnProperty('resolve'), `${config.name}.${fieldName} field has a resolve property, but ` +
            'Input Types cannot define resolvers.');
        resultFieldMap[fieldName] = field;
    }
    return resultFieldMap;
}
exports.defineInputFieldMap = defineInputFieldMap;
function convertInputFieldMapToConfig(fieldMap, sc) {
    const fields = {};
    const isThunk = (0, is_1.isFunction)(fieldMap);
    const _fields = isThunk ? fieldMap(sc) : fieldMap;
    Object.keys(_fields).forEach((n) => {
        var _a;
        const _b = _fields[n], { name, isDeprecated } = _b, fc = __rest(_b, ["name", "isDeprecated"]);
        fields[n] = Object.assign(Object.assign({}, fc), { type: isThunk
                ? new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertInputTypeDefinition(fc.type || _fields[n]))
                : sc.typeMapper.convertInputTypeDefinition(fc.type || _fields[n]), directives: sc.typeMapper.parseDirectives((_a = fc === null || fc === void 0 ? void 0 : fc.astNode) === null || _a === void 0 ? void 0 : _a.directives) });
    });
    return fields;
}
exports.convertInputFieldMapToConfig = convertInputFieldMapToConfig;
function convertObjectTypeArrayAsThunk(types, sc) {
    const isThunk = (0, is_1.isFunction)(types);
    const t = isThunk ? types(sc) : types;
    if (!Array.isArray(t))
        return [];
    return t.map((type) => {
        if (type instanceof ObjectTypeComposer_1.ObjectTypeComposer || type instanceof ThunkComposer_1.ThunkComposer) {
            return type;
        }
        const tc = sc.typeMapper.convertOutputTypeDefinition(type);
        if (!tc && isThunk) {
            return new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertOutputTypeDefinition(type), (0, typeHelpers_1.getComposeTypeName)(type, sc));
        }
        if (!(tc instanceof ObjectTypeComposer_1.ObjectTypeComposer) && !(tc instanceof ThunkComposer_1.ThunkComposer)) {
            throw new Error(`Should be provided ObjectType but received ${(0, misc_1.inspect)(type)}`);
        }
        return tc;
    });
}
exports.convertObjectTypeArrayAsThunk = convertObjectTypeArrayAsThunk;
function convertInterfaceArrayAsThunk(types, sc) {
    const isThunk = (0, is_1.isFunction)(types);
    const t = isThunk ? types(sc) : types;
    if (!Array.isArray(t))
        return [];
    return t.map((type) => {
        if (type instanceof InterfaceTypeComposer_1.InterfaceTypeComposer || type instanceof ThunkComposer_1.ThunkComposer) {
            return type;
        }
        return isThunk
            ? new ThunkComposer_1.ThunkComposer(() => sc.typeMapper.convertInterfaceTypeDefinition(type), (0, typeHelpers_1.getComposeTypeName)(type, sc))
            : sc.typeMapper.convertInterfaceTypeDefinition(type);
    });
}
exports.convertInterfaceArrayAsThunk = convertInterfaceArrayAsThunk;
//# sourceMappingURL=configToDefine.js.map