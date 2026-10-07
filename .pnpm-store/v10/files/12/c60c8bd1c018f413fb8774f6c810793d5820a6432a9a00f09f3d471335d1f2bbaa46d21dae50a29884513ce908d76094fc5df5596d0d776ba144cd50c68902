import { EditorOptions } from './editorOptions.js';
import { BareFontInfo } from './fontInfo.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createBareFontInfoFromValidatedSettings(options, pixelRatio, ignoreEditorZoom) {
    const fontFamily = options.get(58 /* EditorOption.fontFamily */);
    const fontWeight = options.get(62 /* EditorOption.fontWeight */);
    const fontSize = options.get(61 /* EditorOption.fontSize */);
    const fontFeatureSettings = options.get(60 /* EditorOption.fontLigatures */);
    const fontVariationSettings = options.get(63 /* EditorOption.fontVariations */);
    const lineHeight = options.get(75 /* EditorOption.lineHeight */);
    const letterSpacing = options.get(72 /* EditorOption.letterSpacing */);
    return BareFontInfo._create(fontFamily, fontWeight, fontSize, fontFeatureSettings, fontVariationSettings, lineHeight, letterSpacing, pixelRatio, ignoreEditorZoom);
}
function createBareFontInfoFromRawSettings(opts, pixelRatio, ignoreEditorZoom = false) {
    const fontFamily = EditorOptions.fontFamily.validate(opts.fontFamily);
    const fontWeight = EditorOptions.fontWeight.validate(opts.fontWeight);
    const fontSize = EditorOptions.fontSize.validate(opts.fontSize);
    const fontFeatureSettings = EditorOptions.fontLigatures2.validate(opts.fontLigatures);
    const fontVariationSettings = EditorOptions.fontVariations.validate(opts.fontVariations);
    const lineHeight = EditorOptions.lineHeight.validate(opts.lineHeight);
    const letterSpacing = EditorOptions.letterSpacing.validate(opts.letterSpacing);
    return BareFontInfo._create(fontFamily, fontWeight, fontSize, fontFeatureSettings, fontVariationSettings, lineHeight, letterSpacing, pixelRatio, ignoreEditorZoom);
}

export { createBareFontInfoFromRawSettings, createBareFontInfoFromValidatedSettings };
