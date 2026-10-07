import { asCSSUrl } from '../../../../base/browser/cssValue.js';
import { append, $ as $$1, prepend } from '../../../../base/browser/dom.js';
import { ActionBar } from '../../../../base/browser/ui/actionbar/actionbar.js';
import { IconLabel } from '../../../../base/browser/ui/iconLabel/iconLabel.js';
import { TriStateCheckbox } from '../../../../base/browser/ui/toggle/toggle.js';
import { Event } from '../../../../base/common/event.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { URI } from '../../../../base/common/uri.js';
import { defaultCheckboxStyles } from '../../../theme/browser/defaultStyles.js';
import { isDark } from '../../../theme/common/theme.js';
import { escape } from '../../../../base/common/strings.js';
import { IThemeService } from '../../../theme/common/themeService.js';
import { quickInputButtonToAction } from '../quickInputUtils.js';

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
var QuickInputTreeRenderer_1;
const $ = $$1;
let QuickInputTreeRenderer = class QuickInputTreeRenderer extends Disposable {
    static { QuickInputTreeRenderer_1 = this; }
    static { this.ID = 'quickInputTreeElement'; }
    constructor(_hoverDelegate, _buttonTriggeredEmitter, onCheckedEvent, _themeService) {
        super();
        this._hoverDelegate = _hoverDelegate;
        this._buttonTriggeredEmitter = _buttonTriggeredEmitter;
        this.onCheckedEvent = onCheckedEvent;
        this._themeService = _themeService;
        this.templateId = QuickInputTreeRenderer_1.ID;
    }
    renderTemplate(container) {
        const store = new DisposableStore();
        // Main entry container
        const entry = append(container, $('.quick-input-tree-entry'));
        const checkbox = store.add(new TriStateCheckbox('', false, { ...defaultCheckboxStyles, size: 15 }));
        entry.appendChild(checkbox.domNode);
        const checkboxLabel = append(entry, $('label.quick-input-tree-label'));
        const rows = append(checkboxLabel, $('.quick-input-tree-rows'));
        const row1 = append(rows, $('.quick-input-tree-row'));
        const icon = prepend(row1, $('.quick-input-tree-icon'));
        const label = store.add(new IconLabel(row1, {
            supportHighlights: true,
            supportDescriptionHighlights: true,
            supportIcons: true,
            hoverDelegate: this._hoverDelegate
        }));
        const actionBar = store.add(new ActionBar(entry, this._hoverDelegate ? { hoverDelegate: this._hoverDelegate } : undefined));
        actionBar.domNode.classList.add('quick-input-tree-entry-action-bar');
        return {
            toDisposeTemplate: store,
            entry,
            checkbox,
            icon,
            label,
            actionBar,
            toDisposeElement: new DisposableStore(),
        };
    }
    renderElement(node, index, templateData, _details) {
        const store = templateData.toDisposeElement;
        const quickTreeItem = node.element;
        // Checkbox
        if (quickTreeItem.pickable === false) {
            // Hide checkbox for non-pickable items
            templateData.checkbox.domNode.style.display = 'none';
        }
        else {
            templateData.checkbox.domNode.style.display = '';
            templateData.checkbox.checked = quickTreeItem.checked ?? false;
            store.add(Event.filter(this.onCheckedEvent, e => e.item === quickTreeItem)(e => templateData.checkbox.checked = e.checked));
            if (quickTreeItem.disabled) {
                templateData.checkbox.disable();
            }
        }
        // Icon
        if (quickTreeItem.iconPath) {
            const icon = isDark(this._themeService.getColorTheme().type) ? quickTreeItem.iconPath.dark : (quickTreeItem.iconPath.light ?? quickTreeItem.iconPath.dark);
            const iconUrl = URI.revive(icon);
            templateData.icon.className = 'quick-input-tree-icon';
            templateData.icon.style.backgroundImage = asCSSUrl(iconUrl);
        }
        else {
            templateData.icon.style.backgroundImage = '';
            templateData.icon.className = quickTreeItem.iconClass ? `quick-input-tree-icon ${quickTreeItem.iconClass}` : '';
        }
        const { labelHighlights: matches, descriptionHighlights: descriptionMatches } = node.filterData || {};
        // Label and Description
        let descriptionTitle;
        // NOTE: If we bring back quick tool tips, we need to check that here like we do in the QuickInputListRenderer
        if (quickTreeItem.description) {
            descriptionTitle = {
                markdown: {
                    value: escape(quickTreeItem.description),
                    supportThemeIcons: true
                },
                markdownNotSupportedFallback: quickTreeItem.description
            };
        }
        templateData.label.setLabel(quickTreeItem.label, quickTreeItem.description, {
            matches,
            descriptionMatches,
            extraClasses: quickTreeItem.iconClasses,
            italic: quickTreeItem.italic,
            strikethrough: quickTreeItem.strikethrough,
            labelEscapeNewLines: true,
            descriptionTitle
        });
        // Action Bar
        const buttons = quickTreeItem.buttons;
        if (buttons && buttons.length) {
            templateData.actionBar.push(buttons.map((button, index) => quickInputButtonToAction(button, `tree-${index}`, () => this._buttonTriggeredEmitter.fire({ item: quickTreeItem, button }))), { icon: true, label: false });
            templateData.entry.classList.add('has-actions');
        }
        else {
            templateData.entry.classList.remove('has-actions');
        }
    }
    disposeElement(_element, _index, templateData, _details) {
        templateData.toDisposeElement.clear();
        templateData.actionBar.clear();
    }
    disposeTemplate(templateData) {
        templateData.toDisposeElement.dispose();
        templateData.toDisposeTemplate.dispose();
    }
};
QuickInputTreeRenderer = QuickInputTreeRenderer_1 = __decorate([
    __param(3, IThemeService)
], QuickInputTreeRenderer);

export { QuickInputTreeRenderer };
