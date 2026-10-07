import { registerSingleton } from '../../instantiation/common/extensions.js';
import { registerThemingParticipant } from '../../theme/common/themeService.js';
import '../../theme/common/colorUtils.js';
import '../../theme/common/colors/baseColors.js';
import '../../theme/common/colors/chartsColors.js';
import { editorHoverBorder } from '../../theme/common/colors/editorColors.js';
import '../../theme/common/colors/inputColors.js';
import '../../theme/common/colors/listColors.js';
import '../../theme/common/colors/menuColors.js';
import '../../theme/common/colors/minimapColors.js';
import '../../theme/common/colors/miscColors.js';
import '../../theme/common/colors/quickpickColors.js';
import '../../theme/common/colors/searchColors.js';
import { IHoverService } from './hover.js';
import { IContextMenuService } from '../../contextview/browser/contextView.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';
import { HoverWidget } from './hoverWidget.js';
import { Disposable, DisposableStore, toDisposable } from '../../../base/common/lifecycle.js';
import { addDisposableListener, EventType, getActiveElement, isHTMLElement, isAncestorOfActiveElement, getWindow, isAncestor, isEditableElement } from '../../../base/browser/dom.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { StandardKeyboardEvent } from '../../../base/browser/keyboardEvent.js';
import { IAccessibilityService } from '../../accessibility/common/accessibility.js';
import { ILayoutService } from '../../layout/browser/layoutService.js';
import { mainWindow } from '../../../base/browser/window.js';
import { ContextViewHandler } from '../../contextview/browser/contextViewService.js';
import { isManagedHoverTooltipMarkdownString } from '../../../base/browser/ui/hover/hover.js';
import { ManagedHoverWidget } from './updatableHoverWidget.js';
import { timeout, TimeoutTimer } from '../../../base/common/async.js';
import { IConfigurationService } from '../../configuration/common/configuration.js';
import { isNumber, isString } from '../../../base/common/types.js';
import { KeyChord } from '../../../base/common/keyCodes.js';
import { KeybindingsRegistry } from '../../keybinding/common/keybindingsRegistry.js';
import { stripIcons } from '../../../base/common/iconLabels.js';

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
let HoverService = class HoverService extends Disposable {
    constructor(_instantiationService, _configurationService, contextMenuService, _keybindingService, _layoutService, _accessibilityService) {
        super();
        this._instantiationService = _instantiationService;
        this._configurationService = _configurationService;
        this._keybindingService = _keybindingService;
        this._layoutService = _layoutService;
        this._accessibilityService = _accessibilityService;
        this._currentDelayedHoverWasShown = false;
        this._delayedHovers = new Map();
        this._managedHovers = new Map();
        this._register(contextMenuService.onDidShowContextMenu(() => this.hideHover()));
        this._contextViewHandler = this._register(new ContextViewHandler(this._layoutService));
        this._register(KeybindingsRegistry.registerCommandAndKeybindingRule({
            id: 'workbench.action.showHover',
            weight: 0 /* KeybindingWeight.EditorCore */,
            primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */),
            handler: () => { this._showAndFocusHoverForActiveElement(); },
        }));
    }
    showInstantHover(options, focus, skipLastFocusedUpdate, dontShow) {
        const hover = this._createHover(options, skipLastFocusedUpdate);
        if (!hover) {
            return undefined;
        }
        this._showHover(hover, options, focus);
        return hover;
    }
    showDelayedHover(options, lifecycleOptions) {
        // Set `id` to default if it's undefined
        if (options.id === undefined) {
            options.id = getHoverIdFromContent(options.content);
        }
        if (!this._currentDelayedHover || this._currentDelayedHoverWasShown) {
            // Current hover is locked, reject
            if (this._currentHover?.isLocked) {
                return undefined;
            }
            // Identity is the same, return current hover
            if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
                return this._currentHover;
            }
            // Check group identity, if it's the same skip the delay and show the hover immediately
            if (this._currentHover && !this._currentHover.isDisposed && this._currentDelayedHoverGroupId !== undefined && this._currentDelayedHoverGroupId === lifecycleOptions?.groupId) {
                return this.showInstantHover({
                    ...options,
                    appearance: {
                        ...options.appearance,
                        skipFadeInAnimation: true
                    }
                });
            }
        }
        else if (this._currentDelayedHover && getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
            // If the hover is the same but timeout is not finished yet, return the current hover
            return this._currentDelayedHover;
        }
        const hover = this._createHover(options, undefined);
        if (!hover) {
            this._currentDelayedHover = undefined;
            this._currentDelayedHoverWasShown = false;
            this._currentDelayedHoverGroupId = undefined;
            return undefined;
        }
        this._currentDelayedHover = hover;
        this._currentDelayedHoverWasShown = false;
        this._currentDelayedHoverGroupId = lifecycleOptions?.groupId;
        timeout(this._configurationService.getValue('workbench.hover.delay')).then(() => {
            if (hover && !hover.isDisposed) {
                this._currentDelayedHoverWasShown = true;
                this._showHover(hover, options);
            }
        });
        return hover;
    }
    setupDelayedHover(target, options, lifecycleOptions) {
        const resolveHoverOptions = () => ({
            ...typeof options === 'function' ? options() : options,
            target
        });
        return this._setupDelayedHover(target, resolveHoverOptions, lifecycleOptions);
    }
    setupDelayedHoverAtMouse(target, options, lifecycleOptions) {
        const resolveHoverOptions = (e) => ({
            ...typeof options === 'function' ? options() : options,
            target: {
                targetElements: [target],
                x: e !== undefined ? e.x + 10 : undefined,
            }
        });
        return this._setupDelayedHover(target, resolveHoverOptions, lifecycleOptions);
    }
    _setupDelayedHover(target, resolveHoverOptions, lifecycleOptions) {
        const store = new DisposableStore();
        store.add(addDisposableListener(target, EventType.MOUSE_OVER, e => {
            this.showDelayedHover(resolveHoverOptions(e), {
                groupId: lifecycleOptions?.groupId
            });
        }));
        if (lifecycleOptions?.setupKeyboardEvents) {
            store.add(addDisposableListener(target, EventType.KEY_DOWN, e => {
                const evt = new StandardKeyboardEvent(e);
                if (evt.equals(10 /* KeyCode.Space */) || evt.equals(3 /* KeyCode.Enter */)) {
                    this.showInstantHover(resolveHoverOptions(), true);
                }
            }));
        }
        this._delayedHovers.set(target, { show: (focus) => { this.showInstantHover(resolveHoverOptions(), focus); } });
        store.add(toDisposable(() => this._delayedHovers.delete(target)));
        return store;
    }
    _createHover(options, skipLastFocusedUpdate) {
        this._currentDelayedHover = undefined;
        if (options.content === '') {
            return undefined;
        }
        if (this._currentHover?.isLocked) {
            return undefined;
        }
        // Set `id` to default if it's undefined
        if (options.id === undefined) {
            options.id = getHoverIdFromContent(options.content);
        }
        if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
            return undefined;
        }
        this._currentHoverOptions = options;
        this._lastHoverOptions = options;
        const trapFocus = options.trapFocus || this._accessibilityService.isScreenReaderOptimized();
        const activeElement = getActiveElement();
        // HACK, remove this check when #189076 is fixed
        if (!skipLastFocusedUpdate) {
            if (trapFocus && activeElement) {
                if (!activeElement.classList.contains('monaco-hover')) {
                    this._lastFocusedElementBeforeOpen = activeElement;
                }
            }
            else {
                this._lastFocusedElementBeforeOpen = undefined;
            }
        }
        const hoverDisposables = new DisposableStore();
        const hover = this._instantiationService.createInstance(HoverWidget, options);
        if (options.persistence?.sticky) {
            hover.isLocked = true;
        }
        // Adjust target position when a mouse event is provided as the hover position
        if (options.position?.hoverPosition && !isNumber(options.position.hoverPosition)) {
            options.target = {
                targetElements: isHTMLElement(options.target) ? [options.target] : options.target.targetElements,
                x: options.position.hoverPosition.x + 10
            };
        }
        hover.onDispose(() => {
            const hoverWasFocused = this._currentHover?.domNode && isAncestorOfActiveElement(this._currentHover.domNode);
            if (hoverWasFocused) {
                // Required to handle cases such as closing the hover with the escape key
                this._lastFocusedElementBeforeOpen?.focus();
            }
            // Only clear the current options if it's the current hover, the current options help
            // reduce flickering when the same hover is shown multiple times
            if (getHoverOptionsIdentity(this._currentHoverOptions) === getHoverOptionsIdentity(options)) {
                this.doHideHover();
            }
            hoverDisposables.dispose();
        }, undefined, hoverDisposables);
        // Set the container explicitly to enable aux window support
        if (!options.container) {
            const targetElement = isHTMLElement(options.target) ? options.target : options.target.targetElements[0];
            options.container = this._layoutService.getContainer(getWindow(targetElement));
        }
        hover.onRequestLayout(() => this._contextViewHandler.layout(), undefined, hoverDisposables);
        if (options.persistence?.sticky) {
            hoverDisposables.add(addDisposableListener(getWindow(options.container).document, EventType.MOUSE_DOWN, e => {
                if (!isAncestor(e.target, hover.domNode)) {
                    this.doHideHover();
                }
            }));
        }
        else {
            if ('targetElements' in options.target) {
                for (const element of options.target.targetElements) {
                    hoverDisposables.add(addDisposableListener(element, EventType.CLICK, () => this.hideHover()));
                }
            }
            else {
                hoverDisposables.add(addDisposableListener(options.target, EventType.CLICK, () => this.hideHover()));
            }
            const focusedElement = getActiveElement();
            if (focusedElement) {
                const focusedElementDocument = getWindow(focusedElement).document;
                hoverDisposables.add(addDisposableListener(focusedElement, EventType.KEY_DOWN, e => this._keyDown(e, hover, !!options.persistence?.hideOnKeyDown)));
                hoverDisposables.add(addDisposableListener(focusedElementDocument, EventType.KEY_DOWN, e => this._keyDown(e, hover, !!options.persistence?.hideOnKeyDown)));
                hoverDisposables.add(addDisposableListener(focusedElement, EventType.KEY_UP, e => this._keyUp(e, hover)));
                hoverDisposables.add(addDisposableListener(focusedElementDocument, EventType.KEY_UP, e => this._keyUp(e, hover)));
            }
        }
        if ('IntersectionObserver' in mainWindow) {
            const observer = new IntersectionObserver(e => this._intersectionChange(e, hover), { threshold: 0 });
            const firstTargetElement = 'targetElements' in options.target ? options.target.targetElements[0] : options.target;
            observer.observe(firstTargetElement);
            hoverDisposables.add(toDisposable(() => observer.disconnect()));
        }
        this._currentHover = hover;
        return hover;
    }
    _showHover(hover, options, focus) {
        this._contextViewHandler.showContextView(new HoverContextViewDelegate(hover, focus), options.container);
    }
    hideHover(force) {
        if ((!force && this._currentHover?.isLocked) || !this._currentHoverOptions) {
            return;
        }
        this.doHideHover();
    }
    doHideHover() {
        this._currentHover = undefined;
        this._currentHoverOptions = undefined;
        this._contextViewHandler.hideContextView();
    }
    _intersectionChange(entries, hover) {
        const entry = entries[entries.length - 1];
        if (!entry.isIntersecting) {
            hover.dispose();
        }
    }
    showAndFocusLastHover() {
        if (!this._lastHoverOptions) {
            return;
        }
        this.showInstantHover(this._lastHoverOptions, true, true);
    }
    _showAndFocusHoverForActiveElement() {
        // TODO: if hover is visible, focus it to avoid flickering
        let activeElement = getActiveElement();
        while (activeElement) {
            const hover = this._delayedHovers.get(activeElement) ?? this._managedHovers.get(activeElement);
            if (hover) {
                hover.show(true);
                return;
            }
            activeElement = activeElement.parentElement;
        }
    }
    _keyDown(e, hover, hideOnKeyDown) {
        if (e.key === 'Alt') {
            hover.isLocked = true;
            return;
        }
        const event = new StandardKeyboardEvent(e);
        const keybinding = this._keybindingService.resolveKeyboardEvent(event);
        if (keybinding.getSingleModifierDispatchChords().some(value => !!value) || this._keybindingService.softDispatch(event, event.target).kind !== 0 /* ResultKind.NoMatchingKb */) {
            return;
        }
        if (hideOnKeyDown && (!this._currentHoverOptions?.trapFocus || e.key !== 'Tab')) {
            this.hideHover();
            this._lastFocusedElementBeforeOpen?.focus();
        }
    }
    _keyUp(e, hover) {
        if (e.key === 'Alt') {
            hover.isLocked = false;
            // Hide if alt is released while the mouse is not over hover/target
            if (!hover.isMouseIn) {
                this.hideHover();
                this._lastFocusedElementBeforeOpen?.focus();
            }
        }
    }
    // TODO: Investigate performance of this function. There seems to be a lot of content created
    //       and thrown away on start up
    setupManagedHover(hoverDelegate, targetElement, content, options) {
        if (hoverDelegate.showNativeHover) {
            return setupNativeHover(targetElement, content);
        }
        targetElement.setAttribute('custom-hover', 'true');
        if (targetElement.title !== '') {
            console.warn('HTML element already has a title attribute, which will conflict with the custom hover. Please remove the title attribute.');
            console.trace('Stack trace:', targetElement.title);
            targetElement.title = '';
        }
        let hoverPreparation;
        let hoverWidget;
        const hideHover = (disposeWidget, disposePreparation) => {
            const hadHover = hoverWidget !== undefined;
            if (disposeWidget) {
                hoverWidget?.dispose();
                hoverWidget = undefined;
            }
            if (disposePreparation) {
                hoverPreparation?.dispose();
                hoverPreparation = undefined;
            }
            if (hadHover) {
                hoverDelegate.onDidHideHover?.();
                hoverWidget = undefined;
            }
        };
        const triggerShowHover = (delay, focus, target, trapFocus) => {
            return new TimeoutTimer(async () => {
                if (!hoverWidget || hoverWidget.isDisposed) {
                    hoverWidget = new ManagedHoverWidget(hoverDelegate, target || targetElement, delay > 0);
                    await hoverWidget.update(typeof content === 'function' ? content() : content, focus, { ...options, trapFocus });
                }
            }, delay);
        };
        const store = new DisposableStore();
        let isMouseDown = false;
        store.add(addDisposableListener(targetElement, EventType.MOUSE_DOWN, () => {
            isMouseDown = true;
            hideHover(true, true);
        }, true));
        store.add(addDisposableListener(targetElement, EventType.MOUSE_UP, () => {
            isMouseDown = false;
        }, true));
        store.add(addDisposableListener(targetElement, EventType.MOUSE_LEAVE, (e) => {
            isMouseDown = false;
            hideHover(false, e.fromElement === targetElement);
        }, true));
        store.add(addDisposableListener(targetElement, EventType.MOUSE_OVER, (e) => {
            if (hoverPreparation) {
                return;
            }
            const mouseOverStore = new DisposableStore();
            const target = {
                targetElements: [targetElement],
                dispose: () => { }
            };
            if (hoverDelegate.placement === undefined || hoverDelegate.placement === 'mouse') {
                // track the mouse position
                const onMouseMove = (e) => {
                    target.x = e.x + 10;
                    if (!eventIsRelatedToTarget(e, targetElement)) {
                        hideHover(true, true);
                    }
                };
                mouseOverStore.add(addDisposableListener(targetElement, EventType.MOUSE_MOVE, onMouseMove, true));
            }
            hoverPreparation = mouseOverStore;
            if (!eventIsRelatedToTarget(e, targetElement)) {
                return; // Do not show hover when the mouse is over another hover target
            }
            mouseOverStore.add(triggerShowHover(typeof hoverDelegate.delay === 'function' ? hoverDelegate.delay(content) : hoverDelegate.delay, false, target));
        }, true));
        const onFocus = (e) => {
            if (isMouseDown || hoverPreparation) {
                return;
            }
            if (!eventIsRelatedToTarget(e, targetElement)) {
                return; // Do not show hover when the focus is on another hover target
            }
            const target = {
                targetElements: [targetElement],
                dispose: () => { }
            };
            const toDispose = new DisposableStore();
            const onBlur = () => hideHover(true, true);
            toDispose.add(addDisposableListener(targetElement, EventType.BLUR, onBlur, true));
            toDispose.add(triggerShowHover(typeof hoverDelegate.delay === 'function' ? hoverDelegate.delay(content) : hoverDelegate.delay, false, target));
            hoverPreparation = toDispose;
        };
        // Do not show hover when focusing an input or textarea
        if (!isEditableElement(targetElement)) {
            store.add(addDisposableListener(targetElement, EventType.FOCUS, onFocus, true));
        }
        const hover = {
            show: focus => {
                hideHover(false, true); // terminate a ongoing mouse over preparation
                triggerShowHover(0, focus, undefined, focus); // show hover immediately
            },
            hide: () => {
                hideHover(true, true);
            },
            update: async (newContent, hoverOptions) => {
                content = newContent;
                await hoverWidget?.update(content, undefined, hoverOptions);
            },
            dispose: () => {
                this._managedHovers.delete(targetElement);
                store.dispose();
                hideHover(true, true);
            }
        };
        this._managedHovers.set(targetElement, hover);
        return hover;
    }
    showManagedHover(target) {
        const hover = this._managedHovers.get(target);
        if (hover) {
            hover.show(true);
        }
    }
    dispose() {
        this._managedHovers.forEach(hover => hover.dispose());
        super.dispose();
    }
};
HoverService = __decorate([
    __param(0, IInstantiationService),
    __param(1, IConfigurationService),
    __param(2, IContextMenuService),
    __param(3, IKeybindingService),
    __param(4, ILayoutService),
    __param(5, IAccessibilityService)
], HoverService);
function getHoverOptionsIdentity(options) {
    if (options === undefined) {
        return undefined;
    }
    return options?.id ?? options;
}
function getHoverIdFromContent(content) {
    if (isHTMLElement(content)) {
        return undefined;
    }
    if (typeof content === 'string') {
        return content.toString();
    }
    return content.value;
}
function getStringContent(contentOrFactory) {
    const content = typeof contentOrFactory === 'function' ? contentOrFactory() : contentOrFactory;
    if (isString(content)) {
        // Icons don't render in the native hover so we strip them out
        return stripIcons(content);
    }
    if (isManagedHoverTooltipMarkdownString(content)) {
        return content.markdownNotSupportedFallback;
    }
    return undefined;
}
function setupNativeHover(targetElement, content) {
    function updateTitle(title) {
        if (title) {
            targetElement.setAttribute('title', title);
        }
        else {
            targetElement.removeAttribute('title');
        }
    }
    updateTitle(getStringContent(content));
    return {
        update: (content) => updateTitle(getStringContent(content)),
        show: () => { },
        hide: () => { },
        dispose: () => updateTitle(undefined),
    };
}
class HoverContextViewDelegate {
    get anchorPosition() {
        return this._hover.anchor;
    }
    constructor(_hover, _focus = false) {
        this._hover = _hover;
        this._focus = _focus;
        // Render over all other context views
        this.layer = 1;
    }
    render(container) {
        this._hover.render(container);
        if (this._focus) {
            this._hover.focus();
        }
        return this._hover;
    }
    getAnchor() {
        return {
            x: this._hover.x,
            y: this._hover.y
        };
    }
    layout() {
        this._hover.layout();
    }
}
function eventIsRelatedToTarget(event, target) {
    return isHTMLElement(event.target) && getHoverTargetElement(event.target, target) === target;
}
function getHoverTargetElement(element, stopElement) {
    stopElement = stopElement ?? getWindow(element).document.body;
    while (!element.hasAttribute('custom-hover') && element !== stopElement) {
        element = element.parentElement;
    }
    return element;
}
registerSingleton(IHoverService, HoverService, 1 /* InstantiationType.Delayed */);
registerThemingParticipant((theme, collector) => {
    const hoverBorder = theme.getColor(editorHoverBorder);
    if (hoverBorder) {
        collector.addRule(`.monaco-hover.workbench-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
        collector.addRule(`.monaco-hover.workbench-hover hr { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
    }
});

export { HoverService };
