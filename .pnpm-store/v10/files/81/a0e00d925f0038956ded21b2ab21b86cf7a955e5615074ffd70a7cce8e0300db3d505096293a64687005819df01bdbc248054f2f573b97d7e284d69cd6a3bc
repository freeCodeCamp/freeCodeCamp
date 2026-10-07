"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const definition = {
    type: 'object',
    properties: {
        multiline: {
            type: 'object',
            properties: {
                delimiter: { enum: ['none', 'semi', 'comma'] },
                requireLast: { type: 'boolean' },
            },
            additionalProperties: false,
        },
        singleline: {
            type: 'object',
            properties: {
                // note can't have "none" for single line delimiter as it's invalid syntax
                delimiter: { enum: ['semi', 'comma'] },
                requireLast: { type: 'boolean' },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};
const isLastTokenEndOfLine = (token, line) => {
    const positionInLine = token.loc.start.column;
    return positionInLine === line.length - 1;
};
const isCommentsEndOfLine = (token, comments, line) => {
    if (!comments) {
        return false;
    }
    if (comments.loc.end.line > token.loc.end.line) {
        return true;
    }
    const positionInLine = comments.loc.end.column;
    return positionInLine === line.length;
};
const makeFixFunction = ({ optsNone, optsSemi, lastToken, commentsAfterLastToken, missingDelimiter, lastTokenLine, isSingleLine, }) => {
    // if removing is the action but last token is not the end of the line
    if (optsNone &&
        !isLastTokenEndOfLine(lastToken, lastTokenLine) &&
        !isCommentsEndOfLine(lastToken, commentsAfterLastToken, lastTokenLine) &&
        !isSingleLine) {
        return null;
    }
    return (fixer) => {
        if (optsNone) {
            // remove the unneeded token
            return fixer.remove(lastToken);
        }
        const token = optsSemi ? ';' : ',';
        if (missingDelimiter) {
            // add the missing delimiter
            return fixer.insertTextAfter(lastToken, token);
        }
        // correct the current delimiter
        return fixer.replaceText(lastToken, token);
    };
};
exports.default = util.createRule({
    name: 'member-delimiter-style',
    meta: {
        type: 'layout',
        docs: {
            description: 'Require a specific member delimiter style for interfaces and type literals',
            recommended: false,
        },
        fixable: 'whitespace',
        messages: {
            unexpectedComma: 'Unexpected separator (,).',
            unexpectedSemi: 'Unexpected separator (;).',
            expectedComma: 'Expected a comma.',
            expectedSemi: 'Expected a semicolon.',
        },
        schema: [
            {
                type: 'object',
                properties: Object.assign({}, definition.properties, {
                    overrides: {
                        type: 'object',
                        properties: {
                            interface: definition,
                            typeLiteral: definition,
                        },
                        additionalProperties: false,
                    },
                    multilineDetection: {
                        enum: ['brackets', 'last-member'],
                    },
                }),
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        },
    ],
    create(context, [options]) {
        var _a;
        const sourceCode = context.getSourceCode();
        // use the base options as the defaults for the cases
        const baseOptions = options;
        const overrides = (_a = baseOptions.overrides) !== null && _a !== void 0 ? _a : {};
        const interfaceOptions = util.deepMerge(baseOptions, overrides.interface);
        const typeLiteralOptions = util.deepMerge(baseOptions, overrides.typeLiteral);
        /**
         * Check the last token in the given member.
         * @param member the member to be evaluated.
         * @param opts the options to be validated.
         * @param isLast a flag indicating `member` is the last in the interface or type literal.
         */
        function checkLastToken(member, opts, isLast) {
            /**
             * Resolves the boolean value for the given setting enum value
             * @param type the option name
             */
            function getOption(type) {
                if (isLast && !opts.requireLast) {
                    // only turn the option on if its expecting no delimiter for the last member
                    return type === 'none';
                }
                return opts.delimiter === type;
            }
            let messageId = null;
            let missingDelimiter = false;
            const lastToken = sourceCode.getLastToken(member, {
                includeComments: false,
            });
            if (!lastToken) {
                return;
            }
            const commentsAfterLastToken = sourceCode
                .getCommentsAfter(lastToken)
                .pop();
            const sourceCodeLines = sourceCode.getLines();
            const lastTokenLine = sourceCodeLines[(lastToken === null || lastToken === void 0 ? void 0 : lastToken.loc.start.line) - 1];
            const optsSemi = getOption('semi');
            const optsComma = getOption('comma');
            const optsNone = getOption('none');
            if (lastToken.value === ';') {
                if (optsComma) {
                    messageId = 'expectedComma';
                }
                else if (optsNone) {
                    missingDelimiter = true;
                    messageId = 'unexpectedSemi';
                }
            }
            else if (lastToken.value === ',') {
                if (optsSemi) {
                    messageId = 'expectedSemi';
                }
                else if (optsNone) {
                    missingDelimiter = true;
                    messageId = 'unexpectedComma';
                }
            }
            else {
                if (optsSemi) {
                    missingDelimiter = true;
                    messageId = 'expectedSemi';
                }
                else if (optsComma) {
                    missingDelimiter = true;
                    messageId = 'expectedComma';
                }
            }
            if (messageId) {
                context.report({
                    node: lastToken,
                    loc: {
                        start: {
                            line: lastToken.loc.end.line,
                            column: lastToken.loc.end.column,
                        },
                        end: {
                            line: lastToken.loc.end.line,
                            column: lastToken.loc.end.column,
                        },
                    },
                    messageId,
                    fix: makeFixFunction({
                        optsNone,
                        optsSemi,
                        lastToken,
                        commentsAfterLastToken,
                        missingDelimiter,
                        lastTokenLine,
                        isSingleLine: opts.type === 'single-line',
                    }),
                });
            }
        }
        /**
         * Check the member separator being used matches the delimiter.
         * @param {ASTNode} node the node to be evaluated.
         */
        function checkMemberSeparatorStyle(node) {
            const members = node.type === utils_1.AST_NODE_TYPES.TSInterfaceBody ? node.body : node.members;
            let isSingleLine = node.loc.start.line === node.loc.end.line;
            if (options.multilineDetection === 'last-member' &&
                !isSingleLine &&
                members.length > 0) {
                const lastMember = members[members.length - 1];
                if (lastMember.loc.end.line === node.loc.end.line) {
                    isSingleLine = true;
                }
            }
            const typeOpts = node.type === utils_1.AST_NODE_TYPES.TSInterfaceBody
                ? interfaceOptions
                : typeLiteralOptions;
            const opts = isSingleLine
                ? Object.assign(Object.assign({}, typeOpts.singleline), { type: 'single-line' }) : Object.assign(Object.assign({}, typeOpts.multiline), { type: 'multi-line' });
            members.forEach((member, index) => {
                checkLastToken(member, opts !== null && opts !== void 0 ? opts : {}, index === members.length - 1);
            });
        }
        return {
            TSInterfaceBody: checkMemberSeparatorStyle,
            TSTypeLiteral: checkMemberSeparatorStyle,
        };
    },
});
//# sourceMappingURL=member-delimiter-style.js.map