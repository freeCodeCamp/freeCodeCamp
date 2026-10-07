import { h } from '../../../../base/browser/dom.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { MenuEntryActionViewItem } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { MenuWorkbenchToolBar } from '../../../../platform/actions/browser/toolbar.js';
import { MenuId, MenuItemAction, IMenuService } from '../../../../platform/actions/common/actions.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { observableCodeEditor } from '../../../browser/observableCodeEditor.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { constObservable } from '../../../../base/common/observableInternal/observables/constObservable.js';

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
let FloatingEditorToolbar = class FloatingEditorToolbar extends Disposable {
    static { this.ID = 'editor.contrib.floatingToolbar'; }
    constructor(editor, instantiationService, keybindingService, menuService) {
        super();
        const editorObs = this._register(observableCodeEditor(editor));
        const menu = this._register(menuService.createMenu(MenuId.EditorContent, editor.contextKeyService));
        const menuIsEmptyObs = observableFromEvent(this, menu.onDidChange, () => menu.getActions().length === 0);
        this._register(autorun(reader => {
            const menuIsEmpty = menuIsEmptyObs.read(reader);
            if (menuIsEmpty) {
                return;
            }
            const container = h('div.floating-menu-overlay-widget');
            // Set height explicitly to ensure that the floating menu element
            // is rendered in the lower right corner at the correct position.
            container.root.style.height = '28px';
            // Toolbar
            const toolbar = instantiationService.createInstance(MenuWorkbenchToolBar, container.root, MenuId.EditorContent, {
                actionViewItemProvider: (action, options) => {
                    if (!(action instanceof MenuItemAction)) {
                        return undefined;
                    }
                    const keybinding = keybindingService.lookupKeybinding(action.id);
                    if (!keybinding) {
                        return undefined;
                    }
                    return instantiationService.createInstance(class extends MenuEntryActionViewItem {
                        updateLabel() {
                            if (this.options.label && this.label) {
                                this.label.textContent = `${this._commandAction.label} (${keybinding.getLabel()})`;
                            }
                        }
                    }, action, { ...options, keybindingNotRenderedWithLabel: true });
                },
                hiddenItemStrategy: 0 /* HiddenItemStrategy.Ignore */,
                menuOptions: {
                    shouldForwardArgs: true
                },
                telemetrySource: 'editor.overlayToolbar',
                toolbarOptions: {
                    primaryGroup: () => true,
                    useSeparatorsInPrimaryActions: true
                },
            });
            reader.store.add(toolbar);
            reader.store.add(autorun(reader => {
                const model = editorObs.model.read(reader);
                toolbar.context = model?.uri;
            }));
            // Overlay widget
            reader.store.add(editorObs.createOverlayWidget({
                allowEditorOverflow: false,
                domNode: container.root,
                minContentWidthInPx: constObservable(0),
                position: constObservable({
                    preference: 1 /* OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER */
                })
            }));
        }));
    }
};
FloatingEditorToolbar = __decorate([
    __param(1, IInstantiationService),
    __param(2, IKeybindingService),
    __param(3, IMenuService)
], FloatingEditorToolbar);

export { FloatingEditorToolbar };
