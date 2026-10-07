import { Kind, validate, specifiedRules, concatAST, versionInfo, } from 'graphql';
import { AggregateError } from './AggregateError.js';
export async function validateGraphQlDocuments(schema, documentFiles, effectiveRules = createDefaultRules()) {
    const allFragmentMap = new Map();
    const documentFileObjectsToValidate = [];
    for (const documentFile of documentFiles) {
        if (documentFile.document) {
            const definitionsToValidate = [];
            for (const definitionNode of documentFile.document.definitions) {
                if (definitionNode.kind === Kind.FRAGMENT_DEFINITION) {
                    allFragmentMap.set(definitionNode.name.value, definitionNode);
                }
                else {
                    definitionsToValidate.push(definitionNode);
                }
            }
            documentFileObjectsToValidate.push({
                location: documentFile.location,
                document: {
                    kind: Kind.DOCUMENT,
                    definitions: definitionsToValidate,
                },
            });
        }
    }
    const allErrors = [];
    const allFragmentsDocument = {
        kind: Kind.DOCUMENT,
        definitions: [...allFragmentMap.values()],
    };
    await Promise.all(documentFileObjectsToValidate.map(async (documentFile) => {
        const documentToValidate = concatAST([allFragmentsDocument, documentFile.document]);
        const errors = validate(schema, documentToValidate, effectiveRules);
        if (errors.length > 0) {
            allErrors.push({
                filePath: documentFile.location,
                errors,
            });
        }
    }));
    return allErrors;
}
export function checkValidationErrors(loadDocumentErrors) {
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
        throw new AggregateError(errors, `GraphQL Document Validation failed with ${errors.length} errors;
  ${errors.map((error, index) => `Error ${index}: ${error.stack}`).join('\n\n')}`);
    }
}
export function createDefaultRules() {
    let ignored = ['NoUnusedFragmentsRule', 'NoUnusedVariablesRule', 'KnownDirectivesRule'];
    if (versionInfo.major < 15) {
        ignored = ignored.map(rule => rule.replace(/Rule$/, ''));
    }
    return specifiedRules.filter((f) => !ignored.includes(f.name));
}
