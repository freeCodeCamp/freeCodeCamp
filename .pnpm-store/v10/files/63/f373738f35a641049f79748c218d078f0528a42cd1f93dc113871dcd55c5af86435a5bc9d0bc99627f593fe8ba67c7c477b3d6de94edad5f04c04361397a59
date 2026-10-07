'use strict';

//Const
const NOAH_ARK_CAPACITY = 3;

//List of formatting elements
class FormattingElementList {
    constructor(treeAdapter) {
        this.length = 0;
        this.entries = [];
        this.treeAdapter = treeAdapter;
        this.bookmark = null;
    }

    //Noah Ark's condition
    //OPTIMIZATION: at first we try to find possible candidates for exclusion using
    //lightweight heuristics without thorough attributes check.
    _getNoahArkConditionCandidates(newElement) {
        const candidates = [];

        if (this.length >= NOAH_ARK_CAPACITY) {
            const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
            const neTagName = this.treeAdapter.getTagName(newElement);
            const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

            for (let i = this.length - 1; i >= 0; i--) {
                const entry = this.entries[i];

                if (entry.type === FormattingElementList.MARKER_ENTRY) {
                    break;
                }

                const element = entry.element;
                const elementAttrs = this.treeAdapter.getAttrList(element);

                const isCandidate =
                    this.treeAdapter.getTagName(element) === neTagName &&
                    this.treeAdapter.getNamespaceURI(element) === neNamespaceURI &&
                    elementAttrs.length === neAttrsLength;

                if (isCandidate) {
                    candidates.push({ idx: i, attrs: elementAttrs });
                }
            }
        }

        return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
    }

    _ensureNoahArkCondition(newElement) {
        const candidates = this._getNoahArkConditionCandidates(newElement);
        let cLength = candidates.length;

        if (cLength) {
            const neAttrs = this.treeAdapter.getAttrList(newElement);
            const neAttrsLength = neAttrs.length;
            const neAttrsMap = Object.create(null);

            //NOTE: build attrs map for the new element so we can perform fast lookups
            for (let i = 0; i < neAttrsLength; i++) {
                const neAttr = neAttrs[i];

                neAttrsMap[neAttr.name] = neAttr.value;
            }

            for (let i = 0; i < neAttrsLength; i++) {
                for (let j = 0; j < cLength; j++) {
                    const cAttr = candidates[j].attrs[i];

                    if (neAttrsMap[cAttr.name] !== cAttr.value) {
                        candidates.splice(j, 1);
                        cLength--;
                    }

                    if (candidates.length < NOAH_ARK_CAPACITY) {
                        return;
                    }
                }
            }

            //NOTE: remove bottommost candidates until Noah's Ark condition will not be met
            for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
                this.entries.splice(candidates[i].idx, 1);
                this.length--;
            }
        }
    }

    //Mutations
    insertMarker() {
        this.entries.push({ type: FormattingElementList.MARKER_ENTRY });
        this.length++;
    }

    pushElement(element, token) {
        this._ensureNoahArkCondition(element);

        this.entries.push({
            type: FormattingElementList.ELEMENT_ENTRY,
            element: element,
            token: token
        });

        this.length++;
    }

    insertElementAfterBookmark(element, token) {
        let bookmarkIdx = this.length - 1;

        for (; bookmarkIdx >= 0; bookmarkIdx--) {
            if (this.entries[bookmarkIdx] === this.bookmark) {
                break;
            }
        }

        this.entries.splice(bookmarkIdx + 1, 0, {
            type: FormattingElementList.ELEMENT_ENTRY,
            element: element,
            token: token
        });

        this.length++;
    }

    removeEntry(entry) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (this.entries[i] === entry) {
                this.entries.splice(i, 1);
                this.length--;
                break;
            }
        }
    }

    clearToLastMarker() {
        while (this.length) {
            const entry = this.entries.pop();

            this.length--;

            if (entry.type === FormattingElementList.MARKER_ENTRY) {
                break;
            }
        }
    }

    //Search
    getElementEntryInScopeWithTagName(tagName) {
        for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];

            if (entry.type === FormattingElementList.MARKER_ENTRY) {
                return null;
            }

            if (this.treeAdapter.getTagName(entry.element) === tagName) {
                return entry;
            }
        }

        return null;
    }

    getElementEntry(element) {
        for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];

            if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
                return entry;
            }
        }

        return null;
    }
}

//Entry types
FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';

module.exports = FormattingElementList;
