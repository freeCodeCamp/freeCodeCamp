/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Color scheme used by the OS and by color themes.
 */
var ColorScheme;
(function (ColorScheme) {
    ColorScheme["DARK"] = "dark";
    ColorScheme["LIGHT"] = "light";
    ColorScheme["HIGH_CONTRAST_DARK"] = "hcDark";
    ColorScheme["HIGH_CONTRAST_LIGHT"] = "hcLight";
})(ColorScheme || (ColorScheme = {}));
var ThemeTypeSelector;
(function (ThemeTypeSelector) {
    ThemeTypeSelector["VS"] = "vs";
    ThemeTypeSelector["VS_DARK"] = "vs-dark";
    ThemeTypeSelector["HC_BLACK"] = "hc-black";
    ThemeTypeSelector["HC_LIGHT"] = "hc-light";
})(ThemeTypeSelector || (ThemeTypeSelector = {}));
function isHighContrast(scheme) {
    return scheme === ColorScheme.HIGH_CONTRAST_DARK || scheme === ColorScheme.HIGH_CONTRAST_LIGHT;
}
function isDark(scheme) {
    return scheme === ColorScheme.DARK || scheme === ColorScheme.HIGH_CONTRAST_DARK;
}

export { ColorScheme, ThemeTypeSelector, isDark, isHighContrast };
