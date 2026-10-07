"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SameValueSet = void 0;
const globals_1 = require("../../../utils/globals");
const safeObjectIs = Object.is;
class SameValueSet {
    constructor(selector) {
        this.selector = selector;
        this.selectedItemsExceptMinusZero = new globals_1.Set();
        this.data = [];
        this.hasMinusZero = false;
    }
    tryAdd(value) {
        const selected = this.selector(value);
        if (safeObjectIs(selected, -0)) {
            if (this.hasMinusZero) {
                return false;
            }
            (0, globals_1.safePush)(this.data, value);
            this.hasMinusZero = true;
            return true;
        }
        const sizeBefore = this.selectedItemsExceptMinusZero.size;
        (0, globals_1.safeAdd)(this.selectedItemsExceptMinusZero, selected);
        if (sizeBefore !== this.selectedItemsExceptMinusZero.size) {
            (0, globals_1.safePush)(this.data, value);
            return true;
        }
        return false;
    }
    size() {
        return this.data.length;
    }
    getData() {
        return this.data;
    }
}
exports.SameValueSet = SameValueSet;
