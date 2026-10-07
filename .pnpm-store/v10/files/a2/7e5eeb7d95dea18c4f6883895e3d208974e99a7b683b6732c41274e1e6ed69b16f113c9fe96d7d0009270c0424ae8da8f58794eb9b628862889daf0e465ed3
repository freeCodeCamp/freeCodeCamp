import { localize } from '../../../../nls.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { registerColor, transparent, darken, lighten } from '../colorUtils.js';
import { foreground, contrastBorder, focusBorder, iconForeground } from './baseColors.js';
import { editorWidgetBackground } from './editorColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// ----- input
const inputBackground = registerColor('input.background', { dark: '#3C3C3C', light: Color.white, hcDark: Color.black, hcLight: Color.white }, localize(1893, "Input box background."));
const inputForeground = registerColor('input.foreground', foreground, localize(1894, "Input box foreground."));
const inputBorder = registerColor('input.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1895, "Input box border."));
const inputActiveOptionBorder = registerColor('inputOption.activeBorder', { dark: '#007ACC', light: '#007ACC', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1896, "Border color of activated options in input fields."));
const inputActiveOptionHoverBackground = registerColor('inputOption.hoverBackground', { dark: '#5a5d5e80', light: '#b8b8b850', hcDark: null, hcLight: null }, localize(1897, "Background color of activated options in input fields."));
const inputActiveOptionBackground = registerColor('inputOption.activeBackground', { dark: transparent(focusBorder, 0.4), light: transparent(focusBorder, 0.2), hcDark: Color.transparent, hcLight: Color.transparent }, localize(1898, "Background hover color of options in input fields."));
const inputActiveOptionForeground = registerColor('inputOption.activeForeground', { dark: Color.white, light: Color.black, hcDark: foreground, hcLight: foreground }, localize(1899, "Foreground color of activated options in input fields."));
registerColor('input.placeholderForeground', { light: transparent(foreground, 0.5), dark: transparent(foreground, 0.5), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, localize(1900, "Input box foreground color for placeholder text."));
// ----- input validation
const inputValidationInfoBackground = registerColor('inputValidation.infoBackground', { dark: '#063B49', light: '#D6ECF2', hcDark: Color.black, hcLight: Color.white }, localize(1901, "Input validation background color for information severity."));
const inputValidationInfoForeground = registerColor('inputValidation.infoForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, localize(1902, "Input validation foreground color for information severity."));
const inputValidationInfoBorder = registerColor('inputValidation.infoBorder', { dark: '#007acc', light: '#007acc', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1903, "Input validation border color for information severity."));
const inputValidationWarningBackground = registerColor('inputValidation.warningBackground', { dark: '#352A05', light: '#F6F5D2', hcDark: Color.black, hcLight: Color.white }, localize(1904, "Input validation background color for warning severity."));
const inputValidationWarningForeground = registerColor('inputValidation.warningForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, localize(1905, "Input validation foreground color for warning severity."));
const inputValidationWarningBorder = registerColor('inputValidation.warningBorder', { dark: '#B89500', light: '#B89500', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1906, "Input validation border color for warning severity."));
const inputValidationErrorBackground = registerColor('inputValidation.errorBackground', { dark: '#5A1D1D', light: '#F2DEDE', hcDark: Color.black, hcLight: Color.white }, localize(1907, "Input validation background color for error severity."));
const inputValidationErrorForeground = registerColor('inputValidation.errorForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, localize(1908, "Input validation foreground color for error severity."));
const inputValidationErrorBorder = registerColor('inputValidation.errorBorder', { dark: '#BE1100', light: '#BE1100', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1909, "Input validation border color for error severity."));
// ----- select
const selectBackground = registerColor('dropdown.background', { dark: '#3C3C3C', light: Color.white, hcDark: Color.black, hcLight: Color.white }, localize(1910, "Dropdown background."));
const selectListBackground = registerColor('dropdown.listBackground', { dark: null, light: null, hcDark: Color.black, hcLight: Color.white }, localize(1911, "Dropdown list background."));
const selectForeground = registerColor('dropdown.foreground', { dark: '#F0F0F0', light: foreground, hcDark: Color.white, hcLight: foreground }, localize(1912, "Dropdown foreground."));
const selectBorder = registerColor('dropdown.border', { dark: selectBackground, light: '#CECECE', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1913, "Dropdown border."));
// ------ button
const buttonForeground = registerColor('button.foreground', Color.white, localize(1914, "Button foreground color."));
const buttonSeparator = registerColor('button.separator', transparent(buttonForeground, .4), localize(1915, "Button separator color."));
const buttonBackground = registerColor('button.background', { dark: '#0E639C', light: '#007ACC', hcDark: Color.black, hcLight: '#0F4A85' }, localize(1916, "Button background color."));
const buttonHoverBackground = registerColor('button.hoverBackground', { dark: lighten(buttonBackground, 0.2), light: darken(buttonBackground, 0.2), hcDark: buttonBackground, hcLight: buttonBackground }, localize(1917, "Button background color when hovering."));
const buttonBorder = registerColor('button.border', contrastBorder, localize(1918, "Button border color."));
const buttonSecondaryForeground = registerColor('button.secondaryForeground', { dark: Color.white, light: Color.white, hcDark: Color.white, hcLight: foreground }, localize(1919, "Secondary button foreground color."));
const buttonSecondaryBackground = registerColor('button.secondaryBackground', { dark: '#3A3D41', light: '#5F6A79', hcDark: null, hcLight: Color.white }, localize(1920, "Secondary button background color."));
const buttonSecondaryHoverBackground = registerColor('button.secondaryHoverBackground', { dark: lighten(buttonSecondaryBackground, 0.2), light: darken(buttonSecondaryBackground, 0.2), hcDark: null, hcLight: null }, localize(1921, "Secondary button background color when hovering."));
// ------ radio
const radioActiveForeground = registerColor('radio.activeForeground', inputActiveOptionForeground, localize(1922, "Foreground color of active radio option."));
const radioActiveBackground = registerColor('radio.activeBackground', inputActiveOptionBackground, localize(1923, "Background color of active radio option."));
const radioActiveBorder = registerColor('radio.activeBorder', inputActiveOptionBorder, localize(1924, "Border color of the active radio option."));
const radioInactiveForeground = registerColor('radio.inactiveForeground', null, localize(1925, "Foreground color of inactive radio option."));
const radioInactiveBackground = registerColor('radio.inactiveBackground', null, localize(1926, "Background color of inactive radio option."));
const radioInactiveBorder = registerColor('radio.inactiveBorder', { light: transparent(radioActiveForeground, .2), dark: transparent(radioActiveForeground, .2), hcDark: transparent(radioActiveForeground, .4), hcLight: transparent(radioActiveForeground, .2) }, localize(1927, "Border color of the inactive radio option."));
const radioInactiveHoverBackground = registerColor('radio.inactiveHoverBackground', inputActiveOptionHoverBackground, localize(1928, "Background color of inactive active radio option when hovering."));
// ------ checkbox
const checkboxBackground = registerColor('checkbox.background', selectBackground, localize(1929, "Background color of checkbox widget."));
registerColor('checkbox.selectBackground', editorWidgetBackground, localize(1930, "Background color of checkbox widget when the element it's in is selected."));
const checkboxForeground = registerColor('checkbox.foreground', selectForeground, localize(1931, "Foreground color of checkbox widget."));
const checkboxBorder = registerColor('checkbox.border', selectBorder, localize(1932, "Border color of checkbox widget."));
registerColor('checkbox.selectBorder', iconForeground, localize(1933, "Border color of checkbox widget when the element it's in is selected."));
const checkboxDisabledBackground = registerColor('checkbox.disabled.background', { op: 7 /* ColorTransformType.Mix */, color: checkboxBackground, with: checkboxForeground, ratio: 0.33 }, localize(1934, "Background of a disabled checkbox."));
const checkboxDisabledForeground = registerColor('checkbox.disabled.foreground', { op: 7 /* ColorTransformType.Mix */, color: checkboxForeground, with: checkboxBackground, ratio: 0.33 }, localize(1935, "Foreground of a disabled checkbox."));
// ------ keybinding label
const keybindingLabelBackground = registerColor('keybindingLabel.background', { dark: new Color(new RGBA(128, 128, 128, 0.17)), light: new Color(new RGBA(221, 221, 221, 0.4)), hcDark: Color.transparent, hcLight: Color.transparent }, localize(1936, "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelForeground = registerColor('keybindingLabel.foreground', { dark: Color.fromHex('#CCCCCC'), light: Color.fromHex('#555555'), hcDark: Color.white, hcLight: foreground }, localize(1937, "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBorder = registerColor('keybindingLabel.border', { dark: new Color(new RGBA(51, 51, 51, 0.6)), light: new Color(new RGBA(204, 204, 204, 0.4)), hcDark: new Color(new RGBA(111, 195, 223)), hcLight: contrastBorder }, localize(1938, "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBottomBorder = registerColor('keybindingLabel.bottomBorder', { dark: new Color(new RGBA(68, 68, 68, 0.6)), light: new Color(new RGBA(187, 187, 187, 0.4)), hcDark: new Color(new RGBA(111, 195, 223)), hcLight: foreground }, localize(1939, "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut."));

export { buttonBackground, buttonBorder, buttonForeground, buttonHoverBackground, buttonSecondaryBackground, buttonSecondaryForeground, buttonSecondaryHoverBackground, buttonSeparator, checkboxBackground, checkboxBorder, checkboxDisabledBackground, checkboxDisabledForeground, checkboxForeground, inputActiveOptionBackground, inputActiveOptionBorder, inputActiveOptionForeground, inputActiveOptionHoverBackground, inputBackground, inputBorder, inputForeground, inputValidationErrorBackground, inputValidationErrorBorder, inputValidationErrorForeground, inputValidationInfoBackground, inputValidationInfoBorder, inputValidationInfoForeground, inputValidationWarningBackground, inputValidationWarningBorder, inputValidationWarningForeground, keybindingLabelBackground, keybindingLabelBorder, keybindingLabelBottomBorder, keybindingLabelForeground, radioActiveBackground, radioActiveBorder, radioActiveForeground, radioInactiveBackground, radioInactiveBorder, radioInactiveForeground, radioInactiveHoverBackground, selectBackground, selectBorder, selectForeground, selectListBackground };
