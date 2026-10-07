import { AsyncIterableProducer } from '../../../../base/common/async.js';
import { MarkdownString, isEmptyMarkdownString } from '../../../../base/common/htmlContent.js';
import { Position } from '../../../common/core/position.js';
import { ModelDecorationInjectedTextOptions } from '../../../common/model/textModel.js';
import { HoverForeignElementAnchor } from '../../hover/browser/hoverTypes.js';
import { ITextModelService } from '../../../common/services/resolverService.js';
import { getHoverProviderResultsAsAsyncIterable } from '../../hover/browser/getHover.js';
import { MarkdownHoverParticipant, MarkdownHover } from '../../hover/browser/markdownHoverParticipant.js';
import { InlayHintsController, RenderedInlayHintLabelPart } from './inlayHintsController.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { localize } from '../../../../nls.js';
import { isMacintosh } from '../../../../base/common/platform.js';
import { asCommandLink } from './inlayHints.js';
import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { IHoverService } from '../../../../platform/hover/browser/hover.js';
import { ICommandService } from '../../../../platform/commands/common/commands.js';
import { IMarkdownRendererService } from '../../../../platform/markdown/browser/markdownRenderer.js';

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
class InlayHintsHoverAnchor extends HoverForeignElementAnchor {
    constructor(part, owner, initialMousePosX, initialMousePosY) {
        super(10, owner, part.item.anchor.range, initialMousePosX, initialMousePosY, true);
        this.part = part;
    }
}
let InlayHintsHover = class InlayHintsHover extends MarkdownHoverParticipant {
    constructor(editor, markdownRendererService, keybindingService, hoverService, configurationService, _resolverService, languageFeaturesService, commandService) {
        super(editor, markdownRendererService, configurationService, languageFeaturesService, keybindingService, hoverService, commandService);
        this._resolverService = _resolverService;
        this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(mouseEvent) {
        const controller = InlayHintsController.get(this._editor);
        if (!controller) {
            return null;
        }
        if (mouseEvent.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
            return null;
        }
        const options = mouseEvent.target.detail.injectedText?.options;
        if (!(options instanceof ModelDecorationInjectedTextOptions && options.attachedData instanceof RenderedInlayHintLabelPart)) {
            return null;
        }
        return new InlayHintsHoverAnchor(options.attachedData, this, mouseEvent.event.posx, mouseEvent.event.posy);
    }
    computeSync() {
        return [];
    }
    computeAsync(anchor, _lineDecorations, source, token) {
        if (!(anchor instanceof InlayHintsHoverAnchor)) {
            return AsyncIterableProducer.EMPTY;
        }
        return new AsyncIterableProducer(async (executor) => {
            const { part } = anchor;
            await part.item.resolve(token);
            if (token.isCancellationRequested) {
                return;
            }
            // (1) Inlay Tooltip
            let itemTooltip;
            if (typeof part.item.hint.tooltip === 'string') {
                itemTooltip = new MarkdownString().appendText(part.item.hint.tooltip);
            }
            else if (part.item.hint.tooltip) {
                itemTooltip = part.item.hint.tooltip;
            }
            if (itemTooltip) {
                executor.emitOne(new MarkdownHover(this, anchor.range, [itemTooltip], false, 0));
            }
            // (1.2) Inlay dbl-click gesture
            if (isNonEmptyArray(part.item.hint.textEdits)) {
                executor.emitOne(new MarkdownHover(this, anchor.range, [new MarkdownString().appendText(localize(1164, "Double-click to insert"))], false, 10001));
            }
            // (2) Inlay Label Part Tooltip
            let partTooltip;
            if (typeof part.part.tooltip === 'string') {
                partTooltip = new MarkdownString().appendText(part.part.tooltip);
            }
            else if (part.part.tooltip) {
                partTooltip = part.part.tooltip;
            }
            if (partTooltip) {
                executor.emitOne(new MarkdownHover(this, anchor.range, [partTooltip], false, 1));
            }
            // (2.2) Inlay Label Part Help Hover
            if (part.part.location || part.part.command) {
                let linkHint;
                const useMetaKey = this._editor.getOption(86 /* EditorOption.multiCursorModifier */) === 'altKey';
                const kb = useMetaKey
                    ? isMacintosh
                        ? localize(1165, "cmd + click")
                        : localize(1166, "ctrl + click")
                    : isMacintosh
                        ? localize(1167, "option + click")
                        : localize(1168, "alt + click");
                if (part.part.location && part.part.command) {
                    linkHint = new MarkdownString().appendText(localize(1169, 'Go to Definition ({0}), right click for more', kb));
                }
                else if (part.part.location) {
                    linkHint = new MarkdownString().appendText(localize(1170, 'Go to Definition ({0})', kb));
                }
                else if (part.part.command) {
                    linkHint = new MarkdownString(`[${localize(1171, "Execute Command")}](${asCommandLink(part.part.command)} "${part.part.command.title}") (${kb})`, { isTrusted: true });
                }
                if (linkHint) {
                    executor.emitOne(new MarkdownHover(this, anchor.range, [linkHint], false, 10000));
                }
            }
            // (3) Inlay Label Part Location tooltip
            const iterable = this._resolveInlayHintLabelPartHover(part, token);
            for await (const item of iterable) {
                executor.emitOne(item);
            }
        });
    }
    async *_resolveInlayHintLabelPartHover(part, token) {
        if (!part.part.location) {
            return;
        }
        const { uri, range } = part.part.location;
        const ref = await this._resolverService.createModelReference(uri);
        try {
            const model = ref.object.textEditorModel;
            if (!this._languageFeaturesService.hoverProvider.has(model)) {
                return;
            }
            for await (const item of getHoverProviderResultsAsAsyncIterable(this._languageFeaturesService.hoverProvider, model, new Position(range.startLineNumber, range.startColumn), token)) {
                if (!isEmptyMarkdownString(item.hover.contents)) {
                    yield new MarkdownHover(this, part.item.anchor.range, item.hover.contents, false, 2 + item.ordinal);
                }
            }
        }
        finally {
            ref.dispose();
        }
    }
};
InlayHintsHover = __decorate([
    __param(1, IMarkdownRendererService),
    __param(2, IKeybindingService),
    __param(3, IHoverService),
    __param(4, IConfigurationService),
    __param(5, ITextModelService),
    __param(6, ILanguageFeaturesService),
    __param(7, ICommandService)
], InlayHintsHover);

export { InlayHintsHover };
