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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('keyword-spacing');
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseSchema = Array.isArray(baseRule.meta.schema)
    ? baseRule.meta.schema[0]
    : baseRule.meta.schema;
const schema = util.deepMerge(
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- https://github.com/microsoft/TypeScript/issues/17002
baseSchema, {
    properties: {
        overrides: {
            properties: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                type: baseSchema.properties.overrides.properties.import,
            },
        },
    },
});
exports.default = util.createRule({
    name: 'keyword-spacing',
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce consistent spacing before and after keywords',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'whitespace',
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: [schema],
        messages: baseRule.meta.messages,
    },
    defaultOptions: [{}],
    create(context, [{ after, overrides }]) {
        const sourceCode = context.getSourceCode();
        const baseRules = baseRule.create(context);
        return Object.assign(Object.assign({}, baseRules), { TSAsExpression(node) {
                const asToken = util.nullThrows(sourceCode.getTokenAfter(node.expression, token => token.value === 'as'), util.NullThrowsReasons.MissingToken('as', node.type));
                const oldTokenType = asToken.type;
                // as is a contextual keyword, so it's always reported as an Identifier
                // the rule looks for keyword tokens, so we temporarily override it
                // we mutate it at the token level because the rule calls sourceCode.getFirstToken,
                // so mutating a copy would not change the underlying copy returned by that method
                asToken.type = utils_1.AST_TOKEN_TYPES.Keyword;
                // use this selector just because it is just a call to `checkSpacingAroundFirstToken`
                baseRules.DebuggerStatement(asToken);
                // make sure to reset the type afterward so we don't permanently mutate the AST
                asToken.type = oldTokenType;
            },
            'ImportDeclaration[importKind=type]'(node) {
                var _a, _b, _c, _d;
                const { type: typeOptionOverride = {} } = overrides !== null && overrides !== void 0 ? overrides : {};
                const typeToken = sourceCode.getFirstToken(node, { skip: 1 });
                const punctuatorToken = sourceCode.getTokenAfter(typeToken);
                if (((_b = (_a = node.specifiers) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.ImportDefaultSpecifier) {
                    return;
                }
                const spacesBetweenTypeAndPunctuator = punctuatorToken.range[0] - typeToken.range[1];
                if (((_c = typeOptionOverride.after) !== null && _c !== void 0 ? _c : after) === true &&
                    spacesBetweenTypeAndPunctuator === 0) {
                    context.report({
                        loc: typeToken.loc,
                        messageId: 'expectedAfter',
                        data: { value: 'type' },
                        fix(fixer) {
                            return fixer.insertTextAfter(typeToken, ' ');
                        },
                    });
                }
                if (((_d = typeOptionOverride.after) !== null && _d !== void 0 ? _d : after) === false &&
                    spacesBetweenTypeAndPunctuator > 0) {
                    context.report({
                        loc: typeToken.loc,
                        messageId: 'unexpectedAfter',
                        data: { value: 'type' },
                        fix(fixer) {
                            return fixer.removeRange([
                                typeToken.range[1],
                                typeToken.range[1] + spacesBetweenTypeAndPunctuator,
                            ]);
                        },
                    });
                }
            } });
    },
});
//# sourceMappingURL=keyword-spacing.js.map