import { RenderedHoverParts } from './hoverTypes.js';
import { Disposable, toDisposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { EditorHoverStatusBar } from './contentHoverStatusBar.js';
import { HoverCopyButton } from './hoverCopyButton.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { addDisposableListener, EventType } from '../../../../base/browser/dom.js';
import { MarkdownHoverParticipant } from './markdownHoverParticipant.js';
import { HoverColorPickerParticipant } from '../../colorPicker/browser/hoverColorPicker/hoverColorPickerParticipant.js';
import { InlayHintsHover } from '../../inlayHints/browser/inlayHintsHover.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { IHoverService } from '../../../../platform/hover/browser/hover.js';
import { IClipboardService } from '../../../../platform/clipboard/common/clipboardService.js';
import { MarkerHover } from './markerHoverParticipant.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RenderedContentHover_1, RenderedContentHoverParts_1;
let RenderedContentHover = RenderedContentHover_1 = class RenderedContentHover extends Disposable {
    constructor(editor, hoverResult, participants, context, keybindingService, hoverService, clipboardService) {
        super();
        const parts = hoverResult.hoverParts;
        this._renderedHoverParts = this._register(new RenderedContentHoverParts(editor, participants, parts, context, keybindingService, hoverService, clipboardService));
        const contentHoverComputerOptions = hoverResult.options;
        const anchor = contentHoverComputerOptions.anchor;
        const { showAtPosition, showAtSecondaryPosition } = RenderedContentHover_1.computeHoverPositions(editor, anchor.range, parts);
        this.shouldAppearBeforeContent = parts.some(m => m.isBeforeContent);
        this.showAtPosition = showAtPosition;
        this.showAtSecondaryPosition = showAtSecondaryPosition;
        this.initialMousePosX = anchor.initialMousePosX;
        this.initialMousePosY = anchor.initialMousePosY;
        this.shouldFocus = contentHoverComputerOptions.shouldFocus;
        this.source = contentHoverComputerOptions.source;
    }
    get domNode() {
        return this._renderedHoverParts.domNode;
    }
    get domNodeHasChildren() {
        return this._renderedHoverParts.domNodeHasChildren;
    }
    get focusedHoverPartIndex() {
        return this._renderedHoverParts.focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedHoverParts.hoverPartsCount;
    }
    focusHoverPartWithIndex(index) {
        this._renderedHoverParts.focusHoverPartWithIndex(index);
    }
    async updateHoverVerbosityLevel(action, index, focus) {
        this._renderedHoverParts.updateHoverVerbosityLevel(action, index, focus);
    }
    isColorPickerVisible() {
        return this._renderedHoverParts.isColorPickerVisible();
    }
    static computeHoverPositions(editor, anchorRange, hoverParts) {
        let startColumnBoundary = 1;
        if (editor.hasModel()) {
            // Ensure the range is on the current view line
            const viewModel = editor._getViewModel();
            const coordinatesConverter = viewModel.coordinatesConverter;
            const anchorViewRange = coordinatesConverter.convertModelRangeToViewRange(anchorRange);
            const anchorViewMinColumn = viewModel.getLineMinColumn(anchorViewRange.startLineNumber);
            const anchorViewRangeStart = new Position(anchorViewRange.startLineNumber, anchorViewMinColumn);
            startColumnBoundary = coordinatesConverter.convertViewPositionToModelPosition(anchorViewRangeStart).column;
        }
        // The anchor range is always on a single line
        const anchorStartLineNumber = anchorRange.startLineNumber;
        let secondaryPositionColumn = anchorRange.startColumn;
        let forceShowAtRange;
        for (const hoverPart of hoverParts) {
            const hoverPartRange = hoverPart.range;
            const hoverPartRangeOnAnchorStartLine = hoverPartRange.startLineNumber === anchorStartLineNumber;
            const hoverPartRangeOnAnchorEndLine = hoverPartRange.endLineNumber === anchorStartLineNumber;
            const hoverPartRangeIsOnAnchorLine = hoverPartRangeOnAnchorStartLine && hoverPartRangeOnAnchorEndLine;
            if (hoverPartRangeIsOnAnchorLine) {
                // this message has a range that is completely sitting on the line of the anchor
                const hoverPartStartColumn = hoverPartRange.startColumn;
                const minSecondaryPositionColumn = Math.min(secondaryPositionColumn, hoverPartStartColumn);
                secondaryPositionColumn = Math.max(minSecondaryPositionColumn, startColumnBoundary);
            }
            if (hoverPart.forceShowAtRange) {
                forceShowAtRange = hoverPartRange;
            }
        }
        let showAtPosition;
        let showAtSecondaryPosition;
        if (forceShowAtRange) {
            const forceShowAtPosition = forceShowAtRange.getStartPosition();
            showAtPosition = forceShowAtPosition;
            showAtSecondaryPosition = forceShowAtPosition;
        }
        else {
            showAtPosition = anchorRange.getStartPosition();
            showAtSecondaryPosition = new Position(anchorStartLineNumber, secondaryPositionColumn);
        }
        return {
            showAtPosition,
            showAtSecondaryPosition,
        };
    }
};
RenderedContentHover = RenderedContentHover_1 = __decorate([
    __param(4, IKeybindingService),
    __param(5, IHoverService),
    __param(6, IClipboardService)
], RenderedContentHover);
class RenderedStatusBar {
    constructor(fragment, _statusBar) {
        this._statusBar = _statusBar;
        fragment.appendChild(this._statusBar.hoverElement);
    }
    get hoverElement() {
        return this._statusBar.hoverElement;
    }
    get actions() {
        return this._statusBar.actions;
    }
    dispose() {
        this._statusBar.dispose();
    }
}
let RenderedContentHoverParts = class RenderedContentHoverParts extends Disposable {
    static { RenderedContentHoverParts_1 = this; }
    static { this._DECORATION_OPTIONS = ModelDecorationOptions.register({
        description: 'content-hover-highlight',
        className: 'hoverHighlight'
    }); }
    constructor(editor, participants, hoverParts, context, keybindingService, _hoverService, _clipboardService) {
        super();
        this._hoverService = _hoverService;
        this._clipboardService = _clipboardService;
        this._renderedParts = [];
        this._focusedHoverPartIndex = -1;
        this._context = context;
        this._fragment = document.createDocumentFragment();
        this._register(this._renderParts(participants, hoverParts, context, keybindingService, this._hoverService));
        this._register(this._registerListenersOnRenderedParts());
        this._register(this._createEditorDecorations(editor, hoverParts));
        this._updateMarkdownAndColorParticipantInfo(participants);
    }
    _createEditorDecorations(editor, hoverParts) {
        if (hoverParts.length === 0) {
            return Disposable.None;
        }
        let highlightRange = hoverParts[0].range;
        for (const hoverPart of hoverParts) {
            const hoverPartRange = hoverPart.range;
            highlightRange = Range.plusRange(highlightRange, hoverPartRange);
        }
        const highlightDecoration = editor.createDecorationsCollection();
        highlightDecoration.set([{
                range: highlightRange,
                options: RenderedContentHoverParts_1._DECORATION_OPTIONS
            }]);
        return toDisposable(() => {
            highlightDecoration.clear();
        });
    }
    _renderParts(participants, hoverParts, hoverContext, keybindingService, hoverService) {
        const statusBar = new EditorHoverStatusBar(keybindingService, hoverService);
        const hoverRenderingContext = {
            fragment: this._fragment,
            statusBar,
            ...hoverContext
        };
        const disposables = new DisposableStore();
        disposables.add(statusBar);
        for (const participant of participants) {
            const renderedHoverParts = this._renderHoverPartsForParticipant(hoverParts, participant, hoverRenderingContext);
            disposables.add(renderedHoverParts);
            for (const renderedHoverPart of renderedHoverParts.renderedHoverParts) {
                this._renderedParts.push({
                    type: 'hoverPart',
                    participant,
                    hoverPart: renderedHoverPart.hoverPart,
                    hoverElement: renderedHoverPart.hoverElement,
                });
            }
        }
        const renderedStatusBar = this._renderStatusBar(this._fragment, statusBar);
        if (renderedStatusBar) {
            disposables.add(renderedStatusBar);
            this._renderedParts.push({
                type: 'statusBar',
                hoverElement: renderedStatusBar.hoverElement,
                actions: renderedStatusBar.actions,
            });
        }
        return disposables;
    }
    _renderHoverPartsForParticipant(hoverParts, participant, hoverRenderingContext) {
        const hoverPartsForParticipant = hoverParts.filter(hoverPart => hoverPart.owner === participant);
        const hasHoverPartsForParticipant = hoverPartsForParticipant.length > 0;
        if (!hasHoverPartsForParticipant) {
            return new RenderedHoverParts([]);
        }
        return participant.renderHoverParts(hoverRenderingContext, hoverPartsForParticipant);
    }
    _renderStatusBar(fragment, statusBar) {
        if (!statusBar.hasContent) {
            return undefined;
        }
        return new RenderedStatusBar(fragment, statusBar);
    }
    _registerListenersOnRenderedParts() {
        const disposables = new DisposableStore();
        this._renderedParts.forEach((renderedPart, index) => {
            const element = renderedPart.hoverElement;
            element.tabIndex = 0;
            disposables.add(addDisposableListener(element, EventType.FOCUS_IN, (event) => {
                event.stopPropagation();
                this._focusedHoverPartIndex = index;
            }));
            disposables.add(addDisposableListener(element, EventType.FOCUS_OUT, (event) => {
                event.stopPropagation();
                this._focusedHoverPartIndex = -1;
            }));
            // Add copy button for marker hovers
            if (renderedPart.type === 'hoverPart' && renderedPart.hoverPart instanceof MarkerHover) {
                disposables.add(new HoverCopyButton(element, () => renderedPart.participant.getAccessibleContent(renderedPart.hoverPart), this._clipboardService, this._hoverService));
            }
        });
        return disposables;
    }
    _updateMarkdownAndColorParticipantInfo(participants) {
        const markdownHoverParticipant = participants.find(p => {
            return (p instanceof MarkdownHoverParticipant) && !(p instanceof InlayHintsHover);
        });
        if (markdownHoverParticipant) {
            this._markdownHoverParticipant = markdownHoverParticipant;
        }
        this._colorHoverParticipant = participants.find(p => p instanceof HoverColorPickerParticipant);
    }
    focusHoverPartWithIndex(index) {
        if (index < 0 || index >= this._renderedParts.length) {
            return;
        }
        this._renderedParts[index].hoverElement.focus();
    }
    async updateHoverVerbosityLevel(action, index, focus) {
        if (!this._markdownHoverParticipant) {
            return;
        }
        let rangeOfIndicesToUpdate;
        if (index >= 0) {
            rangeOfIndicesToUpdate = { start: index, endExclusive: index + 1 };
        }
        else {
            rangeOfIndicesToUpdate = this._findRangeOfMarkdownHoverParts(this._markdownHoverParticipant);
        }
        for (let i = rangeOfIndicesToUpdate.start; i < rangeOfIndicesToUpdate.endExclusive; i++) {
            const normalizedMarkdownHoverIndex = this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, i);
            if (normalizedMarkdownHoverIndex === undefined) {
                continue;
            }
            const renderedPart = await this._markdownHoverParticipant.updateMarkdownHoverVerbosityLevel(action, normalizedMarkdownHoverIndex);
            if (!renderedPart) {
                continue;
            }
            this._renderedParts[i] = {
                type: 'hoverPart',
                participant: this._markdownHoverParticipant,
                hoverPart: renderedPart.hoverPart,
                hoverElement: renderedPart.hoverElement,
            };
        }
        if (focus) {
            if (index >= 0) {
                this.focusHoverPartWithIndex(index);
            }
            else {
                this._context.focus();
            }
        }
        this._context.onContentsChanged();
    }
    isColorPickerVisible() {
        return this._colorHoverParticipant?.isColorPickerVisible() ?? false;
    }
    _normalizedIndexToMarkdownHoverIndexRange(markdownHoverParticipant, index) {
        const renderedPart = this._renderedParts[index];
        if (!renderedPart || renderedPart.type !== 'hoverPart') {
            return undefined;
        }
        const isHoverPartMarkdownHover = renderedPart.participant === markdownHoverParticipant;
        if (!isHoverPartMarkdownHover) {
            return undefined;
        }
        const firstIndexOfMarkdownHovers = this._renderedParts.findIndex(renderedPart => renderedPart.type === 'hoverPart'
            && renderedPart.participant === markdownHoverParticipant);
        if (firstIndexOfMarkdownHovers === -1) {
            throw new BugIndicatingError();
        }
        return index - firstIndexOfMarkdownHovers;
    }
    _findRangeOfMarkdownHoverParts(markdownHoverParticipant) {
        const copiedRenderedParts = this._renderedParts.slice();
        const firstIndexOfMarkdownHovers = copiedRenderedParts.findIndex(renderedPart => renderedPart.type === 'hoverPart' && renderedPart.participant === markdownHoverParticipant);
        const inversedLastIndexOfMarkdownHovers = copiedRenderedParts.reverse().findIndex(renderedPart => renderedPart.type === 'hoverPart' && renderedPart.participant === markdownHoverParticipant);
        const lastIndexOfMarkdownHovers = inversedLastIndexOfMarkdownHovers >= 0 ? copiedRenderedParts.length - inversedLastIndexOfMarkdownHovers : inversedLastIndexOfMarkdownHovers;
        return { start: firstIndexOfMarkdownHovers, endExclusive: lastIndexOfMarkdownHovers + 1 };
    }
    get domNode() {
        return this._fragment;
    }
    get domNodeHasChildren() {
        return this._fragment.hasChildNodes();
    }
    get focusedHoverPartIndex() {
        return this._focusedHoverPartIndex;
    }
    get hoverPartsCount() {
        return this._renderedParts.length;
    }
};
RenderedContentHoverParts = RenderedContentHoverParts_1 = __decorate([
    __param(4, IKeybindingService),
    __param(5, IHoverService),
    __param(6, IClipboardService)
], RenderedContentHoverParts);

export { RenderedContentHover };
