"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Reference_flag, _Reference_referenceType;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceTypeFlag = exports.ReferenceFlag = exports.Reference = void 0;
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
     * True if this reference can reference types
     */
    get isTypeReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Type) !== 0;
    }
    /**
     * True if this reference can reference values
     */
    get isValueReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Value) !== 0;
    }
    constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        this.$id = generator();
        /**
         * The read-write mode of the reference.
         */
        _Reference_flag.set(this, void 0);
        /**
         * In some cases, a reference may be a type, value or both a type and value reference.
         */
        _Reference_referenceType.set(this, void 0);
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        __classPrivateFieldSet(this, _Reference_flag, flag, "f");
        if (this.isWrite()) {
            this.writeExpr = writeExpr;
            this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        __classPrivateFieldSet(this, _Reference_referenceType, referenceType, "f");
    }
    /**
     * Whether the reference is writeable.
     * @public
     */
    isWrite() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Write);
    }
    /**
     * Whether the reference is readable.
     * @public
     */
    isRead() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Read);
    }
    /**
     * Whether the reference is read-only.
     * @public
     */
    isReadOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Read;
    }
    /**
     * Whether the reference is write-only.
     * @public
     */
    isWriteOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Write;
    }
    /**
     * Whether the reference is read-write.
     * @public
     */
    isReadWrite() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.ReadWrite;
    }
}
exports.Reference = Reference;
_Reference_flag = new WeakMap(), _Reference_referenceType = new WeakMap();
//# sourceMappingURL=Reference.js.map