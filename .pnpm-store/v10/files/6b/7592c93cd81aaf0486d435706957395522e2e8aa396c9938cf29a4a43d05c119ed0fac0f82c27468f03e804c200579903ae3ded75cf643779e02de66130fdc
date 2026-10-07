import { localize } from '../../../nls.js';
import { getActiveWindow, addDisposableListener } from '../../../base/browser/dom.js';
import { createFastDomNode } from '../../../base/browser/fastDomNode.js';
import { BugIndicatingError } from '../../../base/common/errors.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import '../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
import { TextureAtlas } from './atlas/textureAtlas.js';
import { IConfigurationService } from '../../../platform/configuration/common/configuration.js';
import { Severity, INotificationService } from '../../../platform/notification/common/notification.js';
import { GPULifecycle } from './gpuDisposable.js';
import { ensureNonNullable, observeDevicePixelDimensions } from './gpuUtils.js';
import { RectangleRenderer } from './rectangleRenderer.js';
import { DecorationCssRuleExtractor } from './css/decorationCssRuleExtractor.js';
import { Event } from '../../../base/common/event.js';
import { DecorationStyleCache } from './css/decorationStyleCache.js';
import { runOnChange } from '../../../base/common/observableInternal/utils/runOnChange.js';
import { observableValue } from '../../../base/common/observableInternal/observables/observableValue.js';

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
var ViewGpuContext_1;
let ViewGpuContext = class ViewGpuContext extends Disposable {
    static { ViewGpuContext_1 = this; }
    static { this._decorationCssRuleExtractor = new DecorationCssRuleExtractor(); }
    static get decorationCssRuleExtractor() {
        return ViewGpuContext_1._decorationCssRuleExtractor;
    }
    static { this._decorationStyleCache = new DecorationStyleCache(); }
    static get decorationStyleCache() {
        return ViewGpuContext_1._decorationStyleCache;
    }
    /**
     * The shared texture atlas to use across all views.
     *
     * @throws if called before the GPU device is resolved
     */
    static get atlas() {
        if (!ViewGpuContext_1._atlas) {
            throw new BugIndicatingError('Cannot call ViewGpuContext.textureAtlas before device is resolved');
        }
        return ViewGpuContext_1._atlas;
    }
    /**
     * The shared texture atlas to use across all views. This is a convenience alias for
     * {@link ViewGpuContext.atlas}.
     *
     * @throws if called before the GPU device is resolved
     */
    get atlas() {
        return ViewGpuContext_1.atlas;
    }
    constructor(context, _instantiationService, _notificationService, configurationService) {
        super();
        this._instantiationService = _instantiationService;
        this._notificationService = _notificationService;
        this.configurationService = configurationService;
        /**
         * The hard cap for line columns rendered by the GPU renderer.
         */
        this.maxGpuCols = 2000;
        this.canvas = createFastDomNode(document.createElement('canvas'));
        this.canvas.setClassName('editorCanvas');
        // Adjust the canvas size to avoid drawing under the scroll bar
        this._register(Event.runAndSubscribe(configurationService.onDidChangeConfiguration, e => {
            if (!e || e.affectsConfiguration('editor.scrollbar.verticalScrollbarSize')) {
                const verticalScrollbarSize = configurationService.getValue('editor').scrollbar?.verticalScrollbarSize ?? 14;
                this.canvas.domNode.style.boxSizing = 'border-box';
                this.canvas.domNode.style.paddingRight = `${verticalScrollbarSize}px`;
            }
        }));
        this.ctx = ensureNonNullable(this.canvas.domNode.getContext('webgpu'));
        // Request the GPU device, we only want to do this a single time per window as it's async
        // and can delay the initial render.
        if (!ViewGpuContext_1.device) {
            ViewGpuContext_1.device = GPULifecycle.requestDevice((message) => {
                const choices = [{
                        label: localize(78, "Use DOM-based rendering"),
                        run: () => this.configurationService.updateValue('editor.experimentalGpuAcceleration', 'off'),
                    }];
                this._notificationService.prompt(Severity.Warning, message, choices);
            }).then(ref => {
                ViewGpuContext_1.deviceSync = ref.object;
                if (!ViewGpuContext_1._atlas) {
                    ViewGpuContext_1._atlas = this._instantiationService.createInstance(TextureAtlas, ref.object.limits.maxTextureDimension2D, undefined, ViewGpuContext_1.decorationStyleCache);
                }
                return ref.object;
            });
        }
        const dprObs = observableValue(this, getActiveWindow().devicePixelRatio);
        this._register(addDisposableListener(getActiveWindow(), 'resize', () => {
            dprObs.set(getActiveWindow().devicePixelRatio, undefined);
        }));
        this.devicePixelRatio = dprObs;
        this._register(runOnChange(this.devicePixelRatio, () => ViewGpuContext_1.atlas?.clear()));
        const canvasDevicePixelDimensions = observableValue(this, { width: this.canvas.domNode.width, height: this.canvas.domNode.height });
        this._register(observeDevicePixelDimensions(this.canvas.domNode, getActiveWindow(), (width, height) => {
            this.canvas.domNode.width = width;
            this.canvas.domNode.height = height;
            canvasDevicePixelDimensions.set({ width, height }, undefined);
        }));
        this.canvasDevicePixelDimensions = canvasDevicePixelDimensions;
        const contentLeft = observableValue(this, 0);
        this._register(this.configurationService.onDidChangeConfiguration(e => {
            contentLeft.set(context.configuration.options.get(165 /* EditorOption.layoutInfo */).contentLeft, undefined);
        }));
        this.contentLeft = contentLeft;
        this.rectangleRenderer = this._instantiationService.createInstance(RectangleRenderer, context, this.contentLeft, this.devicePixelRatio, this.canvas.domNode, this.ctx, ViewGpuContext_1.device);
    }
    /**
     * This method determines which lines can be and are allowed to be rendered using the GPU
     * renderer. Eventually this should trend all lines, except maybe exceptional cases like
     * decorations that use class names.
     */
    canRender(options, viewportData, lineNumber) {
        const data = viewportData.getViewLineRenderingData(lineNumber);
        // Check if the line has simple attributes that aren't supported
        if (data.containsRTL ||
            data.maxColumn > this.maxGpuCols) {
            return false;
        }
        // Check if all inline decorations are supported
        if (data.inlineDecorations.length > 0) {
            let supported = true;
            for (const decoration of data.inlineDecorations) {
                if (decoration.type !== 0 /* InlineDecorationType.Regular */) {
                    supported = false;
                    break;
                }
                const styleRules = ViewGpuContext_1._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, decoration.inlineClassName);
                supported &&= styleRules.every(rule => {
                    // Pseudo classes aren't supported currently
                    if (rule.selectorText.includes(':')) {
                        return false;
                    }
                    for (const r of rule.style) {
                        if (!supportsCssRule(r, rule.style)) {
                            return false;
                        }
                    }
                    return true;
                });
                if (!supported) {
                    break;
                }
            }
            return supported;
        }
        return true;
    }
    /**
     * Like {@link canRender} but returns detailed information about why the line cannot be rendered.
     */
    canRenderDetailed(options, viewportData, lineNumber) {
        const data = viewportData.getViewLineRenderingData(lineNumber);
        const reasons = [];
        if (data.containsRTL) {
            reasons.push('containsRTL');
        }
        if (data.maxColumn > this.maxGpuCols) {
            reasons.push('maxColumn > maxGpuCols');
        }
        if (data.inlineDecorations.length > 0) {
            let supported = true;
            const problemTypes = [];
            const problemSelectors = [];
            const problemRules = [];
            for (const decoration of data.inlineDecorations) {
                if (decoration.type !== 0 /* InlineDecorationType.Regular */) {
                    problemTypes.push(decoration.type);
                    supported = false;
                    continue;
                }
                const styleRules = ViewGpuContext_1._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode, decoration.inlineClassName);
                supported &&= styleRules.every(rule => {
                    // Pseudo classes aren't supported currently
                    if (rule.selectorText.includes(':')) {
                        problemSelectors.push(rule.selectorText);
                        return false;
                    }
                    for (const r of rule.style) {
                        if (!supportsCssRule(r, rule.style)) {
                            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
                            problemRules.push(`${r}: ${rule.style[r]}`);
                            return false;
                        }
                    }
                    return true;
                });
                if (!supported) {
                    continue;
                }
            }
            if (problemTypes.length > 0) {
                reasons.push(`inlineDecorations with unsupported types (${problemTypes.map(e => `\`${e}\``).join(', ')})`);
            }
            if (problemRules.length > 0) {
                reasons.push(`inlineDecorations with unsupported CSS rules (${problemRules.map(e => `\`${e}\``).join(', ')})`);
            }
            if (problemSelectors.length > 0) {
                reasons.push(`inlineDecorations with unsupported CSS selectors (${problemSelectors.map(e => `\`${e}\``).join(', ')})`);
            }
        }
        return reasons;
    }
};
ViewGpuContext = ViewGpuContext_1 = __decorate([
    __param(1, IInstantiationService),
    __param(2, INotificationService),
    __param(3, IConfigurationService)
], ViewGpuContext);
/**
 * A list of supported decoration CSS rules that can be used in the GPU renderer.
 */
const gpuSupportedDecorationCssRules = [
    'color',
    'font-weight',
    'opacity',
];
function supportsCssRule(rule, style) {
    if (!gpuSupportedDecorationCssRules.includes(rule)) {
        return false;
    }
    // Check for values that aren't supported
    switch (rule) {
        default: return true;
    }
}

export { ViewGpuContext };
