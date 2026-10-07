import { FileType } from '../htmlLanguageTypes.js';
import { startsWith } from '../utils/strings.js';
import { Range, TextEdit, CompletionItemKind, Position } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class PathCompletionParticipant {
    constructor(dataManager, readDirectory) {
        this.dataManager = dataManager;
        this.readDirectory = readDirectory;
        this.atributeCompletions = [];
    }
    onHtmlAttributeValue(context) {
        if (this.dataManager.isPathAttribute(context.tag, context.attribute)) {
            this.atributeCompletions.push(context);
        }
    }
    async computeCompletions(document, documentContext) {
        const result = { items: [], isIncomplete: false };
        for (const attributeCompletion of this.atributeCompletions) {
            const fullValue = stripQuotes(document.getText(attributeCompletion.range));
            if (isCompletablePath(fullValue)) {
                if (fullValue === '.' || fullValue === '..') {
                    result.isIncomplete = true;
                }
                else {
                    const replaceRange = pathToReplaceRange(attributeCompletion.value, fullValue, attributeCompletion.range);
                    const suggestions = await this.providePathSuggestions(attributeCompletion.value, replaceRange, document, documentContext);
                    for (const item of suggestions) {
                        result.items.push(item);
                    }
                }
            }
        }
        return result;
    }
    async providePathSuggestions(valueBeforeCursor, replaceRange, document, documentContext) {
        const valueBeforeLastSlash = valueBeforeCursor.substring(0, valueBeforeCursor.lastIndexOf('/') + 1); // keep the last slash
        let parentDir = documentContext.resolveReference(valueBeforeLastSlash || '.', document.uri);
        if (parentDir) {
            try {
                const result = [];
                const infos = await this.readDirectory(parentDir);
                for (const [name, type] of infos) {
                    // Exclude paths that start with `.`
                    if (name.charCodeAt(0) !== CharCode_dot) {
                        result.push(createCompletionItem(name, type === FileType.Directory, replaceRange));
                    }
                }
                return result;
            }
            catch (e) {
                // ignore
            }
        }
        return [];
    }
}
const CharCode_dot = '.'.charCodeAt(0);
function stripQuotes(fullValue) {
    if (startsWith(fullValue, `'`) || startsWith(fullValue, `"`)) {
        return fullValue.slice(1, -1);
    }
    else {
        return fullValue;
    }
}
function isCompletablePath(value) {
    if (startsWith(value, 'http') || startsWith(value, 'https') || startsWith(value, '//')) {
        return false;
    }
    return true;
}
function pathToReplaceRange(valueBeforeCursor, fullValue, range) {
    let replaceRange;
    const lastIndexOfSlash = valueBeforeCursor.lastIndexOf('/');
    if (lastIndexOfSlash === -1) {
        replaceRange = shiftRange(range, 1, -1);
    }
    else {
        // For cases where cursor is in the middle of attribute value, like <script src="./s|rc/test.js">
        // Find the last slash before cursor, and calculate the start of replace range from there
        const valueAfterLastSlash = fullValue.slice(lastIndexOfSlash + 1);
        const startPos = shiftPosition(range.end, -1 - valueAfterLastSlash.length);
        // If whitespace exists, replace until there is no more
        const whitespaceIndex = valueAfterLastSlash.indexOf(' ');
        let endPos;
        if (whitespaceIndex !== -1) {
            endPos = shiftPosition(startPos, whitespaceIndex);
        }
        else {
            endPos = shiftPosition(range.end, -1);
        }
        replaceRange = Range.create(startPos, endPos);
    }
    return replaceRange;
}
function createCompletionItem(p, isDir, replaceRange) {
    if (isDir) {
        p = p + '/';
        return {
            label: p,
            kind: CompletionItemKind.Folder,
            textEdit: TextEdit.replace(replaceRange, p),
            command: {
                title: 'Suggest',
                command: 'editor.action.triggerSuggest'
            }
        };
    }
    else {
        return {
            label: p,
            kind: CompletionItemKind.File,
            textEdit: TextEdit.replace(replaceRange, p)
        };
    }
}
function shiftPosition(pos, offset) {
    return Position.create(pos.line, pos.character + offset);
}
function shiftRange(range, startOffset, endOffset) {
    const start = shiftPosition(range.start, startOffset);
    const end = shiftPosition(range.end, endOffset);
    return Range.create(start, end);
}

export { PathCompletionParticipant };
