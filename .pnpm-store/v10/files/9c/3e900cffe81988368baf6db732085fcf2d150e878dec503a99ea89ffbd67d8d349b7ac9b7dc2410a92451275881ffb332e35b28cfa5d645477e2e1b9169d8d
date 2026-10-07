import { RunOnceScheduler, createCancelablePromise } from '../../../../base/common/async.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { MarkdownString } from '../../../../base/common/htmlContent.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { Schemas } from '../../../../base/common/network.js';
import { isMacintosh } from '../../../../base/common/platform.js';
import { originalFSPath, joinPath } from '../../../../base/common/resources.js';
import { StopWatch } from '../../../../base/common/stopwatch.js';
import { URI } from '../../../../base/common/uri.js';
import './links.css';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { ILanguageFeatureDebounceService } from '../../../common/services/languageFeatureDebounce.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { ClickLinkGesture } from '../../gotoSymbol/browser/link/clickLinkGesture.js';
import { getLinks } from './getLinks.js';
import { localize, localize2 } from '../../../../nls.js';
import { INotificationService } from '../../../../platform/notification/common/notification.js';
import { IOpenerService } from '../../../../platform/opener/common/opener.js';

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
var LinkDetector_1;
let LinkDetector = class LinkDetector extends Disposable {
    static { LinkDetector_1 = this; }
    static { this.ID = 'editor.linkDetector'; }
    static get(editor) {
        return editor.getContribution(LinkDetector_1.ID);
    }
    constructor(editor, openerService, notificationService, languageFeaturesService, languageFeatureDebounceService) {
        super();
        this.editor = editor;
        this.openerService = openerService;
        this.notificationService = notificationService;
        this.languageFeaturesService = languageFeaturesService;
        this.providers = this.languageFeaturesService.linkProvider;
        this.debounceInformation = languageFeatureDebounceService.for(this.providers, 'Links', { min: 1000, max: 4000 });
        this.computeLinks = this._register(new RunOnceScheduler(() => this.computeLinksNow(), 1000));
        this.computePromise = null;
        this.activeLinksList = null;
        this.currentOccurrences = {};
        this.activeLinkDecorationId = null;
        const clickLinkGesture = this._register(new ClickLinkGesture(editor));
        this._register(clickLinkGesture.onMouseMoveOrRelevantKeyDown(([mouseEvent, keyboardEvent]) => {
            this._onEditorMouseMove(mouseEvent, keyboardEvent);
        }));
        this._register(clickLinkGesture.onExecute((e) => {
            this.onEditorMouseUp(e);
        }));
        this._register(clickLinkGesture.onCancel((e) => {
            this.cleanUpActiveLinkDecoration();
        }));
        this._register(editor.onDidChangeConfiguration((e) => {
            if (!e.hasChanged(79 /* EditorOption.links */)) {
                return;
            }
            // Remove any links (for the getting disabled case)
            this.updateDecorations([]);
            // Stop any computation (for the getting disabled case)
            this.stop();
            // Start computing (for the getting enabled case)
            this.computeLinks.schedule(0);
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            if (!this.editor.hasModel()) {
                return;
            }
            this.computeLinks.schedule(this.debounceInformation.get(this.editor.getModel()));
        }));
        this._register(editor.onDidChangeModel((e) => {
            this.currentOccurrences = {};
            this.activeLinkDecorationId = null;
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this._register(editor.onDidChangeModelLanguage((e) => {
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this._register(this.providers.onDidChange((e) => {
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this.computeLinks.schedule(0);
    }
    async computeLinksNow() {
        if (!this.editor.hasModel() || !this.editor.getOption(79 /* EditorOption.links */)) {
            return;
        }
        const model = this.editor.getModel();
        if (model.isTooLargeForSyncing()) {
            return;
        }
        if (!this.providers.has(model)) {
            return;
        }
        if (this.activeLinksList) {
            this.activeLinksList.dispose();
            this.activeLinksList = null;
        }
        this.computePromise = createCancelablePromise(token => getLinks(this.providers, model, token));
        try {
            const sw = new StopWatch(false);
            this.activeLinksList = await this.computePromise;
            this.debounceInformation.update(model, sw.elapsed());
            if (model.isDisposed()) {
                return;
            }
            this.updateDecorations(this.activeLinksList.links);
        }
        catch (err) {
            onUnexpectedError(err);
        }
        finally {
            this.computePromise = null;
        }
    }
    updateDecorations(links) {
        const useMetaKey = (this.editor.getOption(86 /* EditorOption.multiCursorModifier */) === 'altKey');
        const oldDecorations = [];
        const keys = Object.keys(this.currentOccurrences);
        for (const decorationId of keys) {
            const occurence = this.currentOccurrences[decorationId];
            oldDecorations.push(occurence.decorationId);
        }
        const newDecorations = [];
        if (links) {
            // Not sure why this is sometimes null
            for (const link of links) {
                newDecorations.push(LinkOccurrence.decoration(link, useMetaKey));
            }
        }
        this.editor.changeDecorations((changeAccessor) => {
            const decorations = changeAccessor.deltaDecorations(oldDecorations, newDecorations);
            this.currentOccurrences = {};
            this.activeLinkDecorationId = null;
            for (let i = 0, len = decorations.length; i < len; i++) {
                const occurence = new LinkOccurrence(links[i], decorations[i]);
                this.currentOccurrences[occurence.decorationId] = occurence;
            }
        });
    }
    _onEditorMouseMove(mouseEvent, withKey) {
        const useMetaKey = (this.editor.getOption(86 /* EditorOption.multiCursorModifier */) === 'altKey');
        if (this.isEnabled(mouseEvent, withKey)) {
            this.cleanUpActiveLinkDecoration(); // always remove previous link decoration as their can only be one
            const occurrence = this.getLinkOccurrence(mouseEvent.target.position);
            if (occurrence) {
                this.editor.changeDecorations((changeAccessor) => {
                    occurrence.activate(changeAccessor, useMetaKey);
                    this.activeLinkDecorationId = occurrence.decorationId;
                });
            }
        }
        else {
            this.cleanUpActiveLinkDecoration();
        }
    }
    cleanUpActiveLinkDecoration() {
        const useMetaKey = (this.editor.getOption(86 /* EditorOption.multiCursorModifier */) === 'altKey');
        if (this.activeLinkDecorationId) {
            const occurrence = this.currentOccurrences[this.activeLinkDecorationId];
            if (occurrence) {
                this.editor.changeDecorations((changeAccessor) => {
                    occurrence.deactivate(changeAccessor, useMetaKey);
                });
            }
            this.activeLinkDecorationId = null;
        }
    }
    onEditorMouseUp(mouseEvent) {
        if (!this.isEnabled(mouseEvent)) {
            return;
        }
        const occurrence = this.getLinkOccurrence(mouseEvent.target.position);
        if (!occurrence) {
            return;
        }
        this.openLinkOccurrence(occurrence, mouseEvent.hasSideBySideModifier, true /* from user gesture */);
    }
    openLinkOccurrence(occurrence, openToSide, fromUserGesture = false) {
        if (!this.openerService) {
            return;
        }
        const { link } = occurrence;
        link.resolve(CancellationToken.None).then(uri => {
            // Support for relative file URIs of the shape file://./relativeFile.txt or file:///./relativeFile.txt
            if (typeof uri === 'string' && this.editor.hasModel()) {
                const modelUri = this.editor.getModel().uri;
                if (modelUri.scheme === Schemas.file && uri.startsWith(`${Schemas.file}:`)) {
                    const parsedUri = URI.parse(uri);
                    if (parsedUri.scheme === Schemas.file) {
                        const fsPath = originalFSPath(parsedUri);
                        let relativePath = null;
                        if (fsPath.startsWith('/./') || fsPath.startsWith('\\.\\')) {
                            relativePath = `.${fsPath.substr(1)}`;
                        }
                        else if (fsPath.startsWith('//./') || fsPath.startsWith('\\\\.\\')) {
                            relativePath = `.${fsPath.substr(2)}`;
                        }
                        if (relativePath) {
                            uri = joinPath(modelUri, relativePath);
                        }
                    }
                }
            }
            return this.openerService.open(uri, { openToSide, fromUserGesture, allowContributedOpeners: true, allowCommands: true, fromWorkspace: true });
        }, err => {
            const messageOrError = err instanceof Error ? err.message : err;
            // different error cases
            if (messageOrError === 'invalid') {
                this.notificationService.warn(localize(1277, 'Failed to open this link because it is not well-formed: {0}', link.url.toString()));
            }
            else if (messageOrError === 'missing') {
                this.notificationService.warn(localize(1278, 'Failed to open this link because its target is missing.'));
            }
            else {
                onUnexpectedError(err);
            }
        });
    }
    getLinkOccurrence(position) {
        if (!this.editor.hasModel() || !position) {
            return null;
        }
        const decorations = this.editor.getModel().getDecorationsInRange({
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: position.lineNumber,
            endColumn: position.column
        }, 0, true);
        for (const decoration of decorations) {
            const currentOccurrence = this.currentOccurrences[decoration.id];
            if (currentOccurrence) {
                return currentOccurrence;
            }
        }
        return null;
    }
    isEnabled(mouseEvent, withKey) {
        return Boolean((mouseEvent.target.type === 6 /* MouseTargetType.CONTENT_TEXT */)
            && ((mouseEvent.hasTriggerModifier || (withKey && withKey.keyCodeIsTriggerKey)) || mouseEvent.isMiddleClick && mouseEvent.mouseMiddleClickAction === 'openLink'));
    }
    stop() {
        this.computeLinks.cancel();
        if (this.activeLinksList) {
            this.activeLinksList?.dispose();
            this.activeLinksList = null;
        }
        if (this.computePromise) {
            this.computePromise.cancel();
            this.computePromise = null;
        }
    }
    dispose() {
        super.dispose();
        this.stop();
    }
};
LinkDetector = LinkDetector_1 = __decorate([
    __param(1, IOpenerService),
    __param(2, INotificationService),
    __param(3, ILanguageFeaturesService),
    __param(4, ILanguageFeatureDebounceService)
], LinkDetector);
const decoration = {
    general: ModelDecorationOptions.register({
        description: 'detected-link',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        collapseOnReplaceEdit: true,
        inlineClassName: 'detected-link'
    }),
    active: ModelDecorationOptions.register({
        description: 'detected-link-active',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        collapseOnReplaceEdit: true,
        inlineClassName: 'detected-link-active'
    })
};
class LinkOccurrence {
    static decoration(link, useMetaKey) {
        return {
            range: link.range,
            options: LinkOccurrence._getOptions(link, useMetaKey, false)
        };
    }
    static _getOptions(link, useMetaKey, isActive) {
        const options = { ...(isActive ? decoration.active : decoration.general) };
        options.hoverMessage = getHoverMessage(link, useMetaKey);
        return options;
    }
    constructor(link, decorationId) {
        this.link = link;
        this.decorationId = decorationId;
    }
    activate(changeAccessor, useMetaKey) {
        changeAccessor.changeDecorationOptions(this.decorationId, LinkOccurrence._getOptions(this.link, useMetaKey, true));
    }
    deactivate(changeAccessor, useMetaKey) {
        changeAccessor.changeDecorationOptions(this.decorationId, LinkOccurrence._getOptions(this.link, useMetaKey, false));
    }
}
function getHoverMessage(link, useMetaKey) {
    const executeCmd = link.url && /^command:/i.test(link.url.toString());
    const label = link.tooltip
        ? link.tooltip
        : executeCmd
            ? localize(1279, 'Execute command')
            : localize(1280, 'Follow link');
    const kb = useMetaKey
        ? isMacintosh
            ? localize(1281, "cmd + click")
            : localize(1282, "ctrl + click")
        : isMacintosh
            ? localize(1283, "option + click")
            : localize(1284, "alt + click");
    if (link.url) {
        let nativeLabel = '';
        if (/^command:/i.test(link.url.toString())) {
            // Don't show complete command arguments in the native tooltip
            const match = link.url.toString().match(/^command:([^?#]+)/);
            if (match) {
                const commandId = match[1];
                nativeLabel = localize(1285, "Execute command {0}", commandId);
            }
        }
        const hoverMessage = new MarkdownString('', true)
            .appendLink(link.url.toString(true).replace(/ /g, '%20'), label, nativeLabel)
            .appendMarkdown(` (${kb})`);
        return hoverMessage;
    }
    else {
        return new MarkdownString().appendText(`${label} (${kb})`);
    }
}
class OpenLinkAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.openLink',
            label: localize2(1286, "Open Link"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        const linkDetector = LinkDetector.get(editor);
        if (!linkDetector) {
            return;
        }
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        for (const sel of selections) {
            const link = linkDetector.getLinkOccurrence(sel.getEndPosition());
            if (link) {
                linkDetector.openLinkOccurrence(link, false);
            }
        }
    }
}
registerEditorContribution(LinkDetector.ID, LinkDetector, 1 /* EditorContributionInstantiation.AfterFirstRender */);
registerEditorAction(OpenLinkAction);

export { LinkDetector };
