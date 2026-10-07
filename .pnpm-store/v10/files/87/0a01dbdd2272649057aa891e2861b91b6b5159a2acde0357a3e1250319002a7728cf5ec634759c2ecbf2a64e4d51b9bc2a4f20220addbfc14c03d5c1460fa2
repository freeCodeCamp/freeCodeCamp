// Will use the shortest indention as an axis
export const freeText = (text, skipIndentation = false) => {
    if (text instanceof Array) {
        text = text.join('');
    }
    // This will allow inline text generation with external functions, same as ctrl+shift+c
    // As long as we surround the inline text with ==>text<==
    text = text.replace(/( *)==>((?:.|\n)*?)<==/g, (_match, baseIndent, content) => {
        return content
            .split('\n')
            .map(line => `${baseIndent}${line}`)
            .join('\n');
    });
    if (skipIndentation) {
        if (text.trim() === '') {
            return '';
        }
        return text;
    }
    const lines = text.split('\n');
    const minIndent = lines
        .filter(line => line.trim())
        .reduce((minIndent, line) => {
        var _a;
        const currIndent = (_a = line.match(/^ */)) === null || _a === void 0 ? void 0 : _a[0].length;
        if (currIndent == null) {
            return minIndent;
        }
        return currIndent < minIndent ? currIndent : minIndent;
    }, Infinity);
    return lines
        .map(line => line.slice(minIndent))
        .join('\n')
        .trim()
        .replace(/\n +\n/g, '\n\n');
};
// foo_barBaz -> ['foo', 'bar', 'Baz']
export const splitWords = (str) => {
    return str.replace(/[A-Z]/, ' $&').split(/[^a-zA-Z0-9]+/);
};
// upper -> Upper
export const toUpperFirst = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};
// foo-bar-baz -> fooBarBaz
export const toCamelCase = (str) => {
    var _a, _b;
    const words = splitWords(str);
    const first = (_b = (_a = words.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
    const rest = words.map(toUpperFirst);
    return [first, ...rest].join('');
};
