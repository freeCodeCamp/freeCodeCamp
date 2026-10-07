import { Emitter } from '../../base/common/event.js';
import { toDisposable } from '../../base/common/lifecycle.js';
import { shouldSynchronizeModel } from './model.js';
import { score } from './languageSelector.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isExclusive(selector) {
    if (typeof selector === 'string') {
        return false;
    }
    else if (Array.isArray(selector)) {
        return selector.every(isExclusive);
    }
    else {
        return !!selector.exclusive; // TODO: microsoft/TypeScript#42768
    }
}
class MatchCandidate {
    constructor(uri, languageId, notebookUri, notebookType, recursive) {
        this.uri = uri;
        this.languageId = languageId;
        this.notebookUri = notebookUri;
        this.notebookType = notebookType;
        this.recursive = recursive;
    }
    equals(other) {
        return this.notebookType === other.notebookType
            && this.languageId === other.languageId
            && this.uri.toString() === other.uri.toString()
            && this.notebookUri?.toString() === other.notebookUri?.toString()
            && this.recursive === other.recursive;
    }
}
class LanguageFeatureRegistry {
    get onDidChange() { return this._onDidChange.event; }
    constructor(_notebookInfoResolver) {
        this._notebookInfoResolver = _notebookInfoResolver;
        this._clock = 0;
        this._entries = [];
        this._onDidChange = new Emitter();
    }
    register(selector, provider) {
        let entry = {
            selector,
            provider,
            _score: -1,
            _time: this._clock++
        };
        this._entries.push(entry);
        this._lastCandidate = undefined;
        this._onDidChange.fire(this._entries.length);
        return toDisposable(() => {
            if (entry) {
                const idx = this._entries.indexOf(entry);
                if (idx >= 0) {
                    this._entries.splice(idx, 1);
                    this._lastCandidate = undefined;
                    this._onDidChange.fire(this._entries.length);
                    entry = undefined;
                }
            }
        });
    }
    has(model) {
        return this.all(model).length > 0;
    }
    all(model) {
        if (!model) {
            return [];
        }
        this._updateScores(model, false);
        const result = [];
        // from registry
        for (const entry of this._entries) {
            if (entry._score > 0) {
                result.push(entry.provider);
            }
        }
        return result;
    }
    ordered(model, recursive = false) {
        const result = [];
        this._orderedForEach(model, recursive, entry => result.push(entry.provider));
        return result;
    }
    orderedGroups(model) {
        const result = [];
        let lastBucket;
        let lastBucketScore;
        this._orderedForEach(model, false, entry => {
            if (lastBucket && lastBucketScore === entry._score) {
                lastBucket.push(entry.provider);
            }
            else {
                lastBucketScore = entry._score;
                lastBucket = [entry.provider];
                result.push(lastBucket);
            }
        });
        return result;
    }
    _orderedForEach(model, recursive, callback) {
        this._updateScores(model, recursive);
        for (const entry of this._entries) {
            if (entry._score > 0) {
                callback(entry);
            }
        }
    }
    _updateScores(model, recursive) {
        const notebookInfo = this._notebookInfoResolver?.(model.uri);
        // use the uri (scheme, pattern) of the notebook info iff we have one
        // otherwise it's the model's/document's uri
        const candidate = notebookInfo
            ? new MatchCandidate(model.uri, model.getLanguageId(), notebookInfo.uri, notebookInfo.type, recursive)
            : new MatchCandidate(model.uri, model.getLanguageId(), undefined, undefined, recursive);
        if (this._lastCandidate?.equals(candidate)) {
            // nothing has changed
            return;
        }
        this._lastCandidate = candidate;
        for (const entry of this._entries) {
            entry._score = score(entry.selector, candidate.uri, candidate.languageId, shouldSynchronizeModel(model), candidate.notebookUri, candidate.notebookType);
            if (isExclusive(entry.selector) && entry._score > 0) {
                if (recursive) {
                    entry._score = 0;
                }
                else {
                    // support for one exclusive selector that overwrites
                    // any other selector
                    for (const entry of this._entries) {
                        entry._score = 0;
                    }
                    entry._score = 1000;
                    break;
                }
            }
        }
        // needs sorting
        this._entries.sort(LanguageFeatureRegistry._compareByScoreAndTime);
    }
    static _compareByScoreAndTime(a, b) {
        if (a._score < b._score) {
            return 1;
        }
        else if (a._score > b._score) {
            return -1;
        }
        // De-prioritize built-in providers
        if (isBuiltinSelector(a.selector) && !isBuiltinSelector(b.selector)) {
            return 1;
        }
        else if (!isBuiltinSelector(a.selector) && isBuiltinSelector(b.selector)) {
            return -1;
        }
        if (a._time < b._time) {
            return 1;
        }
        else if (a._time > b._time) {
            return -1;
        }
        else {
            return 0;
        }
    }
}
function isBuiltinSelector(selector) {
    if (typeof selector === 'string') {
        return false;
    }
    if (Array.isArray(selector)) {
        return selector.some(isBuiltinSelector);
    }
    return Boolean(selector.isBuiltin);
}

export { LanguageFeatureRegistry };
