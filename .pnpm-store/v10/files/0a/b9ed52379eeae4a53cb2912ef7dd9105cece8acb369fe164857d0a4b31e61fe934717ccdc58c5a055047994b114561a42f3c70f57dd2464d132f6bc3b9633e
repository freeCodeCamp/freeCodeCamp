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
// tslint regex
// https://github.com/palantir/tslint/blob/95d9d958833fd9dc0002d18cbe34db20d0fbf437/src/enableDisableRules.ts#L32
const ENABLE_DISABLE_REGEX = /^\s*tslint:(enable|disable)(?:-(line|next-line))?(:|\s|$)/;
const toText = (text, type) => type === utils_1.AST_TOKEN_TYPES.Line
    ? ['//', text.trim()].join(' ')
    : ['/*', text.trim(), '*/'].join(' ');
exports.default = util.createRule({
    name: 'ban-tslint-comment',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow `// tslint:<rule-flag>` comments',
            recommended: 'strict',
        },
        messages: {
            commentDetected: 'tslint comment detected: "{{ text }}"',
        },
        schema: [],
        fixable: 'code',
    },
    defaultOptions: [],
    create: context => {
        const sourceCode = context.getSourceCode();
        return {
            Program() {
                const comments = sourceCode.getAllComments();
                comments.forEach(c => {
                    if (ENABLE_DISABLE_REGEX.test(c.value)) {
                        context.report({
                            data: { text: toText(c.value, c.type) },
                            node: c,
                            messageId: 'commentDetected',
                            fix(fixer) {
                                const rangeStart = sourceCode.getIndexFromLoc({
                                    column: c.loc.start.column > 0 ? c.loc.start.column - 1 : 0,
                                    line: c.loc.start.line,
                                });
                                const rangeEnd = sourceCode.getIndexFromLoc({
                                    column: c.loc.end.column,
                                    line: c.loc.end.line,
                                });
                                return fixer.removeRange([rangeStart, rangeEnd + 1]);
                            },
                        });
                    }
                });
            },
        };
    },
});
//# sourceMappingURL=ban-tslint-comment.js.map