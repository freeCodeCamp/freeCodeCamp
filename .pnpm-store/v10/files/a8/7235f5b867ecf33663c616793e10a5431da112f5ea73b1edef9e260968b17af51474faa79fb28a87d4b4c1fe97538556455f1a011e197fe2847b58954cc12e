import { $ as $$1, append, addDisposableListener, getDomNodePagePosition } from '../../../../base/browser/dom.js';
import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { disposableTimeout, createCancelablePromise } from '../../../../base/common/async.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { DisposableStore, Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import { basename } from '../../../../base/common/resources.js';
import { Range } from '../../../common/core/range.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { IMarkerDecorationsService } from '../../../common/services/markerDecorations.js';
import { quickFixCommandId, ApplyCodeActionReason, getCodeActions } from '../../codeAction/browser/codeAction.js';
import { CodeActionController } from '../../codeAction/browser/codeActionController.js';
import { CodeActionTriggerSource, CodeActionKind } from '../../codeAction/common/types.js';
import { MarkerController, NextMarkerAction } from '../../gotoError/browser/gotoError.js';
import { RenderedHoverParts } from './hoverTypes.js';
import { localize } from '../../../../nls.js';
import { MarkerSeverity, IMarkerData } from '../../../../platform/markers/common/markers.js';
import { IOpenerService } from '../../../../platform/opener/common/opener.js';
import { Progress } from '../../../../platform/progress/common/progress.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { Codicon } from '../../../../base/common/codicons.js';

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
const $ = $$1;
class MarkerHover {
    constructor(owner, range, marker) {
        this.owner = owner;
        this.range = range;
        this.marker = marker;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* HoverAnchorType.Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
}
const markerCodeActionTrigger = {
    type: 1 /* CodeActionTriggerType.Invoke */,
    filter: { include: CodeActionKind.QuickFix },
    triggerAction: CodeActionTriggerSource.QuickFixHover
};
let MarkerHoverParticipant = class MarkerHoverParticipant {
    constructor(_editor, _markerDecorationsService, _openerService, _languageFeaturesService) {
        this._editor = _editor;
        this._markerDecorationsService = _markerDecorationsService;
        this._openerService = _openerService;
        this._languageFeaturesService = _languageFeaturesService;
        this.hoverOrdinal = 1;
        this.recentMarkerCodeActionsInfo = undefined;
    }
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */ && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = this._editor.getModel();
        const anchorRange = anchor.range;
        if (!model.isValidRange(anchor.range)) {
            return [];
        }
        const lineNumber = anchorRange.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        for (const d of lineDecorations) {
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            const marker = this._markerDecorationsService.getMarker(model.uri, d);
            if (!marker) {
                continue;
            }
            const range = new Range(anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkerHover(this, range, marker));
        }
        return result;
    }
    renderHoverParts(context, hoverParts) {
        if (!hoverParts.length) {
            return new RenderedHoverParts([]);
        }
        const renderedHoverParts = [];
        hoverParts.forEach(hoverPart => {
            const renderedMarkerHover = this._renderMarkerHover(hoverPart);
            context.fragment.appendChild(renderedMarkerHover.hoverElement);
            renderedHoverParts.push(renderedMarkerHover);
        });
        const markerHoverForStatusbar = hoverParts.length === 1 ? hoverParts[0] : hoverParts.sort((a, b) => MarkerSeverity.compare(a.marker.severity, b.marker.severity))[0];
        const disposables = this._renderMarkerStatusbar(context, markerHoverForStatusbar);
        return new RenderedHoverParts(renderedHoverParts, disposables);
    }
    getAccessibleContent(hoverPart) {
        return hoverPart.marker.message;
    }
    _renderMarkerHover(markerHover) {
        const disposables = new DisposableStore();
        const hoverElement = $('div.hover-row');
        const markerElement = append(hoverElement, $('div.marker.hover-contents'));
        const { source, message, code, relatedInformation } = markerHover.marker;
        this._editor.applyFontInfo(markerElement);
        const messageElement = append(markerElement, $('span'));
        messageElement.style.whiteSpace = 'pre-wrap';
        messageElement.innerText = message;
        if (source || code) {
            // Code has link
            if (code && typeof code !== 'string') {
                const sourceAndCodeElement = $('span');
                if (source) {
                    const sourceElement = append(sourceAndCodeElement, $('span'));
                    sourceElement.innerText = source;
                }
                const codeLink = append(sourceAndCodeElement, $('a.code-link'));
                codeLink.setAttribute('href', code.target.toString(true));
                disposables.add(addDisposableListener(codeLink, 'click', (e) => {
                    this._openerService.open(code.target, { allowCommands: true });
                    e.preventDefault();
                    e.stopPropagation();
                }));
                const codeElement = append(codeLink, $('span'));
                codeElement.innerText = code.value;
                const detailsElement = append(markerElement, sourceAndCodeElement);
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
            }
            else {
                const detailsElement = append(markerElement, $('span'));
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
                detailsElement.innerText = source && code ? `${source}(${code})` : source ? source : `(${code})`;
            }
        }
        if (isNonEmptyArray(relatedInformation)) {
            for (const { message, resource, startLineNumber, startColumn } of relatedInformation) {
                const relatedInfoContainer = append(markerElement, $('div'));
                relatedInfoContainer.style.marginTop = '8px';
                const a = append(relatedInfoContainer, $('a'));
                a.innerText = `${basename(resource)}(${startLineNumber}, ${startColumn}): `;
                a.style.cursor = 'pointer';
                disposables.add(addDisposableListener(a, 'click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (this._openerService) {
                        const editorOptions = { selection: { startLineNumber, startColumn } };
                        this._openerService.open(resource, {
                            fromUserGesture: true,
                            editorOptions
                        }).catch(onUnexpectedError);
                    }
                }));
                const messageElement = append(relatedInfoContainer, $('span'));
                messageElement.innerText = message;
                this._editor.applyFontInfo(messageElement);
            }
        }
        const renderedHoverPart = {
            hoverPart: markerHover,
            hoverElement,
            dispose: () => disposables.dispose()
        };
        return renderedHoverPart;
    }
    _renderMarkerStatusbar(context, markerHover) {
        const disposables = new DisposableStore();
        if (markerHover.marker.severity === MarkerSeverity.Error || markerHover.marker.severity === MarkerSeverity.Warning || markerHover.marker.severity === MarkerSeverity.Info) {
            const markerController = MarkerController.get(this._editor);
            if (markerController) {
                context.statusBar.addAction({
                    label: localize(1139, "View Problem"),
                    commandId: NextMarkerAction.ID,
                    run: () => {
                        context.hide();
                        markerController.showAtMarker(markerHover.marker);
                        this._editor.focus();
                    }
                });
            }
        }
        if (!this._editor.getOption(104 /* EditorOption.readOnly */)) {
            const quickfixPlaceholderElement = context.statusBar.append($('div'));
            if (this.recentMarkerCodeActionsInfo) {
                if (IMarkerData.makeKey(this.recentMarkerCodeActionsInfo.marker) === IMarkerData.makeKey(markerHover.marker)) {
                    if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                        quickfixPlaceholderElement.textContent = localize(1140, "No quick fixes available");
                    }
                }
                else {
                    this.recentMarkerCodeActionsInfo = undefined;
                }
            }
            const updatePlaceholderDisposable = this.recentMarkerCodeActionsInfo && !this.recentMarkerCodeActionsInfo.hasCodeActions ? Disposable.None : disposableTimeout(() => quickfixPlaceholderElement.textContent = localize(1141, "Checking for quick fixes..."), 200, disposables);
            if (!quickfixPlaceholderElement.textContent) {
                // Have some content in here to avoid flickering
                quickfixPlaceholderElement.textContent = String.fromCharCode(0xA0); // &nbsp;
            }
            const codeActionsPromise = this.getCodeActions(markerHover.marker);
            disposables.add(toDisposable(() => codeActionsPromise.cancel()));
            codeActionsPromise.then(actions => {
                updatePlaceholderDisposable.dispose();
                this.recentMarkerCodeActionsInfo = { marker: markerHover.marker, hasCodeActions: actions.validActions.length > 0 };
                if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                    actions.dispose();
                    quickfixPlaceholderElement.textContent = localize(1142, "No quick fixes available");
                    return;
                }
                quickfixPlaceholderElement.style.display = 'none';
                let showing = false;
                disposables.add(toDisposable(() => {
                    if (!showing) {
                        actions.dispose();
                    }
                }));
                context.statusBar.addAction({
                    label: localize(1143, "Quick Fix..."),
                    commandId: quickFixCommandId,
                    run: (target) => {
                        showing = true;
                        const controller = CodeActionController.get(this._editor);
                        const elementPosition = getDomNodePagePosition(target);
                        // Hide the hover pre-emptively, otherwise the editor can close the code actions
                        // context menu as well when using keyboard navigation
                        context.hide();
                        controller?.showCodeActions(markerCodeActionTrigger, actions, {
                            x: elementPosition.left,
                            y: elementPosition.top,
                            width: elementPosition.width,
                            height: elementPosition.height
                        });
                    }
                });
                const aiCodeAction = actions.validActions.find(action => action.action.isAI);
                if (aiCodeAction) {
                    context.statusBar.addAction({
                        label: aiCodeAction.action.title,
                        commandId: aiCodeAction.action.command?.id ?? '',
                        iconClass: ThemeIcon.asClassName(Codicon.sparkle),
                        run: () => {
                            const controller = CodeActionController.get(this._editor);
                            controller?.applyCodeAction(aiCodeAction, false, false, ApplyCodeActionReason.FromProblemsHover);
                        }
                    });
                }
                // Notify that the contents have changed given we added
                // actions to the hover
                // https://github.com/microsoft/vscode/issues/250424
                context.onContentsChanged();
            }, onUnexpectedError);
        }
        return disposables;
    }
    getCodeActions(marker) {
        return createCancelablePromise(cancellationToken => {
            return getCodeActions(this._languageFeaturesService.codeActionProvider, this._editor.getModel(), new Range(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn), markerCodeActionTrigger, Progress.None, cancellationToken);
        });
    }
};
MarkerHoverParticipant = __decorate([
    __param(1, IMarkerDecorationsService),
    __param(2, IOpenerService),
    __param(3, ILanguageFeaturesService)
], MarkerHoverParticipant);

export { MarkerHover, MarkerHoverParticipant };
