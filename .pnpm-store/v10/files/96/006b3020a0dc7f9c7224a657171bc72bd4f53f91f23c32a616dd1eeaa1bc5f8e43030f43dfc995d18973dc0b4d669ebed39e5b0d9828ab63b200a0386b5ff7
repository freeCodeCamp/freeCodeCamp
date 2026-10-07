"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableBase = void 0;
const ID_1 = require("../ID");
const generator = (0, ID_1.createIdGenerator)();
class VariableBase {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    $id = generator();
    /**
     * The array of the definitions of this variable.
     * @public
     */
    defs = [];
    /**
     * True if the variable is considered used for the purposes of `no-unused-vars`, false otherwise.
     * @public
     */
    eslintUsed = false;
    /**
     * The array of `Identifier` nodes which define this variable.
     * If this variable is redeclared, this array includes two or more nodes.
     * @public
     */
    identifiers = [];
    /**
     * The variable name, as given in the source code.
     * @public
     */
    name;
    /**
     * List of {@link Reference} of this variable (excluding parameter entries)  in its defining scope and all nested scopes.
     * For defining occurrences only see {@link Variable#defs}.
     * @public
     */
    references = [];
    /**
     * Reference to the enclosing Scope.
     */
    scope;
    constructor(name, scope) {
        this.name = name;
        this.scope = scope;
    }
}
exports.VariableBase = VariableBase;
