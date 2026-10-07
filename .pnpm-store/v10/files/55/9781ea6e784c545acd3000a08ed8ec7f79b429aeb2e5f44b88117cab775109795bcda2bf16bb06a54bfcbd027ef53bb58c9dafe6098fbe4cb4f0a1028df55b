import './highlightDecorations.css';
import { OverviewRulerLane } from '../../../common/model.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { DocumentHighlightKind } from '../../../common/languages.js';
import { localize } from '../../../../nls.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import { activeContrastBorder } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { overviewRulerSelectionHighlightForeground, editorSelectionHighlight } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import { minimapSelectionOccurrenceHighlight } from '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { themeColorFromId, registerThemingParticipant } from '../../../../platform/theme/common/themeService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const wordHighlightBackground = registerColor('editor.wordHighlightBackground', { dark: '#575757B8', light: '#57575740', hcDark: null, hcLight: null }, localize(1563, 'Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.wordHighlightStrongBackground', { dark: '#004972B8', light: '#0e639c40', hcDark: null, hcLight: null }, localize(1564, 'Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations.'), true);
registerColor('editor.wordHighlightTextBackground', wordHighlightBackground, localize(1565, 'Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.'), true);
const wordHighlightBorder = registerColor('editor.wordHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1566, 'Border color of a symbol during read-access, like reading a variable.'));
registerColor('editor.wordHighlightStrongBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1567, 'Border color of a symbol during write-access, like writing to a variable.'));
registerColor('editor.wordHighlightTextBorder', wordHighlightBorder, localize(1568, "Border color of a textual occurrence for a symbol."));
const overviewRulerWordHighlightForeground = registerColor('editorOverviewRuler.wordHighlightForeground', '#A0A0A0CC', localize(1569, 'Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerWordHighlightStrongForeground = registerColor('editorOverviewRuler.wordHighlightStrongForeground', '#C0A0C0CC', localize(1570, 'Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerWordHighlightTextForeground = registerColor('editorOverviewRuler.wordHighlightTextForeground', overviewRulerSelectionHighlightForeground, localize(1571, 'Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.'), true);
const _WRITE_OPTIONS = ModelDecorationOptions.register({
    description: 'word-highlight-strong',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'wordHighlightStrong',
    overviewRuler: {
        color: themeColorFromId(overviewRulerWordHighlightStrongForeground),
        position: OverviewRulerLane.Center
    },
    minimap: {
        color: themeColorFromId(minimapSelectionOccurrenceHighlight),
        position: 1 /* MinimapPosition.Inline */
    },
});
const _TEXT_OPTIONS = ModelDecorationOptions.register({
    description: 'word-highlight-text',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'wordHighlightText',
    overviewRuler: {
        color: themeColorFromId(overviewRulerWordHighlightTextForeground),
        position: OverviewRulerLane.Center
    },
    minimap: {
        color: themeColorFromId(minimapSelectionOccurrenceHighlight),
        position: 1 /* MinimapPosition.Inline */
    },
});
const _SELECTION_HIGHLIGHT_OPTIONS = ModelDecorationOptions.register({
    description: 'selection-highlight-overview',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'selectionHighlight',
    overviewRuler: {
        color: themeColorFromId(overviewRulerSelectionHighlightForeground),
        position: OverviewRulerLane.Center
    },
    minimap: {
        color: themeColorFromId(minimapSelectionOccurrenceHighlight),
        position: 1 /* MinimapPosition.Inline */
    },
});
const _SELECTION_HIGHLIGHT_OPTIONS_NO_OVERVIEW = ModelDecorationOptions.register({
    description: 'selection-highlight',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'selectionHighlight',
});
const _REGULAR_OPTIONS = ModelDecorationOptions.register({
    description: 'word-highlight',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'wordHighlight',
    overviewRuler: {
        color: themeColorFromId(overviewRulerWordHighlightForeground),
        position: OverviewRulerLane.Center
    },
    minimap: {
        color: themeColorFromId(minimapSelectionOccurrenceHighlight),
        position: 1 /* MinimapPosition.Inline */
    },
});
function getHighlightDecorationOptions(kind) {
    if (kind === DocumentHighlightKind.Write) {
        return _WRITE_OPTIONS;
    }
    else if (kind === DocumentHighlightKind.Text) {
        return _TEXT_OPTIONS;
    }
    else {
        return _REGULAR_OPTIONS;
    }
}
function getSelectionHighlightDecorationOptions(hasSemanticHighlights) {
    // Show in overviewRuler only if model has no semantic highlighting
    return (hasSemanticHighlights ? _SELECTION_HIGHLIGHT_OPTIONS_NO_OVERVIEW : _SELECTION_HIGHLIGHT_OPTIONS);
}
registerThemingParticipant((theme, collector) => {
    const selectionHighlight = theme.getColor(editorSelectionHighlight);
    if (selectionHighlight) {
        collector.addRule(`.monaco-editor .selectionHighlight { background-color: ${selectionHighlight.transparent(0.5)}; }`);
    }
});

export { getHighlightDecorationOptions, getSelectionHighlightDecorationOptions };
