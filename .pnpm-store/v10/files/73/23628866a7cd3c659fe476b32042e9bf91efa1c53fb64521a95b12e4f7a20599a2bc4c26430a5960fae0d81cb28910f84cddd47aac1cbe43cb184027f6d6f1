import { addStandardDisposableListener, getDomNodePagePosition } from '../../../../../../base/browser/dom.js';
import { Action } from '../../../../../../base/common/actions.js';
import { Codicon } from '../../../../../../base/common/codicons.js';
import { Disposable } from '../../../../../../base/common/lifecycle.js';
import { isIOS } from '../../../../../../base/common/platform.js';
import { ThemeIcon } from '../../../../../../base/common/themables.js';
import { localize } from '../../../../../../nls.js';
import { enableCopySelection } from './copySelection.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineDiffDeletedCodeMargin extends Disposable {
    get visibility() {
        return this._visibility;
    }
    set visibility(_visibility) {
        if (this._visibility !== _visibility) {
            this._visibility = _visibility;
            this._diffActions.style.visibility = _visibility ? 'visible' : 'hidden';
        }
    }
    constructor(_getViewZoneId, _marginDomNode, _deletedCodeDomNode, _modifiedEditor, _diff, _editor, _renderLinesResult, _originalTextModel, _contextMenuService, _clipboardService) {
        super();
        this._getViewZoneId = _getViewZoneId;
        this._marginDomNode = _marginDomNode;
        this._deletedCodeDomNode = _deletedCodeDomNode;
        this._modifiedEditor = _modifiedEditor;
        this._diff = _diff;
        this._editor = _editor;
        this._renderLinesResult = _renderLinesResult;
        this._originalTextModel = _originalTextModel;
        this._contextMenuService = _contextMenuService;
        this._clipboardService = _clipboardService;
        this._visibility = false;
        // make sure the diff margin shows above overlay.
        this._marginDomNode.style.zIndex = '10';
        this._diffActions = document.createElement('div');
        this._diffActions.className = ThemeIcon.asClassName(Codicon.lightBulb) + ' lightbulb-glyph';
        this._diffActions.style.position = 'absolute';
        const lineHeight = this._modifiedEditor.getOption(75 /* EditorOption.lineHeight */);
        this._diffActions.style.right = '0px';
        this._diffActions.style.visibility = 'hidden';
        this._diffActions.style.height = `${lineHeight}px`;
        this._diffActions.style.lineHeight = `${lineHeight}px`;
        this._marginDomNode.appendChild(this._diffActions);
        let currentLineNumberOffset = 0;
        const useShadowDOM = _modifiedEditor.getOption(144 /* EditorOption.useShadowDOM */) && !isIOS; // Do not use shadow dom on IOS #122035
        const showContextMenu = (anchor, baseActions, onHide) => {
            this._contextMenuService.showContextMenu({
                domForShadowRoot: useShadowDOM ? _modifiedEditor.getDomNode() ?? undefined : undefined,
                getAnchor: () => anchor,
                onHide,
                getActions: () => {
                    const actions = [];
                    const isDeletion = _diff.modified.isEmpty;
                    // default action
                    actions.push(new Action('diff.clipboard.copyDeletedContent', isDeletion
                        ? (_diff.original.length > 1
                            ? localize(112, "Copy deleted lines")
                            : localize(113, "Copy deleted line"))
                        : (_diff.original.length > 1
                            ? localize(114, "Copy changed lines")
                            : localize(115, "Copy changed line")), undefined, true, async () => {
                        const originalText = this._originalTextModel.getValueInRange(_diff.original.toExclusiveRange());
                        await this._clipboardService.writeText(originalText);
                    }));
                    if (_diff.original.length > 1) {
                        actions.push(new Action('diff.clipboard.copyDeletedLineContent', isDeletion
                            ? localize(116, "Copy deleted line ({0})", _diff.original.startLineNumber + currentLineNumberOffset)
                            : localize(117, "Copy changed line ({0})", _diff.original.startLineNumber + currentLineNumberOffset), undefined, true, async () => {
                            let lineContent = this._originalTextModel.getLineContent(_diff.original.startLineNumber + currentLineNumberOffset);
                            if (lineContent === '') {
                                // empty line -> new line
                                const eof = this._originalTextModel.getEndOfLineSequence();
                                lineContent = eof === 0 /* EndOfLineSequence.LF */ ? '\n' : '\r\n';
                            }
                            await this._clipboardService.writeText(lineContent);
                        }));
                    }
                    const readOnly = _modifiedEditor.getOption(104 /* EditorOption.readOnly */);
                    if (!readOnly) {
                        actions.push(new Action('diff.inline.revertChange', localize(118, "Revert this change"), undefined, true, async () => {
                            this._editor.revert(this._diff);
                        }));
                    }
                    return actions;
                },
                autoSelectFirstItem: true
            });
        };
        this._register(addStandardDisposableListener(this._diffActions, 'mousedown', e => {
            if (!e.leftButton) {
                return;
            }
            const { top, height } = getDomNodePagePosition(this._diffActions);
            const pad = Math.floor(lineHeight / 3);
            e.preventDefault();
            showContextMenu({ x: e.posx, y: top + height + pad });
        }));
        this._register(_modifiedEditor.onMouseMove((e) => {
            if ((e.target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || e.target.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) && e.target.detail.viewZoneId === this._getViewZoneId()) {
                currentLineNumberOffset = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, lineHeight);
                this.visibility = true;
            }
            else {
                this.visibility = false;
            }
        }));
        this._register(enableCopySelection({
            domNode: this._deletedCodeDomNode,
            diffEntry: _diff,
            originalModel: this._originalTextModel,
            renderLinesResult: this._renderLinesResult,
            clipboardService: _clipboardService,
        }));
    }
    _updateLightBulbPosition(marginDomNode, y, lineHeight) {
        const { top } = getDomNodePagePosition(marginDomNode);
        const offset = y - top;
        const lineNumberOffset = Math.floor(offset / lineHeight);
        const newTop = lineNumberOffset * lineHeight;
        this._diffActions.style.top = `${newTop}px`;
        if (this._renderLinesResult.viewLineCounts) {
            let acc = 0;
            for (let i = 0; i < this._renderLinesResult.viewLineCounts.length; i++) {
                acc += this._renderLinesResult.viewLineCounts[i];
                if (lineNumberOffset < acc) {
                    return i;
                }
            }
        }
        return lineNumberOffset;
    }
}

export { InlineDiffDeletedCodeMargin };
