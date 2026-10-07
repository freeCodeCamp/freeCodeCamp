import { localize } from '../../../nls.js';
import { Color, RGBA } from '../../../base/common/color.js';
import { registerColor } from '../../../platform/theme/common/colorUtils.js';
import { contrastBorder, activeContrastBorder } from '../../../platform/theme/common/colors/baseColors.js';
import '../../../platform/theme/common/colors/chartsColors.js';
import { editorFindMatchHighlight, editorBackground, editorWarningBorder, editorWarningForeground, editorInfoBorder, editorInfoForeground, editorWarningBackground } from '../../../platform/theme/common/colors/editorColors.js';
import '../../../platform/theme/common/colors/inputColors.js';
import '../../../platform/theme/common/colors/listColors.js';
import '../../../platform/theme/common/colors/menuColors.js';
import '../../../platform/theme/common/colors/minimapColors.js';
import '../../../platform/theme/common/colors/miscColors.js';
import '../../../platform/theme/common/colors/quickpickColors.js';
import '../../../platform/theme/common/colors/searchColors.js';
import { registerThemingParticipant } from '../../../platform/theme/common/themeService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Definition of the editor colors
 */
const editorLineHighlight = registerColor('editor.lineHighlightBackground', null, localize(610, 'Background color for the highlight of line at the cursor position.'));
const editorLineHighlightBorder = registerColor('editor.lineHighlightBorder', { dark: '#282828', light: '#eeeeee', hcDark: '#f38518', hcLight: contrastBorder }, localize(611, 'Background color for the border around the line at the cursor position.'));
registerColor('editor.rangeHighlightBackground', { dark: '#ffffff0b', light: '#fdff0033', hcDark: null, hcLight: null }, localize(612, 'Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.rangeHighlightBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(613, 'Background color of the border around highlighted ranges.'));
registerColor('editor.symbolHighlightBackground', { dark: editorFindMatchHighlight, light: editorFindMatchHighlight, hcDark: null, hcLight: null }, localize(614, 'Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.symbolHighlightBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(615, 'Background color of the border around highlighted symbols.'));
const editorCursorForeground = registerColor('editorCursor.foreground', { dark: '#AEAFAD', light: Color.black, hcDark: Color.white, hcLight: '#0F4A85' }, localize(616, 'Color of the editor cursor.'));
const editorCursorBackground = registerColor('editorCursor.background', null, localize(617, 'The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.'));
const editorMultiCursorPrimaryForeground = registerColor('editorMultiCursor.primary.foreground', editorCursorForeground, localize(618, 'Color of the primary editor cursor when multiple cursors are present.'));
const editorMultiCursorPrimaryBackground = registerColor('editorMultiCursor.primary.background', editorCursorBackground, localize(619, 'The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.'));
const editorMultiCursorSecondaryForeground = registerColor('editorMultiCursor.secondary.foreground', editorCursorForeground, localize(620, 'Color of secondary editor cursors when multiple cursors are present.'));
const editorMultiCursorSecondaryBackground = registerColor('editorMultiCursor.secondary.background', editorCursorBackground, localize(621, 'The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.'));
const editorWhitespaces = registerColor('editorWhitespace.foreground', { dark: '#e3e4e229', light: '#33333333', hcDark: '#e3e4e229', hcLight: '#CCCCCC' }, localize(622, 'Color of whitespace characters in the editor.'));
const editorLineNumbers = registerColor('editorLineNumber.foreground', { dark: '#858585', light: '#237893', hcDark: Color.white, hcLight: '#292929' }, localize(623, 'Color of editor line numbers.'));
const deprecatedEditorIndentGuides = registerColor('editorIndentGuide.background', editorWhitespaces, localize(624, 'Color of the editor indentation guides.'), false, localize(625, '\'editorIndentGuide.background\' is deprecated. Use \'editorIndentGuide.background1\' instead.'));
const deprecatedEditorActiveIndentGuides = registerColor('editorIndentGuide.activeBackground', editorWhitespaces, localize(626, 'Color of the active editor indentation guides.'), false, localize(627, '\'editorIndentGuide.activeBackground\' is deprecated. Use \'editorIndentGuide.activeBackground1\' instead.'));
const editorIndentGuide1 = registerColor('editorIndentGuide.background1', deprecatedEditorIndentGuides, localize(628, 'Color of the editor indentation guides (1).'));
const editorIndentGuide2 = registerColor('editorIndentGuide.background2', '#00000000', localize(629, 'Color of the editor indentation guides (2).'));
const editorIndentGuide3 = registerColor('editorIndentGuide.background3', '#00000000', localize(630, 'Color of the editor indentation guides (3).'));
const editorIndentGuide4 = registerColor('editorIndentGuide.background4', '#00000000', localize(631, 'Color of the editor indentation guides (4).'));
const editorIndentGuide5 = registerColor('editorIndentGuide.background5', '#00000000', localize(632, 'Color of the editor indentation guides (5).'));
const editorIndentGuide6 = registerColor('editorIndentGuide.background6', '#00000000', localize(633, 'Color of the editor indentation guides (6).'));
const editorActiveIndentGuide1 = registerColor('editorIndentGuide.activeBackground1', deprecatedEditorActiveIndentGuides, localize(634, 'Color of the active editor indentation guides (1).'));
const editorActiveIndentGuide2 = registerColor('editorIndentGuide.activeBackground2', '#00000000', localize(635, 'Color of the active editor indentation guides (2).'));
const editorActiveIndentGuide3 = registerColor('editorIndentGuide.activeBackground3', '#00000000', localize(636, 'Color of the active editor indentation guides (3).'));
const editorActiveIndentGuide4 = registerColor('editorIndentGuide.activeBackground4', '#00000000', localize(637, 'Color of the active editor indentation guides (4).'));
const editorActiveIndentGuide5 = registerColor('editorIndentGuide.activeBackground5', '#00000000', localize(638, 'Color of the active editor indentation guides (5).'));
const editorActiveIndentGuide6 = registerColor('editorIndentGuide.activeBackground6', '#00000000', localize(639, 'Color of the active editor indentation guides (6).'));
const deprecatedEditorActiveLineNumber = registerColor('editorActiveLineNumber.foreground', { dark: '#c6c6c6', light: '#0B216F', hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(640, 'Color of editor active line number'), false, localize(641, 'Id is deprecated. Use \'editorLineNumber.activeForeground\' instead.'));
registerColor('editorLineNumber.activeForeground', deprecatedEditorActiveLineNumber, localize(642, 'Color of editor active line number'));
const editorDimmedLineNumber = registerColor('editorLineNumber.dimmedForeground', null, localize(643, 'Color of the final editor line when editor.renderFinalNewline is set to dimmed.'));
const editorRuler = registerColor('editorRuler.foreground', { dark: '#5A5A5A', light: Color.lightgrey, hcDark: Color.white, hcLight: '#292929' }, localize(644, 'Color of the editor rulers.'));
registerColor('editorCodeLens.foreground', { dark: '#999999', light: '#919191', hcDark: '#999999', hcLight: '#292929' }, localize(645, 'Foreground color of editor CodeLens'));
registerColor('editorBracketMatch.background', { dark: '#0064001a', light: '#0064001a', hcDark: '#0064001a', hcLight: '#0000' }, localize(646, 'Background color behind matching brackets'));
registerColor('editorBracketMatch.border', { dark: '#888', light: '#B9B9B9', hcDark: contrastBorder, hcLight: contrastBorder }, localize(647, 'Color for matching brackets boxes'));
const editorOverviewRulerBorder = registerColor('editorOverviewRuler.border', { dark: '#7f7f7f4d', light: '#7f7f7f4d', hcDark: '#7f7f7f4d', hcLight: '#666666' }, localize(648, 'Color of the overview ruler border.'));
const editorOverviewRulerBackground = registerColor('editorOverviewRuler.background', null, localize(649, 'Background color of the editor overview ruler.'));
registerColor('editorGutter.background', editorBackground, localize(650, 'Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.'));
registerColor('editorUnnecessaryCode.border', { dark: null, light: null, hcDark: Color.fromHex('#fff').transparent(0.8), hcLight: contrastBorder }, localize(651, 'Border color of unnecessary (unused) source code in the editor.'));
const editorUnnecessaryCodeOpacity = registerColor('editorUnnecessaryCode.opacity', { dark: Color.fromHex('#000a'), light: Color.fromHex('#0007'), hcDark: null, hcLight: null }, localize(652, 'Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  \'editorUnnecessaryCode.border\' theme color to underline unnecessary code instead of fading it out.'));
registerColor('editorGhostText.border', { dark: null, light: null, hcDark: Color.fromHex('#fff').transparent(0.8), hcLight: Color.fromHex('#292929').transparent(0.8) }, localize(653, 'Border color of ghost text in the editor.'));
const ghostTextForeground = registerColor('editorGhostText.foreground', { dark: Color.fromHex('#ffffff56'), light: Color.fromHex('#0007'), hcDark: null, hcLight: null }, localize(654, 'Foreground color of the ghost text in the editor.'));
registerColor('editorGhostText.background', null, localize(655, 'Background color of the ghost text in the editor.'));
const rulerRangeDefault = new Color(new RGBA(0, 122, 204, 0.6));
const overviewRulerRangeHighlight = registerColor('editorOverviewRuler.rangeHighlightForeground', rulerRangeDefault, localize(656, 'Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerError = registerColor('editorOverviewRuler.errorForeground', { dark: new Color(new RGBA(255, 18, 18, 0.7)), light: new Color(new RGBA(255, 18, 18, 0.7)), hcDark: new Color(new RGBA(255, 50, 50, 1)), hcLight: '#B5200D' }, localize(657, 'Overview ruler marker color for errors.'));
const overviewRulerWarning = registerColor('editorOverviewRuler.warningForeground', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningBorder, hcLight: editorWarningBorder }, localize(658, 'Overview ruler marker color for warnings.'));
const overviewRulerInfo = registerColor('editorOverviewRuler.infoForeground', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoBorder, hcLight: editorInfoBorder }, localize(659, 'Overview ruler marker color for infos.'));
const editorBracketHighlightingForeground1 = registerColor('editorBracketHighlight.foreground1', { dark: '#FFD700', light: '#0431FAFF', hcDark: '#FFD700', hcLight: '#0431FAFF' }, localize(660, 'Foreground color of brackets (1). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground2 = registerColor('editorBracketHighlight.foreground2', { dark: '#DA70D6', light: '#319331FF', hcDark: '#DA70D6', hcLight: '#319331FF' }, localize(661, 'Foreground color of brackets (2). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground3 = registerColor('editorBracketHighlight.foreground3', { dark: '#179FFF', light: '#7B3814FF', hcDark: '#87CEFA', hcLight: '#7B3814FF' }, localize(662, 'Foreground color of brackets (3). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground4 = registerColor('editorBracketHighlight.foreground4', '#00000000', localize(663, 'Foreground color of brackets (4). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground5 = registerColor('editorBracketHighlight.foreground5', '#00000000', localize(664, 'Foreground color of brackets (5). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground6 = registerColor('editorBracketHighlight.foreground6', '#00000000', localize(665, 'Foreground color of brackets (6). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingUnexpectedBracketForeground = registerColor('editorBracketHighlight.unexpectedBracket.foreground', { dark: new Color(new RGBA(255, 18, 18, 0.8)), light: new Color(new RGBA(255, 18, 18, 0.8)), hcDark: new Color(new RGBA(255, 50, 50, 1)), hcLight: '#B5200D' }, localize(666, 'Foreground color of unexpected brackets.'));
const editorBracketPairGuideBackground1 = registerColor('editorBracketPairGuide.background1', '#00000000', localize(667, 'Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground2 = registerColor('editorBracketPairGuide.background2', '#00000000', localize(668, 'Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground3 = registerColor('editorBracketPairGuide.background3', '#00000000', localize(669, 'Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground4 = registerColor('editorBracketPairGuide.background4', '#00000000', localize(670, 'Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground5 = registerColor('editorBracketPairGuide.background5', '#00000000', localize(671, 'Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground6 = registerColor('editorBracketPairGuide.background6', '#00000000', localize(672, 'Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground1 = registerColor('editorBracketPairGuide.activeBackground1', '#00000000', localize(673, 'Background color of active bracket pair guides (1). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground2 = registerColor('editorBracketPairGuide.activeBackground2', '#00000000', localize(674, 'Background color of active bracket pair guides (2). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground3 = registerColor('editorBracketPairGuide.activeBackground3', '#00000000', localize(675, 'Background color of active bracket pair guides (3). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground4 = registerColor('editorBracketPairGuide.activeBackground4', '#00000000', localize(676, 'Background color of active bracket pair guides (4). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground5 = registerColor('editorBracketPairGuide.activeBackground5', '#00000000', localize(677, 'Background color of active bracket pair guides (5). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground6 = registerColor('editorBracketPairGuide.activeBackground6', '#00000000', localize(678, 'Background color of active bracket pair guides (6). Requires enabling bracket pair guides.'));
registerColor('editorUnicodeHighlight.border', editorWarningForeground, localize(679, 'Border color used to highlight unicode characters.'));
registerColor('editorUnicodeHighlight.background', editorWarningBackground, localize(680, 'Background color used to highlight unicode characters.'));
// contains all color rules that used to defined in editor/browser/widget/editor.css
registerThemingParticipant((theme, collector) => {
    const background = theme.getColor(editorBackground);
    const lineHighlight = theme.getColor(editorLineHighlight);
    const imeBackground = (lineHighlight && !lineHighlight.isTransparent() ? lineHighlight : background);
    if (imeBackground) {
        collector.addRule(`.monaco-editor .inputarea.ime-input { background-color: ${imeBackground}; }`);
    }
});

export { deprecatedEditorActiveIndentGuides, deprecatedEditorIndentGuides, editorActiveIndentGuide1, editorActiveIndentGuide2, editorActiveIndentGuide3, editorActiveIndentGuide4, editorActiveIndentGuide5, editorActiveIndentGuide6, editorBracketHighlightingForeground1, editorBracketHighlightingForeground2, editorBracketHighlightingForeground3, editorBracketHighlightingForeground4, editorBracketHighlightingForeground5, editorBracketHighlightingForeground6, editorBracketHighlightingUnexpectedBracketForeground, editorBracketPairGuideActiveBackground1, editorBracketPairGuideActiveBackground2, editorBracketPairGuideActiveBackground3, editorBracketPairGuideActiveBackground4, editorBracketPairGuideActiveBackground5, editorBracketPairGuideActiveBackground6, editorBracketPairGuideBackground1, editorBracketPairGuideBackground2, editorBracketPairGuideBackground3, editorBracketPairGuideBackground4, editorBracketPairGuideBackground5, editorBracketPairGuideBackground6, editorCursorBackground, editorCursorForeground, editorDimmedLineNumber, editorIndentGuide1, editorIndentGuide2, editorIndentGuide3, editorIndentGuide4, editorIndentGuide5, editorIndentGuide6, editorLineHighlight, editorLineHighlightBorder, editorLineNumbers, editorMultiCursorPrimaryBackground, editorMultiCursorPrimaryForeground, editorMultiCursorSecondaryBackground, editorMultiCursorSecondaryForeground, editorOverviewRulerBackground, editorOverviewRulerBorder, editorRuler, editorUnnecessaryCodeOpacity, editorWhitespaces, ghostTextForeground, overviewRulerError, overviewRulerInfo, overviewRulerRangeHighlight, overviewRulerWarning };
