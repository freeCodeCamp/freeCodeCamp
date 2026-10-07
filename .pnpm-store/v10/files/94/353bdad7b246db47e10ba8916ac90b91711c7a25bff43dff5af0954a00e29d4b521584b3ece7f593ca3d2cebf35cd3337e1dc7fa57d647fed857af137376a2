"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSelectionSet = void 0;
const graphql_1 = require("graphql");
function parseSelectionSet(selectionSet, options) {
    const query = (0, graphql_1.parse)(selectionSet, options).definitions[0];
    return query.selectionSet;
}
exports.parseSelectionSet = parseSelectionSet;
