import { createDecorator } from '../../instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const IOpenerService = createDecorator('openerService');
/**
 * Encodes selection into the `URI`.
 *
 * IMPORTANT: you MUST use `extractSelection` to separate the selection
 * again from the original `URI` before passing the `URI` into any
 * component that is not aware of selections.
 */
function withSelection(uri, selection) {
    return uri.with({ fragment: `${selection.startLineNumber},${selection.startColumn}${selection.endLineNumber ? `-${selection.endLineNumber}${selection.endColumn ? `,${selection.endColumn}` : ''}` : ''}` });
}
/**
 * file:///some/file.js#73
 * file:///some/file.js#L73
 * file:///some/file.js#73,84
 * file:///some/file.js#L73,84
 * file:///some/file.js#73-83
 * file:///some/file.js#L73-L83
 * file:///some/file.js#73,84-83,52
 * file:///some/file.js#L73,84-L83,52
 */
function extractSelection(uri) {
    let selection = undefined;
    const match = /^L?(\d+)(?:,(\d+))?(-L?(\d+)(?:,(\d+))?)?/.exec(uri.fragment);
    if (match) {
        selection = {
            startLineNumber: parseInt(match[1]),
            startColumn: match[2] ? parseInt(match[2]) : 1,
            endLineNumber: match[4] ? parseInt(match[4]) : undefined,
            endColumn: match[4] ? (match[5] ? parseInt(match[5]) : 1) : undefined
        };
        uri = uri.with({ fragment: '' });
    }
    return { selection, uri };
}

export { IOpenerService, extractSelection, withSelection };
