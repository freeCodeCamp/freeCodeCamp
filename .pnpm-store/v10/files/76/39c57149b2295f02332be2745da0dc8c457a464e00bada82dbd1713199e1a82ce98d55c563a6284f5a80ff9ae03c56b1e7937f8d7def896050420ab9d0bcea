//
//                              list
//                            ┌──────┐
//             ┌──────────────┼─head │
//             │              │ tail─┼──────────────┐
//             │              └──────┘              │
//             ▼                                    ▼
//            item        item        item        item
//          ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
//  null ◀──┼─prev │◀───┼─prev │◀───┼─prev │◀───┼─prev │
//          │ next─┼───▶│ next─┼───▶│ next─┼───▶│ next─┼──▶ null
//          ├──────┤    ├──────┤    ├──────┤    ├──────┤
//          │ data │    │ data │    │ data │    │ data │
//          └──────┘    └──────┘    └──────┘    └──────┘
//

let releasedCursors = null;

export class List {
    static createItem(data) {
        return {
            prev: null,
            next: null,
            data
        };
    }

    constructor() {
        this.head = null;
        this.tail = null;
        this.cursor = null;
    }
    createItem(data) {
        return List.createItem(data);
    }

    // cursor helpers
    allocateCursor(prev, next) {
        let cursor;

        if (releasedCursors !== null) {
            cursor = releasedCursors;
            releasedCursors = releasedCursors.cursor;
            cursor.prev = prev;
            cursor.next = next;
            cursor.cursor = this.cursor;
        } else {
            cursor = {
                prev,
                next,
                cursor: this.cursor
            };
        }

        this.cursor = cursor;

        return cursor;
    }
    releaseCursor() {
        const { cursor } = this;

        this.cursor = cursor.cursor;
        cursor.prev = null;
        cursor.next = null;
        cursor.cursor = releasedCursors;
        releasedCursors = cursor;
    }
    updateCursors(prevOld, prevNew, nextOld, nextNew) {
        let { cursor } = this;

        while (cursor !== null) {
            if (cursor.prev === prevOld) {
                cursor.prev = prevNew;
            }

            if (cursor.next === nextOld) {
                cursor.next = nextNew;
            }

            cursor = cursor.cursor;
        }
    }
    *[Symbol.iterator]() {
        for (let cursor = this.head; cursor !== null; cursor = cursor.next) {
            yield cursor.data;
        }
    }

    // getters
    get size() {
        let size = 0;

        for (let cursor = this.head; cursor !== null; cursor = cursor.next) {
            size++;
        }

        return size;
    }
    get isEmpty() {
        return this.head === null;
    }
    get first() {
        return this.head && this.head.data;
    }
    get last() {
        return this.tail && this.tail.data;
    }

    // convertors
    fromArray(array) {
        let cursor = null;
        this.head = null;

        for (let data of array) {
            const item = List.createItem(data);

            if (cursor !== null) {
                cursor.next = item;
            } else {
                this.head = item;
            }

            item.prev = cursor;
            cursor = item;
        }

        this.tail = cursor;
        return this;
    }
    toArray() {
        return [...this];
    }
    toJSON() {
        return [...this];
    }

    // array-like methods
    forEach(fn, thisArg = this) {
        // push cursor
        const cursor = this.allocateCursor(null, this.head);

        while (cursor.next !== null) {
            const item = cursor.next;
            cursor.next = item.next;
            fn.call(thisArg, item.data, item, this);
        }

        // pop cursor
        this.releaseCursor();
    }
    forEachRight(fn, thisArg = this) {
        // push cursor
        const cursor = this.allocateCursor(this.tail, null);

        while (cursor.prev !== null) {
            const item = cursor.prev;
            cursor.prev = item.prev;
            fn.call(thisArg, item.data, item, this);
        }

        // pop cursor
        this.releaseCursor();
    }
    reduce(fn, initialValue, thisArg = this) {
        // push cursor
        let cursor = this.allocateCursor(null, this.head);
        let acc = initialValue;
        let item;

        while (cursor.next !== null) {
            item = cursor.next;
            cursor.next = item.next;

            acc = fn.call(thisArg, acc, item.data, item, this);
        }

        // pop cursor
        this.releaseCursor();

        return acc;
    }
    reduceRight(fn, initialValue, thisArg = this) {
        // push cursor
        let cursor = this.allocateCursor(this.tail, null);
        let acc = initialValue;
        let item;

        while (cursor.prev !== null) {
            item = cursor.prev;
            cursor.prev = item.prev;

            acc = fn.call(thisArg, acc, item.data, item, this);
        }

        // pop cursor
        this.releaseCursor();

        return acc;
    }
    some(fn, thisArg = this) {
        for (let cursor = this.head; cursor !== null; cursor = cursor.next) {
            if (fn.call(thisArg, cursor.data, cursor, this)) {
                return true;
            }
        }

        return false;
    }
    map(fn, thisArg = this) {
        const result = new List();

        for (let cursor = this.head; cursor !== null; cursor = cursor.next) {
            result.appendData(fn.call(thisArg, cursor.data, cursor, this));
        }

        return result;
    }
    filter(fn, thisArg = this) {
        const result = new List();

        for (let cursor = this.head; cursor !== null; cursor = cursor.next) {
            if (fn.call(thisArg, cursor.data, cursor, this)) {
                result.appendData(cursor.data);
            }
        }

        return result;
    }

    nextUntil(start, fn, thisArg = this) {
        if (start === null) {
            return;
        }

        // push cursor
        const cursor = this.allocateCursor(null, start);

        while (cursor.next !== null) {
            const item = cursor.next;
            cursor.next = item.next;
            if (fn.call(thisArg, item.data, item, this)) {
                break;
            }
        }

        // pop cursor
        this.releaseCursor();
    }
    prevUntil(start, fn, thisArg = this) {
        if (start === null) {
            return;
        }

        // push cursor
        const cursor = this.allocateCursor(start, null);

        while (cursor.prev !== null) {
            const item = cursor.prev;
            cursor.prev = item.prev;
            if (fn.call(thisArg, item.data, item, this)) {
                break;
            }
        }

        // pop cursor
        this.releaseCursor();
    }

    // mutation
    clear() {
        this.head = null;
        this.tail = null;
    }
    copy() {
        const result = new List();

        for (let data of this) {
            result.appendData(data);
        }

        return result;
    }
    prepend(item) {
        //      head
        //    ^
        // item
        this.updateCursors(null, item, this.head, item);

        // insert to the beginning of the list
        if (this.head !== null) {
            // new item <- first item
            this.head.prev = item;
            // new item -> first item
            item.next = this.head;
        } else {
            // if list has no head, then it also has no tail
            // in this case tail points to the new item
            this.tail = item;
        }

        // head always points to new item
        this.head = item;
        return this;
    }
    prependData(data) {
        return this.prepend(List.createItem(data));
    }
    append(item) {
        return this.insert(item);
    }
    appendData(data) {
        return this.insert(List.createItem(data));
    }
    insert(item, before = null) {
        if (before !== null) {
            // prev   before
            //      ^
            //     item
            this.updateCursors(before.prev, item, before, item);

            if (before.prev === null) {
                // insert to the beginning of list
                if (this.head !== before) {
                    throw new Error('before doesn\'t belong to list');
                }
                // since head points to before therefore list doesn't empty
                // no need to check tail
                this.head = item;
                before.prev = item;
                item.next = before;
                this.updateCursors(null, item);
            } else {
                // insert between two items
                before.prev.next = item;
                item.prev = before.prev;
                before.prev = item;
                item.next = before;
            }
        } else {
            // tail
            //      ^
            //      item
            this.updateCursors(this.tail, item, null, item);

            // insert to the ending of the list
            if (this.tail !== null) {
                // last item -> new item
                this.tail.next = item;
                // last item <- new item
                item.prev = this.tail;
            } else {
                // if list has no tail, then it also has no head
                // in this case head points to new item
                this.head = item;
            }

            // tail always points to new item
            this.tail = item;
        }

        return this;
    }
    insertData(data, before) {
        return this.insert(List.createItem(data), before);
    }
    remove(item) {
        //      item
        //       ^
        // prev     next
        this.updateCursors(item, item.prev, item, item.next);

        if (item.prev !== null) {
            item.prev.next = item.next;
        } else {
            if (this.head !== item) {
                throw new Error('item doesn\'t belong to list');
            }

            this.head = item.next;
        }

        if (item.next !== null) {
            item.next.prev = item.prev;
        } else {
            if (this.tail !== item) {
                throw new Error('item doesn\'t belong to list');
            }

            this.tail = item.prev;
        }

        item.prev = null;
        item.next = null;

        return item;
    }
    push(data) {
        this.insert(List.createItem(data));
    }
    pop() {
        return this.tail !== null ? this.remove(this.tail) : null;
    }
    unshift(data) {
        this.prepend(List.createItem(data));
    }
    shift() {
        return this.head !== null ? this.remove(this.head) : null;
    }
    prependList(list) {
        return this.insertList(list, this.head);
    }
    appendList(list) {
        return this.insertList(list);
    }
    insertList(list, before) {
        // ignore empty lists
        if (list.head === null) {
            return this;
        }

        if (before !== undefined && before !== null) {
            this.updateCursors(before.prev, list.tail, before, list.head);

            // insert in the middle of dist list
            if (before.prev !== null) {
                // before.prev <-> list.head
                before.prev.next = list.head;
                list.head.prev = before.prev;
            } else {
                this.head = list.head;
            }

            before.prev = list.tail;
            list.tail.next = before;
        } else {
            this.updateCursors(this.tail, list.tail, null, list.head);

            // insert to end of the list
            if (this.tail !== null) {
                // if destination list has a tail, then it also has a head,
                // but head doesn't change
                // dest tail -> source head
                this.tail.next = list.head;
                // dest tail <- source head
                list.head.prev = this.tail;
            } else {
                // if list has no a tail, then it also has no a head
                // in this case points head to new item
                this.head = list.head;
            }

            // tail always start point to new item
            this.tail = list.tail;
        }

        list.head = null;
        list.tail = null;
        return this;
    }
    replace(oldItem, newItemOrList) {
        if ('head' in newItemOrList) {
            this.insertList(newItemOrList, oldItem);
        } else {
            this.insert(newItemOrList, oldItem);
        }

        this.remove(oldItem);
    }
}
