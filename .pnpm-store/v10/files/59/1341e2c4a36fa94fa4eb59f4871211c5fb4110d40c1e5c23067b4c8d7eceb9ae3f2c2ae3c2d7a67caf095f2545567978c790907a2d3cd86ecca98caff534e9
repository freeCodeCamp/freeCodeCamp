import { BugIndicatingError } from '../../../../../base/common/errors.js';
import { CursorColumns } from '../../../core/cursorColumns.js';
import { lengthToObj, lengthGetLineCount, lengthAdd, lengthZero } from './length.js';
import { SmallImmutableSet } from './smallImmutableSet.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The base implementation for all AST nodes.
*/
class BaseAstNode {
    /**
     * The length of the entire node, which should equal the sum of lengths of all children.
    */
    get length() {
        return this._length;
    }
    constructor(length) {
        this._length = length;
    }
}
/**
 * Represents a bracket pair including its child (e.g. `{ ... }`).
 * Might be unclosed.
 * Immutable, if all children are immutable.
*/
class PairAstNode extends BaseAstNode {
    static create(openingBracket, child, closingBracket) {
        let length = openingBracket.length;
        if (child) {
            length = lengthAdd(length, child.length);
        }
        if (closingBracket) {
            length = lengthAdd(length, closingBracket.length);
        }
        return new PairAstNode(length, openingBracket, child, closingBracket, child ? child.missingOpeningBracketIds : SmallImmutableSet.getEmpty());
    }
    get kind() {
        return 2 /* AstNodeKind.Pair */;
    }
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 3;
    }
    getChild(idx) {
        switch (idx) {
            case 0: return this.openingBracket;
            case 1: return this.child;
            case 2: return this.closingBracket;
        }
        throw new Error('Invalid child index');
    }
    /**
     * Avoid using this property, it allocates an array!
    */
    get children() {
        const result = [];
        result.push(this.openingBracket);
        if (this.child) {
            result.push(this.child);
        }
        if (this.closingBracket) {
            result.push(this.closingBracket);
        }
        return result;
    }
    constructor(length, openingBracket, child, closingBracket, missingOpeningBracketIds) {
        super(length);
        this.openingBracket = openingBracket;
        this.child = child;
        this.closingBracket = closingBracket;
        this.missingOpeningBracketIds = missingOpeningBracketIds;
    }
    canBeReused(openBracketIds) {
        if (this.closingBracket === null) {
            // Unclosed pair ast nodes only
            // end at the end of the document
            // or when a parent node is closed.
            // This could be improved:
            // Only return false if some next token is neither "undefined" nor a bracket that closes a parent.
            return false;
        }
        if (openBracketIds.intersects(this.missingOpeningBracketIds)) {
            return false;
        }
        return true;
    }
    deepClone() {
        return new PairAstNode(this.length, this.openingBracket.deepClone(), this.child && this.child.deepClone(), this.closingBracket && this.closingBracket.deepClone(), this.missingOpeningBracketIds);
    }
    computeMinIndentation(offset, textModel) {
        return this.child ? this.child.computeMinIndentation(lengthAdd(offset, this.openingBracket.length), textModel) : Number.MAX_SAFE_INTEGER;
    }
}
class ListAstNode extends BaseAstNode {
    /**
     * This method uses more memory-efficient list nodes that can only store 2 or 3 children.
    */
    static create23(item1, item2, item3, immutable = false) {
        let length = item1.length;
        let missingBracketIds = item1.missingOpeningBracketIds;
        if (item1.listHeight !== item2.listHeight) {
            throw new Error('Invalid list heights');
        }
        length = lengthAdd(length, item2.length);
        missingBracketIds = missingBracketIds.merge(item2.missingOpeningBracketIds);
        if (item3) {
            if (item1.listHeight !== item3.listHeight) {
                throw new Error('Invalid list heights');
            }
            length = lengthAdd(length, item3.length);
            missingBracketIds = missingBracketIds.merge(item3.missingOpeningBracketIds);
        }
        return immutable
            ? new Immutable23ListAstNode(length, item1.listHeight + 1, item1, item2, item3, missingBracketIds)
            : new TwoThreeListAstNode(length, item1.listHeight + 1, item1, item2, item3, missingBracketIds);
    }
    static getEmpty() {
        return new ImmutableArrayListAstNode(lengthZero, 0, [], SmallImmutableSet.getEmpty());
    }
    get kind() {
        return 4 /* AstNodeKind.List */;
    }
    get missingOpeningBracketIds() {
        return this._missingOpeningBracketIds;
    }
    /**
     * Use ListAstNode.create.
    */
    constructor(length, listHeight, _missingOpeningBracketIds) {
        super(length);
        this.listHeight = listHeight;
        this._missingOpeningBracketIds = _missingOpeningBracketIds;
        this.cachedMinIndentation = -1;
    }
    throwIfImmutable() {
        // NOOP
    }
    makeLastElementMutable() {
        this.throwIfImmutable();
        const childCount = this.childrenLength;
        if (childCount === 0) {
            return undefined;
        }
        const lastChild = this.getChild(childCount - 1);
        const mutable = lastChild.kind === 4 /* AstNodeKind.List */ ? lastChild.toMutable() : lastChild;
        if (lastChild !== mutable) {
            this.setChild(childCount - 1, mutable);
        }
        return mutable;
    }
    makeFirstElementMutable() {
        this.throwIfImmutable();
        const childCount = this.childrenLength;
        if (childCount === 0) {
            return undefined;
        }
        const firstChild = this.getChild(0);
        const mutable = firstChild.kind === 4 /* AstNodeKind.List */ ? firstChild.toMutable() : firstChild;
        if (firstChild !== mutable) {
            this.setChild(0, mutable);
        }
        return mutable;
    }
    canBeReused(openBracketIds) {
        if (openBracketIds.intersects(this.missingOpeningBracketIds)) {
            return false;
        }
        if (this.childrenLength === 0) {
            // Don't reuse empty lists.
            return false;
        }
        let lastChild = this;
        while (lastChild.kind === 4 /* AstNodeKind.List */) {
            const lastLength = lastChild.childrenLength;
            if (lastLength === 0) {
                // Empty lists should never be contained in other lists.
                throw new BugIndicatingError();
            }
            lastChild = lastChild.getChild(lastLength - 1);
        }
        return lastChild.canBeReused(openBracketIds);
    }
    handleChildrenChanged() {
        this.throwIfImmutable();
        const count = this.childrenLength;
        let length = this.getChild(0).length;
        let unopenedBrackets = this.getChild(0).missingOpeningBracketIds;
        for (let i = 1; i < count; i++) {
            const child = this.getChild(i);
            length = lengthAdd(length, child.length);
            unopenedBrackets = unopenedBrackets.merge(child.missingOpeningBracketIds);
        }
        this._length = length;
        this._missingOpeningBracketIds = unopenedBrackets;
        this.cachedMinIndentation = -1;
    }
    computeMinIndentation(offset, textModel) {
        if (this.cachedMinIndentation !== -1) {
            return this.cachedMinIndentation;
        }
        let minIndentation = Number.MAX_SAFE_INTEGER;
        let childOffset = offset;
        for (let i = 0; i < this.childrenLength; i++) {
            const child = this.getChild(i);
            if (child) {
                minIndentation = Math.min(minIndentation, child.computeMinIndentation(childOffset, textModel));
                childOffset = lengthAdd(childOffset, child.length);
            }
        }
        this.cachedMinIndentation = minIndentation;
        return minIndentation;
    }
}
class TwoThreeListAstNode extends ListAstNode {
    get childrenLength() {
        return this._item3 !== null ? 3 : 2;
    }
    getChild(idx) {
        switch (idx) {
            case 0: return this._item1;
            case 1: return this._item2;
            case 2: return this._item3;
        }
        throw new Error('Invalid child index');
    }
    setChild(idx, node) {
        switch (idx) {
            case 0:
                this._item1 = node;
                return;
            case 1:
                this._item2 = node;
                return;
            case 2:
                this._item3 = node;
                return;
        }
        throw new Error('Invalid child index');
    }
    get children() {
        return this._item3 ? [this._item1, this._item2, this._item3] : [this._item1, this._item2];
    }
    get item1() {
        return this._item1;
    }
    get item2() {
        return this._item2;
    }
    get item3() {
        return this._item3;
    }
    constructor(length, listHeight, _item1, _item2, _item3, missingOpeningBracketIds) {
        super(length, listHeight, missingOpeningBracketIds);
        this._item1 = _item1;
        this._item2 = _item2;
        this._item3 = _item3;
    }
    deepClone() {
        return new TwoThreeListAstNode(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3 ? this._item3.deepClone() : null, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(node) {
        if (this._item3) {
            throw new Error('Cannot append to a full (2,3) tree node');
        }
        this.throwIfImmutable();
        this._item3 = node;
        this.handleChildrenChanged();
    }
    unappendChild() {
        if (!this._item3) {
            throw new Error('Cannot remove from a non-full (2,3) tree node');
        }
        this.throwIfImmutable();
        const result = this._item3;
        this._item3 = null;
        this.handleChildrenChanged();
        return result;
    }
    prependChildOfSameHeight(node) {
        if (this._item3) {
            throw new Error('Cannot prepend to a full (2,3) tree node');
        }
        this.throwIfImmutable();
        this._item3 = this._item2;
        this._item2 = this._item1;
        this._item1 = node;
        this.handleChildrenChanged();
    }
    unprependChild() {
        if (!this._item3) {
            throw new Error('Cannot remove from a non-full (2,3) tree node');
        }
        this.throwIfImmutable();
        const result = this._item1;
        this._item1 = this._item2;
        this._item2 = this._item3;
        this._item3 = null;
        this.handleChildrenChanged();
        return result;
    }
    toMutable() {
        return this;
    }
}
/**
 * Immutable, if all children are immutable.
*/
class Immutable23ListAstNode extends TwoThreeListAstNode {
    toMutable() {
        return new TwoThreeListAstNode(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error('this instance is immutable');
    }
}
/**
 * For debugging.
*/
class ArrayListAstNode extends ListAstNode {
    get childrenLength() {
        return this._children.length;
    }
    getChild(idx) {
        return this._children[idx];
    }
    setChild(idx, child) {
        this._children[idx] = child;
    }
    get children() {
        return this._children;
    }
    constructor(length, listHeight, _children, missingOpeningBracketIds) {
        super(length, listHeight, missingOpeningBracketIds);
        this._children = _children;
    }
    deepClone() {
        const children = new Array(this._children.length);
        for (let i = 0; i < this._children.length; i++) {
            children[i] = this._children[i].deepClone();
        }
        return new ArrayListAstNode(this.length, this.listHeight, children, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(node) {
        this.throwIfImmutable();
        this._children.push(node);
        this.handleChildrenChanged();
    }
    unappendChild() {
        this.throwIfImmutable();
        const item = this._children.pop();
        this.handleChildrenChanged();
        return item;
    }
    prependChildOfSameHeight(node) {
        this.throwIfImmutable();
        this._children.unshift(node);
        this.handleChildrenChanged();
    }
    unprependChild() {
        this.throwIfImmutable();
        const item = this._children.shift();
        this.handleChildrenChanged();
        return item;
    }
    toMutable() {
        return this;
    }
}
/**
 * Immutable, if all children are immutable.
*/
class ImmutableArrayListAstNode extends ArrayListAstNode {
    toMutable() {
        return new ArrayListAstNode(this.length, this.listHeight, [...this.children], this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error('this instance is immutable');
    }
}
const emptyArray = [];
class ImmutableLeafAstNode extends BaseAstNode {
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 0;
    }
    getChild(idx) {
        return null;
    }
    get children() {
        return emptyArray;
    }
    deepClone() {
        return this;
    }
}
class TextAstNode extends ImmutableLeafAstNode {
    get kind() {
        return 0 /* AstNodeKind.Text */;
    }
    get missingOpeningBracketIds() {
        return SmallImmutableSet.getEmpty();
    }
    canBeReused(_openedBracketIds) {
        return true;
    }
    computeMinIndentation(offset, textModel) {
        const start = lengthToObj(offset);
        // Text ast nodes don't have partial indentation (ensured by the tokenizer).
        // Thus, if this text node does not start at column 0, the first line cannot have any indentation at all.
        const startLineNumber = (start.columnCount === 0 ? start.lineCount : start.lineCount + 1) + 1;
        const endLineNumber = lengthGetLineCount(lengthAdd(offset, this.length)) + 1;
        let result = Number.MAX_SAFE_INTEGER;
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const firstNonWsColumn = textModel.getLineFirstNonWhitespaceColumn(lineNumber);
            const lineContent = textModel.getLineContent(lineNumber);
            if (firstNonWsColumn === 0) {
                continue;
            }
            const visibleColumn = CursorColumns.visibleColumnFromColumn(lineContent, firstNonWsColumn, textModel.getOptions().tabSize);
            result = Math.min(result, visibleColumn);
        }
        return result;
    }
}
class BracketAstNode extends ImmutableLeafAstNode {
    static create(length, bracketInfo, bracketIds) {
        const node = new BracketAstNode(length, bracketInfo, bracketIds);
        return node;
    }
    get kind() {
        return 1 /* AstNodeKind.Bracket */;
    }
    get missingOpeningBracketIds() {
        return SmallImmutableSet.getEmpty();
    }
    constructor(length, bracketInfo, 
    /**
     * In case of a opening bracket, this is the id of the opening bracket.
     * In case of a closing bracket, this contains the ids of all opening brackets it can close.
    */
    bracketIds) {
        super(length);
        this.bracketInfo = bracketInfo;
        this.bracketIds = bracketIds;
    }
    get text() {
        return this.bracketInfo.bracketText;
    }
    get languageId() {
        return this.bracketInfo.languageId;
    }
    canBeReused(_openedBracketIds) {
        // These nodes could be reused,
        // but not in a general way.
        // Their parent may be reused.
        return false;
    }
    computeMinIndentation(offset, textModel) {
        return Number.MAX_SAFE_INTEGER;
    }
}
class InvalidBracketAstNode extends ImmutableLeafAstNode {
    get kind() {
        return 3 /* AstNodeKind.UnexpectedClosingBracket */;
    }
    constructor(closingBrackets, length) {
        super(length);
        this.missingOpeningBracketIds = closingBrackets;
    }
    canBeReused(openedBracketIds) {
        return !openedBracketIds.intersects(this.missingOpeningBracketIds);
    }
    computeMinIndentation(offset, textModel) {
        return Number.MAX_SAFE_INTEGER;
    }
}

export { BracketAstNode, InvalidBracketAstNode, ListAstNode, PairAstNode, TextAstNode };
