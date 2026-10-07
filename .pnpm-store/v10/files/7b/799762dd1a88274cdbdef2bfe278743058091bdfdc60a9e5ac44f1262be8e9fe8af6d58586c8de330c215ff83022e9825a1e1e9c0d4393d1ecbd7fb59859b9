import { TimeoutTimer, createCancelablePromise } from '../../../../base/common/async.js';
import { RGBA } from '../../../../base/common/color.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { StopWatch } from '../../../../base/common/stopwatch.js';
import { noBreakWhitespace } from '../../../../base/common/strings.js';
import { DynamicCssRules } from '../../../browser/editorDom.js';
import { Range } from '../../../common/core/range.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { ILanguageFeatureDebounceService } from '../../../common/services/languageFeatureDebounce.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { getColors } from './color.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';

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
var ColorDetector_1;
const ColorDecorationInjectedTextMarker = Object.create({});
let ColorDetector = class ColorDetector extends Disposable {
    static { ColorDetector_1 = this; }
    static { this.ID = 'editor.contrib.colorDetector'; }
    static { this.RECOMPUTE_TIME = 1000; } // ms
    constructor(_editor, _configurationService, _languageFeaturesService, languageFeatureDebounceService) {
        super();
        this._editor = _editor;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._localToDispose = this._register(new DisposableStore());
        this._decorationsIds = [];
        this._colorDatas = new Map();
        this._decoratorLimitReporter = this._register(new DecoratorLimitReporter());
        this._colorDecorationClassRefs = this._register(new DisposableStore());
        this._colorDecoratorIds = this._editor.createDecorationsCollection();
        this._ruleFactory = this._register(new DynamicCssRules(this._editor));
        this._debounceInformation = languageFeatureDebounceService.for(_languageFeaturesService.colorProvider, 'Document Colors', { min: ColorDetector_1.RECOMPUTE_TIME });
        this._register(_editor.onDidChangeModel(() => {
            this._isColorDecoratorsEnabled = this.isEnabled();
            this.updateColors();
        }));
        this._register(_editor.onDidChangeModelLanguage(() => this.updateColors()));
        this._register(_languageFeaturesService.colorProvider.onDidChange(() => this.updateColors()));
        this._register(_editor.onDidChangeConfiguration((e) => {
            const prevIsEnabled = this._isColorDecoratorsEnabled;
            this._isColorDecoratorsEnabled = this.isEnabled();
            this._defaultColorDecoratorsEnablement = this._editor.getOption(167 /* EditorOption.defaultColorDecorators */);
            const updatedColorDecoratorsSetting = prevIsEnabled !== this._isColorDecoratorsEnabled || e.hasChanged(27 /* EditorOption.colorDecoratorsLimit */);
            const updatedDefaultColorDecoratorsSetting = e.hasChanged(167 /* EditorOption.defaultColorDecorators */);
            if (updatedColorDecoratorsSetting || updatedDefaultColorDecoratorsSetting) {
                if (this._isColorDecoratorsEnabled) {
                    this.updateColors();
                }
                else {
                    this.removeAllDecorations();
                }
            }
        }));
        this._timeoutTimer = null;
        this._computePromise = null;
        this._isColorDecoratorsEnabled = this.isEnabled();
        this._defaultColorDecoratorsEnablement = this._editor.getOption(167 /* EditorOption.defaultColorDecorators */);
        this.updateColors();
    }
    isEnabled() {
        const model = this._editor.getModel();
        if (!model) {
            return false;
        }
        const languageId = model.getLanguageId();
        // handle deprecated settings. [languageId].colorDecorators.enable
        const deprecatedConfig = this._configurationService.getValue(languageId);
        if (deprecatedConfig && typeof deprecatedConfig === 'object') {
            // eslint-disable-next-line local/code-no-any-casts
            const colorDecorators = deprecatedConfig['colorDecorators']; // deprecatedConfig.valueOf('.colorDecorators.enable');
            if (colorDecorators && colorDecorators['enable'] !== undefined && !colorDecorators['enable']) {
                return colorDecorators['enable'];
            }
        }
        return this._editor.getOption(26 /* EditorOption.colorDecorators */);
    }
    static get(editor) {
        return editor.getContribution(this.ID);
    }
    dispose() {
        this.stop();
        this.removeAllDecorations();
        super.dispose();
    }
    updateColors() {
        this.stop();
        if (!this._isColorDecoratorsEnabled) {
            return;
        }
        const model = this._editor.getModel();
        if (!model || !this._languageFeaturesService.colorProvider.has(model)) {
            return;
        }
        this._localToDispose.add(this._editor.onDidChangeModelContent(() => {
            if (!this._timeoutTimer) {
                this._timeoutTimer = new TimeoutTimer();
                this._timeoutTimer.cancelAndSet(() => {
                    this._timeoutTimer = null;
                    this.beginCompute();
                }, this._debounceInformation.get(model));
            }
        }));
        this.beginCompute();
    }
    async beginCompute() {
        this._computePromise = createCancelablePromise(async (token) => {
            const model = this._editor.getModel();
            if (!model) {
                return [];
            }
            const sw = new StopWatch(false);
            const colors = await getColors(this._languageFeaturesService.colorProvider, model, token, this._defaultColorDecoratorsEnablement);
            this._debounceInformation.update(model, sw.elapsed());
            return colors;
        });
        try {
            const colors = await this._computePromise;
            this.updateDecorations(colors);
            this.updateColorDecorators(colors);
            this._computePromise = null;
        }
        catch (e) {
            onUnexpectedError(e);
        }
    }
    stop() {
        if (this._timeoutTimer) {
            this._timeoutTimer.cancel();
            this._timeoutTimer = null;
        }
        if (this._computePromise) {
            this._computePromise.cancel();
            this._computePromise = null;
        }
        this._localToDispose.clear();
    }
    updateDecorations(colorDatas) {
        const decorations = colorDatas.map(c => ({
            range: {
                startLineNumber: c.colorInfo.range.startLineNumber,
                startColumn: c.colorInfo.range.startColumn,
                endLineNumber: c.colorInfo.range.endLineNumber,
                endColumn: c.colorInfo.range.endColumn
            },
            options: ModelDecorationOptions.EMPTY
        }));
        this._editor.changeDecorations((changeAccessor) => {
            this._decorationsIds = changeAccessor.deltaDecorations(this._decorationsIds, decorations);
            this._colorDatas = new Map();
            this._decorationsIds.forEach((id, i) => this._colorDatas.set(id, colorDatas[i]));
        });
    }
    updateColorDecorators(colorData) {
        this._colorDecorationClassRefs.clear();
        const decorations = [];
        const limit = this._editor.getOption(27 /* EditorOption.colorDecoratorsLimit */);
        for (let i = 0; i < colorData.length && decorations.length < limit; i++) {
            const { red, green, blue, alpha } = colorData[i].colorInfo.color;
            const rgba = new RGBA(Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255), alpha);
            const color = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
            const ref = this._colorDecorationClassRefs.add(this._ruleFactory.createClassNameRef({
                backgroundColor: color
            }));
            decorations.push({
                range: {
                    startLineNumber: colorData[i].colorInfo.range.startLineNumber,
                    startColumn: colorData[i].colorInfo.range.startColumn,
                    endLineNumber: colorData[i].colorInfo.range.endLineNumber,
                    endColumn: colorData[i].colorInfo.range.endColumn
                },
                options: {
                    description: 'colorDetector',
                    before: {
                        content: noBreakWhitespace,
                        inlineClassName: `${ref.className} colorpicker-color-decoration`,
                        inlineClassNameAffectsLetterSpacing: true,
                        attachedData: ColorDecorationInjectedTextMarker
                    }
                }
            });
        }
        const limited = limit < colorData.length ? limit : false;
        this._decoratorLimitReporter.update(colorData.length, limited);
        this._colorDecoratorIds.set(decorations);
    }
    removeAllDecorations() {
        this._editor.removeDecorations(this._decorationsIds);
        this._decorationsIds = [];
        this._colorDecoratorIds.clear();
        this._colorDecorationClassRefs.clear();
    }
    getColorData(position) {
        const model = this._editor.getModel();
        if (!model) {
            return null;
        }
        const decorations = model
            .getDecorationsInRange(Range.fromPositions(position, position))
            .filter(d => this._colorDatas.has(d.id));
        if (decorations.length === 0) {
            return null;
        }
        return this._colorDatas.get(decorations[0].id);
    }
    isColorDecoration(decoration) {
        return this._colorDecoratorIds.has(decoration);
    }
};
ColorDetector = ColorDetector_1 = __decorate([
    __param(1, IConfigurationService),
    __param(2, ILanguageFeaturesService),
    __param(3, ILanguageFeatureDebounceService)
], ColorDetector);
class DecoratorLimitReporter extends Disposable {
    constructor() {
        super(...arguments);
        this._onDidChange = this._register(new Emitter());
        this._computed = 0;
        this._limited = false;
    }
    update(computed, limited) {
        if (computed !== this._computed || limited !== this._limited) {
            this._computed = computed;
            this._limited = limited;
            this._onDidChange.fire();
        }
    }
}

export { ColorDecorationInjectedTextMarker, ColorDetector, DecoratorLimitReporter };
