"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEqualSet = void 0;
const globals_1 = require("../../../utils/globals");
class CustomEqualSet {
    constructor(isEqual) {
        this.isEqual = isEqual;
        this.data = [];
    }
    tryAdd(value) {
        for (let idx = 0; idx !== this.data.length; ++idx) {
            if (this.isEqual(this.data[idx], value)) {
                return false;
            }
        }
        (0, globals_1.safePush)(this.data, value);
        return true;
    }
    size() {
        return this.data.length;
    }
    getData() {
        return this.data;
    }
}
exports.CustomEqualSet = CustomEqualSet;
