"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astFromType = void 0;
const graphql_1 = require("graphql");
const inspect_js_1 = require("./inspect.js");
function astFromType(type) {
    if ((0, graphql_1.isNonNullType)(type)) {
        const innerType = astFromType(type.ofType);
        if (innerType.kind === graphql_1.Kind.NON_NULL_TYPE) {
            throw new Error(`Invalid type node ${(0, inspect_js_1.inspect)(type)}. Inner type of non-null type cannot be a non-null type.`);
        }
        return {
            kind: graphql_1.Kind.NON_NULL_TYPE,
            type: innerType,
        };
    }
    else if ((0, graphql_1.isListType)(type)) {
        return {
            kind: graphql_1.Kind.LIST_TYPE,
            type: astFromType(type.ofType),
        };
    }
    return {
        kind: graphql_1.Kind.NAMED_TYPE,
        name: {
            kind: graphql_1.Kind.NAME,
            value: type.name,
        },
    };
}
exports.astFromType = astFromType;
