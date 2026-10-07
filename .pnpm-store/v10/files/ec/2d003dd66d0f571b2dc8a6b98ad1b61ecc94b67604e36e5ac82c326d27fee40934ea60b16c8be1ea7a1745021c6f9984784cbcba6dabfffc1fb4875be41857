import { Emitter } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { Range } from '../../../common/core/range.js';
import { MATCHES_LIMIT } from './findModel.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function effectiveOptionValue(override, value) {
    if (override === 1 /* FindOptionOverride.True */) {
        return true;
    }
    if (override === 2 /* FindOptionOverride.False */) {
        return false;
    }
    return value;
}
class FindReplaceState extends Disposable {
    get searchString() { return this._searchString; }
    get replaceString() { return this._replaceString; }
    get isRevealed() { return this._isRevealed; }
    get isReplaceRevealed() { return this._isReplaceRevealed; }
    get isRegex() { return effectiveOptionValue(this._isRegexOverride, this._isRegex); }
    get wholeWord() { return effectiveOptionValue(this._wholeWordOverride, this._wholeWord); }
    get matchCase() { return effectiveOptionValue(this._matchCaseOverride, this._matchCase); }
    get preserveCase() { return effectiveOptionValue(this._preserveCaseOverride, this._preserveCase); }
    get actualIsRegex() { return this._isRegex; }
    get actualWholeWord() { return this._wholeWord; }
    get actualMatchCase() { return this._matchCase; }
    get actualPreserveCase() { return this._preserveCase; }
    get searchScope() { return this._searchScope; }
    get matchesPosition() { return this._matchesPosition; }
    get matchesCount() { return this._matchesCount; }
    get currentMatch() { return this._currentMatch; }
    constructor() {
        super();
        this._onFindReplaceStateChange = this._register(new Emitter());
        this.onFindReplaceStateChange = this._onFindReplaceStateChange.event;
        this._searchString = '';
        this._replaceString = '';
        this._isRevealed = false;
        this._isReplaceRevealed = false;
        this._isRegex = false;
        this._isRegexOverride = 0 /* FindOptionOverride.NotSet */;
        this._wholeWord = false;
        this._wholeWordOverride = 0 /* FindOptionOverride.NotSet */;
        this._matchCase = false;
        this._matchCaseOverride = 0 /* FindOptionOverride.NotSet */;
        this._preserveCase = false;
        this._preserveCaseOverride = 0 /* FindOptionOverride.NotSet */;
        this._searchScope = null;
        this._matchesPosition = 0;
        this._matchesCount = 0;
        this._currentMatch = null;
        this._loop = true;
        this._isSearching = false;
        this._filters = null;
    }
    changeMatchInfo(matchesPosition, matchesCount, currentMatch) {
        const changeEvent = {
            moveCursor: false,
            updateHistory: false,
            searchString: false,
            replaceString: false,
            isRevealed: false,
            isReplaceRevealed: false,
            isRegex: false,
            wholeWord: false,
            matchCase: false,
            preserveCase: false,
            searchScope: false,
            matchesPosition: false,
            matchesCount: false,
            currentMatch: false,
            loop: false,
            isSearching: false,
            filters: false
        };
        let somethingChanged = false;
        if (matchesCount === 0) {
            matchesPosition = 0;
        }
        if (matchesPosition > matchesCount) {
            matchesPosition = matchesCount;
        }
        if (this._matchesPosition !== matchesPosition) {
            this._matchesPosition = matchesPosition;
            changeEvent.matchesPosition = true;
            somethingChanged = true;
        }
        if (this._matchesCount !== matchesCount) {
            this._matchesCount = matchesCount;
            changeEvent.matchesCount = true;
            somethingChanged = true;
        }
        if (typeof currentMatch !== 'undefined') {
            if (!Range.equalsRange(this._currentMatch, currentMatch)) {
                this._currentMatch = currentMatch;
                changeEvent.currentMatch = true;
                somethingChanged = true;
            }
        }
        if (somethingChanged) {
            this._onFindReplaceStateChange.fire(changeEvent);
        }
    }
    change(newState, moveCursor, updateHistory = true) {
        const changeEvent = {
            moveCursor: moveCursor,
            updateHistory: updateHistory,
            searchString: false,
            replaceString: false,
            isRevealed: false,
            isReplaceRevealed: false,
            isRegex: false,
            wholeWord: false,
            matchCase: false,
            preserveCase: false,
            searchScope: false,
            matchesPosition: false,
            matchesCount: false,
            currentMatch: false,
            loop: false,
            isSearching: false,
            filters: false
        };
        let somethingChanged = false;
        const oldEffectiveIsRegex = this.isRegex;
        const oldEffectiveWholeWords = this.wholeWord;
        const oldEffectiveMatchCase = this.matchCase;
        const oldEffectivePreserveCase = this.preserveCase;
        if (typeof newState.searchString !== 'undefined') {
            if (this._searchString !== newState.searchString) {
                this._searchString = newState.searchString;
                changeEvent.searchString = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.replaceString !== 'undefined') {
            if (this._replaceString !== newState.replaceString) {
                this._replaceString = newState.replaceString;
                changeEvent.replaceString = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isRevealed !== 'undefined') {
            if (this._isRevealed !== newState.isRevealed) {
                this._isRevealed = newState.isRevealed;
                changeEvent.isRevealed = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isReplaceRevealed !== 'undefined') {
            if (this._isReplaceRevealed !== newState.isReplaceRevealed) {
                this._isReplaceRevealed = newState.isReplaceRevealed;
                changeEvent.isReplaceRevealed = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isRegex !== 'undefined') {
            this._isRegex = newState.isRegex;
        }
        if (typeof newState.wholeWord !== 'undefined') {
            this._wholeWord = newState.wholeWord;
        }
        if (typeof newState.matchCase !== 'undefined') {
            this._matchCase = newState.matchCase;
        }
        if (typeof newState.preserveCase !== 'undefined') {
            this._preserveCase = newState.preserveCase;
        }
        if (typeof newState.searchScope !== 'undefined') {
            if (!newState.searchScope?.every((newSearchScope) => {
                return this._searchScope?.some(existingSearchScope => {
                    return !Range.equalsRange(existingSearchScope, newSearchScope);
                });
            })) {
                this._searchScope = newState.searchScope;
                changeEvent.searchScope = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.loop !== 'undefined') {
            if (this._loop !== newState.loop) {
                this._loop = newState.loop;
                changeEvent.loop = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isSearching !== 'undefined') {
            if (this._isSearching !== newState.isSearching) {
                this._isSearching = newState.isSearching;
                changeEvent.isSearching = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.filters !== 'undefined') {
            if (this._filters) {
                this._filters.update(newState.filters);
            }
            else {
                this._filters = newState.filters;
            }
            changeEvent.filters = true;
            somethingChanged = true;
        }
        // Overrides get set when they explicitly come in and get reset anytime something else changes
        this._isRegexOverride = (typeof newState.isRegexOverride !== 'undefined' ? newState.isRegexOverride : 0 /* FindOptionOverride.NotSet */);
        this._wholeWordOverride = (typeof newState.wholeWordOverride !== 'undefined' ? newState.wholeWordOverride : 0 /* FindOptionOverride.NotSet */);
        this._matchCaseOverride = (typeof newState.matchCaseOverride !== 'undefined' ? newState.matchCaseOverride : 0 /* FindOptionOverride.NotSet */);
        this._preserveCaseOverride = (typeof newState.preserveCaseOverride !== 'undefined' ? newState.preserveCaseOverride : 0 /* FindOptionOverride.NotSet */);
        if (oldEffectiveIsRegex !== this.isRegex) {
            somethingChanged = true;
            changeEvent.isRegex = true;
        }
        if (oldEffectiveWholeWords !== this.wholeWord) {
            somethingChanged = true;
            changeEvent.wholeWord = true;
        }
        if (oldEffectiveMatchCase !== this.matchCase) {
            somethingChanged = true;
            changeEvent.matchCase = true;
        }
        if (oldEffectivePreserveCase !== this.preserveCase) {
            somethingChanged = true;
            changeEvent.preserveCase = true;
        }
        if (somethingChanged) {
            this._onFindReplaceStateChange.fire(changeEvent);
        }
    }
    canNavigateBack() {
        return this.canNavigateInLoop() || (this.matchesPosition !== 1);
    }
    canNavigateForward() {
        return this.canNavigateInLoop() || (this.matchesPosition < this.matchesCount);
    }
    canNavigateInLoop() {
        return this._loop || (this.matchesCount >= MATCHES_LIMIT);
    }
}

export { FindReplaceState };
