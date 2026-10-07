import { isDocumentNode } from '@graphql-tools/utils';
import { isSchema, Kind } from 'graphql';
export function isObjectMap(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
export function prioritize(...values) {
    const picked = values.find(val => typeof val === 'boolean');
    if (typeof picked !== 'boolean') {
        return values[values.length - 1];
    }
    return picked;
}
export function pickFlag(flag, config) {
    return isObjectMap(config) ? config[flag] : undefined;
}
export function shouldValidateDuplicateDocuments(skipDocumentsValidationOption) {
    // If the value is true, skip all
    if (skipDocumentsValidationOption === true) {
        return false;
    }
    // If the value is object with the specific flag, only skip this one
    if (typeof skipDocumentsValidationOption === 'object' && skipDocumentsValidationOption.skipDuplicateValidation) {
        return false;
    }
    // If the value is falsy or the specific flag is not set, validate
    return true;
}
export function shouldValidateDocumentsAgainstSchema(skipDocumentsValidationOption) {
    // If the value is true, skip all
    if (skipDocumentsValidationOption === true) {
        return false;
    }
    // If the value is object with the specific flag, only skip this one
    if (typeof skipDocumentsValidationOption === 'object' && skipDocumentsValidationOption.skipValidationAgainstSchema) {
        return false;
    }
    // If the value is falsy or the specific flag is not set, validate
    return true;
}
export function getSkipDocumentsValidationOption(options) {
    // If the value is set on the root level
    if (options.skipDocumentsValidation) {
        return options.skipDocumentsValidation;
    }
    // If the value is set under `config` property
    const flagFromConfig = pickFlag('skipDocumentsValidation', options.config);
    if (flagFromConfig) {
        return flagFromConfig;
    }
    return false;
}
const federationDirectives = ['key', 'requires', 'provides', 'external'];
export function hasFederationSpec(schemaOrAST) {
    if (isSchema(schemaOrAST)) {
        return federationDirectives.some(directive => schemaOrAST.getDirective(directive));
    }
    if (isDocumentNode(schemaOrAST)) {
        return schemaOrAST.definitions.some(def => def.kind === Kind.DIRECTIVE_DEFINITION && federationDirectives.includes(def.name.value));
    }
    return false;
}
export function extractHashFromSchema(schema) {
    var _a;
    if (!schema.extensions) {
        schema.extensions = {};
    }
    return (_a = schema.extensions['hash']) !== null && _a !== void 0 ? _a : null;
}
