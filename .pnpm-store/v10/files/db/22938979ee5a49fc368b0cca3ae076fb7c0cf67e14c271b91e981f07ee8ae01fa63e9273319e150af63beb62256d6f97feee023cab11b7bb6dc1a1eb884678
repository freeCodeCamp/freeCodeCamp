import { CancellationToken } from '../../../../base/common/cancellation.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { getColorPresentations } from './color.js';
import { ColorPickerModel } from './colorPickerModel.js';
import { Range } from '../../../common/core/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
async function createColorHover(editorModel, colorInfo, provider) {
    const originalText = editorModel.getValueInRange(colorInfo.range);
    const { red, green, blue, alpha } = colorInfo.color;
    const rgba = new RGBA(Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255), alpha);
    const color = new Color(rgba);
    const colorPresentations = await getColorPresentations(editorModel, colorInfo, provider, CancellationToken.None);
    const model = new ColorPickerModel(color, [], 0);
    model.colorPresentations = colorPresentations || [];
    model.guessColorPresentation(color, originalText);
    return {
        range: Range.lift(colorInfo.range),
        model,
        provider
    };
}
function updateEditorModel(editor, range, model) {
    const textEdits = [];
    const edit = model.presentation.textEdit ?? { range, text: model.presentation.label, forceMoveMarkers: false };
    textEdits.push(edit);
    if (model.presentation.additionalTextEdits) {
        textEdits.push(...model.presentation.additionalTextEdits);
    }
    const replaceRange = Range.lift(edit.range);
    const trackedRange = editor.getModel()._setTrackedRange(null, replaceRange, 3 /* TrackedRangeStickiness.GrowsOnlyWhenTypingAfter */);
    editor.executeEdits('colorpicker', textEdits);
    editor.pushUndoStop();
    return editor.getModel()._getTrackedRange(trackedRange) ?? replaceRange;
}
async function updateColorPresentations(editorModel, colorPickerModel, color, range, colorHover) {
    const colorPresentations = await getColorPresentations(editorModel, {
        range: range,
        color: {
            red: color.rgba.r / 255,
            green: color.rgba.g / 255,
            blue: color.rgba.b / 255,
            alpha: color.rgba.a
        }
    }, colorHover.provider, CancellationToken.None);
    colorPickerModel.colorPresentations = colorPresentations || [];
}

export { createColorHover, updateColorPresentations, updateEditorModel };
