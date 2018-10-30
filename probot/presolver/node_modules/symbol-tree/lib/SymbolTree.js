'use strict';

/**
 * @module symbol-tree
 * @author Joris van der Wel <joris@jorisvanderwel.com>
 */

const SymbolTreeNode = require('./SymbolTreeNode');
const TreePosition = require('./TreePosition');
const TreeIterator = require('./TreeIterator');

function returnTrue() {
        return true;
}

function reverseArrayIndex(array, reverseIndex) {
        return array[array.length - 1 - reverseIndex]; // no need to check `index >= 0`
}

class SymbolTree {

        /**
         * @constructor
         * @alias module:symbol-tree
         * @param {string} [description='SymbolTree data'] Description used for the Symbol
         */
        constructor(description) {
                this.symbol = Symbol(description || 'SymbolTree data');
        }

        /**
         * You can use this function to (optionally) initialize an object right after its creation,
         * to take advantage of V8's fast properties. Also useful if you would like to
         * freeze your object.
         *
         * `O(1)`
         *
         * @method
         * @alias module:symbol-tree#initialize
         * @param {Object} object
         * @return {Object} object
         */
        initialize(object) {
                this._node(object);

                return object;
        }

        _node(object) {
                if (!object) {
                        return null;
                }

                const node = object[this.symbol];

                if (node) {
                        return node;
                }

                return (object[this.symbol] = new SymbolTreeNode());
        }

        /**
         * Returns `true` if the object has any children. Otherwise it returns `false`.
         *
         * * `O(1)`
         *
         * @method hasChildren
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Boolean}
         */
        hasChildren(object) {
                return this._node(object).hasChildren;
        }

        /**
         * Returns the first child of the given object.
         *
         * * `O(1)`
         *
         * @method firstChild
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        firstChild(object) {
                return this._node(object).firstChild;
        }

        /**
         * Returns the last child of the given object.
         *
         * * `O(1)`
         *
         * @method lastChild
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        lastChild(object) {
                return this._node(object).lastChild;
        }

        /**
         * Returns the previous sibling of the given object.
         *
         * * `O(1)`
         *
         * @method previousSibling
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        previousSibling(object) {
                return this._node(object).previousSibling;
        }

        /**
         * Returns the next sibling of the given object.
         *
         * * `O(1)`
         *
         * @method nextSibling
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        nextSibling(object) {
                return this._node(object).nextSibling;
        }

        /**
         * Return the parent of the given object.
         *
         * * `O(1)`
         *
         * @method parent
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        parent(object) {
                return this._node(object).parent;
        }

        /**
         * Find the inclusive descendant that is last in tree order of the given object.
         *
         * * `O(n)` (worst case) where `n` is the depth of the subtree of `object`
         *
         * @method lastInclusiveDescendant
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object}
         */
        lastInclusiveDescendant(object) {
                let lastChild;
                let current = object;

                while ((lastChild = this._node(current).lastChild)) {
                        current = lastChild;
                }

                return current;
        }

        /**
         * Find the preceding object (A) of the given object (B).
         * An object A is preceding an object B if A and B are in the same tree
         * and A comes before B in tree order.
         *
         * * `O(n)` (worst case)
         * * `O(1)` (amortized when walking the entire tree)
         *
         * @method preceding
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @param {Object} [options]
         * @param {Object} [options.root] If set, `root` must be an inclusive ancestor
         *        of the return value (or else null is returned). This check _assumes_
         *        that `root` is also an inclusive ancestor of the given `object`
         * @return {?Object}
         */
        preceding(object, options) {
                const treeRoot = options && options.root;

                if (object === treeRoot) {
                        return null;
                }

                const previousSibling = this._node(object).previousSibling;

                if (previousSibling) {
                        return this.lastInclusiveDescendant(previousSibling);
                }

                // if there is no previous sibling return the parent (might be null)
                return this._node(object).parent;
        }

        /**
         * Find the following object (A) of the given object (B).
         * An object A is following an object B if A and B are in the same tree
         * and A comes after B in tree order.
         *
         * * `O(n)` (worst case) where `n` is the amount of objects in the entire tree
         * * `O(1)` (amortized when walking the entire tree)
         *
         * @method following
         * @memberOf module:symbol-tree#
         * @param {!Object} object
         * @param {Object} [options]
         * @param {Object} [options.root] If set, `root` must be an inclusive ancestor
         *        of the return value (or else null is returned). This check _assumes_
         *        that `root` is also an inclusive ancestor of the given `object`
         * @param {Boolean} [options.skipChildren=false] If set, ignore the children of `object`
         * @return {?Object}
         */
        following(object, options) {
                const treeRoot = options && options.root;
                const skipChildren = options && options.skipChildren;

                const firstChild = !skipChildren && this._node(object).firstChild;

                if (firstChild) {
                        return firstChild;
                }

                let current = object;

                do {
                        if (current === treeRoot) {
                                return null;
                        }

                        const nextSibling = this._node(current).nextSibling;

                        if (nextSibling) {
                                return nextSibling;
                        }

                        current = this._node(current).parent;
                } while (current);

                return null;
        }

        /**
         * Append all children of the given object to an array.
         *
         * * `O(n)` where `n` is the amount of children of the given `parent`
         *
         * @method childrenToArray
         * @memberOf module:symbol-tree#
         * @param {Object} parent
         * @param {Object} [options]
         * @param {Object[]} [options.array=[]]
         * @param {Function} [options.filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [options.thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        childrenToArray(parent, options) {
                const array   = (options && options.array) || [];
                const filter  = (options && options.filter) || returnTrue;
                const thisArg = (options && options.thisArg) || undefined;

                const parentNode = this._node(parent);
                let object = parentNode.firstChild;
                let index = 0;

                while (object) {
                        const node = this._node(object);
                        node.setCachedIndex(parentNode, index);

                        if (filter.call(thisArg, object)) {
                                array.push(object);
                        }

                        object = node.nextSibling;
                        ++index;
                }

                return array;
        }

        /**
         * Append all inclusive ancestors of the given object to an array.
         *
         * * `O(n)` where `n` is the amount of ancestors of the given `object`
         *
         * @method ancestorsToArray
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @param {Object} [options]
         * @param {Object[]} [options.array=[]]
         * @param {Function} [options.filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [options.thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        ancestorsToArray(object, options) {
                const array   = (options && options.array) || [];
                const filter  = (options && options.filter) || returnTrue;
                const thisArg = (options && options.thisArg) || undefined;

                let ancestor = object;

                while (ancestor) {
                        if (filter.call(thisArg, ancestor)) {
                                array.push(ancestor);
                        }
                        ancestor = this._node(ancestor).parent;
                }

                return array;
        }

        /**
         * Append all descendants of the given object to an array (in tree order).
         *
         * * `O(n)` where `n` is the amount of objects in the sub-tree of the given `object`
         *
         * @method treeToArray
         * @memberOf module:symbol-tree#
         * @param {Object} root
         * @param {Object} [options]
         * @param {Object[]} [options.array=[]]
         * @param {Function} [options.filter] Function to test each object before it is added to the array.
         *                            Invoked with arguments (object). Should return `true` if an object
         *                            is to be included.
         * @param {*} [options.thisArg] Value to use as `this` when executing `filter`.
         * @return {Object[]}
         */
        treeToArray(root, options) {
                const array   = (options && options.array) || [];
                const filter  = (options && options.filter) || returnTrue;
                const thisArg = (options && options.thisArg) || undefined;

                let object = root;

                while (object) {
                        if (filter.call(thisArg, object)) {
                                array.push(object);
                        }
                        object = this.following(object, {root: root});
                }

                return array;
        }

        /**
         * Iterate over all children of the given object
         *
         * * `O(1)` for a single iteration
         *
         * @method childrenIterator
         * @memberOf module:symbol-tree#
         * @param {Object} parent
         * @param {Object} [options]
         * @param {Boolean} [options.reverse=false]
         * @return {Object} An iterable iterator (ES6)
         */
        childrenIterator(parent, options) {
                const reverse = options && options.reverse;
                const parentNode = this._node(parent);

                return new TreeIterator(
                        this,
                        parent,
                        reverse ? parentNode.lastChild : parentNode.firstChild,
                        reverse ? TreeIterator.PREV : TreeIterator.NEXT
                );
        }

        /**
         * Iterate over all the previous siblings of the given object. (in reverse tree order)
         *
         * * `O(1)` for a single iteration
         *
         * @method previousSiblingsIterator
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object} An iterable iterator (ES6)
         */
        previousSiblingsIterator(object) {
                return new TreeIterator(
                        this,
                        object,
                        this._node(object).previousSibling,
                        TreeIterator.PREV
                );
        }

        /**
         * Iterate over all the next siblings of the given object. (in tree order)
         *
         * * `O(1)` for a single iteration
         *
         * @method nextSiblingsIterator
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object} An iterable iterator (ES6)
         */
        nextSiblingsIterator(object) {
                return new TreeIterator(
                        this,
                        object,
                        this._node(object).nextSibling,
                        TreeIterator.NEXT
                );
        }

        /**
         * Iterate over all inclusive ancestors of the given object
         *
         * * `O(1)` for a single iteration
         *
         * @method ancestorsIterator
         * @memberOf module:symbol-tree#
         * @param {Object} object
         * @return {Object} An iterable iterator (ES6)
         */
        ancestorsIterator(object) {
                return new TreeIterator(
                        this,
                        object,
                        object,
                        TreeIterator.PARENT
                );
        }

        /**
         * Iterate over all descendants of the given object (in tree order).
         *
         * Where `n` is the amount of objects in the sub-tree of the given `root`:
         *
         * * `O(n)` (worst case for a single iteration)
         * * `O(n)` (amortized, when completing the iterator)
         *
         * @method treeIterator
         * @memberOf module:symbol-tree#
         * @param {Object} root
         * @param {Object} options
         * @param {Boolean} [options.reverse=false]
         * @return {Object} An iterable iterator (ES6)
         */
        treeIterator(root, options) {
                const reverse = options && options.reverse;

                return new TreeIterator(
                        this,
                        root,
                        reverse ? this.lastInclusiveDescendant(root) : root,
                        reverse ? TreeIterator.PRECEDING : TreeIterator.FOLLOWING
                );
        }

        /**
         * Find the index of the given object (the number of preceding siblings).
         *
         * * `O(n)` where `n` is the amount of preceding siblings
         * * `O(1)` (amortized, if the tree is not modified)
         *
         * @method index
         * @memberOf module:symbol-tree#
         * @param {Object} child
         * @return {Number} The number of preceding siblings, or -1 if the object has no parent
         */
        index(child) {
                const childNode = this._node(child);
                const parentNode = this._node(childNode.parent);

                if (!parentNode) {
                        // In principal, you could also find out the number of preceding siblings
                        // for objects that do not have a parent. This method limits itself only to
                        // objects that have a parent because that lets us optimize more.
                        return -1;
                }

                let currentIndex = childNode.getCachedIndex(parentNode);

                if (currentIndex >= 0) {
                        return currentIndex;
                }

                currentIndex = 0;
                let object = parentNode.firstChild;

                if (parentNode.childIndexCachedUpTo) {
                        const cachedUpToNode = this._node(parentNode.childIndexCachedUpTo);
                        object = cachedUpToNode.nextSibling;
                        currentIndex = cachedUpToNode.getCachedIndex(parentNode) + 1;
                }

                while (object) {
                        const node = this._node(object);
                        node.setCachedIndex(parentNode, currentIndex);

                        if (object === child) {
                                break;
                        }

                        ++currentIndex;
                        object = node.nextSibling;
                }

                parentNode.childIndexCachedUpTo = child;

                return currentIndex;
        }

        /**
         * Calculate the number of children.
         *
         * * `O(n)` where `n` is the amount of children
         * * `O(1)` (amortized, if the tree is not modified)
         *
         * @method childrenCount
         * @memberOf module:symbol-tree#
         * @param {Object} parent
         * @return {Number}
         */
        childrenCount(parent) {
                const parentNode = this._node(parent);

                if (!parentNode.lastChild) {
                        return 0;
                }

                return this.index(parentNode.lastChild) + 1;
        }

        /**
         * Compare the position of an object relative to another object. A bit set is returned:
         *
         * <ul>
         *     <li>DISCONNECTED : 1</li>
         *     <li>PRECEDING : 2</li>
         *     <li>FOLLOWING : 4</li>
         *     <li>CONTAINS : 8</li>
         *     <li>CONTAINED_BY : 16</li>
         * </ul>
         *
         * The semantics are the same as compareDocumentPosition in DOM, with the exception that
         * DISCONNECTED never occurs with any other bit.
         *
         * where `n` and `m` are the amount of ancestors of `left` and `right`;
         * where `o` is the amount of children of the lowest common ancestor of `left` and `right`:
         *
         * * `O(n + m + o)` (worst case)
         * * `O(n + m)` (amortized, if the tree is not modified)
         *
         * @method compareTreePosition
         * @memberOf module:symbol-tree#
         * @param {Object} left
         * @param {Object} right
         * @return {Number}
         */
        compareTreePosition(left, right) {
                // In DOM terms:
                // left = reference / context object
                // right = other

                if (left === right) {
                        return 0;
                }

                /* jshint -W016 */

                const leftAncestors = []; { // inclusive
                        let leftAncestor = left;

                        while (leftAncestor) {
                                if (leftAncestor === right) {
                                        return TreePosition.CONTAINS | TreePosition.PRECEDING;
                                        // other is ancestor of reference
                                }

                                leftAncestors.push(leftAncestor);
                                leftAncestor = this.parent(leftAncestor);
                        }
                }


                const rightAncestors = []; {
                        let rightAncestor = right;

                        while (rightAncestor) {
                                if (rightAncestor === left) {
                                        return TreePosition.CONTAINED_BY | TreePosition.FOLLOWING;
                                }

                                rightAncestors.push(rightAncestor);
                                rightAncestor = this.parent(rightAncestor);
                        }
                }


                const root = reverseArrayIndex(leftAncestors, 0);

                if (!root || root !== reverseArrayIndex(rightAncestors, 0)) {
                        // note: unlike DOM, preceding / following is not set here
                        return TreePosition.DISCONNECTED;
                }

                // find the lowest common ancestor
                let commonAncestorIndex = 0;
                const ancestorsMinLength = Math.min(leftAncestors.length, rightAncestors.length);

                for (let i = 0; i < ancestorsMinLength; ++i) {
                        const leftAncestor  = reverseArrayIndex(leftAncestors, i);
                        const rightAncestor = reverseArrayIndex(rightAncestors, i);

                        if (leftAncestor !== rightAncestor) {
                                break;
                        }

                        commonAncestorIndex = i;
                }

                // indexes within the common ancestor
                const leftIndex  = this.index(reverseArrayIndex(leftAncestors, commonAncestorIndex + 1));
                const rightIndex = this.index(reverseArrayIndex(rightAncestors, commonAncestorIndex + 1));

                return rightIndex < leftIndex
                        ? TreePosition.PRECEDING
                        : TreePosition.FOLLOWING;
        }

        /**
         * Remove the object from this tree.
         * Has no effect if already removed.
         *
         * * `O(1)`
         *
         * @method remove
         * @memberOf module:symbol-tree#
         * @param {Object} removeObject
         * @return {Object} removeObject
         */
        remove(removeObject) {
                const removeNode = this._node(removeObject);
                const parentNode = this._node(removeNode.parent);
                const prevNode = this._node(removeNode.previousSibling);
                const nextNode = this._node(removeNode.nextSibling);

                if (parentNode) {
                        if (parentNode.firstChild === removeObject) {
                                parentNode.firstChild = removeNode.nextSibling;
                        }

                        if (parentNode.lastChild === removeObject) {
                                parentNode.lastChild = removeNode.previousSibling;
                        }
                }

                if (prevNode) {
                        prevNode.nextSibling = removeNode.nextSibling;
                }

                if (nextNode) {
                        nextNode.previousSibling = removeNode.previousSibling;
                }

                removeNode.parent = null;
                removeNode.previousSibling = null;
                removeNode.nextSibling = null;

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return removeObject;
        }

        /**
         * Insert the given object before the reference object.
         * `newObject` is now the previous sibling of `referenceObject`.
         *
         * * `O(1)`
         *
         * @method insertBefore
         * @memberOf module:symbol-tree#
         * @param {Object} referenceObject
         * @param {Object} newObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertBefore(referenceObject, newObject) {
                const referenceNode = this._node(referenceObject);
                const prevNode = this._node(referenceNode.previousSibling);
                const newNode = this._node(newObject);
                const parentNode = this._node(referenceNode.parent);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                newNode.parent = referenceNode.parent;
                newNode.previousSibling = referenceNode.previousSibling;
                newNode.nextSibling = referenceObject;
                referenceNode.previousSibling = newObject;

                if (prevNode) {
                        prevNode.nextSibling = newObject;
                }

                if (parentNode && parentNode.firstChild === referenceObject) {
                        parentNode.firstChild = newObject;
                }

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return newObject;
        }

        /**
         * Insert the given object after the reference object.
         * `newObject` is now the next sibling of `referenceObject`.
         *
         * * `O(1)`
         *
         * @method insertAfter
         * @memberOf module:symbol-tree#
         * @param {Object} referenceObject
         * @param {Object} newObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        insertAfter(referenceObject, newObject) {
                const referenceNode = this._node(referenceObject);
                const nextNode = this._node(referenceNode.nextSibling);
                const newNode = this._node(newObject);
                const parentNode = this._node(referenceNode.parent);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                newNode.parent = referenceNode.parent;
                newNode.previousSibling = referenceObject;
                newNode.nextSibling = referenceNode.nextSibling;
                referenceNode.nextSibling = newObject;

                if (nextNode) {
                        nextNode.previousSibling = newObject;
                }

                if (parentNode && parentNode.lastChild === referenceObject) {
                        parentNode.lastChild = newObject;
                }

                if (parentNode) {
                        parentNode.childrenChanged();
                }

                return newObject;
        }

        /**
         * Insert the given object as the first child of the given reference object.
         * `newObject` is now the first child of `referenceObject`.
         *
         * * `O(1)`
         *
         * @method prependChild
         * @memberOf module:symbol-tree#
         * @param {Object} referenceObject
         * @param {Object} newObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        prependChild(referenceObject, newObject) {
                const referenceNode = this._node(referenceObject);
                const newNode = this._node(newObject);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                if (referenceNode.hasChildren) {
                        this.insertBefore(referenceNode.firstChild, newObject);
                }
                else {
                        newNode.parent = referenceObject;
                        referenceNode.firstChild = newObject;
                        referenceNode.lastChild = newObject;
                        referenceNode.childrenChanged();
                }

                return newObject;
        }

        /**
         * Insert the given object as the last child of the given reference object.
         * `newObject` is now the last child of `referenceObject`.
         *
         * * `O(1)`
         *
         * @method appendChild
         * @memberOf module:symbol-tree#
         * @param {Object} referenceObject
         * @param {Object} newObject
         * @throws {Error} If the newObject is already present in this SymbolTree
         * @return {Object} newObject
         */
        appendChild(referenceObject, newObject) {
                const referenceNode = this._node(referenceObject);
                const newNode = this._node(newObject);

                if (newNode.isAttached) {
                        throw Error('Given object is already present in this SymbolTree, remove it first');
                }

                if (referenceNode.hasChildren) {
                        this.insertAfter(referenceNode.lastChild, newObject);
                }
                else {
                        newNode.parent = referenceObject;
                        referenceNode.firstChild = newObject;
                        referenceNode.lastChild = newObject;
                        referenceNode.childrenChanged();
                }

                return newObject;
        }
}

module.exports = SymbolTree;
SymbolTree.TreePosition = TreePosition;
