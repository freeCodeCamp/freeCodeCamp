import { Set, safeAdd, safePush } from '../../../utils/globals.js';
export class SameValueZeroSet {
    constructor(selector) {
        this.selector = selector;
        this.selectedItems = new Set();
        this.data = [];
    }
    tryAdd(value) {
        const selected = this.selector(value);
        const sizeBefore = this.selectedItems.size;
        safeAdd(this.selectedItems, selected);
        if (sizeBefore !== this.selectedItems.size) {
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
