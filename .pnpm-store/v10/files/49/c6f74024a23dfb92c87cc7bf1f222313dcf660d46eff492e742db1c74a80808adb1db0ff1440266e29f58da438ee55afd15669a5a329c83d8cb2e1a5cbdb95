import { ResourceTextEdit } from '../../../browser/services/bulkEditService.js';
import { SnippetParser } from '../../snippet/browser/snippetParser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Given a {@link DropOrPasteEdit} and set of ranges, creates a {@link WorkspaceEdit} that applies the insert text from
 * the {@link DropOrPasteEdit} at each range plus any additional edits.
 */
function createCombinedWorkspaceEdit(uri, ranges, edit) {
    // If the edit insert text is empty, skip applying at each range
    if (typeof edit.insertText === 'string' ? edit.insertText === '' : edit.insertText.snippet === '') {
        return {
            edits: edit.additionalEdit?.edits ?? []
        };
    }
    return {
        edits: [
            ...ranges.map(range => new ResourceTextEdit(uri, { range, text: typeof edit.insertText === 'string' ? SnippetParser.escape(edit.insertText) + '$0' : edit.insertText.snippet, insertAsSnippet: true })),
            ...(edit.additionalEdit?.edits ?? [])
        ]
    };
}
function sortEditsByYieldTo(edits) {
    function yieldsTo(yTo, other) {
        if ('mimeType' in yTo) {
            return yTo.mimeType === other.handledMimeType;
        }
        return !!other.kind && yTo.kind.contains(other.kind);
    }
    // Build list of nodes each node yields to
    const yieldsToMap = new Map();
    for (const edit of edits) {
        for (const yTo of edit.yieldTo ?? []) {
            for (const other of edits) {
                if (other === edit) {
                    continue;
                }
                if (yieldsTo(yTo, other)) {
                    let arr = yieldsToMap.get(edit);
                    if (!arr) {
                        arr = [];
                        yieldsToMap.set(edit, arr);
                    }
                    arr.push(other);
                }
            }
        }
    }
    if (!yieldsToMap.size) {
        return Array.from(edits);
    }
    // Topological sort
    const visited = new Set();
    const tempStack = [];
    function visit(nodes) {
        if (!nodes.length) {
            return [];
        }
        const node = nodes[0];
        if (tempStack.includes(node)) {
            console.warn('Yield to cycle detected', node);
            return nodes;
        }
        if (visited.has(node)) {
            return visit(nodes.slice(1));
        }
        let pre = [];
        const yTo = yieldsToMap.get(node);
        if (yTo) {
            tempStack.push(node);
            pre = visit(yTo);
            tempStack.pop();
        }
        visited.add(node);
        return [...pre, node, ...visit(nodes.slice(1))];
    }
    return visit(Array.from(edits));
}

export { createCombinedWorkspaceEdit, sortEditsByYieldTo };
