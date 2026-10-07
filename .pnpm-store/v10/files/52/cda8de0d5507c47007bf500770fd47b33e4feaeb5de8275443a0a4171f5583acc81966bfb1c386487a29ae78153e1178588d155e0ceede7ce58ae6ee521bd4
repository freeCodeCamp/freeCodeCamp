"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = exports.ReferenceTypeFlag = exports.ReferenceFlag = void 0;
const ID_1 = require("../ID");
var ReferenceFlag;
(function (ReferenceFlag) {
    ReferenceFlag[ReferenceFlag["Read"] = 1] = "Read";
    ReferenceFlag[ReferenceFlag["Write"] = 2] = "Write";
    ReferenceFlag[ReferenceFlag["ReadWrite"] = 3] = "ReadWrite";
})(ReferenceFlag || (exports.ReferenceFlag = ReferenceFlag = {}));
const generator = (0, ID_1.createIdGenerator)();
var ReferenceTypeFlag;
(function (ReferenceTypeFlag) {
    ReferenceTypeFlag[ReferenceTypeFlag["Value"] = 1] = "Value";
    ReferenceTypeFlag[ReferenceTypeFlag["Type"] = 2] = "Type";
})(ReferenceTypeFlag || (exports.ReferenceTypeFlag = ReferenceTypeFlag = {}));
/**
 * A Reference represents a single occurrence of an identifier in code.
 */
class Reference {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    $id = generator();
    /**
     * The read-write mode of the reference.
     */
    #flag;
    /**
     * Reference to the enclosing Scope.
     * @public
     */
    from;
    /**
     * Identifier syntax node.
     * @public
     */
    identifier;
    /**
     * `true` if this writing reference is a variable initializer or a default value.
     * @public
     */
    init;
    maybeImplicitGlobal;
    /**
     * The {@link Variable} object that this reference refers to. If such variable was not defined, this is `null`.
     * @public
     */
    resolved;
    /**
     * If reference is writeable, this is the node being written to it.
     * @public
     */
    writeExpr;
    /**
     * In some cases, a reference may be a type, value or both a type and value reference.
     */
    #referenceType;
    constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        this.#flag = flag;
        if (this.isWrite()) {
            this.writeExpr = writeExpr;
            this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        this.#referenceType = referenceType;
    }
    /**
     * True if this reference can reference types
     */
    get isTypeReference() {
        return (this.#referenceType & ReferenceTypeFlag.Type) !== 0;
    }
    /**
     * True if this reference can reference values
     */
    get isValueReference() {
        return (this.#referenceType & ReferenceTypeFlag.Value) !== 0;
    }
    /**
     * Whether the reference is writeable.
     * @public
     */
    isWrite() {
        return !!(this.#flag & ReferenceFlag.Write);
    }
    /**
     * Whether the reference is readable.
     * @public
     */
    isRead() {
        return !!(this.#flag & ReferenceFlag.Read);
    }
    /**
     * Whether the reference is read-only.
     * @public
     */
    isReadOnly() {
        return this.#flag === ReferenceFlag.Read;
    }
    /**
     * Whether the reference is write-only.
     * @public
     */
    isWriteOnly() {
        return this.#flag === ReferenceFlag.Write;
    }
    /**
     * Whether the reference is read-write.
     * @public
     */
    isReadWrite() {
        return this.#flag === ReferenceFlag.ReadWrite;
    }
}
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map