"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultRules = exports.checkValidationErrors = exports.validateGraphQlDocuments = void 0;
const graphql_1 = require("graphql");
const AggregateError_js_1 = require("./AggregateError.js");
async function validateGraphQlDocuments(schema, documentFiles, effectiveRules = createDefaultRules()) {
    const allFragmentMap = new Map();
    const documentFileObjectsToValidate = [];
    for (const documentFile of documentFiles) {
        if (documentFile.document) {
            const definitionsToValidate = [];
            for (const definitionNode of documentFile.document.definitions) {
                if (definitionNode.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
                    allFragmentMap.set(definitionNode.name.value, definitionNode);
                }
                else {
                    definitionsToValidate.push(definitionNode);
                }
            }
            documentFileObjectsToValidate.push({
                location: documentFile.location,
                document: {
                    kind: graphql_1.Kind.DOCUMENT,
                    definitions: definitionsToValidate,
                },
            });
        }
    }
    const allErrors = [];
    const allFragmentsDocument = {
        kind: graphql_1.Kind.DOCUMENT,
        definitions: [...allFragmentMap.values()],
    };
    await Promise.all(documentFileObjectsToValidate.map(async (documentFile) => {
        const documentToValidate = (0, graphql_1.concatAST)([allFragmentsDocument, documentFile.document]);
        const errors = (0, graphql_1.validate)(schema, documentToValidate, effectiveRules);
        if (errors.length > 0) {
            allErrors.push({
                filePath: documentFile.location,
                errors,
            });
        }
    }));
    return allErrors;
}
exports.validateGraphQlDocuments = validateGraphQlDocuments;
function checkValidationErrors(loadDocumentErrors) {
    if (loadDocumentErrors.length > 0) {
        const errors = [];
        for (const loadDocumentError of loadDocumentErrors) {
            for (const graphQLError of loadDocumentError.errors) {
                const error = new Error();
                error.name = 'GraphQLDocumentError';
                error.message = `${error.name}: ${graphQLError.message}`;
                error.stack = error.message;
                if (graphQLError.locations) {
                    for (const location of graphQLError.locations) {
                        error.stack += `\n    at ${loadDocumentError.filePath}:${location.line}:${location.column}`;
                    }
                }
                errors.push(error);
            }
        }
        throw new AggregateError_js_1.AggregateError(errors, `GraphQL Document Validation failed with ${errors.length} errors;
  ${errors.map((error, index) => `Error ${index}: ${error.stack}`).join('\n\n')}`);
    }
}
exports.checkValidationErrors = checkValidationErrors;
function createDefaultRules() {
    let ignored = ['NoUnusedFragmentsRule', 'NoUnusedVariablesRule', 'KnownDirectivesRule'];
    if (graphql_1.versionInfo.major < 15) {
        ignored = ignored.map(rule => rule.replace(/Rule$/, ''));
    }
    return graphql_1.specifiedRules.filter((f) => !ignored.includes(f.name));
}
exports.createDefaultRules = createDefaultRules;
