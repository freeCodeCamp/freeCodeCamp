import { firstNonWhitespaceIndex } from '../../../../base/common/strings.js';
import { CursorColumns } from '../cursorColumns.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function _normalizeIndentationFromWhitespace(str, indentSize, insertSpaces) {
    let spacesCnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '\t') {
            spacesCnt = CursorColumns.nextIndentTabStop(spacesCnt, indentSize);
        }
        else {
            spacesCnt++;
        }
    }
    let result = '';
    if (!insertSpaces) {
        const tabsCnt = Math.floor(spacesCnt / indentSize);
        spacesCnt = spacesCnt % indentSize;
        for (let i = 0; i < tabsCnt; i++) {
            result += '\t';
        }
    }
    for (let i = 0; i < spacesCnt; i++) {
        result += ' ';
    }
    return result;
}
function normalizeIndentation(str, indentSize, insertSpaces) {
    let firstNonWhitespaceIndex$1 = firstNonWhitespaceIndex(str);
    if (firstNonWhitespaceIndex$1 === -1) {
        firstNonWhitespaceIndex$1 = str.length;
    }
    return _normalizeIndentationFromWhitespace(str.substring(0, firstNonWhitespaceIndex$1), indentSize, insertSpaces) + str.substring(firstNonWhitespaceIndex$1);
}

export { normalizeIndentation };
