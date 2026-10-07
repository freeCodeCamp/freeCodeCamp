import { localize } from '../../../../nls.js';
import { Color } from '../../../../base/common/color.js';
import { registerColor, transparent } from '../colorUtils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const foreground = registerColor('foreground', { dark: '#CCCCCC', light: '#616161', hcDark: '#FFFFFF', hcLight: '#292929' }, localize(1773, "Overall foreground color. This color is only used if not overridden by a component."));
registerColor('disabledForeground', { dark: '#CCCCCC80', light: '#61616180', hcDark: '#A5A5A5', hcLight: '#7F7F7F' }, localize(1774, "Overall foreground for disabled elements. This color is only used if not overridden by a component."));
registerColor('errorForeground', { dark: '#F48771', light: '#A1260D', hcDark: '#F48771', hcLight: '#B5200D' }, localize(1775, "Overall foreground color for error messages. This color is only used if not overridden by a component."));
const descriptionForeground = registerColor('descriptionForeground', { light: '#717171', dark: transparent(foreground, 0.7), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, localize(1776, "Foreground color for description text providing additional information, for example for a label."));
const iconForeground = registerColor('icon.foreground', { dark: '#C5C5C5', light: '#424242', hcDark: '#FFFFFF', hcLight: '#292929' }, localize(1777, "The default color for icons in the workbench."));
const focusBorder = registerColor('focusBorder', { dark: '#007FD4', light: '#0090F1', hcDark: '#F38518', hcLight: '#006BBD' }, localize(1778, "Overall border color for focused elements. This color is only used if not overridden by a component."));
const contrastBorder = registerColor('contrastBorder', { light: null, dark: null, hcDark: '#6FC3DF', hcLight: '#0F4A85' }, localize(1779, "An extra border around elements to separate them from others for greater contrast."));
const activeContrastBorder = registerColor('contrastActiveBorder', { light: null, dark: null, hcDark: focusBorder, hcLight: focusBorder }, localize(1780, "An extra border around active elements to separate them from others for greater contrast."));
registerColor('selection.background', null, localize(1781, "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."));
// ------ text link
const textLinkForeground = registerColor('textLink.foreground', { light: '#006AB1', dark: '#3794FF', hcDark: '#21A6FF', hcLight: '#0F4A85' }, localize(1782, "Foreground color for links in text."));
registerColor('textLink.activeForeground', { light: '#006AB1', dark: '#3794FF', hcDark: '#21A6FF', hcLight: '#0F4A85' }, localize(1783, "Foreground color for links in text when clicked on and on mouse hover."));
registerColor('textSeparator.foreground', { light: '#0000002e', dark: '#ffffff2e', hcDark: Color.black, hcLight: '#292929' }, localize(1784, "Color for text separators."));
// ------ text preformat
registerColor('textPreformat.foreground', { light: '#A31515', dark: '#D7BA7D', hcDark: '#000000', hcLight: '#FFFFFF' }, localize(1785, "Foreground color for preformatted text segments."));
registerColor('textPreformat.background', { light: '#0000001A', dark: '#FFFFFF1A', hcDark: '#FFFFFF', hcLight: '#09345f' }, localize(1786, "Background color for preformatted text segments."));
// ------ text block quote
registerColor('textBlockQuote.background', { light: '#f2f2f2', dark: '#222222', hcDark: null, hcLight: '#F2F2F2' }, localize(1787, "Background color for block quotes in text."));
registerColor('textBlockQuote.border', { light: '#007acc80', dark: '#007acc80', hcDark: Color.white, hcLight: '#292929' }, localize(1788, "Border color for block quotes in text."));
// ------ text code block
registerColor('textCodeBlock.background', { light: '#dcdcdc66', dark: '#0a0a0a66', hcDark: Color.black, hcLight: '#F2F2F2' }, localize(1789, "Background color for code blocks in text."));

export { activeContrastBorder, contrastBorder, descriptionForeground, focusBorder, foreground, iconForeground, textLinkForeground };
