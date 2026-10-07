(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../cssLanguageTypes", "../parser/cssNodes"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSelectionRanges = getSelectionRanges;
    const cssLanguageTypes_1 = require("../cssLanguageTypes");
    const cssNodes_1 = require("../parser/cssNodes");
    function getSelectionRanges(document, positions, stylesheet) {
        function getSelectionRange(position) {
            const applicableRanges = getApplicableRanges(position);
            let current = undefined;
            for (let index = applicableRanges.length - 1; index >= 0; index--) {
                current = cssLanguageTypes_1.SelectionRange.create(cssLanguageTypes_1.Range.create(document.positionAt(applicableRanges[index][0]), document.positionAt(applicableRanges[index][1])), current);
            }
            if (!current) {
                current = cssLanguageTypes_1.SelectionRange.create(cssLanguageTypes_1.Range.create(position, position));
            }
            return current;
        }
        return positions.map(getSelectionRange);
        function getApplicableRanges(position) {
            const offset = document.offsetAt(position);
            let currNode = stylesheet.findChildAtOffset(offset, true);
            if (!currNode) {
                return [];
            }
            const result = [];
            while (currNode) {
                if (currNode.parent &&
                    currNode.offset === currNode.parent.offset &&
                    currNode.end === currNode.parent.end) {
                    currNode = currNode.parent;
                    continue;
                }
                // The `{ }` part of `.a { }`
                if (currNode.type === cssNodes_1.NodeType.Declarations) {
                    if (offset > currNode.offset && offset < currNode.end) {
                        // Return `{ }` and the range inside `{` and `}`
                        result.push([currNode.offset + 1, currNode.end - 1]);
                    }
                }
                result.push([currNode.offset, currNode.end]);
                currNode = currNode.parent;
            }
            return result;
        }
    }
});
