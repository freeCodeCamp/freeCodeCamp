"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeUnion = void 0;
const graphql_1 = require("graphql");
const directives_js_1 = require("./directives.js");
const merge_named_type_array_js_1 = require("./merge-named-type-array.js");
function mergeUnion(first, second, config, directives) {
    if (second) {
        return {
            name: first.name,
            description: first['description'] || second['description'],
            // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
            directives: (0, directives_js_1.mergeDirectives)(first.directives, second.directives, config, directives),
            kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) || first.kind === 'UnionTypeDefinition' || second.kind === 'UnionTypeDefinition'
                ? graphql_1.Kind.UNION_TYPE_DEFINITION
                : graphql_1.Kind.UNION_TYPE_EXTENSION,
            loc: first.loc,
            types: (0, merge_named_type_array_js_1.mergeNamedTypeArray)(first.types, second.types, config),
        };
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...first,
            kind: graphql_1.Kind.UNION_TYPE_DEFINITION,
        }
        : first;
}
exports.mergeUnion = mergeUnion;
