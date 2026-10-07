/**
 * ES6 Map with additional `add` method to accumulate items.
 */
export class AccumulatorMap extends Map {
    get [Symbol.toStringTag]() {
        return 'AccumulatorMap';
    }
    add(key, item) {
        const group = this.get(key);
        if (group === undefined) {
            this.set(key, [item]);
        }
        else {
            group.push(item);
        }
    }
}
