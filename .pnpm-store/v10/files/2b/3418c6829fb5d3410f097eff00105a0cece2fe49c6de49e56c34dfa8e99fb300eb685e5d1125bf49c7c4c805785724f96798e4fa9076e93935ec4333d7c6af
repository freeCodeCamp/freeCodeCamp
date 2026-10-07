import { ViewPart } from '../../view/viewPart.js';
import { Color } from '../../../../base/common/color.js';
import { editorRuler } from '../../../common/core/editorColorRegistry.js';
import '../../../../base/common/observableInternal/index.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Rulers are vertical lines that appear at certain columns in the editor. There can be >= 0 rulers
 * at a time.
 */
class RulersGpu extends ViewPart {
    constructor(context, _viewGpuContext) {
        super(context);
        this._viewGpuContext = _viewGpuContext;
        this._gpuShapes = [];
        this._register(autorun(reader => this._updateEntries(reader)));
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        this._updateEntries(undefined);
        return true;
    }
    // --- end event handlers
    prepareRender(ctx) {
        // Nothing to read
    }
    render(ctx) {
        // Rendering is handled by RectangleRenderer
    }
    _updateEntries(reader) {
        const options = this._context.configuration.options;
        const rulers = options.get(116 /* EditorOption.rulers */);
        const typicalHalfwidthCharacterWidth = options.get(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        const devicePixelRatio = this._viewGpuContext.devicePixelRatio.read(reader);
        for (let i = 0, len = rulers.length; i < len; i++) {
            const ruler = rulers[i];
            const shape = this._gpuShapes[i];
            const color = ruler.color ? Color.fromHex(ruler.color) : this._context.theme.getColor(editorRuler) ?? Color.white;
            const rulerData = [
                ruler.column * typicalHalfwidthCharacterWidth * devicePixelRatio,
                0,
                Math.max(1, Math.ceil(devicePixelRatio)),
                Number.MAX_SAFE_INTEGER,
                color.rgba.r / 255,
                color.rgba.g / 255,
                color.rgba.b / 255,
                color.rgba.a,
            ];
            if (!shape) {
                this._gpuShapes[i] = this._viewGpuContext.rectangleRenderer.register(...rulerData);
            }
            else {
                shape.setRaw(rulerData);
            }
        }
        while (this._gpuShapes.length > rulers.length) {
            this._gpuShapes.splice(-1, 1)[0].dispose();
        }
    }
}

export { RulersGpu };
