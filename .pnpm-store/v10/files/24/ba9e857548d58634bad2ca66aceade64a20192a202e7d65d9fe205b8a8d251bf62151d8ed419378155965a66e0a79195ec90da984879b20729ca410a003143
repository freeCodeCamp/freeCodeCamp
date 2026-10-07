import { TokenType, Scanner } from '../parser/cssScanner.js';
import { InterpolationFunction, SCSSScanner } from '../parser/scssScanner.js';
import { LESSScanner } from '../parser/lessScanner.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getFoldingRanges(document, context) {
    const ranges = computeFoldingRanges(document);
    return limitFoldingRanges(ranges, context);
}
function computeFoldingRanges(document) {
    function getStartLine(t) {
        return document.positionAt(t.offset).line;
    }
    function getEndLine(t) {
        return document.positionAt(t.offset + t.len).line;
    }
    function getScanner() {
        switch (document.languageId) {
            case 'scss':
                return new SCSSScanner();
            case 'less':
                return new LESSScanner();
            default:
                return new Scanner();
        }
    }
    function tokenToRange(t, kind) {
        const startLine = getStartLine(t);
        const endLine = getEndLine(t);
        if (startLine !== endLine) {
            return {
                startLine,
                endLine,
                kind
            };
        }
        else {
            return null;
        }
    }
    const ranges = [];
    const delimiterStack = [];
    const scanner = getScanner();
    scanner.ignoreComment = false;
    scanner.setSource(document.getText());
    let token = scanner.scan();
    let prevToken = null;
    while (token.type !== TokenType.EOF) {
        switch (token.type) {
            case TokenType.CurlyL:
            case InterpolationFunction:
                {
                    delimiterStack.push({ line: getStartLine(token), type: 'brace', isStart: true });
                    break;
                }
            case TokenType.CurlyR: {
                if (delimiterStack.length !== 0) {
                    const prevDelimiter = popPrevStartDelimiterOfType(delimiterStack, 'brace');
                    if (!prevDelimiter) {
                        break;
                    }
                    let endLine = getEndLine(token);
                    if (prevDelimiter.type === 'brace') {
                        /**
                         * Other than the case when curly brace is not on a new line by itself, for example
                         * .foo {
                         *   color: red; }
                         * Use endLine minus one to show ending curly brace
                         */
                        if (prevToken && getEndLine(prevToken) !== endLine) {
                            endLine--;
                        }
                        if (prevDelimiter.line !== endLine) {
                            ranges.push({
                                startLine: prevDelimiter.line,
                                endLine,
                                kind: undefined
                            });
                        }
                    }
                }
                break;
            }
            /**
             * In CSS, there is no single line comment prefixed with //
             * All comments are marked as `Comment`
             */
            case TokenType.Comment: {
                const commentRegionMarkerToDelimiter = (marker) => {
                    if (marker === '#region') {
                        return { line: getStartLine(token), type: 'comment', isStart: true };
                    }
                    else {
                        return { line: getEndLine(token), type: 'comment', isStart: false };
                    }
                };
                const getCurrDelimiter = (token) => {
                    const matches = token.text.match(/^\s*\/\*\s*(#region|#endregion)\b\s*(.*?)\s*\*\//);
                    if (matches) {
                        return commentRegionMarkerToDelimiter(matches[1]);
                    }
                    else if (document.languageId === 'scss' || document.languageId === 'less') {
                        const matches = token.text.match(/^\s*\/\/\s*(#region|#endregion)\b\s*(.*?)\s*/);
                        if (matches) {
                            return commentRegionMarkerToDelimiter(matches[1]);
                        }
                    }
                    return null;
                };
                const currDelimiter = getCurrDelimiter(token);
                // /* */ comment region folding
                // All #region and #endregion cases
                if (currDelimiter) {
                    if (currDelimiter.isStart) {
                        delimiterStack.push(currDelimiter);
                    }
                    else {
                        const prevDelimiter = popPrevStartDelimiterOfType(delimiterStack, 'comment');
                        if (!prevDelimiter) {
                            break;
                        }
                        if (prevDelimiter.type === 'comment') {
                            if (prevDelimiter.line !== currDelimiter.line) {
                                ranges.push({
                                    startLine: prevDelimiter.line,
                                    endLine: currDelimiter.line,
                                    kind: 'region'
                                });
                            }
                        }
                    }
                }
                // Multiline comment case
                else {
                    const range = tokenToRange(token, 'comment');
                    if (range) {
                        ranges.push(range);
                    }
                }
                break;
            }
        }
        prevToken = token;
        token = scanner.scan();
    }
    return ranges;
}
function popPrevStartDelimiterOfType(stack, type) {
    if (stack.length === 0) {
        return null;
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].type === type && stack[i].isStart) {
            return stack.splice(i, 1)[0];
        }
    }
    return null;
}
/**
 * - Sort regions
 * - Remove invalid regions (intersections)
 * - If limit exceeds, only return `rangeLimit` amount of ranges
 */
function limitFoldingRanges(ranges, context) {
    const maxRanges = context && context.rangeLimit || Number.MAX_VALUE;
    const sortedRanges = ranges.sort((r1, r2) => {
        let diff = r1.startLine - r2.startLine;
        if (diff === 0) {
            diff = r1.endLine - r2.endLine;
        }
        return diff;
    });
    const validRanges = [];
    let prevEndLine = -1;
    sortedRanges.forEach(r => {
        if (!(r.startLine < prevEndLine && prevEndLine < r.endLine)) {
            validRanges.push(r);
            prevEndLine = r.endLine;
        }
    });
    if (validRanges.length < maxRanges) {
        return validRanges;
    }
    else {
        return validRanges.slice(0, maxRanges);
    }
}

export { getFoldingRanges };
