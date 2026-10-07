import stringWidth from 'fast-string-width';
const ESC = '\x1B';
const CSI = '\x9B';
const END_CODE = 39;
const ANSI_ESCAPE_BELL = '\u0007';
const ANSI_CSI = '[';
const ANSI_OSC = ']';
const ANSI_SGR_TERMINATOR = 'm';
const ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
const GROUP_REGEX = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`, 'y');
const getClosingCode = (openingCode) => {
    if (openingCode >= 30 && openingCode <= 37)
        return 39;
    if (openingCode >= 90 && openingCode <= 97)
        return 39;
    if (openingCode >= 40 && openingCode <= 47)
        return 49;
    if (openingCode >= 100 && openingCode <= 107)
        return 49;
    if (openingCode === 1 || openingCode === 2)
        return 22;
    if (openingCode === 3)
        return 23;
    if (openingCode === 4)
        return 24;
    if (openingCode === 7)
        return 27;
    if (openingCode === 8)
        return 28;
    if (openingCode === 9)
        return 29;
    if (openingCode === 0)
        return 0;
    return undefined;
};
const wrapAnsiCode = (code) => `${ESC}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
const wrapAnsiHyperlink = (url) => `${ESC}${ANSI_ESCAPE_LINK}${url}${ANSI_ESCAPE_BELL}`;
const wrapWord = (rows, word, columns) => {
    const characters = word[Symbol.iterator]();
    let isInsideEscape = false;
    let isInsideLinkEscape = false;
    let lastRow = rows.at(-1);
    let visible = lastRow === undefined ? 0 : stringWidth(lastRow);
    let currentCharacter = characters.next();
    let nextCharacter = characters.next();
    let rawCharacterIndex = 0;
    while (!currentCharacter.done) {
        const character = currentCharacter.value;
        const characterLength = stringWidth(character);
        if (visible + characterLength <= columns) {
            rows[rows.length - 1] += character;
        }
        else {
            rows.push(character);
            visible = 0;
        }
        if (character === ESC || character === CSI) {
            isInsideEscape = true;
            isInsideLinkEscape = word.startsWith(ANSI_ESCAPE_LINK, rawCharacterIndex + 1);
        }
        if (isInsideEscape) {
            if (isInsideLinkEscape) {
                if (character === ANSI_ESCAPE_BELL) {
                    isInsideEscape = false;
                    isInsideLinkEscape = false;
                }
            }
            else if (character === ANSI_SGR_TERMINATOR) {
                isInsideEscape = false;
            }
        }
        else {
            visible += characterLength;
            if (visible === columns && !nextCharacter.done) {
                rows.push('');
                visible = 0;
            }
        }
        currentCharacter = nextCharacter;
        nextCharacter = characters.next();
        rawCharacterIndex += character.length;
    }
    lastRow = rows.at(-1);
    if (!visible && lastRow !== undefined && lastRow.length && rows.length > 1) {
        rows[rows.length - 2] += rows.pop();
    }
};
const stringVisibleTrimSpacesRight = (string) => {
    const words = string.split(' ');
    let last = words.length;
    while (last) {
        if (stringWidth(words[last - 1])) {
            break;
        }
        last--;
    }
    if (last === words.length) {
        return string;
    }
    return words.slice(0, last).join(' ') + words.slice(last).join('');
};
const exec = (string, columns, options = {}) => {
    if (options.trim !== false && string.trim() === '') {
        return '';
    }
    let returnValue = '';
    let escapeCode;
    let escapeUrl;
    const words = string.split(' ');
    let rows = [''];
    let rowLength = 0;
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (options.trim !== false) {
            const row = rows.at(-1) ?? '';
            const trimmed = row.trimStart();
            if (row.length !== trimmed.length) {
                rows[rows.length - 1] = trimmed;
                rowLength = stringWidth(trimmed);
            }
        }
        if (index !== 0) {
            if (rowLength >= columns &&
                (options.wordWrap === false || options.trim === false)) {
                rows.push('');
                rowLength = 0;
            }
            if (rowLength || options.trim === false) {
                rows[rows.length - 1] += ' ';
                rowLength++;
            }
        }
        const wordLength = stringWidth(word);
        if (options.hard && wordLength > columns) {
            const remainingColumns = columns - rowLength;
            const breaksStartingThisLine = 1 + Math.floor((wordLength - remainingColumns - 1) / columns);
            const breaksStartingNextLine = Math.floor((wordLength - 1) / columns);
            if (breaksStartingNextLine < breaksStartingThisLine) {
                rows.push('');
            }
            wrapWord(rows, word, columns);
            rowLength = stringWidth(rows.at(-1) ?? '');
            continue;
        }
        if (rowLength + wordLength > columns && rowLength && wordLength) {
            if (options.wordWrap === false && rowLength < columns) {
                wrapWord(rows, word, columns);
                rowLength = stringWidth(rows.at(-1) ?? '');
                continue;
            }
            rows.push('');
            rowLength = 0;
        }
        if (rowLength + wordLength > columns && options.wordWrap === false) {
            wrapWord(rows, word, columns);
            rowLength = stringWidth(rows.at(-1) ?? '');
            continue;
        }
        rows[rows.length - 1] += word;
        rowLength += wordLength;
    }
    if (options.trim !== false) {
        rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
    }
    const preString = rows.join('\n');
    let inSurrogate = false;
    for (let i = 0; i < preString.length; i++) {
        const character = preString[i];
        returnValue += character;
        if (!inSurrogate) {
            inSurrogate = character >= '\ud800' && character <= '\udbff';
            if (inSurrogate) {
                continue;
            }
        }
        else {
            inSurrogate = false;
        }
        if (character === ESC || character === CSI) {
            GROUP_REGEX.lastIndex = i + 1;
            const groupsResult = GROUP_REGEX.exec(preString);
            const groups = groupsResult?.groups;
            if (groups?.code !== undefined) {
                const code = Number.parseFloat(groups.code);
                escapeCode = code === END_CODE ? undefined : code;
            }
            else if (groups?.uri !== undefined) {
                escapeUrl = groups.uri.length === 0 ? undefined : groups.uri;
            }
        }
        if (preString[i + 1] === '\n') {
            if (escapeUrl) {
                returnValue += wrapAnsiHyperlink('');
            }
            const closingCode = escapeCode ? getClosingCode(escapeCode) : undefined;
            if (escapeCode && closingCode) {
                returnValue += wrapAnsiCode(closingCode);
            }
        }
        else if (character === '\n') {
            if (escapeCode && getClosingCode(escapeCode)) {
                returnValue += wrapAnsiCode(escapeCode);
            }
            if (escapeUrl) {
                returnValue += wrapAnsiHyperlink(escapeUrl);
            }
        }
    }
    return returnValue;
};
const CRLF_OR_LF = /\r?\n/;
export function wrapAnsi(string, columns, options) {
    return String(string)
        .normalize()
        .split(CRLF_OR_LF)
        .map((line) => exec(line, columns, options))
        .join('\n');
}
//# sourceMappingURL=main.js.map