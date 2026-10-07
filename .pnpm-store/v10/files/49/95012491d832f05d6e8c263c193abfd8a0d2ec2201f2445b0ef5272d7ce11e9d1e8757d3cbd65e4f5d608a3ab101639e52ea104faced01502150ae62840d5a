import { Codicon } from '../../../../base/common/codicons.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { localize } from '../../../../nls.js';
import { registerColor, transparent } from '../../../../platform/theme/common/colorUtils.js';
import { iconForeground } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorSelectionBackground } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { registerIcon } from '../../../../platform/theme/common/iconRegistry.js';
import { themeColorFromId } from '../../../../platform/theme/common/themeService.js';
import { ThemeIcon } from '../../../../base/common/themables.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const foldBackground = registerColor('editor.foldBackground', { light: transparent(editorSelectionBackground, 0.3), dark: transparent(editorSelectionBackground, 0.3), hcDark: null, hcLight: null }, localize(1002, "Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations."), true);
registerColor('editor.foldPlaceholderForeground', { light: '#808080', dark: '#808080', hcDark: null, hcLight: null }, localize(1003, "Color of the collapsed text after the first line of a folded range."));
registerColor('editorGutter.foldingControlForeground', iconForeground, localize(1004, 'Color of the folding control in the editor gutter.'));
const foldingExpandedIcon = registerIcon('folding-expanded', Codicon.chevronDown, localize(1005, 'Icon for expanded ranges in the editor glyph margin.'));
const foldingCollapsedIcon = registerIcon('folding-collapsed', Codicon.chevronRight, localize(1006, 'Icon for collapsed ranges in the editor glyph margin.'));
const foldingManualCollapsedIcon = registerIcon('folding-manual-collapsed', foldingCollapsedIcon, localize(1007, 'Icon for manually collapsed ranges in the editor glyph margin.'));
const foldingManualExpandedIcon = registerIcon('folding-manual-expanded', foldingExpandedIcon, localize(1008, 'Icon for manually expanded ranges in the editor glyph margin.'));
const foldedBackgroundMinimap = { color: themeColorFromId(foldBackground), position: 1 /* MinimapPosition.Inline */ };
const collapsed = localize(1009, "Click to expand the range.");
const expanded = localize(1010, "Click to collapse the range.");
class FoldingDecorationProvider {
    static { this.COLLAPSED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-collapsed-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingCollapsedIcon),
    }); }
    static { this.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-collapsed-highlighted-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        className: 'folded-background',
        minimap: foldedBackgroundMinimap,
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingCollapsedIcon)
    }); }
    static { this.MANUALLY_COLLAPSED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-manually-collapsed-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingManualCollapsedIcon)
    }); }
    static { this.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-manually-collapsed-highlighted-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        className: 'folded-background',
        minimap: foldedBackgroundMinimap,
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingManualCollapsedIcon)
    }); }
    static { this.NO_CONTROLS_COLLAPSED_RANGE_DECORATION = ModelDecorationOptions.register({
        description: 'folding-no-controls-range-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
    }); }
    static { this.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION = ModelDecorationOptions.register({
        description: 'folding-no-controls-range-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        afterContentClassName: 'inline-folded',
        className: 'folded-background',
        minimap: foldedBackgroundMinimap,
        isWholeLine: true,
        linesDecorationsTooltip: collapsed,
    }); }
    static { this.EXPANDED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-expanded-visual-decoration',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        isWholeLine: true,
        firstLineDecorationClassName: 'alwaysShowFoldIcons ' + ThemeIcon.asClassName(foldingExpandedIcon),
        linesDecorationsTooltip: expanded,
    }); }
    static { this.EXPANDED_AUTO_HIDE_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-expanded-auto-hide-visual-decoration',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        isWholeLine: true,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingExpandedIcon),
        linesDecorationsTooltip: expanded,
    }); }
    static { this.MANUALLY_EXPANDED_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-manually-expanded-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        isWholeLine: true,
        firstLineDecorationClassName: 'alwaysShowFoldIcons ' + ThemeIcon.asClassName(foldingManualExpandedIcon),
        linesDecorationsTooltip: expanded,
    }); }
    static { this.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION = ModelDecorationOptions.register({
        description: 'folding-manually-expanded-auto-hide-visual-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        isWholeLine: true,
        firstLineDecorationClassName: ThemeIcon.asClassName(foldingManualExpandedIcon),
        linesDecorationsTooltip: expanded,
    }); }
    static { this.NO_CONTROLS_EXPANDED_RANGE_DECORATION = ModelDecorationOptions.register({
        description: 'folding-no-controls-range-decoration',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        isWholeLine: true
    }); }
    static { this.HIDDEN_RANGE_DECORATION = ModelDecorationOptions.register({
        description: 'folding-hidden-range-decoration',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
    }); }
    constructor(editor) {
        this.editor = editor;
        this.showFoldingControls = 'mouseover';
        this.showFoldingHighlights = true;
    }
    getDecorationOption(isCollapsed, isHidden, isManual) {
        if (isHidden) { // is inside another collapsed region
            return FoldingDecorationProvider.HIDDEN_RANGE_DECORATION;
        }
        if (this.showFoldingControls === 'never') {
            if (isCollapsed) {
                return this.showFoldingHighlights ? FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION : FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_RANGE_DECORATION;
            }
            return FoldingDecorationProvider.NO_CONTROLS_EXPANDED_RANGE_DECORATION;
        }
        if (isCollapsed) {
            return isManual ?
                (this.showFoldingHighlights ? FoldingDecorationProvider.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION : FoldingDecorationProvider.MANUALLY_COLLAPSED_VISUAL_DECORATION)
                : (this.showFoldingHighlights ? FoldingDecorationProvider.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION : FoldingDecorationProvider.COLLAPSED_VISUAL_DECORATION);
        }
        else if (this.showFoldingControls === 'mouseover') {
            return isManual ? FoldingDecorationProvider.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION : FoldingDecorationProvider.EXPANDED_AUTO_HIDE_VISUAL_DECORATION;
        }
        else {
            return isManual ? FoldingDecorationProvider.MANUALLY_EXPANDED_VISUAL_DECORATION : FoldingDecorationProvider.EXPANDED_VISUAL_DECORATION;
        }
    }
    changeDecorations(callback) {
        return this.editor.changeDecorations(callback);
    }
    removeDecorations(decorationIds) {
        this.editor.removeDecorations(decorationIds);
    }
}

export { FoldingDecorationProvider, foldingCollapsedIcon, foldingExpandedIcon, foldingManualCollapsedIcon, foldingManualExpandedIcon };
