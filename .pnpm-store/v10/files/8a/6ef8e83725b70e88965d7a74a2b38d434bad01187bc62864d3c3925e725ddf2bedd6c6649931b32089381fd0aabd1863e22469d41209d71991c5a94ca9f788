"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeEnum = void 0;
const graphql_1 = require("graphql");
const directives_js_1 = require("./directives.js");
const enum_values_js_1 = require("./enum-values.js");
function mergeEnum(e1, e2, config, directives) {
    if (e2) {
        return {
            name: e1.name,
            description: e1['description'] || e2['description'],
            kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) || e1.kind === 'EnumTypeDefinition' || e2.kind === 'EnumTypeDefinition'
                ? 'EnumTypeDefinition'
                : 'EnumTypeExtension',
            loc: e1.loc,
            directives: (0, directives_js_1.mergeDirectives)(e1.directives, e2.directives, config, directives),
            values: (0, enum_values_js_1.mergeEnumValues)(e1.values, e2.values, config),
        };
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...e1,
            kind: graphql_1.Kind.ENUM_TYPE_DEFINITION,
        }
        : e1;
}
exports.mergeEnum = mergeEnum;
