'use strict';

module.exports = class SymbolTreeNode {
        constructor() {
                this.parent = null;
                this.previousSibling = null;
                this.nextSibling = null;

                this.firstChild = null;
                this.lastChild = null;

                /** This value is incremented anytime a children is added or removed */
                this.childrenVersion = 0;
                /** The last child object which has a cached index */
                this.childIndexCachedUpTo = null;

                /** This value represents the cached node index, as long as
                 * cachedIndexVersion matches with the childrenVersion of the parent */
                this.cachedIndex = -1;
                this.cachedIndexVersion = NaN; // NaN is never equal to anything
        }

        get isAttached() {
                return Boolean(this.parent || this.previousSibling || this.nextSibling);
        }

        get hasChildren() {
                return Boolean(this.firstChild);
        }

        childrenChanged() {
                /* jshint -W016 */
                // integer wrap around
                this.childrenVersion = (this.childrenVersion + 1) & 0xFFFFFFFF;
                this.childIndexCachedUpTo = null;
        }

        getCachedIndex(parentNode) {
                // (assumes parentNode is actually the parent)
                if (this.cachedIndexVersion !== parentNode.childrenVersion) {
                        this.cachedIndexVersion = NaN;
                        // cachedIndex is no longer valid
                        return -1;
                }

                return this.cachedIndex; // -1 if not cached
        }

        setCachedIndex(parentNode, index) {
                // (assumes parentNode is actually the parent)
                this.cachedIndexVersion = parentNode.childrenVersion;
                this.cachedIndex = index;
        }
};
