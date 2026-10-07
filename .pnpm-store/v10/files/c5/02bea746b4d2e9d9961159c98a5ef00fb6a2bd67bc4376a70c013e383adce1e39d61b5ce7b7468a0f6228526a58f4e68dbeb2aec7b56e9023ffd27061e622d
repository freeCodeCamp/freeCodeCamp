import { isMacintosh, isWindows } from '../../../base/common/platform.js';
import { EditorZoom } from './editorZoom.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Determined from empirical observations.
 * @internal
 */
const GOLDEN_LINE_HEIGHT_RATIO = isMacintosh ? 1.5 : 1.35;
/**
 * @internal
 */
const MINIMUM_LINE_HEIGHT = 8;
class BareFontInfo {
    /**
     * @internal
     */
    static _create(fontFamily, fontWeight, fontSize, fontFeatureSettings, fontVariationSettings, lineHeight, letterSpacing, pixelRatio, ignoreEditorZoom) {
        if (lineHeight === 0) {
            lineHeight = GOLDEN_LINE_HEIGHT_RATIO * fontSize;
        }
        else if (lineHeight < MINIMUM_LINE_HEIGHT) {
            // Values too small to be line heights in pixels are in ems.
            lineHeight = lineHeight * fontSize;
        }
        // Enforce integer, minimum constraints
        lineHeight = Math.round(lineHeight);
        if (lineHeight < MINIMUM_LINE_HEIGHT) {
            lineHeight = MINIMUM_LINE_HEIGHT;
        }
        const editorZoomLevelMultiplier = 1 + (ignoreEditorZoom ? 0 : EditorZoom.getZoomLevel() * 0.1);
        fontSize *= editorZoomLevelMultiplier;
        lineHeight *= editorZoomLevelMultiplier;
        if (fontVariationSettings === FONT_VARIATION_TRANSLATE) {
            if (fontWeight === 'normal' || fontWeight === 'bold') {
                fontVariationSettings = FONT_VARIATION_OFF;
            }
            else {
                const fontWeightAsNumber = parseInt(fontWeight, 10);
                fontVariationSettings = `'wght' ${fontWeightAsNumber}`;
                fontWeight = 'normal';
            }
        }
        return new BareFontInfo({
            pixelRatio: pixelRatio,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFeatureSettings: fontFeatureSettings,
            fontVariationSettings,
            lineHeight: lineHeight,
            letterSpacing: letterSpacing
        });
    }
    /**
     * @internal
     */
    constructor(opts) {
        this._bareFontInfoBrand = undefined;
        this.pixelRatio = opts.pixelRatio;
        this.fontFamily = String(opts.fontFamily);
        this.fontWeight = String(opts.fontWeight);
        this.fontSize = opts.fontSize;
        this.fontFeatureSettings = opts.fontFeatureSettings;
        this.fontVariationSettings = opts.fontVariationSettings;
        this.lineHeight = opts.lineHeight | 0;
        this.letterSpacing = opts.letterSpacing;
    }
    /**
     * @internal
     */
    getId() {
        return `${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`;
    }
    /**
     * @internal
     */
    getMassagedFontFamily() {
        const fallbackFontFamily = EDITOR_FONT_DEFAULTS.fontFamily;
        const fontFamily = BareFontInfo._wrapInQuotes(this.fontFamily);
        if (this.fontFamily !== fallbackFontFamily) {
            return `${fontFamily}, ${fallbackFontFamily}`;
        }
        return fontFamily;
    }
    static _wrapInQuotes(fontFamily) {
        if (/[,"']/.test(fontFamily)) {
            // Looks like the font family might be already escaped
            return fontFamily;
        }
        if (/[+ ]/.test(fontFamily)) {
            // Wrap a font family using + or <space> with quotes
            return `"${fontFamily}"`;
        }
        return fontFamily;
    }
}
// change this whenever `FontInfo` members are changed
const SERIALIZED_FONT_INFO_VERSION = 2;
class FontInfo extends BareFontInfo {
    /**
     * @internal
     */
    constructor(opts, isTrusted) {
        super(opts);
        this._editorStylingBrand = undefined;
        this.version = SERIALIZED_FONT_INFO_VERSION;
        this.isTrusted = isTrusted;
        this.isMonospace = opts.isMonospace;
        this.typicalHalfwidthCharacterWidth = opts.typicalHalfwidthCharacterWidth;
        this.typicalFullwidthCharacterWidth = opts.typicalFullwidthCharacterWidth;
        this.canUseHalfwidthRightwardsArrow = opts.canUseHalfwidthRightwardsArrow;
        this.spaceWidth = opts.spaceWidth;
        this.middotWidth = opts.middotWidth;
        this.wsmiddotWidth = opts.wsmiddotWidth;
        this.maxDigitWidth = opts.maxDigitWidth;
    }
    /**
     * @internal
     */
    equals(other) {
        return (this.fontFamily === other.fontFamily
            && this.fontWeight === other.fontWeight
            && this.fontSize === other.fontSize
            && this.fontFeatureSettings === other.fontFeatureSettings
            && this.fontVariationSettings === other.fontVariationSettings
            && this.lineHeight === other.lineHeight
            && this.letterSpacing === other.letterSpacing
            && this.typicalHalfwidthCharacterWidth === other.typicalHalfwidthCharacterWidth
            && this.typicalFullwidthCharacterWidth === other.typicalFullwidthCharacterWidth
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.spaceWidth === other.spaceWidth
            && this.middotWidth === other.middotWidth
            && this.wsmiddotWidth === other.wsmiddotWidth
            && this.maxDigitWidth === other.maxDigitWidth);
    }
}
/**
 * @internal
 */
const FONT_VARIATION_OFF = 'normal';
/**
 * @internal
 */
const FONT_VARIATION_TRANSLATE = 'translate';
/**
 * @internal
 */
const DEFAULT_WINDOWS_FONT_FAMILY = 'Consolas, \'Courier New\', monospace';
/**
 * @internal
 */
const DEFAULT_MAC_FONT_FAMILY = 'Menlo, Monaco, \'Courier New\', monospace';
/**
 * @internal
 */
const DEFAULT_LINUX_FONT_FAMILY = '\'Droid Sans Mono\', \'monospace\', monospace';
/**
 * @internal
 */
const EDITOR_FONT_DEFAULTS = {
    fontFamily: (isMacintosh ? DEFAULT_MAC_FONT_FAMILY : (isWindows ? DEFAULT_WINDOWS_FONT_FAMILY : DEFAULT_LINUX_FONT_FAMILY)),
    fontWeight: 'normal',
    fontSize: (isMacintosh ? 12 : 14),
    lineHeight: 0,
    letterSpacing: 0,
};

export { BareFontInfo, DEFAULT_LINUX_FONT_FAMILY, DEFAULT_MAC_FONT_FAMILY, DEFAULT_WINDOWS_FONT_FAMILY, EDITOR_FONT_DEFAULTS, FONT_VARIATION_OFF, FONT_VARIATION_TRANSLATE, FontInfo, GOLDEN_LINE_HEIGHT_RATIO, MINIMUM_LINE_HEIGHT, SERIALIZED_FONT_INFO_VERSION };
