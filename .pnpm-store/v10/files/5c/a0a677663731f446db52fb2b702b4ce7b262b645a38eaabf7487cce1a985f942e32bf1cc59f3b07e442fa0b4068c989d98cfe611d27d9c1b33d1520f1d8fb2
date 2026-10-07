import { stringDiff } from '../../../base/common/diff/diff.js';
import { Range } from '../core/range.js';
import { computeLinks } from '../languages/linkComputer.js';
import { BasicInplaceReplace } from '../languages/supports/inplaceReplaceSupport.js';
import { createMonacoBaseAPI } from './editorBaseApi.js';
import { StopWatch } from '../../../base/common/stopwatch.js';
import { UnicodeTextModelHighlighter } from './unicodeTextModelHighlighter.js';
import { linesDiffComputers } from '../diff/linesDiffComputers.js';
import { computeDefaultDocumentColors } from '../languages/defaultDocumentColorsComputer.js';
import { findSectionHeaders } from './findSectionHeaders.js';
import { WorkerTextModelSyncServer } from './textModelSync/textModelSync.impl.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * @internal
 */
class EditorWorker {
    constructor(_foreignModule = null) {
        this._foreignModule = _foreignModule;
        this._requestHandlerBrand = undefined;
        this._workerTextModelSyncServer = new WorkerTextModelSyncServer();
    }
    dispose() {
    }
    async $ping() {
        return 'pong';
    }
    _getModel(uri) {
        return this._workerTextModelSyncServer.getModel(uri);
    }
    getModels() {
        return this._workerTextModelSyncServer.getModels();
    }
    $acceptNewModel(data) {
        this._workerTextModelSyncServer.$acceptNewModel(data);
    }
    $acceptModelChanged(uri, e) {
        this._workerTextModelSyncServer.$acceptModelChanged(uri, e);
    }
    $acceptRemovedModel(uri) {
        this._workerTextModelSyncServer.$acceptRemovedModel(uri);
    }
    async $computeUnicodeHighlights(url, options, range) {
        const model = this._getModel(url);
        if (!model) {
            return { ranges: [], hasMore: false, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
        }
        return UnicodeTextModelHighlighter.computeUnicodeHighlights(model, options, range);
    }
    async $findSectionHeaders(url, options) {
        const model = this._getModel(url);
        if (!model) {
            return [];
        }
        return findSectionHeaders(model, options);
    }
    // ---- BEGIN diff --------------------------------------------------------------------------
    async $computeDiff(originalUrl, modifiedUrl, options, algorithm) {
        const original = this._getModel(originalUrl);
        const modified = this._getModel(modifiedUrl);
        if (!original || !modified) {
            return null;
        }
        const result = EditorWorker.computeDiff(original, modified, options, algorithm);
        return result;
    }
    static computeDiff(originalTextModel, modifiedTextModel, options, algorithm) {
        const diffAlgorithm = algorithm === 'advanced' ? linesDiffComputers.getDefault() : linesDiffComputers.getLegacy();
        const originalLines = originalTextModel.getLinesContent();
        const modifiedLines = modifiedTextModel.getLinesContent();
        const result = diffAlgorithm.computeDiff(originalLines, modifiedLines, options);
        const identical = (result.changes.length > 0 ? false : this._modelsAreIdentical(originalTextModel, modifiedTextModel));
        function getLineChanges(changes) {
            return changes.map(m => ([m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, m.innerChanges?.map(m => [
                    m.originalRange.startLineNumber,
                    m.originalRange.startColumn,
                    m.originalRange.endLineNumber,
                    m.originalRange.endColumn,
                    m.modifiedRange.startLineNumber,
                    m.modifiedRange.startColumn,
                    m.modifiedRange.endLineNumber,
                    m.modifiedRange.endColumn,
                ])]));
        }
        return {
            identical,
            quitEarly: result.hitTimeout,
            changes: getLineChanges(result.changes),
            moves: result.moves.map(m => ([
                m.lineRangeMapping.original.startLineNumber,
                m.lineRangeMapping.original.endLineNumberExclusive,
                m.lineRangeMapping.modified.startLineNumber,
                m.lineRangeMapping.modified.endLineNumberExclusive,
                getLineChanges(m.changes)
            ])),
        };
    }
    static _modelsAreIdentical(original, modified) {
        const originalLineCount = original.getLineCount();
        const modifiedLineCount = modified.getLineCount();
        if (originalLineCount !== modifiedLineCount) {
            return false;
        }
        for (let line = 1; line <= originalLineCount; line++) {
            const originalLine = original.getLineContent(line);
            const modifiedLine = modified.getLineContent(line);
            if (originalLine !== modifiedLine) {
                return false;
            }
        }
        return true;
    }
    // ---- END diff --------------------------------------------------------------------------
    // ---- BEGIN minimal edits ---------------------------------------------------------------
    static { this._diffLimit = 100000; }
    async $computeMoreMinimalEdits(modelUrl, edits, pretty) {
        const model = this._getModel(modelUrl);
        if (!model) {
            return edits;
        }
        const result = [];
        let lastEol = undefined;
        edits = edits.slice(0).sort((a, b) => {
            if (a.range && b.range) {
                return Range.compareRangesUsingStarts(a.range, b.range);
            }
            // eol only changes should go to the end
            const aRng = a.range ? 0 : 1;
            const bRng = b.range ? 0 : 1;
            return aRng - bRng;
        });
        // merge adjacent edits
        let writeIndex = 0;
        for (let readIndex = 1; readIndex < edits.length; readIndex++) {
            if (Range.getEndPosition(edits[writeIndex].range).equals(Range.getStartPosition(edits[readIndex].range))) {
                edits[writeIndex].range = Range.fromPositions(Range.getStartPosition(edits[writeIndex].range), Range.getEndPosition(edits[readIndex].range));
                edits[writeIndex].text += edits[readIndex].text;
            }
            else {
                writeIndex++;
                edits[writeIndex] = edits[readIndex];
            }
        }
        edits.length = writeIndex + 1;
        for (let { range, text, eol } of edits) {
            if (typeof eol === 'number') {
                lastEol = eol;
            }
            if (Range.isEmpty(range) && !text) {
                // empty change
                continue;
            }
            const original = model.getValueInRange(range);
            text = text.replace(/\r\n|\n|\r/g, model.eol);
            if (original === text) {
                // noop
                continue;
            }
            // make sure diff won't take too long
            if (Math.max(text.length, original.length) > EditorWorker._diffLimit) {
                result.push({ range, text });
                continue;
            }
            // compute diff between original and edit.text
            const changes = stringDiff(original, text, pretty);
            const editOffset = model.offsetAt(Range.lift(range).getStartPosition());
            for (const change of changes) {
                const start = model.positionAt(editOffset + change.originalStart);
                const end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                const newEdit = {
                    text: text.substr(change.modifiedStart, change.modifiedLength),
                    range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                };
                if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                    result.push(newEdit);
                }
            }
        }
        if (typeof lastEol === 'number') {
            result.push({ eol: lastEol, text: '', range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
        }
        return result;
    }
    // ---- END minimal edits ---------------------------------------------------------------
    async $computeLinks(modelUrl) {
        const model = this._getModel(modelUrl);
        if (!model) {
            return null;
        }
        return computeLinks(model);
    }
    // --- BEGIN default document colors -----------------------------------------------------------
    async $computeDefaultDocumentColors(modelUrl) {
        const model = this._getModel(modelUrl);
        if (!model) {
            return null;
        }
        return computeDefaultDocumentColors(model);
    }
    // ---- BEGIN suggest --------------------------------------------------------------------------
    static { this._suggestionsLimit = 10000; }
    async $textualSuggest(modelUrls, leadingWord, wordDef, wordDefFlags) {
        const sw = new StopWatch();
        const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        const seen = new Set();
        outer: for (const url of modelUrls) {
            const model = this._getModel(url);
            if (!model) {
                continue;
            }
            for (const word of model.words(wordDefRegExp)) {
                if (word === leadingWord || !isNaN(Number(word))) {
                    continue;
                }
                seen.add(word);
                if (seen.size > EditorWorker._suggestionsLimit) {
                    break outer;
                }
            }
        }
        return { words: Array.from(seen), duration: sw.elapsed() };
    }
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    async $computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
        const model = this._getModel(modelUrl);
        if (!model) {
            return Object.create(null);
        }
        const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        const result = Object.create(null);
        for (let line = range.startLineNumber; line < range.endLineNumber; line++) {
            const words = model.getLineWords(line, wordDefRegExp);
            for (const word of words) {
                if (!isNaN(Number(word.word))) {
                    continue;
                }
                let array = result[word.word];
                if (!array) {
                    array = [];
                    result[word.word] = array;
                }
                array.push({
                    startLineNumber: line,
                    startColumn: word.startColumn,
                    endLineNumber: line,
                    endColumn: word.endColumn
                });
            }
        }
        return result;
    }
    //#endregion
    async $navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
        const model = this._getModel(modelUrl);
        if (!model) {
            return null;
        }
        const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        if (range.startColumn === range.endColumn) {
            range = {
                startLineNumber: range.startLineNumber,
                startColumn: range.startColumn,
                endLineNumber: range.endLineNumber,
                endColumn: range.endColumn + 1
            };
        }
        const selectionText = model.getValueInRange(range);
        const wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
        if (!wordRange) {
            return null;
        }
        const word = model.getValueInRange(wordRange);
        const result = BasicInplaceReplace.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
        return result;
    }
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    // foreign method request
    $fmr(method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    globalThis.monaco = createMonacoBaseAPI();
}

export { EditorWorker };
