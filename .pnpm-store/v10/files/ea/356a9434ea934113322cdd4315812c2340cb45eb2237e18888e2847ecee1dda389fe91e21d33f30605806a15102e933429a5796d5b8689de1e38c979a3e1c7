"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidator = createValidator;
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../../util");
const enums_1 = require("./enums");
const format_1 = require("./format");
const shared_1 = require("./shared");
function createValidator(type, context, allConfigs) {
    // make sure the "highest priority" configs are checked first
    const selectorType = enums_1.Selectors[type];
    const configs = allConfigs
        // gather all of the applicable selectors
        .filter(c => (c.selector & selectorType) !== 0 ||
        c.selector === enums_1.MetaSelectors.default)
        .sort((a, b) => {
        if (a.selector === b.selector) {
            // in the event of the same selector, order by modifier weight
            // sort descending - the type modifiers are "more important"
            return b.modifierWeight - a.modifierWeight;
        }
        const aIsMeta = (0, shared_1.isMetaSelector)(a.selector);
        const bIsMeta = (0, shared_1.isMetaSelector)(b.selector);
        // non-meta selectors should go ahead of meta selectors
        if (aIsMeta && !bIsMeta) {
            return 1;
        }
        if (!aIsMeta && bIsMeta) {
            return -1;
        }
        const aIsMethodOrProperty = (0, shared_1.isMethodOrPropertySelector)(a.selector);
        const bIsMethodOrProperty = (0, shared_1.isMethodOrPropertySelector)(b.selector);
        // for backward compatibility, method and property have higher precedence than other meta selectors
        if (aIsMethodOrProperty && !bIsMethodOrProperty) {
            return -1;
        }
        if (!aIsMethodOrProperty && bIsMethodOrProperty) {
            return 1;
        }
        // both aren't meta selectors
        // sort descending - the meta selectors are "least important"
        return b.selector - a.selector;
    });
    return (node, modifiers = new Set()) => {
        const originalName = node.type === utils_1.AST_NODE_TYPES.Identifier ||
            node.type === utils_1.AST_NODE_TYPES.PrivateIdentifier
            ? node.name
            : `${node.value}`;
        // return will break the loop and stop checking configs
        // it is only used when the name is known to have failed or succeeded a config.
        for (const config of configs) {
            if (config.filter?.regex.test(originalName) !== config.filter?.match) {
                // name does not match the filter
                continue;
            }
            if (config.modifiers?.some(modifier => !modifiers.has(modifier))) {
                // does not have the required modifiers
                continue;
            }
            if (!isCorrectType(node, config, context, selectorType)) {
                // is not the correct type
                continue;
            }
            let name = originalName;
            name = validateUnderscore('leading', config, name, node, originalName);
            if (name == null) {
                // fail
                return;
            }
            name = validateUnderscore('trailing', config, name, node, originalName);
            if (name == null) {
                // fail
                return;
            }
            name = validateAffix('prefix', config, name, node, originalName);
            if (name == null) {
                // fail
                return;
            }
            name = validateAffix('suffix', config, name, node, originalName);
            if (name == null) {
                // fail
                return;
            }
            if (!validateCustom(config, name, node, originalName)) {
                // fail
                return;
            }
            if (!validatePredefinedFormat(config, name, node, originalName, modifiers)) {
                // fail
                return;
            }
            // it's valid for this config, so we don't need to check any more configs
            return;
        }
    };
    // centralizes the logic for formatting the report data
    function formatReportData({ affixes, count, custom, formats, originalName, position, processedName, }) {
        return {
            affixes: affixes?.join(', '),
            count,
            formats: formats?.map(f => enums_1.PredefinedFormats[f]).join(', '),
            name: originalName,
            position,
            processedName,
            regex: custom?.regex.toString(),
            regexMatch: custom?.match === true
                ? 'match'
                : custom?.match === false
                    ? 'not match'
                    : null,
            type: (0, shared_1.selectorTypeToMessageString)(type),
        };
    }
    /**
     * @returns the name with the underscore removed, if it is valid according to the specified underscore option, null otherwise
     */
    function validateUnderscore(position, config, name, node, originalName) {
        const option = position === 'leading'
            ? config.leadingUnderscore
            : config.trailingUnderscore;
        if (!option) {
            return name;
        }
        const hasSingleUnderscore = position === 'leading'
            ? () => name.startsWith('_')
            : () => name.endsWith('_');
        const trimSingleUnderscore = position === 'leading'
            ? () => name.slice(1)
            : () => name.slice(0, -1);
        const hasDoubleUnderscore = position === 'leading'
            ? () => name.startsWith('__')
            : () => name.endsWith('__');
        const trimDoubleUnderscore = position === 'leading'
            ? () => name.slice(2)
            : () => name.slice(0, -2);
        switch (option) {
            // ALLOW - no conditions as the user doesn't care if it's there or not
            case enums_1.UnderscoreOptions.allow: {
                if (hasSingleUnderscore()) {
                    return trimSingleUnderscore();
                }
                return name;
            }
            case enums_1.UnderscoreOptions.allowDouble: {
                if (hasDoubleUnderscore()) {
                    return trimDoubleUnderscore();
                }
                return name;
            }
            case enums_1.UnderscoreOptions.allowSingleOrDouble: {
                if (hasDoubleUnderscore()) {
                    return trimDoubleUnderscore();
                }
                if (hasSingleUnderscore()) {
                    return trimSingleUnderscore();
                }
                return name;
            }
            // FORBID
            case enums_1.UnderscoreOptions.forbid: {
                if (hasSingleUnderscore()) {
                    context.report({
                        data: formatReportData({
                            count: 'one',
                            originalName,
                            position,
                        }),
                        messageId: 'unexpectedUnderscore',
                        node,
                    });
                    return null;
                }
                return name;
            }
            // REQUIRE
            case enums_1.UnderscoreOptions.require: {
                if (!hasSingleUnderscore()) {
                    context.report({
                        data: formatReportData({
                            count: 'one',
                            originalName,
                            position,
                        }),
                        messageId: 'missingUnderscore',
                        node,
                    });
                    return null;
                }
                return trimSingleUnderscore();
            }
            case enums_1.UnderscoreOptions.requireDouble: {
                if (!hasDoubleUnderscore()) {
                    context.report({
                        data: formatReportData({
                            count: 'two',
                            originalName,
                            position,
                        }),
                        messageId: 'missingUnderscore',
                        node,
                    });
                    return null;
                }
                return trimDoubleUnderscore();
            }
        }
    }
    /**
     * @returns the name with the affix removed, if it is valid according to the specified affix option, null otherwise
     */
    function validateAffix(position, config, name, node, originalName) {
        const affixes = config[position];
        if (!affixes || affixes.length === 0) {
            return name;
        }
        for (const affix of affixes) {
            const hasAffix = position === 'prefix' ? name.startsWith(affix) : name.endsWith(affix);
            const trimAffix = position === 'prefix'
                ? () => name.slice(affix.length)
                : () => name.slice(0, -affix.length);
            if (hasAffix) {
                // matches, so trim it and return
                return trimAffix();
            }
        }
        context.report({
            data: formatReportData({
                affixes,
                originalName,
                position,
            }),
            messageId: 'missingAffix',
            node,
        });
        return null;
    }
    /**
     * @returns true if the name is valid according to the `regex` option, false otherwise
     */
    function validateCustom(config, name, node, originalName) {
        const custom = config.custom;
        if (!custom) {
            return true;
        }
        const result = custom.regex.test(name);
        if (custom.match && result) {
            return true;
        }
        if (!custom.match && !result) {
            return true;
        }
        context.report({
            data: formatReportData({
                custom,
                originalName,
            }),
            messageId: 'satisfyCustom',
            node,
        });
        return false;
    }
    /**
     * @returns true if the name is valid according to the `format` option, false otherwise
     */
    function validatePredefinedFormat(config, name, node, originalName, modifiers) {
        const formats = config.format;
        if (!formats?.length) {
            return true;
        }
        if (!modifiers.has(enums_1.Modifiers.requiresQuotes)) {
            for (const format of formats) {
                const checker = format_1.PredefinedFormatToCheckFunction[format];
                if (checker(name)) {
                    return true;
                }
            }
        }
        context.report({
            data: formatReportData({
                formats,
                originalName,
                processedName: name,
            }),
            messageId: originalName === name
                ? 'doesNotMatchFormat'
                : 'doesNotMatchFormatTrimmed',
            node,
        });
        return false;
    }
}
const SelectorsAllowedToHaveTypes = enums_1.Selectors.variable |
    enums_1.Selectors.parameter |
    enums_1.Selectors.classProperty |
    enums_1.Selectors.objectLiteralProperty |
    enums_1.Selectors.typeProperty |
    enums_1.Selectors.parameterProperty |
    enums_1.Selectors.classicAccessor;
function isCorrectType(node, config, context, selector) {
    if (config.types == null) {
        return true;
    }
    if ((SelectorsAllowedToHaveTypes & selector) === 0) {
        return true;
    }
    const services = (0, util_1.getParserServices)(context);
    const checker = services.program.getTypeChecker();
    const type = services
        .getTypeAtLocation(node)
        // remove null and undefined from the type, as we don't care about it here
        .getNonNullableType();
    for (const allowedType of config.types) {
        switch (allowedType) {
            case enums_1.TypeModifiers.array:
                if (isAllTypesMatch(type, t => checker.isArrayType(t) || checker.isTupleType(t))) {
                    return true;
                }
                break;
            case enums_1.TypeModifiers.function:
                if (isAllTypesMatch(type, t => t.getCallSignatures().length > 0)) {
                    return true;
                }
                break;
            case enums_1.TypeModifiers.boolean:
            case enums_1.TypeModifiers.number:
            case enums_1.TypeModifiers.string: {
                const typeString = checker.typeToString(
                // this will resolve things like true => boolean, 'a' => string and 1 => number
                checker.getWidenedType(checker.getBaseTypeOfLiteralType(type)));
                const allowedTypeString = enums_1.TypeModifiers[allowedType];
                if (typeString === allowedTypeString) {
                    return true;
                }
                break;
            }
        }
    }
    return false;
}
/**
 * @returns `true` if the type (or all union types) in the given type return true for the callback
 */
function isAllTypesMatch(type, cb) {
    if (type.isUnion()) {
        return type.types.every(t => cb(t));
    }
    return cb(type);
}
//# sourceMappingURL=validator.js.map