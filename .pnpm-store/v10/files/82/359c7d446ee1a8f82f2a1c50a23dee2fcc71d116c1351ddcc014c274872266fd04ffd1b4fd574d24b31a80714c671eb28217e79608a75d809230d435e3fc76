import { CancellationToken } from '../../../base/common/cancellation.js';
import { Emitter } from '../../../base/common/event.js';
import { IContextKeyService, RawContextKey } from '../../contextkey/common/contextkey.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';
import { ILayoutService } from '../../layout/browser/layoutService.js';
import { IOpenerService } from '../../opener/common/opener.js';
import { QuickAccessController } from './quickAccess.js';
import { getListStyles, defaultKeybindingLabelStyles, defaultProgressBarStyles, defaultButtonStyles, defaultCountBadgeStyles, defaultToggleStyles, defaultInputBoxStyles } from '../../theme/browser/defaultStyles.js';
import { asCssVariable } from '../../theme/common/colorUtils.js';
import { activeContrastBorder } from '../../theme/common/colors/baseColors.js';
import '../../theme/common/colors/chartsColors.js';
import { widgetShadow, widgetBorder } from '../../theme/common/colors/editorColors.js';
import '../../theme/common/colors/inputColors.js';
import '../../theme/common/colors/listColors.js';
import '../../theme/common/colors/menuColors.js';
import '../../theme/common/colors/minimapColors.js';
import '../../theme/common/colors/miscColors.js';
import { pickerGroupForeground, pickerGroupBorder, quickInputBackground, quickInputListFocusBackground, quickInputListFocusIconForeground, quickInputListFocusForeground, quickInputTitleBackground, quickInputForeground } from '../../theme/common/colors/quickpickColors.js';
import '../../theme/common/colors/searchColors.js';
import { IThemeService, Themable } from '../../theme/common/themeService.js';
import { QuickInputHoverDelegate } from './quickInput.js';
import { QuickInputController } from './quickInputController.js';
import { IConfigurationService } from '../../configuration/common/configuration.js';
import { getWindow } from '../../../base/browser/dom.js';

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
let QuickInputService = class QuickInputService extends Themable {
    get controller() {
        if (!this._controller) {
            this._controller = this._register(this.createController());
        }
        return this._controller;
    }
    get hasController() { return !!this._controller; }
    get currentQuickInput() { return this.controller.currentQuickInput; }
    get quickAccess() {
        if (!this._quickAccess) {
            this._quickAccess = this._register(this.instantiationService.createInstance(QuickAccessController));
        }
        return this._quickAccess;
    }
    constructor(instantiationService, contextKeyService, themeService, layoutService, configurationService) {
        super(themeService);
        this.instantiationService = instantiationService;
        this.contextKeyService = contextKeyService;
        this.layoutService = layoutService;
        this.configurationService = configurationService;
        this._onShow = this._register(new Emitter());
        this._onHide = this._register(new Emitter());
        this.contexts = new Map();
    }
    createController(host = this.layoutService, options) {
        const defaultOptions = {
            idPrefix: 'quickInput_',
            container: host.activeContainer,
            ignoreFocusOut: () => false,
            backKeybindingLabel: () => undefined,
            setContextKey: (id) => this.setContextKey(id),
            linkOpenerDelegate: (content) => {
                // HACK: https://github.com/microsoft/vscode/issues/173691
                this.instantiationService.invokeFunction(accessor => {
                    const openerService = accessor.get(IOpenerService);
                    openerService.open(content, { allowCommands: true, fromUserGesture: true });
                });
            },
            returnFocus: () => host.focus(),
            styles: this.computeStyles(),
            hoverDelegate: this._register(this.instantiationService.createInstance(QuickInputHoverDelegate))
        };
        const controller = this._register(this.instantiationService.createInstance(QuickInputController, {
            ...defaultOptions,
            ...options
        }));
        controller.layout(host.activeContainerDimension, host.activeContainerOffset.quickPickTop);
        // Layout changes
        this._register(host.onDidLayoutActiveContainer(dimension => {
            if (getWindow(host.activeContainer) === getWindow(controller.container)) {
                controller.layout(dimension, host.activeContainerOffset.quickPickTop);
            }
        }));
        this._register(host.onDidChangeActiveContainer(() => {
            if (controller.isVisible()) {
                return;
            }
            controller.layout(host.activeContainerDimension, host.activeContainerOffset.quickPickTop);
        }));
        // Context keys
        this._register(controller.onShow(() => {
            this.resetContextKeys();
            this._onShow.fire();
        }));
        this._register(controller.onHide(() => {
            this.resetContextKeys();
            this._onHide.fire();
        }));
        return controller;
    }
    setContextKey(id) {
        let key;
        if (id) {
            key = this.contexts.get(id);
            if (!key) {
                key = new RawContextKey(id, false)
                    .bindTo(this.contextKeyService);
                this.contexts.set(id, key);
            }
        }
        if (key && key.get()) {
            return; // already active context
        }
        this.resetContextKeys();
        key?.set(true);
    }
    resetContextKeys() {
        this.contexts.forEach(context => {
            if (context.get()) {
                context.reset();
            }
        });
    }
    pick(picks, options, token = CancellationToken.None) {
        return this.controller.pick(picks, options, token);
    }
    input(options = {}, token = CancellationToken.None) {
        return this.controller.input(options, token);
    }
    createQuickPick(options = { useSeparators: false }) {
        return this.controller.createQuickPick(options);
    }
    createInputBox() {
        return this.controller.createInputBox();
    }
    toggleHover() {
        if (this.hasController) {
            this.controller.toggleHover();
        }
    }
    updateStyles() {
        if (this.hasController) {
            this.controller.applyStyles(this.computeStyles());
        }
    }
    computeStyles() {
        return {
            widget: {
                quickInputBackground: asCssVariable(quickInputBackground),
                quickInputForeground: asCssVariable(quickInputForeground),
                quickInputTitleBackground: asCssVariable(quickInputTitleBackground),
                widgetBorder: asCssVariable(widgetBorder),
                widgetShadow: asCssVariable(widgetShadow),
            },
            inputBox: defaultInputBoxStyles,
            toggle: defaultToggleStyles,
            countBadge: defaultCountBadgeStyles,
            button: defaultButtonStyles,
            progressBar: defaultProgressBarStyles,
            keybindingLabel: defaultKeybindingLabelStyles,
            list: getListStyles({
                listBackground: quickInputBackground,
                listFocusBackground: quickInputListFocusBackground,
                listFocusForeground: quickInputListFocusForeground,
                // Look like focused when inactive.
                listInactiveFocusForeground: quickInputListFocusForeground,
                listInactiveSelectionIconForeground: quickInputListFocusIconForeground,
                listInactiveFocusBackground: quickInputListFocusBackground,
                listFocusOutline: activeContrastBorder,
                listInactiveFocusOutline: activeContrastBorder,
                treeStickyScrollBackground: quickInputBackground,
            }),
            pickerGroup: {
                pickerGroupBorder: asCssVariable(pickerGroupBorder),
                pickerGroupForeground: asCssVariable(pickerGroupForeground),
            }
        };
    }
};
QuickInputService = __decorate([
    __param(0, IInstantiationService),
    __param(1, IContextKeyService),
    __param(2, IThemeService),
    __param(3, ILayoutService),
    __param(4, IConfigurationService)
], QuickInputService);

export { QuickInputService };
