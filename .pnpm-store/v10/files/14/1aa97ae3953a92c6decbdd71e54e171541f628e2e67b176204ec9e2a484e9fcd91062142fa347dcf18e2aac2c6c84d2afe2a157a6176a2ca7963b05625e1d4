import { Codicon } from '../../../../base/common/codicons.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution, registerEditorAction, EditorCommand, registerEditorCommand, EditorAction } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { IMarkerNavigationService } from './markerNavigationService.js';
import { localize2, localize } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { registerIcon } from '../../../../platform/theme/common/iconRegistry.js';
import { MarkerNavigationWidget } from './gotoErrorWidget.js';

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
var MarkerController_1;
let MarkerController = class MarkerController {
    static { MarkerController_1 = this; }
    static { this.ID = 'editor.contrib.markerController'; }
    static get(editor) {
        return editor.getContribution(MarkerController_1.ID);
    }
    constructor(editor, _markerNavigationService, _contextKeyService, _editorService, _instantiationService) {
        this._markerNavigationService = _markerNavigationService;
        this._contextKeyService = _contextKeyService;
        this._editorService = _editorService;
        this._instantiationService = _instantiationService;
        this._sessionDispoables = new DisposableStore();
        this._editor = editor;
        this._widgetVisible = CONTEXT_MARKERS_NAVIGATION_VISIBLE.bindTo(this._contextKeyService);
    }
    dispose() {
        this._cleanUp();
        this._sessionDispoables.dispose();
    }
    _cleanUp() {
        this._widgetVisible.reset();
        this._sessionDispoables.clear();
        this._widget = undefined;
        this._model = undefined;
    }
    _getOrCreateModel(uri) {
        if (this._model && this._model.matches(uri)) {
            return this._model;
        }
        let reusePosition = false;
        if (this._model) {
            reusePosition = true;
            this._cleanUp();
        }
        this._model = this._markerNavigationService.getMarkerList(uri);
        if (reusePosition) {
            this._model.move(true, this._editor.getModel(), this._editor.getPosition());
        }
        this._widget = this._instantiationService.createInstance(MarkerNavigationWidget, this._editor);
        this._widget.onDidClose(() => this.close(), this, this._sessionDispoables);
        this._widgetVisible.set(true);
        this._sessionDispoables.add(this._model);
        this._sessionDispoables.add(this._widget);
        // follow cursor
        this._sessionDispoables.add(this._editor.onDidChangeCursorPosition(e => {
            if (!this._model?.selected || !Range.containsPosition(this._model?.selected.marker, e.position)) {
                this._model?.resetIndex();
            }
        }));
        // update markers
        this._sessionDispoables.add(this._model.onDidChange(() => {
            if (!this._widget || !this._widget.position || !this._model) {
                return;
            }
            const info = this._model.find(this._editor.getModel().uri, this._widget.position);
            if (info) {
                this._widget.updateMarker(info.marker);
            }
            else {
                this._widget.showStale();
            }
        }));
        // open related
        this._sessionDispoables.add(this._widget.onDidSelectRelatedInformation(related => {
            this._editorService.openCodeEditor({
                resource: related.resource,
                options: { pinned: true, revealIfOpened: true, selection: Range.lift(related).collapseToStart() }
            }, this._editor);
            this.close(false);
        }));
        this._sessionDispoables.add(this._editor.onDidChangeModel(() => this._cleanUp()));
        return this._model;
    }
    close(focusEditor = true) {
        this._cleanUp();
        if (focusEditor) {
            this._editor.focus();
        }
    }
    showAtMarker(marker) {
        if (!this._editor.hasModel()) {
            return;
        }
        const textModel = this._editor.getModel();
        const model = this._getOrCreateModel(textModel.uri);
        model.resetIndex();
        model.move(true, textModel, new Position(marker.startLineNumber, marker.startColumn));
        if (model.selected) {
            this._widget.showAtMarker(model.selected.marker, model.selected.index, model.selected.total);
        }
    }
    async navigate(next, multiFile) {
        if (!this._editor.hasModel()) {
            return;
        }
        const textModel = this._editor.getModel();
        const model = this._getOrCreateModel(multiFile ? undefined : textModel.uri);
        model.move(next, textModel, this._editor.getPosition());
        if (!model.selected) {
            return;
        }
        if (model.selected.marker.resource.toString() !== textModel.uri.toString()) {
            // show in different editor
            this._cleanUp();
            const otherEditor = await this._editorService.openCodeEditor({
                resource: model.selected.marker.resource,
                options: { pinned: false, revealIfOpened: true, selectionRevealType: 2 /* TextEditorSelectionRevealType.NearTop */, selection: model.selected.marker }
            }, this._editor);
            if (otherEditor) {
                MarkerController_1.get(otherEditor)?.close();
                MarkerController_1.get(otherEditor)?.navigate(next, multiFile);
            }
        }
        else {
            // show in this editor
            this._widget.showAtMarker(model.selected.marker, model.selected.index, model.selected.total);
        }
    }
};
MarkerController = MarkerController_1 = __decorate([
    __param(1, IMarkerNavigationService),
    __param(2, IContextKeyService),
    __param(3, ICodeEditorService),
    __param(4, IInstantiationService)
], MarkerController);
class MarkerNavigationAction extends EditorAction {
    constructor(_next, _multiFile, opts) {
        super(opts);
        this._next = _next;
        this._multiFile = _multiFile;
    }
    async run(_accessor, editor) {
        if (editor.hasModel()) {
            await MarkerController.get(editor)?.navigate(this._next, this._multiFile);
        }
    }
}
class NextMarkerAction extends MarkerNavigationAction {
    static { this.ID = 'editor.action.marker.next'; }
    static { this.LABEL = localize2(1020, "Go to Next Problem (Error, Warning, Info)"); }
    constructor() {
        super(true, false, {
            id: NextMarkerAction.ID,
            label: NextMarkerAction.LABEL,
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 512 /* KeyMod.Alt */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MarkerNavigationWidget.TitleMenu,
                title: NextMarkerAction.LABEL.value,
                icon: registerIcon('marker-navigation-next', Codicon.arrowDown, localize(1016, 'Icon for goto next marker.')),
                group: 'navigation',
                order: 1
            }
        });
    }
}
class PrevMarkerAction extends MarkerNavigationAction {
    static { this.ID = 'editor.action.marker.prev'; }
    static { this.LABEL = localize2(1021, "Go to Previous Problem (Error, Warning, Info)"); }
    constructor() {
        super(false, false, {
            id: PrevMarkerAction.ID,
            label: PrevMarkerAction.LABEL,
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MarkerNavigationWidget.TitleMenu,
                title: PrevMarkerAction.LABEL.value,
                icon: registerIcon('marker-navigation-previous', Codicon.arrowUp, localize(1017, 'Icon for goto previous marker.')),
                group: 'navigation',
                order: 2
            }
        });
    }
}
class NextMarkerInFilesAction extends MarkerNavigationAction {
    constructor() {
        super(true, true, {
            id: 'editor.action.marker.nextInFiles',
            label: localize2(1022, "Go to Next Problem in Files (Error, Warning, Info)"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarGoMenu,
                title: localize(1018, "Next &&Problem"),
                group: '6_problem_nav',
                order: 1
            }
        });
    }
}
class PrevMarkerInFilesAction extends MarkerNavigationAction {
    constructor() {
        super(false, true, {
            id: 'editor.action.marker.prevInFiles',
            label: localize2(1023, "Go to Previous Problem in Files (Error, Warning, Info)"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 1024 /* KeyMod.Shift */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarGoMenu,
                title: localize(1019, "Previous &&Problem"),
                group: '6_problem_nav',
                order: 2
            }
        });
    }
}
registerEditorContribution(MarkerController.ID, MarkerController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(NextMarkerAction);
registerEditorAction(PrevMarkerAction);
registerEditorAction(NextMarkerInFilesAction);
registerEditorAction(PrevMarkerInFilesAction);
const CONTEXT_MARKERS_NAVIGATION_VISIBLE = new RawContextKey('markersNavigationVisible', false);
const MarkerCommand = EditorCommand.bindToContribution(MarkerController.get);
registerEditorCommand(new MarkerCommand({
    id: 'closeMarkersNavigation',
    precondition: CONTEXT_MARKERS_NAVIGATION_VISIBLE,
    handler: x => x.close(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 50,
        kbExpr: EditorContextKeys.focus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));

export { MarkerController, NextMarkerAction };
