"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractHashFromSchema = exports.hasFederationSpec = exports.getSkipDocumentsValidationOption = exports.shouldValidateDocumentsAgainstSchema = exports.shouldValidateDuplicateDocuments = exports.pickFlag = exports.prioritize = exports.isObjectMap = void 0;
const utils_1 = require("@graphql-tools/utils");
const graphql_1 = require("graphql");
function isObjectMap(obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}
exports.isObjectMap = isObjectMap;
function prioritize(...values) {
    const picked = values.find(val => typeof val === 'boolean');
    if (typeof picked !== 'boolean') {
        return values[values.length - 1];
    }
    return picked;
}
exports.prioritize = prioritize;
function pickFlag(flag, config) {
    return isObjectMap(config) ? config[flag] : undefined;
}
exports.pickFlag = pickFlag;
function shouldValidateDuplicateDocuments(skipDocumentsValidationOption) {
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
exports.shouldValidateDuplicateDocuments = shouldValidateDuplicateDocuments;
function shouldValidateDocumentsAgainstSchema(skipDocumentsValidationOption) {
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
exports.shouldValidateDocumentsAgainstSchema = shouldValidateDocumentsAgainstSchema;
function getSkipDocumentsValidationOption(options) {
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
exports.getSkipDocumentsValidationOption = getSkipDocumentsValidationOption;
const federationDirectives = ['key', 'requires', 'provides', 'external'];
function hasFederationSpec(schemaOrAST) {
    if ((0, graphql_1.isSchema)(schemaOrAST)) {
        return federationDirectives.some(directive => schemaOrAST.getDirective(directive));
    }
    if ((0, utils_1.isDocumentNode)(schemaOrAST)) {
        return schemaOrAST.definitions.some(def => def.kind === graphql_1.Kind.DIRECTIVE_DEFINITION && federationDirectives.includes(def.name.value));
    }
    return false;
}
exports.hasFederationSpec = hasFederationSpec;
function extractHashFromSchema(schema) {
    var _a;
    if (!schema.extensions) {
        schema.extensions = {};
    }
    return (_a = schema.extensions['hash']) !== null && _a !== void 0 ? _a : null;
}
exports.extractHashFromSchema = extractHashFromSchema;
