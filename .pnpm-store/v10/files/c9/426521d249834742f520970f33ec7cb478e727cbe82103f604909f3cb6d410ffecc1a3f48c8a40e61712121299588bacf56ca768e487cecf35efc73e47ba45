import { createScanner } from '../parser/htmlScanner.js';
import { TokenType } from '../htmlLanguageTypes.js';
import { SelectionRange, Range } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HTMLSelectionRange {
    constructor(htmlParser) {
        this.htmlParser = htmlParser;
    }
    getSelectionRanges(document, positions) {
        const htmlDocument = this.htmlParser.parseDocument(document);
        return positions.map(p => this.getSelectionRange(p, document, htmlDocument));
    }
    getSelectionRange(position, document, htmlDocument) {
        const applicableRanges = this.getApplicableRanges(document, position, htmlDocument);
        let prev = undefined;
        let current = undefined;
        for (let index = applicableRanges.length - 1; index >= 0; index--) {
            const range = applicableRanges[index];
            if (!prev || range[0] !== prev[0] || range[1] !== prev[1]) {
                current = SelectionRange.create(Range.create(document.positionAt(applicableRanges[index][0]), document.positionAt(applicableRanges[index][1])), current);
            }
            prev = range;
        }
        if (!current) {
            current = SelectionRange.create(Range.create(position, position));
        }
        return current;
    }
    getApplicableRanges(document, position, htmlDoc) {
        const currOffset = document.offsetAt(position);
        const currNode = htmlDoc.findNodeAt(currOffset);
        let result = this.getAllParentTagRanges(currNode);
        // Self-closing or void elements
        if (currNode.startTagEnd && !currNode.endTagStart) {
            // THe rare case of unmatching tag pairs like <div></div1>
            if (currNode.startTagEnd !== currNode.end) {
                return [[currNode.start, currNode.end]];
            }
            const closeRange = Range.create(document.positionAt(currNode.startTagEnd - 2), document.positionAt(currNode.startTagEnd));
            const closeText = document.getText(closeRange);
            // Self-closing element
            if (closeText === '/>') {
                result.unshift([currNode.start + 1, currNode.startTagEnd - 2]);
            }
            // Void element
            else {
                result.unshift([currNode.start + 1, currNode.startTagEnd - 1]);
            }
            const attributeLevelRanges = this.getAttributeLevelRanges(document, currNode, currOffset);
            result = attributeLevelRanges.concat(result);
            return result;
        }
        if (!currNode.startTagEnd || !currNode.endTagStart) {
            return result;
        }
        /**
         * For html like
         * `<div class="foo">bar</div>`
         */
        result.unshift([currNode.start, currNode.end]);
        /**
         * Cursor inside `<div class="foo">`
         */
        if (currNode.start < currOffset && currOffset < currNode.startTagEnd) {
            result.unshift([currNode.start + 1, currNode.startTagEnd - 1]);
            const attributeLevelRanges = this.getAttributeLevelRanges(document, currNode, currOffset);
            result = attributeLevelRanges.concat(result);
            return result;
        }
        /**
         * Cursor inside `bar`
         */
        else if (currNode.startTagEnd <= currOffset && currOffset <= currNode.endTagStart) {
            result.unshift([currNode.startTagEnd, currNode.endTagStart]);
            return result;
        }
        /**
         * Cursor inside `</div>`
         */
        else {
            // `div` inside `</div>`
            if (currOffset >= currNode.endTagStart + 2) {
                result.unshift([currNode.endTagStart + 2, currNode.end - 1]);
            }
            return result;
        }
    }
    getAllParentTagRanges(initialNode) {
        let currNode = initialNode;
        const result = [];
        while (currNode.parent) {
            currNode = currNode.parent;
            this.getNodeRanges(currNode).forEach(r => result.push(r));
        }
        return result;
    }
    getNodeRanges(n) {
        if (n.startTagEnd && n.endTagStart && n.startTagEnd < n.endTagStart) {
            return [
                [n.startTagEnd, n.endTagStart],
                [n.start, n.end]
            ];
        }
        return [
            [n.start, n.end]
        ];
    }
    ;
    getAttributeLevelRanges(document, currNode, currOffset) {
        const currNodeRange = Range.create(document.positionAt(currNode.start), document.positionAt(currNode.end));
        const currNodeText = document.getText(currNodeRange);
        const relativeOffset = currOffset - currNode.start;
        /**
         * Tag level semantic selection
         */
        const scanner = createScanner(currNodeText);
        let token = scanner.scan();
        /**
         * For text like
         * <div class="foo">bar</div>
         */
        const positionOffset = currNode.start;
        const result = [];
        let isInsideAttribute = false;
        let attrStart = -1;
        while (token !== TokenType.EOS) {
            switch (token) {
                case TokenType.AttributeName: {
                    if (relativeOffset < scanner.getTokenOffset()) {
                        isInsideAttribute = false;
                        break;
                    }
                    if (relativeOffset <= scanner.getTokenEnd()) {
                        // `class`
                        result.unshift([scanner.getTokenOffset(), scanner.getTokenEnd()]);
                    }
                    isInsideAttribute = true;
                    attrStart = scanner.getTokenOffset();
                    break;
                }
                case TokenType.AttributeValue: {
                    if (!isInsideAttribute) {
                        break;
                    }
                    const valueText = scanner.getTokenText();
                    if (relativeOffset < scanner.getTokenOffset()) {
                        // `class="foo"`
                        result.push([attrStart, scanner.getTokenEnd()]);
                        break;
                    }
                    if (relativeOffset >= scanner.getTokenOffset() && relativeOffset <= scanner.getTokenEnd()) {
                        // `"foo"`
                        result.unshift([scanner.getTokenOffset(), scanner.getTokenEnd()]);
                        // `foo`
                        if ((valueText[0] === `"` && valueText[valueText.length - 1] === `"`) || (valueText[0] === `'` && valueText[valueText.length - 1] === `'`)) {
                            if (relativeOffset >= scanner.getTokenOffset() + 1 && relativeOffset <= scanner.getTokenEnd() - 1) {
                                result.unshift([scanner.getTokenOffset() + 1, scanner.getTokenEnd() - 1]);
                            }
                        }
                        // `class="foo"`
                        result.push([attrStart, scanner.getTokenEnd()]);
                    }
                    break;
                }
            }
            token = scanner.scan();
        }
        return result.map(pair => {
            return [pair[0] + positionOffset, pair[1] + positionOffset];
        });
    }
}

export { HTMLSelectionRange };
