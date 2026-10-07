"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultRules = exports.validateGraphQlDocuments = void 0;
const graphql_1 = require("graphql");
function validateGraphQlDocuments(schema, documents, rules = createDefaultRules()) {
    var _a;
    const definitionMap = new Map();
    for (const document of documents) {
        for (const docDefinition of document.definitions) {
            if ('name' in docDefinition && docDefinition.name) {
                definitionMap.set(`${docDefinition.kind}_${docDefinition.name.value}`, docDefinition);
            }
            else {
                definitionMap.set(Date.now().toString(), docDefinition);
            }
        }
    }
    const fullAST = {
        kind: graphql_1.Kind.DOCUMENT,
        definitions: Array.from(definitionMap.values()),
    };
    const errors = (0, graphql_1.validate)(schema, fullAST, rules);
    for (const error of errors) {
        error.stack = error.message;
        if (error.locations) {
            for (const location of error.locations) {
                error.stack += `\n    at ${(_a = error.source) === null || _a === void 0 ? void 0 : _a.name}:${location.line}:${location.column}`;
            }
        }
    }
    return errors;
}
exports.validateGraphQlDocuments = validateGraphQlDocuments;
function createDefaultRules() {
    let ignored = ['NoUnusedFragmentsRule', 'NoUnusedVariablesRule', 'KnownDirectivesRule'];
    if (graphql_1.versionInfo.major < 15) {
        ignored = ignored.map(rule => rule.replace(/Rule$/, ''));
    }
    return graphql_1.specifiedRules.filter((f) => !ignored.includes(f.name));
}
exports.createDefaultRules = createDefaultRules;
