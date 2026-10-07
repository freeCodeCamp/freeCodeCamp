import { readHotReloadableExport } from '../../../../base/common/hotReloadHelpers.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import './colors.js';
import './diffEditorItemTemplate.js';
import { MultiDiffEditorWidgetImpl } from './multiDiffEditorWidgetImpl.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { recomputeInitiallyAndOnChange } from '../../../../base/common/observableInternal/utils/utils.js';

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
let MultiDiffEditorWidget = class MultiDiffEditorWidget extends Disposable {
    constructor(_element, _workbenchUIElementFactory, _instantiationService) {
        super();
        this._element = _element;
        this._workbenchUIElementFactory = _workbenchUIElementFactory;
        this._instantiationService = _instantiationService;
        this._dimension = observableValue(this, undefined);
        this._viewModel = observableValue(this, undefined);
        this._widgetImpl = derived(this, (reader) => {
            return reader.store.add(this._instantiationService.createInstance((readHotReloadableExport(MultiDiffEditorWidgetImpl)), this._element, this._dimension, this._viewModel, this._workbenchUIElementFactory));
        });
        this._register(recomputeInitiallyAndOnChange(this._widgetImpl));
    }
};
MultiDiffEditorWidget = __decorate([
    __param(2, IInstantiationService)
], MultiDiffEditorWidget);

export { MultiDiffEditorWidget };
