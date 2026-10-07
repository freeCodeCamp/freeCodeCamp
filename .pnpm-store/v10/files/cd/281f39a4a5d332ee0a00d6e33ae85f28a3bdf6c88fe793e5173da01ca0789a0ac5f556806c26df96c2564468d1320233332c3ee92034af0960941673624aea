"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("../graphql");
exports.default = new graphql_1.GraphQLScalarType({
    name: 'Date',
    serialize(value) {
        if (typeof value === 'string' &&
            /^(\d{4})-(\d{2})-(\d{2})(T((\d{2}):(\d{2}):(\d{2}))(\.(\d{1,3}))?Z)?$/.test(value)) {
            return value;
        }
        if (typeof value === 'number' && Number.isFinite(value)) {
            return new Date(value).toJSON();
        }
        if (!(value instanceof Date)) {
            throw new TypeError('Field error: value is not an instance of Date');
        }
        if (Number.isNaN(value.getTime())) {
            throw new TypeError('Field error: value is an invalid Date');
        }
        return value.toJSON();
    },
    parseValue(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            throw new TypeError('Field error: value is an invalid Date');
        }
        return date;
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.INT) {
            return new Date(parseInt(ast.value, 10));
        }
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new graphql_1.GraphQLError(`Query error: Can only parse string or integer to Date but got a: ${ast.kind}`, [ast]);
        }
        const result = new Date(ast.value);
        if (Number.isNaN(result.getTime())) {
            throw new graphql_1.GraphQLError('Query error: Invalid date', [ast]);
        }
        return result;
    },
});
//# sourceMappingURL=date.js.map