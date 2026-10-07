import { lengthZero, lengthLessThan, lengthAdd } from './length.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Allows to efficiently find a longest child at a given offset in a fixed node.
 * The requested offsets must increase monotonously.
*/
class NodeReader {
    constructor(node) {
        this.lastOffset = lengthZero;
        this.nextNodes = [node];
        this.offsets = [lengthZero];
        this.idxs = [];
    }
    /**
     * Returns the longest node at `offset` that satisfies the predicate.
     * @param offset must be greater than or equal to the last offset this method has been called with!
    */
    readLongestNodeAt(offset, predicate) {
        if (lengthLessThan(offset, this.lastOffset)) {
            throw new Error('Invalid offset');
        }
        this.lastOffset = offset;
        // Find the longest node of all those that are closest to the current offset.
        while (true) {
            const curNode = lastOrUndefined(this.nextNodes);
            if (!curNode) {
                return undefined;
            }
            const curNodeOffset = lastOrUndefined(this.offsets);
            if (lengthLessThan(offset, curNodeOffset)) {
                // The next best node is not here yet.
                // The reader must advance before a cached node is hit.
                return undefined;
            }
            if (lengthLessThan(curNodeOffset, offset)) {
                // The reader is ahead of the current node.
                if (lengthAdd(curNodeOffset, curNode.length) <= offset) {
                    // The reader is after the end of the current node.
                    this.nextNodeAfterCurrent();
                }
                else {
                    // The reader is somewhere in the current node.
                    const nextChildIdx = getNextChildIdx(curNode);
                    if (nextChildIdx !== -1) {
                        // Go to the first child and repeat.
                        this.nextNodes.push(curNode.getChild(nextChildIdx));
                        this.offsets.push(curNodeOffset);
                        this.idxs.push(nextChildIdx);
                    }
                    else {
                        // We don't have children
                        this.nextNodeAfterCurrent();
                    }
                }
            }
            else {
                // readerOffsetBeforeChange === curNodeOffset
                if (predicate(curNode)) {
                    this.nextNodeAfterCurrent();
                    return curNode;
                }
                else {
                    const nextChildIdx = getNextChildIdx(curNode);
                    // look for shorter node
                    if (nextChildIdx === -1) {
                        // There is no shorter node.
                        this.nextNodeAfterCurrent();
                        return undefined;
                    }
                    else {
                        // Descend into first child & repeat.
                        this.nextNodes.push(curNode.getChild(nextChildIdx));
                        this.offsets.push(curNodeOffset);
                        this.idxs.push(nextChildIdx);
                    }
                }
            }
        }
    }
    // Navigates to the longest node that continues after the current node.
    nextNodeAfterCurrent() {
        while (true) {
            const currentOffset = lastOrUndefined(this.offsets);
            const currentNode = lastOrUndefined(this.nextNodes);
            this.nextNodes.pop();
            this.offsets.pop();
            if (this.idxs.length === 0) {
                // We just popped the root node, there is no next node.
                break;
            }
            // Parent is not undefined, because idxs is not empty
            const parent = lastOrUndefined(this.nextNodes);
            const nextChildIdx = getNextChildIdx(parent, this.idxs[this.idxs.length - 1]);
            if (nextChildIdx !== -1) {
                this.nextNodes.push(parent.getChild(nextChildIdx));
                this.offsets.push(lengthAdd(currentOffset, currentNode.length));
                this.idxs[this.idxs.length - 1] = nextChildIdx;
                break;
            }
            else {
                this.idxs.pop();
            }
            // We fully consumed the parent.
            // Current node is now parent, so call nextNodeAfterCurrent again
        }
    }
}
function getNextChildIdx(node, curIdx = -1) {
    while (true) {
        curIdx++;
        if (curIdx >= node.childrenLength) {
            return -1;
        }
        if (node.getChild(curIdx)) {
            return curIdx;
        }
    }
}
function lastOrUndefined(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

export { NodeReader };
