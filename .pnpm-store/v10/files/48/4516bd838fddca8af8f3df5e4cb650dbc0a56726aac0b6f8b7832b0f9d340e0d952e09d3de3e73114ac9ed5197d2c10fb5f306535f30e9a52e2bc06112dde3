"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
// tslint regex
// https://github.com/palantir/tslint/blob/95d9d958833fd9dc0002d18cbe34db20d0fbf437/src/enableDisableRules.ts#L32
const ENABLE_DISABLE_REGEX = /^\s*tslint:(enable|disable)(?:-(line|next-line))?(:|\s|$)/;
const toText = (text, type) => type === utils_1.AST_TOKEN_TYPES.Line
    ? ['//', text.trim()].join(' ')
    : ['/*', text.trim(), '*/'].join(' ');
exports.default = (0, util_1.createRule)({
    name: 'ban-tslint-comment',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow `// tslint:<rule-flag>` comments',
            recommended: 'stylistic',
        },
        fixable: 'code',
        messages: {
            commentDetected: 'tslint comment detected: "{{ text }}"',
        },
        schema: [],
    },
    defaultOptions: [],
    create: context => {
        return {
            Program() {
                const comments = context.sourceCode.getAllComments();
                comments.forEach(c => {
                    if (ENABLE_DISABLE_REGEX.test(c.value)) {
                        context.report({
                            node: c,
                            messageId: 'commentDetected',
                            data: { text: toText(c.value, c.type) },
                            fix(fixer) {
                                const rangeStart = context.sourceCode.getIndexFromLoc({
                                    column: c.loc.start.column > 0 ? c.loc.start.column - 1 : 0,
                                    line: c.loc.start.line,
                                });
                                const rangeEnd = context.sourceCode.getIndexFromLoc({
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