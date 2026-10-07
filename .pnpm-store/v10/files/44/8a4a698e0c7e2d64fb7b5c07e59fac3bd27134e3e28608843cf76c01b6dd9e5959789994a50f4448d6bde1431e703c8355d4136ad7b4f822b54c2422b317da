"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypeImport = isTypeImport;
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
/**
 * Determine whether a variable definition is a type import. e.g.:
 *
 * ```ts
 * import type { Foo } from 'foo';
 * import { type Bar } from 'bar';
 * ```
 *
 * @param definition - The variable definition to check.
 */
function isTypeImport(definition) {
    return (definition?.type === scope_manager_1.DefinitionType.ImportBinding &&
        (definition.parent.importKind === 'type' ||
            (definition.node.type === utils_1.AST_NODE_TYPES.ImportSpecifier &&
                definition.node.importKind === 'type')));
}
//# sourceMappingURL=isTypeImport.js.map