import { Range } from '../../../common/core/range.js';
import { OverviewRulerLane } from '../../../common/model.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { overviewRulerFindMatchForeground } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import { minimapFindMatch } from '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { themeColorFromId } from '../../../../platform/theme/common/themeService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class FindDecorations {
    constructor(editor) {
        this._editor = editor;
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
        this._startPosition = this._editor.getPosition();
    }
    dispose() {
        this._editor.removeDecorations(this._allDecorations());
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
    }
    reset() {
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
    }
    getCount() {
        return this._decorations.length;
    }
    /** @deprecated use getFindScopes to support multiple selections */
    getFindScope() {
        if (this._findScopeDecorationIds[0]) {
            return this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]);
        }
        return null;
    }
    getFindScopes() {
        if (this._findScopeDecorationIds.length) {
            const scopes = this._findScopeDecorationIds.map(findScopeDecorationId => this._editor.getModel().getDecorationRange(findScopeDecorationId)).filter(element => !!element);
            if (scopes.length) {
                return scopes;
            }
        }
        return null;
    }
    getStartPosition() {
        return this._startPosition;
    }
    setStartPosition(newStartPosition) {
        this._startPosition = newStartPosition;
        this.setCurrentFindMatch(null);
    }
    _getDecorationIndex(decorationId) {
        const index = this._decorations.indexOf(decorationId);
        if (index >= 0) {
            return index + 1;
        }
        return 1;
    }
    getDecorationRangeAt(index) {
        const decorationId = index < this._decorations.length ? this._decorations[index] : null;
        if (decorationId) {
            return this._editor.getModel().getDecorationRange(decorationId);
        }
        return null;
    }
    getCurrentMatchesPosition(desiredRange) {
        const candidates = this._editor.getModel().getDecorationsInRange(desiredRange);
        for (const candidate of candidates) {
            const candidateOpts = candidate.options;
            if (candidateOpts === FindDecorations._FIND_MATCH_DECORATION || candidateOpts === FindDecorations._CURRENT_FIND_MATCH_DECORATION) {
                return this._getDecorationIndex(candidate.id);
            }
        }
        // We don't know the current match position, so returns zero to show '?' in find widget
        return 0;
    }
    setCurrentFindMatch(nextMatch) {
        let newCurrentDecorationId = null;
        let matchPosition = 0;
        if (nextMatch) {
            for (let i = 0, len = this._decorations.length; i < len; i++) {
                const range = this._editor.getModel().getDecorationRange(this._decorations[i]);
                if (nextMatch.equalsRange(range)) {
                    newCurrentDecorationId = this._decorations[i];
                    matchPosition = (i + 1);
                    break;
                }
            }
        }
        if (this._highlightedDecorationId !== null || newCurrentDecorationId !== null) {
            this._editor.changeDecorations((changeAccessor) => {
                if (this._highlightedDecorationId !== null) {
                    changeAccessor.changeDecorationOptions(this._highlightedDecorationId, FindDecorations._FIND_MATCH_DECORATION);
                    this._highlightedDecorationId = null;
                }
                if (newCurrentDecorationId !== null) {
                    this._highlightedDecorationId = newCurrentDecorationId;
                    changeAccessor.changeDecorationOptions(this._highlightedDecorationId, FindDecorations._CURRENT_FIND_MATCH_DECORATION);
                }
                if (this._rangeHighlightDecorationId !== null) {
                    changeAccessor.removeDecoration(this._rangeHighlightDecorationId);
                    this._rangeHighlightDecorationId = null;
                }
                if (newCurrentDecorationId !== null) {
                    let rng = this._editor.getModel().getDecorationRange(newCurrentDecorationId);
                    if (rng.startLineNumber !== rng.endLineNumber && rng.endColumn === 1) {
                        const lineBeforeEnd = rng.endLineNumber - 1;
                        const lineBeforeEndMaxColumn = this._editor.getModel().getLineMaxColumn(lineBeforeEnd);
                        rng = new Range(rng.startLineNumber, rng.startColumn, lineBeforeEnd, lineBeforeEndMaxColumn);
                    }
                    this._rangeHighlightDecorationId = changeAccessor.addDecoration(rng, FindDecorations._RANGE_HIGHLIGHT_DECORATION);
                }
            });
        }
        return matchPosition;
    }
    set(findMatches, findScopes) {
        this._editor.changeDecorations((accessor) => {
            let findMatchesOptions = FindDecorations._FIND_MATCH_DECORATION;
            const newOverviewRulerApproximateDecorations = [];
            if (findMatches.length > 1000) {
                // we go into a mode where the overview ruler gets "approximate" decorations
                // the reason is that the overview ruler paints all the decorations in the file and we don't want to cause freezes
                findMatchesOptions = FindDecorations._FIND_MATCH_NO_OVERVIEW_DECORATION;
                // approximate a distance in lines where matches should be merged
                const lineCount = this._editor.getModel().getLineCount();
                const height = this._editor.getLayoutInfo().height;
                const approxPixelsPerLine = height / lineCount;
                const mergeLinesDelta = Math.max(2, Math.ceil(3 / approxPixelsPerLine));
                // merge decorations as much as possible
                let prevStartLineNumber = findMatches[0].range.startLineNumber;
                let prevEndLineNumber = findMatches[0].range.endLineNumber;
                for (let i = 1, len = findMatches.length; i < len; i++) {
                    const range = findMatches[i].range;
                    if (prevEndLineNumber + mergeLinesDelta >= range.startLineNumber) {
                        if (range.endLineNumber > prevEndLineNumber) {
                            prevEndLineNumber = range.endLineNumber;
                        }
                    }
                    else {
                        newOverviewRulerApproximateDecorations.push({
                            range: new Range(prevStartLineNumber, 1, prevEndLineNumber, 1),
                            options: FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                        });
                        prevStartLineNumber = range.startLineNumber;
                        prevEndLineNumber = range.endLineNumber;
                    }
                }
                newOverviewRulerApproximateDecorations.push({
                    range: new Range(prevStartLineNumber, 1, prevEndLineNumber, 1),
                    options: FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                });
            }
            // Find matches
            const newFindMatchesDecorations = new Array(findMatches.length);
            for (let i = 0, len = findMatches.length; i < len; i++) {
                newFindMatchesDecorations[i] = {
                    range: findMatches[i].range,
                    options: findMatchesOptions
                };
            }
            this._decorations = accessor.deltaDecorations(this._decorations, newFindMatchesDecorations);
            // Overview ruler approximate decorations
            this._overviewRulerApproximateDecorations = accessor.deltaDecorations(this._overviewRulerApproximateDecorations, newOverviewRulerApproximateDecorations);
            // Range highlight
            if (this._rangeHighlightDecorationId) {
                accessor.removeDecoration(this._rangeHighlightDecorationId);
                this._rangeHighlightDecorationId = null;
            }
            // Find scope
            if (this._findScopeDecorationIds.length) {
                this._findScopeDecorationIds.forEach(findScopeDecorationId => accessor.removeDecoration(findScopeDecorationId));
                this._findScopeDecorationIds = [];
            }
            if (findScopes?.length) {
                this._findScopeDecorationIds = findScopes.map(findScope => accessor.addDecoration(findScope, FindDecorations._FIND_SCOPE_DECORATION));
            }
        });
    }
    matchBeforePosition(position) {
        if (this._decorations.length === 0) {
            return null;
        }
        for (let i = this._decorations.length - 1; i >= 0; i--) {
            const decorationId = this._decorations[i];
            const r = this._editor.getModel().getDecorationRange(decorationId);
            if (!r || r.endLineNumber > position.lineNumber) {
                continue;
            }
            if (r.endLineNumber < position.lineNumber) {
                return r;
            }
            if (r.endColumn > position.column) {
                continue;
            }
            return r;
        }
        return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
    }
    matchAfterPosition(position) {
        if (this._decorations.length === 0) {
            return null;
        }
        for (let i = 0, len = this._decorations.length; i < len; i++) {
            const decorationId = this._decorations[i];
            const r = this._editor.getModel().getDecorationRange(decorationId);
            if (!r || r.startLineNumber < position.lineNumber) {
                continue;
            }
            if (r.startLineNumber > position.lineNumber) {
                return r;
            }
            if (r.startColumn < position.column) {
                continue;
            }
            return r;
        }
        return this._editor.getModel().getDecorationRange(this._decorations[0]);
    }
    _allDecorations() {
        let result = [];
        result = result.concat(this._decorations);
        result = result.concat(this._overviewRulerApproximateDecorations);
        if (this._findScopeDecorationIds.length) {
            result.push(...this._findScopeDecorationIds);
        }
        if (this._rangeHighlightDecorationId) {
            result.push(this._rangeHighlightDecorationId);
        }
        return result;
    }
    static { this._CURRENT_FIND_MATCH_DECORATION = ModelDecorationOptions.register({
        description: 'current-find-match',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        zIndex: 13,
        className: 'currentFindMatch',
        inlineClassName: 'currentFindMatchInline',
        showIfCollapsed: true,
        overviewRuler: {
            color: themeColorFromId(overviewRulerFindMatchForeground),
            position: OverviewRulerLane.Center
        },
        minimap: {
            color: themeColorFromId(minimapFindMatch),
            position: 1 /* MinimapPosition.Inline */
        }
    }); }
    static { this._FIND_MATCH_DECORATION = ModelDecorationOptions.register({
        description: 'find-match',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        zIndex: 10,
        className: 'findMatch',
        inlineClassName: 'findMatchInline',
        showIfCollapsed: true,
        overviewRuler: {
            color: themeColorFromId(overviewRulerFindMatchForeground),
            position: OverviewRulerLane.Center
        },
        minimap: {
            color: themeColorFromId(minimapFindMatch),
            position: 1 /* MinimapPosition.Inline */
        }
    }); }
    static { this._FIND_MATCH_NO_OVERVIEW_DECORATION = ModelDecorationOptions.register({
        description: 'find-match-no-overview',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        className: 'findMatch',
        showIfCollapsed: true
    }); }
    static { this._FIND_MATCH_ONLY_OVERVIEW_DECORATION = ModelDecorationOptions.register({
        description: 'find-match-only-overview',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        overviewRuler: {
            color: themeColorFromId(overviewRulerFindMatchForeground),
            position: OverviewRulerLane.Center
        }
    }); }
    static { this._RANGE_HIGHLIGHT_DECORATION = ModelDecorationOptions.register({
        description: 'find-range-highlight',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        className: 'rangeHighlight',
        isWholeLine: true
    }); }
    static { this._FIND_SCOPE_DECORATION = ModelDecorationOptions.register({
        description: 'find-scope',
        className: 'findScope',
        isWholeLine: true
    }); }
}

export { FindDecorations };
