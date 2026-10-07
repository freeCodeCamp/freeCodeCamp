import { coalesce } from '../../../../base/common/arrays.js';
import { AsyncIterableProducer } from '../../../../base/common/async.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ContentHoverComputer {
    constructor(_editor, _participants) {
        this._editor = _editor;
        this._participants = _participants;
    }
    static _getLineDecorations(editor, anchor) {
        if (anchor.type !== 1 /* HoverAnchorType.Range */ && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        if (lineNumber > model.getLineCount()) {
            // invalid line
            return [];
        }
        const maxColumn = model.getLineMaxColumn(lineNumber);
        return editor.getLineDecorations(lineNumber).filter((d) => {
            if (d.options.isWholeLine) {
                return true;
            }
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            if (d.options.showIfCollapsed) {
                // Relax check around `showIfCollapsed` decorations to also include +/- 1 character
                if (startColumn > anchor.range.startColumn + 1 || anchor.range.endColumn - 1 > endColumn) {
                    return false;
                }
            }
            else {
                if (startColumn > anchor.range.startColumn || anchor.range.endColumn > endColumn) {
                    return false;
                }
            }
            return true;
        });
    }
    computeAsync(options, token) {
        const anchor = options.anchor;
        if (!this._editor.hasModel() || !anchor) {
            return AsyncIterableProducer.EMPTY;
        }
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, anchor);
        return AsyncIterableProducer.merge(this._participants.map((participant) => {
            if (!participant.computeAsync) {
                return AsyncIterableProducer.EMPTY;
            }
            return participant.computeAsync(anchor, lineDecorations, options.source, token);
        }));
    }
    computeSync(options) {
        if (!this._editor.hasModel()) {
            return [];
        }
        const anchor = options.anchor;
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, anchor);
        let result = [];
        for (const participant of this._participants) {
            result = result.concat(participant.computeSync(anchor, lineDecorations, options.source));
        }
        return coalesce(result);
    }
}

export { ContentHoverComputer };
