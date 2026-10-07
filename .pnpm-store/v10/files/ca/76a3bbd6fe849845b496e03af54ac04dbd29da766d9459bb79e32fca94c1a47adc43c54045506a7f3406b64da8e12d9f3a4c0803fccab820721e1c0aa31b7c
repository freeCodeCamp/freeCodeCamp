"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFactory = void 0;
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const change_case_all_1 = require("change-case-all");
const utils_js_1 = require("./utils.js");
function getKind(node) {
    if (typeof node === 'string') {
        return 'typeNames';
    }
    if (['EnumValueDefinition', 'EnumValue'].includes(node.kind)) {
        return 'enumValues';
    }
    return 'typeNames';
}
function getName(node) {
    if (node == null) {
        return undefined;
    }
    if (typeof node === 'string') {
        return node;
    }
    switch (node.kind) {
        case 'OperationDefinition':
        case 'Variable':
        case 'Argument':
        case 'FragmentSpread':
        case 'FragmentDefinition':
        case 'ObjectField':
        case 'Directive':
        case 'NamedType':
        case 'ScalarTypeDefinition':
        case 'ObjectTypeDefinition':
        case 'FieldDefinition':
        case 'InputValueDefinition':
        case 'InterfaceTypeDefinition':
        case 'UnionTypeDefinition':
        case 'EnumTypeDefinition':
        case 'EnumValueDefinition':
        case 'InputObjectTypeDefinition':
        case 'DirectiveDefinition': {
            return getName(node.name);
        }
        case 'Name': {
            return node.value;
        }
        case 'Field': {
            return getName(node.alias || node.name);
        }
        case 'VariableDefinition': {
            return getName(node.variable);
        }
    }
    return undefined;
}
function convertFactory(config) {
    function resolveConventionName(type) {
        if (!config.namingConvention) {
            return (str, opts = {}) => {
                return (0, utils_js_1.convertNameParts)(str, change_case_all_1.pascalCase, (0, utils_js_1.getConfigValue)(opts === null || opts === void 0 ? void 0 : opts.transformUnderscore, false));
            };
        }
        if (typeof config.namingConvention === 'string') {
            if (config.namingConvention === 'keep') {
                return str => str;
            }
            return (str, opts = {}) => {
                return (0, utils_js_1.convertNameParts)(str, (0, plugin_helpers_1.resolveExternalModuleAndFn)(config.namingConvention), (0, utils_js_1.getConfigValue)(opts === null || opts === void 0 ? void 0 : opts.transformUnderscore, false));
            };
        }
        if (typeof config.namingConvention === 'function') {
            return (str, opts = {}) => {
                return (0, utils_js_1.convertNameParts)(str, config.namingConvention, (0, utils_js_1.getConfigValue)(opts === null || opts === void 0 ? void 0 : opts.transformUnderscore, false));
            };
        }
        if (typeof config.namingConvention === 'object' && config.namingConvention[type] === 'keep') {
            return str => str;
        }
        if (typeof config.namingConvention === 'object') {
            if (!config.namingConvention[type]) {
                return (str, opts = {}) => {
                    const transformUnderscore = config.namingConvention.transformUnderscore || (opts === null || opts === void 0 ? void 0 : opts.transformUnderscore);
                    return (0, utils_js_1.convertNameParts)(str, change_case_all_1.pascalCase, (0, utils_js_1.getConfigValue)(transformUnderscore, false));
                };
            }
            return (str, opts = {}) => {
                return (0, utils_js_1.convertNameParts)(str, (0, plugin_helpers_1.resolveExternalModuleAndFn)(config.namingConvention[type]), (0, utils_js_1.getConfigValue)(opts === null || opts === void 0 ? void 0 : opts.transformUnderscore, true));
            };
        }
        return config.namingConvention[type];
    }
    return (node, opts) => {
        const prefix = opts === null || opts === void 0 ? void 0 : opts.prefix;
        const suffix = opts === null || opts === void 0 ? void 0 : opts.suffix;
        const kind = getKind(node);
        const str = [prefix || '', getName(node), suffix || ''].join('');
        return resolveConventionName(kind)(str, opts);
    };
}
exports.convertFactory = convertFactory;
