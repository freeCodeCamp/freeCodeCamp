// Mapping of Unicode accent characters to their LaTeX equivalent in text and
// math mode (when they exist).
// This exports a CommonJS module, allowing to be required in unicodeSymbols
// without transpiling.
/** @type {Record<string, {text: string, math?: string}>} */
const unicodeAccents = {
    '\u0301': {text: "\\'", math: '\\acute'},
    '\u0300': {text: '\\`', math: '\\grave'},
    '\u0308': {text: '\\"', math: '\\ddot'},
    '\u0303': {text: '\\~', math: '\\tilde'},
    '\u0304': {text: '\\=', math: '\\bar'},
    '\u0306': {text: '\\u', math: '\\breve'},
    '\u030c': {text: '\\v', math: '\\check'},
    '\u0302': {text: '\\^', math: '\\hat'},
    '\u0307': {text: '\\.', math: '\\dot'},
    '\u030a': {text: '\\r', math: '\\mathring'},
    '\u030b': {text: '\\H'},
    '\u0327': {text: '\\c'},
};

module.exports = unicodeAccents;
