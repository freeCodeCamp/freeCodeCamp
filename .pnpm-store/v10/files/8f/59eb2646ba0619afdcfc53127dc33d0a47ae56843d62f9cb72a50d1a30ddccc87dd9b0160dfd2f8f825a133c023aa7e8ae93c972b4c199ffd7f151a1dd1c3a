"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterKind = void 0;
const graphql_1 = require("graphql");
const process_1 = require("process");
/**
 * @internal
 */
const filterKind = (content, filterKinds) => {
    if (content && content.definitions && content.definitions.length && filterKinds && filterKinds.length > 0) {
        const invalidDefinitions = [];
        const validDefinitions = [];
        for (const definitionNode of content.definitions) {
            if (filterKinds.includes(definitionNode.kind)) {
                invalidDefinitions.push(definitionNode);
            }
            else {
                validDefinitions.push(definitionNode);
            }
        }
        if (invalidDefinitions.length > 0) {
            if (process_1.env['DEBUG']) {
                for (const d of invalidDefinitions) {
                    console.log(`Filtered document of kind ${d.kind} due to filter policy (${filterKinds.join(', ')})`);
                }
            }
        }
        return {
            kind: graphql_1.Kind.DOCUMENT,
            definitions: validDefinitions,
        };
    }
    return content;
};
exports.filterKind = filterKind;
