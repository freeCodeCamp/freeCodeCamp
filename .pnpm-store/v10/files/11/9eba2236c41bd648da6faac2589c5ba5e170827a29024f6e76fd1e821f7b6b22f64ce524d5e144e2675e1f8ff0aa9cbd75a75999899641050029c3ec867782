import { Set, safeAdd, safePush } from '../../../utils/globals.js';
const safeObjectIs = Object.is;
export class SameValueSet {
    constructor(selector) {
        this.selector = selector;
        this.selectedItemsExceptMinusZero = new Set();
        this.data = [];
        this.hasMinusZero = false;
    }
    tryAdd(value) {
        const selected = this.selector(value);
        if (safeObjectIs(selected, -0)) {
            if (this.hasMinusZero) {
                return false;
            }
            safePush(this.data, value);
            this.hasMinusZero = true;
            return true;
        }
        const sizeBefore = this.selectedItemsExceptMinusZero.size;
        safeAdd(this.selectedItemsExceptMinusZero, selected);
        if (sizeBefore !== this.selectedItemsExceptMinusZero.size) {
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
