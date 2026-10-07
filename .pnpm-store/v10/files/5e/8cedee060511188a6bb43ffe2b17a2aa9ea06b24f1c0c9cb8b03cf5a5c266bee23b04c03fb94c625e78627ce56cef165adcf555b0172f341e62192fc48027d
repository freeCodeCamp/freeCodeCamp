import { $ as $$1, append } from '../../../../base/browser/dom.js';
import { HoverAction } from '../../../../base/browser/ui/hover/hoverWidget.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { IHoverService } from '../../../../platform/hover/browser/hover.js';
import { getDefaultHoverDelegate } from '../../../../base/browser/ui/hover/hoverDelegateFactory.js';

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
let EditorHoverStatusBar = class EditorHoverStatusBar extends Disposable {
    get hasContent() {
        return this._hasContent;
    }
    constructor(_keybindingService, _hoverService) {
        super();
        this._keybindingService = _keybindingService;
        this._hoverService = _hoverService;
        this.actions = [];
        this._hasContent = false;
        this.hoverElement = $('div.hover-row.status-bar');
        this.hoverElement.tabIndex = 0;
        this.actionsElement = append(this.hoverElement, $('div.actions'));
    }
    addAction(actionOptions) {
        const keybinding = this._keybindingService.lookupKeybinding(actionOptions.commandId);
        const keybindingLabel = keybinding ? keybinding.getLabel() : null;
        this._hasContent = true;
        const action = this._register(HoverAction.render(this.actionsElement, actionOptions, keybindingLabel));
        this._register(this._hoverService.setupManagedHover(getDefaultHoverDelegate('element'), action.actionContainer, action.actionRenderedLabel));
        this.actions.push(action);
        return action;
    }
    append(element) {
        const result = append(this.actionsElement, element);
        this._hasContent = true;
        return result;
    }
};
EditorHoverStatusBar = __decorate([
    __param(0, IKeybindingService),
    __param(1, IHoverService)
], EditorHoverStatusBar);

export { EditorHoverStatusBar };
