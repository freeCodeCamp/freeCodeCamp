import { createCustomError } from '../utils/create-custom-error.js';

const MAX_LINE_LENGTH = 100;
const OFFSET_CORRECTION = 60;
const TAB_REPLACEMENT = '    ';

function sourceFragment({ source, line, column, baseLine, baseColumn }, extraLines) {
    function processLines(start, end) {
        return lines
            .slice(start, end)
            .map((line, idx) =>
                String(start + idx + 1).padStart(maxNumLength) + ' |' + line
            ).join('\n');
    }

    const prelines = '\n'.repeat(Math.max(baseLine - 1, 0));
    const precolumns = ' '.repeat(Math.max(baseColumn - 1, 0));
    const lines = (prelines + precolumns + source).split(/\r\n?|\n|\f/);
    const startLine = Math.max(1, line - extraLines) - 1;
    const endLine = Math.min(line + extraLines, lines.length + 1);
    const maxNumLength = Math.max(4, String(endLine).length) + 1;
    let cutLeft = 0;

    // column correction according to replaced tab before column
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;

    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }

    for (let i = startLine; i <= endLine; i++) {
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] =
                (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') +
                lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) +
                (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
        }
    }

    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join('-') + '^',
        processLines(line, endLine)
    ].filter(Boolean)
        .join('\n')
        .replace(/^(\s+\d+\s+\|\n)+/, '')
        .replace(/\n(\s+\d+\s+\|)+$/, '');
}

export function SyntaxError(message, source, offset, line, column, baseLine = 1, baseColumn = 1) {
    const error = Object.assign(createCustomError('SyntaxError', message), {
        source,
        offset,
        line,
        column,
        sourceFragment(extraLines) {
            return sourceFragment({ source, line, column, baseLine, baseColumn }, isNaN(extraLines) ? 0 : extraLines);
        },
        get formattedMessage() {
            return (
                `Parse error: ${message}\n` +
                sourceFragment({ source, line, column, baseLine, baseColumn }, 2)
            );
        }
    });

    return error;
}
