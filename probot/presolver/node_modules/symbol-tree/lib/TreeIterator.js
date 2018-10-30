'use strict';

const TREE = Symbol();
const ROOT = Symbol();
const NEXT = Symbol();
const ITERATE_FUNC = Symbol();

class TreeIterator {
        constructor(tree, root, firstResult, iterateFunction) {
                this[TREE] = tree;
                this[ROOT] = root;
                this[NEXT] = firstResult;
                this[ITERATE_FUNC] = iterateFunction;
        }

        next() {
                const tree = this[TREE];
                const iterateFunc = this[ITERATE_FUNC];
                const root = this[ROOT];

                if (!this[NEXT]) {
                        return {
                                done: true,
                                value: root,
                        };
                }

                const value = this[NEXT];

                if (iterateFunc === 1) {
                        this[NEXT] = tree._node(value).previousSibling;
                }
                else if (iterateFunc === 2) {
                        this[NEXT] = tree._node(value).nextSibling;
                }
                else if (iterateFunc === 3) {
                        this[NEXT] = tree._node(value).parent;
                }
                else if (iterateFunc === 4) {
                        this[NEXT] = tree.preceding(value, {root: root});
                }
                else /* if (iterateFunc === 5)*/ {
                        this[NEXT] = tree.following(value, {root: root});
                }

                return {
                        done: false,
                        value: value,
                };
        }
}

Object.defineProperty(TreeIterator.prototype, Symbol.iterator, {
        value: function() {
                return this;
        },
        writable: false,
});

TreeIterator.PREV = 1;
TreeIterator.NEXT = 2;
TreeIterator.PARENT = 3;
TreeIterator.PRECEDING = 4;
TreeIterator.FOLLOWING = 5;

Object.freeze(TreeIterator);
Object.freeze(TreeIterator.prototype);

module.exports = TreeIterator;
