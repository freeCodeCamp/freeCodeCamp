"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("../graphql");
exports.default = new graphql_1.GraphQLScalarType({
    name: 'Buffer',
    serialize(value) {
        if (!(value instanceof Buffer)) {
            throw new TypeError('Field error: value is not an instance of Buffer');
        }
        return value.toString();
    },
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new Error('Field error: value must be a String');
        }
        return Buffer.from(value);
    },
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new graphql_1.GraphQLError(`Query error: Can only parse strings to buffers but got a: ${ast.kind}`, [ast]);
        }
        const result = Buffer.from(ast.value);
        if (ast.value !== result.toString()) {
            throw new graphql_1.GraphQLError('Query error: Invalid buffer encoding', [ast]);
        }
        return result;
    },
});
//# sourceMappingURL=buffer.js.map