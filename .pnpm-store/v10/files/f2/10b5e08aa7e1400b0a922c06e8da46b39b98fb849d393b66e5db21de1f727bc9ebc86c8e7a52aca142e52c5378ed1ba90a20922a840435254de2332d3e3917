import '../../../../base/browser/ui/codicons/codicon/codicon.css';
import '../../../../base/browser/ui/codicons/codicon/codicon-modifiers.css';
import '../../../contrib/symbolIcons/browser/symbolIcons.js';
import { AbstractGotoSymbolQuickAccessProvider } from '../../../contrib/quickAccess/browser/gotoSymbolQuickAccess.js';
import { Registry } from '../../../../platform/registry/common/platform.js';
import { Extensions } from '../../../../platform/quickinput/common/quickAccess.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { QuickOutlineNLS } from '../../../common/standaloneStrings.js';
import { Event } from '../../../../base/common/event.js';
import { EditorAction, registerEditorAction } from '../../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { IQuickInputService, ItemActivation } from '../../../../platform/quickinput/common/quickInput.js';
import { IOutlineModelService } from '../../../contrib/documentSymbols/browser/outlineModel.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';

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
let StandaloneGotoSymbolQuickAccessProvider = class StandaloneGotoSymbolQuickAccessProvider extends AbstractGotoSymbolQuickAccessProvider {
    constructor(editorService, languageFeaturesService, outlineModelService) {
        super(languageFeaturesService, outlineModelService);
        this.editorService = editorService;
        this.onDidActiveTextEditorControlChange = Event.None;
    }
    get activeTextEditorControl() {
        return this.editorService.getFocusedCodeEditor() ?? undefined;
    }
};
StandaloneGotoSymbolQuickAccessProvider = __decorate([
    __param(0, ICodeEditorService),
    __param(1, ILanguageFeaturesService),
    __param(2, IOutlineModelService)
], StandaloneGotoSymbolQuickAccessProvider);
class GotoSymbolAction extends EditorAction {
    static { this.ID = 'editor.action.quickOutline'; }
    constructor() {
        super({
            id: GotoSymbolAction.ID,
            label: QuickOutlineNLS.quickOutlineActionLabel,
            alias: 'Go to Symbol...',
            precondition: EditorContextKeys.hasDocumentSymbolProvider,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 45 /* KeyCode.KeyO */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: 'navigation',
                order: 3
            }
        });
    }
    run(accessor) {
        accessor.get(IQuickInputService).quickAccess.show(AbstractGotoSymbolQuickAccessProvider.PREFIX, { itemActivation: ItemActivation.NONE });
    }
}
registerEditorAction(GotoSymbolAction);
Registry.as(Extensions.Quickaccess).registerQuickAccessProvider({
    ctor: StandaloneGotoSymbolQuickAccessProvider,
    prefix: AbstractGotoSymbolQuickAccessProvider.PREFIX,
    helpEntries: [
        { description: QuickOutlineNLS.quickOutlineActionLabel, prefix: AbstractGotoSymbolQuickAccessProvider.PREFIX, commandId: GotoSymbolAction.ID },
        { description: QuickOutlineNLS.quickOutlineByCategoryActionLabel, prefix: AbstractGotoSymbolQuickAccessProvider.PREFIX_BY_CATEGORY }
    ]
});

export { GotoSymbolAction, StandaloneGotoSymbolQuickAccessProvider };
