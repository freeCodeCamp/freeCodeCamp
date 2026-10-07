/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { FileType, CompletionItemKind, TextEdit, Range, Position } from '../cssLanguageTypes';
import { startsWith, endsWith } from '../utils/strings';
import { joinPath } from '../utils/resources';
export class PathCompletionParticipant {
    constructor(readDirectory) {
        this.readDirectory = readDirectory;
        this.literalCompletions = [];
        this.importCompletions = [];
    }
    onCssURILiteralValue(context) {
        this.literalCompletions.push(context);
    }
    onCssImportPath(context) {
        this.importCompletions.push(context);
    }
    async computeCompletions(document, documentContext) {
        const result = { items: [], isIncomplete: false };
        for (const literalCompletion of this.literalCompletions) {
            const uriValue = literalCompletion.uriValue;
            const fullValue = stripQuotes(uriValue);
            if (fullValue === '.' || fullValue === '..') {
                result.isIncomplete = true;
            }
            else {
                const items = await this.providePathSuggestions(uriValue, literalCompletion.position, literalCompletion.range, document, documentContext);
                for (let item of items) {
                    result.items.push(item);
                }
            }
        }
        for (const importCompletion of this.importCompletions) {
            const pathValue = importCompletion.pathValue;
            const fullValue = stripQuotes(pathValue);
            if (fullValue === '.' || fullValue === '..') {
                result.isIncomplete = true;
            }
            else {
                let suggestions = await this.providePathSuggestions(pathValue, importCompletion.position, importCompletion.range, document, documentContext);
                if (document.languageId === 'scss') {
                    suggestions.forEach(s => {
                        if (startsWith(s.label, '_') && endsWith(s.label, '.scss')) {
                            if (s.textEdit) {
                                s.textEdit.newText = s.label.slice(1, -5);
                            }
                            else {
                                s.label = s.label.slice(1, -5);
                            }
                        }
                    });
                }
                for (let item of suggestions) {
                    result.items.push(item);
                }
            }
        }
        return result;
    }
    async providePathSuggestions(pathValue, position, range, document, documentContext) {
        const fullValue = stripQuotes(pathValue);
        const isValueQuoted = startsWith(pathValue, `'`) || startsWith(pathValue, `"`);
        const valueBeforeCursor = isValueQuoted
            ? fullValue.slice(0, position.character - (range.start.character + 1))
            : fullValue.slice(0, position.character - range.start.character);
        const currentDocUri = document.uri;
        const fullValueRange = isValueQuoted ? shiftRange(range, 1, -1) : range;
        const replaceRange = pathToReplaceRange(valueBeforeCursor, fullValue, fullValueRange);
        const valueBeforeLastSlash = valueBeforeCursor.substring(0, valueBeforeCursor.lastIndexOf('/') + 1); // keep the last slash
        let parentDir = documentContext.resolveReference(valueBeforeLastSlash || '.', currentDocUri);
        if (parentDir) {
            try {
                const result = [];
                const infos = await this.readDirectory(parentDir);
                for (const [name, type] of infos) {
                    // Exclude paths that start with `.`
                    if (name.charCodeAt(0) !== CharCode_dot && (type === FileType.Directory || joinPath(parentDir, name) !== currentDocUri)) {
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
function pathToReplaceRange(valueBeforeCursor, fullValue, fullValueRange) {
    let replaceRange;
    const lastIndexOfSlash = valueBeforeCursor.lastIndexOf('/');
    if (lastIndexOfSlash === -1) {
        replaceRange = fullValueRange;
    }
    else {
        // For cases where cursor is in the middle of attribute value, like <script src="./s|rc/test.js">
        // Find the last slash before cursor, and calculate the start of replace range from there
        const valueAfterLastSlash = fullValue.slice(lastIndexOfSlash + 1);
        const startPos = shiftPosition(fullValueRange.end, -valueAfterLastSlash.length);
        // If whitespace exists, replace until it
        const whitespaceIndex = valueAfterLastSlash.indexOf(' ');
        let endPos;
        if (whitespaceIndex !== -1) {
            endPos = shiftPosition(startPos, whitespaceIndex);
        }
        else {
            endPos = fullValueRange.end;
        }
        replaceRange = Range.create(startPos, endPos);
    }
    return replaceRange;
}
function createCompletionItem(name, isDir, replaceRange) {
    if (isDir) {
        name = name + '/';
        return {
            label: escapePath(name),
            kind: CompletionItemKind.Folder,
            textEdit: TextEdit.replace(replaceRange, escapePath(name)),
            command: {
                title: 'Suggest',
                command: 'editor.action.triggerSuggest'
            }
        };
    }
    else {
        return {
            label: escapePath(name),
            kind: CompletionItemKind.File,
            textEdit: TextEdit.replace(replaceRange, escapePath(name))
        };
    }
}
// Escape https://www.w3.org/TR/CSS1/#url
function escapePath(p) {
    return p.replace(/(\s|\(|\)|,|"|')/g, '\\$1');
}
function shiftPosition(pos, offset) {
    return Position.create(pos.line, pos.character + offset);
}
function shiftRange(range, startOffset, endOffset) {
    const start = shiftPosition(range.start, startOffset);
    const end = shiftPosition(range.end, endOffset);
    return Range.create(start, end);
}
