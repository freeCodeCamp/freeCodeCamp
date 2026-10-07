var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /* --------------------------------------------------------------------------------------------
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     * ------------------------------------------------------------------------------------------ */
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextDocument = void 0;
    var FullTextDocument = /** @class */ (function () {
        function FullTextDocument(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = undefined;
        }
        Object.defineProperty(FullTextDocument.prototype, "uri", {
            get: function () {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "languageId", {
            get: function () {
                return this._languageId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.prototype.getText = function (range) {
            if (range) {
                var start = this.offsetAt(range.start);
                var end = this.offsetAt(range.end);
                return this._content.substring(start, end);
            }
            return this._content;
        };
        FullTextDocument.prototype.update = function (changes, version) {
            for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
                var change = changes_1[_i];
                if (FullTextDocument.isIncremental(change)) {
                    // makes sure start is before end
                    var range = getWellformedRange(change.range);
                    // update content
                    var startOffset = this.offsetAt(range.start);
                    var endOffset = this.offsetAt(range.end);
                    this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
                    // update the offsets
                    var startLine = Math.max(range.start.line, 0);
                    var endLine = Math.max(range.end.line, 0);
                    var lineOffsets = this._lineOffsets;
                    var addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
                    if (endLine - startLine === addedLineOffsets.length) {
                        for (var i = 0, len = addedLineOffsets.length; i < len; i++) {
                            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
                        }
                    }
                    else {
                        if (addedLineOffsets.length < 10000) {
                            lineOffsets.splice.apply(lineOffsets, __spreadArray([startLine + 1, endLine - startLine], addedLineOffsets, false));
                        }
                        else { // avoid too many arguments for splice
                            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
                        }
                    }
                    var diff = change.text.length - (endOffset - startOffset);
                    if (diff !== 0) {
                        for (var i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
                            lineOffsets[i] = lineOffsets[i] + diff;
                        }
                    }
                }
                else if (FullTextDocument.isFull(change)) {
                    this._content = change.text;
                    this._lineOffsets = undefined;
                }
                else {
                    throw new Error('Unknown change event received');
                }
            }
            this._version = version;
        };
        FullTextDocument.prototype.getLineOffsets = function () {
            if (this._lineOffsets === undefined) {
                this._lineOffsets = computeLineOffsets(this._content, true);
            }
            return this._lineOffsets;
        };
        FullTextDocument.prototype.positionAt = function (offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
                return { line: 0, character: offset };
            }
            while (low < high) {
                var mid = Math.floor((low + high) / 2);
                if (lineOffsets[mid] > offset) {
                    high = mid;
                }
                else {
                    low = mid + 1;
                }
            }
            // low is the least x for which the line offset is larger than the current offset
            // or array.length if no line offset is larger than the current offset
            var line = low - 1;
            offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
            return { line: line, character: offset - lineOffsets[line] };
        };
        FullTextDocument.prototype.offsetAt = function (position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
                return this._content.length;
            }
            else if (position.line < 0) {
                return 0;
            }
            var lineOffset = lineOffsets[position.line];
            if (position.character <= 0) {
                return lineOffset;
            }
            var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
            var offset = Math.min(lineOffset + position.character, nextLineOffset);
            return this.ensureBeforeEOL(offset, lineOffset);
        };
        FullTextDocument.prototype.ensureBeforeEOL = function (offset, lineOffset) {
            while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
                offset--;
            }
            return offset;
        };
        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
            get: function () {
                return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.isIncremental = function (event) {
            var candidate = event;
            return candidate !== undefined && candidate !== null &&
                typeof candidate.text === 'string' && candidate.range !== undefined &&
                (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
        };
        FullTextDocument.isFull = function (event) {
            var candidate = event;
            return candidate !== undefined && candidate !== null &&
                typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
        };
        return FullTextDocument;
    }());
    var TextDocument;
    (function (TextDocument) {
        /**
         * Creates a new text document.
         *
         * @param uri The document's uri.
         * @param languageId  The document's language Id.
         * @param version The document's initial version number.
         * @param content The document's content.
         */
        function create(uri, languageId, version, content) {
            return new FullTextDocument(uri, languageId, version, content);
        }
        TextDocument.create = create;
        /**
         * Updates a TextDocument by modifying its content.
         *
         * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
         * @param changes the changes to apply to the document.
         * @param version the changes version for the document.
         * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
         *
         */
        function update(document, changes, version) {
            if (document instanceof FullTextDocument) {
                document.update(changes, version);
                return document;
            }
            else {
                throw new Error('TextDocument.update: document must be created by TextDocument.create');
            }
        }
        TextDocument.update = update;
        function applyEdits(document, edits) {
            var text = document.getText();
            var sortedEdits = mergeSort(edits.map(getWellformedEdit), function (a, b) {
                var diff = a.range.start.line - b.range.start.line;
                if (diff === 0) {
                    return a.range.start.character - b.range.start.character;
                }
                return diff;
            });
            var lastModifiedOffset = 0;
            var spans = [];
            for (var _i = 0, sortedEdits_1 = sortedEdits; _i < sortedEdits_1.length; _i++) {
                var e = sortedEdits_1[_i];
                var startOffset = document.offsetAt(e.range.start);
                if (startOffset < lastModifiedOffset) {
                    throw new Error('Overlapping edit');
                }
                else if (startOffset > lastModifiedOffset) {
                    spans.push(text.substring(lastModifiedOffset, startOffset));
                }
                if (e.newText.length) {
                    spans.push(e.newText);
                }
                lastModifiedOffset = document.offsetAt(e.range.end);
            }
            spans.push(text.substr(lastModifiedOffset));
            return spans.join('');
        }
        TextDocument.applyEdits = applyEdits;
    })(TextDocument || (exports.TextDocument = TextDocument = {}));
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
    function computeLineOffsets(text, isAtLineStart, textOffset) {
        if (textOffset === void 0) { textOffset = 0; }
        var result = isAtLineStart ? [textOffset] : [];
        for (var i = 0; i < text.length; i++) {
            var ch = text.charCodeAt(i);
            if (isEOL(ch)) {
                if (ch === 13 /* CharCode.CarriageReturn */ && i + 1 < text.length && text.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                    i++;
                }
                result.push(textOffset + i + 1);
            }
        }
        return result;
    }
    function isEOL(char) {
        return char === 13 /* CharCode.CarriageReturn */ || char === 10 /* CharCode.LineFeed */;
    }
    function getWellformedRange(range) {
        var start = range.start;
        var end = range.end;
        if (start.line > end.line || (start.line === end.line && start.character > end.character)) {
            return { start: end, end: start };
        }
        return range;
    }
    function getWellformedEdit(textEdit) {
        var range = getWellformedRange(textEdit.range);
        if (range !== textEdit.range) {
            return { newText: textEdit.newText, range: range };
        }
        return textEdit;
    }
});
