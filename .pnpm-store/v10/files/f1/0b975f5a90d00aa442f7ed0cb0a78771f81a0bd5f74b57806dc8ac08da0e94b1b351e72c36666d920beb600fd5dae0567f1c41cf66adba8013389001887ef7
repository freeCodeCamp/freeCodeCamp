import { Color, HSLA } from '../../../base/common/color.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function _parseCaptureGroups(captureGroups) {
    const values = [];
    for (const captureGroup of captureGroups) {
        const parsedNumber = Number(captureGroup);
        if (parsedNumber || parsedNumber === 0 && captureGroup.replace(/\s/g, '') !== '') {
            values.push(parsedNumber);
        }
    }
    return values;
}
function _toIColor(r, g, b, a) {
    return {
        red: r / 255,
        blue: b / 255,
        green: g / 255,
        alpha: a
    };
}
function _findRange(model, match) {
    const index = match.index;
    const length = match[0].length;
    if (index === undefined) {
        return;
    }
    const startPosition = model.positionAt(index);
    const range = {
        startLineNumber: startPosition.lineNumber,
        startColumn: startPosition.column,
        endLineNumber: startPosition.lineNumber,
        endColumn: startPosition.column + length
    };
    return range;
}
function _findHexColorInformation(range, hexValue) {
    if (!range) {
        return;
    }
    const parsedHexColor = Color.Format.CSS.parseHex(hexValue);
    if (!parsedHexColor) {
        return;
    }
    return {
        range: range,
        color: _toIColor(parsedHexColor.rgba.r, parsedHexColor.rgba.g, parsedHexColor.rgba.b, parsedHexColor.rgba.a)
    };
}
function _findRGBColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
        return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    return {
        range: range,
        color: _toIColor(parsedRegex[0], parsedRegex[1], parsedRegex[2], isAlpha ? parsedRegex[3] : 1)
    };
}
function _findHSLColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
        return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    const colorEquivalent = new Color(new HSLA(parsedRegex[0], parsedRegex[1] / 100, parsedRegex[2] / 100, isAlpha ? parsedRegex[3] : 1));
    return {
        range: range,
        color: _toIColor(colorEquivalent.rgba.r, colorEquivalent.rgba.g, colorEquivalent.rgba.b, colorEquivalent.rgba.a)
    };
}
function _findMatches(model, regex) {
    if (typeof model === 'string') {
        return [...model.matchAll(regex)];
    }
    else {
        return model.findMatches(regex);
    }
}
function computeColors(model) {
    const result = [];
    // Early validation for RGB and HSL
    const initialValidationRegex = /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|^(#)([A-Fa-f0-9]{3})\b|^(#)([A-Fa-f0-9]{4})\b|^(#)([A-Fa-f0-9]{6})\b|^(#)([A-Fa-f0-9]{8})\b|(?<=['"\s])(#)([A-Fa-f0-9]{3})\b|(?<=['"\s])(#)([A-Fa-f0-9]{4})\b|(?<=['"\s])(#)([A-Fa-f0-9]{6})\b|(?<=['"\s])(#)([A-Fa-f0-9]{8})\b/gm;
    const initialValidationMatches = _findMatches(model, initialValidationRegex);
    // Potential colors have been found, validate the parameters
    if (initialValidationMatches.length > 0) {
        for (const initialMatch of initialValidationMatches) {
            const initialCaptureGroups = initialMatch.filter(captureGroup => captureGroup !== undefined);
            const colorScheme = initialCaptureGroups[1];
            const colorParameters = initialCaptureGroups[2];
            if (!colorParameters) {
                continue;
            }
            let colorInformation;
            if (colorScheme === 'rgb') {
                const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
                colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
            }
            else if (colorScheme === 'rgba') {
                const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
                colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
            }
            else if (colorScheme === 'hsl') {
                const regexParameters = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
                colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
            }
            else if (colorScheme === 'hsla') {
                const regexParameters = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
                colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
            }
            else if (colorScheme === '#') {
                colorInformation = _findHexColorInformation(_findRange(model, initialMatch), colorScheme + colorParameters);
            }
            if (colorInformation) {
                result.push(colorInformation);
            }
        }
    }
    return result;
}
/**
 * Returns an array of all default document colors in the provided document
 */
function computeDefaultDocumentColors(model) {
    if (!model || typeof model.getValue !== 'function' || typeof model.positionAt !== 'function') {
        // Unknown caller!
        return [];
    }
    return computeColors(model);
}

export { computeDefaultDocumentColors };
