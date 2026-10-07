"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astFromValueUntyped = void 0;
const graphql_1 = require("graphql");
/**
 * Produces a GraphQL Value AST given a JavaScript object.
 * Function will match JavaScript/JSON values to GraphQL AST schema format
 * by using the following mapping.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String               |
 * | Number        | Int / Float          |
 * | null          | NullValue            |
 *
 */
function astFromValueUntyped(value) {
    // only explicit null, not undefined, NaN
    if (value === null) {
        return { kind: graphql_1.Kind.NULL };
    }
    // undefined
    if (value === undefined) {
        return null;
    }
    // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
    // the value is not an array, convert the value using the list's item type.
    if (Array.isArray(value)) {
        const valuesNodes = [];
        for (const item of value) {
            const itemNode = astFromValueUntyped(item);
            if (itemNode != null) {
                valuesNodes.push(itemNode);
            }
        }
        return { kind: graphql_1.Kind.LIST, values: valuesNodes };
    }
    if (typeof value === 'object') {
        const fieldNodes = [];
        for (const fieldName in value) {
            const fieldValue = value[fieldName];
            const ast = astFromValueUntyped(fieldValue);
            if (ast) {
                fieldNodes.push({
                    kind: graphql_1.Kind.OBJECT_FIELD,
                    name: { kind: graphql_1.Kind.NAME, value: fieldName },
                    value: ast,
                });
            }
        }
        return { kind: graphql_1.Kind.OBJECT, fields: fieldNodes };
    }
    // Others serialize based on their corresponding JavaScript scalar types.
    if (typeof value === 'boolean') {
        return { kind: graphql_1.Kind.BOOLEAN, value };
    }
    // JavaScript numbers can be Int or Float values.
    if (typeof value === 'number' && isFinite(value)) {
        const stringNum = String(value);
        return integerStringRegExp.test(stringNum)
            ? { kind: graphql_1.Kind.INT, value: stringNum }
            : { kind: graphql_1.Kind.FLOAT, value: stringNum };
    }
    if (typeof value === 'string') {
        return { kind: graphql_1.Kind.STRING, value };
    }
    throw new TypeError(`Cannot convert value to AST: ${value}.`);
}
exports.astFromValueUntyped = astFromValueUntyped;
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */
const integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
