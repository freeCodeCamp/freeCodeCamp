import { ShowOrFocusHoverAction, ShowDefinitionPreviewHoverAction, HideContentHoverAction, ScrollUpHoverAction, ScrollDownHoverAction, ScrollLeftHoverAction, ScrollRightHoverAction, PageUpHoverAction, PageDownHoverAction, GoToTopHoverAction, GoToBottomHoverAction, IncreaseHoverVerbosityLevel, DecreaseHoverVerbosityLevel } from './hoverActions.js';
import { registerEditorContribution, registerEditorAction } from '../../../browser/editorExtensions.js';
import '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorHoverBorder } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { registerThemingParticipant } from '../../../../platform/theme/common/themeService.js';
import { HoverParticipantRegistry } from './hoverTypes.js';
import { MarkdownHoverParticipant } from './markdownHoverParticipant.js';
import { MarkerHoverParticipant } from './markerHoverParticipant.js';
import { ContentHoverController } from './contentHoverController.js';
import { GlyphHoverController } from './glyphHoverController.js';
import './hover.css';
import { AccessibleViewRegistry } from '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import { HoverAccessibleView, HoverAccessibilityHelp, ExtHoverAccessibleView } from './hoverAccessibleViews.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(ContentHoverController.ID, ContentHoverController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorContribution(GlyphHoverController.ID, GlyphHoverController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorAction(ShowOrFocusHoverAction);
registerEditorAction(ShowDefinitionPreviewHoverAction);
registerEditorAction(HideContentHoverAction);
registerEditorAction(ScrollUpHoverAction);
registerEditorAction(ScrollDownHoverAction);
registerEditorAction(ScrollLeftHoverAction);
registerEditorAction(ScrollRightHoverAction);
registerEditorAction(PageUpHoverAction);
registerEditorAction(PageDownHoverAction);
registerEditorAction(GoToTopHoverAction);
registerEditorAction(GoToBottomHoverAction);
registerEditorAction(IncreaseHoverVerbosityLevel);
registerEditorAction(DecreaseHoverVerbosityLevel);
HoverParticipantRegistry.register(MarkdownHoverParticipant);
HoverParticipantRegistry.register(MarkerHoverParticipant);
// theming
registerThemingParticipant((theme, collector) => {
    const hoverBorder = theme.getColor(editorHoverBorder);
    if (hoverBorder) {
        collector.addRule(`.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
        collector.addRule(`.monaco-editor .monaco-hover hr { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
        collector.addRule(`.monaco-editor .monaco-hover hr { border-bottom: 0px solid ${hoverBorder.transparent(0.5)}; }`);
    }
});
AccessibleViewRegistry.register(new HoverAccessibleView());
AccessibleViewRegistry.register(new HoverAccessibilityHelp());
AccessibleViewRegistry.register(new ExtHoverAccessibleView());
