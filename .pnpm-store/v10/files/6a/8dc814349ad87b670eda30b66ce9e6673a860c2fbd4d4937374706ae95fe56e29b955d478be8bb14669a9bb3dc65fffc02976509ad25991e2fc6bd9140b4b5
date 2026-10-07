"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenElementStack = void 0;
const html_js_1 = require("../common/html.js");
//Element utils
const IMPLICIT_END_TAG_REQUIRED = new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
    ...IMPLICIT_END_TAG_REQUIRED,
    html_js_1.TAG_ID.CAPTION,
    html_js_1.TAG_ID.COLGROUP,
    html_js_1.TAG_ID.TBODY,
    html_js_1.TAG_ID.TD,
    html_js_1.TAG_ID.TFOOT,
    html_js_1.TAG_ID.TH,
    html_js_1.TAG_ID.THEAD,
    html_js_1.TAG_ID.TR,
]);
const SCOPING_ELEMENTS_HTML = new Set([
    html_js_1.TAG_ID.APPLET,
    html_js_1.TAG_ID.CAPTION,
    html_js_1.TAG_ID.HTML,
    html_js_1.TAG_ID.MARQUEE,
    html_js_1.TAG_ID.OBJECT,
    html_js_1.TAG_ID.TABLE,
    html_js_1.TAG_ID.TD,
    html_js_1.TAG_ID.TEMPLATE,
    html_js_1.TAG_ID.TH,
]);
const SCOPING_ELEMENTS_HTML_LIST = new Set([...SCOPING_ELEMENTS_HTML, html_js_1.TAG_ID.OL, html_js_1.TAG_ID.UL]);
const SCOPING_ELEMENTS_HTML_BUTTON = new Set([...SCOPING_ELEMENTS_HTML, html_js_1.TAG_ID.BUTTON]);
const SCOPING_ELEMENTS_MATHML = new Set([html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.TAG_ID.MI, html_js_1.TAG_ID.MN, html_js_1.TAG_ID.MO, html_js_1.TAG_ID.MS, html_js_1.TAG_ID.MTEXT]);
const SCOPING_ELEMENTS_SVG = new Set([html_js_1.TAG_ID.DESC, html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.TAG_ID.TITLE]);
const TABLE_ROW_CONTEXT = new Set([html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
const TABLE_BODY_CONTEXT = new Set([html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
const TABLE_CONTEXT = new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML]);
const TABLE_CELLS = new Set([html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH]);
//Stack of open elements
class OpenElementStack {
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
        this.current = document;
    }
    //Index of element
    _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
    }
    //Update current element
    _isInTemplate() {
        return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
    }
    //Mutations
    push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
            this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
    }
    pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
    }
    replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
            this.current = newElement;
        }
    }
    insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
            this._updateCurrentElement();
        }
        if (this.current && this.currentTagId !== undefined) {
            this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
        }
    }
    popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
            targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
        this.shortenToLength(Math.max(targetIdx, 0));
    }
    shortenToLength(idx) {
        while (this.stackTop >= idx) {
            const popped = this.current;
            if (this.tmplCount > 0 && this._isInTemplate()) {
                this.tmplCount -= 1;
            }
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(popped, this.stackTop < idx);
        }
    }
    popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(Math.max(idx, 0));
    }
    popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(Math.max(idx, 0));
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(html_js_1.NUMBERED_HEADERS, html_js_1.NS.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
    }
    popAllUpToHtmlElement() {
        //NOTE: here we assume that the root <html> element is always first in the open element stack, so
        //we perform this fast stack clean up.
        this.tmplCount = 0;
        this.shortenToLength(1);
    }
    _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
            if (tagNames.has(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
                return i;
            }
        }
        return -1;
    }
    clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
    }
    remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
            if (idx === this.stackTop) {
                this.pop();
            }
            else {
                this.items.splice(idx, 1);
                this.tagIDs.splice(idx, 1);
                this.stackTop--;
                this._updateCurrentElement();
                this.handler.onItemPop(element, false);
            }
        }
    }
    //Search
    tryPeekProperlyNestedBodyElement() {
        //Properly nested <body> element (should be second element in stack).
        return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
    }
    contains(element) {
        return this._indexOf(element) > -1;
    }
    getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
    }
    //Element in scope
    hasInDynamicScope(tagName, htmlScope) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
                case html_js_1.NS.HTML: {
                    if (tn === tagName)
                        return true;
                    if (htmlScope.has(tn))
                        return false;
                    break;
                }
                case html_js_1.NS.SVG: {
                    if (SCOPING_ELEMENTS_SVG.has(tn))
                        return false;
                    break;
                }
                case html_js_1.NS.MATHML: {
                    if (SCOPING_ELEMENTS_MATHML.has(tn))
                        return false;
                    break;
                }
            }
        }
        return true;
    }
    hasInScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML);
    }
    hasInListItemScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_LIST);
    }
    hasInButtonScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_BUTTON);
    }
    hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
                case html_js_1.NS.HTML: {
                    if (html_js_1.NUMBERED_HEADERS.has(tn))
                        return true;
                    if (SCOPING_ELEMENTS_HTML.has(tn))
                        return false;
                    break;
                }
                case html_js_1.NS.SVG: {
                    if (SCOPING_ELEMENTS_SVG.has(tn))
                        return false;
                    break;
                }
                case html_js_1.NS.MATHML: {
                    if (SCOPING_ELEMENTS_MATHML.has(tn))
                        return false;
                    break;
                }
            }
        }
        return true;
    }
    hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
                continue;
            }
            switch (this.tagIDs[i]) {
                case tagName: {
                    return true;
                }
                case html_js_1.TAG_ID.TABLE:
                case html_js_1.TAG_ID.HTML: {
                    return false;
                }
            }
        }
        return true;
    }
    hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
                continue;
            }
            switch (this.tagIDs[i]) {
                case html_js_1.TAG_ID.TBODY:
                case html_js_1.TAG_ID.THEAD:
                case html_js_1.TAG_ID.TFOOT: {
                    return true;
                }
                case html_js_1.TAG_ID.TABLE:
                case html_js_1.TAG_ID.HTML: {
                    return false;
                }
            }
        }
        return true;
    }
    hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            if (this.treeAdapter.getNamespaceURI(this.items[i]) !== html_js_1.NS.HTML) {
                continue;
            }
            switch (this.tagIDs[i]) {
                case tagName: {
                    return true;
                }
                case html_js_1.TAG_ID.OPTION:
                case html_js_1.TAG_ID.OPTGROUP: {
                    break;
                }
                default: {
                    return false;
                }
            }
        }
        return true;
    }
    //Implied end tags
    generateImpliedEndTags() {
        while (this.currentTagId !== undefined && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsThoroughly() {
        while (this.currentTagId !== undefined && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== undefined &&
            this.currentTagId !== exclusionId &&
            IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
}
exports.OpenElementStack = OpenElementStack;
