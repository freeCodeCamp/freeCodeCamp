"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkStatements = walkStatements;
const utils_1 = require("@typescript-eslint/utils");
/**
 * Yields all statement nodes in a block, including nested blocks.
 *
 * You can use it to find all return statements in a function body.
 */
function* walkStatements(body) {
    for (const statement of body) {
        switch (statement.type) {
            case utils_1.AST_NODE_TYPES.BlockStatement: {
                yield* walkStatements(statement.body);
                continue;
            }
            case utils_1.AST_NODE_TYPES.SwitchStatement: {
                for (const switchCase of statement.cases) {
                    yield* walkStatements(switchCase.consequent);
                }
                continue;
            }
            case utils_1.AST_NODE_TYPES.IfStatement: {
                yield* walkStatements([statement.consequent]);
                if (statement.alternate) {
                    yield* walkStatements([statement.alternate]);
                }
                continue;
            }
            case utils_1.AST_NODE_TYPES.WhileStatement:
            case utils_1.AST_NODE_TYPES.DoWhileStatement:
            case utils_1.AST_NODE_TYPES.ForStatement:
            case utils_1.AST_NODE_TYPES.ForInStatement:
            case utils_1.AST_NODE_TYPES.ForOfStatement:
            case utils_1.AST_NODE_TYPES.WithStatement:
            case utils_1.AST_NODE_TYPES.LabeledStatement: {
                yield* walkStatements([statement.body]);
                continue;
            }
            case utils_1.AST_NODE_TYPES.TryStatement: {
                yield* walkStatements([statement.block]);
                if (statement.handler) {
                    yield* walkStatements([statement.handler.body]);
                }
                if (statement.finalizer) {
                    yield* walkStatements([statement.finalizer]);
                }
                continue;
            }
            default: {
                yield statement;
                continue;
            }
        }
    }
}
//# sourceMappingURL=walkStatements.js.map