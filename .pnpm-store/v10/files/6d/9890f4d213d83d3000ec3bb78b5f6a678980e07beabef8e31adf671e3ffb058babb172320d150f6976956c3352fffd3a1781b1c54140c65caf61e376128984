"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLoc = void 0;
const graphql_1 = require("graphql");
/**
 * This optimizer removes "loc" fields
 * @param input
 */
const removeLoc = input => {
    function transformNode(node) {
        if (node.loc && typeof node.loc === 'object') {
            const { loc, ...rest } = node;
            return rest;
        }
        return node;
    }
    return (0, graphql_1.visit)(input, { enter: transformNode });
};
exports.removeLoc = removeLoc;
