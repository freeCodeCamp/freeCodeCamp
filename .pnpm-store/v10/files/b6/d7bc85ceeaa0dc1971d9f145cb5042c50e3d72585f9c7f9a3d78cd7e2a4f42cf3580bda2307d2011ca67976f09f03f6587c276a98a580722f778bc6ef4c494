"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('init-declarations');
exports.default = (0, util_1.createRule)({
    name: 'init-declarations',
    meta: {
        type: 'suggestion',
        // defaultOptions, -- base rule does not use defaultOptions
        docs: {
            description: 'Require or disallow initialization in variable declarations',
            extendsBaseRule: true,
            frozen: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: baseRule.meta.schema,
    },
    defaultOptions: ['always'],
    create(context, [mode]) {
        // Make a custom context to adjust the loc of reports where the base
        // rule's behavior is a bit too aggressive with TS-specific syntax (namely,
        // type annotations).
        function getBaseContextOverride() {
            const reportOverride = descriptor => {
                if ('node' in descriptor && descriptor.loc == null) {
                    const { node, ...rest } = descriptor;
                    // We only want to special case the report loc when reporting on
                    // variables declarations that are not initialized. Declarations that
                    // _are_ initialized get reported by the base rule due to a setting to
                    // prohibit initializing variables entirely, in which case underlining
                    // the whole node including the type annotation and initializer is
                    // appropriate.
                    if (node.type === utils_1.AST_NODE_TYPES.VariableDeclarator &&
                        node.init == null) {
                        context.report({
                            ...rest,
                            loc: getReportLoc(node),
                        });
                        return;
                    }
                }
                context.report(descriptor);
            };
            // `return { ...context, report: reportOverride }` isn't safe because the
            // `context` object has some getters that need to be preserved.
            //
            // `return new Proxy(context, ...)` doesn't work because `context` has
            // non-configurable properties that throw when constructing a Proxy.
            //
            // So, we'll just use Proxy on a dummy object and use the `get` trap to
            // proxy `context`'s properties.
            return new Proxy({}, {
                get: (target, prop, receiver) => prop === 'report'
                    ? reportOverride
                    : Reflect.get(context, prop, receiver),
            });
        }
        const rules = baseRule.create(getBaseContextOverride());
        return {
            'VariableDeclaration:exit'(node) {
                if (mode === 'always') {
                    if (node.declare) {
                        return;
                    }
                    if (isAncestorNamespaceDeclared(node)) {
                        return;
                    }
                }
                rules['VariableDeclaration:exit'](node);
            },
        };
        function isAncestorNamespaceDeclared(node) {
            let ancestor = node.parent;
            while (ancestor) {
                if (ancestor.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                    ancestor.declare) {
                    return true;
                }
                ancestor = ancestor.parent;
            }
            return false;
        }
    },
});
/**
 * When reporting an uninitialized variable declarator, get the loc excluding
 * the type annotation.
 */
function getReportLoc(node) {
    const start = structuredClone(node.loc.start);
    const end = {
        line: node.loc.start.line,
        // `if (id.type === AST_NODE_TYPES.Identifier)` is a condition for
        // reporting in the base rule (as opposed to things like destructuring
        // assignment), so the type assertion should always be valid.
        column: node.loc.start.column + node.id.name.length,
    };
    return {
        start,
        end,
    };
}
//# sourceMappingURL=init-declarations.js.map