"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SameValueZeroSet = void 0;
const globals_1 = require("../../../utils/globals");
class SameValueZeroSet {
    constructor(selector) {
        this.selector = selector;
        this.selectedItems = new globals_1.Set();
        this.data = [];
    }
    tryAdd(value) {
        const selected = this.selector(value);
        const sizeBefore = this.selectedItems.size;
        (0, globals_1.safeAdd)(this.selectedItems, selected);
        if (sizeBefore !== this.selectedItems.size) {
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
exports.SameValueZeroSet = SameValueZeroSet;
