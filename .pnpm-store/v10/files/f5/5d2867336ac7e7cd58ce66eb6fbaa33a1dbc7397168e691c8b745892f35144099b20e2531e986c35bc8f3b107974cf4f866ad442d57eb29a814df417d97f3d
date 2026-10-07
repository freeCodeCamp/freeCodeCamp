import { createScanner } from '../../../../jsonc-parser/lib/esm/main.js';
import '../jsonLanguageTypes.js';
import { FoldingRangeKind, Position } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getFoldingRanges(document, context) {
    const ranges = [];
    const nestingLevels = [];
    const stack = [];
    let prevStart = -1;
    const scanner = createScanner(document.getText(), false);
    let token = scanner.scan();
    function addRange(range) {
        ranges.push(range);
        nestingLevels.push(stack.length);
    }
    while (token !== 17 /* SyntaxKind.EOF */) {
        switch (token) {
            case 1 /* SyntaxKind.OpenBraceToken */:
            case 3 /* SyntaxKind.OpenBracketToken */: {
                const startLine = document.positionAt(scanner.getTokenOffset()).line;
                const range = { startLine, endLine: startLine, kind: token === 1 /* SyntaxKind.OpenBraceToken */ ? 'object' : 'array' };
                stack.push(range);
                break;
            }
            case 2 /* SyntaxKind.CloseBraceToken */:
            case 4 /* SyntaxKind.CloseBracketToken */: {
                const kind = token === 2 /* SyntaxKind.CloseBraceToken */ ? 'object' : 'array';
                if (stack.length > 0 && stack[stack.length - 1].kind === kind) {
                    const range = stack.pop();
                    const line = document.positionAt(scanner.getTokenOffset()).line;
                    if (range && line > range.startLine + 1 && prevStart !== range.startLine) {
                        range.endLine = line - 1;
                        addRange(range);
                        prevStart = range.startLine;
                    }
                }
                break;
            }
            case 13 /* SyntaxKind.BlockCommentTrivia */: {
                const startLine = document.positionAt(scanner.getTokenOffset()).line;
                const endLine = document.positionAt(scanner.getTokenOffset() + scanner.getTokenLength()).line;
                if (scanner.getTokenError() === 1 /* ScanError.UnexpectedEndOfComment */ && startLine + 1 < document.lineCount) {
                    scanner.setPosition(document.offsetAt(Position.create(startLine + 1, 0)));
                }
                else {
                    if (startLine < endLine) {
                        addRange({ startLine, endLine, kind: FoldingRangeKind.Comment });
                        prevStart = startLine;
                    }
                }
                break;
            }
            case 12 /* SyntaxKind.LineCommentTrivia */: {
                const text = document.getText().substr(scanner.getTokenOffset(), scanner.getTokenLength());
                const m = text.match(/^\/\/\s*#(region\b)|(endregion\b)/);
                if (m) {
                    const line = document.positionAt(scanner.getTokenOffset()).line;
                    if (m[1]) { // start pattern match
                        const range = { startLine: line, endLine: line, kind: FoldingRangeKind.Region };
                        stack.push(range);
                    }
                    else {
                        let i = stack.length - 1;
                        while (i >= 0 && stack[i].kind !== FoldingRangeKind.Region) {
                            i--;
                        }
                        if (i >= 0) {
                            const range = stack[i];
                            stack.length = i;
                            if (line > range.startLine && prevStart !== range.startLine) {
                                range.endLine = line;
                                addRange(range);
                                prevStart = range.startLine;
                            }
                        }
                    }
                }
                break;
            }
        }
        token = scanner.scan();
    }
    const rangeLimit = context && context.rangeLimit;
    if (typeof rangeLimit !== 'number' || ranges.length <= rangeLimit) {
        return ranges;
    }
    if (context && context.onRangeLimitExceeded) {
        context.onRangeLimitExceeded(document.uri);
    }
    const counts = [];
    for (let level of nestingLevels) {
        if (level < 30) {
            counts[level] = (counts[level] || 0) + 1;
        }
    }
    let entries = 0;
    let maxLevel = 0;
    for (let i = 0; i < counts.length; i++) {
        const n = counts[i];
        if (n) {
            if (n + entries > rangeLimit) {
                maxLevel = i;
                break;
            }
            entries += n;
        }
    }
    const result = [];
    for (let i = 0; i < ranges.length; i++) {
        const level = nestingLevels[i];
        if (typeof level === 'number') {
            if (level < maxLevel || (level === maxLevel && entries++ < rangeLimit)) {
                result.push(ranges[i]);
            }
        }
    }
    return result;
}

export { getFoldingRanges };
