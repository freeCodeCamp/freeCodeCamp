import { createFastDomNode } from '../../../base/browser/fastDomNode.js';
import { createTrustedTypesPolicy } from '../../../base/browser/trustedTypes.js';
import { BugIndicatingError } from '../../../base/common/errors.js';
import { StringBuilder } from '../../common/core/stringBuilder.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class RenderedLinesCollection {
    constructor(_lineFactory) {
        this._lineFactory = _lineFactory;
        this._set(1, []);
    }
    flush() {
        this._set(1, []);
    }
    _set(rendLineNumberStart, lines) {
        this._lines = lines;
        this._rendLineNumberStart = rendLineNumberStart;
    }
    _get() {
        return {
            rendLineNumberStart: this._rendLineNumberStart,
            lines: this._lines
        };
    }
    /**
     * @returns Inclusive line number that is inside this collection
     */
    getStartLineNumber() {
        return this._rendLineNumberStart;
    }
    /**
     * @returns Inclusive line number that is inside this collection
     */
    getEndLineNumber() {
        return this._rendLineNumberStart + this._lines.length - 1;
    }
    getCount() {
        return this._lines.length;
    }
    getLine(lineNumber) {
        const lineIndex = lineNumber - this._rendLineNumberStart;
        if (lineIndex < 0 || lineIndex >= this._lines.length) {
            throw new BugIndicatingError('Illegal value for lineNumber');
        }
        return this._lines[lineIndex];
    }
    /**
     * @returns Lines that were removed from this collection
     */
    onLinesDeleted(deleteFromLineNumber, deleteToLineNumber) {
        if (this.getCount() === 0) {
            // no lines
            return null;
        }
        const startLineNumber = this.getStartLineNumber();
        const endLineNumber = this.getEndLineNumber();
        if (deleteToLineNumber < startLineNumber) {
            // deleting above the viewport
            const deleteCnt = deleteToLineNumber - deleteFromLineNumber + 1;
            this._rendLineNumberStart -= deleteCnt;
            return null;
        }
        if (deleteFromLineNumber > endLineNumber) {
            // deleted below the viewport
            return null;
        }
        // Record what needs to be deleted
        let deleteStartIndex = 0;
        let deleteCount = 0;
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const lineIndex = lineNumber - this._rendLineNumberStart;
            if (deleteFromLineNumber <= lineNumber && lineNumber <= deleteToLineNumber) {
                // this is a line to be deleted
                if (deleteCount === 0) {
                    // this is the first line to be deleted
                    deleteStartIndex = lineIndex;
                    deleteCount = 1;
                }
                else {
                    deleteCount++;
                }
            }
        }
        // Adjust this._rendLineNumberStart for lines deleted above
        if (deleteFromLineNumber < startLineNumber) {
            // Something was deleted above
            let deleteAboveCount = 0;
            if (deleteToLineNumber < startLineNumber) {
                // the entire deleted lines are above
                deleteAboveCount = deleteToLineNumber - deleteFromLineNumber + 1;
            }
            else {
                deleteAboveCount = startLineNumber - deleteFromLineNumber;
            }
            this._rendLineNumberStart -= deleteAboveCount;
        }
        const deleted = this._lines.splice(deleteStartIndex, deleteCount);
        return deleted;
    }
    onLinesChanged(changeFromLineNumber, changeCount) {
        const changeToLineNumber = changeFromLineNumber + changeCount - 1;
        if (this.getCount() === 0) {
            // no lines
            return false;
        }
        const startLineNumber = this.getStartLineNumber();
        const endLineNumber = this.getEndLineNumber();
        let someoneNotified = false;
        for (let changedLineNumber = changeFromLineNumber; changedLineNumber <= changeToLineNumber; changedLineNumber++) {
            if (changedLineNumber >= startLineNumber && changedLineNumber <= endLineNumber) {
                // Notify the line
                this._lines[changedLineNumber - this._rendLineNumberStart].onContentChanged();
                someoneNotified = true;
            }
        }
        return someoneNotified;
    }
    onLinesInserted(insertFromLineNumber, insertToLineNumber) {
        if (this.getCount() === 0) {
            // no lines
            return null;
        }
        const insertCnt = insertToLineNumber - insertFromLineNumber + 1;
        const startLineNumber = this.getStartLineNumber();
        const endLineNumber = this.getEndLineNumber();
        if (insertFromLineNumber <= startLineNumber) {
            // inserting above the viewport
            this._rendLineNumberStart += insertCnt;
            return null;
        }
        if (insertFromLineNumber > endLineNumber) {
            // inserting below the viewport
            return null;
        }
        if (insertCnt + insertFromLineNumber > endLineNumber) {
            // insert inside the viewport in such a way that all remaining lines are pushed outside
            const deleted = this._lines.splice(insertFromLineNumber - this._rendLineNumberStart, endLineNumber - insertFromLineNumber + 1);
            return deleted;
        }
        // insert inside the viewport, push out some lines, but not all remaining lines
        const newLines = [];
        for (let i = 0; i < insertCnt; i++) {
            newLines[i] = this._lineFactory.createLine();
        }
        const insertIndex = insertFromLineNumber - this._rendLineNumberStart;
        const beforeLines = this._lines.slice(0, insertIndex);
        const afterLines = this._lines.slice(insertIndex, this._lines.length - insertCnt);
        const deletedLines = this._lines.slice(this._lines.length - insertCnt, this._lines.length);
        this._lines = beforeLines.concat(newLines).concat(afterLines);
        return deletedLines;
    }
    onTokensChanged(ranges) {
        if (this.getCount() === 0) {
            // no lines
            return false;
        }
        const startLineNumber = this.getStartLineNumber();
        const endLineNumber = this.getEndLineNumber();
        let notifiedSomeone = false;
        for (let i = 0, len = ranges.length; i < len; i++) {
            const rng = ranges[i];
            if (rng.toLineNumber < startLineNumber || rng.fromLineNumber > endLineNumber) {
                // range outside viewport
                continue;
            }
            const from = Math.max(startLineNumber, rng.fromLineNumber);
            const to = Math.min(endLineNumber, rng.toLineNumber);
            for (let lineNumber = from; lineNumber <= to; lineNumber++) {
                const lineIndex = lineNumber - this._rendLineNumberStart;
                this._lines[lineIndex].onTokensChanged();
                notifiedSomeone = true;
            }
        }
        return notifiedSomeone;
    }
}
class VisibleLinesCollection {
    constructor(_viewContext, _lineFactory) {
        this._viewContext = _viewContext;
        this._lineFactory = _lineFactory;
        this.domNode = this._createDomNode();
        this._linesCollection = new RenderedLinesCollection(this._lineFactory);
    }
    _createDomNode() {
        const domNode = createFastDomNode(document.createElement('div'));
        domNode.setClassName('view-layer');
        domNode.setPosition('absolute');
        domNode.domNode.setAttribute('role', 'presentation');
        domNode.domNode.setAttribute('aria-hidden', 'true');
        return domNode;
    }
    // ---- begin view event handlers
    onConfigurationChanged(e) {
        if (e.hasChanged(165 /* EditorOption.layoutInfo */)) {
            return true;
        }
        return false;
    }
    onFlushed(e, flushDom) {
        // No need to clear the dom node because a full .innerHTML will occur in
        // ViewLayerRenderer._render, however the fallback mechanism in the
        // GPU renderer may cause this to be necessary as the .innerHTML call
        // may not happen depending on the new state, leaving stale DOM nodes
        // around.
        if (flushDom) {
            const start = this._linesCollection.getStartLineNumber();
            const end = this._linesCollection.getEndLineNumber();
            for (let i = start; i <= end; i++) {
                this._linesCollection.getLine(i).getDomNode()?.remove();
            }
        }
        this._linesCollection.flush();
        return true;
    }
    onLinesChanged(e) {
        return this._linesCollection.onLinesChanged(e.fromLineNumber, e.count);
    }
    onLinesDeleted(e) {
        const deleted = this._linesCollection.onLinesDeleted(e.fromLineNumber, e.toLineNumber);
        if (deleted) {
            // Remove from DOM
            for (let i = 0, len = deleted.length; i < len; i++) {
                const lineDomNode = deleted[i].getDomNode();
                lineDomNode?.remove();
            }
        }
        return true;
    }
    onLinesInserted(e) {
        const deleted = this._linesCollection.onLinesInserted(e.fromLineNumber, e.toLineNumber);
        if (deleted) {
            // Remove from DOM
            for (let i = 0, len = deleted.length; i < len; i++) {
                const lineDomNode = deleted[i].getDomNode();
                lineDomNode?.remove();
            }
        }
        return true;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onTokensChanged(e) {
        return this._linesCollection.onTokensChanged(e.ranges);
    }
    onZonesChanged(e) {
        return true;
    }
    // ---- end view event handlers
    getStartLineNumber() {
        return this._linesCollection.getStartLineNumber();
    }
    getEndLineNumber() {
        return this._linesCollection.getEndLineNumber();
    }
    getVisibleLine(lineNumber) {
        return this._linesCollection.getLine(lineNumber);
    }
    renderLines(viewportData) {
        const inp = this._linesCollection._get();
        const renderer = new ViewLayerRenderer(this.domNode.domNode, this._lineFactory, viewportData, this._viewContext);
        const ctx = {
            rendLineNumberStart: inp.rendLineNumberStart,
            lines: inp.lines,
            linesLength: inp.lines.length
        };
        // Decide if this render will do a single update (single large .innerHTML) or many updates (inserting/removing dom nodes)
        const resCtx = renderer.render(ctx, viewportData.startLineNumber, viewportData.endLineNumber, viewportData.relativeVerticalOffset);
        this._linesCollection._set(resCtx.rendLineNumberStart, resCtx.lines);
    }
}
class ViewLayerRenderer {
    static { this._ttPolicy = createTrustedTypesPolicy('editorViewLayer', { createHTML: value => value }); }
    constructor(_domNode, _lineFactory, _viewportData, _viewContext) {
        this._domNode = _domNode;
        this._lineFactory = _lineFactory;
        this._viewportData = _viewportData;
        this._viewContext = _viewContext;
    }
    render(inContext, startLineNumber, stopLineNumber, deltaTop) {
        const ctx = {
            rendLineNumberStart: inContext.rendLineNumberStart,
            lines: inContext.lines.slice(0),
            linesLength: inContext.linesLength
        };
        if ((ctx.rendLineNumberStart + ctx.linesLength - 1 < startLineNumber) || (stopLineNumber < ctx.rendLineNumberStart)) {
            // There is no overlap whatsoever
            ctx.rendLineNumberStart = startLineNumber;
            ctx.linesLength = stopLineNumber - startLineNumber + 1;
            ctx.lines = [];
            for (let x = startLineNumber; x <= stopLineNumber; x++) {
                ctx.lines[x - startLineNumber] = this._lineFactory.createLine();
            }
            this._finishRendering(ctx, true, deltaTop);
            return ctx;
        }
        // Update lines which will remain untouched
        this._renderUntouchedLines(ctx, Math.max(startLineNumber - ctx.rendLineNumberStart, 0), Math.min(stopLineNumber - ctx.rendLineNumberStart, ctx.linesLength - 1), deltaTop, startLineNumber);
        if (ctx.rendLineNumberStart > startLineNumber) {
            // Insert lines before
            const fromLineNumber = startLineNumber;
            const toLineNumber = Math.min(stopLineNumber, ctx.rendLineNumberStart - 1);
            if (fromLineNumber <= toLineNumber) {
                this._insertLinesBefore(ctx, fromLineNumber, toLineNumber, deltaTop, startLineNumber);
                ctx.linesLength += toLineNumber - fromLineNumber + 1;
            }
        }
        else if (ctx.rendLineNumberStart < startLineNumber) {
            // Remove lines before
            const removeCnt = Math.min(ctx.linesLength, startLineNumber - ctx.rendLineNumberStart);
            if (removeCnt > 0) {
                this._removeLinesBefore(ctx, removeCnt);
                ctx.linesLength -= removeCnt;
            }
        }
        ctx.rendLineNumberStart = startLineNumber;
        if (ctx.rendLineNumberStart + ctx.linesLength - 1 < stopLineNumber) {
            // Insert lines after
            const fromLineNumber = ctx.rendLineNumberStart + ctx.linesLength;
            const toLineNumber = stopLineNumber;
            if (fromLineNumber <= toLineNumber) {
                this._insertLinesAfter(ctx, fromLineNumber, toLineNumber, deltaTop, startLineNumber);
                ctx.linesLength += toLineNumber - fromLineNumber + 1;
            }
        }
        else if (ctx.rendLineNumberStart + ctx.linesLength - 1 > stopLineNumber) {
            // Remove lines after
            const fromLineNumber = Math.max(0, stopLineNumber - ctx.rendLineNumberStart + 1);
            const toLineNumber = ctx.linesLength - 1;
            const removeCnt = toLineNumber - fromLineNumber + 1;
            if (removeCnt > 0) {
                this._removeLinesAfter(ctx, removeCnt);
                ctx.linesLength -= removeCnt;
            }
        }
        this._finishRendering(ctx, false, deltaTop);
        return ctx;
    }
    _renderUntouchedLines(ctx, startIndex, endIndex, deltaTop, deltaLN) {
        const rendLineNumberStart = ctx.rendLineNumberStart;
        const lines = ctx.lines;
        for (let i = startIndex; i <= endIndex; i++) {
            const lineNumber = rendLineNumberStart + i;
            lines[i].layoutLine(lineNumber, deltaTop[lineNumber - deltaLN], this._lineHeightForLineNumber(lineNumber));
        }
    }
    _insertLinesBefore(ctx, fromLineNumber, toLineNumber, deltaTop, deltaLN) {
        const newLines = [];
        let newLinesLen = 0;
        for (let lineNumber = fromLineNumber; lineNumber <= toLineNumber; lineNumber++) {
            newLines[newLinesLen++] = this._lineFactory.createLine();
        }
        ctx.lines = newLines.concat(ctx.lines);
    }
    _removeLinesBefore(ctx, removeCount) {
        for (let i = 0; i < removeCount; i++) {
            const lineDomNode = ctx.lines[i].getDomNode();
            lineDomNode?.remove();
        }
        ctx.lines.splice(0, removeCount);
    }
    _insertLinesAfter(ctx, fromLineNumber, toLineNumber, deltaTop, deltaLN) {
        const newLines = [];
        let newLinesLen = 0;
        for (let lineNumber = fromLineNumber; lineNumber <= toLineNumber; lineNumber++) {
            newLines[newLinesLen++] = this._lineFactory.createLine();
        }
        ctx.lines = ctx.lines.concat(newLines);
    }
    _removeLinesAfter(ctx, removeCount) {
        const removeIndex = ctx.linesLength - removeCount;
        for (let i = 0; i < removeCount; i++) {
            const lineDomNode = ctx.lines[removeIndex + i].getDomNode();
            lineDomNode?.remove();
        }
        ctx.lines.splice(removeIndex, removeCount);
    }
    _finishRenderingNewLines(ctx, domNodeIsEmpty, newLinesHTML, wasNew) {
        if (ViewLayerRenderer._ttPolicy) {
            newLinesHTML = ViewLayerRenderer._ttPolicy.createHTML(newLinesHTML);
        }
        const lastChild = this._domNode.lastChild;
        if (domNodeIsEmpty || !lastChild) {
            this._domNode.innerHTML = newLinesHTML; // explains the ugly casts -> https://github.com/microsoft/vscode/issues/106396#issuecomment-692625393;
        }
        else {
            lastChild.insertAdjacentHTML('afterend', newLinesHTML);
        }
        let currChild = this._domNode.lastChild;
        for (let i = ctx.linesLength - 1; i >= 0; i--) {
            const line = ctx.lines[i];
            if (wasNew[i]) {
                line.setDomNode(currChild);
                currChild = currChild.previousSibling;
            }
        }
    }
    _finishRenderingInvalidLines(ctx, invalidLinesHTML, wasInvalid) {
        const hugeDomNode = document.createElement('div');
        if (ViewLayerRenderer._ttPolicy) {
            invalidLinesHTML = ViewLayerRenderer._ttPolicy.createHTML(invalidLinesHTML);
        }
        hugeDomNode.innerHTML = invalidLinesHTML;
        for (let i = 0; i < ctx.linesLength; i++) {
            const line = ctx.lines[i];
            if (wasInvalid[i]) {
                const source = hugeDomNode.firstChild;
                const lineDomNode = line.getDomNode();
                lineDomNode.replaceWith(source);
                line.setDomNode(source);
            }
        }
    }
    static { this._sb = new StringBuilder(100000); }
    _finishRendering(ctx, domNodeIsEmpty, deltaTop) {
        const sb = ViewLayerRenderer._sb;
        const linesLength = ctx.linesLength;
        const lines = ctx.lines;
        const rendLineNumberStart = ctx.rendLineNumberStart;
        const wasNew = [];
        {
            sb.reset();
            let hadNewLine = false;
            for (let i = 0; i < linesLength; i++) {
                const line = lines[i];
                wasNew[i] = false;
                const lineDomNode = line.getDomNode();
                if (lineDomNode) {
                    // line is not new
                    continue;
                }
                const renderedLineNumber = i + rendLineNumberStart;
                const renderResult = line.renderLine(renderedLineNumber, deltaTop[i], this._lineHeightForLineNumber(renderedLineNumber), this._viewportData, sb);
                if (!renderResult) {
                    // line does not need rendering
                    continue;
                }
                wasNew[i] = true;
                hadNewLine = true;
            }
            if (hadNewLine) {
                this._finishRenderingNewLines(ctx, domNodeIsEmpty, sb.build(), wasNew);
            }
        }
        {
            sb.reset();
            let hadInvalidLine = false;
            const wasInvalid = [];
            for (let i = 0; i < linesLength; i++) {
                const line = lines[i];
                wasInvalid[i] = false;
                if (wasNew[i]) {
                    // line was new
                    continue;
                }
                const renderedLineNumber = i + rendLineNumberStart;
                const renderResult = line.renderLine(renderedLineNumber, deltaTop[i], this._lineHeightForLineNumber(renderedLineNumber), this._viewportData, sb);
                if (!renderResult) {
                    // line does not need rendering
                    continue;
                }
                wasInvalid[i] = true;
                hadInvalidLine = true;
            }
            if (hadInvalidLine) {
                this._finishRenderingInvalidLines(ctx, sb.build(), wasInvalid);
            }
        }
    }
    _lineHeightForLineNumber(lineNumber) {
        return this._viewContext.viewLayout.getLineHeightForLineNumber(lineNumber);
    }
}

export { RenderedLinesCollection, VisibleLinesCollection };
