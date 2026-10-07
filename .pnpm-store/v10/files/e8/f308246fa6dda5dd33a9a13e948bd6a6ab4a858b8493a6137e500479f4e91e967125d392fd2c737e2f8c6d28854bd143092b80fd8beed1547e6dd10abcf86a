import { Tone } from "../Tone.js";
import { isDefined } from "./TypeCheck.js";
import { assert } from "./Debug.js";
/**
 * Similar to Tone.Timeline, but all events represent
 * intervals with both "time" and "duration" times. The
 * events are placed in a tree structure optimized
 * for querying an intersection point with the timeline
 * events. Internally uses an [Interval Tree](https://en.wikipedia.org/wiki/Interval_tree)
 * to represent the data.
 * @internal
 */
export class IntervalTimeline extends Tone {
    constructor() {
        super(...arguments);
        this.name = "IntervalTimeline";
        /**
         * The root node of the inteval tree
         */
        this._root = null;
        /**
         * Keep track of the length of the timeline.
         */
        this._length = 0;
    }
    /**
     * The event to add to the timeline. All events must
     * have a time and duration value
     * @param  event  The event to add to the timeline
     */
    add(event) {
        assert(isDefined(event.time), "Events must have a time property");
        assert(isDefined(event.duration), "Events must have a duration parameter");
        event.time = event.time.valueOf();
        let node = new IntervalNode(event.time, event.time + event.duration, event);
        if (this._root === null) {
            this._root = node;
        }
        else {
            this._root.insert(node);
        }
        this._length++;
        // Restructure tree to be balanced
        while (node !== null) {
            node.updateHeight();
            node.updateMax();
            this._rebalance(node);
            node = node.parent;
        }
        return this;
    }
    /**
     * Remove an event from the timeline.
     * @param  event  The event to remove from the timeline
     */
    remove(event) {
        if (this._root !== null) {
            const results = [];
            this._root.search(event.time, results);
            for (const node of results) {
                if (node.event === event) {
                    this._removeNode(node);
                    this._length--;
                    break;
                }
            }
        }
        return this;
    }
    /**
     * The number of items in the timeline.
     * @readOnly
     */
    get length() {
        return this._length;
    }
    /**
     * Remove events whose time time is after the given time
     * @param  after  The time to query.
     */
    cancel(after) {
        this.forEachFrom(after, (event) => this.remove(event));
        return this;
    }
    /**
     * Set the root node as the given node
     */
    _setRoot(node) {
        this._root = node;
        if (this._root !== null) {
            this._root.parent = null;
        }
    }
    /**
     * Replace the references to the node in the node's parent
     * with the replacement node.
     */
    _replaceNodeInParent(node, replacement) {
        if (node.parent !== null) {
            if (node.isLeftChild()) {
                node.parent.left = replacement;
            }
            else {
                node.parent.right = replacement;
            }
            this._rebalance(node.parent);
        }
        else {
            this._setRoot(replacement);
        }
    }
    /**
     * Remove the node from the tree and replace it with
     * a successor which follows the schema.
     */
    _removeNode(node) {
        if (node.left === null && node.right === null) {
            this._replaceNodeInParent(node, null);
        }
        else if (node.right === null) {
            this._replaceNodeInParent(node, node.left);
        }
        else if (node.left === null) {
            this._replaceNodeInParent(node, node.right);
        }
        else {
            const balance = node.getBalance();
            let replacement;
            let temp = null;
            if (balance > 0) {
                if (node.left.right === null) {
                    replacement = node.left;
                    replacement.right = node.right;
                    temp = replacement;
                }
                else {
                    replacement = node.left.right;
                    while (replacement.right !== null) {
                        replacement = replacement.right;
                    }
                    if (replacement.parent) {
                        replacement.parent.right = replacement.left;
                        temp = replacement.parent;
                        replacement.left = node.left;
                        replacement.right = node.right;
                    }
                }
            }
            else if (node.right.left === null) {
                replacement = node.right;
                replacement.left = node.left;
                temp = replacement;
            }
            else {
                replacement = node.right.left;
                while (replacement.left !== null) {
                    replacement = replacement.left;
                }
                if (replacement.parent) {
                    replacement.parent.left = replacement.right;
                    temp = replacement.parent;
                    replacement.left = node.left;
                    replacement.right = node.right;
                }
            }
            if (node.parent !== null) {
                if (node.isLeftChild()) {
                    node.parent.left = replacement;
                }
                else {
                    node.parent.right = replacement;
                }
            }
            else {
                this._setRoot(replacement);
            }
            if (temp) {
                this._rebalance(temp);
            }
        }
        node.dispose();
    }
    /**
     * Rotate the tree to the left
     */
    _rotateLeft(node) {
        const parent = node.parent;
        const isLeftChild = node.isLeftChild();
        // Make node.right the new root of this sub tree (instead of node)
        const pivotNode = node.right;
        if (pivotNode) {
            node.right = pivotNode.left;
            pivotNode.left = node;
        }
        if (parent !== null) {
            if (isLeftChild) {
                parent.left = pivotNode;
            }
            else {
                parent.right = pivotNode;
            }
        }
        else {
            this._setRoot(pivotNode);
        }
    }
    /**
     * Rotate the tree to the right
     */
    _rotateRight(node) {
        const parent = node.parent;
        const isLeftChild = node.isLeftChild();
        // Make node.left the new root of this sub tree (instead of node)
        const pivotNode = node.left;
        if (pivotNode) {
            node.left = pivotNode.right;
            pivotNode.right = node;
        }
        if (parent !== null) {
            if (isLeftChild) {
                parent.left = pivotNode;
            }
            else {
                parent.right = pivotNode;
            }
        }
        else {
            this._setRoot(pivotNode);
        }
    }
    /**
     * Balance the BST
     */
    _rebalance(node) {
        const balance = node.getBalance();
        if (balance > 1 && node.left) {
            if (node.left.getBalance() < 0) {
                this._rotateLeft(node.left);
            }
            else {
                this._rotateRight(node);
            }
        }
        else if (balance < -1 && node.right) {
            if (node.right.getBalance() > 0) {
                this._rotateRight(node.right);
            }
            else {
                this._rotateLeft(node);
            }
        }
    }
    /**
     * Get an event whose time and duration span the give time. Will
     * return the match whose "time" value is closest to the given time.
     * @return  The event which spans the desired time
     */
    get(time) {
        if (this._root !== null) {
            const results = [];
            this._root.search(time, results);
            if (results.length > 0) {
                let max = results[0];
                for (let i = 1; i < results.length; i++) {
                    if (results[i].low > max.low) {
                        max = results[i];
                    }
                }
                return max.event;
            }
        }
        return null;
    }
    /**
     * Iterate over everything in the timeline.
     * @param  callback The callback to invoke with every item
     */
    forEach(callback) {
        if (this._root !== null) {
            const allNodes = [];
            this._root.traverse((node) => allNodes.push(node));
            allNodes.forEach((node) => {
                if (node.event) {
                    callback(node.event);
                }
            });
        }
        return this;
    }
    /**
     * Iterate over everything in the array in which the given time
     * overlaps with the time and duration time of the event.
     * @param  time The time to check if items are overlapping
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time, callback) {
        if (this._root !== null) {
            const results = [];
            this._root.search(time, results);
            results.forEach((node) => {
                if (node.event) {
                    callback(node.event);
                }
            });
        }
        return this;
    }
    /**
     * Iterate over everything in the array in which the time is greater
     * than or equal to the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time, callback) {
        if (this._root !== null) {
            const results = [];
            this._root.searchAfter(time, results);
            results.forEach((node) => {
                if (node.event) {
                    callback(node.event);
                }
            });
        }
        return this;
    }
    /**
     * Clean up
     */
    dispose() {
        super.dispose();
        if (this._root !== null) {
            this._root.traverse((node) => node.dispose());
        }
        this._root = null;
        return this;
    }
}
//-------------------------------------
// 	INTERVAL NODE HELPER
//-------------------------------------
/**
 * Represents a node in the binary search tree, with the addition
 * of a "high" value which keeps track of the highest value of
 * its children.
 * References:
 * https://brooknovak.wordpress.com/2013/12/07/augmented-interval-tree-in-c/
 * http://www.mif.vu.lt/~valdas/ALGORITMAI/LITERATURA/Cormen/Cormen.pdf
 * @param low
 * @param high
 */
class IntervalNode {
    constructor(low, high, event) {
        // the nodes to the left
        this._left = null;
        // the nodes to the right
        this._right = null;
        // the parent node
        this.parent = null;
        // the number of child nodes
        this.height = 0;
        this.event = event;
        // the low value
        this.low = low;
        // the high value
        this.high = high;
        // the high value for this and all child nodes
        this.max = this.high;
    }
    /**
     * Insert a node into the correct spot in the tree
     */
    insert(node) {
        if (node.low <= this.low) {
            if (this.left === null) {
                this.left = node;
            }
            else {
                this.left.insert(node);
            }
        }
        else if (this.right === null) {
            this.right = node;
        }
        else {
            this.right.insert(node);
        }
    }
    /**
     * Search the tree for nodes which overlap
     * with the given point
     * @param  point  The point to query
     * @param  results  The array to put the results
     */
    search(point, results) {
        // If p is to the right of the rightmost point of any interval
        // in this node and all children, there won't be any matches.
        if (point > this.max) {
            return;
        }
        // Search left children
        if (this.left !== null) {
            this.left.search(point, results);
        }
        // Check this node
        if (this.low <= point && this.high > point) {
            results.push(this);
        }
        // If p is to the left of the time of this interval,
        // then it can't be in any child to the right.
        if (this.low > point) {
            return;
        }
        // Search right children
        if (this.right !== null) {
            this.right.search(point, results);
        }
    }
    /**
     * Search the tree for nodes which are less
     * than the given point
     * @param  point  The point to query
     * @param  results  The array to put the results
     */
    searchAfter(point, results) {
        // Check this node
        if (this.low >= point) {
            results.push(this);
            if (this.left !== null) {
                this.left.searchAfter(point, results);
            }
        }
        // search the right side
        if (this.right !== null) {
            this.right.searchAfter(point, results);
        }
    }
    /**
     * Invoke the callback on this element and both it's branches
     * @param  {Function}  callback
     */
    traverse(callback) {
        callback(this);
        if (this.left !== null) {
            this.left.traverse(callback);
        }
        if (this.right !== null) {
            this.right.traverse(callback);
        }
    }
    /**
     * Update the height of the node
     */
    updateHeight() {
        if (this.left !== null && this.right !== null) {
            this.height = Math.max(this.left.height, this.right.height) + 1;
        }
        else if (this.right !== null) {
            this.height = this.right.height + 1;
        }
        else if (this.left !== null) {
            this.height = this.left.height + 1;
        }
        else {
            this.height = 0;
        }
    }
    /**
     * Update the height of the node
     */
    updateMax() {
        this.max = this.high;
        if (this.left !== null) {
            this.max = Math.max(this.max, this.left.max);
        }
        if (this.right !== null) {
            this.max = Math.max(this.max, this.right.max);
        }
    }
    /**
     * The balance is how the leafs are distributed on the node
     * @return  Negative numbers are balanced to the right
     */
    getBalance() {
        let balance = 0;
        if (this.left !== null && this.right !== null) {
            balance = this.left.height - this.right.height;
        }
        else if (this.left !== null) {
            balance = this.left.height + 1;
        }
        else if (this.right !== null) {
            balance = -(this.right.height + 1);
        }
        return balance;
    }
    /**
     * @returns true if this node is the left child of its parent
     */
    isLeftChild() {
        return this.parent !== null && this.parent.left === this;
    }
    /**
     * get/set the left node
     */
    get left() {
        return this._left;
    }
    set left(node) {
        this._left = node;
        if (node !== null) {
            node.parent = this;
        }
        this.updateHeight();
        this.updateMax();
    }
    /**
     * get/set the right node
     */
    get right() {
        return this._right;
    }
    set right(node) {
        this._right = node;
        if (node !== null) {
            node.parent = this;
        }
        this.updateHeight();
        this.updateMax();
    }
    /**
     * null out references.
     */
    dispose() {
        this.parent = null;
        this._left = null;
        this._right = null;
        this.event = null;
    }
}
//# sourceMappingURL=IntervalTimeline.js.map