/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Range, Position } from '../cssLanguageTypes';
import { css_beautify } from '../beautify/beautify-css';
import { repeat } from '../utils/strings';
export function format(document, range, options) {
    let value = document.getText();
    let includesEnd = true;
    let initialIndentLevel = 0;
    let inRule = false;
    const tabSize = options.tabSize || 4;
    if (range) {
        let startOffset = document.offsetAt(range.start);
        // include all leading whitespace iff at the beginning of the line
        let extendedStart = startOffset;
        while (extendedStart > 0 && isWhitespace(value, extendedStart - 1)) {
            extendedStart--;
        }
        if (extendedStart === 0 || isEOL(value, extendedStart - 1)) {
            startOffset = extendedStart;
        }
        else {
            // else keep at least one whitespace
            if (extendedStart < startOffset) {
                startOffset = extendedStart + 1;
            }
        }
        // include all following whitespace until the end of the line
        let endOffset = document.offsetAt(range.end);
        let extendedEnd = endOffset;
        while (extendedEnd < value.length && isWhitespace(value, extendedEnd)) {
            extendedEnd++;
        }
        if (extendedEnd === value.length || isEOL(value, extendedEnd)) {
            endOffset = extendedEnd;
        }
        range = Range.create(document.positionAt(startOffset), document.positionAt(endOffset));
        // Test if inside a rule
        inRule = isInRule(value, startOffset);
        includesEnd = endOffset === value.length;
        value = value.substring(startOffset, endOffset);
        if (startOffset !== 0) {
            const startOfLineOffset = document.offsetAt(Position.create(range.start.line, 0));
            initialIndentLevel = computeIndentLevel(document.getText(), startOfLineOffset, options);
        }
        if (inRule) {
            value = `{\n${trimLeft(value)}`;
        }
    }
    else {
        range = Range.create(Position.create(0, 0), document.positionAt(value.length));
    }
    const cssOptions = {
        indent_size: tabSize,
        indent_char: options.insertSpaces ? ' ' : '\t',
        end_with_newline: includesEnd && getFormatOption(options, 'insertFinalNewline', false),
        selector_separator_newline: getFormatOption(options, 'newlineBetweenSelectors', true),
        newline_between_rules: getFormatOption(options, 'newlineBetweenRules', true),
        space_around_selector_separator: getFormatOption(options, 'spaceAroundSelectorSeparator', false),
        brace_style: getFormatOption(options, 'braceStyle', 'collapse'),
        indent_empty_lines: getFormatOption(options, 'indentEmptyLines', false),
        max_preserve_newlines: getFormatOption(options, 'maxPreserveNewLines', undefined),
        preserve_newlines: getFormatOption(options, 'preserveNewLines', true),
        wrap_line_length: getFormatOption(options, 'wrapLineLength', undefined),
        eol: '\n'
    };
    let result = css_beautify(value, cssOptions);
    if (inRule) {
        result = trimLeft(result.substring(2));
    }
    if (initialIndentLevel > 0) {
        const indent = options.insertSpaces ? repeat(' ', tabSize * initialIndentLevel) : repeat('\t', initialIndentLevel);
        result = result.split('\n').join('\n' + indent);
        if (range.start.character === 0) {
            result = indent + result; // keep the indent
        }
    }
    return [{
            range: range,
            newText: result
        }];
}
function trimLeft(str) {
    return str.replace(/^\s+/, '');
}
const _CUL = '{'.charCodeAt(0);
const _CUR = '}'.charCodeAt(0);
function isInRule(str, offset) {
    while (offset >= 0) {
        const ch = str.charCodeAt(offset);
        if (ch === _CUL) {
            return true;
        }
        else if (ch === _CUR) {
            return false;
        }
        offset--;
    }
    return false;
}
function getFormatOption(options, key, dflt) {
    if (options && options.hasOwnProperty(key)) {
        const value = options[key];
        if (value !== null) {
            return value;
        }
    }
    return dflt;
}
function computeIndentLevel(content, offset, options) {
    let i = offset;
    let nChars = 0;
    const tabSize = options.tabSize || 4;
    while (i < content.length) {
        const ch = content.charAt(i);
        if (ch === ' ') {
            nChars++;
        }
        else if (ch === '\t') {
            nChars += tabSize;
        }
        else {
            break;
        }
        i++;
    }
    return Math.floor(nChars / tabSize);
}
function isEOL(text, offset) {
    return '\r\n'.indexOf(text.charAt(offset)) !== -1;
}
function isWhitespace(text, offset) {
    return ' \t'.indexOf(text.charAt(offset)) !== -1;
}
