"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultOptions = exports.defaultOptions = exports.jsonDescription = exports.ignoreOverride = void 0;
exports.ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const jsonDescription = (jsonSchema, def) => {
    if (def.description) {
        try {
            return {
                ...jsonSchema,
                ...JSON.parse(def.description),
            };
        }
        catch { }
    }
    return jsonSchema;
};
exports.jsonDescription = jsonDescription;
exports.defaultOptions = {
    name: undefined,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
    openAiAnyTypeName: "OpenAiAnyType"
};
const getDefaultOptions = (options) => (typeof options === "string"
    ? {
        ...exports.defaultOptions,
        name: options,
    }
    : {
        ...exports.defaultOptions,
        ...options,
    });
exports.getDefaultOptions = getDefaultOptions;
