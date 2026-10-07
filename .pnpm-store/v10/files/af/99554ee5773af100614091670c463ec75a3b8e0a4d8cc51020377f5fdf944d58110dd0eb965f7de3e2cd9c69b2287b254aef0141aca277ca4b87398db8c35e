"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirective = exports.getDirectives = exports.getDirectiveInExtensions = exports.getDirectivesInExtensions = void 0;
const getArgumentValues_js_1 = require("./getArgumentValues.js");
function getDirectivesInExtensions(node, pathToDirectivesInExtensions = ['directives']) {
    return pathToDirectivesInExtensions.reduce((acc, pathSegment) => (acc == null ? acc : acc[pathSegment]), node === null || node === void 0 ? void 0 : node.extensions);
}
exports.getDirectivesInExtensions = getDirectivesInExtensions;
function _getDirectiveInExtensions(directivesInExtensions, directiveName) {
    const directiveInExtensions = directivesInExtensions.filter(directiveAnnotation => directiveAnnotation.name === directiveName);
    if (!directiveInExtensions.length) {
        return undefined;
    }
    return directiveInExtensions.map(directive => { var _a; return (_a = directive.args) !== null && _a !== void 0 ? _a : {}; });
}
function getDirectiveInExtensions(node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directivesInExtensions = pathToDirectivesInExtensions.reduce((acc, pathSegment) => (acc == null ? acc : acc[pathSegment]), node === null || node === void 0 ? void 0 : node.extensions);
    if (directivesInExtensions === undefined) {
        return undefined;
    }
    if (Array.isArray(directivesInExtensions)) {
        return _getDirectiveInExtensions(directivesInExtensions, directiveName);
    }
    // Support condensed format by converting to longer format
    // The condensed format does not preserve ordering of directives when  repeatable directives are used.
    // See https://github.com/ardatan/graphql-tools/issues/2534
    const reformattedDirectivesInExtensions = [];
    for (const [name, argsOrArrayOfArgs] of Object.entries(directivesInExtensions)) {
        if (Array.isArray(argsOrArrayOfArgs)) {
            for (const args of argsOrArrayOfArgs) {
                reformattedDirectivesInExtensions.push({ name, args });
            }
        }
        else {
            reformattedDirectivesInExtensions.push({ name, args: argsOrArrayOfArgs });
        }
    }
    return _getDirectiveInExtensions(reformattedDirectivesInExtensions, directiveName);
}
exports.getDirectiveInExtensions = getDirectiveInExtensions;
function getDirectives(schema, node, pathToDirectivesInExtensions = ['directives']) {
    const directivesInExtensions = getDirectivesInExtensions(node, pathToDirectivesInExtensions);
    if (directivesInExtensions != null && directivesInExtensions.length > 0) {
        return directivesInExtensions;
    }
    const schemaDirectives = schema && schema.getDirectives ? schema.getDirectives() : [];
    const schemaDirectiveMap = schemaDirectives.reduce((schemaDirectiveMap, schemaDirective) => {
        schemaDirectiveMap[schemaDirective.name] = schemaDirective;
        return schemaDirectiveMap;
    }, {});
    let astNodes = [];
    if (node.astNode) {
        astNodes.push(node.astNode);
    }
    if ('extensionASTNodes' in node && node.extensionASTNodes) {
        astNodes = [...astNodes, ...node.extensionASTNodes];
    }
    const result = [];
    for (const astNode of astNodes) {
        if (astNode.directives) {
            for (const directiveNode of astNode.directives) {
                const schemaDirective = schemaDirectiveMap[directiveNode.name.value];
                if (schemaDirective) {
                    result.push({ name: directiveNode.name.value, args: (0, getArgumentValues_js_1.getArgumentValues)(schemaDirective, directiveNode) });
                }
            }
        }
    }
    return result;
}
exports.getDirectives = getDirectives;
function getDirective(schema, node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directiveInExtensions = getDirectiveInExtensions(node, directiveName, pathToDirectivesInExtensions);
    if (directiveInExtensions != null) {
        return directiveInExtensions;
    }
    const schemaDirective = schema && schema.getDirective ? schema.getDirective(directiveName) : undefined;
    if (schemaDirective == null) {
        return undefined;
    }
    let astNodes = [];
    if (node.astNode) {
        astNodes.push(node.astNode);
    }
    if ('extensionASTNodes' in node && node.extensionASTNodes) {
        astNodes = [...astNodes, ...node.extensionASTNodes];
    }
    const result = [];
    for (const astNode of astNodes) {
        if (astNode.directives) {
            for (const directiveNode of astNode.directives) {
                if (directiveNode.name.value === directiveName) {
                    result.push((0, getArgumentValues_js_1.getArgumentValues)(schemaDirective, directiveNode));
                }
            }
        }
    }
    if (!result.length) {
        return undefined;
    }
    return result;
}
exports.getDirective = getDirective;
