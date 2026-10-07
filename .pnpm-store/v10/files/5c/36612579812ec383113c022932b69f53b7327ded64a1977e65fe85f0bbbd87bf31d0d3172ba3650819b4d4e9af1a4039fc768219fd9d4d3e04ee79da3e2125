"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDescribable = exports.transformCommentsToDescriptions = exports.parseGraphQLSDL = void 0;
const graphql_1 = require("graphql");
const comments_js_1 = require("./comments.js");
function parseGraphQLSDL(location, rawSDL, options = {}) {
    let document;
    try {
        if (options.commentDescriptions && rawSDL.includes('#')) {
            document = transformCommentsToDescriptions(rawSDL, options);
            // If noLocation=true, we need to make sure to print and parse it again, to remove locations,
            // since `transformCommentsToDescriptions` must have locations set in order to transform the comments
            // into descriptions.
            if (options.noLocation) {
                document = (0, graphql_1.parse)((0, graphql_1.print)(document), options);
            }
        }
        else {
            document = (0, graphql_1.parse)(new graphql_1.Source(rawSDL, location), options);
        }
    }
    catch (e) {
        if (e.message.includes('EOF') && rawSDL.replace(/(\#[^*]*)/g, '').trim() === '') {
            document = {
                kind: graphql_1.Kind.DOCUMENT,
                definitions: [],
            };
        }
        else {
            throw e;
        }
    }
    return {
        location,
        document,
    };
}
exports.parseGraphQLSDL = parseGraphQLSDL;
function transformCommentsToDescriptions(sourceSdl, options = {}) {
    const parsedDoc = (0, graphql_1.parse)(sourceSdl, {
        ...options,
        noLocation: false,
    });
    const modifiedDoc = (0, graphql_1.visit)(parsedDoc, {
        leave: (node) => {
            if (isDescribable(node)) {
                const rawValue = (0, comments_js_1.getLeadingCommentBlock)(node);
                if (rawValue !== undefined) {
                    const commentsBlock = (0, comments_js_1.dedentBlockStringValue)('\n' + rawValue);
                    const isBlock = commentsBlock.includes('\n');
                    if (!node.description) {
                        return {
                            ...node,
                            description: {
                                kind: graphql_1.Kind.STRING,
                                value: commentsBlock,
                                block: isBlock,
                            },
                        };
                    }
                    else {
                        return {
                            ...node,
                            description: {
                                ...node.description,
                                value: node.description.value + '\n' + commentsBlock,
                                block: true,
                            },
                        };
                    }
                }
            }
        },
    });
    return modifiedDoc;
}
exports.transformCommentsToDescriptions = transformCommentsToDescriptions;
function isDescribable(node) {
    return ((0, graphql_1.isTypeSystemDefinitionNode)(node) ||
        node.kind === graphql_1.Kind.FIELD_DEFINITION ||
        node.kind === graphql_1.Kind.INPUT_VALUE_DEFINITION ||
        node.kind === graphql_1.Kind.ENUM_VALUE_DEFINITION);
}
exports.isDescribable = isDescribable;
