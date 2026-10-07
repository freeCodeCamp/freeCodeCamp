import { Kind, validate, specifiedRules, versionInfo, } from 'graphql';
export function validateGraphQlDocuments(schema, documents, rules = createDefaultRules()) {
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
        kind: Kind.DOCUMENT,
        definitions: Array.from(definitionMap.values()),
    };
    const errors = validate(schema, fullAST, rules);
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
export function createDefaultRules() {
    let ignored = ['NoUnusedFragmentsRule', 'NoUnusedVariablesRule', 'KnownDirectivesRule'];
    if (versionInfo.major < 15) {
        ignored = ignored.map(rule => rule.replace(/Rule$/, ''));
    }
    return specifiedRules.filter((f) => !ignored.includes(f.name));
}
