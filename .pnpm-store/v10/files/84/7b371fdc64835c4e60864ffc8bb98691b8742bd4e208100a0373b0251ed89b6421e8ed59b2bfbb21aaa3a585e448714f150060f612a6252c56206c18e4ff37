"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThunkComposer = void 0;
const is_1 = require("./utils/is");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const misc_1 = require("./utils/misc");
class ThunkComposer {
    constructor(thunk, typeName) {
        this._thunk = thunk;
        if (typeName && typeof typeName === 'string') {
            this._typeName = typeName;
        }
    }
    get ofType() {
        if (!this._typeFromThunk) {
            this._typeFromThunk = this._thunk();
        }
        if (!this._typeFromThunk) {
            throw new Error(`ThunkComposer(${this._typeName || ''}) returns empty value: ${(0, misc_1.inspect)(this._typeFromThunk)}`);
        }
        return this._typeFromThunk;
    }
    getUnwrappedTC() {
        return this.ofType;
    }
    getType() {
        return this.ofType.getType();
    }
    getTypeName() {
        if (this._typeFromThunk && (0, is_1.isFunction)(this._typeFromThunk.getTypeName)) {
            return this._typeFromThunk.getTypeName();
        }
        else if (this._typeName) {
            return this._typeName;
        }
        return this.getUnwrappedTC().getTypeName();
    }
    getTypePlural() {
        return new ListComposer_1.ListComposer(this);
    }
    getTypeNonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    get List() {
        return new ListComposer_1.ListComposer(this);
    }
    get NonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        const cloned = this.ofType.cloneTo(anotherSchemaComposer, cloneMap);
        return new ThunkComposer(() => cloned, this._typeName);
    }
}
exports.ThunkComposer = ThunkComposer;
//# sourceMappingURL=ThunkComposer.js.map