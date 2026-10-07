import { safeAdd, safePush, Set } from '../../../utils/globals.js';
const safeNumberIsNaN = Number.isNaN;
export class StrictlyEqualSet {
    constructor(selector) {
        this.selector = selector;
        this.selectedItemsExceptNaN = new Set();
        this.data = [];
    }
    tryAdd(value) {
        const selected = this.selector(value);
        if (safeNumberIsNaN(selected)) {
            safePush(this.data, value);
            return true;
        }
        const sizeBefore = this.selectedItemsExceptNaN.size;
        safeAdd(this.selectedItemsExceptNaN, selected);
        if (sizeBefore !== this.selectedItemsExceptNaN.size) {
            safePush(this.data, value);
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
