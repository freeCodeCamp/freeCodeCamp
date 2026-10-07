"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
const VariableBase_1 = require("./VariableBase");
/**
 * A Variable represents a locally scoped identifier. These include arguments to functions.
 */
class Variable extends VariableBase_1.VariableBase {
    /**
     * `true` if the variable is valid in a type context, false otherwise
     * @public
     */
    get isTypeVariable() {
        if (this.defs.length === 0) {
            // we don't statically know whether this is a type or a value
            return true;
        }
        return this.defs.some(def => def.isTypeDefinition);
    }
    /**
     * `true` if the variable is valid in a value context, false otherwise
     * @public
     */
    get isValueVariable() {
        if (this.defs.length === 0) {
            // we don't statically know whether this is a type or a value
            return true;
        }
        return this.defs.some(def => def.isVariableDefinition);
    }
}
exports.Variable = Variable;
