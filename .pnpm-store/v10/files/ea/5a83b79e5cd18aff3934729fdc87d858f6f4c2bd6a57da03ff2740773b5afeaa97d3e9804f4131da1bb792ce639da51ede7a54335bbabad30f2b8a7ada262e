import '../htmlLanguageTypes.js';
import { Range } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function findLinkedEditingRanges(document, position, htmlDocument) {
    const offset = document.offsetAt(position);
    const node = htmlDocument.findNodeAt(offset);
    const tagLength = node.tag ? node.tag.length : 0;
    if (!node.endTagStart) {
        return null;
    }
    if (
    // Within open tag, compute close tag
    (node.start + '<'.length <= offset && offset <= node.start + '<'.length + tagLength) ||
        // Within closing tag, compute open tag
        node.endTagStart + '</'.length <= offset && offset <= node.endTagStart + '</'.length + tagLength) {
        return [
            Range.create(document.positionAt(node.start + '<'.length), document.positionAt(node.start + '<'.length + tagLength)),
            Range.create(document.positionAt(node.endTagStart + '</'.length), document.positionAt(node.endTagStart + '</'.length + tagLength))
        ];
    }
    return null;
}

export { findLinkedEditingRanges };
