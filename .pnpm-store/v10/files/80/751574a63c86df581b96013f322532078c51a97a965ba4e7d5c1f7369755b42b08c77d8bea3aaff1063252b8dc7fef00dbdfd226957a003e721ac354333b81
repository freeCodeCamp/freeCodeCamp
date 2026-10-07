import { truncate } from './helpers.js';
const stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5" +
    '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]', 'g');
const escapeCharacters = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    "'": "\\'",
    '\\': '\\\\',
};
const hex = 16;
const unicodeLength = 4;
function escape(char) {
    return (escapeCharacters[char] ||
        `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`);
}
export default function inspectString(string, options) {
    if (stringEscapeChars.test(string)) {
        string = string.replace(stringEscapeChars, escape);
    }
    return options.stylize(`'${truncate(string, options.truncate - 2)}'`, 'string');
}
