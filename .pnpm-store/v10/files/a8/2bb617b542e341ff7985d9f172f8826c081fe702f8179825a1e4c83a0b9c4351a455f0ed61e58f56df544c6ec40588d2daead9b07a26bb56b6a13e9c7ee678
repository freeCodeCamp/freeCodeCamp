import { localize } from '../../../../nls.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { registerColor, transparent, lessProminent, darken, lighten } from '../colorUtils.js';
import { foreground, contrastBorder, activeContrastBorder } from './baseColors.js';
import { scrollbarShadow, badgeBackground } from './miscColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// ----- editor
const editorBackground = registerColor('editor.background', { light: '#ffffff', dark: '#1E1E1E', hcDark: Color.black, hcLight: Color.white }, localize(1798, "Editor background color."));
const editorForeground = registerColor('editor.foreground', { light: '#333333', dark: '#BBBBBB', hcDark: Color.white, hcLight: foreground }, localize(1799, "Editor default foreground color."));
registerColor('editorStickyScroll.background', editorBackground, localize(1800, "Background color of sticky scroll in the editor"));
registerColor('editorStickyScrollGutter.background', editorBackground, localize(1801, "Background color of the gutter part of sticky scroll in the editor"));
registerColor('editorStickyScrollHover.background', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: null, hcLight: Color.fromHex('#0F4A85').transparent(0.1) }, localize(1802, "Background color of sticky scroll on hover in the editor"));
registerColor('editorStickyScroll.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1803, "Border color of sticky scroll in the editor"));
registerColor('editorStickyScroll.shadow', scrollbarShadow, localize(1804, " Shadow color of sticky scroll in the editor"));
const editorWidgetBackground = registerColor('editorWidget.background', { dark: '#252526', light: '#F3F3F3', hcDark: '#0C141F', hcLight: Color.white }, localize(1805, 'Background color of editor widgets, such as find/replace.'));
const editorWidgetForeground = registerColor('editorWidget.foreground', foreground, localize(1806, 'Foreground color of editor widgets, such as find/replace.'));
const editorWidgetBorder = registerColor('editorWidget.border', { dark: '#454545', light: '#C8C8C8', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1807, 'Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.'));
registerColor('editorWidget.resizeBorder', null, localize(1808, "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."));
registerColor('editorError.background', null, localize(1809, 'Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorErrorForeground = registerColor('editorError.foreground', { dark: '#F14C4C', light: '#E51400', hcDark: '#F48771', hcLight: '#B5200D' }, localize(1810, 'Foreground color of error squigglies in the editor.'));
const editorErrorBorder = registerColor('editorError.border', { dark: null, light: null, hcDark: Color.fromHex('#E47777').transparent(0.8), hcLight: '#B5200D' }, localize(1811, 'If set, color of double underlines for errors in the editor.'));
const editorWarningBackground = registerColor('editorWarning.background', null, localize(1812, 'Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorWarningForeground = registerColor('editorWarning.foreground', { dark: '#CCA700', light: '#BF8803', hcDark: '#FFD370', hcLight: '#895503' }, localize(1813, 'Foreground color of warning squigglies in the editor.'));
const editorWarningBorder = registerColor('editorWarning.border', { dark: null, light: null, hcDark: Color.fromHex('#FFCC00').transparent(0.8), hcLight: Color.fromHex('#FFCC00').transparent(0.8) }, localize(1814, 'If set, color of double underlines for warnings in the editor.'));
registerColor('editorInfo.background', null, localize(1815, 'Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorInfoForeground = registerColor('editorInfo.foreground', { dark: '#3794FF', light: '#1a85ff', hcDark: '#3794FF', hcLight: '#1a85ff' }, localize(1816, 'Foreground color of info squigglies in the editor.'));
const editorInfoBorder = registerColor('editorInfo.border', { dark: null, light: null, hcDark: Color.fromHex('#3794FF').transparent(0.8), hcLight: '#292929' }, localize(1817, 'If set, color of double underlines for infos in the editor.'));
const editorHintForeground = registerColor('editorHint.foreground', { dark: Color.fromHex('#eeeeee').transparent(0.7), light: '#6c6c6c', hcDark: null, hcLight: null }, localize(1818, 'Foreground color of hint squigglies in the editor.'));
registerColor('editorHint.border', { dark: null, light: null, hcDark: Color.fromHex('#eeeeee').transparent(0.8), hcLight: '#292929' }, localize(1819, 'If set, color of double underlines for hints in the editor.'));
const editorActiveLinkForeground = registerColor('editorLink.activeForeground', { dark: '#4E94CE', light: Color.blue, hcDark: Color.cyan, hcLight: '#292929' }, localize(1820, 'Color of active links.'));
// ----- editor selection
const editorSelectionBackground = registerColor('editor.selectionBackground', { light: '#ADD6FF', dark: '#264F78', hcDark: '#f3f518', hcLight: '#0F4A85' }, localize(1821, "Color of the editor selection."));
const editorSelectionForeground = registerColor('editor.selectionForeground', { light: null, dark: null, hcDark: '#000000', hcLight: Color.white }, localize(1822, "Color of the selected text for high contrast."));
const editorInactiveSelection = registerColor('editor.inactiveSelectionBackground', { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hcDark: transparent(editorSelectionBackground, 0.7), hcLight: transparent(editorSelectionBackground, 0.5) }, localize(1823, "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorSelectionHighlight = registerColor('editor.selectionHighlightBackground', { light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hcDark: null, hcLight: null }, localize(1824, 'Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.selectionHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1825, "Border color for regions with the same content as the selection."));
registerColor('editor.compositionBorder', { light: '#000000', dark: '#ffffff', hcLight: '#000000', hcDark: '#ffffff' }, localize(1826, "The border color for an IME composition."));
// ----- editor find
registerColor('editor.findMatchBackground', { light: '#A8AC94', dark: '#515C6A', hcDark: null, hcLight: null }, localize(1827, "Color of the current search match."));
const editorFindMatchForeground = registerColor('editor.findMatchForeground', null, localize(1828, "Text color of the current search match."));
const editorFindMatchHighlight = registerColor('editor.findMatchHighlightBackground', { light: '#EA5C0055', dark: '#EA5C0055', hcDark: null, hcLight: null }, localize(1829, "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), true);
const editorFindMatchHighlightForeground = registerColor('editor.findMatchHighlightForeground', null, localize(1830, "Foreground color of the other search matches."), true);
registerColor('editor.findRangeHighlightBackground', { dark: '#3a3d4166', light: '#b4b4b44d', hcDark: null, hcLight: null }, localize(1831, "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor('editor.findMatchBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1832, "Border color of the current search match."));
const editorFindMatchHighlightBorder = registerColor('editor.findMatchHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1833, "Border color of the other search matches."));
const editorFindRangeHighlightBorder = registerColor('editor.findRangeHighlightBorder', { dark: null, light: null, hcDark: transparent(activeContrastBorder, 0.4), hcLight: transparent(activeContrastBorder, 0.4) }, localize(1834, "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
// ----- editor hover
registerColor('editor.hoverHighlightBackground', { light: '#ADD6FF26', dark: '#264f7840', hcDark: '#ADD6FF26', hcLight: null }, localize(1835, 'Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorHoverBackground = registerColor('editorHoverWidget.background', editorWidgetBackground, localize(1836, 'Background color of the editor hover.'));
const editorHoverForeground = registerColor('editorHoverWidget.foreground', editorWidgetForeground, localize(1837, 'Foreground color of the editor hover.'));
const editorHoverBorder = registerColor('editorHoverWidget.border', editorWidgetBorder, localize(1838, 'Border color of the editor hover.'));
registerColor('editorHoverWidget.statusBarBackground', { dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, localize(1839, "Background color of the editor hover status bar."));
// ----- editor inlay hint
const editorInlayHintForeground = registerColor('editorInlayHint.foreground', { dark: '#969696', light: '#969696', hcDark: Color.white, hcLight: Color.black }, localize(1840, 'Foreground color of inline hints'));
const editorInlayHintBackground = registerColor('editorInlayHint.background', { dark: transparent(badgeBackground, .10), light: transparent(badgeBackground, .10), hcDark: transparent(Color.white, .10), hcLight: transparent(badgeBackground, .10) }, localize(1841, 'Background color of inline hints'));
const editorInlayHintTypeForeground = registerColor('editorInlayHint.typeForeground', editorInlayHintForeground, localize(1842, 'Foreground color of inline hints for types'));
const editorInlayHintTypeBackground = registerColor('editorInlayHint.typeBackground', editorInlayHintBackground, localize(1843, 'Background color of inline hints for types'));
const editorInlayHintParameterForeground = registerColor('editorInlayHint.parameterForeground', editorInlayHintForeground, localize(1844, 'Foreground color of inline hints for parameters'));
const editorInlayHintParameterBackground = registerColor('editorInlayHint.parameterBackground', editorInlayHintBackground, localize(1845, 'Background color of inline hints for parameters'));
// ----- editor lightbulb
const editorLightBulbForeground = registerColor('editorLightBulb.foreground', { dark: '#FFCC00', light: '#DDB100', hcDark: '#FFCC00', hcLight: '#007ACC' }, localize(1846, "The color used for the lightbulb actions icon."));
registerColor('editorLightBulbAutoFix.foreground', { dark: '#75BEFF', light: '#007ACC', hcDark: '#75BEFF', hcLight: '#007ACC' }, localize(1847, "The color used for the lightbulb auto fix actions icon."));
registerColor('editorLightBulbAi.foreground', editorLightBulbForeground, localize(1848, "The color used for the lightbulb AI icon."));
// ----- editor snippet
registerColor('editor.snippetTabstopHighlightBackground', { dark: new Color(new RGBA(124, 124, 124, 0.3)), light: new Color(new RGBA(10, 50, 100, 0.2)), hcDark: new Color(new RGBA(124, 124, 124, 0.3)), hcLight: new Color(new RGBA(10, 50, 100, 0.2)) }, localize(1849, "Highlight background color of a snippet tabstop."));
registerColor('editor.snippetTabstopHighlightBorder', null, localize(1850, "Highlight border color of a snippet tabstop."));
registerColor('editor.snippetFinalTabstopHighlightBackground', null, localize(1851, "Highlight background color of the final tabstop of a snippet."));
registerColor('editor.snippetFinalTabstopHighlightBorder', { dark: '#525252', light: new Color(new RGBA(10, 50, 100, 0.5)), hcDark: '#525252', hcLight: '#292929' }, localize(1852, "Highlight border color of the final tabstop of a snippet."));
// ----- diff editor
const defaultInsertColor = new Color(new RGBA(155, 185, 85, .2));
const defaultRemoveColor = new Color(new RGBA(255, 0, 0, .2));
const diffInserted = registerColor('diffEditor.insertedTextBackground', { dark: '#9ccc2c33', light: '#9ccc2c40', hcDark: null, hcLight: null }, localize(1853, 'Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffRemoved = registerColor('diffEditor.removedTextBackground', { dark: '#ff000033', light: '#ff000033', hcDark: null, hcLight: null }, localize(1854, 'Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffInsertedLine = registerColor('diffEditor.insertedLineBackground', { dark: defaultInsertColor, light: defaultInsertColor, hcDark: null, hcLight: null }, localize(1855, 'Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('diffEditor.removedLineBackground', { dark: defaultRemoveColor, light: defaultRemoveColor, hcDark: null, hcLight: null }, localize(1856, 'Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('diffEditorGutter.insertedLineBackground', null, localize(1857, 'Background color for the margin where lines got inserted.'));
registerColor('diffEditorGutter.removedLineBackground', null, localize(1858, 'Background color for the margin where lines got removed.'));
const diffOverviewRulerInserted = registerColor('diffEditorOverview.insertedForeground', null, localize(1859, 'Diff overview ruler foreground for inserted content.'));
const diffOverviewRulerRemoved = registerColor('diffEditorOverview.removedForeground', null, localize(1860, 'Diff overview ruler foreground for removed content.'));
registerColor('diffEditor.insertedTextBorder', { dark: null, light: null, hcDark: '#33ff2eff', hcLight: '#374E06' }, localize(1861, 'Outline color for the text that got inserted.'));
registerColor('diffEditor.removedTextBorder', { dark: null, light: null, hcDark: '#FF008F', hcLight: '#AD0707' }, localize(1862, 'Outline color for text that got removed.'));
registerColor('diffEditor.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1863, 'Border color between the two text editors.'));
registerColor('diffEditor.diagonalFill', { dark: '#cccccc33', light: '#22222233', hcDark: null, hcLight: null }, localize(1864, "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."));
registerColor('diffEditor.unchangedRegionBackground', 'sideBar.background', localize(1865, "The background color of unchanged blocks in the diff editor."));
registerColor('diffEditor.unchangedRegionForeground', 'foreground', localize(1866, "The foreground color of unchanged blocks in the diff editor."));
registerColor('diffEditor.unchangedCodeBackground', { dark: '#74747429', light: '#b8b8b829', hcDark: null, hcLight: null }, localize(1867, "The background color of unchanged code in the diff editor."));
// ----- widget
const widgetShadow = registerColor('widget.shadow', { dark: transparent(Color.black, .36), light: transparent(Color.black, .16), hcDark: null, hcLight: null }, localize(1868, 'Shadow color of widgets such as find/replace inside the editor.'));
const widgetBorder = registerColor('widget.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1869, 'Border color of widgets such as find/replace inside the editor.'));
// ----- toolbar
const toolbarHoverBackground = registerColor('toolbar.hoverBackground', { dark: '#5a5d5e50', light: '#b8b8b850', hcDark: null, hcLight: null }, localize(1870, "Toolbar background when hovering over actions using the mouse"));
registerColor('toolbar.hoverOutline', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1871, "Toolbar outline when hovering over actions using the mouse"));
registerColor('toolbar.activeBackground', { dark: lighten(toolbarHoverBackground, 0.1), light: darken(toolbarHoverBackground, 0.1), hcDark: null, hcLight: null }, localize(1872, "Toolbar background when holding the mouse over actions"));
// ----- breadcumbs
const breadcrumbsForeground = registerColor('breadcrumb.foreground', transparent(foreground, 0.8), localize(1873, "Color of focused breadcrumb items."));
const breadcrumbsBackground = registerColor('breadcrumb.background', editorBackground, localize(1874, "Background color of breadcrumb items."));
const breadcrumbsFocusForeground = registerColor('breadcrumb.focusForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize(1875, "Color of focused breadcrumb items."));
const breadcrumbsActiveSelectionForeground = registerColor('breadcrumb.activeSelectionForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, localize(1876, "Color of selected breadcrumb items."));
registerColor('breadcrumbPicker.background', editorWidgetBackground, localize(1877, "Background color of breadcrumb item picker."));
// ----- merge
const headerTransparency = 0.5;
const currentBaseColor = Color.fromHex('#40C8AE').transparent(headerTransparency);
const incomingBaseColor = Color.fromHex('#40A6FF').transparent(headerTransparency);
const commonBaseColor = Color.fromHex('#606060').transparent(0.4);
const contentTransparency = 0.4;
const rulerTransparency = 1;
const mergeCurrentHeaderBackground = registerColor('merge.currentHeaderBackground', { dark: currentBaseColor, light: currentBaseColor, hcDark: null, hcLight: null }, localize(1878, 'Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.currentContentBackground', transparent(mergeCurrentHeaderBackground, contentTransparency), localize(1879, 'Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeIncomingHeaderBackground = registerColor('merge.incomingHeaderBackground', { dark: incomingBaseColor, light: incomingBaseColor, hcDark: null, hcLight: null }, localize(1880, 'Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.incomingContentBackground', transparent(mergeIncomingHeaderBackground, contentTransparency), localize(1881, 'Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeCommonHeaderBackground = registerColor('merge.commonHeaderBackground', { dark: commonBaseColor, light: commonBaseColor, hcDark: null, hcLight: null }, localize(1882, 'Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('merge.commonContentBackground', transparent(mergeCommonHeaderBackground, contentTransparency), localize(1883, 'Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeBorder = registerColor('merge.border', { dark: null, light: null, hcDark: '#C3DF6F', hcLight: '#007ACC' }, localize(1884, 'Border color on headers and the splitter in inline merge-conflicts.'));
registerColor('editorOverviewRuler.currentContentForeground', { dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1885, 'Current overview ruler foreground for inline merge-conflicts.'));
registerColor('editorOverviewRuler.incomingContentForeground', { dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1886, 'Incoming overview ruler foreground for inline merge-conflicts.'));
registerColor('editorOverviewRuler.commonContentForeground', { dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, localize(1887, 'Common ancestor overview ruler foreground for inline merge-conflicts.'));
const overviewRulerFindMatchForeground = registerColor('editorOverviewRuler.findMatchForeground', { dark: '#d186167e', light: '#d186167e', hcDark: '#AB5A00', hcLight: '#AB5A00' }, localize(1888, 'Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerSelectionHighlightForeground = registerColor('editorOverviewRuler.selectionHighlightForeground', '#A0A0A0CC', localize(1889, 'Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
// ----- problems
const problemsErrorIconForeground = registerColor('problemsErrorIcon.foreground', editorErrorForeground, localize(1890, "The color used for the problems error icon."));
const problemsWarningIconForeground = registerColor('problemsWarningIcon.foreground', editorWarningForeground, localize(1891, "The color used for the problems warning icon."));
const problemsInfoIconForeground = registerColor('problemsInfoIcon.foreground', editorInfoForeground, localize(1892, "The color used for the problems info icon."));

export { breadcrumbsActiveSelectionForeground, breadcrumbsBackground, breadcrumbsFocusForeground, breadcrumbsForeground, defaultInsertColor, defaultRemoveColor, diffInserted, diffInsertedLine, diffOverviewRulerInserted, diffOverviewRulerRemoved, diffRemoved, editorActiveLinkForeground, editorBackground, editorErrorBorder, editorErrorForeground, editorFindMatchForeground, editorFindMatchHighlight, editorFindMatchHighlightBorder, editorFindMatchHighlightForeground, editorFindRangeHighlightBorder, editorForeground, editorHintForeground, editorHoverBackground, editorHoverBorder, editorHoverForeground, editorInactiveSelection, editorInfoBorder, editorInfoForeground, editorInlayHintBackground, editorInlayHintForeground, editorInlayHintParameterBackground, editorInlayHintParameterForeground, editorInlayHintTypeBackground, editorInlayHintTypeForeground, editorLightBulbForeground, editorSelectionBackground, editorSelectionForeground, editorSelectionHighlight, editorWarningBackground, editorWarningBorder, editorWarningForeground, editorWidgetBackground, editorWidgetBorder, editorWidgetForeground, mergeBorder, mergeCommonHeaderBackground, mergeCurrentHeaderBackground, mergeIncomingHeaderBackground, overviewRulerFindMatchForeground, overviewRulerSelectionHighlightForeground, problemsErrorIconForeground, problemsInfoIconForeground, problemsWarningIconForeground, toolbarHoverBackground, widgetBorder, widgetShadow };
