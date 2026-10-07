export const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
export const jsonDescription = (jsonSchema, def) => {
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
export const defaultOptions = {
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
export const getDefaultOptions = (options) => (typeof options === "string"
    ? {
        ...defaultOptions,
        name: options,
    }
    : {
        ...defaultOptions,
        ...options,
    });
